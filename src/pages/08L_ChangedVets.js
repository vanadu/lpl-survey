import React from 'react'
import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'

const lvngChangedVets = () => {
  return (
      <section className="section">
        <div className="section_content">


          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'L_CHANGED_VETS-page' />
          </div>

        </div>
      </section>
  )
}

export default lvngChangedVets