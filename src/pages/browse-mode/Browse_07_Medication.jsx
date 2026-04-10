import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_07_Medication = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_06_Diagnosis" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="Medication-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_08_Procedure" aria-label="Next page">
          <span aria-hidden="true"><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </Link>
      </div>

      <div className="browse-panel-container" id="MedicationCard1Panel">
      <div className="browse-content-block" id="MedicationHeading">
        <h2 className="browse-content-heading">Bella&lsquo;s LP/GOLPP Medications</h2>
      </div>

      <div className="browse-content-block" id="MedicationTextImportant">
        <p className="browse-content-text">This section asks about prescription and non-prescription medications and supplements Bella has taken for LP/GOLPP.</p>
      </div>

      <div className="browse-panel-container" id="MedicationPrescriptionPanel">
      <div className="browse-question-container" id="MedicationPrescription">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              &#123;cvDoThirdPersonSingularInitialCap&#125; Bella take any prescription medications for LP/GOLPP symptoms?
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

      <div className="browse-question-container" id="MedicationPrescriptionType">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What prescription medications if any did your primary veterinarian prescribe or recommend for Bella&lsquo;s LP/GOLPP symptoms?
            </span>
          }
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please also include discontinued medications.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Doxepin</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Trazodone</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Gabapentin</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Galliprant</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Prednisone or other steriod</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Benadryl or other antihistamine</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cerenia (maripotant citrate)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Meloxicam</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Acepromazine (Atravet, ACP, Acepromine)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Albuterol or other inhaler</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Temaril P</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="MedicationPrescriptionCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Average monthly cost of Bella&lsquo;s prescriptions:
            </span>
          }
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">If you don&lsquo;t know exactly, it&lsquo;s OK to guesstimate.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $50</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$51-$100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$101-$200</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $200</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="MedicationPrescriptionDoxepinRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Doxepin have an effect on Bella&lsquo;s breathing?
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

      <div className="browse-question-container" id="MedicationPrescriptionDoxepinRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Doxepin have an effect on Bella&lsquo;s mobility or behavior?
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

      <div className="browse-question-container" id="MedicationPrescriptionTrazodoneRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Trazodone have an effect on Bella&lsquo;s breathing?
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

      <div className="browse-question-container" id="MedicationPrescriptionTrazodoneRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Trazodone have an effect on Bella mobility or behavior?
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

      <div className="browse-question-container" id="MedicationPrescriptionGabapentinRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Gabapentin have an effect on Bella&lsquo;s breathing?
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

      <div className="browse-question-container" id="MedicationPrescriptionGabapentinRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Gabapentin have an effect on Bella&lsquo;s mobility or behavior?
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

      <div className="browse-question-container" id="MedicationPrescriptionGalliprantRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Galliprant have an effect on Bella&lsquo;s breathing?
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

      <div className="browse-question-container" id="MedicationPrescriptionGalliprantRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Galliprant have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={11}
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

      <div className="browse-question-container" id="MedicationPrescriptionSteroidRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Prednisone have an effect on Bella&lsquo;s breathing?
            </span>
          }
          index={12}
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

      <div className="browse-question-container" id="MedicationPrescriptionSteroidRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Prednisone have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={13}
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

      <div className="browse-question-container" id="MedicationPrescriptionAntihistamineRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Benadryl or other antihistamine have an effect on Bella&lsquo;s breathing?
            </span>
          }
          index={14}
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

      <div className="browse-question-container" id="MedicationPrescriptionAntihistamineRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Benadryl or other antihistamine have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={15}
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

      <div className="browse-question-container" id="MedicationPrescriptionCereniaRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Cerenia have an effect on Bella&lsquo;s breathing?
            </span>
          }
          index={16}
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

      <div className="browse-question-container" id="MedicationPrescriptionCereniaRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Cerenia have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={17}
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

      <div className="browse-question-container" id="MedicationPrescriptionMeloxicamRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Meloxicam have an effect on Bella&lsquo;s breathing?
            </span>
          }
          index={18}
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

      <div className="browse-question-container" id="MedicationPrescriptionMeloxicamRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Meloxicam have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={19}
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

      <div className="browse-question-container" id="MedicationPrescriptionAcepromineRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Acepromine have an effect on Bella&lsquo;s breathing?
            </span>
          }
          index={20}
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

      <div className="browse-question-container" id="MedicationPrescriptionAcepromineRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Acepromine have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={21}
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

      <div className="browse-question-container" id="MedicationPrescriptionAlbuterolRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Albuterol or other inhaler have an effect on Bella&lsquo;s breathing?
            </span>
          }
          index={22}
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

      <div className="browse-question-container" id="MedicationPrescriptionAlbuterolRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Albuterol or other inhaler have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={23}
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

      <div className="browse-question-container" id="MedicationPrescriptionTemarilPRatingBreathing">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Temaril P have an effect on Bella&lsquo;s breathing?
            </span>
          }
          index={24}
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

      <div className="browse-question-container" id="MedicationPrescriptionTemarilPRatingMobility">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Temaril P have an effect on Bella&lsquo;s mobility or behavior?
            </span>
          }
          index={25}
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
      </div>

      <div className="browse-panel-container" id="MedicationRefluxMedicationPanel">
      <div className="browse-question-container" id="MedicationRefluxMedications">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Has Bella taken any medications for reflux (GERD) or to improve digestive motility?
            </span>
          }
          index={26}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Yes, as prescribed by a veterinarian</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Yes, without a prescription on my own initiative</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>No</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="MedicationRefluxMedicationsLPEffect">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How did the reflux medications affect Bella&lsquo;s LP/GOLPP symptoms?
            </span>
          }
          index={27}
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

      <div className="browse-question-container" id="MedicationRefluxMedicationsAPEffect">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How did the reflux medications affect Bella&lsquo;s risk of aspiration pneumonia?
            </span>
          }
          index={28}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">1 = very negative, 3 = no effect, 5 = yes, very positive</p>
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

      <div className="browse-panel-container" id="MedicationCard2Panel">
      <div className="browse-panel-container" id="MedicationSupplementsTypePanel">
      <div className="browse-question-container" id="MedicationSupplementsDidPurchase">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Have you purchased supplements based on a particular ingredient for Bella&lsquo;s LP/GOLPP symptoms?
            </span>
          }
          index={29}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please only include products you&lsquo;ve used regularly for over 60 days</p>
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

      <div className="browse-question-container" id="MedicationSupplementsType">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please select the main ingredient in the supplements Bella has taken:
            </span>
          }
          index={30}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Tumeric</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>CBD</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Lion&lsquo;s mane</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Myelin sheath</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Egg-shell membrane</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Ursolic acid</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Evening Primrose Oil</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Fish or salmon oil</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Glucosamine/Chrondroitin/MSM</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Hyaluronic acid/Collagen</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="MedicationSupplementsCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What was the average monthly cost of the supplements?
            </span>
          }
          index={31}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $50</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$51-$100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$101-$150</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $150</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="MedicationSupplementsEffectiveness">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the overall effectiveness of the supplements:
            </span>
          }
          index={32}
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
      </div>

      <div className="browse-panel-container" id="MedicationProtocolPanel">
      <div className="browse-question-container" id="MedicationProtocolDidPurchase">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Have you purchased products that are advertised as a blend or protocol of ingredients created for LP/GOLPP? 
            </span>
          }
          index={33}
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

      <div className="browse-question-container" id="MedicationProtocolCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What was the average monthly cost of the blends or protocols?
            </span>
          }
          index={34}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $50</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$51-$100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$101-$150</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $150</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="MedicationProtocolEffectiveness">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Please rate the overall effectiveness of the blends or &lsquo;protocols&lsquo; you purchased for Bella:
            </span>
          }
          index={35}
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
      </div>
      </div>
        </div>
      </main>
    </>
  );
};

export default Browse_07_Medication;
