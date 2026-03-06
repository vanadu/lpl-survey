import React from 'react'
import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'
import Link from 'next/link';

const BreathingCrisis = () => {
  return (
      <section className="section">
        <div className="section_content">

          <SurveyDevMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'BREATHING_CRISIS-page' />
          </div>

        </div>
      </section>
  )
}

export default BreathingCrisis