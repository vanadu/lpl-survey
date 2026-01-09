import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'

const L_CMPN_INFO = () => {
  return (
      <section className="section">
        <div className="section_content">

          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'L_CMPN_INFO-page' />
          </div>

        </div>
      </section>
  )
}

export default L_CMPN_INFO