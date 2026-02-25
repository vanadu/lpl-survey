import React from 'react'
// !VA Next.js components
import { useState, useEffect } from 'react'
import { useRouter} from 'next/router'

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img-lpl-logo.png"; // keep your existing import
import { NextSeo } from 'next-seo'

// !VA Survey Components
// import SurveyComponentMaster from '@/components/SurveyComponentMaster'
// import SurveyComponent from '@/components/SurveyComponent'
import SurveyDevMenu from '@/components/SurveyDevMenu'
import InProgressComponent from '@/components/InProgressComponent';


const InProgress = () => {

  return (
    <>  
      <section className="section">
        <div className="section_content">

              <InProgressComponent />

        </div>
      </section>
    
    </>
  )
}

export default InProgress