import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
// !VA Custom components and images
import Logo from "../../public/img-lpl-org-logo.png"
import SurveyHero from "../components/SurveyHero"
import ShowMoreContent from '../components/ShowMoreContent'
import { BsClipboardCheck, BsBook } from "react-icons/bs";

// !VA Styles
// import * as styles from '../styles/Home.module.scss'

const Home = () => {
  // !VA Log out the posts exported from the getStaticProps function below 
  const router = useRouter()

  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <>
      <NextSeo 
        title="LarPar/GOLPP Survey 2026: Presented by LarParLife.org"
        description="2026 Survey LarPar/GOLPP to gather information about how laryngeal paralysis affects dogs, cats, horses and the people who love them."
        canonical="https://larparlife.com"
        />
      <main className="page home">
        <header className="home-head card card--lift">
          <SurveyHero/>
        </header>

          

        <section className="home-head">
          <h1>Welcome to the <span className="no-wrap">2026&nbsp;LarPar/GOLPP&nbsp;Survey!</span></h1>
        </section>

        {/* <section className="content-body home-head">
            <Link href='survey-mode' className='survey-mode-link link-dark'>
            <BsClipboardCheck className="survey-mode-icon" />
                <span className="survey-mode-link-text">Start Survey Now!</span>
            </Link>
        </section> */}

        <section className="content-body">
          <article className="card">
            <p>
              The first things people want to know about a survey whether they should take it, how long it will take, and whether they can do it on their phones.
            </p>
            <div className="home-showmore-container">

            <ShowMoreContent
              header={
                <h3 className="showmore__title">
                  Who should take this survey?
                </h3>
              }
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
                <p className="showmore_content_inline">
                  If you have or have ever had a dog who had symptoms of laryngeal paralysis (LarPar, LP) or was ever diagnosed or treated for laryngeal paralysis, then we encourage you to participate in this study by taking the survey.
                </p>
                <p>
                  Even if your dog was never officially diagnosed with LP your LP/GOLPP journey holds information that can make a difference. Your experience matters!  
                </p>
            </ShowMoreContent>

            <ShowMoreContent
              header={
                <h3 className="showmore__title">
                  Can I take the survey on my phone?
                </h3>
              }
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
                <p className="showmore_content_inline">
                  Yes, the mobile-friendly design is absolutely useable on phones. But due to the size of the screen it will take a bit longer than doing it on larger devices. The best mobile device to take the survey on is a tablet. 
                </p>
            </ShowMoreContent>

            <ShowMoreContent
              header={
                <h3 className="showmore__title">
                  How much time does the survey take?
                </h3>
              }
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
                <p className="showmore_content_inline">
                  Completing the survey could take five minutes or twenty &mdash; it all depends on your LarPar/GOLPP journey. The interactive design only shows questions that are relevant for your personal experience. But even if your LarPar/GOLPP journey has been very involved with surgery, medications and therapies, you&lsquo;ll be able to complete it over your morning coffee or tea. If you get distracted, the survey will remember your place in the browser so you can return to it later without starting over. The important thing is that you complete the questions and submit your responses whenever it fits into your schedule.
                </p>
            </ShowMoreContent>
            
            </div>
            <p>You can learn more about the <span className="emphasis">LarPar/GOLPP Survey 2026</span > on the <Link href='/survey-faqs' className='link-accent'>FAQs page</Link>.</p>
          </article>


          <article className="card home-content">
            <h2 className="home-about-heading">Your experience matters!</h2>
            <h3 className='article-heading'>What is the 2026 LP/GOLPP Survey?</h3>

            <p>This survey isn&lsquo;t just about the disease of laryngeal paralysis/GOLPP. It&lsquo;s about <span className='emphasis'>your</span> experience of it, and that&lsquo;s what sets it apart from past studies and surveys.</p>
            
            <p><span className="emphasis">LarPar/GOLPP Survey 2026</span > is the first phase of a long-range research study focused on better understanding canine laryngeal paralysis (LarPar, LP) and geriatric-onset laryngeal paralysis &amp; polyneuropathy (GOLPP) and associated conditions.</p>

            <p>Since GOLPP (Geriatric Onset Laryngeal Paralysis and Polyneuropathy) was first posited as cause of laryngeal paralysis in senior dogs in the early 2010&lsquo;s, vagus nerve degeneration has gained acceptance as the root cause of LarPar in older dogs. But how this ties in to other conditions like reflux,  megaesophagus, and tracheal collapse, and how those symptoms interrelate with LarPar/GOLPP pre- and post-surgery are unclear. This survey is the first step in a multi-year, international initiative to gather actionable data that could help answer these and many other questions about LarPar/GOLPP.</p>
            
            <h3 className='article-heading'>Why now and why you?</h3>
            <p>Today, there are no clearly established treatment protocols for LarPar. Veterinarians often rely on general medical approaches to manage a condition that requires specialized knowledge to understand. The most common surgical treatment dates back to the 1980s, and efforts to expand or rethink treatment options have been limited. At the same time, there is very little accessible, up-to-date information available to support ongoing education about the disease.</p>

            <p>In recent years, social media &mdash; especially platforms like Facebook &mdash; has dramatically increased awareness of laryngeal paralysis in dogs. Large online communities of dog owners are now sharing experiences, observations, and treatment outcomes in real time. While this has created valuable peer support, it has also led to the spread of inconsistent and sometimes conflicting information.</p>
            
            <h3 className='article-heading'>Transforming experience into knowledge</h3>
            <p>This study begins by turning that growing body of real-world experience into structured data.</p>

            <p>The goal of this first phase is to gather detailed information directly from people who are actively managing their beloved companion&lsquo;s LarPar/GOLPP. These individuals &mdash; people like you &mdash; are on the front lines making decisions, trying treatments, and observing outcomes day by day. Your experiences represent a largely untapped source of insight into how the disease progresses and how different treatments perform in real-world conditions.</p>

            <h3 className='article-heading'>Strength in numbers</h3>
            <p>As more people participate, the value of the data increases. Larger numbers of responses make it possible to identify meaningful patterns, compare outcomes, and improve the reliability of conclusions.</p>

            <p>This survey is not just a one-time questionnaire. It is designed as the foundation for an ongoing study that will track the course of the disease over time, including treatments, changes in condition, and long-term outcomes.</p>

            <p>For more information about the <span className="emphasis">2026 LarPar/GOLPP Survey</span> see the <Link href='/survey-faqs' className='link-accent'>FAQs page</Link>.</p>

            {/* <p>Your beloved companion&lsquo;s LP/GOLPP journey </p> */}
          </article>




















          <article className="card">
            {/* <h2>Did you know...</h2>
            <p>
              ...that the suicide rate among veterinarians is four times that of the general population? Euthanasia fatigue, high student debt, high burnout rates, difficult clients with unrealistic expectations, and access to lethal medication are all cited as contributing factors.
            </p> */}
          </article>

          {/* <article className="card">
            <p>
               A comprehensive survey can provide useful practical insights about the course of a disease over time based on the experience of people who are on the front lines in the trial-and-error battle against LP/GOLPP &mdash; people like you.
            </p>
          </article> */}

          {/* <article className="card">
            <h2>Your contribution matters!</h2>
            <p>
              The goal of this survey is to aggregate long-term observations that might escape the view of individual veterinarians, such as daily symptoms, medications, supplements, or the aftermath of treatment. Your survey participation provides real-world data that can help veterinarians help their clients and the animals they love.
            </p>
          </article> */}

        </section>
      </main>
    </>
  )
}

export default Home

