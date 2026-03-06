import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'


import React from 'react'

const Landing = () => {
  return (
      <section className="section">
        <div className="section_content">
          <SurveyDevMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'LANDING-page' />
          </div>

        </div>
      </section>
  )
}

export default Landing