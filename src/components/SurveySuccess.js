import React from 'react'
// !VA Next.js imports
import Image from 'next/image'
import Link from 'next/link'

// !VA Images
import logo from '../../public/img-lpl-logo.png'


const SurveySuccess = () => {
  return (
    <>
      <div className="container-flex-center">
        <h1 className="main-head">Your survey was submitted successfully!</h1>
        <Link href='/larpaflife.com' className='link-dark'>
          <Image 
            src={logo} 
            className="success-icon" 
            alt="Join the Lar Par Community" 
          />
        </Link>
        <p className="content-text">
          Thank you for taking the survey.
        </p>

        <p className="survey-spacer">&nbsp;</p>

      </div>
          
    </>

  )
}

export default SurveySuccess