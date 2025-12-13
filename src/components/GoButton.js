import React from 'react'
// !VA React Icons
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Styles
import * as styles from '../styles/AllAbout.module.scss'

const GoButton = () => {
  return (
    <>
      <div className={styles.go_button}>
        <div className={styles.go_button_label}>GO&nbsp;</div>
        <FaArrowCircleRight className={styles.go_button_svg}/>
      </div>
    </>
  )
}

export default GoButton