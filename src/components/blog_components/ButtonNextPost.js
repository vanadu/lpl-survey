import React from 'react'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'
// import * as styles from '../styles/Blog.module.scss'
import * as styles from '../../styles/Blog.module.scss'

const ButtonNextPost = () => {
  return (
    <>
      <div className={styles.blog_nav_button}>
        <FaArrowCircleRight className={styles.go_button_svg}/>
        <Link href='/blog' >Next Post</Link> 
      </div>
    </>
  )
}

export default ButtonNextPost