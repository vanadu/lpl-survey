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

// !VA Import the presubmission transform script 
import { preSubmitTransform } from "../..//helpers/preSubmitTransform";

// !VA Import the helper for assigning the data-name attribute to panel elements
import { attachPanelDataNameStamper } from "../../helpers/panelDataName";



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

  // !VA Attach the data-name property to the panelNames as per /helpers/panelDataName
  useEffect(() => {
    const detach = attachPanelDataNameStamper(survey, {
      panelNames: ["CmpnInfoDetailsPanel"],
    });
    return detach; // important if hot-reloading / remounting
  }, [survey]);

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
    const payload = {
      ...sender.data,
      completedAt: sender.completedAt ?? new Date().toISOString(),
    };

    // In .env.local:
    // NEXT_PUBLIC_SURVEY_ENDPOINT=/api/save-survey   (testing)
    // NEXT_PUBLIC_SURVEY_ENDPOINT=/api/submit-survey (production)
    const endpoint =
      process.env.NEXT_PUBLIC_SURVEY_ENDPOINT || "/api/submit-survey";

    // !VA Log the endpoint to the console to show whether we're sending or saving the submission
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.success) {
      throw new Error(result.error || result.message || "Unknown error");
    }

    console.log("Submission succeeded:", { endpoint, result });
    setIsCompleted(true);
  } catch (err) {
    console.error("Submission failed:", err);
    alert("Submission failed. See console for details.");
  }
}, []);





  survey.onAfterRenderPanel.add(function(sender, options) {
    addCustomClasses(options.panel, options.htmlElement);
  });


  useEffect(() => {
  if (!survey) return;

  const SOURCE_Q = "InfoSourcesTypes";
  const TARGET_Q = "InfoSourcesBestSource";

  const syncDropdownFromCheckbox = (sender) => {
    const source = sender.getQuestionByName(SOURCE_Q);
    const target = sender.getQuestionByName(TARGET_Q);
    if (!source || !target) return;

    // Checkbox value is an array of selected "value" entries
    const selectedValues = Array.isArray(source.value) ? source.value : [];

    // Use visibleChoices when available (covers choicesByUrl, etc.)
    const allChoices = source.visibleChoices || source.choices || [];

    // Build dropdown choice objects { value, text } for only the selected ones
    const nextChoices = allChoices
      .filter((c) => selectedValues.includes(c.value ?? c))
      .map((c) => {
        // c can be a string OR a SurveyJS choice item
        const value = c.value ?? c;
        const text = c.text ?? String(value);
        return { value, text };
      });

    // Update dropdown choices
    target.choices = nextChoices;

    // Clear dropdown value if it is no longer valid
    const validValues = new Set(nextChoices.map((c) => c.value));
    if (target.value != null && !validValues.has(target.value)) {
      target.clearValue();
    }

    // Optional: lock dropdown until there are options
    target.readOnly = nextChoices.length === 0;
    // Optional: nicer placeholder
    target.placeholder = nextChoices.length === 0 ? "Select info sources above first" : "Select one";
  };

  const handleValueChanged = (sender, options) => {
    // Only react when the checkbox changes
    if (options.name === SOURCE_Q) {
      syncDropdownFromCheckbox(sender);
    }
  };

  // Also run once on mount (covers prefilled data)
  syncDropdownFromCheckbox(survey);

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
