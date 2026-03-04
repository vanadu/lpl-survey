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
      <main class="page home">
        <header class="home-hero card card--lift">
          <h1>Welcome to the 2026 LP/GOLPP Survey!</h1>
          <p class="slug">Powered by larparlife.org</p>

          <div class="start-survey-button-container">
            <a class="btn btn--primary start-survey-button" href="/survey">
              Start the Survey
            </a>
            <a class="btn start-survey-button secondary" href="/browse">
              Browse Questions
            </a>
          </div>
        </header>

        <section class="home-body">
          <article class="card">
            <p>
              Did you know that the suicide rate among veterinarians is four times that
              of the general population? Veterinarians have an impossible task – helping
              patients who can’t tell them where it hurts...
            </p>
          </article>

          <article class="card">
            <h2>What does that have to do with this survey?</h2>
            <p>
              As if their job wasn’t already difficult enough, veterinary medicine produces
              more new research and continuing education than even the most committed vet
              can keep up with...
            </p>
          </article>

          <article class="card">
            <h2>What’s the goal of this survey?</h2>
            <p>
              The goal of this survey is to capture long-term observations that veterinarians
              rarely see, such as daily symptoms, medications, supplements...
            </p>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home

