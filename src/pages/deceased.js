import React from 'react'
import SurveyComponent from '@/components/SurveyComponent'
import Link from 'next/link';

const Deceased = () => {
  return (
    <section className="section">
      <div className="section_content">
          <div className="top-links">
            <Link href="/">
              MASTER 
            </Link>
            <Link href="/landing">
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
          <SurveyComponent startPageName = 'deceased_page' />
        </div>

      </div>
    </section>
  )
}

export default Deceased