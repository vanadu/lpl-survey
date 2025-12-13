import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import * as styles from '../../styles/Header.module.scss'


// !VA I don't readdy un

const MainNavItems = ( { items, setIsActive } ) => {
  // !VA Initialize the usePathname hook which gets the current route path
  const pathname = usePathname();
  // const [isActive, setIsActive] = useState(null);

  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.nav_menu}>

          <input className={styles.checkbox} type="checkbox" />
          {/* This is the first line in the burger or the slash in the X */}
          <span className={styles.menu_span}></span>
          {/* This is the first line in the burger and has nothing in the */}
          <span className={styles.menu_span}></span>
          {/* This is the third line in the burger or the backslash line in the X */}
          <span className={styles.menu_span}></span>


          <ul 
          // className={styles.nav_main_list}
          className={styles.nav_menu_items}
          ref={mainRef}
          >
          {items.map( item=> (
              <li 
              key={item.id}
              className={styles.nav_main_list_item}
              onClick={() => setIsActive(true)}
              // ref={ref}
              >
              <Link
                // key={item.text}
                href={item.url}
                className={pathname.includes(`${item.url}`) ? 'active ' + [styles.nav_text, styles.saga_prologue].join(' ') : [styles.nav_text, styles.saga_prologue].join(' ')}
                >{item.text}
              </Link>
            </li>
           ))}

        </ul>
      </div>      
      </div>
    </> 
    )
}

export default MainNavItems