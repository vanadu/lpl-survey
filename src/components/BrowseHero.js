import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { BsClipboardCheck, BsBook } from "react-icons/bs";
import BrowseHeroImg01 from '../../public/hero/img-hero_01.jpg'
import BrowseHeroImg02 from '../../public/hero/img-hero_02.jpg'
import BrowseHeroImg03 from '../../public/hero/img-hero_03.jpg'
import BrowseHeroImg04 from '../../public/hero/img-hero_04.jpg'
import BrowseHeroImg05 from '../../public/hero/img-hero_05.jpg'
import BrowseHeroImg06 from '../../public/hero/img-hero_06.jpg'
import BrowseHeroImg07 from '../../public/hero/img-hero_07.jpg'
import BrowseHeroImg08 from '../../public/hero/img-hero_08.jpg'
import BrowseHeroImg09 from '../../public/hero/img-hero_09.jpg'
import BrowseHeroImg10 from '../../public/hero/img-hero_10.jpg'
import BrowseHeroImg11 from '../../public/hero/img-hero_11.jpg'
import BrowseHeroImg12 from '../../public/hero/img-hero_12.jpg'
import Logo from "../../public/img-lpl-org-logo.png"

const SurveyHero = () => {
  return (
    <>
    <div className="hero-wrapper">

        <div className="hero-link-container">
          <Link href='/'>
            <div className="hero-content">
                {/* <div className="hero">
                  <div className="hero__grid">

                    <div className="hero__cell"><Image src={BrowseHeroImg01} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg02} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg03} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg04} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg05} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg06} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg07} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg08} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg09} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg10} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg11} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={BrowseHeroImg12} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                  </div>

                  <div className="hero__overlay"></div>

                  <div className="hero__headline">
                    <div className="hero-headline-container">
                      <h2 className="hero-headline-heading">LP/GOLPP<span className="mobile-show-inline"><br /></span><span className="no-wrap">&nbsp;Survey&nbsp;2026</span></h2>
                    </div>
                  </div>
                </div> */}

            </div>
          </Link>
          {/* <div className="hero-subtext-container">
            <div className="hero-subtext">
              <h3 className="hero-slug">powered by larparlife.org</h3>
              <p className="hero-version">Version 1.0/26.06.05.01</p>
            </div>
            <div className="hero-logo-container">
              <Image 
                src={Logo} 
                className="hero-logo" alt="LarParLife Logo" 
              />
            </div>
          </div> */}

          {/* <div className="hero-cta-container">
            <Link href='/survey-mode' className='link-dark'>
            <BsClipboardCheck className="hero-cta-icon" />
            <span className="hero-cta-link-text">Start Survey</span>
            </Link>
          </div> */}

          <div className="browse-hero-content browse-page"> 
              <h2 className="browse-hero-heading">LP/GOLPP Survey 2026 - Browse Mode</h2>
              <p><span className="emphasis">Browse Mode</span> is a flat-file catalog of all the <span className="emphasis">LP/GOLPP Survey 2026</span> content that is provided here for research and search optimization purposes, and also as a &lsquo;crash course&rsquo; for people seeking a comprehensive overview of LP/GOLPP issues. The full survey is personalized to only show participants a small subset of the full catalog. To start the personalized survey, <Link href='/survey-mode' className='link-accent'>select this link</Link>.</p>
              <hr />
          </div>

        </div>

    </div>
    
    
    </>
  )
}

export default SurveyHero