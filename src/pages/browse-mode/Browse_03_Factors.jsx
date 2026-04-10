import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_03_Factors = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_02_CmpnInfo" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="FACTORS-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_04_Symptoms" aria-label="Next page">
          <span aria-hidden="true"><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </Link>
      </div>

      <div className="browse-panel-container" id="FactorsCard1Panel">
      <div className="browse-content-block" id="FactorsHeading">
        <h2 className="browse-content-heading">Your LP/GOLPP Decisions</h2>
      </div>

      <div className="browse-content-block" id="FactorsText">
        <p className="browse-content-text">This section asks some questions about how you learned about LP/GOLPP and about your decision-making process. Please don&amp;lsquo;t overthink. In this section it&amp;lsquo;s best to answer according to your first impulse.</p>
      </div>

      <div className="browse-content-block" id="FactorsInfoText">
        <p className="browse-content-text">These questions ask about how you learned what you know about LP/GOLPP.</p>
      </div>

      <div className="browse-panel-container" id="FactorsSourcesPanel">
      <div className="browse-question-container" id="FactorsPriorKnowledge">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Had you ever heard of LP before Bella got it?
            </span>
          }
          index={1}
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

      <div className="browse-question-container" id="FactorsSourcesTypes">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Which sources of information have you accessed to learn about LP?
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
              <span>Veterinarians</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Websites</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Facebook groups</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Youtube, Instagram or other video</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Social media chat</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>AI models like ChatGPT</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="FactorsBestSource">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Which of those information sources did you find MOST useful (please select one)?
            </span>
          }
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>

          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="FactorsClearAnswers">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did you find it hard to get clear answers to your questions so you could make informed choices for Bella?
            </span>
          }
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = No, not hard at all, 5 = yes, very hard</p>
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
      </div>

      <div className="browse-panel-container" id="FactorsCard2Panel">
      <div className="browse-content-block" id="FactorsInfoText">
        <p className="browse-content-text">These questions ask which factors played a role in the decisions you&amp;lsquo;ve made about Bella&lsquo;s&amp;nbsp;LP/GOLPP.</p>
      </div>

      <div className="browse-panel-container" id="FactorsCostPanel">
        <h3 className="browse-showanswer-title">How have financial considerations factored into your LP/GOLPP decisions?</h3>
      <div className="browse-question-container" id="FactorsProcedureCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Cost of surgical/stent procedure:
            </span>
          }
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-question-container" id="FactorsComplicationsCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Added cost of possible post-op complications such as aspiration pneumonia:
            </span>
          }
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-panel-container" id="FactorsSymptomsPanel">
        <h3 className="browse-showanswer-title">Which aspects of Bella&lsquo;s LP/GOLPP symptoms have factored into your decisions?</h3>
      <div className="browse-question-container" id="FactorsSymptomsBreathingCrisis">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Fear of a breathing crisis or emergency:
            </span>
          }
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-question-container" id="FactorsSymptomsNeuropathy">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Progression of Bella&lsquo;s hind-end weakness and polyneuropathy:
            </span>
          }
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-panel-container" id="FactorsSurgeryRisksPanel">
        <h3 className="browse-showanswer-title">Which risk factors of surgery have factored into your LP/GOLPP decisions?</h3>
      <div className="browse-question-container" id="FactorsSurgeryAnesthesia">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Extended anesthesia:
            </span>
          }
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-question-container" id="FactorsSurgeryInpatient">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Risk of direct inpatient complications of surgery:
            </span>
          }
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-question-container" id="FactorsSurgeryLongTerm">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Risks of long-term complications such as aspiration pneumonia, suture failure, or infection:
            </span>
          }
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-panel-container" id="FactorsGeneralPanel">
        <h3 className="browse-showanswer-title">How have Bella&lsquo;s age and general health considerations factored into your LP/GOLPP decisions?</h3>
      <div className="browse-question-container" id="FactorsGeneralAge">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Bella&lsquo;s age:
            </span>
          }
          index={12}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-question-container" id="FactorsGeneralHealth">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Bella&lsquo;s overall health and prospects for quality of life:
            </span>
          }
          index={13}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-question-container" id="FactorsGeneralCoexisting">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Bella&lsquo;s preexisting conditions other than LP/GOLPP:
            </span>
          }
          index={14}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-panel-container" id="FactorsCircumstancesPanel">
        <h3 className="browse-showanswer-title">How have your personal circumstances factored into your decision?</h3>
      <div className="browse-question-container" id="FactorsCircumstancesAccess">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Distance to or access to a qualified specialist:
            </span>
          }
          index={15}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-question-container" id="FactorsCircumstancesFutureCare">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Ability to provide adequate care in the future:
            </span>
          }
          index={16}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = less important, 5 = more important</p>
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

      <div className="browse-panel-container" id="FactorsOtherPanel">
        <h3 className="browse-showanswer-title">What other considerations, if any, have factored into your LP/GOLPP decisions?</h3>
      <div className="browse-question-container" id="FactorsOther">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Other considerations:
            </span>
          }
          index={17}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Maximum 250 characters.</p>
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>
        </div>
      </main>
    </>
  );
};

export default Browse_03_Factors;
