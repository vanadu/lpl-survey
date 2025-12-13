import React from 'react'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Replaced Head with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.04.01 next-seo replaces the Head component
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
import ShowMoreContent from '../../components/ShowMoreContent'
// import AccordionContent from '../../components/AccordionContent'
import GuideNav from '@/components/GuideNav'
// !VA Images
import Typewriter from '../../../public/img-typewriter.jpg'
import TypeSilicone from '../../../public/img-type-silicone.jpg'
import TypeNitinol from '../../../public/img-type-nitinol.jpg'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

// !VA Receive the props from the AccordionContent tags.
//prettier-ignore

const DVMs = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  return (
    <>
      <NextSeo 
        title="Stent Implant for Laryngeal Paralysis in Dogs: Info for Vets"
        description="Info for veterinarians about laryngeal stent treatments for canine laryngeal paralysis based on published research."
        canonical="https://larparlife.com/dvms"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Stent Implant for <span className='mobile-show-inline'><br /></span>Laryngeal Paralysis in Dogs
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

      <section className={styles.section}>
  
        <div className={styles.section_content}>
          <div className={styles.content}>

            {/* 21st Century Solution Content Start */}
            <div className={styles.content_block}>
              <h2 className={styles.content_head}>The 21st Century Solution</h2>
              <figure className={styles.figure_small}>
                <Image src={Typewriter} className={styles.figure_image} alt="Laryngeal Stent: Typewriter"/>
                {/* <figcaption className={styles.figure_caption}>Do <span className="semibold-italic">you</span> use one of <span className="semibold-italic">these</span>?</figcaption> */}
              </figure>
    
              <p className={styles.content_text}>
                When unilateral arytenoid lateralization (tieback) surgery was first developed in the 1980s, the typewriter was the &lsquo;gold standard&rsquo; for creating documents. 40 years later, typewriters are nowhere to be found, yet the veterinary community still cleaves to a costly 20th-century surgical procedure with significant risk factors to treat laryngeal paralysis in dogs. It&lsquo;s time to move forward into the 21st century and embrace less invasive, more efficient life-saving techniques. 
              </p>
            </div>
            {/* 21st Century Solution Content End */}

            {/* Choosing to Lead Content Start */}
            <div className={styles.content_block}>

              <h2 className={styles.content_head}>Choosing to Lead</h2>
              <p className={styles.content_text}>
                Here you can learn about the stent procedure for canine laryngeal paralysis &mdash; types of stents, procedure details, and revenue prospects for your practice. You can choose to be a leader in your community by adopting this proven 21st-century procedure to help your clients and the animals they love, as well as generate the revenue you need to run a successful business.
              </p>
            </div>

            {/* Background Content Start */}
            

            <div className={styles.content_block}>
              <h2 className={styles.content_head}>Background</h2>
              <p className={styles.content_text}>
              The first silicone stent implant to treat canine laryngeal paralysis was performed by the Argentine team of María Ricart, Sergio Rodríguez and Roberto Duré. <a href="https://europepmc.org/article/MED/32426250" className="link-dark" target="_blank" rel="noreferrer noopener">Read the Ricard/Rodríguez/Duré study&nbsp;<FaArrowCircleRight className={styles.anchor_go_button}/></a>.
              </p>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}></p>
                <ShowMoreContent
                  title='What were the conclusions of the 2020 Ricard/Rodríguez/Duré study?'
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                   <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      <span className="italic">Summary:</span> Of the seven dogs in the study, dogs 1 &ndash; 3 presented with severe inspiratory distress (two of which had significant comorbidities). Dogs 3 &ndash; 7 presented with mild-to-moderate clinical signs and fewer comorbidities. After the stent implant, all seven dogs showed significant quality of life improvements. Dogs 1 &ndash; 3 were euthanized within 85 days of the implant primarily due to coexisting pathologies. Dogs 4 &ndash; 7 lived between 12 and 30 months after the implant with all respiratory signs resolved. Conclusion: &ldquo;The placement of the laryngeal stent is an easy technique to learn and practice, it could avoid the life-threatening complications of the laryngeal paralysis at the acute phase, and it could be a noninvasive and long-term alternative therapy for laryngeal paralysis in dogs. The results in these clinical cases are encouraging for considering the laryngeal stent as a therapeutic alternative.&rdquo;
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              <p className={styles.content_text}>
                In 2022, a follow-up study by the French team of Theron and Lahuerta-Smith was published in which a silicon Dumon stent was implanted 6 senior dogs with GOLPP. <a href="https://pubmed.ncbi.nlm.nih.gov/35920122/" className="link-dark" target="_blank" rel="noreferrer noopener">Read the Theron/Lahuerta-Smith study&nbsp;<FaArrowCircleRight className={styles.anchor_go_button}/></a>
              </p>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What were the conclusions of the 2022 Theron/Lahuerta-Smith study?' 
                  index={3}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                   <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_inline}>
                    <span className="italic">Summary:</span> Stents were placed in six dogs between 10 and 12 years of age. In one dog, the stent was removed due to migration and tieback was performed. One dog was euthanized 4 wks later due to megaoesohphagus, tetraparesis, and worsening QOL. The other four dogs were assessed with good QOL between 7 and 13 months later. One of the dogs was known to have lived 2 years and 4 months after the implant with a good QOL until euthanasia due to advanced polyneuropathy. Conclusion: &ldquo;Laryngeal silicone stenting is an interesting alternative for treating dogs with acquired laryngeal paralysis when the owners refuse classic arytenoid lateralization surgery. Furthermore, stent placement can be a temporary solution to stabilize these dogs until a permanent surgical treatment can be performed.&rdquo;
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            </div>
            {/* Background Content End*/}

            
            {/* Stent Types Content Start */}
            <div className={styles.content_block}>

              <h2 className={styles.content_head}>Stent Types</h2>
              <p className={styles.content_text}>
                There are currently two laryngeal stent types to treat laryngeal paralysis in dogs: the silicone stent and the Nitinol stent.  
              </p>
              <div className={styles.container_flex_center}>
                <div className={styles.side_by_side}>
                  <div className={styles.side_by_side_child}>
                    <figure className={styles.figure_medium}>
                      <Image src={TypeSilicone} className={styles.figure_image} alt="Dumon Silicone Stent" />
                    </figure>
                    <p className={styles.content_text}>
                    The silicon stent is a standard Dumon stent type used since the 1990&rsquo;s for airway obstruction in humans and first used to treat laryngeal paralysis in dogs in 2019. 
                    </p>
                  </div>
                  <div className={styles.side_by_side_child}>
                    <figure className={styles.figure_medium}>
                      <Image src={TypeNitinol} className={styles.figure_image} alt="Nitinol Stent" />
                    </figure>
                    <p className={styles.content_text}>
                      The Dextronix Nitinol LE stent is a proprietary, patented stent product originally designed to treat human laryngeal paresis and repurposed for veterinary use.
                    </p>
                  </div>
                </div>
              </div>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                {/* <p className={styles.showmore_content_inline}>
                  [Text That Includes ShowMoreContent Component]
                </p> */}
                <ShowMoreContent
                  title='What are the differences between the silicone stent and the Dextronix Nitinol LE stent'
                  index={4}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      The standard silicone stent and Dextronix Nitinol stent have little in common besides their use to treat laryngeal paralysis in dogs. NOTE: We are not aware of any information Dextronix has made public to address the issues below regarding the Dextronix Nitinol stent. The issues outlined below are common-sense questions any animal owner might ask prior to consenting to this procedure and reflect the opinions of the authors. No misinformation is intended. For complete information about the Dextronix product, contact the manfacturer.
                    </p>
                    <table className={styles.table} >
                      <thead className={styles.table_header}>
                        <tr>
                          <th className={styles.table_head}>Silicone (Dumon) Stent</th>
                          <th className={styles.table_head}>Dextronix Nitinol LE Stent</th>
                        </tr>
                      </thead>
                      <tbody>
  
                      <tr>
                        <td className={styles.table_cell}>Biocompatibility and structural integrity of silicone is well-documented in three decades of medical and veterinary use</td>
                        <td className={styles.table_cell}>Nitinol material currently under safety review by the FDA for fracturing and biocompatibility issues</td>
                      </tr>
                      <tr>
                        <td className={styles.table_cell}>Pliable fixed-shape tubular structure with studs</td>
                        <td className={styles.table_cell}>Thin, flexible Nitinol wire double-loop shape</td>
                      </tr>
                      <tr>
                        <td className={styles.table_cell}>Removal is the reverse of implantation; can be performed by any competent primary veterinarian</td>
                        <td className={styles.table_cell}>Removal requires the same proprietary delivery system as implantation</td>
                      </tr>
                      <tr>
                        <td className={styles.table_cell}>In a crisis situation, can be removed for any reason at any emergency veterinary facility</td>
                        <td className={styles.table_cell}>In a crisis situation, it is unclear if the device can be removed at any emergency veterinary facility that does not possess the proprietary delivery device. </td>
                      </tr>
                      <tr>
                        <td className={styles.table_cell}>Stent product can be removed with standard forceps in case of defective product.</td>
                        <td className={styles.table_cell}>It is unclear if the proprietary delivery system may fail to remove a defective or fractured product. If it can not, it is unclear what the alternative means of removal would be.</td>
                      </tr>
                      <tr>
                        <td className={styles.table_cell}>Affordable unit cost $80 - $160, depending on technique</td>
                        <td className={styles.table_cell}>Unit cost upwards of $1200</td>
                      </tr>
                      <tr>
                        <td className={styles.table_cell}>Affordable total procedure cost of under $1500 including imaging and meds, a fraction of the cost of surgery</td>
                        <td className={styles.table_cell}>Total procedure cost including imaging and meds comparable to the cost of surgery.</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              <p className={styles.content_text}>
                <span className='semibold-italic'>IMPORTANT:</span> The Dextronix DexStent-LN Nitinol wire stent has been discontinued by the manufacturer, possible due to the issues outlined below and detailed in <Link href='/blog/fda-report-fuels-concerns-about-dextronix-nitinol-stent-for-dogs' className='link-dark' rel="noopener noreferrer" target="_blank">this article</Link>. As of January 2025, the  the silicone Dumon stent is the only commercially available stent product for canine laryngeal paralysis.
              </p>
              <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>The FDA has issued an advisory and report concerning Nitinol use in medical devices, specifically naming fracturing and biocompatibility as risk factors.</li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>Currently no devices based on this patented design are approved for human-medical use. </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>Should Dextronix cease production of the proprietary delivery device, it is unclear how any currently implanted Dextronix stents could be removed.</li>
              </ul>
              <p className={styles.content_text}>
                Before implanting the Dextronix Nitinol LE product, it is strongly recommended to inquire with Dextronix about how these concerns will be resolved in the future.  
              </p>
              <p>&nbsp;</p>
            </div>
            {/* Stent Types Content End */}            
          </div>
        </div>
      </section>
    </>
  )
}

export default DVMs