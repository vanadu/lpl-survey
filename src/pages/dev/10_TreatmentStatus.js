import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'

const TREATMENT_STATUS = () => {
  return (
      <section className="section">
        <div className="section_content">

          <SurveyDevMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'TREATMENT_STATUS-page' />
          </div>

        </div>
      </section>
  )
}

export default TREATMENT_STATUS