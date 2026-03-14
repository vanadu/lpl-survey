import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'

import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/img-lpl-org-logo.png"
import StartSurveyButton from "../../public/img-start-survey-button.png"

import SurveyHero from "../components/SurveyHero"



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
          <SurveyHero/>
        </header>

          

        <section className="content-body home-head">
          <h1>Welcome to the 2026 LP/GOLPP Survey!</h1>
            {/* <Link href='start-survey' className='link-dark'>
              Take the Survey!
            </Link> */}
          <article className="card">
            <h2>Did you know...</h2>
            <p>
              ...that the suicide rate among veterinarians is four times that of the general population? Veterinarians have an impossible task &mdash; helping patients who can&lsquo;t tell them where it hurts.
            </p>
            <p> 
              Euthanasia fatigue, high student debt, high burnout rates, difficult clients with unrealistic expectations, and access to lethal medication are all cited as contributing factors.
            </p>
          </article>

          <article className="card">
            <h2>How can a survey like this help?</h2>
            <p>
              Veterinary medicine produces more new research than even the most committed vet can keep up with. And canine (or equine or feline) laryngeal paralysis have little in the way of established protocols, so veterinarians often have to make judgement calls based on general veterinary-medical principles.
            </p>
            <p>
              A well-designed survey can provide useful practical insights about the course of a disease over time based on the experience of people who are on the front lines in the trial-and-error battle against LP/GOLPP &mdash; people like you and me.
            </p>
          </article>

          <article className="card">
            <h2>Your contribution matters!</h2>
            <p>
              The goal of this first-of-its-kind survey is to capture long-term observations that veterinarians might not see, such as daily symptoms, medications, supplements, or the aftermath of treatment. Your survey participation may shed light on treatment approaches that might otherwise fly below the veterinary radar.</p>
            <p> 
              While it&lsquo;s not empirical research, this kind of aggregated real-world information can help veterinarians help their clients and the animals they love. And anything that helps veterinarians do their seemingly-impossible job is worth pursuing.
            </p>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home

