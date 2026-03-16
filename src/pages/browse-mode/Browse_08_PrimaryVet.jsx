import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_08_PrimaryVet = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_07_PrimaryDuration" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="PRIMARY_VET-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_09_Diagnosis" aria-label="Next page">
          <span aria-hidden="true"><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </Link>
      </div>

      <div className="browse-panel-container" id="PrimaryVetCard1Panel">
      <div className="browse-content-block" id="PrimaryVetHeading">
        <h2 className="browse-content-heading">Your primary veterinarian and Bella&lsquo;s LP/GOLPP</h2>
      </div>

      <div className="browse-content-block" id="PrimaryVetText">
        <p className="browse-content-text">This section asks questions about your primary veterinarian&lsquo;s handling of Bella&lsquo;s LP/GOLPP symptoms.</p>
        <p className="browse-content-text">If you changed primary vets since Bella&lsquo;s LP/GOLPP symptoms first appeared, please answer the question about your preferred or most recent primary veterinarian.</p>
      </div>

      <div className="browse-panel-container" id="PrimaryVetInflammationPanel">
      <div className="browse-question-container" id="PrimaryVetInflammation">
        <ShowAnswerContent
          title="Did your primary veterinarian observe any inflammation, irritation, or infection in the larynx/pharynx area?"
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
      </div>

      <div className="browse-panel-container" id="PrimaryVetRefluxPanel">
      <div className="browse-question-container" id="PrimaryVetReflux">
        <ShowAnswerContent
          title="Did your primary veterinarian mention reflux (GERD) or esophageal dysfunction as a possible cause of Bella's symptoms?"
          index={2}
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

      <div className="browse-question-container" id="PrimaryVetRefluxMeds">
        <ShowAnswerContent
          title="Did your primary veterinarian prescribe or recommend a reflux medication such as Pepcid (famotidine) or Prilosec (omeprazole) for reflux?"
          index={3}
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

      <div className="browse-question-container" id="PrimaryVetRefluxInitiative">
        <ShowAnswerContent
          title="Did you start Bella on reflux medications such as Pepcid (famotidine) or Prilosec (omeprazole) on your own initiative without a prescription or recommendation from your primary vet?"
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
      </div>

      <div className="browse-panel-container" id="PrimaryVetDiscussPanel">
      <div className="browse-question-container" id="PrimaryVetDidDiscuss">
        <ShowAnswerContent
          title="Did your primary vet discuss LP/GOLPP as a possible cause of Bella's symptoms? "
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>No, did not mention LP/GOLPP at all</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Said Bella&lsquo;s symptoms were possibly due to LP/GOLPP</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Said Bella&lsquo;s symptoms were definitely due to LP/GOLPP</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="PrimaryVetCard2Panel">
      <div className="browse-panel-container" id="PrimaryVetInfoPanel">
      <div className="browse-question-container" id="PrimaryVetInfo">
        <ShowAnswerContent
          title="Did your current primary veterinarian give you helpful information about how LP/GOLPP might affect Bella?"
          index={6}
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

      <div className="browse-question-container" id="PrimaryVetInfoDetails">
        <ShowAnswerContent
          title="What did they tell you about how LP/GOLPP might affect Bella?"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Loss or weakening of bark</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>LP/GOLPP is a progressive disease</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Hot, humid weather exacerbates symptoms</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Potential for life-threatening breathing crisis</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="PrimaryVetSurgeryPanel">
      <div className="browse-question-container" id="PrimaryVetSurgery">
        <ShowAnswerContent
          title="Did your primary veterinarian make a recommendation about tieback or other LP/GOLPP surgeries for Bella's LP/GOLPP?"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Made no recommendation</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Encouraged me to talk to a surgeon</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Advised against surgery</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="PrimaryVetSurgeryPerception">
        <ShowAnswerContent
          title="Do you feel like your primary veterinarian's recommendation against surgery was due to Bella's condition or to a generally negative perception of tieback surgery?"
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Bella&lsquo;s specific condition</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>General negative perception</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="PrimaryVetConfidencePanel">
      <div className="browse-question-container" id="PrimaryVetConfidence">
        <ShowAnswerContent
          title="How confident have you been in your current primary veterinarian's knowledge level regarding LP/GOLPP?"
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="PrimaryVetSatisfaction">
        <ShowAnswerContent
          title="How satisfied have you been with your current primary veterinarian's handling of Bella's LP/GOLPP?"
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
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

export default Browse_08_PrimaryVet;
