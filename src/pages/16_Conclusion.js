import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'

const CONCLUSION = () => {
  return (
      <section className="section">
        <div className="section_content">
          <SurveyDevMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'CONCLUSION-page' />
          </div>

        </div>
      </section>
  )
}

export default CONCLUSION