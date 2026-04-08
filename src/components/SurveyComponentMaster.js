"use client";
// Production SurveyComponentMaster that uses the merged JSON file created by merge-surveys.js.

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SharpLight } from "survey-core/themes";
import { useRouter } from "next/router";

import masterSurvey from "../../data/master-survey/en-US/master-survey.json";
import registry from "../../data/registry/en-US/registry.generated.json";
import { attachPanelDataNameStamper } from "../../helpers/panelDataNameStamper";
import { getStyleDirectives } from "./CustomClasses";
import { attachSurveySyncHandlers } from "../../helpers/syncSelectionValues";
import surveySchema from "../../helpers/surveySchema.json"; 

import SurveyNav from "./SurveyNav";

const CONSENT_PAGE_INDEX = 0;
const CONSENT_QUESTION = "LandingConsent";
const DRAFT_STORAGE_KEY = "lpl-survey-draft-v1";

function sanitizeSurveyData(data) {
  const allowed = new Set(surveySchema);
  const clean = {};

  Object.entries(data || {}).forEach(([key, value]) => {
    if (!allowed.has(key)) return;
    if (value === undefined) return;
    clean[key] = value;
  });

  return clean;
}


// function applyDirective(htmlElement, directive) {
//   if (!htmlElement || !directive) return;

//   const className = directive.className || directive.addClass;
//   if (!className) return;

//   const target = directive.target || "root";
//   // !VA This can target a SD question OR an SD panel and takes into consideration that panel titles can also serve as question labels.
//   if (target === "question") {
//     console.log(htmlElement);
//     console.log('className :>> ' + className);
//     htmlElement.classList.add(className);
//     return;
//   }

//   // ✅ NEW: strictly apply ONLY to elements that are BOTH sd-panel AND sd-element--with-frame and used only to target card panels in CustomClasses
//   if (target === "panels") {
//     const panelEl = htmlElement.closest(".sd-panel.sd-element--with-frame");
//     if (panelEl) panelEl.classList.add(className);
//     return; // <-- critical: never fall through and accidentally tag fieldsets
//   }

//   // ✅ items (pick ONE items handler; keep the one you actually want)
//   if (target === "items") {
//     const itemsEl =
//       htmlElement.querySelector(".sd-selectbase") ||
//       htmlElement.querySelector("fieldset.sd-selectbase");
//     if (itemsEl) itemsEl.classList.add(className);
//     return;
//   }

//   if (target === "control") {
//     const dropdownWrapper = htmlElement.querySelector(".sd-input.sd-dropdown");
//     if (dropdownWrapper) {
//       dropdownWrapper.classList.add(className);
//       return;
//     }

//     const inputEl = htmlElement.querySelector("input, textarea, select");
//     if (inputEl) {
//       const wrapper = inputEl.closest(".sd-input");
//       if (wrapper) wrapper.classList.add(className);
//       return;
//     }

//     htmlElement.classList.add(className);
//     return;
//   }

//   htmlElement.classList.add(className);
// }



