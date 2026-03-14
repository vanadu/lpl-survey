import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/img-lpl-org-logo.png"
import BrowseMode from "../../public/img-browse-mode.png"
import SurveyMode from "../../public/img-survey-mode.png"
import SurveyHero from "../components/SurveyHero"

const StartSurvey = () => {
  return (
    <>

      <main className="page home">
        <header className="home-head card card--lift">

          <SurveyHero/>

        </header>

        <section className="content-body">
          <article className="card">
              <div className="survey-mode-button-container">
                <div className="survey-mode-buttons">
                  <Link href='survey-mode' className='survey-mode-button link-dark'>
                      <figcaption className="survey-mode-btn-caption"><span className="emphasis">Take the Survey Now!</span></figcaption>
                    {/* <Image 
                      src={SurveyMode} 
                      className="survey-mode-btn-img" alt="XXX" 
                    /> */}
                  </Link>

                  <Link href='browse-mode' className='survey-mode-button link-dark'>
                    <figcaption className="survey-mode-btn-caption"><span className="emphasis">Browse the Survey Questions</span></figcaption>
                    {/* <Image 
                      src={BrowseMode} 
                      className="survey-mode-btn-img" alt="XXX" 
                    /> */}
                  </Link>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="survey-details-container">
              <h2 className="survey-details-heading">How long does the survey take?</h2>
                <p>
                 The goal of the survey is to collect comprehensive information about your LP/GOLPP journey, from the early stages through the diagnosis and treatment phase. That could take five minutes or twenty &mdash; it all depends on your personal LP/GOLPP experience. 
                </p>
                <p>
                  The interactive, mobile-friendly design lets you answer questions while you watch TV or do other things. It remembers you place, so you can come back to it whenever you have a few minutes. The important thing is that you complete the questions and submit your responses whenever it fits into your schedule. Your experience matters for future LP companions and the people who love them just as you love yours. 
                </p>



            </div>



          </article>




          <article className="card">
            <p>
              The LP/GOLPP Survey 2026 has two working modes: <span className="strong-emphasis">Survey Mode</span> and <span className="strong-emphasis">Browse Mode</span>. Which mode you choose depends on the stage of your LP/GOLPP journey.
            </p>
            <ul>
              <li>
                <span className="emphasis">Survey Mode:</span>&nbsp;&nbsp;If your companion animal has had LP/GOLPP symptoms for a while and you&lsquo;ve discussed the symptoms with a vetarinary professional, start the survey in <span className="emphasis">Survey Mode</span>.
              </li>
              <li><span className="emphasis">Browse Mode</span>&nbsp;&nbsp;If you&lsquo;re new to the LP/GOLPP journey and aren&lsquo;t sure whether your companion animal has LP/GOLPP, start the survey in <span className="emphasis">Browse Mode</span>.</li>
            </ul>

  
  
  
          </article>
        </section>


      </main>

    </>
  )
}

export default StartSurvey