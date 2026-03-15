import React from 'react'
import BrowseMenu from "../../components/BrowseMenu"
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../public/img-lpl-org-logo.png"
import BrowseMode from "../../../public/img-browse-mode.png"
import SurveyHero from "../../components/SurveyHero"


const index = () => {
  return (
    <>
      <BrowseMenu />
      <main className='page browse'>

        <header>
          <SurveyHero />
        </header>


        <article className="card">

          <div className="survey-link-container">
              <Link href='/browse-mode' className='link-dark'>
                <Image 
                  src={BrowseMode} 
                  className="survey-mode-btn" alt="XXX" 
                />
                <figcaption className="survey-mode-btn-caption"><span className="emphasis">Start Browse Mode</span></figcaption>
              </Link>
           </div>
          <h2>Browse Mode</h2>
          <p>
            In <span className="emphasis">Browse Mode</span>, you can browse through the questions in the 2026 LP/GOLPP Survey without answering or submitting. This is helpful if:
          </p>
          <ul>
            <li>You’re new to the LP/GOLPP journey and want to know what kind of decision you’ll be facing.</li>
            <li>You want a quick preview of some of the questions you&lsquo;ll need to answer before taking the survey and submitting your responses.</li>
          </ul>
          <p>
            <span className="emphasis">Browse Mode</span> provides a stripped-down version of the survey based on a female Labrador Retriever named Bella. What you&lsquo;ll see is a flat version of the survey content without any of the response processing, internal logic, or personalization that makes the survey functional. 
          </p>
          <p>
            You can&lsquo;t submit your responses in <span className="emphasis">Browse Mode</span>. For the full survey experience and to share the details of your LP/GOLPP journey, run the survey in full <span className="emphasis">Survey Mode</span>.
          </p>

          <p>
            For instance, questions about Bella&lsquo;s age at various points in the LP/GOLPP progression have been removed from Browse Mode, so some of the questions may seem out of context. But for people who are still learning about LP/GOLPP, it&lsquo;s useful to see all the questions in one place, not just the ones that pertain to a specific dog&lsquo;s LP journey. 
          </p>



        </article>




      </main>
    </>
  )
}

export default index