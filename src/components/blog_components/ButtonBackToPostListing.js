import React from 'react'
import Link from 'next/link'
import { FaArrowCircleLeft } from 'react-icons/fa'
// import * as styles from '../styles/Blog.module.scss'
import * as styles from '../../styles/Blog.module.scss'


const ButtonBackToPostListing = () => {
  return (
    <>
      <div className={styles.blog_post_nav_link}>
        <FaArrowCircleLeft className={styles.go_button_svg}/>
        <Link 
          href='/blog'
          className={styles.blog_post_nav_link_text}
          >&nbsp;Back To Post Listing</Link> 
      </div>
    </>
  )
}

export default ButtonBackToPostListing