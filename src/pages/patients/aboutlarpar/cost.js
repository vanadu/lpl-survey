import React from 'react'
import { useState } from 'react'
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
// !VA Components
import ShowMoreContent from '../../../components/ShowMoreContent'
import PatientsNav from '../../../components/guidenav/PatientsNav'
// !VA 2024 Guide navigation
import GuideNav from '@/components/GuideNav'
// !VA Images
import GolppDiagnosisTests from '../../../../public/img-golpp-diagnosis-tests.jpg'
// !VA Style modules
import * as styles from '../../../styles/Light.module.scss'

// !VA Receive the props from the AccordionContent tags.
//prettier-ignore



const Cost = () => {
  // !VA State for the ShowMoreContent component
  const [activeIndex, setActiveIndex] = useState(0)

  return (

    <>
      <NextSeo 
        title="Lar Par: Treatment Costs For Laryngeal Paralysis & GOLPP"
        description="Learn about the cost of laryngeal paralysis, including diagnosis, surgery, stent and treatment alternatives."
        canonical="https://larparlife.com/patients/aboutlarpar/cost"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />

      {/* Intro Section Head*/}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Treatment Costs For<span className='mobile-show-inline'><br /></span> Laryngeal Paralysis & GOLPP</h1>
          </div>
        </div>
      </section>

      {/* Submenu for the Patients pages */}
      <section className={styles.section}>
        {/* Submenu for the Patients pages */}
        <PatientsNav />
      </section>

      {/* Intro Section Subead*/}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_subhead}>
            <h2 className={styles.topic_subhead_title}>The Financial Realities of <span className='mobile-show-inline'><br /></span>Treating Your Dog&lsquo;s Lar Par
            </h2>
          </div>
        </div>
      </section>

      {/* Diagnosis Costs section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          {/* <hr className={styles.content_list_spacer}/> */}
            {/* Estimating the Bill  */}
            <div className={styles.content_block}>
              <h2 className={styles.content_head}>First Step: Definitive Diagnosis</h2>
              <figure className={styles.figure_float_right}>
                <Image src={GolppDiagnosisTests} className={styles.figure_image} alt="GOLPP Diagnosis Test"/>
                <figcaption className={styles.figure_caption}>
                  A specialist may order all or just some of these tests for a definitive diagnosis. 
                </figcaption>
              </figure>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}>
                  Your first step on your Lar Par journey is to get a definitive Lar Par diagnosis from a board-certified soft-tissue specialist.
                </p>
                <ShowMoreContent
                  title='Why do I need a specialist&lsquo;s Lar Par diagnosis?'
                  index={1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                   <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.content_text}>
                      Primary veterinarians recognize symptoms, but symptoms can have many causes. A trained soft-tissue specialist will tell you exactly how far advanced the laryngeal paralysis is and if there are any coexisting conditions like masses or structural problems in the throat that can affect the treatment. This information is required for any veterinary-medical procedure, i.e. surgery or stent. Plus, misdiagnoses for Lar Par are not uncommon because there are so many conditions that can present the same symptoms. We know of one case where the dog didn&lsquo;t have Lar Par, but rather just a piece of bark lodged up her nose! 
                    </p>
                    <span className={styles.showmore_content_space}></span>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <h3 className={styles.content_subhead}>Cost of Laryngeal Paralysis Diagnosis</h3>
              
              <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <span className='bold'>$240</span> for the laryngeal paralysis exam by a soft-tissue specialist.&nbsp;
                  {/* Exam details */}
                  <ShowMoreContent
                    title='Lar Par exam cost details'
                    index={2}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                       <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                         <p className={styles.content_text}>
                          That&rsquo;s what we paid in 2021 at a specialist near Philadephia. It included anesthesia and the visual exam and/or laryngoscopy. Light anesthesia ensures that the dog&rsquo;s larynx is relaxed through the exam. Fees can very greatly depending on region and tend to be much higher in large metropolitan areas, particularly on the West Coast of the U.S.
                        </p>
                      </div>

                  </ShowMoreContent>
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <span className='bold'>$171</span> for a minimum of two X-rays (chest and throat)&nbsp;
                  {/* X-ray details */}
                  <ShowMoreContent
                    title='X-ray cost details'
                    index={3}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className='showmore-content-text'>
                    <span className={styles.showmore_content_space}></span>
                     <p className={styles.content_text}>
                      That&rsquo;s what we paid in 2021 for three views. Some specialists may require more views depending on the report received from your primary veterinarian. If you have the radiography done by your primary veterinarian and emailed to the specialist, two views can cost anywhere from $90 to $150, with an additional $40-$90 per view. You should make it clear beforehand that the X-rays are for the specialist, otherwise your primary vet might bill you to interpret the X-rays, which isn&rsquo;t what you want. If the specialist does the radiography on-site you can expect to pay considerably more.
                    </p>

                    </div>
                  </ShowMoreContent>
                </li>
              </ul>

              
            </div>



        </div>
      </section>


      {/* Veterinary Procedures Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          <div className={styles.content_block}>
              <h2 className={styles.content_head}>Laryngeal Paralysis Treatment Costs</h2>
              <p className={styles.content_text}>
                There are currently two veterinary-medical options for laryngeal paralysis treatment. One is <span className='italic'>surgery</span> to modify the structure of the larynx to allow air to pass through the paralyzed larynx. The other is the placement of a <span className='italic'>stent</span>, which is synthetic prothesis that supports the paralyzed larynx or provides an air passage through it to restore normal breathing. 
              </p>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}>
                <span className='bold'>Surgery</span> &mdash; The average cost of laryngeal paralysis surgery is <span className='bold'>$4500</span> in the U.S and <span className='bold'>&euro;2000</span> in Europe.&nbsp;
                </p>
                <ShowMoreContent
                  title='Tie-back surgery cost details'
                  index={4}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                    <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                      <p className={styles.content_text}>
                      The most common surgery type for laryngeal paralysis is unilateral arytenoid lateralization (UAL, commonly refered to as &lsquo;tie-back&rsquo;) surgery. The cost of tie-back surgery varies depending on the country and region. In large metropolitan areas it can be three times what it might cost in less populated regions. Surgery for laryngeal paralysis is available in Germany for on average &euro;2000. In the U.S. Midwest, at least one surgeon offers it for about $2000, while in Seattle, San Francisco, and L.A. we&rsquo;ve heard of it costing well over $8000. In the Maryland area we received an average quote of $4400. This includes the cost of surgery, anesthesia, and the initial course of medications. However, it doesn&rsquo;t include treatment for post-op complications should they arise &mdash; and it&lsquo;s not uncommon for them to arise. You can call around to find the lowest price, but that doesn&rsquo;t mean you&rsquo;re getting the best deal. Some surgeons have more experience than others, and it&rsquo;s best to find the one with experience and a good track record rather than the cheapest one.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}>
                  <span className='bold'>Stent</span> &mdash; The stent procedure costs about <span className='bold'>$1500</span> in the U.S. and about <span className='bold'>&euro;1000</span> in Europe.&nbsp;
                </p>
                <ShowMoreContent
                  title='Laryngeal stent cost details'
                  index={5}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                    <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.content_text}>
                    The laryngeal stent procedure costs much less than the surgical options. There are still very few providers in the U.S. so it&rsquo;s hard to get a read on pricing. We paid $1400 for Miss B&rsquo;s stent including all medications and imaging, and we were this provider&rsquo;s first commercial stent client. The cost is likely to come down once the procedure became routine. In Germany and France, where some clinics already offer stent placement as routine laryngeal paralysis treatment, the cost is approximately 1000&euro;. So the stent treatment costs on average somewhere around a quarter of the cost of surgery. This assumes that the stent doesn&rsquo;t migrate after placement and no repeat procedure is required. To learn why this might happen, see the <Link href='/patients/treatment/stent' className='link-dark'>About Laryngeal Stents</Link> page in the <Link href='/patients/treatment' className='link-dark'>Treatment Options</Link> section. Just like with suture failure in the surgical option, if the stent migrates a repeat procedure is required to replace or adjust the stent. The repeat procedure can cost as much as the original implant, less the cost of the stent itself.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>
              {/* ShowMoreComponent content end */}
              <p className={styles.content_text}>
                As of May 2025 discussing costs for the stent procedure in the U.S. is a mostly moot point since there are so few providers. We hope that will change. If you&rsquo;d like to know if there is a provider in your area, feel free to contact us via the <Link href="/contact" className='link-dark'>Contact page</Link> or join our <a href="https://www.facebook.com/groups/laryngealstentfordogs" className='link-dark' target="_blank" rel="noreferrer noopener">Facebook group</a>. 
              </p>
          </div>

        </div>
      </section>

      {/* Pharmaceutical and Naturopathic Remedies */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          <div className={styles.content_block}>
            <h2 className={styles.content_head}>Pharmaceutical and Naturopathic Approaches</h2>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <p className={styles.showmore_content_inline}>
                The cost of pharmaceutical and naturopathic remedies runs the gamut from under $10 for 30 capsules for Doxepin and Gabapentin to naturopathic supplements that can cost upwards of $50 for a one-month supply.&nbsp;
              </p>
              <ShowMoreContent
                title='Medicinals&nbsp;cost&nbsp;details'
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                  <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.content_text}>
                    There is no science-based evidence that any pharmaceutical or medicinal treatment improves quality of life for laryngeal paralysis patients. Having said that, there is large body of testimonials from trusted veterinary sources, non-veterinary experts, and dog owners who report positive results for their particular dog and case. The fact is that once laryngeal paralysis reaches the bilateral stage, people will understandably do anything to help their dog. But before purchasing any pharmaceutical or naturopathic product, you should be aware that your dog will have to take it for some time before you see any effect, and you may not <span className='italic'>ever</span> see an effect, at which point you&rsquo;ll have to try something else. All pharmaceutical/naturopathic remedies are on a trial-and-error basis, and if you determine that any of them help your dog, you&rsquo;re locked in to paying for that substance indefinitely, which can become very expensive. You can find more information about pharmaceutical and naturopathic/medicinal products in the <Link href="/patients/treatment" className='link-dark'>Treatment Options</Link> section.
                  </p>
                </div>
              </ShowMoreContent>
            </div>
            {/* ShowMoreComponent content end */}
          </div>          

        </div>
      </section>

      {/* Summary Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.content_block}>
              <h2 className={styles.content_head}>Laryngeal Paralysis Cost Summary</h2>
              <p className={styles.content_text}>
                In the U.S. a definitive diagnosis for about $500 is required for surgery or stent. After that, surgery runs on average $4500, stent around $1500. Costs vary greatly by country, region and provider. Until the stent procedure is widely available, surgery in the U.S. will cost more than the stop-treatment amount for the average dog owner, which was most recently estimated at $1700. In Europe, surgery is significantly less expensive, so it stands to reason that more people will choose the surgical path. The pharmaceutical and naturopathic alternatives may alleviate some symptoms but will eventually end in end-of-life care and euthanasia. The laryngeal stent procedure will bring the cost of LarPar treatment below the $1700 stop-treatment threshold and save the lives of thousands of otherwise healthy dogs.
              </p>
            </div>
        </div>
      </section>




    </>
    
  )
}

export default Cost