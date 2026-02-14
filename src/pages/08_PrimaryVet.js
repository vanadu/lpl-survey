import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent_BAK'
import SurveyMenu from '@/components/SurveyMenu'

const PRIMARY_VET = () => {
  return (
      <section className="section">
        <div className="section_content">
          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'PRIMARY_VET-page' />
          </div>

        </div>
      </section>
  )
}

export default PRIMARY_VET