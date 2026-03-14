import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const Browse_00_Landing = () => {
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
        <span className="browse-page-nav__prev is-disabled" aria-hidden="true">
          <span>‹</span>
        </span>
        <div className="browse-page-marker" id="LANDING-page"></div>
        <Link className="browse-page-nav__next" href="/browse-mode/Browse_01_UserInfo" aria-label="Next page">
          <span aria-hidden="true">›</span>
        </Link>
      </div>

      <div className="browse-panel-container" id="LandingCard1Panel">
      <div className="browse-panel-container" id="LandingHeaderPanel">
      <div className="browse-content-block" id="LandingTitleHead">
        <p className="browse-content-text">LP/GOLPP Survey 2026 Powered by LarParLife.org</p>
      </div>

      <div className="browse-content-block" id="LandingVersion">
        <p className="browse-content-text">Version 0.9/26.03.01.01</p>
      </div>
      </div>

      <div className="browse-panel-container" id="LandingWelcomePanel">
      <div className="browse-content-block" id="LandingWelcomeHeading">
        <h2 className="browse-content-heading">Welcome to the LP/GOLPP&amp;nbsp;Survey&amp;nbsp;2026</h2>
      </div>

      <div className="browse-content-block" id="LandingWelcomeText1">
        <p className="browse-content-text">This survey, the first of its kind, is designed to collect information directly from the people whose beloved companions suffer from canine laryngeal paralysis.</p>
      </div>

      <div className="browse-content-block" id="LandingWelcomeText2">
        <p className="browse-content-text">Aliqua aute et est proident fugiat sunt consectetur id ipsum magna nostrud tempor magna consequat. Nostrud in est ad ea exercitation. Consequat mollit consequat quis deserunt mollit laboris exercitation nostrud cillum consequat dolor proident sint. Ex duis nisi ad excepteur cupidatat enim pariatur excepteur. Occaecat sint dolor enim incididunt commodo. Consectetur anim elit et cillum ut excepteur.</p>
      </div>
      </div>
      </div>

      <div className="browse-panel-container" id="LandingCard2Panel">
      <div className="browse-panel-container" id="LandingPrivacyPanel">
      <div className="browse-content-block" id="LandingAboutPrivacyHeading">
        <h3 className="browse-content-subheading">About your privacy and personal information</h3>
      </div>

      <div className="browse-content-block" id="LandingAboutPrivacyText01">
        <p className="browse-content-text">We only need four pieces of information to verify survey results:</p>
      </div>

      <div className="browse-content-block" id="LandingAboutPrivacyOrderedList">
        <p className="browse-content-text">Your first name Your companion animal&lsquo;s name The country in which you live Your email address or Facebook account name</p>
      </div>

      <div className="browse-content-block" id="LandingPrivacyLink">
        <p className="browse-content-text">&amp;nbsp; Learn more about our Privacy Policy</p>
      </div>

      <div className="browse-content-block" id="LandingAboutPrivacyText02">
        <p className="browse-content-text">This information ensures that all the survey respondents are unique and verifiable without making them identifiable outside the context of the survey.</p>
      </div>
      </div>

      <div className="browse-panel-container" id="LandingConsentPanel">
      <div className="browse-content-block" id="LandingAboutConsentHeading">
        <h3 className="browse-content-subheading">About our Consent Policy</h3>
      </div>

      <div className="browse-content-block" id="LandingConsentText">
        <p className="browse-content-text">By selecting &lsquo;Yes&lsquo; below, you confirm that you agree to the terms of our Consent Policy.</p>
      </div>

      <div className="browse-content-block" id="LandingConsentLink">
        <p className="browse-content-text">&amp;nbsp; Learn more about our Consent&amp;nbsp;Policy</p>
      </div>

      <div className="browse-question-container" id="LandingConsent">
        <ShowAnswerContent
          title="Do you want to proceed with the survey in accordance with our Consent Policy?"
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

export default Browse_00_Landing;
