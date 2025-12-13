import React from 'react'
import { useRouter } from 'next/router'
import { MdOutlineArrowBack } from 'react-icons/md'

const BottomNavBack = () => {
  const router = useRouter()

  // !VA IMPORTANT: I couldn't figure out how to get any of these BottomNav buttons to work on the first tap in iOS. It requires two taps. Create any other function and it works on the first tap. But it iOS just does not recognize the first tap on these BottomNav functions. 

  return (
    <>
      <div 
        className="go-back half-circle"
        onClick={() => router.back()}
        >
        <div className="go-back-content bottom-nav-content">
          <div className="bottom-nav-icon">
            <MdOutlineArrowBack className='bottom-nav-icon-svg' />
          </div>
          <div className="mobile-hide-inline bottom-nav-text">
            <p>Back</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default BottomNavBack