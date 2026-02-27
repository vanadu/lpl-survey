import React, { useEffect, useMemo, useRef, useState } from "react";
import { PiCaretDoubleRightFill, PiCaretDoubleLeftFill } from "react-icons/pi";
import { BsClipboard2Check } from "react-icons/bs";

const MOBILE_MQL = "(max-width: 639px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_MQL);
    const apply = () => setIsMobile(mql.matches);

    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return isMobile;
}

function getCurrentPageEl() {
  // SurveyJS "page" root for the active card
  return document.querySelector(".sd-page.sd-body__page");
}

function attachNavsToPage({ pageEl, topEl, bottomEl }) {
  if (!pageEl || !topEl || !bottomEl) return;

  pageEl.classList.add("sj-page-has-nav");

  // Ensure both navs live directly under the page (no nesting)
  if (topEl.parentElement !== pageEl) pageEl.appendChild(topEl);
  if (bottomEl.parentElement !== pageEl) pageEl.appendChild(bottomEl);
}

function syncBottomNavWidth(bottomEl, pageEl) {
  if (!bottomEl || !pageEl) return;

  const r = pageEl.getBoundingClientRect();
  bottomEl.style.left = `${r.left}px`;
  bottomEl.style.width = `${r.width}px`;
}

export default function SurveyNav({ survey }) {
  const isMobile = useIsMobile();

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [showBottom, setShowBottom] = useState(false);

  // Force rerender on SurveyJS page changes so icons enable/disable properly
  const [, force] = useState(0);
  useEffect(() => {
    if (!survey) return;

    const rerender = () => force((x) => x + 1);

    survey.onCurrentPageChanged?.add(rerender);
    survey.onCompleting?.add(rerender);
    survey.onComplete?.add(rerender);

    return () => {
      survey.onCurrentPageChanged?.remove(rerender);
      survey.onCompleting?.remove(rerender);
      survey.onComplete?.remove(rerender);
    };
  }, [survey]);

  // Attach navs to the current page node (page-scoped, not body-scoped)
  useEffect(() => {
    if (!survey) return;

    const attach = () => {
      if (!isMobile) return;
      const pageEl = getCurrentPageEl();
      attachNavsToPage({ pageEl, topEl: topRef.current, bottomEl: bottomRef.current });

      // Keep bottom aligned to the page width (breakpoints, resize, etc.)
      syncBottomNavWidth(bottomRef.current, pageEl);
    };

    // initial + after Survey render + on page changes
    survey.onAfterRenderSurvey?.add(attach);
    survey.onCurrentPageChanged?.add(attach);

    // also attach immediately in case render already happened
    attach();

    return () => {
      survey.onAfterRenderSurvey?.remove(attach);
      survey.onCurrentPageChanged?.remove(attach);
    };
  }, [survey, isMobile]);

  // Only show bottom nav when the top nav scrolls off above the fold
  useEffect(() => {
    if (!isMobile) {
      setShowBottom(false);
      return;
    }

    const topEl = topRef.current;
    if (!topEl) return;

    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // show ONLY when top nav is above viewport (not just "not intersecting")
        const offAbove = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        // throttle state changes to avoid layout thrash on scroll
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setShowBottom(offAbove));
      },
      { root: null, threshold: 0 }
    );

    observer.observe(topEl);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [isMobile]);

  // Keep bottom nav aligned to page width while scrolling/resizing
  useEffect(() => {
    if (!isMobile) return;

    const bottomEl = bottomRef.current;
    if (!bottomEl) return;

    const onSync = () => {
      const pageEl = getCurrentPageEl();
      if (!pageEl) return;
      syncBottomNavWidth(bottomEl, pageEl);
    };

    const onScroll = () => onSync();
    const onResize = () => onSync();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // also sync once right away
    onSync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isMobile, showBottom]);

  if (!survey) return null;

  const isFirst = survey.isFirstPage;
  const isLast = survey.isLastPage;

  const handlePrev = () => {
    if (!isFirst) survey.prevPage();
  };

  const handleNext = () => {
    if (isLast) survey.completeLastPage();
    else survey.nextPage();
  };

  const rightIcon = isLast ? (
    <BsClipboard2Check aria-hidden="true" />
  ) : (
    <PiCaretDoubleRightFill aria-hidden="true" />
  );

  const rightLabel = isLast ? "Submit" : "Next";

  return (
    <>
      {/* TOP NAV (always present on mobile; bottom nav visibility is conditional) */}
      <div ref={topRef} className="sj-surveynav sj-surveynav--top" aria-label="Survey navigation">
        <button
          className="sj-surveynav__btn"
          onClick={handlePrev}
          disabled={isFirst}
          type="button"
        >
          <PiCaretDoubleLeftFill aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>

        <button className="sj-surveynav__btn" onClick={handleNext} type="button">
          {rightIcon}
          <span className="sr-only">{rightLabel}</span>
        </button>
      </div>

      {/* BOTTOM NAV (same controls; only visible when top nav scrolls off above fold) */}
      <div
        ref={bottomRef}
        className={`sj-surveynav sj-surveynav--bottom ${showBottom ? "isVisible" : ""}`}
        aria-label="Survey navigation"
      >
        <button
          className="sj-surveynav__btn"
          onClick={handlePrev}
          disabled={isFirst}
          type="button"
        >
          <PiCaretDoubleLeftFill aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>

        <button className="sj-surveynav__btn" onClick={handleNext} type="button">
          {rightIcon}
          <span className="sr-only">{rightLabel}</span>
        </button>
      </div>
    </>
  );
}