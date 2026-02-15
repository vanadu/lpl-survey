"use client";
// Production SurveyComponentMaster_Brevo: saves to local disk AND sends via Brevo.
// Uses the merged JSON file created by merge-surveys.js.

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";

import prefillData from "../../helpers/prefill.json";
import masterSurvey from "../../data/master-survey.json";

import registry from "../../helpers/registry.generated.json";
import { attachPanelDataNameStamper } from "../../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "../CustomClasses";
import { attachSurveySyncHandlers } from "../../../helpers/syncSelectionValues";

/**
 * ============================================================================
 * SurveyComponentMaster — Architecture Overview
 * ============================================================================
 *
 * This component has three clearly separated layers:
 *
 * 1. Survey Model Lifecycle
 *    - Creates and owns the SurveyJS Model instance
 *    - Attaches DOM stamping + styling handlers before first render
 *    - Applies theme and baseline configuration
 *
 * 2. UI Behavior Rules
 *    - Enforces consent gating
 *    - Controls navigation behavior
 *    - Prefills survey data
 *    - Handles submission
 *
 * 3. Styling & DOM Instrumentation Layer
 *    - Adds stable data-name attributes to panels
 *    - Applies layout/style directives to panels and questions
 *    - Provides CSS and testing hooks
 *
 * These layers are intentionally separated so that:
 * - Survey rendering remains deterministic
 * - UI logic is easy to reason about
 * - Styling behavior is centralized and predictable
 *
 * ============================================================================
 */

/**
 * Applies a single style directive to a SurveyJS-rendered element.
 * Directives are produced by getStyleDirectives(questionOrPanel).
 *
 * The "target" concept lets you attach a class to:
 *  - a question’s overall root element ("default")
 *  - the input/control wrapper ("control") so styles hit the actual widget
 *  - the choice list container ("items") for checkbox/radio sets, etc.
 */
function applyDirective(htmlElement, { target, className }) {
  if (!htmlElement || !className) return;

  // ✅ NEW: question-level styles must attach to a non-replaced element
  // so ::after can render. Do NOT crawl to input/select here.
  if (target === "question") {
    htmlElement.classList.add(className);
    // console.log('htmlElement :>> ');
    // console.log(htmlElement);
    return;
  }

  if (target === "items") {
    const node =
      htmlElement.querySelector("fieldset.sd-selectbase") ||
      htmlElement.querySelector(".sd-selectbase") ||
      htmlElement;
    node.classList.add(className);
    console.log("ITEMS");
    console.log('htmlElement :>> ');
    console.log(htmlElement);
    console.log('className :>> ');
    console.log(className);
    return;
  }

  if (target === "control") {
    const dropdownWrapper = htmlElement.querySelector(".sd-input.sd-dropdown");
    console.log("dropdownWrapper", dropdownWrapper);
    if (dropdownWrapper) {
      dropdownWrapper.classList.add(className);

      dropdownWrapper
        .querySelectorAll(`.${className}`)
        .forEach((n) => n !== dropdownWrapper && n.classList.remove(className));
      return;
    }

    const raw = htmlElement.querySelector("input, textarea, select");
    const wrapper =
      raw?.closest(".sd-input") ||
      htmlElement.querySelector(".sd-input") ||
      htmlElement;

    wrapper.classList.add(className);

    wrapper
      .querySelectorAll(`.${className}`)
      .forEach((n) => n !== wrapper && n.classList.remove(className));

    return;
  }

  htmlElement.classList.add(className);
}

/**
 * Applies an array of directives to a given DOM element.
 */
function applyDirectives(htmlElement, directives) {
  directives.forEach((d) => applyDirective(htmlElement, d));
}

export default function SurveyComponentMaster_Brevo() {
  /**
   * Consent gating constants:
   * - CONSENT_QUESTION is the question name used to capture consent.
   * - CONSENT_PAGE_INDEX is the 0-based index of the page that contains it.
   */
  const CONSENT_QUESTION = "LandingConsent";
  const CONSENT_PAGE_INDEX = 0;

  /**
   * ==========================================================================
   * LAYER 1 — Survey Model Lifecycle
   * ==========================================================================
   *
   * This initializer creates the SurveyJS model and attaches all render-time
   * handlers BEFORE the first <Survey /> render.
   *
   * Why this matters:
   * SurveyJS fires onAfterRenderPanel/onAfterRenderQuestion during initial
   * render. If handlers are registered later (e.g., in useEffect), early
   * panels/questions may never be stamped or styled.
   *
   * ⚠️ React Strict Mode gotcha (development only)
   * ---------------------------------------------
   * In React Strict Mode, React intentionally mounts → unmounts → remounts
   * components in development to detect side effects.
   *
   * This is safe here because:
   *   - Each mount creates a fresh Survey model instance
   *   - Handlers are attached only during model creation
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
     *
     * This layer provides:
     *   - CSS hooks
     *   - Automated test selectors
     *   - DOM inspection stability
     */

    /**
     * Handler: Panel data-name stamper
     *
     * Purpose: Adds a stable `data-name="<PanelName>"` attribute to panel DOM nodes.
     * This is used for:
     *  - CSS hooks
     *  - automated test selectors
     *  - debug/inspection in the DOM
     *
     * Must be attached before first render, or early panels can be missed.
     */
    attachPanelDataNameStamper(surveyModel, { registry });

    /**
     * Handler: onAfterRenderPanel
     *
     * Purpose: After SurveyJS renders a panel, apply any style directives defined
     * for that panel (layout helpers, wrappers, etc.).
     *
     * Note: options.panel is the SurveyJS panel model; options.htmlElement is the DOM root.
     */
    surveyModel.onAfterRenderPanel.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.panel));
    });

    /**
     * Handler: onAfterRenderQuestion
     *
     * Purpose: After SurveyJS renders a question, apply any style directives defined
     * for that question (control wrappers, item containers, etc.).
     *
     * Note: options.question is the SurveyJS question model; options.htmlElement is the DOM root.
     */
    surveyModel.onAfterRenderQuestion.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.question));
    });

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

  /**
   * Handler: onValidatePage (consent enforcement)
   *
   * Purpose: Prevent leaving the Landing/Consent page unless LandingConsent === "Yes".
   * This is a hard gate; it blocks navigation by pushing a validation error.
   *
   * Why onValidatePage: It’s the canonical SurveyJS hook for stopping navigation
   * due to business rules. It catches Next clicks, programmatic navigation, etc.
   */
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

  /**
   * Consent auto-advance behavior:
   * When consent is accepted, enable navigation and move forward
   * without requiring an extra click.
   */
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
   * Prefill behavior:
   * Hydrates the survey with saved/seeded data.
   *
   * This can influence visibility rules and conditional logic.
   *
   * Note: Keeping it in an effect avoids doing it during component render.
   */
  useEffect(() => {
    if (prefillData) {
      survey.data = prefillData;
    }
  }, [survey]);

  /**
   * Submission pipeline:
   * Transforms survey data and sends it to the backend.
   *
   * Server-side preSubmitTransform performs the final normalization step.
   */
  const handleComplete = useCallback(async (sender) => {
    try {
      const submittedAt = new Date().toISOString();

      const payload = {
        ...sender.data,
        submittedAt,
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
        alert(`Error saving survey: ${data.message || "Unknown error"}`);
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
