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
        description="Gathering information about laryngeal paralysis in dogs, cats, and horses to move forward towards better treatments in the future"
        canonical="https://larparlife.com"
        />
      <main className="page home">
        <header className="home-head card card--lift">
          <SurveyHero/>
        </header>

          

        <section className="content-body home-head">
          <h1>Welcome to the <span className="no-wrap">2026&nbsp;LP/GOLPP&nbsp;Survey!</span></h1>
            <Link href='survey-mode' className='survey-mode-link link-dark'>
            <BsClipboardCheck className="survey-mode-icon" />
                <span className="survey-mode-link-text">Take Survey Now!</span>
            </Link>
        </section>

        <section className="content-body">


          <article className="card">
            <p>
              The first things people want to know about a survey is how long it will take and whether they can do it on their phones.
            </p>
            <div className="home-showmore-container">

            <ShowMoreContent
              header={
                <h3 className="showmore__title">
                  How much time does the survey take?
                </h3>
              }
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
                <p className="showmore_content_inline">
                  Completing the survey could take five minutes or twenty &mdash; it all depends on your personal LP/GOLPP experience. 
                </p>
                <p className="showmore_content_inline">
                  The interactive, mobile-friendly design lets you answer questions while you watch TV or do other things. It remembers your place, so you can come back to it whenever you have a few minutes. The important thing is that you complete the questions and submit your responses whenever it fits into your schedule. Your experience matters!
                </p>
            </ShowMoreContent>
            
            </div>
            <p>You can learn more about the <span className="emphasis">LP/GOLPP Survey 2026</span > on the <Link href='/survey-faqs' className='link-accent'>FAQs page</Link>.</p>
          </article>


          <article className="card home-content">
            <h2 className="home-about-heading">Your experience matters!</h2>
            <p>This survey is the first phase of a long-range research study focused on better understanding canine laryngeal paralysis (LP) and geriatric-onset laryngeal paralysis &amp; polyneuropathy (GOLPP).</p>
            
            <h3 className='article-heading'>Why now and why you?</h3>
            <p>Today, there are no clearly established treatment protocols for LP. Veterinarians often have to rely on general medical approaches to manage a condition that is still not well understood. The most common surgical treatment dates back to the 1980s, and efforts to expand or rethink treatment options have been limited. At the same time, there is very little accessible, up-to-date information available to support ongoing education about the disease.</p>

            <p>In recent years, social media &mdash; especially platforms like Facebook &mdash; has dramatically increased awareness of LP. Large online communities of dog owners are now sharing experiences, observations, and treatment outcomes in real time. While this has created valuable peer support, it has also led to the spread of inconsistent and sometimes conflicting information.</p>
            
            <h3 className='article-heading'>Transforming experience into knowledge</h3>
            <p>This study begins by turning that growing body of real-world experience into structured data.</p>

            <p>The goal of this first phase is to gather detailed information directly from people who are actively managing their beloved companion&lsquo;s LP/GOLPP. These individuals &mdash; people like you &mdash; are on the front lines making decisions, trying treatments, and observing outcomes day by day. Your experiences represent a largely untapped source of insight into how the disease progresses and how different treatments perform in real-world conditions.</p>

            <h3 className='article-heading'>Strength in numbers</h3>
            <p>As more people participate, the value of the data increases. Larger numbers of responses make it possible to identify meaningful patterns, compare outcomes, and improve the reliability of conclusions.</p>

            <p>This survey is not just a one-time questionnaire. It is designed as the foundation for an ongoing study that will track the course of the disease over time, including treatments, changes in condition, and long-term outcomes.</p>

            <p>For more informatin about the <span className="emphasis">2026 LP/GOLPP Survey</span> see the <Link href='/survey-faqs' className='link-accent'>FAQs page</Link>.</p>

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

