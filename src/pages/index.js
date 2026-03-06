import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link';

import SurveyComponentMaster from '@/components/SurveyComponentMaster'
import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'

import { NextSeo } from 'next-seo'

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
          <h1>Welcome to the 2026 LP/GOLPP Survey!</h1>
          <h2 className="slug">powered by larparlife.org</h2>

          <div className="start-survey-button-container">
            <a className="btn btn--primary start-survey-button" href="/survey">
              Start the Survey
            </a>
            <a className="btn start-survey-button secondary" href="/browse">
              Browse Questions
            </a>
          </div>
        </header>

        <section className="home-body">
          <article className="card">
            <p>
              Did you know that the suicide rate among veterinarians is four times that of the general population? Veterinarians have an impossible task &mdash; helping patients who can&lsquo;t tell them where it hurts. Euthanasia fatigue, high student debt, high burnout rates, difficult clients with unrealistic expectations, and access to lethal medication are all cited as contributing factors.
            </p>
          </article>

          <article className="card">
            <h2>What does that have to do with this survey?</h2>
            <p>
              Veterinary medicine produces more new research than even the most committed vet can keep up with. Canine (or equine or feline) laryngeal paralysis have little in the way of established protocols, so veterinarians often have to make judgement calls based on general veterinary-medical principles. A well-designed survey can provide useful practical insights about the course of a disease over time based on the experience of people who are on the front lines in the trial-and-error battle against LP/GOLPP &mdash; people like you and me.
            </p>
          </article>

          <article className="card">
            <h2>What&lsquo;s the goal of this survey?</h2>
            <p>
              The goal of this first-of-its-kind survey is to capture long-term observations that veterinarians might not see, such as daily symptoms, medications, supplements, or the aftermath of treatment. Your survey participation may shed light on treatment approaches that might otherwise fly below the veterinary radar. While it&lsquo;s not empirical research, this kind of aggregated real-world information can help veterinarians help their clients and the animals they love. And anything that helps veterinarians do their seemingly-impossible job is worth pursuing.
            </p>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home

