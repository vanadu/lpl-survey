import React from 'react'
// import Link from 'next/link'
// import {useRouter}from 'next/router'
import { useState, useEffect } from 'react'

// !VA 2024
import * as styles from '../styles/Header.module.scss'

// !VA React Icons
import { MdVerticalAlignTop } from 'react-icons/md'


const BottomNavTop = () => {

  // !VA IMPORTANT: I couldn't figure out how to get this to scroll on iOS on the first tap. It requires two taps, but ONLY for window.scrollTo. Create any other function and it works on the first tap. But it iOS just does not recognize the first tap on these BottomNav functions. 
  const scrollTop = ( ) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
     <div
        id="go-to-top"
        // className={[styles.go_to_top, styles.half_circle].join(' ')}
        className={[styles.bottom_nav_bg, styles.bottom_nav_bg_top, styles.bottom_nav_bg_bottom ].join(' ')}
        onClick={scrollTop}
      >
      </div>
      <div className={styles.bottom_nav_content}>
        <div className={styles.bottom_nav_icon}>
          <MdVerticalAlignTop className={styles.bottom_nav_icon_svg}/>
        </div>
        {/* <div className="mobile-hide bottom-nav-text"> */}
        {/* <div className={["mobile-hide", styles.bottom_nav_text].join(' ')}> */}
        {/* <div className={["mobile-hide", styles.bottom_nav_text].join(' ')}>
          Top
        </div> */}
      </div>
    </>
  )
}

export default BottomNavTop