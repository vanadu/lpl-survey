'use client';
// !VA This is the production verison of SurveyComponent that sends email to the Zoho mail account.
// !VA This is the production verson of SurveyComponent that uses the merged JSON file created by merge-surveys.js. 
import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
// VA! Import the classes to add to the SurveyJS elements here:
import { addCustomClasses } from "./panelClassHandlers";

// !VA Prefill the survey question responses with this data
// !VA IMPORTANT! I don't know how to implement this in the master survey component. Ask the AI bot!
import prefillData from '../../helpers/prefill.json';

// VA! import the single, fully merged survey json in the production build.
import masterSurvey from "../../data/master-survey.json";

export default function MasterSurveyComponent() {

  // !VA Constant for show/hide Next button depending on consent question 
  const CONSENT_QUESTION = "LandingConsent";
  const CONSENT_PAGE_INDEX = 0;

  const [survey] = useState(() => {
    const surveyModel = new Model(masterSurvey);
    // console.log('masterSurvey', masterSurvey)
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


  // !VA This is supposed to add a timestamp to the completed survery results
  const handleComplete = useCallback(async (sender) => {
    const result = sender.data;
    const timestampedResult = {
    ...result,
    completedAt: new Date().toISOString(), // Add ISO-8601 formatted date-time
  };
    console.log("Survey results:", timestampedResult);


    try {
      // 1️⃣ Save survey data
      const saveResponse = await fetch('/api/save-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(timestampedResult),
      });

      const saveData = await saveResponse.json();

      if (!saveResponse.ok) {
        alert(`Error saving survey: ${saveData.message}`);
        return; // stop if saving failed
      }

      // 2️⃣ Send survey via Brevo
      const emailResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(timestampedResult), // same data to send via email
      });

      const emailData = await emailResponse.json();

      if (!emailResponse.ok) {
        alert(`Survey saved, but failed to send email: ${emailData.error}`);
        console.error('Email send error:', emailData.error);
        setIsCompleted(true); // still mark completed if save worked
        return;
      }

      // ✅ Everything succeeded
      setIsCompleted(true);

    } catch (error) {
      console.error('Failed to save/send survey data:', error);
      alert('Failed to save/send survey data. See console for details.');
    }




  }, []);

  // !VA Load the custom classes from panelClassHandlers.js
  // Attach onAfterRenderPanel before rendering the survey
  survey.onAfterRenderPanel.add(function(sender, options) {
    addCustomClasses(options.panel, options.htmlElement);
  });


  // !VA IMPORTANT: This defines WHICH options will appear in the InfoSourcesBestSource dropdown! You can't do this in dev because onValueChanged looks for USERDEFINED changes, not prefilled ones. I worked around this by making InfoSourcesTypes and InfoSourcesBestSource optional for now. But this will need to be dealt with in production.
  useEffect(() => {
    function handleValueChanged(sender, options) {
      if (options.name === "InfoSourcesTypes") {
        const selectedInfoSources = options.value || [];
        const dropdown = sender.getQuestionByName("InfoSourcesBestSource");
        // Update dropdown choices to match 
        dropdown.choices = selectedInfoSources;
        // Clear dropdown if its value is no longer in the choices
        if (!selectedInfoSources.includes(dropdown.value)) {
          dropdown.value = undefined;
        }
      }
    }
    survey.onValueChanged.add(handleValueChanged);
    // Clean up on unmount
    return () => {
      survey.onValueChanged.remove(handleValueChanged);
    };
  }, [survey]);


  // !VA Here prefill the question responses
  useEffect(() => {
    if (prefillData) {
      survey.data = prefillData;
    }
  }, [survey]);

  // Add and remove the onComplete event handler using useEffect
  useEffect(() => {
    survey.onComplete.add(handleComplete);
    return () => {
      survey.onComplete.remove(handleComplete);
    };
  }, [survey, handleComplete]);

  // !VA REMOVE FOR PRODUCTION! Handler for the Reset button
  const handleReset = () => {
    survey.clear(true, true);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="response-container text-center p-8">
        <h2 className="response-text">Thank you for completing the survey!</h2>
        {/* VA! REMOVE FOR PRODUCTION! This is the Reset button the AI bot created */}
        <button onClick={handleReset} className="reset-button">
          Reset Survey
        </button>
      </div>
    );
  }

  return <Survey model={survey} />;
}