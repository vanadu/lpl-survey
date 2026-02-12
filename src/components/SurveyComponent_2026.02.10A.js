"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import { addCustomClasses } from "./panelClassHandlers";
import prefillData from "../../helpers/prefill.json";

// add this import near the top with the other helper imports
// import registry from "../../helpers/registry.generated.json";
import registry from "../../helpers/registry.generated.json";

// !VA Import the helper for assigning the data-name attribute to panel elements
// keep your existing import (same file), but now we’re using registry mode
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";

// !VA  getStyleDirectives returns a list of all the style assignments for elements that have custom styling. 
import { getStyleDirectives } from "./panelClassHandlers";


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



function applyDirective(htmlElement, { target, className }) {
  if (!htmlElement || !className) return;

  if (target === "items") {
    // checkbox/radiogroup items live here
    const node =
      htmlElement.querySelector("fieldset.sd-selectbase") ||
      htmlElement.querySelector(".sd-selectbase") ||
      htmlElement;
    node.classList.add(className);
    console.log('ITEMS');
    return;
  }

  if (target === "control") {
    // 1) Prefer the dropdown wrapper explicitly
    const dropdownWrapper = htmlElement.querySelector(".sd-input.sd-dropdown");
    console.log('dropdownWrapper', dropdownWrapper)
    if (dropdownWrapper) {

      dropdownWrapper.classList.add(className);

      // Ensure the class is NOT on any descendants (e.g., the child input)
      dropdownWrapper
        .querySelectorAll(`.${className}`)
        .forEach((n) => n !== dropdownWrapper && n.classList.remove(className));
      return;
    }

    // 2) Otherwise, always attach to the nearest .sd-input wrapper (not the raw control)
    const raw = htmlElement.querySelector("input, textarea, select");
    const wrapper = raw?.closest(".sd-input") || htmlElement.querySelector(".sd-input") || htmlElement;

    wrapper.classList.add(className);

    // Ensure class doesn't end up on children
    wrapper
      .querySelectorAll(`.${className}`)
      .forEach((n) => n !== wrapper && n.classList.remove(className));

    return;
  }


  // default/root
  htmlElement.classList.add(className);
}

function applyDirectives(htmlElement, directives) {
  directives.forEach((d) => applyDirective(htmlElement, d));
}





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



  useEffect(() => {
    const detach = attachPanelDataNameStamper(survey, {
      registry,
      // optional overrides if you ever want them:
      // attr: "data-name",
      // map: { SomePanelName: "SomeOtherValue" },
    });

    return detach;
  }, [survey]);





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


  // survey.onAfterRenderPanel.add(function(sender, options) {
  //   addCustomClasses(options.panel, options.htmlElement);
  // });

  // survey.onAfterRenderQuestion.add(function(sender, options) {
  //   addCustomClasses(options.question, options.htmlElement);
  // });
  survey.onAfterRenderPanel.add((sender, options) => {
    applyDirectives(options.htmlElement, getStyleDirectives(options.panel));
  });

  survey.onAfterRenderQuestion.add((sender, options) => {
    applyDirectives(options.htmlElement, getStyleDirectives(options.question));
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
