"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import prefillData from "../../helpers/prefill.json";
import registry from "../../helpers/registry.generated.json";
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "./CustomClasses";
import { attachSurveySyncHandlers } from "../..//helpers/syncSelectionValues";


import LANDING from "../../data/00_LANDING-page.json";
import USER_INFO from "../../data/01_USER_INFO-page.json";
import CMPN_INFO from "../../data/02_CMPN_INFO-page.json";
import INFO_SOURCES from "../../data/03_INFO_SOURCES-page.json";
import INTUBATION_HISTORY from "../../data/04_INTUBATION_HISTORY-page.json";
import BREATHING_CRISIS from "../../data/05_BREATHING_CRISIS-page.json";
import EARLY_SYMPTOMS from "../../data/06_EARLY_SYMPTOMS-page.json";
import PRIMARY_DURATION from "../../data/07_PRIMARY_DURATION-page.json";
import PRIMARY_VET from "../../data/08_PRIMARY_VET-page.json";
import DIAGNOSIS from "../../data/09_DIAGNOSIS-page.json";
import TREATMENT_STATUS from "../../data/10_TREATMENT_STATUS-page.json";
import TREATMENT_FACTORS from "../../data/11_TREATMENT_FACTORS-page.json";
import MANAGEMENT from "../../data/12_MANAGEMENT-page.json";
import OTC_PRODUCTS from "../../data/13_OTC_PRODUCTS-page.json";
import ASPIRATION from "../../data/14_ASPIRATION-page.json";
import NEUROPATHY from "../../data/15_NEUROPATHY-page.json";
import CONCLUSION from "../../data/16_CONCLUSION-page.json";

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
    // console.log("ITEMS");
    // console.log('htmlElement :>> ');
    // console.log(htmlElement);
    // console.log('className :>> ');
    // console.log(className);
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


function applyDirectives(htmlElement, directives) {
  directives.forEach((d) => applyDirective(htmlElement, d));
}

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
      const response = await fetch("/api/save-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sender.data),
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

    return attachSurveySyncHandlers(survey, {
      checkboxToDropdown: [
        { source: "InfoSourcesTypes", target: "InfoSourcesBestSource" },
      ],
      // IMPORTANT: omit checkboxToCheckbox here
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
