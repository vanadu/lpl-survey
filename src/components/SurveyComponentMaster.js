"use client";
// Production SurveyComponentMaster that uses the merged JSON file created by merge-surveys.js and 1) sends results as email via Brevo and 2) writes the survey results to a datestamped file via 

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import { useRouter } from "next/router";

import prefillData from "../../helpers/prefill.json";
import masterSurvey from "../../data//master-survey/master-survey.json";

import registry from "../../helpers/registry.generated.json";
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "./CustomClasses";
import { attachSurveySyncHandlers } from "../../helpers/syncSelectionValues";

// ... your applyDirective/applyDirectives stay as-is ...

const CONSENT_PAGE_INDEX = 0;
const CONSENT_QUESTION = "LandingConsent";

function applyDirective(htmlElement, directive) {
  if (!htmlElement || !directive) return;

  const className = directive.className || directive.addClass;
  if (!className) return;

  const target = directive.target || "root";

  // Apply to question root (needed for ::after separators because inputs are replaced elements)
  if (target === "question") {
    htmlElement.classList.add(className);
    return;
  }

  // Apply to checkbox/radiogroup container
  if (target === "items") {
    const itemsEl =
      htmlElement.querySelector(".sd-selectbase") ||
      htmlElement.querySelector("fieldset.sd-selectbase");
    if (itemsEl) itemsEl.classList.add(className);
    return;
  }

  // Apply to control wrapper (dropdown/input wrapper)
  if (target === "control") {
    // Dropdown wrapper
    const dropdownWrapper = htmlElement.querySelector(".sd-input.sd-dropdown");
    if (dropdownWrapper) {
      dropdownWrapper.classList.add(className);
      return;
    }

    // Other inputs: find input/textarea/select then climb to the .sd-input wrapper
    const inputEl = htmlElement.querySelector("input, textarea, select");
    if (inputEl) {
      const wrapper = inputEl.closest(".sd-input");
      if (wrapper) wrapper.classList.add(className);
      return;
    }

    // Fallback
    htmlElement.classList.add(className);
    return;
  }

  // Default: apply to root
  htmlElement.classList.add(className);
}

/**
 * Apply MANY directives. Supports BOTH contracts:
 *
 * A) BACKUP contract (array):
 *    [ { target, className }, ... ]
 *
 * B) Current contract (object):
 *    { className?: "...", items?: [ { selector, className/addClass }, ... ] }
 *    (and also supports embedded target-based items)
 */
function applyDirectives(root, directives) {
  if (!root || !directives) return;

  // A) BACKUP-style: array of directives
  if (Array.isArray(directives)) {
    directives.forEach((d) => applyDirective(root, d));
    return;
  }

  // B) Current-style: object directives
  if (directives.className) {
    root.classList.add(directives.className);
  }

  if (Array.isArray(directives.items)) {
    directives.items.forEach((item) => {
      if (!item) return;

      // Selector-based items
      if (item.selector && (item.className || item.addClass)) {
        const cls = item.className || item.addClass;
        root.querySelectorAll(item.selector).forEach((el) => el.classList.add(cls));
        return;
      }

      // Target-based items (BACKUP-style embedded)
      if (item.target && (item.className || item.addClass)) {
        applyDirective(root, item);
      }
    });
  }
}


// FADE-IN helpers
const wait2Frames = () =>
  new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

const waitForFonts = async () => {
  if (typeof document === "undefined") return;
  if (!document.fonts?.ready) return;
  try {
    await document.fonts.ready; // prevents “text appears last”
  } catch {
    // ignore
  }
};

export default function SurveyComponentMaster() {
  const router = useRouter();

  const MIN_SPINNER_MS = 3000;
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FADE-IN: controls when Survey is allowed to be visible
  const [isSurveyReady, setIsSurveyReady] = useState(false);

  const scrollPageToTop = () => {
    if (typeof window === "undefined") return;
    const el = document.scrollingElement || document.documentElement;
    el.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const [survey] = useState(() => {
    const surveyModel = new Model(masterSurvey);
    surveyModel.showCompletedPage = false;
    surveyModel.applyTheme(SharpLight);
    surveyModel.showNavigationButtons = false;

    attachPanelDataNameStamper(surveyModel, { registry });

    surveyModel.onAfterRenderPanel.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.panel));
    });

    surveyModel.onAfterRenderQuestion.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.question));
    });

    if (prefillData && typeof prefillData === "object") {
      surveyModel.data = { ...prefillData };
    }

    return surveyModel;
  });

  // FADE-IN: show only after SurveyJS render + directives + fonts are settled
useEffect(() => {
  if (!survey) return;

  let cancelled = false;

  const showOnce = async () => {
    await waitForFonts();
    await wait2Frames();
    if (!cancelled) setIsSurveyReady(true);
  };

  setIsSurveyReady(false);

  // We still attach this in case we catch it, but we also do fallback.
  survey.onAfterRenderSurvey.add(showOnce);

  // Fallback in case first render already happened
  Promise.resolve().then(() => showOnce());

  return () => {
    cancelled = true;
    survey.onAfterRenderSurvey.remove(showOnce);
  };
}, [survey]);



  // Consent enforcement
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

  // Auto-advance consent
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

  // Prefill Sync Rules
  useEffect(() => {
    if (!survey) return;
    return attachSurveySyncHandlers(survey, {
      checkboxToDropdown: [{ source: "InfoSourcesTypes", target: "InfoSourcesBestSource" }],
      checkboxToCheckbox: [
        {
          source: "EarlyOtherConditionsType",
          target: "ConclusionOtherConditions",
          options: { onlyIfEmpty: true, copyOther: true },
        },
      ],
    });
  }, [survey]);

  const handleComplete = useCallback(
    async (sender) => {
      if (isSubmitting) return;

      scrollPageToTop();
      setIsSubmitting(true);

      const completedAt = new Date().toISOString();
      const payload = {
        ...sender.data,
        completedAt,
        submittedAt: completedAt,
        source: "master-brevo",
      };

      try {
        const submitPromise = fetch("/api/submit-survey", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const minSpinnerPromise = new Promise((resolve) =>
          setTimeout(resolve, MIN_SPINNER_MS)
        );

        const [resp] = await Promise.all([submitPromise, minSpinnerPromise]);

        const raw = await resp.text();
        let submitResult = {};
        try {
          submitResult = raw ? JSON.parse(raw) : {};
        } catch {
          submitResult = { message: raw };
        }

        if (!resp.ok) {
          throw new Error(submitResult.error || submitResult.message || "Unknown error");
        }

        router.push("/submit-success");
      } catch (err) {
        console.error("Submission failed:", err);
        alert(`Submission failed: ${err.message || "Unknown error"}`);
        setIsSubmitting(false);
      }
    },
    [router, isSubmitting]
  );

  return (
    <>
      {isSubmitting && (
        <div className="success-container-wrap">
          <div className="success-container isVisible">
            <div className={`success-spinnerWrap ${isSubmitting ? "isShown" : "isHidden"}`}>
              <div className="spinner-object" aria-label="Loading" />
              <p className="success-text">Submitting…</p>
              <p className="survey-spacer">&nbsp;</p>
            </div>
          </div>
        </div>
      )}

      {/* FADE-IN WRAPPER */}
      <div className={`surveyFadeWrap ${isSurveyReady ? "isReady" : ""}`}>
        <Survey model={survey} onComplete={handleComplete} />
      </div>
    </>
  );
}
