import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_02_CmpnInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container">
      <h2 className="browse-content-heading">About your LP/GOLPP companion</h2>

      <p className="browse-content-text">This section asks basic questions about your companion&lsquo;s species, age, breed, weight, and demeanor. The answers are required to continue with the survey. If you don&lsquo;t know exact information, it&lsquo;s OK to guesstimate.</p>

      <div className="browse-panel-container">
      <div className="browse-question-container" id="CmpnInfoBreed">
        <ShowAnswerContent
          title="Bella's breed or mix:"
          index={1}
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
          index={2}
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
          index={3}
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
          index={4}
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

      <div className="browse-panel-container">
      <div className="browse-panel-container">

      </div>

      <div className="browse-panel-container">
      <div className="browse-question-container" id="CmpnInfoDemeanor">
        <ShowAnswerContent
          title="How would you describe Bella's demeanor?"
          index={5}
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
          index={6}
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
          index={7}
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
