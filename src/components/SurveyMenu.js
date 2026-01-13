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
        <li className="survey-dropdown__item"><Link href="/03_Scrap">
          03_Scrap 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/04_InfoSources">
          04_InfoSources
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/05_IntubationHistory">
          05_IntubationHistory 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/06_BreathingCrisis">
          06_BreathingCrisis 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/07_EarlySymptoms">
          07_EarlySymptoms 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/08_ChangedVets">
          08_ChangedVets 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/09_VetProcedure">
          09_VetProcedure 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/10_PrimaryDuration">
          10_PrimaryDuration 
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/11_PrimaryHandling">
          11_PrimaryHandling
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/12_PrimaryRecommendation">
          12_PrimaryRecommendation
        </Link></li>
        <li className="survey-dropdown__item"><Link href="/13_TreatmentFactors">
          13_TreatmentFactors
        </Link></li>

      </ul>
    </div>

    </>
  )
}

export default SurveyHeader