"use client";
// Production SurveyComponentMaster_Brevo that uses the merged JSON file created by merge-surveys.js.

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";

import prefillData from "../../helpers/prefill.json";
import masterSurvey from "../../data/master-survey.json";

import registry from "../../helpers/registry.generated.json";
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "./CustomClasses";
import { attachSurveySyncHandlers } from "../../helpers/syncSelectionValues";

/**
 * ============================================================================
 * SurveyComponentMaster — Architecture Overview
 * ============================================================================
 *
 * This component has three clearly separated layers:
 *
 * 1. Survey Model Lifecycle
 *    - Creates and owns the SurveyJS Model instance
 *    - Applies theme and default settings
 *
 * 2. UI Behavior Rules
 *    - Consent enforcement & auto-advance
 *
 * 2.5 Prefill Sync Rules (IMPORTANT)
 *    - Uses attachSurveySyncHandlers from helpers/syncSelectionValues.js
 *    - Syncs select answers based on prior selections
 *
 * 3. Styling & DOM Instrumentation
 *    - data-name stamping on panels
 *    - class/style directives based on registry
 *
 * Submission:
 *  - Sends RAW SurveyJS answers to /api/save-survey (server runs preSubmitTransform using surveySchema.json)
 *  - Sends RAW SurveyJS answers to /api/sendEmail (Brevo)
 */

// Consent enforcement constants
const CONSENT_PAGE_INDEX = 0;
const CONSENT_QUESTION = "LandingConsent";

function applyDirectives(root, directives) {
  if (!root || !directives) return;

  // Directives can be:
  // - { className: "..." }
  // - { items: [ { selector: "...", className: "..." }, ... ] }
  // - { items: [ { addClass: "...", selector: "..." } ] } etc.
  //
  // getStyleDirectives() returns a normalized list in your CustomClasses.js contract,
  // so this helper just applies them.

  if (directives.className) {
    root.classList.add(directives.className);
  }

  if (Array.isArray(directives.items)) {
    directives.items.forEach((item) => {
      if (!item) return;

      const selector = item.selector;
      const className = item.className || item.addClass;

      if (!selector || !className) return;

      // Apply to all matching descendants
      root.querySelectorAll(selector).forEach((el) => {
        el.classList.add(className);
      });
    });
  }
}

