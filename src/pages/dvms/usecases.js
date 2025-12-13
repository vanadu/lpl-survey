import React from 'react'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA React Tooltip
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
// !VA React Icons
import { FaPaw } from 'react-icons/fa'
// !VA React Icons
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Custom Components
import DvmsNav from '../../components/guidenav/DvmsNav'
import BottomNav from '../../components/BottomNav'
import ShowMoreContent from '../../components/ShowMoreContent'
import GuideNav from '@/components/GuideNav'
// import AccordionContent from '../../components/AccordionContent'
// !VA Images
import Typewriter from '../../../public/img-typewriter.jpg'
import TypeSilicone from '../../../public/img-type-silicone.jpg'
import TypeNitinol from '../../../public/img-type-nitinol.jpg'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

const UseCases = () => {

  
  const [activeIndex, setActiveIndex] = useState(0)
  // const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  return (
    <>
      <NextSeo 
        title="Use Cases For Laryngeal Stents for Dogs: Info for Vets"
        description="Info for veterinarians about the benefits of stenting as an alternative to laryngeal paralysis surgery. "
        canonical="https://larparlife.com/dvms/usecases"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Use Cases For <span className='mobile-show-inline'><br /></span>Laryngeal Stents in Dogs
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
            <h2 className={styles.topic_subhead_title}>Information for Veterinarians</h2>
          </div>
        </div>
      </section>  
      
      {/* Overview Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          
          {/* Intro Content Start */}
          <div className={styles.content_block}>
            <p className={styles.content_text}>
              Historically, laryngeal paralysis has received little attention in the animal community due to its large-dog breed specificity. But LP awareness has skyrocketed in recent years as more dog owners seek information on social media. There are currently no fewer than four Facebook groups devoted to canine laryngeal paralysis. As a result, dogs are increasingly presenting with acute respiratory distress in emergency situations as dog owners try and often fail to manage LP symptoms with behavior modification and off-label medications.   
            </p>
          </div>
          {/* 21st Century Solution Content End */}

        </div>
      </section>

      {/* Management vs Stenting Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

                      {/* Management vs Stenting Content */}
            <div className={styles.content_block}>

              <h2 className={styles.content_head}>
                Traditional Medical Management vs. Stenting
              </h2>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}>
                  A laryngeal paralysis-induced respiratory crisis is a life-threatening emergency that requires coordinated action of an entire veterinary staff. 
                </p>
                <ShowMoreContent
                  title='How can stenting help with staff-intensive LP-induced veterinary emergencies?'
                  index={1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                   <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_inline}>
                      Dogs presenting with LP-induced collapse require emergency treatment that can include catheterization, IV medications and sedation. Hyperthermic dogs may additionally require cooling baths, and dogs presenting with acute cyanosis or dyspnea require immediate intubation and anesthesia. Due to the life-threatening nature of LP crises, treatment and post-treatment monitoring is time-critical and staff-intensive.
                    </p>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_inline}> 
                      Placement of a laryngeal stent alleviates the need for many of the staff-intensive actions required for traditional medical management of LP-induced respiratory crises. The stent replaces oxygen therapy/intubation and/or tracheostomy for reoxygenation and requires minimal post-implant monitoring.
                    </p>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_inline}> 
                      Restoration of normal breathing also restores normal body-cooling functions, in most cases alleviating the need for artificial cooling techniques. Only a short period ( &lt; 5 minutes) of light anesthesia is required for the implant procedure and the patient can usually be released to the owner after a short observation period. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            </div>

        </div>
      </section>

      {/* Facilitate Surgery Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Facilitate Surgery Content Start */}
          <div className={styles.content_block}>
            <h2 className={styles.content_head}>Stenting to Facilitate Surgery</h2>
            <p className={styles.content_text}>
              Qualified surgeons specializing in LP techniques often are scheduled far in advance, leaving dog owners to fear a fatal breathing crisis before the surgery date. 
            </p>
            <p className={styles.content_text}>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How can primary veterinarians use stent implants to help facilitate surgery?'
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                    <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_inline}>
                      Primary veterinarians can either perform a proactive stent implant in advance of the surgery date, or be prepared to perform the implant should a crisis situation arise, thus ensuring that the surgery will take place as scheduled. The stent can easily be removed by the surgeon once pre-surgery anesthesia is administered.
                    </p>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_inline}>Silicone laryngeal stents are useful to primary veterinarians and internists because they require no specialized skills and can be implanted with readily-available standard forceps. </p>

                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              
            </p>
            
          </div>

        </div>
      </section>

      {/* Surgery Alternative Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Surgery Alternative Content Start */}
          <div className={styles.content_block}>
            <h2 className={styles.content_head}>Stenting as Surgery Alternative</h2>
            <p className={styles.content_text}>While LP surgery remains the treatment of choice for younger dogs with congenital or idiopathic laryngeal paralysis, for senior dogs, dogs with comorbidities, or dog owners of limited financial means the stent option is an attractive alternative.</p>
                          {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Does stenting have any advantages over surgery for laryngeal paralysis in dogs?' 
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                  <div className={styles.showmore_content_block}>

                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_inline}>
                  Specifically for older dogs with geriatric laryngeal paralyis (GOLPP), the stent procedure has clear advantages over surgery in many cases:
                  </p>
                  <table className={styles.table} >
                    <thead className={styles.table_header}>
                      <tr>
                        <th className={styles.table_head}>Surgery</th>
                        <th className={styles.table_head}>Stent</th>
                      </tr>
                    </thead>
                    <tbody>

                    <tr>
                      <td className={styles.table_cell}>Invasive (requires incision &amp; sutures)</td>
                      <td className={styles.table_cell}>Non-invasive (no incision or sutures of any kind)</td>
                    </tr>
                    <tr>
                      <td className={styles.table_cell}>Potential for primary infection of incision</td>
                      <td className={styles.table_cell}>No potential for primary infection</td>
                    </tr>
                    <tr>
                      <td className={styles.table_cell}>Expensive (avg. $4200)</td>
                      <td className={styles.table_cell}>Affordable (avg. $1400*)</td>
                    </tr>
                    <tr>
                      <td className={styles.table_cell}>Requires minimum 30 minutes of deep anesthesia</td>
                      <td className={styles.table_cell}>Requires under 5 minutes of light anesthesia</td>
                    </tr>
                    <tr>
                      <td className={styles.table_cell}>Not reversible</td>
                      <td className={styles.table_cell}>Reversible by removing stent</td>
                    </tr>
                    <tr>
                      <td className={styles.table_cell}>Not suitable for emergency use by primary veterinarian; requires surgical expertise</td>
                      <td className={styles.table_cell}>Can be performed in crisis situation by any skilled primary veterinarian</td>
                    </tr>
                    </tbody>
                  </table>

                </div>
              </ShowMoreContent>

              <p className={styles.content_text}>
                Established veterinary stenting procedures already exist for conditions such as tracheal collapse and ureteral obstruction. Stenting for laryngeal paralysis is the inevitable next step.
            </p>
              <p className={styles.content_text}>
                &nbsp;
              </p>
            </div>  

          </div>

        </div>
      </section>   

    </>
  )
}

export default UseCases