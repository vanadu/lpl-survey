import React from 'react'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

// !VA React Tooltip
// import { Tooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// !VA React Icons
import { FaPaw } from 'react-icons/fa'
// !VA React Icons
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Custom Components
// import BottomNav from '../../components/BottomNav'
// import ShowMoreContent from '../../components/ShowMoreContent'
import ShowMoreContent from '../../../components/ShowMoreContent'
import GuideNav from '@/components/GuideNav'
// import AccordionContent from '../../components/AccordionContent'

// !VA Images
import Typewriter from '../../../../public/img-typewriter.jpg'
import TypeSilicone from '../../../../public/img-type-silicone.jpg'
import TypeNitinol from '../../../../public/img-type-nitinol.jpg'
// !VA Style modules
import * as styles from '../../../styles/Light.module.scss'

// !VA Receive the props from the AccordionContent tags.
//prettier-ignore

const Links = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  return (
    <>
      <NextSeo 
        title="Lar Par: Links to Research on Laryngeal Paralysis in Dogs"
        description="Find quick links to published research by veterinarians and institutions about canine laryngeal paralysis"
        canonical="https://larparlife.com/patients/links"
      />
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Links to Larygneal Paralysis <span className='mobile-show-inline'><br/></span> Research and Websites
            </h1>
          </div>
          <div className={styles.topic_subhead}>
            <h2 className={styles.topic_subhead_title}>Research Studies and Info<span className="mobile-hide-inline">rmation</span> about <span className='mobile-show-inline'><br /></span>Lar Par and GOLPP in Dogs</h2>
          </div>
        </div>
      </section>  

      {/* Research Links Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          
          <div className='tabs-container'>
          <Tabs>
            <TabList>
              <Tab>Veterinary Institution Websites on Canine Laryngeal Paralysis</Tab>
              <Tab>Research Studies on Canine Laryngeal Paralysis</Tab>
            </TabList>
        
            {/* Veterinary Institution Websites Panel */}
            <TabPanel>
              <h2 className={styles.content_head}>Veterinary Institution Websites</h2>
              <p className={styles.content_text}>
                Below are links to veterinary teaching institution websites with general information about laryngeal paralysis in dogs as well as detailed information for veterinary students. <span className='bold'>Note:</span> As of early 2025 none of these sites mention the laryngeal stent. 
              </p>
              <p className={styles.content_text}>
                <span className='bold'>Michigan State University College of Veterinary Medicine</span>
              </p>
              <p className={styles.content_text}>
                MSU&rsquo;s website is an excellent resource for information on laryngeal paralysis in dogs:
              </p>
              <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}>
                  <FaPaw className={styles.content_list_item_svg}/><a href="https://cvm.msu.edu/assets/images/general/client_handout-GOLPP_revised1-27-10-1.pdf" className="link-underline" target="_blank" rel="noreferrer noopener">GOLPP Study Group Worksheet for VM Students</a>
                </li>
                <li className={styles.content_list_item}>
                  <FaPaw className={styles.content_list_item_svg}/><a href="https://cvm.msu.edu/scs/research-initiatives/golpp" className="link-underline" target="_blank" rel="noreferrer noopener">MSU LP/GOLPP Research Initiative Website</a>
                </li>
              </ul>
              <p className={styles.content_text}><span className='bold'>Cornell College of Veterinary Medicine</span>
              </p>
              <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/><a href="https://www.vet.cornell.edu/departments/riney-canine-health-center/canine-health-information/laryngeal-paralysis" className="link-underline" target="_blank" rel="noreferrer noopener">Cornell Webpage on Laryngeal Paralysis</a>

                </li>
                <li className={styles.content_list_item}>
                <FaPaw className={styles.content_list_item_svg}/><a href="https://confluence.cornell.edu/download/attachments/272203844/1.%20Laryngeal%20Paralysis%20in%20Dogs.pdf?version=1&modificationDate=1413847770000&api=v2" className="link-underline" target="_blank" rel="noreferrer noopener">Continuing Education Worksheet for DV Students</a>
                </li>
              </ul>
            </TabPanel>

            {/* Research Study Links Panel */}
            <TabPanel>
              <h2 className={styles.content_head}>Research Studies</h2>
              <p className={styles.content_text}>
                Select the link to open the publication in a new tab. Select <span className='bold'>Results & Conclusions</span> to display the publication&rsquo;s summary.
              </p>

              <div className={styles.info_research}>
                <h5 className={styles.info_subheading_text}>1 &ndash; <a href="https://avmajournals.avma.org/view/journals/javma/248/2/javma.248.2.188.xml" className="link-underline" target="_blank" rel="noreferrer noopener">Risk factors for the development of aspiration pneumonia after unilateral arytenoid lateralization in dogs with laryngeal paralysis: 232 cases (1987–2012)
                </a></h5>
                <p className={styles.content_text}>
                  <span className='bold'>Publish date: Jan 2016</span>
                </p>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='Results &amp; Conclusions' 
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className='showmore-content-block'><span className='bold'>Results:</span> &ldquo;At the 1-, 3-, and 4-year follow-up periods, aspiration pneumonia occurred in 18.6%, 31.8%, and 31.8% of dogs, respectively. The 1-, 3-, and 4-year survival rates for dogs with postoperative aspiration pneumonia were 83.1%, 51.5%, and 25.8%, respectively. None of the dogs with aspiration pneumonia before surgery developed clinical signs of aspiration pneumonia after surgery. Postoperative megaesophagus (hazard ratio [HR], 2.58; 95% confidence interval [CI], 1.56 to 3.93) and postoperative administration of opioid analgesics prior to discharge (HR, 1.69; 95% CI, 1.12 to 2.80) were significant risk factors for the long-term development of aspiration pneumonia in this study. Perioperative metoclopramide administration did not significantly decrease the risk for development of aspiration pneumonia (HR, 0.94; 95% CI, 0.67 to 1.37).&rdquo;
                        </p>
                        <p className='showmore-content-block'><span className='bold'>Conclusions: &ndash; </span>&ldquo;In the present study, aspiration pneumonia was the most commonly reported postoperative complication of unilateral lateralization in dogs treated for laryngeal paralysis; however, preexisting aspiration pneumonia was not associated with an increased risk for development of aspiration pneumonia after surgery. Megaesophagus was identified as an important risk factor for eventual development of aspiration pneumonia. Administration of an opioid analgesic may increase the risk of aspiration pneumonia in dogs treated surgically for laryngeal paralysis.&rdquo;
                        </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>

              <div className={styles.info_research}>
                <h5 className={styles.info_subheading_text}>2 &ndash; <a href="https://avmajournals.avma.org/view/journals/javma/248/2/javma.248.2.188.xml" className="link-underline" target="_blank" rel="noreferrer noopener">Outcome of and postoperative complications in dogs undergoing surgical treatment of laryngeal paralysis: 140 cases (1985-1998)
                </a></h5>
                <p className={styles.content_text}>
                  <span className='bold'>Publish date: 15 Jun 2001</span>
                </p>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='Results &amp; Conclusions' 
                    index={2}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className='showmore-content-block'><span className='bold'>Results:</span> &ldquo;Postoperative complications were documented in 48 (34.3%) dogs; 20 (14.3%) dogs died of related causes. Aspiration pneumonia was the most common complication (33; 23.6%). Seven dogs died of aspiration pneumonia &gt; 1 year after surgery. Dogs that underwent bilateral arytenoid lateralization were significantly more likely to develop complications and significantly less likely to survive than were dogs that underwent unilateral arytenoid lateralization or partial laryngectomy. Factors that were significantly associated with a higher risk of dying or of developing complications included age, temporary tracheostomy placement, concurrent respiratory tract abnormalities, concurrent esophageal disease, postoperative megaesophagus, concurrent neoplastic disease, and concurrent neurologic disease.&rdquo;
                        </p>
                        <p className='showmore-content-block'><span className='bold'>Conclusions: &ndash; </span>&ldquo;Results suggest that surgical repair of laryngeal paralysis may be associated with high postoperative complication and mortality rates. Surgical technique and concurrent problems or diseases increased the risk of complications. Dogs appeared to have a life-long risk of developing respiratory tract complications following surgical correction. &rdquo;
                        </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>

              <div className={styles.info_research}>
                <h5 className={styles.info_subheading_text}>3 &ndash; <a href="https://avmajournals.avma.org/view/journals/javma/228/8/javma.228.8.1215.xml" className="link-underline" target="_blank" rel="noreferrer noopener">Postoperative results of unilateral arytenoid lateralization for treatment of idiopathic laryngeal paralysis in dogs: 39 cases (1996–2002)</a></h5>
                <p className={styles.content_text}>
                  <span className='bold'>Publish date: April 2006</span>
                </p>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='Results &amp; Conclusions' 
                    index={3}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className='showmore-content-block'><span className='bold'>Results:</span> &ldquo;In all dogs, UAL had been performed by a single surgeon who used a standard surgical technique. Long-term follow-up information was available for all 39 dogs; mean follow-up time was 29.6 months (range, 3 to 61 months). Seven (18%) dogs developed postoperative pneumonia, and 6 of the 7 recovered with treatment. Twenty-two of the 39 (56%) dogs had minor complications, including unresolved coughing or gagging, continued exercise intolerance, vomiting, and seroma formation. Owners of 35 of the 39 (90%) dogs reported an improvement in postoperative quality-oflife score. Median survival time was 12 months; only 1 dog was euthanized because of respiratory tract disease following surgery.&rdquo;
                        </p>
                        <p className='showmore-content-block'><span className='bold'>Conclusions: &ndash; </span>&ldquo;Results suggest that UAL will improve quality of life in most dogs with idiopathic laryngeal paralysis. However, the complication rate is high, with postoperative pneumonia being the most important major complication. Minor complications were common but did not adversely affect owner-assigned quality-of-life scores in most dogs. &rdquo;
                        </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>

              <div className={styles.info_research}>
                <h5 className={styles.info_subheading_text}>4 &ndash; <a href="https://pdfs.semanticscholar.org/d956/5eb9c6ed52531d4899b61974576e47a6ad04.pdf" className="link-underline" target="_blank" rel="noreferrer noopener">Laryngeal paralysis in dogs: An update on recent knowledge</a></h5>
                <p className={styles.content_text}>
                  <span className='bold'>Publish date: February 2013</span>
                </p>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='Results &amp; Conclusions' 
                    index={4}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className='showmore-content-block'><span className='bold'>Prognosis and Conclusions:</span> &ldquo;A clear distinction needs to be made between the different forms of the disease. Prognosis for hereditary LP is excellent as dogs are cured by surgery. Congenital LP neuropathy has a poor prognosis and most dogs tend to be euthanased
                        within 10 weeks as a result of worsening clinical signs (Davies & Irwin 2003). The prognosis for acquired LP will vary depending on the cause: trauma cases can be cured; neoplasia-induced LP will depend on the tumour type. &rdquo;
                        </p>
                        <p className='showmore-content-block'>&ldquo;Evidence strongly suggests that the most common form of LP in dogs is, in fact, an early stage of GOLPP (Stanley et al.2010). Even though all complications should be considered when making a prognosis in any dog developing LP as a component of polyneuropathy, this condition progresses slowly, making short-term prognosis more favourable.&rdquo;
                        </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>

              <div className={styles.info_research}>
                <h5 className={styles.info_subheading_text}>5 &ndash; <a href="https://pubmed.ncbi.nlm.nih.gov/31981469/" className="link-underline" target="_blank" rel="noreferrer noopener">Late-onset laryngeal paralysis: Owner perception of quality of life and cause of death</a></h5>
                <p className={styles.content_text}>
                  <span className='bold'>Publish date: August 2020</span>
                </p>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='Results &amp; Conclusions' 
                    index={5}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className='showmore-content-block'><span className='bold'>Results:</span> &ldquo;Seventy-six owners participated. Overall, 94% of owners felt their dog&rsquo;s LoLP affected QOL, and 47% of owners felt LoLP was a large contributing factor in their dog&rsquo;s death. Dogs that underwent a glottic opening procedure were reported to have a better QOL, and the contribution of LoLP towards their death was less than dogs that did not have surgery.&rdquo;
                        </p>
                        <p className='showmore-content-block'><span className='bold'>Conclusions: &ndash; </span>&lsquo;Owners of Labrador Retrievers with LoLP perceive LoLP to be a life-limiting disease that negatively impacts their dog&rsquo;s QOL. Arytenoid lateralization surgery had a positive impact on QOL in affected dogs. &rdquo;
                        </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>

              <div className={styles.info_research}>
                <h5 className={styles.info_subheading_text}>6 &ndash; <a href="https://pubmed.ncbi.nlm.nih.gov/15086080/" className="link-underline" target="_blank" rel="noreferrer noopener">A retrospective study of unilateral arytenoid lateralisation in the treatment of laryngeal paralysis in 100 dogs (1992-2000)</a></h5>
                <p className={styles.content_text}>
                  <span className='bold'>Publish date: August 2003</span>
                </p>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='Results &amp; Conclusions' 
                    index={6}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className='showmore-content-block'><span className='bold'>Results:</span> &ldquo;The Labrador Retriever was the most commonly affected breed. The male:female ratio was 1.56:1 and the average age of presentation was 9.9 years. The most common month in which surgery was performed was October. The majority of owners (87.7%) felt that their dog&rsquo;s quality of life was improved in the 6 months after surgery. Thirty-three percent of dogs revisited the referring clinic with a respiratory problem following unilateral arytenoid lateralisation, and 10.7% of dogs were reported as having a post-surgical complication associated with the procedure. Following surgery, dogs under 10 kg revisited the referring veterinarian with a respiratory complication more often than dogs over 10 kg. Significantly fewer owners of dogs under 10 kg than owners of dogs over 10 kg felt that their dogs quality of life was improved by surgery (55% versus 93%).&rdquo;
                        </p>
                        <p className='showmore-content-block'><span className='bold'>Conclusions: &ndash; </span>&lsquo;The majority of owners surveyed reported that unilateral arytenoid lateralisation had improved the quality of their dog&rsquo;s life during the first 6 postoperative months. Owner dissatisfaction with the results of surgery and the reported rate of re-presentation (for respiratory disease) may be higher for small (&gt; 10 kg) dogs. A prospective study comparing the results of unilateral arytenoid lateralisation surgery in large and small dogs may be worthwhile in the future. &rdquo;
                        </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>

              <div className={styles.info_research}>
                <h5 className={styles.info_subheading_text}>7 &ndash; <a href="https://pubmed.ncbi.nlm.nih.gov/26757180/" className="link-underline" target="_blank" rel="noreferrer noopener">Idiopathic Canine Laryngeal Paralysis as One Sign of a Diffuse Polyneuropathy: An Observational Study of 90 Cases (2007-2013)</a></h5>
                <p className={styles.content_text}>
                  <span className='bold'>Publish date: February 2016</span>
                </p>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='Results &amp; Conclusions' 
                    index={7}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className='showmore-content-block'><span className='bold'>Results:</span> &ldquo; Dogs that had surgical correction of ILP had a 2.6-fold reduction in the hazard of death throughout the study period (HR = 2.6; 95% CI: 1.34-4.84, P = .006). Owner assessed patient quality of life (10-point scale) increased by an average of 4.1 ± 1.4 units immediately postoperatively, and 4.9 ± 0.9 units until death or followup compared with preoperative values. Thirty-five of 72 dogs available for followup had evidence of diffuse neurologic comorbidities. Overall complication rate for dogs with neurologic comorbidities was 74%, compared with 32% for dogs without neurologic comorbidities. Presence of any neurologic comorbidity was associated with a significantly greater odds of any complication (OR = 4.04; 95% CI: 1.25-13.90, P = .019) as well as recurring complications (OR = 8.00; 95% CI: 1.49-54.38; P = .015).&rdquo;
                        </p>
                        <p className='showmore-content-block'><span className='bold'>Conclusions: &ndash; </span>&lsquo;Surgical correction of ILP was positively associated with survival, and dogs with neurologic comorbidities were at greater risk for developing postoperative complications.&rdquo;
                        </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>

            </TabPanel>
          </Tabs>
          </div>

        </div>
      </section>



    </>
  )
}

export default Links