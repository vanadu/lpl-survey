import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_05_BreathingCrisis = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_04_IntubationHistory" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="BREATHING_CRISIS-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_06_EarlySymptoms" aria-label="Next page">
          <span aria-hidden="true"><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </Link>
      </div>

      <div className="browse-panel-container" id="BreathingCrisisCard1Panel">
      <div className="browse-content-block" id="BreathingCrisisHeading">
        <h2 className="browse-content-heading">LP Breathing Crisis</h2>
      </div>

      <div className="browse-content-block" id="BreathingCrisisText">
        <p className="browse-content-text">In a breathing crisis, the paralyzed arytenoid cartilages block the airway and cut off airflow to the lungs. In extreme cases, the crisis escalates into a breathing emergency that requires care at a veterinary facility to restore breathing. These questions are about breathing emergencies that required care from a licensed veterinarian.</p>
      </div>

      <div className="browse-panel-container" id="BreathingCrisisDidHavePanel">
      <div className="browse-question-container" id="BreathingCrisisDidHave">
        <ShowAnswerContent
          title="Did Bella ever have a breathing crisis that required an emergency visit to a veterinary professional?"
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

      <div className="browse-question-container" id="BreathingCrisisCount">
        <ShowAnswerContent
          title="How many times did Bella visit a veterinary professional due to an LP/GOLPP-associated breathing crisis?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than twice</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="BreathingCrisisCost">
        <ShowAnswerContent
          title="About what was the total pre-insurance cost of these visits?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Less than $250</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$250 - $500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$500 - $1000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>More than $1000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Don&lsquo;t know or prefer not to say</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="BreathingCrisisCard2Panel">
      <div className="browse-panel-container" id="BreathingCrisisDetailsPanel">
      <div className="browse-question-container" id="BreathingCrisisAdvice">
        <ShowAnswerContent
          title="Did a veterinary professional give you any advice on how to deal with an LP-induced breathing emergency/crisis?"
          index={4}
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

      <div className="browse-question-container" id="BreathingCrisisAdviceType">
        <ShowAnswerContent
          title="What advice did they give you to help you deal with a breathing crisis?"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Adminster a sedative</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Get them to a cool place</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Apply ice, a cooling vest, or some other cooling agent</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Blow air into their nose (CPR)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Bring them to an emergency facility immediately</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="BreathingCrisisProvidedSubstance">
        <ShowAnswerContent
          title="Did a veterinary professional provide you with a substance or product to help deal with an LP/GOLPP-induced breathing emergency/crisis?"
          index={6}
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

      <div className="browse-question-container" id="BreathingCrisisProvidedSubstanceType">
        <ShowAnswerContent
          title="What substance or product did they provide?"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Sedative</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Steroid, i.e., prednisone</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Supplemental oxygen</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="BreathingCrisisSubstanceForm">
        <ShowAnswerContent
          title="In what form was the sedative or steroid provided?"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Injectible</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Liquid</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Suppository</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Gel or paste</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Pill or tablet</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
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

export default Browse_05_BreathingCrisis;
