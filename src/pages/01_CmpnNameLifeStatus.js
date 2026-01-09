import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link';

import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'

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

          <SurveyMenu />


          <div className="survey-wrapper">
            {/* <SurveyComponent startPageName = 'CMPN_NAME_LIFE_STATUS-page' /> */}
          </div>

        </div>
      </section>
    </>
  )
}

export default CmpnNameLifeStatus

