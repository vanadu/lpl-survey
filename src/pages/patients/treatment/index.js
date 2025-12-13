import React, { useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA Custom Components
import ShowMoreContent from '../../../components/ShowMoreContent'
import TreatmentNav from '../../../components/guidenav/TreatmentNav'
import GuideNav from '@/components/GuideNav'
// !VA React Icons
import { FaPaw } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Images
import MissBStentLink from '../../../../public/img-miss-b-stent-link.jpg'
import GolppDiagnosisTests from '../../../../public/img-golpp-diagnosis-tests.jpg'
// !VA Style modules
import * as styles from '../../../styles/Light.module.scss'

const Treatment = () => {

  // !VA State for the ShowMoreContent component
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <>
      <NextSeo 
        title="Lar Par: Treatment Options for Laryngeal Paralysis in Dogs"
        description="Learn about treatments (i.e. stent vs. surgery) and treatment alternatives for laryngeal paralysis in dogs."
        canonical="https://larparlife.com/patients/treatment"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Treatment Options for <span className='mobile-show-inline'><br /></span>Laryngeal Paralysis in Dogs</h1>
            </div>
            </div>
      </section>

      {/* Submenu for the Patients pages */}
      <section className={styles.section}>
        {/* Submenu for the Patients pages */}
        <TreatmentNav />
      </section>

      {/* Intro Section Subead*/}
      <section className={styles.section}>
        <div className={styles.section_content}>
            <div className={styles.topic_subhead}>
              <h2 className={styles.topic_subhead_title}>Veterinary Treatment vs.<span className="mobile-show-inline"><br/></span> Managing Lar Par Symptoms</h2>
            </div>
        </div>
      </section>

      {/* Veterinary vs Medications Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Veterinary Procedures vs. Medications Content Start */}
          <div className={styles.content_block}>

            <h2 className={styles.content_head}>Veterinary Procedures vs. Medications</h2>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <p className={styles.showmore_content_inline}>
                There is no cure for laryngeal paralysis in dogs, so you have to decide whether you&rsquo;ll 1) pursue a veterinary procedure to help your dog breathe, such as a <span className="italic">laryngeal stent</span> or <span className='italic'>surgery</span> or 2) try to manage the condition with medications like Doxepin or Cerenia or with alternative approaches such as accupuncture or naturopathic remedies.&#8203;&nbsp;
              </p>
              <ShowMoreContent
                title='What&rsquo;s a veterinary procedure for LarPar?'
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    <span className='italic bold'>Veterinary-medical procedures</span> like stent placement or tieback surgery are procedures performed by a veterinarian that modify the structure of the larynx so that a dog can breathe more or less normally. <span className='bold italic'>Managing </span>laryngeal paralysis, on the other hand, isn&lsquo;t considered treatment because the paralyzed larynx continues to constrict the airway, so the dog is still not getting enough air. What pharmaceuticals and medications do is to modify the dog&rsquo;s behavior or mitigate symptoms to avoid things that could result in a life-threatening breathing crisis. The goal is to <span className='bold italic'>prolong</span> the dog&rsquo;s life with as little as possible negative effect on the <span className='bold italic'>quality</span> of life. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}

          </div>
          {/* Veterinary Procedures vs. Medications Content End */}


        </div>
      </section>

      {/* Treatment Options Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Treatment Options Content Start */}
          <div className={styles.content_block}>

            <h2 className={styles.content_head}>Veterinary-Medical Treatment vs. Treatment Alternatives</h2>
            <p className={styles.content_text}>
              There are two veterinary procedures to treat laryngeal paralysis in dogs and a variety of approaches to managing laryngeal paralysis symptoms without veterinary-medical treatment: 
            </p>
            <ul className={styles.content_list_no_bullet}>
              <li className={[styles.content_list_item, styles.two_columns].join(' ')}>
              {/* <li className={[`styles.content_list_item, two_columns`]}> */}
                  {/* <div className={styles.two_columns}> */}
                    <div className={styles.two_columns_left}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Laryngeal Stent</span> &mdash; stenting provides a non&#8209;surgical, minimally&#8209;invasive veterinary-medical treatment option for your LarPar dog. </div >
                    <div className={styles.goto_links}>
                      <Link href="/patients/treatment/stent" className={styles.goto_links_link}>
                      Stent treatment&nbsp;<span className='mobile-hide-inline'>options</span>&nbsp;<FaArrowCircleRight className={styles.related_links_figure_icon} />
                      </Link>
                    </div>
                  {/* </div> */}
              </li>

              <li className={[styles.content_list_item, styles.two_columns].join(' ')}>
                <div className={styles.two_columns_left}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Surgery</span> &mdash; In 2025, surgery is the most widely-available veterinary-medical treatment&nbsp;option, but it&rsquo;s also the most expensive. </div >
                <div className={styles.goto_links}>
                  <Link href="/patients/treatment/surgery" className={styles.goto_links_link}>
                    Surgery treatment&nbsp;<span className='mobile-hide-inline'>options</span>&nbsp;<FaArrowCircleRight className={styles.related_links_figure_icon} />
                  </Link>
                </div>
              </li>

              <li className={[styles.content_list_item, styles.two_columns].join(' ')}>
                <div className={styles.two_columns_left}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Alternatives</span> &mdash;Laryngeal paralysis can&rsquo;t be effectively treated without surgery or a stent implant, but some medications and alternative approaches may help mitigate and manage some of the more severe symptoms of laryngeal paralysis.</div >
                <div className={styles.goto_links}>
                  <Link href="/patients/treatment/managing" className={styles.goto_links_link}>
                  Managing <span className='nowrap'>laryngeal&nbsp;paralysis&nbsp;<FaArrowCircleRight className={styles.related_links_figure_icon} /></span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          {/* Treatment Options Content End */}
          
        </div>
      </section>

    </>
  )
}

export default Treatment