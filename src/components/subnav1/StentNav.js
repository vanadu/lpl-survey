import React from 'react'
import Link from 'next/link'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

const StentNav = () => {
  return (
    <>
    <div
      className={styles.section_submenu}>
      {/* <h3 className='being_updated'>This content is being updated: next update: 3:00PM 2023.04.30</h3> */}
      <ul className={styles.section_submenu_list}>
        <li className={styles.section_submenu_list_item}>
          <Link href="/patients/treatment/stent">About<span className='mobile-hide-inline'> Stents</span></Link>
        </li>
        <li className={styles.section_submenu_list_item}>
          <Link href="/patients/treatment/stent/stenttypes"><span className='mobile-hide-inline'> Laryngeal Stent </span>Types</Link>
        </li>
        <li className={styles.section_submenu_list_item}>
          <Link href="/patients/treatment/stent/stentstudies"><span className='mobile-hide-inline'>Stent</span> Studies</Link>
        </li>
        <li className={styles.section_submenu_list_item}>
          <Link href="/patients/treatment/stent/stentfaqs"><span className='mobile-hide-inline'>Stent</span> FAQs</Link>
        </li>
      </ul>
    </div>
  </>
  )
}

export default StentNav