function applyDirective(htmlElement, directive) {
  if (!htmlElement || !directive) return;

  const className = directive.className || directive.addClass;
  if (!className) return;

  const target = directive.target || "root";

  if (target === "row") {
    const rowEl =
      htmlElement.closest(".sd-row") ||
      htmlElement.closest(".sd-page__row") ||
      htmlElement.closest(".sd-element") ||
      htmlElement;

    rowEl.classList.add(className);
    return;
  }



  if (target === "question") {
    const questionEl =
      htmlElement.closest(".sd-question") ||
      htmlElement.closest(".sd-element") ||
      htmlElement;

    questionEl.classList.add(className);
    return;
  }

  if (target === "panel") {
    const panelEl =
      htmlElement.closest(".sd-panel") ||
      htmlElement.closest(".sd-element") ||
      htmlElement;

    panelEl.classList.add(className);
    return;
  }

  if (target === "card") {
    const cardEl = htmlElement.closest(".sd-panel.sd-element--with-frame");
    if (cardEl) cardEl.classList.add(className);
    return;
  }

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
      if (wrapper) {
        wrapper.classList.add(className);
        return;
      }
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

const TOP_ICON_LINKS = [
  {
    href: "/browse-mode/Browse_00_Landing",
    label: "Browse",
    imgSrc: "/img-sj-top-icon-browse.png",
  },
  {
    href: "/survey-faqs",
    label: "FAQ",
    imgSrc: "/img-sj-top-icon-faq.png",
  },
  {
    href: "https://larparlife.com/allabout",
    label: "LP Info",
    imgSrc: "/img-sj-top-icon-lpinfo.png",
  },
  {
    href: "/survey-share",
    label: "Share",
    imgSrc: "/img-sj-top-icon-share.png",
  },
];

function renderTopIconBarHtml() {
  return `
    <div class="sj-page-iconbar" aria-label="Page tools">
      ${TOP_ICON_LINKS.map(
        ({ href, label, imgSrc }) => `
          <a
            class="sj-page-iconbar__item"
            href="${href}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${label}"
          >
            <img
              class="sj-page-iconbar__img"
              src="${imgSrc}"
              alt=""
              aria-hidden="true"
            />
            <span class="sj-page-iconbar__label">${label}</span>
          </a>
        `
      ).join("")}
    </div>
  `;
}



export default function SurveyComponentMaster() {
  const router = useRouter();
  const hasUserEditedRef = useRef(false);
  const isRestoringDraftRef = useRef(false);

  const PREFILL_ENABLED = process.env.NEXT_PUBLIC_PREFILL_ENABLED === "true";

  const MIN_SPINNER_MS = 1200;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSurveyReady, setIsSurveyReady] = useState(false);

  const mq = () => window.matchMedia("(max-width: 639px)").matches;

  function buildSurvey(isMobile, prev) {
    const s = new Model(masterSurvey);

    // !VA Set all questions to searchEnabled = false to prevent them from opening the keyboard on tablets
    s.getAllQuestions().forEach((q) => {
      const t = q.getType?.();
      if (t === "dropdown" || t === "tagbox") {
        q.searchEnabled = false;
      }
    });



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

  useEffect(() => {
    setSurvey(buildSurvey(mq(), null));
  }, []);



  // !VA NEW
  useEffect(() => {
    if (!survey) return;

    try {
      const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      const restoredData = sanitizeSurveyData(parsed?.data);

      isRestoringDraftRef.current = true;

      survey.data = restoredData;

      if (Number.isInteger(parsed?.currentPageNo)) {
        const maxPage = Math.max(0, survey.pages.length - 1);
        survey.currentPageNo = Math.min(parsed.currentPageNo, maxPage);
      }

      survey.render();
    } catch (err) {
      console.warn("Failed to restore survey draft:", err);
    } finally {
      isRestoringDraftRef.current = false;
    }
  }, [survey]);
  // !VA NEW







  useEffect(() => {
    if (!survey) return;

    const mql = window.matchMedia("(max-width: 639px)");
    const onChange = () => setSurvey(buildSurvey(mql.matches, survey));

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [survey]);

  useEffect(() => {
    if (!survey) return;

    if (!PREFILL_ENABLED) {
      console.log("survey.data :>> ");
      console.log(survey.data);
      return;
    }

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

  useEffect(() => {
    if (!survey) return;

    const handleValueChanged = (sender, options) => {
      if (options.name !== CONSENT_QUESTION) return;

      if (options.value === "No") {
        router.push("/"); // or whatever page you want
      }
    };

  survey.onValueChanged.add(handleValueChanged);
  return () => survey.onValueChanged.remove(handleValueChanged);
}, [survey, router]);


  // Sync handlers
  useEffect(() => {
    if (!survey) return;
    return attachSurveySyncHandlers(survey, {
      checkboxToDropdown: [{ source: "FactorsSourcesTypes", target: "FactorsBestSource" }],
      checkboxToCheckbox: [
        {
          source: "EarlyOtherConditionsType",
          target: "ConclusionOtherConditions",
          options: { onlyIfEmpty: true, copyOther: true },
        },
      ],
    });
  }, [survey]);



  // !VA NEW
  useEffect(() => {
    if (!survey) return;

    const persistDraft = () => {
      if (isRestoringDraftRef.current) return;
      if (!hasUserEditedRef.current) return;

      try {
        const payload = {
          data: sanitizeSurveyData(survey.data),
          currentPageNo: survey.currentPageNo,
        };

        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
      } catch (err) {
        console.warn("Failed to save survey draft:", err);
      }
    };

    const handleValueChanged = () => {
      hasUserEditedRef.current = true;
      persistDraft();
    };

    const handleCurrentPageChanged = () => {
      persistDraft();
    };

    survey.onValueChanged.add(handleValueChanged);
    survey.onCurrentPageChanged.add(handleCurrentPageChanged);

    return () => {
      survey.onValueChanged.remove(handleValueChanged);
      survey.onCurrentPageChanged.remove(handleCurrentPageChanged);
    };
  }, [survey]);
  // !VA NEW


  // !VA Date: 2026.03.28 Removed for print
  // !VA Icon Bar
  useEffect(() => {
    if (!survey) return;

    const handleAfterRenderPage = (sender, options) => {
      const pageEl = options?.htmlElement;
      if (!pageEl) return;

      if (pageEl.querySelector(".sj-page-iconbar")) return;

      const barWrap = document.createElement("div");
      barWrap.innerHTML = renderTopIconBarHtml();

      const barEl = barWrap.firstElementChild;
      if (!barEl) return;

      pageEl.prepend(barEl);
    };

    survey.onAfterRenderPage.add(handleAfterRenderPage);

    return () => {
      survey.onAfterRenderPage.remove(handleAfterRenderPage);
    };
  }, [survey]);


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

        localStorage.removeItem(DRAFT_STORAGE_KEY);
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