import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'

import * as styles from '../../styles/Blog.module.scss'

const ShareButtons = () => {
  return (
    <div className={styles.post_sharebar}>
        <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" className={styles.post_sharebar_item} target="_blank">
          <FaFacebookSquare className={styles.post_sharebar_item_icon}  />
          Share LarParLife On Facebook
        </a>
    </div>
  )
}

export default ShareButtons