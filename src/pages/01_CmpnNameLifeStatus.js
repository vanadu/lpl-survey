import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link';

import SurveyComponent from '@/components/SurveyComponent'

import { NextSeo } from 'next-seo'

// !VA Styles
// import * as styles from '../styles/Home.module.scss'

const CmpnNameLifeStatus = () => {
  // !VA Log out the posts exported from the getStaticProps function below 



  return (
    <>
      <NextSeo 
        title="Lar Par: 21st Century Guide to Laryngeal Paralysis in Dogs"
        description="Love your dog? Learn all about laryngeal paralysis symptoms, surgery, stent and treatment alternatives."
        canonical="https://larparlife.com"
        />
      <section className="section">
        <div className="section_content">
          <div className="top-links">
            <Link href="/">
              MASTER 
            </Link>
            <Link href="/01_CmpnNameLifeStatus">
              01_CmpnNameLifeStatus 
            </Link>
            <Link href="/02_UserInfo">
             02_UserInfo
            </Link>
            <Link href="/03_InfoSources">
             03_InfoSources
            </Link>
            <Link href="/04_IntubationHistory">
              04_IntubationHistory 
            </Link>
            <Link href="/05_BreathingCrisis">
              05_BreathingCrisis 
            </Link>
            <Link href="/06L_CmpnInfo">
              06L_CmpnInfo 
            </Link>
            <Link href="/07L_EarlySymptoms">
              07L_EarlySymptoms 
            </Link>
            <Link href="/08L_ChangedVets">
              08L_ChangedVets 
            </Link>
            <Link href="/09_PrimaryDuration">
              09_PrimaryDuration 
            </Link>
            <Link href="/10L_PrimaryVets">
              10L_PrimaryVets 
            </Link>
            <Link href="/dcsdroot">
              dcsdRoot :-( 
            </Link>
          </div>



          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'CMPN_NAME_LIFE_STATUS-page' />
          </div>

        </div>
      </section>
    </>
  )
}

export default CmpnNameLifeStatus

