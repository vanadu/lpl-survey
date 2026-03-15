import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/img-lpl-org-logo.png"
import BrowseMode from "../../public/img-browse-mode.png"
import SurveyMode from "../../public/img-survey-mode.png"
import SurveyHero from "../components/SurveyHero"

import ShowMoreContent from '../components/ShowMoreContent'

import { BsClipboardCheck, BsBook } from "react-icons/bs";

const StartSurvey = () => {

  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <>

      <main className="page home">
        <header className="home-head card card--lift">

          <SurveyHero/>

        </header>

        <section className="content-body">
          <article className="card">
              <div className="survey-link-container">
                <div className="survey-links">
                  <Link href='survey-mode' className='survey-mode-link link-dark'>
                  <BsClipboardCheck className="survey-mode-icon" />
                      <span className="survey-mode-link-text">Take Survey</span>
                    {/* <Image 
                      src={SurveyMode} 
                      className="survey-mode-btn-img" alt="XXX" 
                    /> */}
                  </Link>

                  <Link href='/browse-mode/Browse_00_Landing' className='survey-mode-link link-dark'>
                  <BsBook className="survey-mode-icon" />
                    <span className="survey-mode-link-text">Browse Survey</span>
                    {/* <Image 
                      src={BrowseMode} 
                      className="survey-mode-btn-img" alt="XXX" 
                    /> */}
                  </Link>
              </div>
            </div>
          </article>

          <article>
            <h2 className="survey-faqs-heading">Survey FAQs</h2>
            <p>Here are some answers to frequently-asked questions about the LP/GOLPP Survey 2026.</p>
          </article> 

          <article>
            <ShowMoreContent
              title='How much time does the survey take?' 
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore_content_block">
              <span className="showmore_content_space"></span>
                <p className="showmore_content_inline">
                 Completing the survey could take five minutes or twenty &mdash; it all depends on your personal LP/GOLPP experience. 
                </p>
                <p className="showmore_content_inline">
                  The interactive, mobile-friendly design lets you answer questions while you watch TV or do other things. It remembers your place, so you can come back to it whenever you have a few minutes. The important thing is that you complete the questions and submit your responses whenever it fits into your schedule. Your experience matters!
                </p>

              </div>
            </ShowMoreContent>
          </article>

          <article>
            <ShowMoreContent
              title='What&lsquo;s the difference between Survey Mode and Browse Mode?' 
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore_content_block">
              <span className="showmore_content_space"></span>
                <p className="showmore_content_inline">
                  The LP/GOLPP Survey 2026 has two working modes: <span className="strong-emphasis">Survey Mode</span> and <span className="strong-emphasis">Browse Mode</span>. Which mode you choose depends on the stage of your LP/GOLPP journey.
                </p>

                <ul>
                  <li className="showmore_content_inline">
                    <span className="emphasis">Survey Mode:</span>&nbsp;&nbsp;If your companion animal has had LP/GOLPP symptoms for a while and you&lsquo;ve discussed the symptoms with a vetarinary professional, start the survey in <span className="emphasis">Survey Mode</span>.
                  </li>
                  <li className="showmore_content_inline">
                    <span className="emphasis">Browse Mode</span>&nbsp;&nbsp;If you&lsquo;re new to the LP/GOLPP journey and aren&lsquo;t sure whether your companion animal has LP/GOLPP, start the survey in <span className="emphasis">Browse Mode</span>.</li>
                </ul>



                <p className="showmore_content_inline">
                  <span className="emphasis">Browse Mode</span> can also be useful if you want to review what kind of questions will be asked before you start the survey, or even if you just want to inform yourself about the issues you and your LP companion will be facing on your LP/GOLPP journey.
                </p>

              </div>
            </ShowMoreContent>
          </article>

          <article>
            <ShowMoreContent
              title='Can I submit my responses in Browse Mode?' 
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore_content_block">
              <span className="showmore_content_space"></span>
                <p className="showmore_content_inline">
                  No, <span className="emphasis">Browse Mode</span> provides a stripped-down version of the survey based not on your own LP companion, but rather on a fictional a female Labrador Retriever named Bella. What you&lsquo;ll see is a flat version of the survey content without any of the response processing, internal logic, or personalization that makes the survey functional.
                </p>
                <p className="showmore_content_inline">For instance, questions about Bella&lsquo;s age at various points in the LP/GOLPP progression have been removed from <span className="emphasis">Browse Mode</span>, so some of the questions may seem out of context. But for people who are still learning about LP/GOLPP, it&lsquo;s useful to see all the questions in one place, not just the ones that pertain to a specific dog‘s LP journey.</p>

                <p className="showmore_content_inline">
                  For the full survey experience and to share the details of your LP/GOLPP journey, run the survey in full <span className="emphasis">Survey Mode</span >.
                </p>

              </div>
            </ShowMoreContent>
          </article>

          <article>
            <ShowMoreContent
              title='Why is some text in Browse Mode highlighted?' 
              index={4}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore_content_block">
              <span className="showmore_content_space"></span>
                <p className="showmore_content_inline">
                  Highlighted text in <span className="emphasis">Browse Mode</span> summarizes a section that would require a user response in <span className="emphasis">Survey Mode</span> and to explain why certain sections have been left out of <span className="emphasis">Browse Mode</span>. 
                </p>
              </div>
            </ShowMoreContent>
          </article>
          
          <article>
            <ShowMoreContent
              title='Where can I learn more about how my information is being used and the about survey&lsquo;s consent policy?' 
              index={5}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore_content_block">
                <p className="showmore_content_inline">
                  <span className="emphasis">Browse Mode</span> doesn&lsquo;t collect any data &mdash; it&lsquo;s purely for informational purposes. If you take the survey in <span className="emphasis">Survey Mode</span>, you&lsquo;ll find links to our Privacy and Consent policies that you can review before you provide any personal information. 
                </p>
              </div>
            </ShowMoreContent>
          </article>


        </section>


      </main>

    </>
  )
}

export default StartSurvey