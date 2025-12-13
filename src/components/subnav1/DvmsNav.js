import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as styles from '../../styles/Light.module.scss'

const DvmsNav = () => {
  return (
    <>
      <div
        className={styles.section_submenu}>
        {/* <h3 className='being_updated'>This content is being updated: next update: 3:00PM 2023.04.30</h3> */}
        <ul className={styles.section_submenu_list}>
        <li className={styles.section_submenu_list_item}>
            <Link href="/dvms">Overview</Link>
          </li>
          <li className={styles.section_submenu_list_item}>
            <Link href="/dvms/usecases">Use Cases</Link>
          </li>
          <li className={styles.section_submenu_list_item}>
            <Link href="/dvms/procedure">Procedure</Link>
          </li>
        </ul>
      </div>
  </>
  )
}

export default DvmsNav