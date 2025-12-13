import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'

// !VA Images
import MissBMenuImg from '../../../public/img-miss-b-menu-img.png'
import SamMenuImg from '../../../public/img-sam-menu-img.png'
import RoxyMenuImg from '../../../public/img-roxy-menu-img.png'
import MissBInSidecar from '../../../public/img-miss-b-in-sidecar.jpg'


import * as styles from '../../styles/Header.module.scss'

// !VA I wasted literally 6 hours this morning trying to use state to set the active class on click target. But every time I clicked on the element, state would reinitialize because the Link element caused a rerender. THAT was my problem. The Link element wasn't causing a rerender, it was NAVIGATING to the new page, and on that new page there was no state, so it initialized it. I FINALLY figured out that it wasn't a problem at all - it made everything so much easier. All I had to do was get the route of the current page and apply the active style to the element if the href path of the target matched the path of the current route. 
const StoriesNav = () => {
  // !VA use useRouter to get the path of the current page.
  const { pathname } = useRouter()

  // !VA Data for the stories links
  const stories = [

    { id: 1, name: "Miss B", link: '/stories', img: MissBMenuImg },
    { id: 2, name: "Sam",  link: '/stories/sam', img: SamMenuImg },
    { id: 3, name: "Roxy",  link: '/stories/roxy', img: RoxyMenuImg },

  ]

  return (
    <div className={styles.nav_subnav1}>
      <div className={styles.nav_subnav1_header}>
        <p className={styles.nav_subnav1_header_text}>More Stent Success Stories Coming Soon!</p>
      </div>
      {/* <ul className={styles.nav_subnav1_list}>
        {stories.map((item, index) => {
          return (
            <li 
              key={index}
              className={styles.nav_subnav1_list_item}
              >
              <Link
                href={item.link}
                className={[styles.nav_subnav1_list_item_anchor].join(' ')}
              >
                <Image
                  src={item.img}
                  // If the current page path is the same as the link property of the currently mapped-over item, apply the 'selected' style
                  className={[`${styles.nav_subnav1_list_item_img} ${pathname == item.link && 'selected'}`].join(' ')}
                  alt='Stent Success Stories'
                  width={100}
                  height={100}
                />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul> */}
    </div>
  )
}

export default StoriesNav