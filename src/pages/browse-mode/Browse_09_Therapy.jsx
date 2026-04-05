import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_09_Therapy = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_08_Procedure" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="THERAPY-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_10_Breathing" aria-label="Next page">
          <span aria-hidden="true"><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </Link>
      </div>

      <div className="browse-panel-container" id="TherapyCard1Panel">
      <div className="browse-content-block" id="TherapyHeading">
        <h2 className="browse-content-heading">Therapy for LP/GOLPP</h2>
      </div>

      <div className="browse-content-block" id="TherapyText">
        <p className="browse-content-text">This section asks about non-traditional treatments or therapy Bella has had for LP/GOLPP.</p>
      </div>

      <div className="browse-panel-container" id="TherapyTypePanel">
      <div className="browse-question-container" id="TherapyDidHave">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella receive acupuncture or other therapies to help with LP/GOLPP symptoms?
            </span>
          }
          index={1}
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

      <div className="browse-question-container" id="TherapyType">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What therapies or treatments did Bella receive?
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
              <span>Acupuncture</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Physical or hydro therapy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cold laser or red light therapy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Chiropractic</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TherapyAcupunctureRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the effect of acupuncture on Bella&lsquo;s breathing:
            </span>
          }
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyAcupunctureRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the effect of acupuncture on Bella&lsquo;s mobility or behavior:
            </span>
          }
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyTherapyRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the effect of physical or hydro therapy on Bella&lsquo;s breathing:
            </span>
          }
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyTherapyRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the effect of physical or hydro therapy on Bella&lsquo;s mobility or behavior:
            </span>
          }
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyColdLaserRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How effective was cold laser or red light therapy on Bella&lsquo;s breathing:
            </span>
          }
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyColdLaserRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the effect of cold laser or red light therapy on Bella&lsquo;s mobility or behavior:
            </span>
          }
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyChiroRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the effect of chiropractic on Bella&lsquo;s breathing on Bella&lsquo;s mobility or behavior:
            </span>
          }
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyChiroRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the effect of chiropractic on Bella&lsquo;s mobility or behavior:
            </span>
          }
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = very positive</p>
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

      <div className="browse-question-container" id="TherapyCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Average monthly cost of Bella&lsquo;s acupuncture or other therapies:
            </span>
          }
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">If you don&lsquo;t know exactly, it&lsquo;s OK to guesstimate.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$101-150</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$151-$250</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $250</span>
            </li>
          </ul>
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

export default Browse_09_Therapy;
