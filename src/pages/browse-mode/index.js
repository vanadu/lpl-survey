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
            <div className="browse-home-title-container">
              <h2 className="browse-home-title-heading">LP/GOLPP Survey 2026</h2>
              <p className="browse-home-title-subheading">powered by larparlife.org</p>
            </div>

            <div className="browse-home-version-container">
              <div className="browse-home-version-content">
                <Image 
                  src={Logo} 
                  className='browse-home-version-logo' 
                  alt="LarPar Life Logo" 
                />
                <p className="browse-home-version-text">Version 0.9/26.03.01.01</p>
              </div>
            </div>
          </div>
        </header>


        <article>
          <h2>About Browse Mode</h2>
          <p>
            You can browse through the questions in the 2026 LP/GOLPP Survey without answering or submitting. This is helpful if:
          </p>
          <ul>
            <li>You’re new to the LP/GOLPP journey and want to know what kind of decision you’ll be facing.</li>
            <li>You want a quick preview of some of the questions you&lsquo;ll need to answer before taking the survey and submitting your responses.</li>
          </ul>
          <p>
            Browse Mode provides a stripped-down version of the survey based on a female Labrador Retriever named Bella. What you&lsquo;ll see is a flat version of the survey content without any of the response processing, internal logic, or personalization that makes the survey functional and useful.</p>

          <p>
            For instance, questions about Bella&lsquo;s age at various points in the LP/GOLPP progression have been removed from Browse Mode, so some of the questions may seem out of context. But for people who are still learning about LP/GOLPP, it&lsquo;s useful to see all the questions in one place, not just the ones that pertain to a specific dog&lsquo;s LP journey. 
          </p>



        </article>




      </main>
    </>
  )
}

export default index