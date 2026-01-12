'use client';
// !VA This is the production verson of SurveyComponent that uses the merged JSON file created by merge-surveys.js. 
import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
// VA! Import the classes to add to the SurveyJS elements here:
import { addCustomClasses } from "../panelClassHandlers";

// !VA Prefill the survey question responses with this data
// !VA IMPORTANT! I don't know how to implement this in the master survey component. Ask the AI bot!
import prefillData from '../../data/prefill.json';

// VA! import the single, fully merged survey json in the production build.
import masterSurvey from "../../data/master-survey.json";

export default function MasterSurveyComponent() {

  const [survey] = useState(() => {
    const surveyModel = new Model(masterSurvey);
    console.log('masterSurvey', masterSurvey)
    surveyModel.applyTheme(SharpLight);
    // VA! Enable auto-advance - according to AI bot, this will only work if SurveyJS considers the input the only “required” interaction on that page at runtime.
    // surveyModel.goNextPageAutomatic = true;
    return surveyModel;
  });

  const [isCompleted, setIsCompleted] = useState(false);

  // !VA 
  const handleComplete = useCallback(async (sender) => {
    const result = sender.data;
    const timestampedResult = {
    ...result,
    completedAt: new Date().toISOString(), // Add ISO-8601 formatted date-time
  };
    console.log("Survey results:", timestampedResult);
    try {
      const response = await fetch('/api/save-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(timestampedResult),
      });

      const data = await response.json();
      if (response.ok) {
        setIsCompleted(true);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to save survey data:', error);
      alert('Failed to save survey data. See console for details.');
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