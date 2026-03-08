import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_08_PrimaryVet = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container">
      <h2 className="browse-content-heading">Your primary veterinarian and Bella&lsquo;s LP/GOLPP</h2>

      <p className="browse-content-text">This section asks questions about your primary veterinarian&lsquo;s handling of Bella&lsquo;s LP/GOLPP symptoms.</p>
      <p className="browse-content-text">If you changed primary vets since Bella&lsquo;s LP/GOLPP symptoms first appeared , please answer the question about your preferred or most recent primary veterinarian.</p>

      <div className="browse-panel-container">
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

      <div className="browse-panel-container">
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
          title="Did your primary veterinarian prescribe or recommend a reflux medication such as Pepcid (famotadine) or Prilosec (omeprazole) for reflux?"
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
          title="Did you start Bella on reflux medications such as Pepcid (famotadine) or Prilosec (omeprazole) on your own intiative without a prescription or recommendation from your primary vet?"
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

      <div className="browse-panel-container">
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

      <div className="browse-panel-container">
      <div className="browse-panel-container">
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
          title="What did they tell you about the how LP/GOLPP might affect Bella?"
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

      <div className="browse-panel-container">
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

      <div className="browse-panel-container">
      <div className="browse-question-container" id="PrimaryVetConfidence">
        <ShowAnswerContent
          title="How confident have you been you in your current primary veterinarian's knowledge level regarding LP/GOLPP?"
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
