import SurveyComponent from '@/components/SurveyComponent'
import Link from 'next/link';


import React from 'react'

const UserInfo = () => {
  return (
      <section className="section">
        <div className="section_content">
          <div className="top-links">
            <Link href="/">
              MASTER 
            </Link>
            <Link href="/01_CmpnNameLifeStatus">
              01_CmpnNameLifeStatus 
            </Link>
            <Link href="/02_UserInfo">
             02_UserInfo
            </Link>
            <Link href="/03_InfoSources">
             03_InfoSources
            </Link>
            <Link href="/04_IntubationHistory">
              04_IntubationHistory 
            </Link>
            <Link href="/05_BreathingCrisis">
              05_BreathingCrisis 
            </Link>
            <Link href="/06L_CmpnInfo">
              06L_CmpnInfo 
            </Link>
            <Link href="/07L_EarlySymptoms">
              07L_EarlySymptoms 
            </Link>
            <Link href="/08L_ChangedVets">
              08L_ChangedVets 
            </Link>
            <Link href="/09_PrimaryDuration">
              09L_PrimaryDuration 
            </Link>
            <Link href="/10L_PrimaryVets">
              10L_PrimaryVets 
            </Link>
            <Link href="/dcsdroot">
              dcsdRoot :-( 
            </Link>
          </div>

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'USER_INFO-page' />
          </div>

        </div>
      </section>
  )
}

export default UserInfo