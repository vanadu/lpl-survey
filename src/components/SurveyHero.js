import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { BsClipboardCheck, BsBook } from "react-icons/bs";
import HeroImg01 from '../../public/hero/img-hero_01.jpg'
import HeroImg02 from '../../public/hero/img-hero_02.jpg'
import HeroImg03 from '../../public/hero/img-hero_03.jpg'
import HeroImg04 from '../../public/hero/img-hero_04.jpg'
import HeroImg05 from '../../public/hero/img-hero_05.jpg'
import HeroImg06 from '../../public/hero/img-hero_06.jpg'
import HeroImg07 from '../../public/hero/img-hero_07.jpg'
import HeroImg08 from '../../public/hero/img-hero_08.jpg'
import HeroImg09 from '../../public/hero/img-hero_09.jpg'
import HeroImg10 from '../../public/hero/img-hero_10.jpg'
import HeroImg11 from '../../public/hero/img-hero_11.jpg'
import HeroImg12 from '../../public/hero/img-hero_12.jpg'
import Logo from "../../public/img-lpl-org-logo.png"

const SurveyHero = () => {
  return (
    <>
    <div className="hero-wrapper">

        <div className="hero-link-container">
          <Link href='/'>
            <div className="hero-content">
                <div className="hero">
                  <div className="hero__grid">

                    <div className="hero__cell"><Image src={HeroImg01} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg02} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg03} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg04} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg05} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg06} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg07} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg08} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg09} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg10} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg11} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                    <div className="hero__cell"><Image src={HeroImg12} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" /></div>
                  </div>

                  <div className="hero__overlay"></div>

                  <div className="hero__headline">
                    <div className="hero-headline-container">
                      <h2 className="hero-headline-heading">LP/GOLPP<span className="mobile-show-inline"><br /></span><span className="no-wrap">&nbsp;Survey&nbsp;2026</span></h2>
                    </div>
                  </div>
                </div>

            </div>
          </Link>
          <div className="hero-subtext-container">
            <div className="hero-subtext">
              <h3 className="hero-slug">powered by larparlife.org</h3>
              <p className="hero-version">Version 1.0/26.06.05.01</p>
            </div>
            <div className="logo-container">
              <Image 
                src={Logo} 
                className="hero-logo" alt="LarParLife Logo" 
              />
            </div>
          </div>

          <div className="hero-cta-container">
            <Link href='/survey-mode' className='link-dark'>
            <BsClipboardCheck className="hero-cta-icon" />
            <span className="hero-cta-link-text">Start Survey</span>
            </Link>
          </div>

        </div>

    </div>
    
    
    </>
  )
}

export default SurveyHero