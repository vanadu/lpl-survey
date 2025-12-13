import React from 'react'
import {useState} from 'react'

export const SitenavContext = React.createContext()


import Link from 'next/link'
import Image from 'next/image'

import MainNav from './MainNav'

import * as styles from '../styles/Header.module.scss'
import Subnav1 from './Subnav1'

const NavBar = () => {

  const [shown, setShown ] = useState(false)
  // const [context, setContext] = useState("default context value");


  return (
    <>
    <SitenavContext.Provider  value={[shown, setShown]}>
        <div className={styles.nav}>
            <MainNav />
            <Subnav1 />
        </div>
      </SitenavContext.Provider>
    </>

  )
}

export default NavBar