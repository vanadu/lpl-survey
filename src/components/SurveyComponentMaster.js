"use client";
// Production SurveyComponentMaster that uses the merged JSON file created by merge-surveys.js. 

// !VA React/Next imports
import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import { useRouter } from "next/router";

// !VA Survey imports
// !VA This can be deleted once we get toggling it in ENV worked out. 
// import prefillData from "../../helpers/prefill.json";
import masterSurvey from "../../data//master-survey/master-survey.json";
import registry from "../../helpers/registry.generated.json";
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "./CustomClasses";
import { attachSurveySyncHandlers } from "../../helpers/syncSelectionValues";
import SurveyNav from "./SurveyNav";

/**
 * ============================================================================
 * SurveyComponentMaster — Architecture Overview
 * ============================================================================
 *
 * This component has three clearly separated layers:
 *
 * 1. Survey Model Lifecycle
 *    - Creates and owns the SurveyJS Model instance
 *    - Applies theme and default settings
 *
 * 2. UI Behavior Rules
 *    - Consent enforcement & auto-advance
 *
 * 2.5 Prefill Sync Rules (IMPORTANT)
 *    - Uses attachSurveySyncHandlers from helpers/syncSelectionValues.js
 *    - Syncs select answers based on prior selections
 *
 * 3. Styling & DOM Instrumentation
 *    - data-name stamping on panels
 *    - class/style directives based on registry
 *
 * Submission:
 *  - Sends RAW SurveyJS answers to /api/submit-survey and sends email/writes file OR only writes to file based on SEND_EMAIL in .env.local. Both local dev AND server droplet have this variable. 
 *     - SEND_EMAIL=true: Production, sends email via Brevo and writes to local file in survey-results
 *     - SEND_EMAIL=false: Dev, only writes results to local file in survey-results
 */

const CONSENT_PAGE_INDEX = 0;
const CONSENT_QUESTION = "LandingConsent";


/**
 * Apply ONE directive using the BACKUP contract:
 *   { target: "question" | "control" | "items" | "root", className: "..." }
 *
 * This function is the critical piece for SurveyJS DOM targeting:
 * - dropdowns need .sd-input.sd-dropdown
 * - text inputs need the closest .sd-input wrapper
 * - checkbox/radiogroup containers need .sd-selectbase / fieldset.sd-selectbase
 * - separators / ::after effects often need the question root
 */
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

  // !VA Question prefills set in .env.local
  const PREFILL_ENABLED = process.env.NEXT_PUBLIC_PREFILL_ENABLED === "true";

  // !VA Spinner duration and state declaration
  const MIN_SPINNER_MS = 1200;
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FADE-IN: controls when Survey is allowed to be visible
  const [isSurveyReady, setIsSurveyReady] = useState(false);


  const mq = () => window.matchMedia("(max-width: 639px)").matches;

  // !VA Start new

  function buildSurvey(isMobile, prev) {
    const s = new Model(masterSurvey);

    s.showCompletedPage = false;
    s.applyTheme(SharpLight);

    // ✅ Card View vs Standard View
    s.questionsOnPageMode = isMobile ? "questionPerPage" : "standard";

    // ✅ Mobile: custom chevrons, Desktop: default buttons
    s.showNavigationButtons = !isMobile;

    attachPanelDataNameStamper(s, { registry });

    s.onAfterRenderPanel.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.panel));
    });
    s.onAfterRenderQuestion.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.question));
    });

    // preserve state when rebuilding
    if (prev) {
      s.data = prev.data;
      s.currentPageNo = prev.currentPageNo;
    }

    return s;
  }

  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    setSurvey(buildSurvey(mq(), null));
  }, []);

  useEffect(() => {
    if (!survey) return;

    const mql = window.matchMedia("(max-width: 639px)");
    const onChange = () => setSurvey(buildSurvey(mql.matches, survey));

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [survey]);

  // !VA End new

  useEffect(() => {
    if (!survey) return;
    if (!PREFILL_ENABLED) return;

    let cancelled = false;

    (async () => {
      const mod = await import("../../helpers/prefill.json");
      if (cancelled) return;

      const data = mod.default ?? mod;

      survey.data = { ...data };
      survey.render();
    })();

    return () => {
      cancelled = true;
    };
  }, [survey, PREFILL_ENABLED]);

  // FADE-IN: show only after SurveyJS render + directives + fonts are settled. Only applies to the initial page load.
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
      if (!survey) return;

      function handleValidatePage(sender, options) {
        if (sender.currentPageNo !== CONSENT_PAGE_INDEX) return;
        if (sender.getValue(CONSENT_QUESTION) !== "Yes") {
          options.errors.push({ text: "You must agree to the terms to continue." });
        }
      }

      survey.onValidatePage.add(handleValidatePage);
      return () => survey.onValidatePage.remove(handleValidatePage);
    }, [survey]);

    // !VA Let's leave this out, it's fragile enough.
    // Auto-advance consent
    // useEffect(() => {
    //   function handleConsentChange(sender, options) {
    //     if (
    //       sender.currentPageNo === CONSENT_PAGE_INDEX &&
    //       options.name === CONSENT_QUESTION &&
    //       options.value === "Yes"
    //     ) {
    //       sender.showNavigationButtons = true;
    //       sender.nextPage();
    //     }
    //   }
    //   survey.onValueChanged.add(handleConsentChange);
    //   return () => survey.onValueChanged.remove(handleConsentChange);
    // }, [survey]);

  // Apply selections from one question to questions that come later. There are currently only two of these, so we'll do it here. Ideally, we would pull the element names out and put them in a separate file in /helpers
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
      // !VA If the survey is being submitted, exit
      if (isSubmitting) return;

      // !VA Set the isSubmitting flag to true
      setIsSubmitting(true);

      // !VA Set the date for the timestamp
      const completedAt = new Date().toISOString();
      const payload = {
        ...sender.data
      };

      try {
        // !VA 
        console.log('Trying submitPromise');
        const submitPromise = fetch("/api/submit-survey", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        // !VA Set the spinner timeout to the spinner duration
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
        // !VA When the submission is complete, display the submit-success page
        router.push("/submit-success");
      } catch (err) {
        console.error("Submission failed:", err);
        alert(`Submission failed: ${err.message || "Unknown error"}`);
        setIsSubmitting(false);
      }
    },
    [router, isSubmitting]
  );

  // !VA I don't like that the isSubmitting container doesn't scroll to the top of the page. It would probably be better just to have the spinner appear rather than the entire success-container, but for now it will have to do. The only way to scrollToTop is to put a ref on the element you want to scroll in the Layout component and then pass that ref as props down the page hierarchy to this component. Maybe later...
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

      {/* FADE-IN WRAPPER for the initial page load, to prevent FOUC and inconsistent element rendering*/}
      <div className={`surveyFadeWrap ${isSurveyReady ? "isReady" : ""}`}>
        {!survey ? null : (
          <>
            <Survey model={survey} onComplete={handleComplete} />
            <SurveyNav survey={survey} />
          </>
        )}
      </div>
    </>
  );
}
