'use client';


import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
// VA! Import the classes to add to the SurveyJS elements here:
import { addCustomClasses } from "./panelClassHandlers";
// !VA Prefill the survey question responses with this data
import prefillData from '../../data/prefill.json';

// Import the modularized survey definition files
// VA! Replaced surveyConfig with an independent header
// import surveyConfig from "../../data/survey-config.json";
import lndgRoot from "../../data/lndgRoot-page.json";
import lvngRoot from "../../data/lvngRoot-page.json"
import lvngCmpn from "../../data/lvngCmpn-page.json"
import lvngInfo from "../../data/lvngInfo-page.json"
import dcsdRoot from "../../data/dcsdRoot-page.json"

// Assemble the final survey JSON object
// VA! IMPORTANT: this is only for dev, where we are using separate pages and separate JSON data files to build the app. Populate surveyJson with the pages imported from the data json files.  
const surveyJson = {
  pages: [
    lndgRoot,
    lvngRoot,
    lvngCmpn,
    lvngInfo,
    dcsdRoot
  ]
};

export default function SurveyComponent({ startPageName }) {

  // !VA 
  console.log("startPageName is: " + startPageName);

  // Create the survey model instance only once and keep it in state
  // !VA This is where the survey object is created that's referenced multiple times below
  const [survey] = useState(() => {
    const surveyModel = new Model(surveyJson);
    surveyModel.applyTheme(SharpLight);
    // VA! Enable auto-advance - according to AI bot, this will only work if SurveyJS considers the input the only “required” interaction on that page at runtime.
    // surveyModel.goNextPageAutomatic = true;
    return surveyModel;
  });
  // !VA 
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

  // !VA Load the custom classes from panelClassHandlers.js
  // Attach onAfterRenderPanel before rendering the survey
  survey.onAfterRenderPanel.add(function(sender, options) {
    // console.log({ panel: options.panel, htmlElement: options.htmlElement });
    addCustomClasses(options.panel, options.htmlElement);

    options.htmlElement.setAttribute("data-name", options.panel.name);

  });

     //VA! 
    useEffect(() => {
      if (startPageName) {
        // console.log("startPageName in useEffect is:", startPageName);
        // !VA Prefill the question responses as per prefill.json
        survey.data = prefillData;
        // !VA activePage is the object containing the survey data from the imported json. startPageName is the prop passed in from the SurveyComponent call in the respective Next.js route page, i.e. <SurveyComponent startPageName = 'lvngRoot_page' /> in alive.js
        // console.log("survey.pages:", survey.pages);
        const activePage = survey.pages.find(p => p.name === startPageName);
        // !VA Log the .name property of the activePage object
        // console.log("Active page object:", activePage);
        console.log("Active page object name:", activePage?.name);
        if (activePage) {
          survey.currentPage = activePage;
        }
      }
    }, [startPageName, survey]);

    // !VA IMPORTANT: This defines WHICH options will appear in the lvngInfoBestSource dropdown! You can't do this in dev because onValueChanged looks for USERDEFINED changes, not prefilled ones. I worked around this by making lvngInfoSources and lvngInfoBestSource optional for now. But this will need to be dealt with in production.
    useEffect(() => {
      function handleValueChanged(sender, options) {
        if (options.name === "lvngInfoSources") {
          const selectedInfoSources = options.value || [];
          const dropdown = sender.getQuestionByName("lvngInfoBestSource");
          // Update dropdown choices to match checked fruits
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







  // Add and remove the onComplete event handler using useEffect
  useEffect(() => {
    survey.onComplete.add(handleComplete);
    return () => {
      survey.onComplete.remove(handleComplete);
    };
  }, [survey, handleComplete]);

  // !VA Handler for the Reset button
  const handleReset = () => {
    // !VA This from the version where the AI bot had created a 'Reset' button so I didn't have to keep refreshing the page. 
    survey.clear(true, true); // Clear survey data and go to the first page
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="response-container text-center p-8">
        <h2 className="response-text">Thank you for completing the survey!</h2>
        {/* VA! This is the Reset button the AI bot created */}
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
