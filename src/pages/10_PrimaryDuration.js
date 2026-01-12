import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'

const PRIMARY_DURATION = () => {
  return (
      <section className="section">
        <div className="section_content">
          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'PRIMARY_DURATION-page' />
          </div>

        </div>
      </section>
  )
}

export default PRIMARY_DURATION