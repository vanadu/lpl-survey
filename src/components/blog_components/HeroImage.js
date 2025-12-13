import React from 'react'
import Image from 'next/image'

import * as styles from '../../styles/Blog.module.scss'

const HeroImage = ({ src, alt }) => {
  return (
    <div className={styles.post_hero}>
      <Image 
        src={src} 
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className={styles.post_hero_image} alt="LarParLife.com" 
      />
    </div>
  )
}

export default HeroImage