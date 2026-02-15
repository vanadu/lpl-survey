"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import prefillData from "../../helpers/prefill.json";
import registry from "../../helpers/registry.generated.json";
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "./CustomClasses";
import { attachSurveySyncHandlers } from "../../helpers/syncSelectionValues";


import LANDING from "../../data/page-content/00_LANDING-page.json";
import USER_INFO from "../../data/page-content/01_USER_INFO-page.json";
import CMPN_INFO from "../../data/page-content/02_CMPN_INFO-page.json";
import INFO_SOURCES from "../../data/page-content/03_INFO_SOURCES-page.json";
import INTUBATION_HISTORY from "../../data/page-content/04_INTUBATION_HISTORY-page.json";
import BREATHING_CRISIS from "../../data/page-content/05_BREATHING_CRISIS-page.json";
import EARLY_SYMPTOMS from "../../data/page-content/06_EARLY_SYMPTOMS-page.json";
import PRIMARY_DURATION from "../../data/page-content/07_PRIMARY_DURATION-page.json";
import PRIMARY_VET from "../../data/page-content/08_PRIMARY_VET-page.json";
import DIAGNOSIS from "../../data/page-content/09_DIAGNOSIS-page.json";
import TREATMENT_STATUS from "../../data/page-content/10_TREATMENT_STATUS-page.json";
import TREATMENT_FACTORS from "../../data/page-content/11_TREATMENT_FACTORS-page.json";
import MANAGEMENT from "../../data/page-content/12_MANAGEMENT-page.json";
import OTC_PRODUCTS from "../../data/page-content/13_OTC_PRODUCTS-page.json";
import ASPIRATION from "../../data/page-content/14_ASPIRATION-page.json";
import NEUROPATHY from "../../data/page-content/15_NEUROPATHY-page.json";
import CONCLUSION from "../../data/page-content/16_CONCLUSION-page.json";

const surveyJson = {
  pages: [
    LANDING,
    USER_INFO,
    CMPN_INFO,
    INFO_SOURCES,
    INTUBATION_HISTORY,
    BREATHING_CRISIS,
    EARLY_SYMPTOMS,
    PRIMARY_DURATION,
    PRIMARY_VET,
    DIAGNOSIS,
    TREATMENT_STATUS,
    TREATMENT_FACTORS,
    MANAGEMENT,
    OTC_PRODUCTS,
    ASPIRATION,
    NEUROPATHY,
    CONCLUSION,
  ],
};


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

/**
 * ==========================================================================
 * FOR COMPLETE DOCUMENTATION SEE SurveyComponentMaster.js
 * ==========================================================================
 */
export default function SurveyComponent({ startPageName }) {
  const CONSENT_QUESTION = "LandingConsent";
  const CONSENT_PAGE_INDEX = 0;

  const [survey] = useState(() => {
    const surveyModel = new Model(surveyJson);
    surveyModel.applyTheme(SharpLight);

    // Hide navigation on initial load (LANDING)
    surveyModel.showNavigationButtons = false;

    // ✅ Attach BEFORE first render so first-render panels get stamped
    attachPanelDataNameStamper(surveyModel, { registry });

    // ✅ Also attach style directives BEFORE first render (and only once)
    surveyModel.onAfterRenderPanel.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.panel));
    });

    surveyModel.onAfterRenderQuestion.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.question));
    });

    return surveyModel;
  });

  const [isCompleted, setIsCompleted] = useState(false);

  /**
   * 🛡 Safety net: block navigation if consent not Yes
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
   * Auto-advance immediately when Yes is selected
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

  const handleComplete = useCallback(async (sender) => {
    try {
      // Add a submission timestamp so the backend can generate a stable,
      // date-stamped filename consistently across components.
      const submittedAt = new Date().toISOString();

      const payload = {
        ...sender.data,
        submittedAt,
        source: "local-only",
      };

      const response = await fetch("/api/save-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsCompleted(true);
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save survey data.");
    }
  }, []);


  useEffect(() => {
    if (!survey) return;
    // console.log("ATTACHING SYNC HANDLERS", !!survey);

    // console.log(
    //   "SYNC CHECK source exists?",
    //   !!survey.getQuestionByName("InfoSourcesTypes"),
    //   "target exists?",
    //   !!survey.getQuestionByName("InfoSourcesBestSource")
    // );

    // console.log(
    //   "SYNC CHECK source2 exists?",
    //   !!survey.getQuestionByName("EarlyOtherConditionsType"),
    //   "target2 exists?",
    //   !!survey.getQuestionByName("ConclusionOtherConditions")
    // );

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


  // Optional: jump to a start page (your existing behavior)
  useEffect(() => {
    if (!startPageName) return;

    survey.data = prefillData;

    const page = survey.getPageByName(startPageName);
    if (page) {
      survey.currentPage = page;
      survey.showNavigationButtons = true;
    }
  }, [startPageName, survey]);

  if (isCompleted) {
    return <h2>✅ Survey submitted successfully!</h2>;
  }

  return <Survey model={survey} onComplete={handleComplete} />;
}
