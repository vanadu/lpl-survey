import React from 'react'
import Link from 'next/link'

const SurveyHeader = () => {
  return (
    <>

    <div className="survey-dropdown" id="myDropdown">
      <button className="survey-dropdown__button">MASTER</button>
      <ul className="survey-dropdown__list">
        <li className="survey-dropdown__item"> <Link href="/00_Landing">
          00_Landing
        </Link></li>
        <li className="survey-dropdown__item"> <Link href="/01_UserInfo">
          01_UserInfo
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/02_CmpnNameLifeStatus">
          02_CmpnNameLifeStatus 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/03_InfoSources">
          03_InfoSources
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/04_IntubationHistory">
          04_IntubationHistory 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/05_BreathingCrisis">
          05_BreathingCrisis 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/06L_CmpnInfo">
          06L_CmpnInfo 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/06L_CmpnInfo">
          06L_CmpnInfo 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/07L_EarlySymptoms">
          07L_EarlySymptoms 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/08L_ChangedVets">
          08L_ChangedVets 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/09L_PrimaryDuration">
          09_PrimaryDuration 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/10L_PrimaryVet">
          10L_PrimaryVet
        </Link></li>
        <li className="survey-dropdown__item">XXX</li>
      </ul>
    </div>

    </>
  )
}

export default SurveyHeader