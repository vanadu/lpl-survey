import React from 'react'
// !VA React Icons
import { FaArrowCircleLeft } from 'react-icons/fa'
// !VA Styles
import * as styles from '../styles/AllAbout.module.scss'

const GoButton = () => {
  return (
    <>
      <div className={styles.go_button}>
        <div className={styles.go_button_label}>GO&nbsp;</div>
        <FaArrowCircleLeft className={styles.go_button_svg}/>
      </div>
    </>
  )
}

export default GoButton