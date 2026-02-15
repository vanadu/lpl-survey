import React from 'react'
// !VA Next.js components
// import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link';
import { NextSeo } from 'next-seo'

// !VA Survey Components
// import SurveyComponentMaster from '@/components/SurveyComponentMaster'
// import SurveyComponent from '@/components/SurveyComponent'
import SurveyMenu from '@/components/SurveyMenu'
import SurveySuccess from '@/components/SurveySuccess'


const SuccessPage = () => {
  return (
    <>  
      <section className="section">
        <div className="section_content">
          {/* <SurveyMenu /> */}

          <SurveySuccess />

        </div>
      </section>
    
    </>
  )
}

export default SuccessPage