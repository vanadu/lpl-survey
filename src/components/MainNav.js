import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react'
import {usePathname} from 'next/navigation'
import {useRouter} from 'next/router'
import IconBar  from './IconBar'
import Image from 'next/image'
import Link from 'next/link'

// !VA Logo 
import logo from '../../public/img-lpl-logo.png'

// !VA Icons
// import { FaHome } from 'react-icons/fa'
import { FaChevronRight } from "react-icons/fa";
// import { FaAnglesRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";


// !VA Background image for guide dropdown menu, senior black lab
import GuideBG from '../../public/bricks/img-brick-11.webp'



import * as styles from '../styles/Header.module.scss'

const MainNav = ( ) => {
  
  const [isChecked, setChecked ] = useState(false)
  const checkRef = useRef(null)

  // !VA When a menu item is clicked, close the mobile menu
  const handleClick = (e) => {
    console.log('handleClick');
    // !VA If the hamburger menu is checked, ie. the mobile menu is open, clicking on a menu item in the menu will uncheck the menu and go to the clicked link target.
    isChecked ? setChecked(false) : null;
  }

  // !VA onChange is fired when the checked status of the input changes.
  const onChangeEvent=(e)=> {
    setChecked(e.target.checked)
  }
  
  return (
    <>
      {/* !VA This is the parent container for the ul containing the individual menu items */}
      <div className={styles.nav_menu}>






        {/* Mobile Menu Background Semicircle: https://codepen.io/xram/pen/DjbWbb  */}
        <div className={[styles.mobile_menu_bg, styles.mobile_menu_bg_top, styles.mobile_menu_bg_bottom].join(' ')}>
          &nbsp;
        </div>
        
        {/* When the input is clicked, fire onChangeEvent and toggle the input's checked status  */}
        <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange= {(e) => onChangeEvent(e)} ref={checkRef} />
        {/* This is the first line in the burger or the slash in the X */}
        <span className={styles.menu_span}></span>
        {/* This is the first line in the burger and has nothing in the */}
        <span className={styles.menu_span}></span>
        {/* This is the third line in the burger or the backslash line in the X */}
        <span className={styles.menu_span}></span>

        {/* !VA This is the parent container for the actual individual menu items. Eventually this should move to a separate container, i.e. MainNavItems.js */}

        <ul 
          className={styles.nav_menu_items}>
          <li className={[styles.nav_main_list_item, styles.nav_logo].join(' ')}>

              <Link href='/'>
                <Image 
                src={logo} 
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className={styles.nav_logo_img}
                alt="LarParLife Logo" 
              />
            </Link>



          </li>
          <li className={styles.nav_main_list_item}>
            <Link href='/'
              onClick = {handleClick} >
              Home
            </Link>
          </li>
          <li className={styles.nav_main_list_item}>
            <Link href='/whystent'
              onClick = {handleClick}             
              >
              Why Stent?
            </Link>
          </li>
          <li className={[styles.nav_main_list_item, 'mobile-show-inline'].join(' ')}>
            <Link href='/social'
              onClick = {handleClick}
              >Community
            </Link>
          </li>
          <li className={styles.nav_main_list_item}>
            <Link href='/stories'
              onClick = {handleClick}
              >Stories
            </Link>
          </li>
          <li className={styles.nav_main_list_item}>
            <Link href='/blog'
              onClick = {handleClick}
              >News
            </Link>
          </li>
          <li key='dvms'className={styles.nav_main_list_item}>
            <Link href='/allabout'
              onClick = {handleClick}
              >
              Lar Par Guide <FaChevronRight className={styles.nav_dropdown_icon} />
            </Link>
          </li>
          {/* getClick passes handleClick to the IconBar, so that when an icon is clicked, the handleClick runs here in the parent to close the mobile nav menu */}
          <li className={styles.icon_bar_menu_item}>
            <IconBar 
              getClick={handleClick}/>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MainNav