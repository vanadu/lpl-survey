// !VA These are the image bricks that scroll across the screen in the Header
import React from 'react'
import Image from 'next/image'
import * as styles from '../styles/Header.module.scss'

const HeaderBrick = ({src, className, alt}) => {

  return (
    <>
      <Image 
        src={src} 
        // width="300"
        // height="200"
        width="0"
        height="0"
        // !VA This fixed the no-load problem on iOS!!!!!
        loading="eager"
        priority={true}
        // sizes="100vw"
        // style={{ width: '100%', height: 'auto' }}
        className={className} alt={alt} 
      />
    </>
  )
}

export default HeaderBrick