import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// !VA Images
// import Logo from '../../public/img-lpl-logo.png'
import Logo from '../../public/img-lpl-logo-white-text.png'
// !VA React Icons
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { MdMail } from 'react-icons/md'

import * as styles from '../styles/Footer.module.scss'


const Footer = () => {
  return (
    <>
        {/* <div className={styles.top_bar}></div> */}
      <footer className={styles.footer}>
        <div className={styles.two_column_content}>
          <div className={styles.column_left}>
            <div className={styles.head}>
              <div className={styles.logo}>
                <Link 
                  href='/'
                  aria-label='Go to Home page'>
                  <Image 
                    src={Logo} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className={styles.logo_img} 
                    alt="LarPar Life Logo" 
                  />
                </Link>
              </div>

              <div className={styles.icons}>
                <Link 
                  href='https://www.youtube.com/channel/UCwHwkfSqDlO6MJejPrxzW0A'
                  className={styles.icon} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label='Visit Our Youtube Channel'
                  >
                  <TfiYoutube />
                </Link>
                <Link 
                  href='https://www.facebook.com/groups/laryngealstentfordogs' 
                  className={styles.icon} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label='Visit Our Facebook Group'
                  >
                  <FaFacebookSquare />
                </Link>
                <Link
                  href='/contact'
                  className={styles.icon} 
                  aria-label='Contact Us'
                  >
                  <MdMail />
                </Link>
              </div>

            </div>

            <div className={styles.copyright}>
              <p className={styles.copyright_text}>
              Copyright &copy; 2025 LarParLife.com
              All&nbsp;rights&nbsp;reserved.<br />
              LarPar? Life!, LarParLife and the LarParLife logo are trademarks of LarParLife.com
              </p>
            </div>
          </div>

          <div className={styles.column_right}>
            <div className={styles.disclaimer}>
              <h2 className={styles.disclaimer_header}>
                 
              </h2>
              <p className={styles.disclaimer_text}>
                IMPORTANT: The information on this website is not intended for veterinarians or non-veterinarians to facilitate the implemention of this or any other procedure to treat laryngeal paralysis. This information is intended to provide non-technical information in an easy-to-understand format.
                For detailed information about laryngeal paralysis, contact a
                veterinary professional. All information herein constitutes the website creator&rsquo;s interpretation of and opinions about the condition of laryngeal paralysis and the stent treatment based on personal experience and publicly-accesible information. The website author accepts no responsibility or liability for how this information may be interpreted or construed, or any actions that might be taken as a result of the information herein.
              </p>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer