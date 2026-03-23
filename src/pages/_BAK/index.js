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
            <h2>How much time will it take?</h2>
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
            <p>You can learn more about the LP/GOLPP Survey 2026, for instance what the survey icons do, why many of the questions deal with cost, and what the goals of the survey are, <Link href='/survey-faqs' className='link-accent'>on the FAQs page</Link>.</p>
          </article>



          <article className="card">
            <h2 className="home-about-heading">About the 2026 LP/GOLPP Survey</h2>
            <h2>Did you know...</h2>
            <p>
              ...that the suicide rate among veterinarians is four times that of the general population? Euthanasia fatigue, high student debt, high burnout rates, difficult clients with unrealistic expectations, and access to lethal medication are all cited as contributing factors.
            </p>
          </article>

          <article className="card">
            <h2>How can a survey like this help?</h2>
            <p>
              Veterinary medicine produces more new research than even the most committed vet can keep up with and laryngeal paralysis has little in the way of established protocols. A well-designed survey can provide useful practical insights about the course of a disease over time based on the experience of people who are on the front lines in the trial-and-error battle against LP/GOLPP &mdash; people like you.
            </p>
          </article>

          <article className="card">
            <h2>Your contribution matters!</h2>
            <p>
              The goal of this first-of-its-kind survey is to aggregate long-term observations that might escape the view of individual veterinarians, such as daily symptoms, medications, supplements, or the aftermath of treatment. Your survey participation provides real-world data that can help veterinarians help their clients and the animals they love.
            </p>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home

