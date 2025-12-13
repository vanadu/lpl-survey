import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IconBar from './IconBar'
import logo from '../../public/img-lpl-logo.png'
import * as styles from '../styles/Header.module.scss'

// !VA 2024
import MainNav from './MainNav'

import { motion } from 'framer-motion'

import HeaderBrick from '../components/HeaderBrick'
import HeaderBrick01 from '../../public/bricks/img-brick-01.webp'
import HeaderBrick02 from '../../public/bricks/img-brick-02.webp'
import HeaderBrick03 from '../../public/bricks/img-brick-03.webp'
import HeaderBrick04 from '../../public/bricks/img-brick-04.webp'
import HeaderBrick05 from '../../public/bricks/img-brick-05.webp'
import HeaderBrick06 from '../../public/bricks/img-brick-06.webp'
import HeaderBrick07 from '../../public/bricks/img-brick-07.webp'
import HeaderBrick08 from '../../public/bricks/img-brick-08.webp'
import HeaderBrick09 from '../../public/bricks/img-brick-09.webp'
import HeaderBrick10 from '../../public/bricks/img-brick-10.webp'
import HeaderBrick11 from '../../public/bricks/img-brick-11.webp'
import HeaderBrick12 from '../../public/bricks/img-brick-12.webp'

const Header = () => {
  return (
    <>
    <div className={styles.header}>
      
      <div className={styles.bricks_container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 1 }}
        >
        <div className={styles.bricks_slider}>
          <div className={styles.bricks}>
                
            <HeaderBrick src={HeaderBrick01} className={styles.brick_img} alt="Senior Boxer Dog" />
            <HeaderBrick src={HeaderBrick02} className={styles.brick_img} alt="Senior Mixed Breed Dog" />
            <HeaderBrick src={HeaderBrick03} className={styles.brick_img} alt="Senior Retriever Mix Dog" />
            <HeaderBrick src={HeaderBrick04} className={styles.brick_img} alt="Senior Golden Retriever Dog" />
            <HeaderBrick src={HeaderBrick05} className={styles.brick_img} alt="Senior Lab Mix Dog" />
            <HeaderBrick src={HeaderBrick06} className={styles.brick_img} alt="Senior Weimeraner Dog" />
            <HeaderBrick src={HeaderBrick07} className={styles.brick_img} alt="Senior White Mixed Breed Dog " />
            <HeaderBrick src={HeaderBrick08} className={styles.brick_img} alt="Senior Labrador Mix Dog" />
            {/* Unique bricks */}
            <HeaderBrick src={HeaderBrick09} className={styles.brick_img} alt="Senior Great Dane Dog" />
            <HeaderBrick src={HeaderBrick10} className={styles.brick_img} alt="Senior Mixed Breed Dog" />
            <HeaderBrick src={HeaderBrick11} className={styles.brick_img} alt="Senior Black Lab Dog" />
            <HeaderBrick src={HeaderBrick12} className={styles.brick_img} alt="Senior Golden Retriever Dog" />
                            
            <HeaderBrick src={HeaderBrick01} className={styles.brick_img} alt="Senior Boxer Dog" />
            <HeaderBrick src={HeaderBrick02} className={styles.brick_img} alt="Senior Mixed Breed Dog" />
            <HeaderBrick src={HeaderBrick03} className={styles.brick_img} alt="Senior Retriever Mix Dog" />
            <HeaderBrick src={HeaderBrick04} className={styles.brick_img} alt="Senior Golden Retriever Dog" />
            <HeaderBrick src={HeaderBrick05} className={styles.brick_img} alt="Senior Lab Mix Dog" />
            <HeaderBrick src={HeaderBrick06} className={styles.brick_img} alt="Senior Weimeraner Dog" />
            <HeaderBrick src={HeaderBrick07} className={styles.brick_img} alt="Senior White Mixed Breed Dog " />
            <HeaderBrick src={HeaderBrick08} className={styles.brick_img} alt="Senior Labrador Mix Dog" />
            {/* Unique bricks */}
            <HeaderBrick src={HeaderBrick09} className={styles.brick_img} alt="Senior Great Dane Dog" />
            <HeaderBrick src={HeaderBrick10} className={styles.brick_img} alt="Senior Mixed Breed Dog" />
            <HeaderBrick src={HeaderBrick11} className={styles.brick_img} alt="Senior Black Lab Dog" />
            <HeaderBrick src={HeaderBrick12} className={styles.brick_img} alt="Senior Golden Retriever Dog" />
          </div>
        </div>
        </motion.div>
      </div>

      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Link href='/' className='link-dark'>
              <Image 
              src={logo} 
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className={styles.logo_img} alt="LarParLife Logo" 
            />
          </Link>

        </div>
          <div className={styles.nav_container}>
              <MainNav/>
              <IconBar />
          </div>

    </div>


      <div className={styles.header_slug}>
        <h2 className={styles.header_slug_text}>21st Century Guide to Lar<span className='mobile-hide-inline'>yngeal</span> Par<span className='mobile-hide-inline'>alysis in Dogs</span><span className="mobile-show-inline">/GOLPP</span></h2>
      </div>


    </div>
    </>
  )
}

export default Header