import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'

const SCRAP2 = () => {
  return (
      <section className="section">
        <div className="section_content">


          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'SCRAP2-page' />
          </div>

        </div>
      </section>
  )
}

export default SCRAP2