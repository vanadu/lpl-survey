import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_12_Management = () => {
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
        <Link className="browse-page-nav__prev" href="/browse-mode/Browse_11_TreatmentFactors" aria-label="Previous page">
          <span aria-hidden="true">‹</span>
        </Link>
        <div className="browse-page-marker" id="MANAGEMENT-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_13_OtcProducts" aria-label="Next page">
          <span aria-hidden="true">›</span>
        </Link>
      </div>

      <div className="browse-panel-container" id="ManagementCard1Panel">
      <div className="browse-content-block" id="ManagementHeading">
        <h2 className="browse-content-heading">Medical managment of LP/GOLPP</h2>
      </div>

      <div className="browse-content-block" id="ManagementTextImportant">
        <p className="browse-content-text">IMPORTANT : Attempting to manage LP/GOLPP symptoms with medications is controversial. There is no medication that can restore movement to paralyzed laryneal tissue. That means that even with medication, the risk of breathing crises and a potentially fatal suffocation event is very real. So while medications can&lsquo;t prevent a breathing emergency, many veterinary professionals believe some medications can have a positive effect on symptoms and improve an LP/GOLPP patient&lsquo;s quality of life.</p>
      </div>

      <div className="browse-content-block" id="ManagementTextNote">
        <p className="browse-content-text">Note: Medications for arthritis/osteoarthritis pain such as NSAIDS (Rimadyl, carprofen) and NGF blockers (Librela, Beransa) may improve mobility by reducing pain, but they aren&lsquo;t specifically prescribed for LP/GOLPP and therefore and aren&lsquo;t included in the &lsquo;Medical management&lsquo; section of the survey.</p>
      </div>

      <div className="browse-panel-container" id="ManagementPrescriptionTypePanel">
      <div className="browse-question-container" id="ManagementPrescriptions">
        <ShowAnswerContent
          title="Did your primary veterinarian provide or prescribe any prescription medications for Bella's LP/GOLPP symptoms?"
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

      <div className="browse-question-container" id="ManagementPrescriptionType">
        <ShowAnswerContent
          title="What prescription medications if any did your primary veterinarian prescribe or recommend for Bella's LP/GOLPP symptoms?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Doxepin</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Trazodone</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Gabapentin</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Galliprant</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Prednisone or other steriod</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Benadryl or other antihistamine</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cerenia (maripotant citrate)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Meloxicam</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Acepromazine (Atravet, ACP, Acepromine)</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Albuterol or other inhaler</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Temaril P</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionCost">
        <ShowAnswerContent
          title="Average monthly cost of Bella's prescriptions:"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Under $50</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$51-$100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$101-$200</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Over $200</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionDoxepinRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Doxepin on Bella's breathing:"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionDoxepinRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Doxepin on Bella's mobility or behavior:"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionTrazodoneRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Trazodone on Bella's breathing:"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionTrazodoneRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Trazodone on Bella mobility or behavior:"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionGabapentinRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Gabapentin on Bella's breathing:"
          index={8}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionGabapentinRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Gabapentin on Bella's mobility or behavior:"
          index={9}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionGalliprantRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Galliprant on Bella's breathing:"
          index={10}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionGalliprantRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Galliprant on Bella's mobility or behavior:"
          index={11}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionSteroidRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Prednisone on Bella's breathing:"
          index={12}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionSteroidRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Prednisone on Bella's mobility or behavior:"
          index={13}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionAntihistamineRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Benadryl or other antihistamine on Bella's breathing:"
          index={14}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionAntihistamineRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Benadryl or other antihistamine on Bella's mobility or behavior:"
          index={15}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionCereniaRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Cerenia on Bella's breathing:"
          index={16}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionCereniaRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Cerenia on Bella's mobility or behavior:"
          index={17}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionMeloxicamRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Meloxicam on Bella's breathing:"
          index={18}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionMeloxicamRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Meloxicam on Bella's mobility or behavior:"
          index={19}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionAcepromineRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Acepromine on Bella's breathing:"
          index={20}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionAcepromineRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Acepromine on Bella's mobility or behavior:"
          index={21}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionAlbuterolRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Albuterol or other inhaler on Bella's breathing:"
          index={22}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionAlbuterolRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Albuterol or other inhaler on Bella's mobility or behavior:"
          index={23}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionTemarilPRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of Temaril P on Bella's breathing:"
          index={24}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementPrescriptionTemarilPRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of Temaril P on Bella's mobility or behavior:"
          index={25}
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

      <div className="browse-panel-container" id="ManagementCard2Panel">
      <div className="browse-panel-container" id="ManagementNonPrescriptionTypePanel">
      <div className="browse-question-container" id="ManagementNonPrescription">
        <ShowAnswerContent
          title="Did Bella receive acupuncture or other therapies to help with LP/GOLPP symptoms?"
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

      <div className="browse-question-container" id="ManagementNonPrescriptionType">
        <ShowAnswerContent
          title="What therapies or treatments did Bella receive?"
          index={27}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Acupuncture</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Physical or hydro therapy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Cold laser or red light therapy</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>Chiropractic</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionCost">
        <ShowAnswerContent
          title="Average monthly cost of Bella's acupuncture or other therapies:"
          index={28}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Under $100</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$101-150</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>$151-$250</span>
            </li>
            <li className="browse-showanswer-dropdown">
              <span className="browse-showanswer-icon browse-showanswer-icon--dropdown" aria-hidden="true"></span>
              <span>Over $250</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionAcupunctureRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of acupuncture on Bella's breathing:"
          index={29}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionAcupunctureRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of acupuncture on Bella's mobility or behavior:"
          index={30}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionTherapyRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of physical or hydro therapy on Bella's breathing:"
          index={31}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionTherapyRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of physical or hydro therapy on Bella's mobility or behavior:"
          index={32}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionColdLaserRatingBreathing">
        <ShowAnswerContent
          title="How effective was cold laser or red light therapy on Bella's breathing:"
          index={33}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionColdLaserRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of cold laser or red light therapy on Bella's mobility or behavior:"
          index={34}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionChiroRatingBreathing">
        <ShowAnswerContent
          title="Please rate the effect of chiropractic on Bella's breathing on Bella's mobility or behavior:"
          index={35}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-generic" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container" id="ManagementNonPrescriptionChiroRatingMobility">
        <ShowAnswerContent
          title="Please rate the effect of chiropractic on Bella's mobility or behavior:"
          index={36}
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

export default Browse_12_Management;
