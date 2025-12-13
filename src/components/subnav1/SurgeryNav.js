import React from 'react'
import Link from 'next/link'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

const SurgeryNav = () => {
  return (
    <>
    <div
      className={styles.section_submenu}>
      {/* <h3 className='being_updated'>This content is being updated: next update: 3:00PM 2023.04.30</h3> */}
      <ul className={styles.section_submenu_list}>
      <li className={styles.section_submenu_list_item}>
          <Link href="/patients/treatment/surgery">About <span className='mobile-hide-inline'>Surgery</span></Link>
        </li>
        <li className={styles.section_submenu_list_item}>
          <Link href="/patients/treatment/surgery/surgerytypes"><span className='mobile-hide-inline'>Surgery </span>Types</Link>
        </li>
        <li className={styles.section_submenu_list_item}>
          <Link href="/patients/treatment/surgery/surgeryfaqs"><span className='mobile-hide-inline'>Surgery </span>FAQs</Link>
        </li>
      </ul>
    </div>
  </>
  )
}

export default SurgeryNav