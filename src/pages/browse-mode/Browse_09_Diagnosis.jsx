import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_09_Diagnosis = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container">
      <h2 className="browse-content-heading">Bella&lsquo;s LP/GOLPP diagnosis</h2>

      <p className="browse-content-text">This section asks who provided Bella&lsquo;s LP/GOLPP diagnosis and what diagnostic procedures they used to arrive at their conclusion.</p>
      <p className="browse-content-text">You may have seen multiple vets about Bella&lsquo;s LP/GOLPP symptoms. Please answer the question about the vet who provided the definitive diagnosis, i.e., the one you used to make decisions about Bella&lsquo;s LP/GOLPP.</p>

      <div className="browse-panel-container">
      <div className="browse-question-container" id="DiagnosisWho">
        <ShowAnswerContent
          title="Which veterinary professional provided you with the definitive LP/GOLPP diagnosis:"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Primary veterinarian</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Internal medicine specialist</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Neurologist</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Soft tissue specialist or surgeon</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>General or orthopedic surgeon</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="DiagnosticType">
        <ShowAnswerContent
          title="What diagnostic procedure was used to arrive at the definitive diagnosis?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Visual/auditory exam only</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Sedated visual exam of larynx</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>X-Ray or other imaging</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Ultrasound</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Video endoscope or laryngoscope under anesthesia</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="DiagnosisStage">
        <ShowAnswerContent
          title="Was Bella diagnosed with unilateral or bilateral LP?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Unilateral (one-side)</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Bilateral (both sides)</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I wasn&lsquo;t told what stage Bella&lsquo;s LP was in</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="DiagnosisTimeAfterSymptoms">
        <ShowAnswerContent
          title="About how long after Bella's first symptoms appeared did you get the diagnosis?:"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Less than one month</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Between one and three months</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Between four and six months</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Between six months and a year</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Longer than a year</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="DiagnosisCost">
        <ShowAnswerContent
          title="What was the pre-insurance cost of the diagnosis?"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $500</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$501-$1500</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$1500-$3000</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $3000</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="DiagnosisSurgeonContingent">
        <ShowAnswerContent
          title="Did the surgeon perform the diagnosis without requiring surgery afterwards?"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Yes, required surgery consent before diagnosis</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>No, did not require surgery consent for diagnosis</span>
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
      </div>
    </main>
    </>
  );
};

export default Browse_09_Diagnosis;
