import Link from 'next/link';
import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'


import React from 'react'

const UserInfo = () => {
  return (
      <section className="section">
        <div className="section_content">
          <SurveyMenu />

          <div className="survey-wrapper">
            {/* <SurveyComponent startPageName = 'USER_INFO-page' /> */}
          </div>

        </div>
      </section>
  )
}

export default UserInfo