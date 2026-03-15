"use client";
// Production SurveyComponentMaster that uses the merged JSON file created by merge-surveys.js.

import React, { useState, useCallback, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import { useRouter } from "next/router";

import masterSurvey from "../../data//master-survey/master-survey.json";
import registry from "../../helpers/registry.generated.json";
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "./CustomClasses";
import { attachSurveySyncHandlers } from "../../helpers/syncSelectionValues";
import surveySchema from "../../helpers/surveySchema.json";
import SurveyNav from "./SurveyNav";

const CONSENT_PAGE_INDEX = 0;
const CONSENT_QUESTION = "LandingConsent";
const SURVEY_DRAFT_STORAGE_KEY = "lpl_survey_draft";
const SURVEY_DRAFT_VERSION = "survey-v1";

const SAVABLE_KEYS = new Set(surveySchema);

function getSavableSurveyData(allData = {}) {
  return Object.fromEntries(
    Object.entries(allData).filter(([key, value]) => {
      return SAVABLE_KEYS.has(key) && value !== undefined;
    })
  );
}

function buildDraftPayload(survey) {
  return {
    version: SURVEY_DRAFT_VERSION,
    page: survey.currentPageNo,
    data: getSavableSurveyData(survey.data),
    savedAt: new Date().toISOString(),
  };
}

function saveSurveyDraft(survey) {
  if (typeof window === "undefined" || !survey) return;

  const draft = buildDraftPayload(survey);
  localStorage.setItem(SURVEY_DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

function loadSurveyDraft() {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(SURVEY_DRAFT_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);

    if (!parsed || parsed.version !== SURVEY_DRAFT_VERSION) return null;
    if (!parsed.data || typeof parsed.data !== "object") return null;

    return parsed;
  } catch {
    return null;
  }
}

function clearSurveyDraft() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SURVEY_DRAFT_STORAGE_KEY);
}


function applyDirective(htmlElement, directive) {
  if (!htmlElement || !directive) return;

  const className = directive.className || directive.addClass;
  if (!className) return;

  const target = directive.target || "root";

  if (target === "question") {
    htmlElement.classList.add(className);
    return;
  }

  // ✅ NEW: strictly apply ONLY to elements that are BOTH sd-panel AND sd-element--with-frame
  if (target === "panels") {
    const panelEl = htmlElement.closest(".sd-panel.sd-element--with-frame");
    if (panelEl) panelEl.classList.add(className);
    return; // <-- critical: never fall through and accidentally tag fieldsets
  }

  // ✅ items (pick ONE items handler; keep the one you actually want)
  if (target === "items") {
    const itemsEl =
      htmlElement.querySelector(".sd-selectbase") ||
      htmlElement.querySelector("fieldset.sd-selectbase");
    if (itemsEl) itemsEl.classList.add(className);
    return;
  }

  if (target === "control") {
    const dropdownWrapper = htmlElement.querySelector(".sd-input.sd-dropdown");
    if (dropdownWrapper) {
      dropdownWrapper.classList.add(className);
      return;
    }

    const inputEl = htmlElement.querySelector("input, textarea, select");
    if (inputEl) {
      const wrapper = inputEl.closest(".sd-input");
      if (wrapper) wrapper.classList.add(className);
      return;
    }

    htmlElement.classList.add(className);
    return;
  }

  htmlElement.classList.add(className);
}


function applyDirectives(root, directives) {

  if (!root || !directives) return;

  if (Array.isArray(directives)) {
    directives.forEach((d) => applyDirective(root, d));
    return;
  }

  if (directives.className) root.classList.add(directives.className);

  if (Array.isArray(directives.items)) {
    directives.items.forEach((item) => {
      if (!item) return;

      if (item.selector && (item.className || item.addClass)) {
        // console.log('item :>> ');
        // console.log(item);
        const cls = item.className || item.addClass;
        root.querySelectorAll(item.selector).forEach((el) => el.classList.add(cls));
        // console.log('cls :>> ');
        // console.log(cls);
        return;
      }

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
    await document.fonts.ready;
  } catch {
    // ignore
  }
};

export default function SurveyComponentMaster() {
  const router = useRouter();
  const PREFILL_ENABLED = process.env.NEXT_PUBLIC_PREFILL_ENABLED === "true";
  // console.log('PREFILL_ENABLED :>> ' + PREFILL_ENABLED);

  const MIN_SPINNER_MS = 1200;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSurveyReady, setIsSurveyReady] = useState(false);

  const mq = () => window.matchMedia("(max-width: 639px)").matches;

  function buildSurvey(isMobile, prev) {
    const s = new Model(masterSurvey);

    s.showCompletedPage = false;
    s.applyTheme(SharpLight);

    // Card View vs Standard View
    s.questionsOnPageMode = isMobile ? "questionPerPage" : "standard";

    // Mobile: custom nav, Desktop: default SurveyJS buttons
    s.showNavigationButtons = !isMobile;

    attachPanelDataNameStamper(s, { registry });

    s.onAfterRenderPanel.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.panel));
    });
    s.onAfterRenderQuestion.add((sender, options) => {
      applyDirectives(options.htmlElement, getStyleDirectives(options.question));
    });

    if (prev) {
      s.data = prev.data;
      s.currentPageNo = prev.currentPageNo;
    }

    return s;
  }

  const [survey, setSurvey] = useState(null);
  const [isDraftHydrated, setIsDraftHydrated] = useState(false);


  // !VA Restores prefill switch!!!
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

  useEffect(() => {
    if (!survey) return;
    console.log('PREFILL_ENABLED in useEffect :>> ' + PREFILL_ENABLED);
    if (!PREFILL_ENABLED) return;

    clearSurveyDraft();

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


  useEffect(() => {
    if (!survey) return;
    if (PREFILL_ENABLED) return;

    const draft = loadSurveyDraft();
    if (!draft?.data) return;

    survey.data = { ...draft.data };

    if (Number.isInteger(draft.page)) {
      survey.currentPageNo = draft.page;
    }

    survey.render();
  }, [survey, PREFILL_ENABLED]);





  useEffect(() => {
    if (!survey) return;

    let cancelled = false;

    const showOnce = async () => {
      await waitForFonts();
      await wait2Frames();
      if (!cancelled) setIsSurveyReady(true);
    };

    setIsSurveyReady(false);

    survey.onAfterRenderSurvey.add(showOnce);
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

  // Sync handlers
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

  // !VA Save survey state to localStorage
  useEffect(() => {
    if (!survey) return;
    if (PREFILL_ENABLED) return;

    let saveTimer = null;

    function queueDraftSave() {
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => {
        saveSurveyDraft(survey);
      }, 250);
    }

    survey.onValueChanged.add(queueDraftSave);
    survey.onCurrentPageChanged.add(queueDraftSave);

    return () => {
      window.clearTimeout(saveTimer);
      survey.onValueChanged.remove(queueDraftSave);
      survey.onCurrentPageChanged.remove(queueDraftSave);
    };
  }, [survey, PREFILL_ENABLED]);






  const handleComplete = useCallback(
    async (sender) => {
      if (isSubmitting) return;
      setIsSubmitting(true);

      const payload = { ...sender.data };

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


        // !VA Clear the survey state after submission
        clearSurveyDraft();
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

      <div className={`surveyFadeWrap ${isSurveyReady ? "isReady" : ""}`}>
        {!survey ? null : (
          <>
            <Survey model={survey} onComplete={handleComplete} />
            {/* Mobile nav system (top + conditional bottom), page-scoped */}
            <SurveyNav survey={survey} />
          </>
        )}
      </div>
    </>
  );
}