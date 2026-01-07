import React from 'react'
import SurveyComponent from '@/components/SurveyComponent'
import Link from 'next/link';

const lvngCmpnInfo = () => {
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
              09_PrimaryDuration 
            </Link>
            <Link href="/10L_PrimaryVets">
              10L_PrimaryVets 
            </Link>
            <Link href="/dcsdroot">
              dcsdRoot :-( 
            </Link>
          </div>

          <div className="survey-wrapper">
            <SurveyComponent startPageName = '06L_CmpnInfo' />
          </div>

        </div>
      </section>
  )
}

export default lvngCmpnInfo