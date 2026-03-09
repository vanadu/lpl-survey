import React from 'react'
import Link from "next/link";

const StartSurvey = () => {
  return (
    <>

      <main className="page home">


        <article>
            <Link href='survey-mode' className='link-dark'>
              <button>Take Survey</button>


            </Link>
          
            <Link href='browse-mode' className='link-dark'>
            
              <button>Browse Survey</button>
            
            
            </Link>



        </article>


      </main>

    </>
  )
}

export default StartSurvey