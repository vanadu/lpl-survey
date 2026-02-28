import React, { useEffect, useRef, useState } from "react";
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
  return document.querySelector(".sd-page.sd-body__page");
}

function attachNavsToPage({ pageEl, topEl, bottomEl }) {
  if (!pageEl || !topEl || !bottomEl) return;

  pageEl.classList.add("sj-page-has-nav");

  if (topEl.parentElement !== pageEl) pageEl.appendChild(topEl);
  if (bottomEl.parentElement !== pageEl) pageEl.appendChild(bottomEl);
}

function blurActiveElement() {
  const el = document.activeElement;
  if (el && typeof el.blur === "function") el.blur();
}

function getScrollParent(el) {
  let node = el?.parentElement;
  while (node) {
    const style = window.getComputedStyle(node);
    const overflowY = style.overflowY;
    if (overflowY === "auto" || overflowY === "scroll") return node;
    node = node.parentElement;
  }
  return null;
}

function scrollToPageTop({ behavior = "auto" } = {}) {
  const pageEl = getCurrentPageEl();
  if (!pageEl) return;

  const scroller = getScrollParent(pageEl);
  if (scroller) scroller.scrollTop = 0;

  const y = window.scrollY + pageEl.getBoundingClientRect().top;
  window.scrollTo({ top: Math.max(0, y), behavior });
}

export default function SurveyNav({ survey }) {
  const isMobile = useIsMobile();

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [showBottom, setShowBottom] = useState(false);

  // Only set true when bottom-nav initiates a page change
  const pendingScrollToTopRef = useRef(false);

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

  // Attach navs to the current page node (page-scoped). Mobile only.
  useEffect(() => {
    if (!survey || !isMobile) return;

    const attach = () => {
      const pageEl = getCurrentPageEl();
      attachNavsToPage({
        pageEl,
        topEl: topRef.current,
        bottomEl: bottomRef.current,
      });
    };

    survey.onAfterRenderSurvey?.add(attach);
    survey.onCurrentPageChanged?.add(attach);

    attach();

    return () => {
      survey.onAfterRenderSurvey?.remove(attach);
      survey.onCurrentPageChanged?.remove(attach);
    };
  }, [survey, isMobile]);

  // Bottom nav visibility (only when top nav scrolls off above fold). Mobile only.
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
        const offAbove = !entry.isIntersecting && entry.boundingClientRect.top < 0;

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

  // After page changes, if bottom-nav initiated it, force scroll-to-top last. Mobile only.
  useEffect(() => {
    if (!survey || !isMobile) return;

    const onChanged = () => {
      if (!pendingScrollToTopRef.current) return;
      pendingScrollToTopRef.current = false;

      setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToPageTop({ behavior: "auto" });
          });
        });
      }, 0);
    };

    survey.onCurrentPageChanged?.add(onChanged);
    return () => survey.onCurrentPageChanged?.remove(onChanged);
  }, [survey, isMobile]);

  // Safe render gate AFTER hooks
  if (!survey || !isMobile) return null;

  const isFirst = survey.isFirstPage;
  const isLast = survey.isLastPage;

  // TOP NAV: preserve "stay where you are" behavior (no forced scroll)
  const handlePrevTop = () => {
    if (!isFirst) survey.prevPage();
  };

  const handleNextTop = () => {
    if (isLast) survey.completeLastPage();
    else survey.nextPage();
  };

  // BOTTOM NAV: schedule scroll-to-top after page change
  const handlePrevBottom = () => {
    if (isFirst) return;
    blurActiveElement();
    pendingScrollToTopRef.current = true;
    survey.prevPage();
  };

  const handleNextBottom = () => {
    blurActiveElement();
    pendingScrollToTopRef.current = true;
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
      <div
        ref={topRef}
        className="sj-surveynav sj-surveynav--top"
        aria-label="Survey navigation"
      >
        <button
          className="sj-surveynav__btn"
          onClick={handlePrevTop}
          disabled={isFirst}
          type="button"
        >
          <PiCaretDoubleLeftFill aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>

        <button className="sj-surveynav__btn" onClick={handleNextTop} type="button">
          {rightIcon}
          <span className="sr-only">{rightLabel}</span>
        </button>
      </div>

      <div
        ref={bottomRef}
        className={`sj-surveynav sj-surveynav--bottom ${showBottom ? "isVisible" : ""}`}
        aria-label="Survey navigation"
      >
        <button
          className="sj-surveynav__btn"
          onClick={handlePrevBottom}
          disabled={isFirst}
          type="button"
        >
          <PiCaretDoubleLeftFill aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>

        <button className="sj-surveynav__btn" onClick={handleNextBottom} type="button">
          {rightIcon}
          <span className="sr-only">{rightLabel}</span>
        </button>
      </div>
    </>
  );
}