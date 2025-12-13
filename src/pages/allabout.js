import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA Icons
// !VA Components
import BottomNav from '../components/BottomNav'
import Layout from '@/components/Layout'
// import ShowMoreContent from '@/components/ShowMoreContent'
import ShowMoreContent from '../components/ShowMoreContent'
import GoButton from '../components/GoButton'

// !VA Styles
import * as styles from '../styles/AllAbout.module.scss'

const More = () => {
  
  const [activeIndex, setActiveIndex ] = useState()


  return (
    <>
      <NextSeo 
        title="What Do You Want To Know About Laryngeal Paralysis & GOLPP?"
        description="Choose a topic to learn about symptoms, surgery, stent, and alternatives for laryngeal paralysis in dogs."
        canonical="https://larparlife.com/allabout"
      />
      <section className={styles.section}>
        {/* head comes before section_content due to border-radius */}
        <div className={styles.head}>
          {/* <h1 className={styles.head_title}>What Do You Want To Know About<span className={styles.head_title_subtext}>Laryngeal Paralysis/GOLPP in Dogs?<span className='mobile-hide-inline'> In Dogs</span>?</span></h1> */}
          <h1 className={styles.head_title}>What Do You Want To Know About Laryngeal Paralysis/GOLPP in Dogs?</h1>
        </div>
        <div className={styles.section_content}>
          <h2 className={styles.content_heading}>
            Lar Par Guide Main Topics
          </h2>
          {/* Two column content - flex on mobile and grid on desktop */}
            {/* topic section */}

            <div className={styles.cards}>

              {/* First Topic Card */}
              <div className={styles.card}>
                {/* Desktop Topic Card */}
                  <div className={styles.card_content}>
                    <GoButton />
                    <Link href='/patients'  className={styles.card_link}>
                    <h2 className={styles.card_head}>Dog Lover&rsquo;s Guide to Lar Par</h2>
                    </Link>
                    <div className={styles.card_content_text}>
                      <h3 className={styles.card_subhead}>The Straight Truth About <br />Canine&nbsp;Laryngeal&nbsp;Paralysis&nbsp;&amp;&nbsp;GOLPP</h3>
                      <ul className={styles.card_list}>
                        <li className={styles.card_list_item}>Treatment Costs</li>
                        <li className={styles.card_list_item}>Crash Course</li>
                        <li className={styles.card_list_item}>FAQs</li>
                      </ul>
                    </div>
                  </div>



              </div>
              {/* First Topic Card */}

              {/* Treatment Options Topic card */}
              <div className={styles.card}>
                {/* Desktop Topic Card */}
                  <div className={styles.card_content}>
                    <GoButton />
                    <Link href='/patients/treatment'  className={styles.card_link}>
                      <h2 className={styles.card_head}>Lar Par Treatment Options</h2>
                    </Link>
                    {/* <h3 className={styles.card_heading}>The Straight Truth</h3> */}
                    <div className={styles.card_content_text}>
                      <h3 className={styles.card_subhead}>Stent, Surgery and Alternatives For <span className='mobile-hide-inline'>Canine</span><span className='mobile-show-inline'><br/></span>&nbsp;Laryngeal&nbsp;Paralysis&nbsp;&amp;&nbsp;GOLPP</h3>
                      <ul className={styles.card_list}>
                        <li className={styles.card_list_item}>Stent</li>
                        <li className={styles.card_list_item}>Surgery</li>
                        <li className={styles.card_list_item}>Alternatives</li>
                      </ul>
                    </div>
                  </div>


              </div>
              {/* End Treatment Options Topic card */}

              {/* Links and Info Topic Card */}
              <div className={styles.card}>
                  {/* Desktop Topic Card */}
                  <div className={styles.card_content}>
                    <GoButton />
                    <Link href='/patients/links'  className={styles.card_link}>
                      <span className={styles.card_head}>Research Links and More Info</span>
                    </Link>
                    {/* <h3 className={styles.card_heading}>The Straight Truth</h3> */}
                    <div className={styles.card_content_text}>
                      <h3 className={styles.card_subhead}>Links to More Information About <span className='mobile-show-inline'><br /></span> Laryngeal&nbsp;Paralysis&nbsp;and&nbsp;GOLPP&nbsp;in&nbsp;Dogs</h3>
                      <ul className={styles.card_list}>
                        <li className={styles.card_list_item}>Studies</li>
                        <li className={styles.card_list_item}>Websites</li>
                        <li className={styles.card_list_item}>Community</li>
                      </ul>
                    </div>
                  </div>
              </div>
              {/* End Links and Info Topic Card */}

              {/*  For DVMs Topic Card  */}
              <div className={styles.card}>
                {/* Desktop Topic Card */}
                  <div className={styles.card_content}>
                    <GoButton />
                    <Link href='/dvms'  className={styles.card_link}>
                      <span className={styles.card_head}>Stent Info for Veterinarians</span>
                    </Link>
                    <div className={styles.card_content_text}>
                      <h3 className={styles.card_subhead}>Info for DVMs about the<br />&nbsp;Stent&nbsp;Procedure&nbsp;for&nbsp;LarPar/GOLPP</h3>
                      <ul className={styles.card_list}>
                        <li className={styles.card_list_item}>Background</li>
                        <li className={styles.card_list_item}>Studies</li>
                        <li className={styles.card_list_item}>Stent Types</li>
                      </ul>
                    </div>
                  </div>
              </div>
              {/* End For DVMs Topic Card  */}

              {/*  Blog Topic Card  */}
              <div className={styles.card}>
                {/* Desktop Topic Card */}
                  <div className={styles.card_content}>
                    <GoButton />
                    <Link href='/blog'  className={styles.card_link}>
                      <span className={styles.card_head}>Lar Par News &amp; Notes</span>
                    </Link>
                    <div className={styles.card_content_text}>
                      <h3 className={styles.card_subhead}>Current Topics from the World of<br/>&nbsp;Laryngeal&nbsp;Paralysis&nbsp; &amp; GOLPP in&nbsp;Dogs</h3>
                      <ul className={styles.card_list}>
                        <li className={styles.card_list_item}>Lar Par Dog Blog</li>
                      </ul>
                    </div>
                  </div>

              </div>
              {/*  End Blog Topic Card  */}

              {/*  Contact Topic Card  */}
              <div className={styles.card}>
                {/* Desktop Topic Card */}
                  <div className={styles.card_content}>
                    <GoButton />
                    <Link href='/social'  className={styles.card_link}>
                      <span className={styles.card_head}>Connect &amp; Contact</span>
                    </Link>
                    <div className={styles.card_content_text}>
                      <h3 className={styles.card_subhead}>Join the Lar Par Community or <br />Contact Us Directly</h3>
                      <ul className={styles.card_list}>
                        <li className={styles.card_list_item}>Join the Lar Par Community</li>
                      </ul>
                    </div>
                  </div>
              </div>
              {/* End Contact Topic Card  */}

            {/* cards */}
            </div>

          {/* two_column_content */}


        {/* section_content */}
        </div>

      </section>
    </>
  )
}

export default More