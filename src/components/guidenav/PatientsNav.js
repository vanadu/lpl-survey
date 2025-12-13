import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

const PatientsNav = () => {
  return (
    <>
      <div
        className={styles.section_submenu}>
        <ul className={styles.section_submenu_list}>
          {/* <li className={styles.section_submenu_list_item}>
            <Link href="/patients">About <span className='mobile-hide-inline'>LarPar</span></Link>
          </li> */}
          <li className={styles.section_submenu_list_item}>
            <Link href="/patients/aboutlarpar/cost"><span className='mobile-hide-inline'>Treatment </span>Costs</Link>
          </li>
          <li className={styles.section_submenu_list_item}>
            <Link href="/patients/aboutlarpar"><span className='mobile-hide-inline'>LarPar </span>Crash Course</Link>
          </li>
          <li className={styles.section_submenu_list_item}>
            <Link href="/patients/aboutlarpar/faqs">FAQs</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PatientsNav