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
        <div className="browse-panel-container"></div>

      <h2 className="browse-content-heading">&lt;h2&gt;About your LP/GOLPP companion&lt;h2&gt;</h2>

      <p className="browse-content-text">This section asks basic questions about your companion&lsquo;s species, age, breed, weight, and demeanor. The answers are required to continue with the survey. If you don&lsquo;t know exact information, it&lsquo;s OK to guesstimate.</p>

      <div className="browse-panel-container"></div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="{CmpnName}'s breed or mix:"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="{CmpnName}'s gender:"
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

      <div className="browse-question-container">
        <ShowAnswerContent
          title="{CmpnName}'s last known weight (in lbs or kg):"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
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

      <div className="browse-panel-container"></div>

      <div className="browse-panel-container"></div>

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">At about what age did &#123;CmpnName&#125; cross over the Rainbow Bridge?</h3>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Age in years (number):"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Months (number 0 - 11)"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">What is &#123;CmpnName&#125;&lsquo;s approximate age (in years and months)?</h3>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Age in years (number):"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Months (number 0 - 11)"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-panel-container"></div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="How would you describe {CmpnName}'s demeanor?"
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="How would you describe {CmpnName}'s anxiety level?"
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="{cvDoFirstPersonSingularInitialCap} you have pet insurance for {CmpnName}?"
          index={11}
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
    </main>
    </>
  );
};

export default Browse_02_CmpnInfo;
