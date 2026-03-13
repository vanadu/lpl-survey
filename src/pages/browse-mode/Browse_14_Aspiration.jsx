import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_14_Aspiration = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container" id="AspirationCard1Panel">
      <div className="browse-content-block" id="AspirationHeading">
        <h2 className="browse-content-heading">Bella&lsquo;s experience with aspiration pneumonia</h2>
      </div>

      <div className="browse-content-block" id="AspirationText">
        <p className="browse-content-text">Aspiration pneumonia (AP) is the most common and most serious direct complication of LP/GOLPP. This section asks questions about Bella&lsquo;s experience with AP.</p>
      </div>

      <div className="browse-content-block" id="AspirationInfoLink">
        <p className="browse-content-text">&amp;nbsp; What is aspiration pneumonia and why is it a frequent complication of LP/GOLPP ?</p>
      </div>

      <div className="browse-panel-container" id="AspirationDidHavePanel">
      <div className="browse-question-container" id="AspirationDidHave">
        <ShowAnswerContent
          title="Did Bella ever get aspiration pneumonia (AP) after the appearance of the first LP/GOLPP symptoms?"
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
          title="How many times did Bella get AP?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>More than three times</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="AspirationInpatient">
        <ShowAnswerContent
          title="Did Bella ever need inpatient, overnight, or emergency care for AP?"
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
          title="How many times did Bella require inpatient, overnight, or emergency care for AP?"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
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
          title="Did Bella ever have AP after the surgery (i.e., tieback, BVEAP)?"
          index={5}
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

      <div className="browse-question-container" id="AspirationSurgeryPostCount">
        <ShowAnswerContent
          title="How many times did Bella get AP after the surgery?"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
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
          title="Did Bella ever have AP after the stent implant procedure?"
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
          title="How many times did Bella get AP after the stent implant?"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Three times</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
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
          title="What was the approximate pre-insurance cost of the AP treatment for Bella:"
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Prefer not to say</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Under $100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$100-$300</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$300-$500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$500-$1000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$1001-$3000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$3000-$5000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
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
