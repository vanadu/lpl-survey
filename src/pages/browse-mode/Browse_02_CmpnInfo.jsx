import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";

const Browse_02_CmpnInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <BrowseMenu />
      <main className="page browse">
        <div className="browse-page">
      <div className="browse-page-nav" aria-label="Browse page navigation">
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_01_UserInfo" aria-label="Previous page">
          <span aria-hidden="true">‹</span>
        </Link>
        <div className="browse-page-marker" id="CMPN_INFO-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_03_InfoSources" aria-label="Next page">
          <span aria-hidden="true">›</span>
        </Link>
      </div>

      <div className="browse-panel-container" id="CmpnInfoCard1Panel">
      <div className="browse-content-block" id="CmpnInfoHeading">
        <h2 className="browse-content-heading">About your LP/GOLPP companion</h2>
      </div>

      <div className="browse-content-block" id="CmpnInfoText">
        <p className="browse-content-text">This section asks basic questions about your companion&lsquo;s species, age, breed, weight, and demeanor. The answers are required to continue with the survey. If you don&lsquo;t know exact information, it&lsquo;s OK to guesstimate.</p>
      </div>

      <div className="browse-panel-container" id="CmpnInfoDetailsPanel">
      <div className="browse-question-container" id="CmpnInfoAnimalType">
        <ShowAnswerContent
          title="Bella's species:"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Dog</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Cat</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Horse</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="CmpnInfoBreed">
        <ShowAnswerContent
          title="Bella's breed or mix:"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="CmpnInfoGender">
        <ShowAnswerContent
          title="Bella's gender:"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>Female</span>
            </li>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>Male</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="CmpnInfoWeight">
        <ShowAnswerContent
          title="Bella's last known weight (in lbs or kg):"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="CmpnInfoWeightUnits">
        <ShowAnswerContent
          title="Weight units:"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>Kg</span>
            </li>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>Lbs</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="CmpnInfoCard2Panel">
      <div className="browse-panel-container" id="CmpnInfoAgePanel">
      <div className="browse-panel-container" id="dcsdCmpnInfoAgePanel">
        <h3 className="browse-showanswer-title">At about what age did Bella cross over the Rainbow Bridge?</h3>
      <div className="browse-question-container" id="dcsdCmpnInfoAgeYears">
        <ShowAnswerContent
          title="Age in years (number):"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="dcsdCmpnInfoAgeMonths">
        <ShowAnswerContent
          title="Months (number 0 - 11)"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="lvngCmpnInfoAgePanel">
        <h3 className="browse-showanswer-title">What is Bella&lsquo;s approximate age (in years and months)?</h3>
      <div className="browse-question-container" id="lvngCmpnInfoAgeYears">
        <ShowAnswerContent
          title="Age in years (number):"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="lvngCmpnInfoAgeMonths">
        <ShowAnswerContent
          title="Months (number 0 - 11)"
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="CmpnInfoDemeanorPanel">
      <div className="browse-question-container" id="CmpnInfoDemeanor">
        <ShowAnswerContent
          title="How would you describe Bella's demeanor?"
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="CmpnInfoAnxiety">
        <ShowAnswerContent
          title="How would you describe Bella's anxiety level?"
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="CmpnInfoHasInsurance">
        <ShowAnswerContent
          title="Do you have pet insurance for Bella?"
          index={12}
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
      </div>
        </div>
      </main>
    </>
  );
};

export default Browse_02_CmpnInfo;
