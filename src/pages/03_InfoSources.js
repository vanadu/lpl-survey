import React from 'react'
import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'
import Link from 'next/link';

const InfoSources = () => {
  return (
      <section className="section">
        <div className="section_content">

          <SurveyDevMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'INFO_SOURCES-page' />
          </div>

        </div>
      </section>
  )
}

export default InfoSources