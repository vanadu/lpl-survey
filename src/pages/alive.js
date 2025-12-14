import SurveyComponent from '@/components/SurveyComponent'
import Link from 'next/link';


import React from 'react'

const Alive = () => {
  return (
      <section className="section">
        <div className="section_content">
          <div className="top-links">
            <Link href="/">
              Landing 
            </Link>
            <Link href="/alive">
              Still alive!
            </Link>
            <Link href="/deceased">
              Crossed over :-( 
            </Link>
          </div>

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'alive_page' />
          </div>

        </div>
      </section>
  )
}

export default Alive