"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import { addCustomClasses } from "./panelClassHandlers";
import prefillData from "../../data/prefill.json";

import LANDING from "../../data/00_LANDING-page.json";
import USER_INFO from "../../data/01_USER_INFO-page.json";
import CMPN_NAME_LIFE_STATUS from "../../data/02_CMPN_NAME_LIFE_STATUS-page.json";
import INFO_SOURCES from "../../data/03_INFO_SOURCES-page.json";
import INTUBATION_HISTORY from "../../data/04_INTUBATION_HISTORY-page.json";
import BREATHING_CRISIS from "../../data/05_BREATHING_CRISIS-page.json";
import L_CMPN_INFO from "../../data/06L_CMPN_INFO-page.json";
import L_EARLY_SYMPTOMS from "../../data/07L_EARLY_SYMPTOMS-page.json";
import L_CHANGED_VETS from "../../data/08L_CHANGED_VETS-page.json";
import L_PRIMARY_DURATION from "../../data/09L_PRIMARY_DURATION-page.json";
import L_PRIMARY_VET from "../../data/10L_PRIMARY_VET-page.json";

const surveyJson = {
  pages: [
    LANDING,
    USER_INFO,
    CMPN_NAME_LIFE_STATUS,
    INFO_SOURCES,
    INTUBATION_HISTORY,
    BREATHING_CRISIS,
    L_CMPN_INFO,
    L_EARLY_SYMPTOMS,
    L_CHANGED_VETS,
    L_PRIMARY_DURATION,
    L_PRIMARY_VET
  ]
};

export default function SurveyComponent({ startPageName }) {
  const CONSENT_QUESTION = "consent";
  const CONSENT_PAGE_INDEX = 0;

  const [survey] = useState(() => {
    const surveyModel = new Model(surveyJson);
    surveyModel.applyTheme(SharpLight);

    // 🔒 Hide navigation on initial load (LANDING)
    surveyModel.showNavigationButtons = false;

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
          text: "You must agree to the terms to continue."
        });
      }
    }

    survey.onValidatePage.add(handleValidatePage);
    return () => survey.onValidatePage.remove(handleValidatePage);
  }, [survey]);

  /**
   * 🚀 Auto-advance immediately when Yes is selected
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

  survey.onAfterRenderPanel.add((sender, options) => {
    addCustomClasses(options.panel, options.htmlElement);
    options.htmlElement.setAttribute("data-name", options.panel.name);
  });

  useEffect(() => {
    if (startPageName) {
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
