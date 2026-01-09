import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link';

import SurveyComponentMaster from '@/components/SurveyComponentMaster'
// import SurveyComponent from '@/components/SurveyComponent'
// import SurveyMenu from '@/components/SurveyMenu'

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
        title="Lar Par: 21st Century Guide to Laryngeal Paralysis in Dogs"
        description="Love your dog? Learn all about laryngeal paralysis symptoms, surgery, stent and treatment alternatives."
        canonical="https://larparlife.com"
        />
      <section className="section">
        <div className="section_content">
          {/* <SurveyMenu /> */}



          <div className="survey-wrapper">
            <SurveyComponentMaster />
          </div>

          {/* <div className="survey-wrapper">
            <SurveyComponent startPageName="lndgRoot_page" />
          </div> */}

        </div>
      </section>
    </>
  )
}

export default Home

