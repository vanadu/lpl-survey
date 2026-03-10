import React from 'react'
import Image from 'next/image'
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
// import Logo from "../../../public/img-lpl-org-logo.png"
import Logo from "../../public/img-lpl-org-logo.png"

const SurveyHero = () => {
  return (
    <>
      <div class="hero">
        <div class="hero__grid">

          <Image src={HeroImg01} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg02} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg03} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg04} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg05} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg06} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg07} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg08} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg09} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg10} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg11} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
          <Image src={HeroImg12} className="hero__tile" alt="LarParLife.org LP/GOLPP hero image" />
        </div>

        <div class="hero__overlay"></div>

        <div class="hero__content">
          {/* <!-- logo / heading / text --> */}
        </div>
      </div>
    
    
    
    </>
  )
}

export default SurveyHero