import React from 'react'
import Link from 'next/link'
// !VA React Icons
import { GrMenu } from 'react-icons/gr'

// !VA IMPORTANT: I couldn't figure out how to get any of these BottomNav buttons to work on the first tap in iOS. It requires two taps. Create any other function and it works on the first tap. But it iOS just does not recognize the first tap on these BottomNav functions. 


const BottomNavMenu = () => {
  return (
    <>
    <Link href='/allabout'>
        <div
          className="go-to-top half-circle"
          >
          <div className="bottom-nav-content">
            <div className="bottom-nav-icon">
              <GrMenu aria-label="Main Menu" className='bottom-nav-icon-svg'/>
            </div>
            <div className="mobile-hide-inline bottom-nav-text">
              <p>Menu</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default BottomNavMenu