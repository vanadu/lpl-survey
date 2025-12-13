// img-tieback-kitshoff.jpg
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

import { useEffect, useState, useRef } from 'react'
// React Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// !VA React Icons
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
import { BsPlusSquareDotted, BsMinusSquareDotted } from 'react-icons/bs'
import { FaPaw } from 'react-icons/fa'
// !VA Custom Components
import ShowMoreContent from '../../../../components/ShowMoreContent'
import SurgeryNav from '../../../../components/guidenav/SurgeryNav'
import ImageCrossfade from '../../../../components/ImageCrossfade'
import GuideNav from '@/components/GuideNav'
// !VA Images
import Tieback from '../../../../../public/img-tieback-kitshoff.jpg'
import Treats4 from '../../../../../public/img-treats-04.jpg'
import Treats5 from '../../../../../public/img-treats-05.jpg'
import Treats6 from '../../../../../public/img-treats-06.jpg'

// !VA Styles
import * as styles from '../../../../styles/Light.module.scss'



// img-pharynx.jpg

const SurgeryStudies = () => {

  const [isActive, setIsActive ] = useState('false')
  const [activeIndex, setActiveIndex] = useState(0)

  // !VA ImageCrossfade component: crossfade is an array of src attributes pointing to images in the public folder or URLs. 
  const crossfade = [ '/img-larynx-normal-kitshoff.jpg', 
                      '/img-larynx-tieback-kitshoff.jpg'
                     

                    ]

  // !VA Date: 2024.04.01 As of this date, there is no content here so no meta tags
  return (
    <>
      <NextSeo 
        title="Lar Par: Surgery Types for Laryngeal Paralysis in Dogs"
        description="Learn about UAL (tieback), BVEAP, Laser Photoablation and other surgeries for canine laryngeal paralysis"
        canonical="https://larparlife.com/patients/treatment/surgery/surgerytypes"
      />
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Surgery Types for <span className='mobile-show-inline'><br /></span>Laryngeal Paralysis in Dogs<br />
              </h1>
          </div>
          </div>
      </section>

      {/* Submenu for the Patients pages */}
      <section className={styles.section}>
        <SurgeryNav />
      </section>

      {/* Intro Section Subhead */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_subhead}>
            <h2 className={styles.topic_subhead_title}>Types of Surgery for <span className='mobile-show-inline'><br /></span>Canine Lar Par and GOLPP</h2>
          </div>
        </div>
      </section>  


      {/* Surgery Types Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Surgery Types Content */}
          <div className={styles.content_block}>
              <p className={styles.content_text}>
                LP surgery entails surgically modifying the larynx to create an opening that allows airflow between the paralyzed laryngeal (arytenoid) cartilages. This page summarizes the pros and cons of various surgery types based on research data. <br />
              </p>
              <p className={styles.footnote_text}> 
             <a href="https://pdfs.semanticscholar.org/d956/5eb9c6ed52531d4899b61974576e47a6ad04.pdf" className="link-source" target="_blank" rel="noreferrer noopener"> Source: Kitshoff et. al, &lsquo;Laryngeal paralysis in dogs: An update on recent knowledge&rsquo;, 2013</a>
              </p>

              {/* ShowMoreComponent content start */}
              <ShowMoreContent
                  title='How does surgery affect the function of the larynx?'
                  index={1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.content_text}>
                      The larynx is responsible for vocalizing, regulating airflow, and preventing food and other contaminants from getting to the lungs. Surgery creates an opening for airflow through the paralyzed larynx. But unlike a normal larynx, this opening can&rsquo;t open and close to protect the lungs from contaminants. That results in a greater likelihood of infection i.e., <span className='italic'>aspiration pneumonia</span>. This is a downside of all surgical techniques for LP, some more so than others. 
                    </p>
                  </div>
                </ShowMoreContent>
              {/* ShowMoreComponent content end */}
            </div>
          
        </div>
      </section>




      
      {/* Cverview Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          <div className={styles.content_block}>
            <hr className={styles.rule_underline}/>
            <h2 className={styles.content_head}>Surgical Techniques for Laryngeal Paralysis</h2>
  
            <Tabs>
              <TabList>
                <Tab><span className='bold'>Arytenoid Lateralization (Tie-Back)</span> </Tab>
                <Tab><span className='bold'>BVEAP</span> </Tab>
                <Tab><span className='bold'>Ventriculocordectomy </span></Tab>
                <Tab><span className='bold'>Tracheostomy</span></Tab>
                <Tab><span className='bold'>Partial laryngectomy </span></Tab>
                <Tab><span className='bold'>Castellated laryngofissure </span></Tab>
              </TabList>
          
              <TabPanel>
                <div className={styles.content_block}>
                  <div className={styles.content_block}>
                    <h2 className={styles.content_subhead}>Arytenoid Lateralization (&lsquo;Tie-back&rsquo;)</h2>
                  </div>
                  {/*Crossfade image start */}
                  <figure className={styles.figure_float_right}> 
                    <ImageCrossfade crossfade={crossfade} />
                    <figcaption className={styles.figure_caption}>
                      <p className={styles.figure_caption_text}><span className='italic'>a)</span> Paralyzed larynx <span className='italic'>b)</span> After tie-back</p>
                    </figcaption>
                  </figure>
                  {/* Crossfade image end */}
  
                  <p className={styles.content_text}>
                    In arytenoid lateralization, paralyzed laryngeal cartilage is sutured or &lsquo;tied back&rsquo; to the laryngeal wall to open an airway to the lungs, whereby an incision is made at the side of the dog&rsquo;s neck to access the larynx and place the sutures. 
                  </p>
  
                  
                  <p className={styles.content_text}>
                    In bilateral arytenoid lateralization (BAL), both cartilages on either side of the larynx are &rsquo;tied back&lsquo;. In unilateral arytenoid lateralization (UAL), only one cartilage on one side is tied back. UAL is preferred because aperture created is sufficient to restore breathing while minimizing the risk of aspiration pneumonia. 
                  </p>
  
                  
                  <p className={styles.content_text}>
                    Since the 1980s unilateral tie-back has become the standard surgical treatment for laryngeal paralysis worldwide.
                  </p>
  
                  {/* ShowMoreComponent content start */}
                  <div className={styles.content_text}>
                    <ShowMoreContent
                      title='How did &lsquo;tie-back&rsquo; surgery become the standard for LP?'
                      index={1}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                      <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                        <p className={styles.content_text}>
                         Tie-back surgery creates an airway by moving existing cartilage out of the way rather than surgically removing it. This may be why veterinary teaching institutions have been teaching UAL as the preferred surgical treatment for laryngeal paralysis since 1980s, even though other techniques yield comparable outcomes.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </div>  
                  {/* ShowMoreComponent content end */}
  
                  {/* ShowMoreComponent content start */}
                  <div className={styles.content_text}>
                    <ShowMoreContent
                      title='What factors can negatively affect the outcome of UAL?'
                      index={2}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                      <div className="showmore-content-text">
                        <span className={styles.showmore_content_space}></span>
                        <p className="showmore-content-text">
                          Outcomes can be affected by age, coexisting conditions of the respiratory tract and esophagus (i.e., megaesophagus), and neurological disorders. Placement of a temporary tracheostomy tube can also adversely affect surgical outcomes.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </div>  
                  {/* ShowMoreComponent content end */}
                  
  
                  {/* ShowMoreComponent content start */}
                  <div className={styles.content_text}>
                    {/* <p className={styles.showmore_content_inline}>
                      [Text That Includes ShowMoreContent Component]
                    </p> */}
                    <ShowMoreContent
                      title='Is there research data on success rates for UAL and BAL?'
                      index={3}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                      <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                        <table className={styles.table} >
                              <tbody>
                                <tr>
                                  <th className={styles.table_head} colspan="2">Unilateral Arytenoid Lateralization</th>
                                </tr>
                                <tr>
                                  <td className={styles.table_cell}>Improvement (%)</td>
                                  <td className={styles.table_cell}>90%</td>
                                </tr>
                                <tr>
                                  <td className={styles.table_cell}>Aspiration pneumonia</td>
                                  <td className={styles.table_cell}>10-28%</td>
                                </tr>
                                <tr>
                                  <td className={styles.table_cell}>Minor complications</td>
                                  <td className={styles.table_cell}>9-56%</td>
                                </tr>
                                <tr>
                                  <td className={styles.table_cell}>Mortality</td>
                                  <td className={styles.table_cell}>0-14%</td>
                                </tr>
                              </tbody>
                        </table>
                        <p className={styles.footnote_text}>Demetriou and Kirby (2003); Griffiths et al. (2001); Hammel et al. (2006); MacPhail and Monnet (2001);  White (1989). <a href="https://pdfs.semanticscholar.org/d956/5eb9c6ed52531d4899b61974576e47a6ad04.pdf" className="link-source" target="_blank" rel="noreferrer noopener"> See Kitshoff et. al, &lsquo;Laryngeal paralysis in dogs: An update on recent knowledge&rsquo;, 2013</a></p>
  
                        <table className={styles.table} >
                          <tbody>
                            <tr>
                              <th className={styles.table_head} colspan="2">Bilateral Arytenoid Lateralization</th>
                            </tr>
                            <tr>
                              <td className={styles.table_cell}>Improvement (%)</td>
                              <td className={styles.table_cell}>-</td>
                            </tr>
                            <tr>
                              <td className={styles.table_cell}>Aspiration pneumonia</td>
                              <td className={styles.table_cell}>11-89%</td>
                            </tr>
                            <tr>
                              <td className={styles.table_cell}>Minor complications</td>
                              <td className={styles.table_cell}>-</td>
                            </tr>
                            <tr>
                              <td className={styles.table_cell}>Mortality</td>
                              <td className={styles.table_cell}>67%</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className={styles.footnote_text}> Burbridge et al. (1998); MacPhail and Monnet (2001). <a href="https://pdfs.semanticscholar.org/d956/5eb9c6ed52531d4899b61974576e47a6ad04.pdf" className="link-source" target="_blank" rel="noreferrer noopener"> See Kitshoff et. al, &lsquo;Laryngeal paralysis in dogs: An update on recent knowledge&rsquo;, 2013</a></p>
                      </div>
                    </ShowMoreContent>
                  </div>  
                  {/* ShowMoreComponent content end */}
                  
  
  
  
  
                </div>
              </TabPanel>
              
              <TabPanel>
                <div className={styles.content_block}>
                  <h2 className={styles.content_head}>BVEAP</h2>
                  
                  <p className={styles.content_text}>
                    BVEAP stands for <span className='italic'>Bilateral Vocal Fold Excision &amp; Bilateral Arytenoidpexy</span > and is a surgical technique performed almost exclusively in the US by Dr. Ken Sadanaga at the VRC in Malvern, PA. This technique is significantly more challenging than conventional &lsquo;tieback&rsquo; (unilateral arytenoid lateralization), but also brings significant benefits. With BVEAP, the vocal folds are removed and the arytenoid cartilages are &lsquo;pexied&rsquo; (i.e., permanently affixed) to the thyroid cartilage. This creates an aperture through the paralyzed larynx that is both more symmetrical and more advantageously located lower in the larynx, thereby providing a better interface between the glottis and the epiglottis and reducing the risk of aspiration pneumonia. As a side benefit, dogs can also without significant risk of inhaling unsterile water. People travel from all over the country to Pennsylvania for this surgery technique. For more information, visit the <a href="https://www.vrcmalvern.com/bilateral-vocal-fold-excision-mucosoplasty-bilateral-arytenoidpexy-bveap-approach-to-laryngeal-paralysis-in-dogs/" className="link-dark" target="_blank" rel="noreferrer noopener">BVEAP page on the VRC Malvern&lsquo;s website</a>.
                  </p>
                </div>
              </TabPanel>
              
              <TabPanel>
                <div className={styles.content_block}>
                  <h2 className={styles.content_head}>Ventrilocordectomy</h2>
                  
                  <p className={styles.content_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime earum dolore nesciunt quos molestias voluptatum aut quo ipsum accusamus vitae ut in perferendis, dolorem doloribus odio rerum necessitatibus nisi.
                  </p>
                </div>
              </TabPanel>
  
              <TabPanel>
                <div className={styles.content_block}>
                  <h2 className={styles.content_head}>Tracheostomy</h2>
                  
                  <p className={styles.content_text}>
                      Information about this surgery type will be provided soon.
                  </p>
                </div>
              </TabPanel>
  
              <TabPanel>
                <div className={styles.content_block}>
                  <h2 className={styles.content_head}>Partial Laryngectomy</h2>
                  
                  <p className={styles.content_text}>
                    Information about this surgery type will be provided soon.
                  </p>
                </div>
              </TabPanel>
  
              <TabPanel>
                <div className={styles.content_block}>
                  <h2 className={styles.content_head}>Castellated laryngofissure</h2>
                  
                  <p className={styles.content_text}>
                    Information about this surgery type will be provided soon.
                  </p>
                </div>
              </TabPanel>
            </Tabs>
  
          </div>

        </div>
      </section>
    </>
  )
}

export default SurgeryStudies