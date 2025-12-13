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

const Managing = () => {

  // !VA State for the ShowMoreContent component
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>   
      <NextSeo 
        title="Lar Par: Managing Laryngeal Paralysis Without Surgery"
        description="Learn about managing laryngeal paralysis in dogs with behavioral modifications and/or medications."
        canonical="https://larparlife.com/patients/treatment/managing"
      />
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          <div className={styles.topic_head}>
              <h1 className={styles.topic_head_title}>Managing Laryngeal Paralysis in Dogs Without Surgery</h1>
          </div>
            {/* Submenu for the Patients pages */}
            {/* <PatientsNav /> */}
          <div className={styles.topic_subhead}>
              <h2 className={styles.topic_subhead_title}>Alternative Approaches to &nbsp;Canine&nbsp;Laryngeal&nbsp;Paralysis</h2>
          </div>
        </div>
      </section>


      {/*  */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Treatment vs Management Content Start */}
          <div className={styles.content_block}>

            <h2 className={styles.content_head}>Treatment vs. Management</h2>
            <p className={styles.content_text}>
              With Lar Par, it&rsquo;s important to distinguish between <span className='semibold-italic'>treatment</span> and <span className='semibold-italic'>management</span>. <span className='italic'>Treatment</span> means making changes within the larynx to restore airflow past the paralyzed cartilage. <span className='italic'>Managing</span> means modifying the behavior of the dog to help him or her live with the constricted airflow and minimize the risk of a life-threatening respiratory crisis.&#8203;&nbsp;  
              </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>

              <ShowMoreContent
                title='Why is this controversial?'
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    Some people believe that laryngeal paralysis can&rsquo;t be managed because there is just no pharmaceutical or medicinal remedy for the oxygen depletion resulting from a paralyzed larynx. Others say the biggest danger isn&rsquo;t the constricted breathing itself (except in very late-stage bilateral laryngeal paralysis), but rather the <span className='semibold-italic'>respiratory crisis</span> that results from certain behaviors. So the goal of managing LarPar is to restrict those behaviors that can induce a life-threatening respiratory crisis.&#8203;&nbsp;It&lsquo;s controversial because of the risk of a suffocation event, which can never be ruled out. A breathing emergency ending in suffocation is traumatic for any people present and often ends in painful death for the dog. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}

          </div>
          {/* Treatment vs Management Content End */}

        </div>
      </section>

      {/*  */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          
          {/* Behaviors To Avoid Content Start*/}
          <div className={styles.content_block}>

            <h2 className={styles.content_head}>Behaviors to Avoid in Dogs with Laryngeal&nbsp;Paralysis</h2>
            
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <p className="showmore-content-inline">
                When dogs get excited, stressed, or exert themselves through exercise, they consume more oxygen. But laryngeal paralysis limits how much oxygen they can get. Keeping dogs calm and restricting exercise helps keep a balance between how much oxygen they can pull through the paralyzed larynx and how much oxygen their body requires.&#8203;&nbsp; 
              </p>
              <ShowMoreContent
                title='Why is getting excited dangerous?'
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                  When dogs consume more oxygen they breathe harder. But no matter how hard they try, the constricted laryngeal aperture won&rsquo;t allow more air to pass through. This results in a cycle of stress whereby the harder they try to breathe, the more oxygen they consume trying to breathe, which makes them try even harder and consume even more oxygen. At some point, their lungs are pulling so hard that the laryngeal cartilages to get sucked inward, which can close up the airway completely and result in a respiratory crisis, cyanosis, and asphyxiation. Taking medications to avoid those behaviors helps by reducing the potential for crisis situations. So although medications don&rsquo;t increase the amount of oxygen LarPar dogs get, they can help LarPar dogs remain calm so that stress-related crisis situations don&rsquo;t occur. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}

          </div>
          {/* Behaviors To Avoid Content Emd*/}

        </div>
      </section>

      {/*  */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          
          {/* Medications and Accupuncture Start */}
          <div className={styles.content_block}>

            <h2 className={styles.content_head}>How Medications and Accupuncture May Help</h2>
            
            <p className={styles.content_text}>
                There&rsquo;s no <span className='semibold-italic'>scientific</span> evidence that pharmaceuticals, naturopathic medicines, or accupuncture have any effect on the lifespan or quality of life of canine laryngeal paralysis patients. But there are a lot of people &mdash; veterinarians included &mdash; who say that medications help some dogs live better with laryngeal paralysis.&#8203;&nbsp;
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>

              <ShowMoreContent
                title='How might medications help?'
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    Taking medications to keep LarPar dogs calm may help by reducing the amount of oxygen the dog needs, which minimizes the potential for crisis situations. So although medications don&rsquo;t increase the amount of oxygen they actually <span className='semibold-italic'>get</span>, they can help LarPar dogs remain calm, reduce stress, and limit the amount of oxygen they <span className='semibold-italic'>need</span>, so that stress-related crisis situations don&rsquo;t occur.
                  </p>
                </div>
              </ShowMoreContent>

              <ShowMoreContent
                title='How might accupuncture help?'
                index={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    Accupuncture is believed to work by <a href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/acupuncture" className="link-dark" target="_blank" rel="noreferrer noopener">stimulating the nervous system</a>. Since laryngeal paralysis is a neuromuscular condition, it&rsquo;s possible that accupuncture could stimulate the nerves that govern the muscles of the larynx. Accupuncture has been reported to help the clinical symptoms of laryngeal paralysis but there has been no scientific data to confirm positive results. Consult with your veterinarian to find a licensed or certified accupuncturist.  
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}

          </div>
          {/* Medications and Accupuncture End */}

        </div>
      </section>


      {/*  */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          
          {/* Pharmaceuticals Content Start*/}
          <div className={styles.content_block}>


            <h2 className={styles.content_head}>Pharmaceuticals</h2>
              <p className={styles.content_text}>
                While no medications  have been developed specifically for laryngeal paralysis in dogs, some veterinarians prescribe pharmaceuticals developed for humans to help manage laryngeal paralysis. The use of these drugs is strictly <a href="https://www.fda.gov/animal-veterinary/resources-you/ins-and-outs-extra-label-drug-use-animals-resource-veterinarians" className="link-dark" target="_blank" rel="noreferrer noopener">off-label</a>, as specified by the U.S. Food and Drug Administration.  
              </p>
              <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Doxepin&#8203;&nbsp;</span>
                  <ShowMoreContent
                    title='What does doxepin do for LarPar?'
                    index={5}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                      <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                        <p className={styles.content_text}>
                          Doxepin is a <a href="https://www.healthline.com/health/depression/tricyclic-antidepressants-tcas#list" className="link-dark" target="_blank" rel="noreferrer noopener">tricyclic antidepressant</a> developed to treat depression in humans. Many people say it has helped mitigate the symptoms of mild to moderate LarPar in their dogs, while others say it had no effect at all. Doxepin is a <a href="https://www.webmd.com/mental-health/what-are-psychotropic-medications" className="link-dark" target="_blank" rel="noreferrer noopener">psychotropic drug</a> whose use is controversial because 1) no one can say for sure how it works or why it has no effect on some dogs and 2) no one knows how it affects a dog&rsquo;s mental state. <a href="https://larparpets.com/doxepin-for-dogs-with-laryngeal-paralysis/" className="link-dark" target="_blank" rel="noreferrer noopener">Learn more...</a>
                        </p>
                      </div>

                  </ShowMoreContent>
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <span className='bold'>Gabapentin</span>&#8203;&nbsp;
                  {/* X-ray details */}
                  <ShowMoreContent
                    title='What does gabapentin do for LarPar?'
                    index={6}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className='showmore-content-text'>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.content_text}>
                      Gabapentin is a pharmaceutical <a href="https://en.wikipedia.org/wiki/Anticonvulsant" className="link-dark" target="_blank" rel="noreferrer noopener">anticonvulsant</a> developed for use in humans and prescribed in dogs to treat seizures, anxiety, and nerve pain, particularly arthritis-related joint pain. One side effect of gabapentin in dogs is sedation, which is desirable in LarPar dogs to help manage excitability or stress that can result in a respiratory crisis. Gabapentin is available for humans in a liquid formula containing xylitol which is unsafe for dogs, so never administer it to a dog without a prescription from your veterinarian. <a href="https://www.petmd.com/dog/care/gabapentin-dogs-what-you-need-know" className="link-dark" target="_blank" rel="noreferrer noopener">Learn&nbsp;more...</a>
                    </p>
                    </div>
                  </ShowMoreContent>
                </li>
              </ul>
          </div>
          {/* Pharmaceuticals Content End */}

        </div>
      </section>


    </>
  )
}

export default Managing