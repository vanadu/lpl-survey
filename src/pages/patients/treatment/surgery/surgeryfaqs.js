import React, {useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA Custom Components
import AccordionContent from '../../../../components/AccordionContent'
import ShowMoreContent from '../../../../components/ShowMoreContent'
import GuideNav from '@/components/GuideNav'
// !VA React Icons
import { FaPaw } from 'react-icons/fa'
import SurgeryNav from '../../../../components/guidenav/SurgeryNav'
// !VA Style modules
import * as styles from '../../../../styles/Light.module.scss'

const StentFaqs = () => {

  // const [activeIndex, setActiveIndex] = useState(0)
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  const [activeIndex, setActiveIndex] = useState()

  return (
    <>
      <NextSeo 
        title="Lar Par: Surgery FAQs for Laryngeal Paralysis in Dogs"
        description="Explore frequently-asked questions about tieback and other surgery types for laryngeal paralysis in dogs."
        canonical="https://larparlife.com/patients/treatment/surgery/surgeryfaqs"
      />
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Surgery FAQs for Laryngeal Paralysis in Dogs</h1>
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
            <h2 className={styles.topic_subhead_title}>Frequently-Asked Questions About Surgery for Lar Par & GOLPP</h2>
          </div>
        </div>
      </section>  

      {/* Disclaimer Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* ShowMoreComponent content start */}
          <div className={styles.content_text}>
            <ShowMoreContent
              title='Read Important Disclaimer'
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore-content-text">
                <span className="showmore-content-space"></span>
                <p className="showmore-content-text">
                Our objective is to present information as non-veterinarians from the perspective of the patient, not to answer veterinary-technical questions. The responses to these FAQs are based on social media interactions, publicly-available research studies, and discussions we&lsquo;ve had with veterinary professionals. For answers to veterinary-technical questions, ask your veterinarian.
                </p>
              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}
          
        </div>
      </section>

      {/* FAQs Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

                      {/* FAQs Content Start */}
                      <div className={styles.content_block}>
              <AccordionContent
                className='accordion__faqs'
                title="Is tieback surgery safe or is it risky? "
                index={1}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                There&lsquo;s a level of risk involved in any veterinary or human medical procedure. All surgeries for canine laryngeal paralysis have statistically significant rates of complications and/or failure. It&lsquo;s much more helpful to frame the question in terms of <span className='semibold-italic'>risk factors</span> which will help you do a <span className='semibold-italic'>risk assessment</span> to help you make the best decision for your family and your companion based on your individual circumstances. For information about the risk factors involved in Lar Par surgery, see the <Link href='/patients/treatment/surgery' className='link-dark' rel="noopener noreferrer" target="_blank">About Surgery</Link> page.
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Is tieback the only kind of surgery for laryngeal paralysis in dogs?"
                index={2}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                No, there are different surgical treatments of Lar Par, but unilateral arytenoid lateralization (UAL or &lsquo;tieback&rsquo;) has been around the longest, is the most straightforward, and is taught at major veterinary teaching institutions. For those reasons, it&lsquo;s become the &lsquo;standard&rsquo; treatment for canine laryngeal paralysis. That doesn&lsquo;t mean it&lsquo;s the best, it just means it&lsquo;s the standard. For more information about the different surgery types for laryngeal paralysis in dogs, see the <Link href='/patients/treatment/surgery/surgerytypes' className='link-dark' rel="noopener noreferrer" target="_blank">Surgery Types</Link> page.
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Will tieback surgery cure my dog?"
                index={3}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                No, there is no cure for canine laryngeal paralysis. Tieback and other Lar Par surgery types don&lsquo;t cure the disease, they surgically alter the structure of the larynx so that air can pass by the paralyzed arytenoid cartilages, allowing the dog to breathe more or less normally. Each surgery type does this in a different way, but in each case the larynx itself is still paralyzed. For a better understanding of what each of these surgery types do, see the <Link href='/patients/treatment/surgery/surgerytypes' className='link-dark' rel="noopener noreferrer" target="_blank">Surgery Types</Link> page.
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Will my dog lead a normal life after tieback or any other Lar Par surgery?"
                index={4}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                If the surgery is successful and no post-operative complications appear, dogs are able to breathe normally and resume most of the activites they enjoyed before getting Lar Par. That may not mean they can return to their &lsquo;normal&lsquo; life. Some activities, in particular swimming, are generally not recommended after tieback surgery due to the risk of the dog inhaling unsterile water which can lead to life-threatening <a href="https://www.petmd.com/dog/conditions/respiratory/aspiration-pneumonia-dogs" className="link-dark" target="_blank" rel="noreferrer noopener">aspiration pneumonia</a>. For other surgery types, such as BVEAP, swimming is not seen as an aspiration pneumonia risk. For more information about BVEAP see the <Link href='/patients/treatment/surgery/surgerytypes' className='link-dark'>Surgery Types</Link> page.
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Do I have to change what I feed my dog after tieback or other Lar Par surgeries?"
                index={5}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                The general consensus is that foods which can shed small particles or create small, dry chunks when chewed are to be avoided. Small particles of food can be inhaled into the lungs and cause aspiration pneumonia. People approach this in different ways: some roll the food into meatballs while others consider it sufficient to soak food in water to make sure it doesn&lsquo;t shed particles. No all veterinarians agree on this and to date there&lsquo;s been no scientific research connecting food type and aspiration pneumonia risk. If you&lsquo;re concerned about it or if you suspect your dog has already had AP due to inhaled food, the meatball approach is probably the safest.
                </p>
                <p className='accordion__text'>Some surgery types, such as BVEAP, are reputed to have a much lower risk of aspiration pneumonia and consequently no special food requirements. For more information about different surgery types, see the <Link href='/patients/treatment/surgery/surgerytypes' className='link-dark' rel="noopener noreferrer" target="_blank">Surgery Types</Link> page.</p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Are there any other conditions I need to worry about after tieback or other Lar Par surgeries?"
                index={1}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                Recently, there&lsquo;s been a lot of talk on social media about reflux and a possible association with laryngeal paralysis. In people, it&lsquo;s called <a href="https://www.mayoclinic.org/diseases-conditions/gerd/symptoms-causes/syc-20361940" className="link-dark" target="_blank" rel="noreferrer noopener">Gastroesophageal Reflux Disease (GERD)</a> and is quite common. In Lar Par dogs, and particularly after tieback, once acidic esophageal fluid is regurgitated into the throat, it can be inhaled and cause life-threatening aspiration pneumonia. Currently, many people are reporting that veterinarians are prescribing antacid and anti-reflux medications like Pepcid (<a href="https://www.drugs.com/famotidine.html" className="link-dark" target="_blank" rel="noreferrer noopener">famotadine</a>) and Prilosec (<a href="https://www.drugs.com/omeprazole.html" className="link-dark" target="_blank" rel="noreferrer noopener">omeprazole</a>) to combat symptoms of reflux in Lar Par dogs.  
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Will tieback surgery help other symptoms of GOLPP such as hind-end weakness?"
                index={6}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                Tieback and other surgery types for laryngeal paralysis don&lsquo;t have any effect on hind-end weakness or other symptoms of GOLPP. Current surgeries for canine laryngeal paralysis are localized to the larynx itself. But many people have reported that the restoration of normal airflow to the lungs resulted in increased overall strength, including the hind end, as normal oxygen levels were restored. However, this did not result in any long-term abatement of the neurological decline or progression of the hind-end weakness.
                </p>
              </AccordionContent>

              {/* <AccordionContent
                className='accordion__faqs'
                title="SURGERYFAQQUESTION"
                index={1}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                SURGERYFAQANSWER
                </p>
              </AccordionContent> */}
                
              <p className={styles.content_text}>
                If you have other questions of go suggest a correction, please send us an email with the Contact form or via Facebook Messanger on our Facebook Group: <a href="https://www.facebook.com/groups/laryngealstentfordogs" className="link-dark" target="_blank" rel="noreferrer noopener">Facebook group</a>.
              </p>
              <p className={styles.content_text}>
                &nbsp;
              </p>
            </div>
            {/* FAQs Content End */}

        </div>
      </section>
      
    </>
  )
}

export default StentFaqs