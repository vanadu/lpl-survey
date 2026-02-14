import React from 'react'
import SurveyComponent from '@/components/SurveyComponent_BAK'
import SurveyMenu from '@/components/SurveyMenu'
import Link from 'next/link';

const BreathingCrisis = () => {
  return (
      <section className="section">
        <div className="section_content">

          <SurveyMenu />

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'BREATHING_CRISIS-page' />
          </div>

        </div>
      </section>
  )
}

export default BreathingCrisis