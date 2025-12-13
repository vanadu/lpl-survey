import React from 'react'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
// !VA React Tooltip
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
// !VA React Icons
import { FaPaw } from 'react-icons/fa'
// !VA React Icons
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Custom Components
import DvmsNav from '../../components/guidenav/DvmsNav'
import GuideNav from '@/components/GuideNav'
import ShowMoreContent from '../../components/ShowMoreContent'
// import AccordionContent from '../../components/AccordionContent'
// !VA Images
import Treats4 from './../../../public/img-treats-04.jpg'
import Treats5 from './../../../public/img-treats-05.jpg'
import Treats6 from './../../../public/img-treats-06.jpg'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

const Business = () => {

  
  const [activeIndex, setActiveIndex] = useState(0)
  // const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  return (
    <>
      <Head>
        <meta name="title" content="Laryngeal Stent for Canine Laryngeal Paralysis: Information for Veterinarians"/>
        <meta name="description"
        content="Laryngeal Stent for Canine Laryngeal Paralysis: &mdash; Procedure, Business Case and Ethics" />
        <meta name="keywords" content="laryngeal paralysis in dogs, stent, laryngeal stent, veterinarians, DVMs, surgery, cost, treatment options, laryngeal stent, tieback surgery, symptoms, causes, diagnosis, sound, progress, canine laryngeal paralysis, LarPar, geriatric-onset laryngeal paralysis, GOLPP"></meta>
      </Head>
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Laryngeal Stent Procedure for LarPar/GOLPP
              </h1>
          </div>
        </div>
      </section>

      {/* Submenu for the Patients pages */}
      <section className={styles.section}>
        {/* Submenu for the Patients pages */}
        <DvmsNav />
      </section>


      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_subhead}>
            <h2 className={styles.topic_subhead_title}>Business Case</h2>
          </div>
        </div>
      </section>  

      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.content}>
        {/* Submenu for the DVMs pages */}
        <DvmsNav />
            {/* Intro Content Start */}
            <div className={styles.content_block}>

              {/* <figure className={styles.figure_small}> */}
                {/* <Image src={Typewriter} className={styles.figure_image} alt="Laryngeal Stent: Typewriter"/> */}
                {/* <figcaption className={styles.figure_caption}>Do <span className="semibold-italic">you</span> use one of <span className="semibold-italic">these</span>?</figcaption> */}
              {/* </figure> */}
    
              <div className={styles.section_moving}>
                <div className={styles.section_moving_head}>
                  Coming Soon!!
                </div>
            
                <p className={styles.moving_text}>
                  In the meantime, have a treat!
                </p>
                <a href="https://www.cnn.com/interactive/2018/11/entertainment/dogs-catching-treats-cnnphotos/" className={styles.moving_link}target="_blank" rel="noreferrer noopener">Photos by Christian Veeler</a>

                <figure className={styles.figure_moving}>
                  <Image src={Treats4} className={styles.figure_moving_image} alt="Christian Veeler: Dogs With Treats" />
                </figure>


                <figure className={styles.figure_moving}>
                    <Image src={Treats5} className={styles.figure_moving_image} alt="Christian Veeler: Dogs With Treats" />
                </figure>

                <figure className={styles.figure_moving}>
                    <Image src={Treats6} className={styles.figure_moving_image} alt="Christian Veeler: Dogs With Treats" />
                </figure>
              </div>
              {/* Coming Soon End */}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Business