import SurveyComponent from '@/components/SurveyComponent'
import Link from 'next/link';


import React from 'react'

const LvngRoot = () => {
  return (
      <section className="section">
        <div className="section_content">
          <div className="top-links">
            <Link href="/">
              MASTER 
            </Link>
            <Link href="/lndgroot">
              lndgRoot 
            </Link>
            <Link href="/lvngroot">
             lvngRoot
            </Link>
            <Link href="/lvngcmpn">
             lvngCmpn
            </Link>
            <Link href="/lvnginfo">
              lvngInfo 
            </Link>
            <Link href="/lvngerly">
              lvngErly 
            </Link>
            <Link href="/dcsdroot">
              dcsdRoot :-( 
            </Link>
          </div>

          <div className="survey-wrapper">
            <SurveyComponent startPageName = 'lvngRoot_page' />
          </div>

        </div>
      </section>
  )
}

export default LvngRoot