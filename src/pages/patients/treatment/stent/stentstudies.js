import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

// !VA Custom Compontents
import StentNav from '../../../../components/guidenav/StentNav'
import GuideNav from '@/components/GuideNav'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// !VA React Icons
import { FaPaw } from 'react-icons/fa'
import * as styles from '../../../../styles/Light.module.scss'


const StentFaqs = () => {
  return (
    <>
      <NextSeo 
        title="Lar Par: Laryngeal Stent Studies and Research Links"
        description="Find quick links to published research studies about stent treatments for canine laryngeal paralysis."
        canonical="https://larparlife.com/patients/treatment/stent/stentstudies"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Laryngeal Stent Studies <span className='mobile-show-inline'><br /></span>and Research Links</h1>
          </div>
          </div>
      </section>

      {/* Submenu for the Patients pages */}
      <section className={styles.section}>
        <StentNav />
      </section>

      {/* Intro Section Subhead */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_subhead}>
            <h2 className={styles.topic_subhead_title}>Published Research Studies on Laryngeal Stents for Dogs
            </h2>
          </div>
        </div>
      </section>  

      {/* Studies Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

            <div className='tabs-container'>
              <Tabs>
                <TabList>
                  <Tab>2022 Study: Théron &amp; Lahuerta-Smith </Tab>
                  <Tab>2020 Study: Ricart, Rodríguez &amp; Duré</Tab>
                </TabList>
            
                <TabPanel>
                <h2 className={styles.content_head}>Laryngeal silicone stent as treatment option for laryngeal paralysis in dogs: a preliminary study of 6 cases</h2>
                <p className={styles.content_text}>
                  In 2022 a <a href='https://pubmed.ncbi.nlm.nih.gov/35920122/' className='link-dark' target="_blank" rel="noopener noreferrer">detailed article was published in the Open Veterinary Journal</a>. This research study by Marie-Laure Théron and Tomas Lahuerta-Smith followed up on the 2019 research by Ricart et al. It was the first to focus specifically on laryngeal stents for senior dogs who were most likely suffering from geriatric-onset laryngeal paralysis and polyneuopathy (GOLPP). In this study, laryngeal stents were used to treat six dogs with laryngeal paralysis. Of the six dogs in the study:
                </p>
                <ul className={styles.content_list_no_bullet}>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                    <span className='semibold-italic'>Four dogs were still alive with good quality of life at the long-term follow up between 7 and 13 months after the procedure. </span>One of those dogs had tie-back surgery six months prior but the symptoms had recurred. The stent was placed instead of a repeat tie-back. <span className='italic'>One of those dogs is confirmed to have lived two years and three months after stent placement with no issues and an excellent quality of life</span>.
                  </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  In one dog, the stent migrated and the symptoms recurred. The stent was removed and tie-back was performed.
                  </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>One dog was euthanized four weeks after the procedure due to other conditions.
                  </li>
                </ul>
                <p className={styles.content_text}>
                  The studies&rsquo; authors state that surgery remains the treatment of choice for laryngeal paralysis. However, if we read between the lines in the <span className='bold'>Discussion</span> section, we find a different set of conclusions:
                </p>
                <p className={styles.content_text}>
                  <span className='italic'>
                    &ldquo;This case series describes an alternative technique for treating acquired canine laryngeal paralysis in dogs. This technique is non-invasive, quick, inexpensive, and easy to perform. The reduced cost and short anesthetic time mean that this technique could be particularly interesting for dogs whose owners are unwilling to perform classic surgical therapy because of the financial costs, old age, or significant comorbidities. Furthermore, stent placement can be a temporary solution to stabilize these dogs until they undergo permanent surgical treatment.&rdquo;
                  </span>
                </p>
                <p className={styles.content_text}>
                  Dr. Théron continues to perform the laryngeal stent procedure as a routine treatment for laryngeal paralysis and GOLPP at the <a href="https://www.vetoparme.com/" className="link-dark" target="_blank" rel="noreferrer noopener">Clinique de Parme</a> in Biarritz, France, and a growing number of clinics in Germany and the US are either performing this technique or have shown interest in adopting  it. 
                </p>
                <p className={styles.content_text}>
                  By the way, this is the study that saved our Miss B&rsquo;s life. You can learn about that incredible story on the <Link href='/stories' className='link-dark'>Stories page</Link>.
                </p>
                </TabPanel>
                <TabPanel>
                  <h2 className={styles.content_head}>Laryngeal stent for acute and chronic respiratory distress in seven dogs with
  laryngeal paralysis</h2>
                  <p className={styles.content_text}>
                    <a href="https://europepmc.org/article/MED/32426250" className="link-dark" target="_blank" rel="noreferrer noopener">This study was published in early 2020</a> and was the first known attempt to use stenting to treat laryngeal paralysis in dogs. This study differs from the 2020 Theron/Lahuerta-Smith in that it didn&rsquo;t focus specifically on only geriatric dogs with laryngeal paralysis but instead included dogs with other coexisting conditions. Three of the dogs were emergency cases with respiratory distress and were in generally poor condition with comorbidities. Four of the dogs had moderate laryngeal paralysis symptoms. 
                  </p>
                  <p className={styles.content_text}>
                    <span className='bold'>Outcomes:</span> Two of the dogs were euthanized within two weeks of the procedure due to poor general condition. One dog lived nearly three months with the stent despite advanced cancer. The remaining four dogs lived twelve, fifteen, twenty-two and thirty months respectively with all respiratory symptoms of laryngeal paralysis resolved.
                  </p>
                  <p className={styles.content_text}>
                    This veterinary team comes to this conclusion: <span className='italic'>&ldquo;The ease of placement and the immediate- and long-term results in these seven cases encourage the use of the silicone laryngeal stent for laryngeal paralysis in older dogs as a therapeutic alternative. This new treatment for the laryngeal paralysis is a promising therapeutic alternative to the known laryngeal surgical techniques. All of the owners reported an improvement in the quality of their dog’s life and were grateful for the opportunity of a noninvasive therapeutic option for the laryngeal paralysis.&rdquo;</span>
                  </p>
                </TabPanel>
              </Tabs>
            </div>



        </div>
      </section>
    </>
  )
}

export default StentFaqs