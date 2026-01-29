"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import { addCustomClasses } from "./panelClassHandlers";
import prefillData from "../../helpers/prefill.json";

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
    CONCLUSION
  ]
};

export default function SurveyComponent({ startPageName }) {
  
  // !VA Constant for show/hide Next button depending on consent question 
  const CONSENT_QUESTION = "LandingConsent";
  const CONSENT_PAGE_INDEX = 0;

  const [survey] = useState(() => {
    const surveyModel = new Model(surveyJson);
    surveyModel.applyTheme(SharpLight);

    // !VA  Hide navigation on initial load (LANDING). To show/hide Next button on landing page depending on consent question
    surveyModel.showNavigationButtons = false;

    return surveyModel;
  });

  const [isCompleted, setIsCompleted] = useState(false);

  /** VA! This was added by ChatGPT for show/hide Next button depending on consent question
   * 🛡 Safety net: block navigation if consent not Yes
   */
  useEffect(() => {
    function handleValidatePage(sender, options) {
      if (sender.currentPageNo !== CONSENT_PAGE_INDEX) return;

      if (sender.getValue(CONSENT_QUESTION) !== "Yes") {
        options.errors.push({
          text: "You must agree to the terms to continue."
        });
      }
    }

    survey.onValidatePage.add(handleValidatePage);
    return () => survey.onValidatePage.remove(handleValidatePage);
  }, [survey]);

  /** VA! Added by ChatGTP for show/hide Next button depending on answer to consent question
   *  Auto-advance immediately when Yes is selected
   */
  useEffect(() => {
    function handleConsentChange(sender, options) {
      if (
        sender.currentPageNo === CONSENT_PAGE_INDEX &&
        options.name === CONSENT_QUESTION &&
        options.value === "Yes"
      ) {
        // Re-enable navigation for the rest of the survey
        sender.showNavigationButtons = true;

        // Advance immediately
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
        body: JSON.stringify(sender.data)
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


  // !VA This adds custom classes to the data-name property...not sure where it came from or if it works
  survey.onAfterRenderPanel.add((sender, options) => {
    addCustomClasses(options.panel, options.htmlElement);
    options.htmlElement.setAttribute("data-name", options.panel.name);
  });


  // !VA Prefill data based on prefill.json
  useEffect(() => {
    if (startPageName) {
      console.log('startPageName :>> ' + startPageName);
      survey.data = prefillData;
      const activePage = survey.pages.find(p => p.name === startPageName);
      if (activePage) {
        survey.currentPage = activePage;
      }
    }
  }, [startPageName, survey]);



  useEffect(() => {
    survey.onComplete.add(handleComplete);
    return () => survey.onComplete.remove(handleComplete);
  }, [survey, handleComplete]);


  // !VA This was added a long time ago...not sure if it works or is useful
  const handleReset = () => {
    survey.clear(true, true);
    survey.showNavigationButtons = false;
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="response-container text-center p-8">
        <h2 className="response-text">Thank you for completing the survey!</h2>
        <button onClick={handleReset} className="reset-button">
          Reset Survey
        </button>
      </div>
    );
  }

  return <Survey model={survey} />;
}
