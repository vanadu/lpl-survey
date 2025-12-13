import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import * as styles from '../../styles/Header.module.scss'

// !VA Destructure out the menus object and the path of the selected item on the main menu
const Subnav1Items = ( { items } ) => {
  // !VA Piece of state to contain the subnav items, i.e. the object with the array of Stories, Patients and DVMs submenus.

  return (
    <>
      <div className={styles.nav_subnav1}>
        <ul className={styles.nav_subnav1_list}>
            {items.map((item, index) => {
              if (item.url.includes('/stories')) {
                return (
                  <li key={index}>
                    <h3 
                      key={index}
                      >
                      {item.submenu1.map(sub1 => (
                        <li key={sub1.text}>
                          <h3>{sub1.text}</h3>
                         </li>
                       ))}
                        
                      </h3>
                  </li>
                  );
                 }

              })
            }
        </ul> 
      </div>      
    </>
  )
}

export default Subnav1Items