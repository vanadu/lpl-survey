import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_08_Procedure = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_07_Medication" aria-label="Previous page">
          <span aria-hidden="true"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"></path></svg><span className="sr-only">Previous</span>
          </span>
        </Link>
        <div className="browse-page-marker" id="PROCEDURE-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_09_Therapy" aria-label="Next page">
          <span aria-hidden="true"><span className="sr-only">Next</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </span>
        </Link>
      </div>

      <div className="browse-panel-container" id="ProcedureCard1Panel">
      <div className="browse-content-block" id="ProcedureHeading">
        <h2 className="browse-content-heading">Veterinary-Medical Procedures for LP</h2>
      </div>

      <div className="browse-content-block" id="ProcedureText">
        <p className="browse-content-text">This section asks questions about veterinary procedures such as surgery or stent implant that Bella underwent to treat laryngeal paralysis.</p>
      </div>

      <div className="browse-question-container" id="ProcedureDidHave">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella undergo a veterinary-medical procedure such as surgery or a stent implant for LP/GOLPP?
            </span>
          }
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

      <div className="browse-panel-container" id="ProcedureTypePanel">
      <div className="browse-question-container" id="ProcedureType">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What kind of procedure or procedures did Bella have?
            </span>
          }
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please check all that apply.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Tieback (Unilateral Arytenoid Lateralization)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>BVEAP (Bilateral Vocal Fold Excision &amp; Arytenoid Pexy)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Laryngeal stent</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Partial arytenoidectomy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Ventrilocordectomy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Partial Laryngectomy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Tracheostomy</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedureSequence">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              In what order were these procedures performed?
            </span>
          }
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please drag and drop the procedures into the order in which they were performed, first to last.</p>
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ProcedureUALCard1Panel">
      <div className="browse-content-block" id="ProcedureUALHeading">
        <h3 className="browse-content-subheading">Questions About Bella&lsquo;s Tieback (UAL) Surgery</h3>
      </div>

      <div className="browse-panel-container" id="ProcedureUALAgePanel">
        <h3 className="browse-showanswer-title">At about what age did Bella have the first procedure for LP/ GOLPP?</h3>
      <div className="browse-panel-container" id="ProcedureUALAgeDetailsPanel">
      <div className="browse-question-container" id="ProcedureUALAgeYears">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Years
            </span>
          }
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedureUALAgeMonths">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Months (0 - 11)
            </span>
          }
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-question-container" id="ProcedureUALScheduled">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Was it a scheduled procedure or an emergency procedure due to an LP-induced breathing crisis?
            </span>
          }
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>Scheduled</span>
            </li>
            <li className="browse-showanswer-boolean">
              <span className="browse-showanswer-icon browse-showanswer-icon--boolean" aria-hidden="true"></span>
              <span>Emergency</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedureUALScheduledWait">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              How far in advance was the procedure scheduled?
            </span>
          }
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Less than two weeks</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Two to four weeks</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Four to eight weeks</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than eight weeks</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-content-block" id="ProcedureUALSurgeryOpHeading">
        <p className="browse-content-text">These questions ask about issues Bella had immediately after surgery.</p>
      </div>

      <div className="browse-panel-container" id="ProcedureUALSurgeryPanel">
      <div className="browse-question-container" id="ProcedureUALIncisionComplications">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella have any infection or swelling at the incision site?
            </span>
          }
          index={8}
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

      <div className="browse-question-container" id="ProcedureUALOralBleeding">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella have bleeding in the mouth or from the inside the throat?
            </span>
          }
          index={9}
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

      <div className="browse-question-container" id="ProcedureUALExtendedStay">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did Bella need to stay longer than expected at the hospital after the procedure?
            </span>
          }
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>No</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Yes, one extra day</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Yes, two days</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Yes, three days or more</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedureUALExtendedStayReason">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Why did Bella need extended inpatient care?
            </span>
          }
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Aspiration pneumonia</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Adverse reaction to anesthesia</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Suture failure</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Respiratory crisis</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Stroke or cardiac event</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedureUALPeriopTiebackRepeat">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Did the surgeon attempt a second tieback on the other side?
            </span>
          }
          index={12}
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

      <div className="browse-question-container" id="ProcedureUALFollowupCare">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              In the four weeks after surgery, did Bella need another visit to a veterinary professional because of complications?
            </span>
          }
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

      <div className="browse-question-container" id="ProcedureUALCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What was the approximate cost of the surgery, not including post-operative complications?
            </span>
          }
          index={14}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please provide the pre-insurance cost, not the out-of-pocket cost.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Prefer not to say</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $1500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$1501 - $2500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$2501 - $3500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$3501 - $4500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$5501 - $8000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $8000</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedureUALComplicationsCost">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What was total cost of the complications of the surgery?
            </span>
          }
          index={15}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please provide the pre-insurance cost, not the out-of-pocket cost.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Prefer not to say</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $1500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$1501 - $2500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$2501 - $3500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$3501 - $4500</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$5501 - $8000</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $8000</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="ProcedureEFIPanel">
      <div className="browse-question-container" id="ProcedureEFIType">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              What type of stent implant did Bella receive?
            </span>
          }
          index={16}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >

          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Silicone</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Dextronix DexStent LE Nitinol wire</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Nitinol mesh</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-panel-container" id="ProcedureEFIDexstentPanel">
      <div className="browse-content-block" id="ProcedureEFIDexstentText">
        <p className="browse-content-text">IMPORTANT : The Dextronix DexStent LE Nitinol wire stent device has been discontinued by the manufacturer. Report parties involved in the sale or use of this device to your local veterinary regulatory agency.</p>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="ProcedureBVEAPPanel">
        <h3 className="browse-showanswer-title">Questions about Bella&lsquo;s BVEAP surgery</h3>
      <div className="browse-question-container" id="ProcedureBVEAPReasons">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Why did you choose this over other surgery types?
            </span>
          }
          index={17}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please choose all that apply.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cost of this surgery compared to other surgery types</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by primary veterinarian</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by surgeon or specialist</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Availablility</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ProcedurePAEPanel">
        <h3 className="browse-showanswer-title">Questions about partial arytenoidectomy surgery</h3>
      <div className="browse-question-container" id="ProcedurePAEReasons">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Why did you choose this over other surgery types?
            </span>
          }
          index={18}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please choose all that apply.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cost of this surgery compared to other surgery types</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by primary veterinarian</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by surgeon or specialist</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Availablility</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedurePAELaser">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Was the procedure performed with a laser?
            </span>
          }
          index={19}
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

      <div className="browse-panel-container" id="ProcedureVCCPanel">
        <h3 className="browse-showanswer-title">Questions about ventrilocordectomy (debarking, vocal fold removal) surgery</h3>
      <div className="browse-question-container" id="ProcedureVCCReasons">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Why did you choose ventrilocordectomy over other surgery types?
            </span>
          }
          index={20}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please choose all that apply.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cost of this surgery compared to other surgery types</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by primary veterinarian</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by surgeon or specialist</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Availability</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ProcedureVCCLaser">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Was the procedure performed with a laser?
            </span>
          }
          index={21}
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

      <div className="browse-panel-container" id="ProcedurePLEPanel">
        <h3 className="browse-showanswer-title">Questions about partial laryngectomy (partial removal of larynx) surgery</h3>
      <div className="browse-question-container" id="ProcedurePLEReasons">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Why did you choose partial laryngectomy over other surgery types?
            </span>
          }
          index={22}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please choose all that apply.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cost of this surgery compared to other surgery types</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by primary veterinarian</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by surgeon or specialist</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Availability</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ProcedureTTPanel">
        <h3 className="browse-showanswer-title">Questions about tracheostomy</h3>
      <div className="browse-question-container" id="ProcedureTTReasons">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Why did you choose laryngectomy over other surgery types?
            </span>
          }
          index={23}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please choose all that apply.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cost of this surgery compared to other surgery types</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by primary veterinarian</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by surgeon or specialist</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Availability</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>

      <div className="browse-panel-container" id="ProcedureOtherPanel">
        <h3 className="browse-showanswer-title">Questions about tracheostomy</h3>
      <div className="browse-question-container" id="ProcedureOtherReasons">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              Why did you choose this kind of surgery over others?
            </span>
          }
          index={24}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p className="browse-question-description">Please choose all that apply.</p>
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cost of this surgery compared to other surgery types</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by primary veterinarian</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Recommended by surgeon or specialist</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Availability</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="ProcedureCard2Panel">
      <div className="browse-panel-container" id="ProcedureUALCard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={25}
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

      <div className="browse-panel-container" id="ProcedureESICard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={26}
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

      <div className="browse-panel-container" id="ProcedureBVEAPCard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={27}
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

      <div className="browse-panel-container" id="ProcedurePAECard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={28}
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

      <div className="browse-panel-container" id="ProcedureVCCCard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={29}
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

      <div className="browse-panel-container" id="ProcedurePLECard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={30}
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

      <div className="browse-panel-container" id="ProcedureTTCard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={31}
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

      <div className="browse-panel-container" id="ProcedureOtherCard2Panel">
      <div className="browse-question-container" id="XXX">
        <ShowAnswerContent
          header={
            <span className="showanswer__title">
              sdradio3
            </span>
          }
          index={32}
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
      </div>
        </div>
      </main>
    </>
  );
};

export default Browse_08_Procedure;
