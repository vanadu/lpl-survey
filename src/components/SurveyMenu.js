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
        <li className="survey-dropdown__item"><Link href="/02_CmpnInfo">
          02_CmpnInfo 
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
        <li className="survey-dropdown__item"><Link href="/06_EarlySymptoms">
          06_EarlySymptoms 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/07_PrimaryDuration">
          07_PrimaryDuration 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/08_PrimaryVet">
          08_PrimaryVet
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/09_Diagnosis">
          09_Diagnosis
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/10_TreatmentStatus">
          10_TreatmentStatus 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/11_TreatmentFactors">
          11_TreatmentFactors
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/12_Management">
          12_Management
        </Link></li>
        




      </ul>
    </div>

    </>
  )
}

export default SurveyHeader