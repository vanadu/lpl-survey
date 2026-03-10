import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/img-lpl-org-logo.png"
import BrowseMode from "../../public/img-browse-mode.png"
import SurveyMode from "../../public/img-survey-mode.png"

const StartSurvey = () => {
  return (
    <>

      <main className="page home">
        <header className="home-head card card--lift">
          <div className="hero-container">
            <div className="hero-title-container">
              <h2 className="hero-title-heading">LP/GOLPP Survey 2026</h2>
              <p className="hero-title-subheading">powered by larparlife.org</p>
            </div>

            <div className="hero-version-container">
              <div className="hero-version-content">
                <Image 
                  src={Logo} 
                  className='hero-version-logo' 
                  alt="LarPar Life Logo" 
                />
                <p className="hero-version-text">Version 0.9/26.03.01.01</p>
              </div>
            </div>
          </div>
        </header>

          <section className="content-body">
            <article className="card">
              <h2 className="start-survey-heading">Which survey mode should you choose?</h2>
                <div className="survey-mode-button-container">
                  <div className="survey-mode-buttons">
                  <Link href='survey-mode' className='link-dark'>
                    <Image 
                      src={SurveyMode} 
                      className="survey-mode-btn" alt="XXX" 
                    />
                    <figcaption className="survey-mode-btn-caption"><span className="emphasis">Survey Mode</span></figcaption>
                  </Link>
                  <Link href='browse-mode' className='link-dark'>
                    <Image 
                      src={BrowseMode} 
                      className="survey-mode-btn" alt="XXX" 
                    />
                    <figcaption className="survey-mode-btn-caption"><span className="emphasis">Browse Mode</span></figcaption>
                  </Link>
                </div>
              </div>
              <p>
                The LP/GOLPP Survey 2026 has two working modes: <span className="strong-emphasis">Survey Mode</span> and <span className="strong-emphasis">Browse Mode</span>. Which mode you choose depends on the stage of your LP/GOLPP journey.
              </p>
              <ul>
                <li>
                  <span className="emphasis">Survey Mode:</span>&nbsp;&nbsp;If your companion animal has had LP/GOLPP symptoms for a while and you&lsquo;ve discussed the symptoms with a vetarinary professional, start the survey in Survey Mode.
                </li>
                <li><span className="emphasis">Browse Mode</span>&nbsp;&nbsp;If you&lsquo;re new to the LP/GOLPP journey and aren&lsquo;t sure whether your companion animal has LP/GOLPP, start the survey in <span className="emphasis">Survey Mode</span>. </li>
              </ul>

    
    
    
            </article>
          </section>


      </main>

    </>
  )
}

export default StartSurvey