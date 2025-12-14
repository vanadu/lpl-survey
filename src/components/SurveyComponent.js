'use client';

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";

// Import the modularized survey definition files
// VA! Replaced surveyConfig with an independent header
// import surveyConfig from "../../data/survey-config.json";
import landing from "../../data/landing-page.json";
import alive from "../../data/alive-page.json"

// Assemble the final survey JSON object
// VA! Removed the survey header in survey-config.json. I don't understand how this works.
const surveyJson = {
  pages: [
    landing
  ]
};

export default function SurveyComponent() {

  // Create the survey model instance only once and keep it in state
  const [survey] = useState(() => {
    const surveyModel = new Model(surveyJson);
    surveyModel.applyTheme(SharpLight);
    return surveyModel;
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = useCallback(async (sender) => {
    const result = sender.data;
    console.log("Survey results:", result);

    try {
      const response = await fetch('/api/save-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
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

  // Attach onAfterRenderPanel before rendering the survey
  survey.onAfterRenderPanel.add(function(sender, options) {
    if (options.panel.name === 'companionDetailsPanel') {
      options.htmlElement.classList.add("companion-details-panel");
    }
    if (options.panel.name === 'companionDetailsSubpanel1') {
      options.htmlElement.classList.add("companion-details-subpanel-1");
    }
    if (options.panel.name === 'companionDetailsSubpanel2') {
      options.htmlElement.classList.add("companion-details-subpanel-2");
    }
    if (options.panel.name === 'companionDetailsSubpanel3') {
      options.htmlElement.classList.add("companion-details-subpanel-3");
    }
	  // if (options.panel.name === 'cats') {
    //   options.htmlElement.classList.add("panel-cats");
    // }
		// if (options.panel.name === 'horses') {
    //   options.htmlElement.classList.add("panel-horses");
    // }
  });



  // Add and remove the onComplete event handler using useEffect
  useEffect(() => {
    survey.onComplete.add(handleComplete);
    return () => {
      survey.onComplete.remove(handleComplete);
    };
  }, [survey, handleComplete]);

  const handleReset = () => {
    survey.clear(true, true); // Clear survey data and go to the first page
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="response-container text-center p-8">
        <h2 className="response-text">Thank you for completing the survey!</h2>
        <button
          onClick={handleReset}
          className="reset-button"
        >
          Reset Survey
        </button>
      </div>
    );
  }

  return <Survey model={survey} />;
}
