import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'

const L_EARLY_SYMPTOMS = () => {
  return (
      <section className="section">
        <div className="section_content">
          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'L_EARLY_SYMPTOMS-page' />
          </div>

        </div>
      </section>
  )
}

export default L_EARLY_SYMPTOMS