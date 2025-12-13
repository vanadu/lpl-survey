import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as styles from '../../styles/Light.module.scss'


const TreatmentNav = () => {
  return (
  <>
    <div
    className={styles.section_submenu}>
    {/* <h3 className='being_updated'>This content is being updated: next update: 3:00PM 2023.04.30</h3> */}
    <ul className={styles.section_submenu_list}>
    <li className={styles.section_submenu_list_item}>
        <Link href="/patients/treatment">Options</Link>
      </li>
      <li className={styles.section_submenu_list_item}>
        <Link href="/patients/treatment/stent">Stent</Link>
      </li>
      <li className={styles.section_submenu_list_item}>
        <Link href="/patients/treatment/surgery">Surgery</Link>
      </li>
      <li className={styles.section_submenu_list_item}>
        <Link href="/patients/treatment/managing">Alternatives</Link>
      </li>
    </ul>
  </div>
</>
  )
}

export default TreatmentNav