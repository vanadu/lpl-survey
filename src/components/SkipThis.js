import React from 'react'
import Link from 'next/link'
// !VA React Icons
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Style modules
import * as styles from '../styles/Light.module.scss'

const SkipThis = () => {
  return (
    <>
      <div className={styles.skip_this}>
        <div 
          className={styles.skip_this_button}
          >
          <Link href="/patients/treatment/stent" className={styles.skip_this_link}>
          Skip this and go <span className='mobile-hide-inline'>straight</span> to&nbsp;the&nbsp;<span className='nowrap'><span className='bold'>Stent</span> page&nbsp;&nbsp;<FaArrowCircleRight className={styles.related_links_figure_icon} /></span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SkipThis