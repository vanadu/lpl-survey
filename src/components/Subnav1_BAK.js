import React from 'react'
import { useRef, useContext } from 'react'


import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

import DvmsNav from './guidenav/DvmsNav'
import PatientsNav from './guidenav/PatientsNav'
import StoriesNav from './guidenav/StoriesNav'
import Home from '../pages/index.js'


import * as styles from '../styles/Header.module.scss'

const Subnav1 = () => {
  const [shown, setShown] = useContext(SitenavContext);
  
  const subnavRef = useRef()
  const router = useRouter()

  // !VA This switch case pattern works. I don't know why. You'd think it would require a state variable to carry into the render, but it doesn't. I tried a state variable for this and got an infinite loop. What we're doing here is showing the respective Nav component for the respective route, which was set to the shown POS from the click target in MainNav
  let foo;
  switch(true) {
  case shown === '/':
    // !VA Do nothing here. The page wasrouted to the root/home page in MainNav when the menu item was toggled off and setShown was set to '/'
    break;
  case shown === '/stories':
    // !VA The Stories menu item was clicked, so show the Stories nav.
    foo = <StoriesNav />
    break;
    case shown === '/patients':
    // !VA The Patients menu item was clicked, so show the Patients nav.
    foo = <PatientsNav />
    break;
    case shown === '/dvms':
    // !VA The Dwms menu item was clicked, so show the Dwms nav.
    foo = <DvmsNav />
    break;
  default:
    // code block
  } 


  return (
    <>
      <div 
          className={ [styles.nav_subnav1, styles.saga_prologue].join(' ') }
          ref={subnavRef}
          >
          { shown && 
        <>
        {foo}
        </>
          }
      </div>
    </>
  )
}

export default Subnav1