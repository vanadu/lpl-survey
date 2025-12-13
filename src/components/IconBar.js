import { useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LarParNewsIcon from '/public/icon-larpar-news.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { FaYoutube } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { FaExclamationCircle } from 'react-icons/fa'
import { IoPawSharp } from 'react-icons/io5'
import { FaHome } from 'react-icons/fa'

import * as styles from '../styles/Header.module.scss'

// !VA getClick is the handleClick function that is passed in from the MainNav component. handleClick toggles the hidden checkbox on and off that shows/hides the mobile menu. 
const IconBar = ( { getClick }) => {

  return (
    <>
      <div className={styles.icon_bar}>
        <div className={styles.icons}>
        {/* Using the Twitter icon as a dummy click object for testing. DON'T FORGET that React icons can't be used to run any React code. Props only work on their container, not the React icons components themselves. */}
        {/* <div 
          className={styles.devFoo}
          onClick={getClick}
          >
          <FaTwitterSquare 
            className={styles.myfoo}
          />
        </div> */}
        {/* We want the Youtube link to open in a new tab and NOT close the mobile menu */}
        <Link 
          href='https://www.youtube.com/channel/UCwHwkfSqDlO6MJejPrxzW0A'
          className={styles.icon} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Our Youtube channel">
          <FaYoutube />
        </Link>
        {/* We want the /social and /contact links to open in the same tab, so run getClick, which runs handleClick in the parent MainNav component to close the mobile menu. */}
        <Link 
          href='/social' 
          className={styles.icon} 
          onClick={getClick}
          aria-label="Visit Our Facebook Group">
          <FaFacebookF />
        </Link>
        <Link
          href='/contact'
          className={styles.icon} 
          onClick={getClick}
          aria-label="Contact Us"
          >
          <MdMail />
        </Link>


        </div>
      </div>
    </>
  )
}

export default IconBar
