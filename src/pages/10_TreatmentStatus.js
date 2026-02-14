import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent_BAK'
import SurveyMenu from '@/components/SurveyMenu'

const TREATMENT_STATUS = () => {
  return (
      <section className="section">
        <div className="section_content">

          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'TREATMENT_STATUS-page' />
          </div>

        </div>
      </section>
  )
}

export default TREATMENT_STATUS