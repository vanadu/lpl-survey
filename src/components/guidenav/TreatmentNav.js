import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as styles from '../../styles/Light.module.scss'


const TreatmentNav = () => {
  return (
  <>
    <div
    className={styles.section_submenu}>
    <ul className={styles.section_submenu_list}>
      {/* <li className={styles.section_submenu_list_item}>
        <Link href="/patients/treatment">Options</Link>
      </li> */}
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