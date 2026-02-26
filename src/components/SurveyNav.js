


import React, { useState, useEffect } from "react";
// import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { PiCaretDoubleRightFill } from "react-icons/pi";
import { PiCaretDoubleLeftFill } from "react-icons/pi";
import { BsClipboard2Check } from "react-icons/bs";

const SurveyNav = ({survey}) => {
  
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


  // !VA Start new
  useEffect(() => {
    if (!survey) return;

    const mql = window.matchMedia("(max-width: 639px)");

    const attachNavToPage = () => {
      if (!mql.matches) return; // only mobile

      const page = document.querySelector(".sd-page.sd-body__page");
      const nav = document.querySelector(".sj-surveynav");
      if (!page || !nav) return;

      page.classList.add("sj-page-has-nav");
      if (nav.parentElement !== page) page.appendChild(nav);
    };

    // initial + after Survey render + on page changes
    survey.onAfterRenderSurvey?.add(attachNavToPage);
    survey.onCurrentPageChanged.add(attachNavToPage);

    // also react to breakpoint flips
    const onBpChange = () => attachNavToPage();
    mql.addEventListener("change", onBpChange);

    attachNavToPage();

    return () => {
      survey.onAfterRenderSurvey?.remove(attachNavToPage);
      survey.onCurrentPageChanged.remove(attachNavToPage);
      mql.removeEventListener("change", onBpChange);
    };
  }, [survey]);
  // !VA End new


if (!survey) return null;

// ✅ works across versions; works in Card View too
const isFirst = survey.isFirstPage;
const isLast = survey.isLastPage;

const handlePrev = () => {
  if (!isFirst) survey.prevPage();
};

const handleNext = () => {
  if (isLast) survey.completeLastPage();
  else survey.nextPage();
};

  




  // ...same render as before





  return (
    <>
      <div className="sj-surveynav">

        <button
          className="sj-surveynav__btn"
          onClick={handlePrev}
          disabled={isFirst}
          type="button"
        >
          <PiCaretDoubleLeftFill aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>

        <button
          className="sj-surveynav__btn"
          onClick={handleNext}
          type="button"
        >
          {isLast ? <BsClipboard2Check aria-hidden="true" /> : <PiCaretDoubleRightFill aria-hidden="true" />}
          <span className="sr-only">{isLast ? "Submit" : "Next"}</span>
        </button>

      </div>

    </>
  );

}

export default SurveyNav
