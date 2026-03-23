import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_14_Aspiration = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_13_OtcProducts" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="ASPIRATION-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_15_Neuropathy" aria-label="Next page">
          <span aria-hidden="true"><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </Link>
      </div>

      <div className="browse-panel-container" id="AspirationCard1Panel">
      <div className="browse-content-block" id="AspirationHeading">
        <h2 className="browse-content-heading">Bella&lsquo;s experience with aspiration pneumonia</h2>
      </div>

      <div className="browse-content-block" id="AspirationText">
        <p className="browse-content-text">Aspiration pneumonia (AP) is the most common and most serious direct complication of LP/GOLPP. This section asks questions about Bella&lsquo;s experience with AP.</p>
      </div>

      <div className="browse-content-block browse-content-block--info" id="AspirationInfoLink">
        <div className="survey-general-info">
          <img
            src="/img-info-icon.png"
            className="survey-info-icon"
            alt="Example image"
          />
          {" "}
          <Link
            href="/in-progress"
            className="survey-info-link"
          >
            What is aspiration pneumonia and why is it a frequent complication of LP/GOLPP ?
          </Link>
        </div>
      </div>

      <div className="browse-panel-container" id="AspirationDidHavePanel">
      <div className="browse-question-container" id="AspirationDidHave">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella ever get aspiration pneumonia (AP) after the appearance of the first LP/GOLPP symptoms?
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
      </div>

      <div className="browse-panel-container" id="AspirationGeneralPanel">
      <div className="browse-question-container" id="AspirationCount">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How many times did Bella get AP?
            </span>
          }
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than three times</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="AspirationInpatient">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella ever need inpatient, overnight, or emergency care for AP?
            </span>
          }
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

      <div className="browse-question-container" id="AspirationInpatientCount">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How many times did Bella require inpatient, overnight, or emergency care for AP?
            </span>
          }
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than three times</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="AspirationCard2Panel">
      <div className="browse-panel-container" id="AspirationSurgeryPanel">
      <div className="browse-question-container" id="AspirationSurgeryPost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella ever have AP after the surgery (i.e., tieback, BVEAP)?
            </span>
          }
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Includes tieback, BVEAP, ventrilocordectomy, arytenoidectomy and other invasive surgery procedures.</p>
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

      <div className="browse-question-container" id="AspirationSurgeryPostCount">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How many times did Bella get AP after the surgery?
            </span>
          }
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than three times</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="AspirationStentPanel">
      <div className="browse-question-container" id="AspirationStentPost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella ever have AP after the stent implant procedure?
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

      <div className="browse-question-container" id="AspirationStentPostCount">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How many times did Bella get AP after the stent implant?
            </span>
          }
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than three times</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="AspirationCostPanel">
      <div className="browse-question-container" id="AspirationCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What was the approximate pre-insurance cost of the AP treatment for Bella:
            </span>
          }
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Prefer not to say</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$100-$300</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$300-$500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$500-$1000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$1001-$3000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$3000-$5000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $5000</span>
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

export default Browse_14_Aspiration;
