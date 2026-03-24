import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_16_Conclusion = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <BrowseMenu />
      <main className="page browse">
        <header className="browse-header-container">
          <div className="browse-header-title-container">
            <h2 className="browse-header-title">LP-GOLPP Survey 2026</h2>
            <p className="browse-header-slug">powered by larparlife.org</p>
            <p className="browse-header-mode">Browse Mode</p>
          </div>
          <div className="browse-logo-container">
            <Image src={Logo} className="browse-header-logo" alt="LarParLife.org" />
          </div>
        </header>
        <div className="browse-page">
      <div className="browse-page-nav" aria-label="Browse page navigation">
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_15_Neuropathy" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="CONCLUSION-page"></div>
        <span className="browse-page-nav__next is-disabled" aria-hidden="true">
          <span><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </span>
      </div>

      <div className="browse-panel-container" id="ConclusionCard1Panel">
      <div className="browse-content-block" id="ConclusionHeading">
        <h2 className="browse-content-heading">Conclusion</h2>
      </div>

      <div className="browse-content-block" id="Conclusion">
        <p className="browse-content-text">The last section of this survey references your earlier responses to determine how Bella&lsquo;s LP/GOLPP developed over time and what factors may have played a role in the LP/GOLPP progression.</p>
      </div>

      <div className="browse-panel-container" id="ConclusionsPanelLifeStatusTrue">
      <div className="browse-content-block" id="ConclusionsPanelLifeStatusTrueText">
        <p className="browse-content-text">NOTE: These questions ask about the last station of Bella&lsquo;s LP/GOLPP journey before she crossed over the Rainbow Bridge. If it&lsquo;s too painful to revisit this stage of Bella&lsquo;s life, it might be best to discontinue the survey and return to it later.</p>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionsPanelLifeStatusFalse">
      <div className="browse-content-block" id="ConclusionsPanelLifeStatusFalseText">
        <p className="browse-content-text">IMPORTANT: Please answer the questions about Bella in her current state of health:</p>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionDetailsPanel">
      <div className="browse-question-container" id="ConclusionSpecialConsiderations">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please describe any special considerations for Bella due to LP-related breathing issues:
            </span>
          }
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>No special considerations</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Exercise limitations</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Type, amount or frequency of feeding</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Travel restrictions</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Other behavior restrictions i.e., anxiety, excitement</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionGeneralCondition">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please describe Bella&lsquo;s general physical condition:
            </span>
          }
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>No noticeable symptoms</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Significant hind-end weakness</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Frequent falling</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Difficulty getting up or standing</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Urinary incontinence</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Fecal incontinence</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionQOL">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How would you rate Bella&lsquo;s quality of life at this stage?
            </span>
          }
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very poor, 3 = fair, 5 = very good</p>
          <div className="showanswer__content-block">
          <div className="browse-showanswer-rating" aria-hidden="true">
                
                  <span className="browse-showanswer-rating-item">
                    <svg
                      className="browse-showanswer-rating-svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text
                        x="8"
                        y="8"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="8"
                        fill="currentColor"
                      >
                        1
                      </text>
                    </svg>
                  </span>
                  <span className="browse-showanswer-rating-item">
                    <svg
                      className="browse-showanswer-rating-svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text
                        x="8"
                        y="8"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="8"
                        fill="currentColor"
                      >
                        2
                      </text>
                    </svg>
                  </span>
                  <span className="browse-showanswer-rating-item">
                    <svg
                      className="browse-showanswer-rating-svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text
                        x="8"
                        y="8"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="8"
                        fill="currentColor"
                      >
                        3
                      </text>
                    </svg>
                  </span>
                  <span className="browse-showanswer-rating-item">
                    <svg
                      className="browse-showanswer-rating-svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text
                        x="8"
                        y="8"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="8"
                        fill="currentColor"
                      >
                        4
                      </text>
                    </svg>
                  </span>
                  <span className="browse-showanswer-rating-item">
                    <svg
                      className="browse-showanswer-rating-svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text
                        x="8"
                        y="8"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="8"
                        fill="currentColor"
                      >
                        5
                      </text>
                    </svg>
                  </span>
              </div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionOtherConditionsPanel">
      <div className="browse-question-container" id="ConclusionOtherConditionsNew">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella develop any new conditions during her LP/GOLPP journey that she didn&lsquo;t have before?
            </span>
          }
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>Yes</span>
            </li>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>No</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherConditions">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What other conditions did Bella develop during her LP/GOLPP journey?
            </span>
          }
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">The selections you made about the beginning of Bella&lsquo;s LP/GOLPP journey are preselected.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Acid reflux (GERD)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Megaesophagus</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Degenerative Myelopathy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Arthritis</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cushings</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Collapsing Trachea</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Hypothyroidism</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Hemangiosarcoma</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>No new conditions</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionCard2Panel">
      <div className="browse-panel-container" id="ConclusionCauseOfDeathPanel">
      <div className="browse-content-block" id="ConclusionCauseOfDeathHeading">
        <p className="browse-content-text">Euthanasia is a humane way to say goodbye when a beloved animal companion has reached end-of-life. This question asks about the primary cause of Bella&lsquo;s passing, not whether humane euthanasia was chosen to help them cross over.</p>
      </div>

      <div className="browse-question-container" id="ConclusionCauseOfDeath">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What was the ultimate reason why Bella crossed over the Rainbow Bridge?
            </span>
          }
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Post-op complications of LP-related surgical procedure</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>LP-related breathing crisis</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Aspiration pneumonia</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Quality of life due to polyneuropathy or hind-end weakness</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Quality of life due to LP-related breathing problems</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Cancer</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Seizure, stroke, or cardiac event</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Bacterial/viral infection</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Stopped eating</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionOtherPathPanel">
        <h3 className="browse-showanswer-title">These questions are speculative. If you were to have another dog with LP, would you choose a different path along their LP/GOLPP journey?</h3>
      <div className="browse-question-container" id="ConclusionOtherPathTieback">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What if anything would you differently?
            </span>
          }
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do tieback surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do tieback surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do tieback surgery longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathBVEAP">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?
            </span>
          }
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do BVEAP surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do BVEAP surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do BVEAP surgery longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathStent">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently??
            </span>
          }
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do the laryngeal stent implant again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do laryngeal stent implant surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do a laryngeal stent implant longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathArytenoidectomy">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?
            </span>
          }
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do the arytenoidectomy surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do the arytenoidectomy surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do the arytenoidectomy longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathVentrilocordectomy">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?
            </span>
          }
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do the ventrilocordectomy surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do the ventrilocordectomy surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do the ventrilocordectomy longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathNoTreatment">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?
            </span>
          }
          index={12}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>I would pursue tieback, laryngeal stent, or other veterinary procedure</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionStentAlternative">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              If the laryngeal stent were widely available, would you pursue that as an alternative to surgery?
            </span>
          }
          index={13}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Yes</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>No</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionDifferentChoices">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please briefly describe things you might do differently if you were to have another dog with LP/GOLPP (optional).
            </span>
          }
          index={14}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <div className="browse-showanswer-textarea" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-panel-container" id="ConclusionThanksPanel">
      <div className="browse-content-block" id="ConclusionThanksHead">
        <p className="browse-content-text">LP/GOLPP Survey 2026 Thank You For Taking The Survey! Please select the checkbox to complete and submit. Please click the Complete button to submit your responses.</p>
      </div>
      </div>
      </div>
      </div>
        </div>
      </main>
    </>
  );
};

export default Browse_16_Conclusion;
