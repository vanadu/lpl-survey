import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_03_InfoSources = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container" id="InfoSourcesCard1Panel">
      <div className="browse-content-block" id="InfoSourcesHeading">
        <h2 className="browse-content-heading">How did you learn about LP/GOLPP?</h2>
      </div>

      <div className="browse-content-block" id="InfoSourcesText">
        <p className="browse-content-text">This section asks some questions about how you learned about laryngeal paralysis and geriatric-onset laryngeal paralysis (LP) and polyneuropathy (GOLPP) and whether the information you found helped you make decisions for Bella. There is no right or wrong answer, so please answer as best as you can without thinking too hard about it.</p>
      </div>

      <div className="browse-panel-container" id="InfoSourcesMainPanel">
      <div className="browse-question-container" id="InfoSourcesPriorKnowledge">
        <ShowAnswerContent
          title="Had you ever heard of LP before Bella got it?"
          index={1}
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

      <div className="browse-question-container" id="InfoSourcesTypes">
        <ShowAnswerContent
          title="Which sources of information have you accessed to learn about LP?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Veterinarians</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Websites</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Facebook groups</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Youtube, Instagram or other video</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Reddit, X (Twitter), or other social media</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>AI models like ChatGPT</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="InfoSourcesBestSource">
        <ShowAnswerContent
          title="Which of those information sources did you find MOST useful (please select one)?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>

          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="InfoSourcesCard2Panel">
      <div className="browse-panel-container" id="InfoSourcesQualityPanel">
      <div className="browse-question-container" id="InfoSourcesHardToUnderstand">
        <ShowAnswerContent
          title="Did you find the information you got about LP difficult to understand?"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="InfoSourcesContradictory">
        <ShowAnswerContent
          title="Do you feel like a lot of the information you got about LP was contradictory?"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="InfoSourcesClearAnswers">
        <ShowAnswerContent
          title="Did you find it hard to get clear answers to your questions so you could make informed choices for Bella?"
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
      </div>
      </div>
    </main>
    </>
  );
};

export default Browse_03_InfoSources;
