import SurveyComponent from '@/components/SurveyComponent'
import { alive } from "../../data/alive-page.json";


import React from 'react'

const Alive = () => {
  return (
      <section className="section">
        <div className="section_content">

          <div className="survey-wrapper">
            <SurveyComponent />
          </div>

        </div>
      </section>
  )
}

export default Alive