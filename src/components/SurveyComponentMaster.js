"use client";
// Production SurveyComponentMaster_Brevo that uses the merged JSON file created by merge-surveys.js.

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
// !VA Is this necessary here
import { useRouter } from "next/router";

// !VA Survey imports
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
 *  - Sends RAW SurveyJS answers to /api/submit-survey (Brevo)
 */

// Consent enforcement constants
const CONSENT_PAGE_INDEX = 0;
const CONSENT_QUESTION = "LandingConsent";

/**
 * Apply ONE directive using the BACKUP contract:
 *   { target: "question" | "control" | "items" | "root", className: "..." }
 *
 * This function is the critical piece for SurveyJS DOM targeting:
 * - dropdowns need .sd-input.sd-dropdown
 * - text inputs need the closest .sd-input wrapper
 * - checkbox/radiogroup containers need .sd-selectbase / fieldset.sd-selectbase
 * - separators / ::after effects often need the question root
 */
function applyDirective(htmlElement, directive) {
  if (!htmlElement || !directive) return;

  const className = directive.className || directive.addClass;
  if (!className) return;

  const target = directive.target || "root";

  // Apply to question root (needed for ::after separators because inputs are replaced elements)
  if (target === "question") {
    htmlElement.classList.add(className);
    return;
  }

  // Apply to checkbox/radiogroup container
  if (target === "items") {
    const itemsEl =
      htmlElement.querySelector(".sd-selectbase") ||
      htmlElement.querySelector("fieldset.sd-selectbase");
    if (itemsEl) itemsEl.classList.add(className);
    return;
  }

  // Apply to control wrapper (dropdown/input wrapper)
  if (target === "control") {
    // Dropdown wrapper
    const dropdownWrapper = htmlElement.querySelector(".sd-input.sd-dropdown");
    if (dropdownWrapper) {
      dropdownWrapper.classList.add(className);
      return;
    }

    // Other inputs: find input/textarea/select then climb to the .sd-input wrapper
    const inputEl = htmlElement.querySelector("input, textarea, select");
    if (inputEl) {
      const wrapper = inputEl.closest(".sd-input");
      if (wrapper) wrapper.classList.add(className);
      return;
    }

    // Fallback
    htmlElement.classList.add(className);
    return;
  }

  // Default: apply to root
  htmlElement.classList.add(className);
}

/**
 * Apply MANY directives. Supports BOTH contracts:
 *
 * A) BACKUP contract (array):
 *    [ { target, className }, ... ]
 *
 * B) Current contract (object):
 *    { className?: "...", items?: [ { selector, className/addClass }, ... ] }
 *    (and also supports embedded target-based items)
 */
function applyDirectives(root, directives) {
  if (!root || !directives) return;

  // A) BACKUP-style: array of directives
  if (Array.isArray(directives)) {
    directives.forEach((d) => applyDirective(root, d));
    return;
  }

  // B) Current-style: object directives
  if (directives.className) {
    root.classList.add(directives.className);
  }

  if (Array.isArray(directives.items)) {
    directives.items.forEach((item) => {
      if (!item) return;

      // Selector-based items
      if (item.selector && (item.className || item.addClass)) {
        const cls = item.className || item.addClass;
        root.querySelectorAll(item.selector).forEach((el) => el.classList.add(cls));
        return;
      }

      // Target-based items (BACKUP-style embedded)
      if (item.target && (item.className || item.addClass)) {
        applyDirective(root, item);
      }
    });
  }
}

export default function SurveyComponentMaster() {

  const router = useRouter();

  /**
   * ==========================================================================
   * LAYER 1 — Survey Model Lifecycle
   * ==========================================================================
   */
  const [survey] = useState(() => {
    const surveyModel = new Model(masterSurvey);
    // !VA Turn off the default success page after submit
    surveyModel.showCompletedPage = false;


    // Theme setup
    surveyModel.applyTheme(SharpLight);

    // Initial UX: hide nav on Landing until consent is given
    surveyModel.showNavigationButtons = false;

    /**
     * ----------------------------------------------------------------------
     * LAYER 3 — Styling & DOM Instrumentation
     * ----------------------------------------------------------------------
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

    // Prefill
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
   */
  useEffect(() => {
    if (!survey) return;
    console.log("ATTACHING SYNC HANDLERS", !!survey);

    console.log(
      "SYNC CHECK source exists?",
      !!survey.getQuestionByName("InfoSourcesTypes"),
      "target exists?",
      !!survey.getQuestionByName("InfoSourcesBestSource")
    );

    console.log(
      "SYNC CHECK source2 exists?",
      !!survey.getQuestionByName("EarlyOtherConditionsType"),
      "target2 exists?",
      !!survey.getQuestionByName("ConclusionOtherConditions")
    );

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
   * - Send RAW survey answers to /api/submit-survey (Brevo)
   */
  // const handleComplete = useCallback(async (sender) => {
  //   try {
  //     // Use a single timestamp for save + email correlation
  //     const completedAt = new Date().toISOString();

  //     const payload = {
  //       ...sender.data,
  //       // Server-side preSubmitTransform expects completedAt for filename stamping
  //       completedAt,
  //       // Keep submittedAt for any legacy/other consumers (harmless)
  //       submittedAt: completedAt,
  //       source: "master-brevo",
  //     };

  //     // 1) Save to local disk (authoritative archive)
  //     const saveResponse = await fetch("/api/save-survey", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!saveResponse.ok) {
  //       const data = await saveResponse.json().catch(() => ({}));
  //       alert(
  //         `Error saving survey: ${data.message || data.error || "Unknown error"}`
  //       );
  //       return;
  //     }

  //     // 2) Send via Brevo (best-effort notification)
  //     // !VA Testing...
  //     // console.log("About to call email endpoint…");

  //     const emailResponse = await fetch("/api/submit-survey", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!emailResponse.ok) {
  //       const emailData = await emailResponse.json().catch(() => ({}));
  //       alert(
  //         `Survey saved, but failed to send email: ${
  //           emailData.error || emailData.message || "Unknown error"
  //         }`
  //       );
  //       setIsCompleted(true); // still mark completed if save worked
  //       return;
  //     }

  //     // ✅ Everything succeeded
  //     setIsCompleted(true);
  //   } catch (err) {
  //     console.error("Submission failed:", err);
  //     alert("Submission failed. See console for details.");
  //   }
  // }, []);

const handleComplete = useCallback(
  async (sender) => {
    try {
      // Use a single timestamp for save + correlation
      const completedAt = new Date().toISOString();

      const payload = {
        ...sender.data,
        completedAt,
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
        alert(`Error saving survey: ${data.message || data.error || "Unknown error"}`);
        return;
      }

      // 2) Brevo email POST DISABLED (intentionally bypassed during redirect testing)
      //    This keeps UX consistent: redirect occurs whether or not email is enabled.
      // const emailResponse = await fetch("/api/submit-survey", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      // if (!emailResponse.ok) {
      //   const emailData = await emailResponse.json().catch(() => ({}));
      //   alert(
      //     `Survey saved, but failed to send email: ${
      //       emailData.error || emailData.message || "Unknown error"
      //     }`
      //   );
      // }

      // 3) Redirect to dedicated success page after local save succeeds
      router.push("/submit-success");
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed. See console for details.");
    }
  },
  [router]
);





  // Completion UX
  // !VA Disabled because now redirects to submit-success.js
  // if (isCompleted) {
  //   return <h2>✅ Survey submitted successfully!</h2>;
  // }

  return <Survey model={survey} onComplete={handleComplete} />;
}
