'use client';

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
// VA: If you use custom class helpers, import as needed
import { addCustomClasses } from "./panelClassHandlers";

// ONLY import the single, fully merged survey json!
import masterSurvey from "../../data/master-survey.json";

export default function MasterSurveyComponent() {
  const [survey] = useState(() => {
    const surveyModel = new Model(masterSurvey);
    surveyModel.applyTheme(SharpLight);

  // Enable auto-advance:
    // surveyModel.goNextPageAutomatic = true;


    return surveyModel;
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = useCallback(async (sender) => {
    const result = sender.data;
    // ...save logic here...
    setIsCompleted(true);
  }, []);

  // Attach custom class handlers, if any
  survey.onAfterRenderPanel.add(function(sender, options) {
    addCustomClasses(options.panel, options.htmlElement);
  });

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