import React from 'react'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
// import SurgeryNav from '../../../../components/guidenav/SurgeryNav'
// !VA Images
import RicartFig1 from './../../../public/img-ricart-fig1.jpg'
import RicartFig5 from './../../../public/img-ricart-fig5.jpg'
import TheronFig1 from './../../../public/img-theron-fig1.jpg'
import TheronFig2 from './../../../public/img-theron-fig2.jpg'
import TheronFig3 from './../../../public/img-theron-fig3.jpg'
import Treats4 from './../../../public/img-treats-04.jpg'
import Treats5 from './../../../public/img-treats-05.jpg'
import Treats6 from './../../../public/img-treats-06.jpg'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

const Procedure = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  return (
    <>
      <NextSeo 
        title="Laryngeal Stent Implant Procedure Details: Info for Vets"
        description="Stent implant procedure details for treating laryngeal paralysis in dogs based on published research."
        canonical="https://larparlife.com/dvms/procedure"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Laryngeal Stent Implant Procedure&nbsp;Details
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


        {/* Procedure Intro Content Start */}
        <div className={styles.content_block}>
          <p className={styles.content_text}>
            The two existing research studies on laryngeal stents to treat laryngeal paralysis employ similar techniques with comparable results and conclusions.
          </p>
        </div>
        {/* Procedure Intro Content End */}

        <div className='tabs-container'>
            <Tabs>
              <TabList>
                <Tab>Implant Procedure</Tab>
                <Tab>Clinical Signs &amp; Complications</Tab>
                <Tab>Outcomes</Tab>
              </TabList>

              <TabPanel>
              <p className={styles.content_text}>
                The stent techniques employed by Ricart, Rodríguez &amp; Duré and Théron &amp; Lahuerta-Smith employ the same basic approach with subtle procedural differences. Excerpts from publications are included below. Please see the respective full publication for complete <information className=""></information>
              </p>
                
                {/* Ricart Procedure Details Start */}
                <h2 className={styles.content_head}>Ricart, Rodríguez &amp; Duré</h2>
                <div className={styles.content_text}>
                  <a href="https://europepmc.org/article/MED/32426250" className="link-dark" target="_blank" rel="noreferrer noopener">Read the full Ricard/Rodríguez/Duré study&nbsp;<FaArrowCircleRight className={styles.anchor_go_button}/></a>
                  {/* ShowMoreComponent content start */}
                  <ShowMoreContent
                    title='Show Ricart et. al. Procedure Details'
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                     <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        The dog is placed in sternal recumbency with an elevated head. Oxygen facemask as preoxygenation with 3-minute breathing oxygen at 100 ml/kg/min is necessary ... for every procedure. With a 20-cm long Allis forceps, the stent is compressed as shown in the picture (Fig. 1B) and lubricated with jelly lidocaine 2%. </p>
                      {/* VA! Check image component for width attribute */}
                      <figure className={styles.showmore_figure}>
                        <Image src={RicartFig1} className={styles.showmore_figure_image} alt="Ricart et. al. Fig1B"/>
                        <figcaption className={styles.showmore_figure_caption}>
                          Forceps With Stent Implant
                        </figcaption>
                      </figure>
                        <p className={styles.showmore_content_text}>The procedure is performed under sedation with titrated propofol 4–8 mg/kg IV to effect. When possible, the mouth should be opened and the tongue withdrawn while the Allis, with the stent in its end, is placed into the lumen of the larynx and liberated. The prominences of the stent should be placed cranial to the vocal folds for fixation, the arytenoid cartilages should be opened with its walls, and it should be checked that the movement of the epiglottis is possible. If needed, the Allis could be used to accommodate the stent once it is placed in the glottis. The stent usually does not need any other fixation than the prominences cranial to the vocal cords if the arytenoid cartilages fail to abduce. The stent is shown in X-rays. The same technique is used in laryngeal stenosis, complication due to cordectomy; in this case, the stent is fixed by the stenosis itself. Once the stent is placed, titrated propofol IV is suspended and an oxygen face mask is again used until the dog recovers. It is necessary to check if the stent is correctly placed during this time. It might provoke a discrete cough immediately after waking, and no abnormal breathing sounds should be heard (no stridor nor noisy breathing).</p>
                        {/* VA! Check image component for width attribute */}
                        <figure className={styles.showmore_figure}>
                          <Image src={RicartFig5} className={styles.showmore_figure_image} alt="Ricart et. al. Fig2"/>
                          <figcaption className={styles.showmore_figure_caption}>
                            Properly Positioned Stent
                          </figcaption>
                        </figure>
                        <p className={styles.showmore_content_text}>If there is any doubt about its placement, transoral laryngoscopy should be performed immediately. After the procedure, depending on the clinical condition and the owner’s choice, the dog could go home or remain in hospital. Two to three hours after the procedure, water can be offered. If the dog does not cough while drinking, the stent is perfectly placed. If the dog coughs while drinking, wet food should be offered until the stent is accommodated properly by the swallowing reflex itself. 
                      </p>
                    </div>
                  </ShowMoreContent>
                  {/* ShowMoreComponent content end */} 
                </div>  
                {/* Ricart Procedure Details End */}

                {/* Theron Procedure Details Start */}
                <h2 className={styles.content_head}>Théron &amp; Lahuerta/Smith</h2>
                <div className={styles.content_text}>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/35920122/" className="link-dark" target="_blank" rel="noreferrer noopener">Read the full Théron/Lahuerta-Smith study&nbsp;<FaArrowCircleRight className={styles.anchor_go_button}/></a>
                  {/* ShowMoreComponent content start */}
                  <ShowMoreContent
                    title='Show Théron &amp; Lahuerta/Smith Procedure Details'
                    index={2}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                     <div className={styles.showmore_content_block}>

                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        Before induction, pre-oxygenation with an oxygen facemask for several minutes at 100 mL/ kg/min. [ While in sternal recumbency ], the dog’s head was lifted, and the tongue was pulled cranially to improve visualization of the larynx. The ideally sized stent allows complete expansion inside the glottis and a good grip on the vocal cords. Currently, two sizes are commercially available: 14 and 20 mm in diameter (STENING, Spain). The surface of the prosthesis is covered with 1 mm studs to increase stability after insertion and prevent necrosis by limiting contact with the laryngeal mucosa. The stent was folded into four parts using two long Bengolea forceps: one curved and one straight. The stent was lubricated with sterile ultrasound gel and introduced into the glottis.</p>                      
                        <figure className={styles.showmore_figure}>
                          <Image src={TheronFig1} className={styles.showmore_figure_image} alt="Theron/Lahuerta-Smith Fig 1"/>
                          <figcaption className={styles.showmore_figure_caption}>
                            Forceps with Stent
                          </figcaption>
                        </figure>
                        <p className={styles.showmore_content_text}>The distal forceps were released first, and the stent was pushed delicately until the first stubs were positioned in front of the vocal cords to ensure stable positioning. Epiglottis movement was observed to check for any nuisance caused by the stent. A right lateral radiograph was then obtained to confirm positioning. Finally, 0.1 mg/kg dexamethasone was injected intravenously after insertion to prevent laryngeal swelling. Each patient was actively monitored for 4 h after the procedure, with particular attention to the development of abnormal respiratory sounds, cough, and dyspnea. </p>
                        <figure className={styles.showmore_figure}>
                          <Image src={TheronFig3} className={styles.showmore_figure_image} alt="Theron/Lahuerta-Smith Fig 3"/>
                          <figcaption className={styles.showmore_figure_caption}>
                            Properly Positioned Stent
                          </figcaption>
                        </figure> 
                        <p className={styles.showmore_content_text}>
                        A small amount of water was then offered to ensure the absence of dysphagia or aspiration. The animal was discharged if no problems were encountered. The stent was repositioned if any discomfort was seen. Instructions were given to the owners after the procedure to feed small quantities of food and water under supervision for the first 24 h to avoid aspiration. The quantities of food were then increased over the next 2 d, and normal feeding habits were resumed 3 d after the procedure. A 5-d course of prednisolone at approximately 0.5–1.0 mg/kg once daily orally was started the day after the procedure. A cough suppressant (codeine at 0.2 mg/kg twice daily orally) was given if the dog developed a cough not associated with feeding.
                      </p>
                    </div>
                  </ShowMoreContent>
                  {/* ShowMoreComponent content end */} 
                </div>  
                {/* Theron Procedure Details End */}

              </TabPanel>

              <TabPanel>
                <h2 className={styles.content_head}>Clinical Signs &amp; Complications</h2>
                <p className={styles.content_text}>
                  These clinical signs and complications were identified and/or confirmed in both studies. Please see the respective study for detailed information:
                </p>
                
                <p className={styles.content_text}>
                  <span className='bold'>Cough</span> &mdash; Mild-to-moderate cough is expected as the dog reacts to the foreign body. Coughing may be alleviated though repositioning the stent to ensure correct epiglottal movement. In all cases the cough was considered by the owner to be an acceptable side-effect of the treatment and no cough suppressant was administered.
                </p>
                <p className={styles.content_text}>
                  <span className='bold'>Expectoration</span> &mdash; Expectoration of secretions is expected and are mostly swallowed but in some cases can be orally discharged.                  
                </p>
                <p className={styles.content_text}>
                  <span className='bold'>Halitosis</span> &mdash; Halitosis ranging for mild to severe was observed in some dogs which could be resolved by extracting and disinfecting the stent.
                </p>
                <p className={styles.content_text}>
                  <span className='bold'>Bacterial infection</span> &mdash; <span className='italic'>Candida spp</span> infection has been identified in stent applications in human medicine and is assumed to contribute to the halitosis observed in some dogs. Note: severe halitosis from <span className='italic'>pseudomonas</span> infection was identified in one case in the U.S. but no tissue damage was identified on inspection and no disinfection action was taken, with no apparent ill effects. 
                </p>
                <p className={styles.content_text}>
                  <span className='bold'>Migration</span> &mdash; Migration is a possible complication of a stent implant. Migration can occur into the oral cavity or caudally into the proximal trachea, and can be corrected by repositioning the stent. However, a correctly sized and properly placed stent should not migrate. Migration is identified by recurrence of stridor or through radiography.
                </p>
                <p className={styles.content_text}>
                  <span className='bold'>Comorbidities</span> &mdash; As with unilateral arytenoid lateralization, despite restoration of normal breathing after stent placement, megaesophagus and other severe comorbidities adversely affect outcomes of stent treatment.
                </p>




              </TabPanel>

              <TabPanel>
                <p className={styles.content_text}>
                  Outcomes confirmed by both studies are summarized below:
                </p>
                <ul className={styles.content_list_bullet}>
                  <li className={styles.content_list_bullet}>
                    All the dogs that received the laryngeal stent experienced immediate resolution of clinical respiratory sounds. In no case were complications observed during the procedure or immediate post-procedure period.
                  </li>
                  <li className={styles.content_list_bullet}>
                    The time to perform the technique in all cases was under 3 minutes.
                  </li>
                  <li className={styles.content_list_bullet}>
                    Post-procedure side-effects were within acceptable parameters for the dog owner and all owners were satisfied with the outcome. 
                  </li>
                  <li className={styles.content_list_bullet}>
                    Post-procedure complications were rectified by repositioning or disinfecting the stent.
                  </li>
                  <li className={styles.content_list_bullet}>
                    No mortality was directly attributed to the stent implant. All deaths within the observational period were attributable to pre-implant poor general condition or comorbidities (megaesophagus, carcinoma, generalized polyneuropathy). All dogs presenting in mild or good general condition had lifespans exceeding the post-implant observational period of the study (between 7 and 30 months).
                  </li>                                                      
                </ul>
              </TabPanel>
            </Tabs>
            </div>






        </div>
        </div>
      </section>
    </>
  )
}

export default Procedure