export default function SurveyComponentMaster_Brevo() {
  /**
   * ==========================================================================
   * LAYER 1 — Survey Model Lifecycle
   * ==========================================================================
   *
   * Ownership rules:
   * - Survey Model is created once per component instance
   * - Handlers are attached only during model creation
   *
   * IMPORTANT:
   * If you ever reuse a shared Survey model instance or attach handlers
   * outside this initializer, you can accidentally duplicate handlers.
   *
   * Symptoms of duplicated handlers:
   *   - Classes applied twice
   *   - Console logs firing twice
   *   - Navigation or validation running multiple times
   *
   * Rule of thumb:
   * Treat the Survey model as component-owned state.
   */
  const [survey] = useState(() => {
    const surveyModel = new Model(masterSurvey);

    // Theme setup
    surveyModel.applyTheme(SharpLight);

    // Initial UX: hide nav on Landing until consent is given
    surveyModel.showNavigationButtons = false;

    /**
     * ----------------------------------------------------------------------
     * LAYER 3 — Styling & DOM Instrumentation
     * ----------------------------------------------------------------------
     *
     * These handlers run after SurveyJS renders panels/questions.
     *
     * Responsibilities:
     *   • Stamp panels with stable data-name attributes
     *   • Apply layout/style directives from the registry
     */

    // Stable `data-name="<PanelName>"` on panels
    attachPanelDataNameStamper(surveyModel, { registry });

    // Apply style directives for panels
    surveyModel.onAfterRenderPanel.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.panel));
    });

    // Apply style directives for questions
    surveyModel.onAfterRenderQuestion.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.question));
    });

    // Prefill (if you still use it)
    // NOTE: If prefill.json contains keys that aren't in the survey, SurveyJS ignores them.
    if (prefillData && typeof prefillData === "object") {
      surveyModel.data = { ...prefillData };
    }

    return surveyModel;
  });

  const [isCompleted, setIsCompleted] = useState(false);

  /**
   * ==========================================================================
   * LAYER 2 — UI Behavior Rules
   * ==========================================================================
   *
   * Consent enforcement:
   * Blocks navigation away from the landing page unless the user agrees.
   */

  // Prevent leaving landing page without consent
  useEffect(() => {
    function handleValidatePage(sender, options) {
      if (sender.currentPageNo !== CONSENT_PAGE_INDEX) return;

      if (sender.getValue(CONSENT_QUESTION) !== "Yes") {
        options.errors.push({
          text: "You must agree to the terms to continue.",
        });
      }
    }

    survey.onValidatePage.add(handleValidatePage);
    return () => survey.onValidatePage.remove(handleValidatePage);
  }, [survey]);

  // Auto-advance when consent is accepted
  useEffect(() => {
    function handleConsentChange(sender, options) {
      if (
        sender.currentPageNo === CONSENT_PAGE_INDEX &&
        options.name === CONSENT_QUESTION &&
        options.value === "Yes"
      ) {
        sender.showNavigationButtons = true;
        sender.nextPage();
      }
    }

    survey.onValueChanged.add(handleConsentChange);
    return () => survey.onValueChanged.remove(handleConsentChange);
  }, [survey]);

  /**
   * ==========================================================================
   * LAYER 2.5 — Prefill Sync Rules
   * ==========================================================================
   *
   * Purpose:
   * Keep certain downstream answers automatically in sync with upstream selections,
   * so users don't have to re-enter the same information in multiple places.
   *
   * Implementation:
   * attachSurveySyncHandlers (helpers/syncSelectionValues.js) listens for changes
   * and propagates values according to the mapping below.
   */
  useEffect(() => {
    if (!survey) return;

    return attachSurveySyncHandlers(survey, {
      checkboxToDropdown: [
        { source: "InfoSourcesTypes", target: "InfoSourcesBestSource" },
      ],
      checkboxToCheckbox: [
        {
          source: "EarlyOtherConditionsType",
          target: "ConclusionOtherConditions",
          options: {
            onlyIfEmpty: true,
            copyOther: true,
          },
        },
      ],
    });
  }, [survey]);

  /**
   * Submission pipeline:
   * - Send RAW survey answers to /api/save-survey (server applies preSubmitTransform using surveySchema.json)
   * - Send RAW survey answers to /api/sendEmail (Brevo)
   *
   * IMPORTANT:
   * Do NOT run preSubmitTransform in the browser. It relies on the curated build-schema output
   * (surveySchema.json) and should remain server-side to avoid drift and duplication.
   */
  const handleComplete = useCallback(async (sender) => {
    try {
      // Use a single timestamp for save + email correlation
      const completedAt = new Date().toISOString();

      const payload = {
        ...sender.data,
        // Server-side preSubmitTransform expects completedAt for filename stamping
        completedAt,
        // Keep submittedAt for any legacy/other consumers (harmless)
        submittedAt: completedAt,
        source: "master-brevo",
      };

      // 1) Save to local disk (authoritative archive)
      const saveResponse = await fetch("/api/save-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!saveResponse.ok) {
        const data = await saveResponse.json().catch(() => ({}));
        alert(
          `Error saving survey: ${data.message || data.error || "Unknown error"}`
        );
        return;
      }

      // 2) Send via Brevo (best-effort notification)
      const emailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!emailResponse.ok) {
        const emailData = await emailResponse.json().catch(() => ({}));
        alert(
          `Survey saved, but failed to send email: ${
            emailData.error || emailData.message || "Unknown error"
          }`
        );
        setIsCompleted(true); // still mark completed if save worked
        return;
      }

      // ✅ Everything succeeded
      setIsCompleted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed. See console for details.");
    }
  }, []);

  // Completion UX
  if (isCompleted) {
    return <h2>✅ Survey submitted successfully!</h2>;
  }

  return <Survey model={survey} onComplete={handleComplete} />;
}
