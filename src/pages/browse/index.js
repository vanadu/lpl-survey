import React from 'react'
import BrowseMenu from "../../components/BrowseMenu"
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../public/img-lpl-logo.png"

const index = () => {
  return (
    <>
      <BrowseMenu />
      <main className='page browse'>

        <header>
          <div className="browse-home-header-container">
            <div class="browse-home-title-container">
              <h2 class="browse-home-title-heading">LP/GOLPP Survey 2026</h2>
              <p class="browse-home-title-subheading">Powered by LarParLife.org</p>
            </div>

            <div class="browse-home-version-container">
              <div class="browse-home-version-content">
                <Image 
                  src={Logo} 
                  className='browse-home-version-logo' 
                  alt="LarPar Life Logo" 
                />
                <p class="browse-home-version-text">Version 0.9/26.03.01.01</p>
              </div>
            </div>
          </div>
        </header>







      </main>
    </>
  )
}

export default index