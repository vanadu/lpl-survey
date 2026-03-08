import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_11_TreatmentFactors = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container">
      <h2 className="browse-content-heading">Factors that have influenced your LP/GOLPP decisions</h2>

      <p className="browse-content-text">Magna ullamco in sint esse exercitation nostrud eiusmod sint excepteur reprehenderit velit sit. Exercitation minim veniam fugiat elit. Nisi eu ipsum pariatur officia qui dolor consectetur Lorem aliquip non. Commodo labore cupidatat culpa ea exercitation aliquip laborum qui in tempor. Adipisicing esse ex est exercitation in laboris nisi eu ut deserunt dolor.</p>

      <p className="browse-content-text">Please rate the relevant factors in your decision whether or not to pursue tieback or other LP/GOLPP surgery.</p>

      <div className="browse-panel-container">
      <div className="browse-question-container" id="TreatmentFactorsDecision">
        <ShowAnswerContent
          title="Have you made a decision about whether or not to pursue LP surgery such as tieback for Bella?"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>We will pursue LP surgery such as tieback.</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>We&lsquo;ve decided not to pursue LP surgery.</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>We haven&lsquo;t decided yet.</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TreatmentFactorsDecisionStent">
        <ShowAnswerContent
          title="If a veterinarian were to offer a stent implant for LP/GOLPP in your area, would you explore that as a surgery alternative?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Yes, we would consider a stent implant.</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>No, we would not consider a stent implant.</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>We need more information.</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container">
      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">How have financial considerations factored into your decision?</h3>
      <div className="browse-question-container" id="TreatmentFactorsCost">
        <ShowAnswerContent
          title="Cost of surgical/stent procedure:"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TreatmentFactorsCostComplications">
        <ShowAnswerContent
          title="Added cost of possible post-op complications such as aspiration pneumonia:"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">How has the stage of Bella&lsquo;s LP/GOLPP factored into your decision?</h3>
      <div className="browse-question-container" id="TreatmentFactorsStageLP">
        <ShowAnswerContent
          title="Fear of a breathing emergency:"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TreatmentFactorsStageNeuropathy">
        <ShowAnswerContent
          title="Bella's hind-end weakness and polyneuropathy:"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">How have the risks of surgery factored into your decision?</h3>
      <div className="browse-question-container" id="TreatmentFactorsRisks">
        <ShowAnswerContent
          title="Risks of a surgical procedure with extended anesthesia:"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TreatmentFactorsRisksComplications">
        <ShowAnswerContent
          title="Risks of post-op complications such as aspiration pneumonia or suture failure:"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">How have Bella&lsquo;s age and general health considerations factored into your decision?</h3>
      <div className="browse-question-container" id="TreatmentFactorsAge">
        <ShowAnswerContent
          title="Bella's age:"
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TreatmentFactorsGeneralHealth">
        <ShowAnswerContent
          title="Bella's overall health and prospects for quality of life moving forward:"
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TreatmentFactorsCoexisting">
        <ShowAnswerContent
          title="Bella's preexisting conditions other than LP/GOLPP:"
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

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">How have your personal circumstances factored into your decision?</h3>
      <div className="browse-question-container" id="TreatmentFactorsCircumstancesAccess">
        <ShowAnswerContent
          title="Distance to or access to a qualified specialist:"
          index={12}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="TreatmentFactorsCircumstancesCare">
        <ShowAnswerContent
          title="Ability to provide adequate post-operative care:"
          index={13}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">What other considerations, if any, have factored into your decision?</h3>
      <div className="browse-question-container" id="TreatmentFactorsOther">
        <ShowAnswerContent
          title="Other considerations:"
          index={14}
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
      </div>
    </main>
    </>
  );
};

export default Browse_11_TreatmentFactors;
