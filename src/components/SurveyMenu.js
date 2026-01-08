import React from 'react'
import Link from 'next/link'

const SurveyHeader = () => {
  return (
    <>

    <div class="survey-dropdown" id="myDropdown">
      <button class="survey-dropdown__button">MASTER</button>
      <ul class="survey-dropdown__list">
        <li class="survey-dropdown__item"><Link href="/01_CmpnNameLifeStatus">
          01_CmpnNameLifeStatus 
        </Link></li>
        <li class="survey-dropdown__item"> <Link href="/02_UserInfo">
          02_UserInfo
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/03_InfoSources">
          03_InfoSources
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/04_IntubationHistory">
          04_IntubationHistory 
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/05_BreathingCrisis">
          05_BreathingCrisis 
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/06L_CmpnInfo">
          06L_CmpnInfo 
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/06L_CmpnInfo">
          06L_CmpnInfo 
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/07L_EarlySymptoms">
          07L_EarlySymptoms 
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/08L_ChangedVets">
          08L_ChangedVets 
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/09L_PrimaryDuration">
          09_PrimaryDuration 
        </Link></li>
        <li class="survey-dropdown__item"><Link href="/10L_PrimaryVet">
          10L_PrimaryVet
        </Link></li>
        <li class="survey-dropdown__item">XXX</li>
      </ul>
    </div>







{/* 
      <div className="survey-links">
        <Link href="/">
          MASTER 
        </Link>
        <p>NEW</p>
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
        <Link href="/09L_PrimaryDuration">
          09_PrimaryDuration 
        </Link>
        <Link href="/10L_PrimaryVet">
          10L_PrimaryVet
        </Link>
        <Link href="/dcsdroot">
          dcsdRoot :-( 
        </Link>
      </div> */}
    </>
  )
}

export default SurveyHeader