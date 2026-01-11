import React from 'react'
import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'
import Link from 'next/link';

const InfoSources = () => {
  return (
      <section className="section">
        <div className="section_content">

          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'INFO_SOURCES-page' />
          </div>

        </div>
      </section>
  )
}

export default InfoSources