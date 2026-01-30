'use client';
// !VA  This is the script to write the output of handleComplete to /test/presubmission.json. It is NOT the production Survey component that sends email!


// !VA This is the production verson of SurveyComponent that uses the merged JSON file created by merge-surveys.js. 
import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
// VA! Import the classes to add to the SurveyJS elements here:
import { addCustomClasses } from "./panelClassHandlers";

// !VA Prefill the survey question responses with this data
import prefillData from '../../helpers/prefill.json';

// VA! import the single, fully merged survey json in the production build.
import masterSurvey from "../../data/master-survey.json";



import { preSubmitTransform } from "../..//helpers/preSubmitTransform";



export default function MasterSurveyComponent() {

  const CONSENT_QUESTION = "LandingConsent";
  const CONSENT_PAGE_INDEX = 0;

  const [survey] = useState(() => {
    const surveyModel = new Model(masterSurvey);
    surveyModel.applyTheme(SharpLight);
    surveyModel.showNavigationButtons = false;
    return surveyModel;
  });

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    function handleValidatePage(sender, options) {
      if (sender.currentPageNo !== CONSENT_PAGE_INDEX) return;
      if (sender.getValue(CONSENT_QUESTION) !== "Yes") {
        options.errors.push({ text: "You must agree to the terms to continue." });
      }
    }
    survey.onValidatePage.add(handleValidatePage);
    return () => survey.onValidatePage.remove(handleValidatePage);
  }, [survey]);

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

  // !VA Modified handleComplete for debug: write JSON to /test/presubmission.json


const handleComplete = useCallback(async (sender) => {
  try {
    // Build transformed, storage-ready payload
    const transformedPayload = preSubmitTransform({
      ...sender.data,
      completedAt: sender.completedAt ?? new Date().toISOString(),
    });

    console.log("Presubmission payload:", transformedPayload);

    // Send JSON to server-side API route
    const response = await fetch("/api/save-presubmission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transformedPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Unknown error");
    }

    console.log("Presubmission JSON saved via API successfully");
    setIsCompleted(true);

  } catch (err) {
    console.error("Failed to save presubmission JSON:", err);
    alert("Failed to save presubmission JSON. See console for details.");
  }
}, []);




  survey.onAfterRenderPanel.add(function(sender, options) {
    addCustomClasses(options.panel, options.htmlElement);
  });

  useEffect(() => {
    function handleValueChanged(sender, options) {
      if (options.name === "InfoSourcesTypes") {
        const selectedInfoSources = options.value || [];
        const dropdown = sender.getQuestionByName("InfoSourcesBestSource");
        dropdown.choices = selectedInfoSources;
        if (!selectedInfoSources.includes(dropdown.value)) {
          dropdown.value = undefined;
        }
      }
    }
    survey.onValueChanged.add(handleValueChanged);
    return () => {
      survey.onValueChanged.remove(handleValueChanged);
    };
  }, [survey]);

  useEffect(() => {
    if (prefillData) {
      survey.data = prefillData;
    }
  }, [survey]);

  useEffect(() => {
    survey.onComplete.add(handleComplete);
    return () => {
      survey.onComplete.remove(handleComplete);
    };
  }, [survey, handleComplete]);

  const handleReset = () => {
    survey.clear(true, true);
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
