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

const SurveyFAQ = () => {

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
            <p>Here are some answers to frequently-asked questions about the <span className="emphasis">LP/GOLPP Survey 2026</span>.</p>
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
                    <span className="emphasis">Survey Mode:</span>&nbsp;&nbsp;If your companion animal has had LP/GOLPP symptoms for a while and you&lsquo;ve discussed the symptoms with a veterinary professional, take the survey in <span className="emphasis">Survey Mode</span>.
                  </li>
                  <li className="showmore_content_inline">
                    <span className="emphasis">Browse Mode</span>&nbsp;&nbsp;If you&lsquo;re new to the LP/GOLPP journey don&lsquo;t know much about it yet, start the survey in <span className="emphasis">Browse Mode</span> to jump-start your learning process.</li>
                </ul>
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
                <p className="showmore_content_inline">
                  No, <span className="emphasis">Browse Mode</span> provides a stripped-down, flat version of the survey content without any of the response processing, internal logic, or personalization. 
                </p>
                <p className="showmore_content_inline">Some of the questions may seem out of context in <span className="emphasis">Browse Mode</span> because the functionality has been disabled. But for people who are still learning about LP/GOLPP, it&lsquo;s useful to see all the questions in one place.</p>

                <p className="showmore_content_inline">
                  For the fully customized survey experience and to share the details of your LP/GOLPP journey, run the survey in full <span className="emphasis">Survey Mode</span >.
                </p>

              </div>
            </ShowMoreContent>
          </article>

          <article>
            <ShowMoreContent
              title='Why is some text highlighted in Browse Mode?' 
              index={4}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore_content_block">
                <p className="showmore_content_inline">
                  Highlighted text in <span className="emphasis">Browse Mode</span> summarizes a section that would require a user response in <span className="emphasis">Survey Mode</span> and indicates descriptive text that isn&lsquo;t relevant in <span className="emphasis">Survey Mode</span>. 
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
                  <span className="emphasis">Browse Mode</span> doesn&lsquo;t collect any data &mdash; it&lsquo;s purely for informational purposes. If you take the survey in <span className="emphasis">Survey Mode</span>, you&lsquo;ll find links to our <span className="emphasis">Privacy</span> and <span className="emphasis">Consent</span> policies that you can review before you provide any personal information. 
                </p>
              </div>
            </ShowMoreContent>
          </article>


        </section>


      </main>

    </>
  )
}

export default SurveyFAQ