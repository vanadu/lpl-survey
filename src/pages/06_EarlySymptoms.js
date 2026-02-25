import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'

const EARLY_SYMPTOMS = () => {
  return (
      <section className="section">
        <div className="section_content">
          <SurveyDevMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'EARLY_SYMPTOMS-page' />
          </div>

        </div>
      </section>
  )
}

export default EARLY_SYMPTOMS