import React from 'react'
import Image from 'next/image'
import SurveyHeroImage from "../../public/sj-hero-grid_stylized.png"
// import Logo from "../../../public/img-lpl-org-logo.png"
import Logo from "../../public/img-lpl-org-logo.png"

const SurveyHero = () => {
  return (
    <>
      <div class="hero">
        <div className="site-header-title-container">
          <h2 className="site-header-title-heading">LP/GOLPP Survey 2026</h2>
          <p className="site-header-title-subheading">powered by larparlife.org</p>
        </div>

        <div className="site-header-version-container">
          <div className="site-header-version-content">
            <Image 
              src={Logo} 
              className='site-header-version-logo' 
              alt="LarPar Life Logo" 
            />
            <p className="site-header-version-text">Version 0.9/26.03.01.01</p>
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default SurveyHero