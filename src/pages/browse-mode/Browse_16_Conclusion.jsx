import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_16_Conclusion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container" id="ConclusionCard1Panel">
      <div className="browse-content-block" id="ConclusionHeading">
        <h2 className="browse-content-heading">Conclusion</h2>
      </div>

      <div className="browse-content-block" id="Conclusion">
        <p className="browse-content-text">The last section of this survey references your earlier responses to determine how Bella&lsquo;s LP/GOLPP developed over time and what factors may have played a role in the LP/GOLPP progression.</p>
      </div>

      <div className="browse-panel-container" id="ConclusionsPanelLifeStatusTrue">
      <div className="browse-content-block" id="ConclusionsPanelLifeStatusTrueText">
        <p className="browse-content-text">NOTE: These questions ask about the last station of Bella&lsquo;s LP/GOLPP journey before she crossed over the Rainbow Bridge. If it&lsquo;s too painful to revisit this stage of Bella&lsquo;s life, it might be best to discontinue the survey and return to it later.</p>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionsPanelLifeStatusFalse">
      <div className="browse-content-block" id="ConclusionsPanelLifeStatusFalseText">
        <p className="browse-content-text">IMPORTANT: Please answer the questions about Bella in her current state of health:</p>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionDetailsPanel">
      <div className="browse-question-container" id="ConclusionSpecialConsiderations">
        <ShowAnswerContent
          title="Please describe any special considerations for Bella due to LP-related breathing issues:"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>No special considerations</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Exercise limitations</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Type, amount or frequency of feeding</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Travel restrictions</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Other behavior restrictions i.e., anxiety, excitement</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionGeneralCondition">
        <ShowAnswerContent
          title="Please describe Bella's general physical condition:"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>No noticeable symptoms</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Significant hind-end weakness</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Frequent falling</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Difficulty getting up or standing</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Urinary incontinence</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Fecal incontinence</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionQOL">
        <ShowAnswerContent
          title="How would you rate Bella's quality of life at this stage?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionOtherConditionsPanel">
      <div className="browse-question-container" id="ConclusionOtherConditionsNew">
        <ShowAnswerContent
          title="Did Bella develop any new conditions during her LP/GOLPP journey that she didn't have before?"
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

      <div className="browse-question-container" id="ConclusionOtherConditions">
        <ShowAnswerContent
          title="What other conditions did Bella develop during her LP/GOLPP journey?"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Acid reflux (GERD)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Megaesophagus</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Degenerative Myelopathy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Arthritis</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cushings</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Collapsing Trachea</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Hypothyroidism</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Hemangiosarcoma</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>No new conditions</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionCard2Panel">
      <div className="browse-panel-container" id="ConclusionCauseOfDeathPanel">
      <div className="browse-content-block" id="ConclusionCauseOfDeathHeading">
        <p className="browse-content-text">Euthanasia is a humane way to say goodbye when a beloved animal companion has reached end-of-life. This question asks about the primary cause of Bella&lsquo;s passing, not whether humane euthanasia was chosen to help them cross over.</p>
      </div>

      <div className="browse-question-container" id="ConclusionCauseOfDeath">
        <ShowAnswerContent
          title="What was the ultimate reason why Bella crossed over the Rainbow Bridge?"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Post-op complications of LP-related surgical procedure</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>LP-related breathing crisis</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Aspiration pneumonia</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Quality of life due to polyneuropathy or hind-end weakness</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Quality of life due to LP-related breathing problems</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Cancer</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Seizure, stroke, or cardiac event</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Bacterial/viral infection</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Stopped eating</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ConclusionOtherPathPanel">
        <h3 className="browse-showanswer-title">These questions are speculative. If you were to have another dog with LP, would you choose a different path along their LP/GOLPP journey?</h3>
      <div className="browse-question-container" id="ConclusionOtherPathTieback">
        <ShowAnswerContent
          title="What if anything would you differently?"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do tieback surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do tieback surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do tieback surgery longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathBVEAP">
        <ShowAnswerContent
          title="Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do BVEAP surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do BVEAP surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do BVEAP surgery longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathStent">
        <ShowAnswerContent
          title="Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently??"
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do the laryngeal stent implant again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do laryngeal stent implant surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do a laryngeal stent implant longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathArytenoidectomy">
        <ShowAnswerContent
          title="Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?"
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do the arytenoidectomy surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do the arytenoidectomy surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do the arytenoidectomy longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathVentrilocordectomy">
        <ShowAnswerContent
          title="Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?"
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would not do the ventrilocordectomy surgery again</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would do the ventrilocordectomy surgery sooner than I did with Bella</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>I would wait to do the ventrilocordectomy longer than I did with Bella</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionOtherPathNoTreatment">
        <ShowAnswerContent
          title="Faced with the same decisions with another LP/GOLPP companion, what if anything would you differently?"
          index={12}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>I would pursue the same treatment path as with Bella</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>I would pursue tieback, laryngeal stent, or other veterinary procedure</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ConclusionStentAlternative">
        <ShowAnswerContent
          title="If the laryngeal stent were widely available, would you pursue that as an alternative to surgery?"
          index={13}
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

      <div className="browse-question-container" id="ConclusionDifferentChoices">
        <ShowAnswerContent
          title="Please briefly describe things you might do differently if you were to have another dog with LP/GOLPP (optional)."
          index={14}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-textarea" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-panel-container" id="ConclusionThanksPanel">
      <div className="browse-content-block" id="ConclusionThanksHead">
        <p className="browse-content-text">LP/GOLPP Survey 2026 Thank You For Taking The Survey! Please select the checkbox to complete and submit. Please click the Complete button to submit your responses.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
    </main>
    </>
  );
};

export default Browse_16_Conclusion;
