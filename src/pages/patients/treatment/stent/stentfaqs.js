import React, {useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA Custom Components
import AccordionContent from '../../../../components/AccordionContent'
import StentNav from '../../../../components/guidenav/StentNav'
import GuideNav from '@/components/GuideNav'
// !VA React Icons
import { FaPaw } from 'react-icons/fa'
// !VA Style modules
import * as styles from '../../../../styles/Light.module.scss'

const StentFaqs = () => {

  // const [activeIndex, setActiveIndex] = useState(0)
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  return (
    <>
      <NextSeo 
        title="Lar Par: Stent FAQs For Laryngeal Paralysis & GOLPP in Dogs"
        description="Get answers to frequently-asked questions about the stent procedure for laryngeal paralysis in dogs."
        canonical="https://larparlife.com/patients/treatment/stent/stentfaqs"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Stent FAQs For Laryngeal Paralysis & GOLPP in Dogs</h1>
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
            <h2 className={styles.topic_subhead_title}>Answers to Common Questions About Laryngeal Stents
            </h2>
          </div>
          <p className={styles.content_text}>Here are answers to a some questions we had before we decided to go ahead with the stent procedure for Miss&nbsp;B. This info came from veterinary websites, scientific publications and through direct interactions with veterinarians. We&rsquo;re not veterinarians. Always consult with a veterinary professional before making any decisions regarding the health of your companion animal. </p>
        </div>
      </section>  

      {/* Stent FAQs Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

            {/* FAQs Content Start */}
            <div className={styles.content_block}>
  
              <AccordionContent
                className='accordion__faqs'
                title="Is the stent procedure the best option for all animals with laryngeal paralysis?"
                index={1}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                  For older dogs with geriatric LarPar (GOLPP), the stent procedure has a lot of advantages. But for younger LarPar sufferers, tie&#8209;back surgery is still the preferred treatment for a variety of reasons. This is the way most people see it, but that may change in the coming years as more data about stents is available. The biggest concern about tieback surgery has always been aspiration pneumonia. If it turns out that a stent can significantly reduce the probably of AP, then people will have to reevaluate that position. 
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Why is it hard to find vets who will perform the stent procedure for LarPar? "
                index={2}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                  <p className='accordion__text'>It&rsquo;ll take time and effort to move this procedure into the mainstream because:</p>
                  <ul className='accordion__list'>
                    <li className='accordion__list-item'><FaPaw className={styles.content_list_item_svg}/>In the free market system, consumers drive change. Our goal is to create the demand that the veterinary community will need to supply. </li>
                    <li className='accordion__list-item'><FaPaw className={styles.content_list_item_svg}/>Veterinarians require training for new procedures but there&rsquo;s currently no continuing-education training is available for the stent procedure. </li>
                    <li className='accordion__list-item'><FaPaw className={styles.content_list_item_svg} />There&rsquo;s already a business model built around tie&#8209;back surgery that will need to be revisited.</li>
                  </ul>
                  <p className="accordion__text">Information and education are the key to moving this life-saving procedure forward. That&rsquo;s what this website is about.</p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="What does the stent treatment for laryngeal paralysis procedure cost? "
                index={3}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                  <p className='accordion__text'>
                    That depends on your location, but initial data shows that the cost of the laryngeal stent procedure runs about 25% of the cost of tie&#8209;back surgery or other surgery types. For more information see the <Link href='/patients/aboutlarpar/cost' className='link-dark'>Treatment Costs</Link> page.
                  </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="How much did you pay for Miss&nbsp;B's stent procedure? "
                index={4}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                  <p className='accordion__text'>
                    We paid $1400 in total to the veterinary team who did the procedure, about a third the cost of what we would have paid for tie-back. Miss&nbsp;B was only the second patient they had performed the procedure on. Their first patient was their own Great Dane, Josephine &mdash; which is quite a story you can read about on the <Link href='/stories' className='link-dark'>Stories</Link> page. Once the procedure becomes routine, the cost are expected to come down considerably. For more information, visit the <Link href='patients' className='link-dark'>Treatment Costs</Link> page.
                  </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Is there a recovery period after the laryngeal stent procedure?"
                index={5}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                  The biggest post-procedure concern is that the stent could dislodge itself and either be coughed out or migrate down into the trachea. This isn&rsquo;t critical if it does happen, but the stent would have to be retrieved and repositioned. The recovery regimen is designed to prevent that. </p>
                  <p className='accordion__text'>After Miss B&rsquo;s stent placement, she had two weeks of exercise restriction to prevent physical activity that could dislodge the stent. She was also given codeine to suppress spasmodic coughing that could dislodge the stent. There was also a medication to suppress mucus production, antibiotics to treat the mild aspiration pneumonia she already had prior to the procedure, and carprofen, which she was already on anyway for joint pain. By 4 weeks after the procedure she was off all the meds. Each DVM may have a different post-procedure regimen &mdash; there are as yet no established protocols.
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Are there any side-effects from the stent procedure? "
                index={6}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                  <p className='accordion__text'>After the stent procedure our Labrador Miss B clears her throat more than she did before she got LarPar, and she periodically tries to bring up mucus which is always swallowed and never results in sputum. This isn&rsquo;t a violent, spasmodic cough, but more like a gentle sporadic expectoration, and it hasn&rsquo;t resulted in aspiration pneumonia.</p>
                  <p className='accordion__text'>But the bottom line is that since the stent procedure Miss&nbsp;B has been getting lots of exercise, her muscle mass has returned, she has an excellent quality of life, and we we&rsquo;re back to taking her everywhere we go, even though her days riding in her motorcycle sidecar days are sadly over. So, besides the minor mucus issue and maybe a little halitosis, there have been absolutely negative side-effects.  </p>
                  <p className='accordion__text'></p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Does the stent procedure change the behavior of the animal?"
                index={7}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                    After the stent procedure, dogs lose the ability to bark. This isn&lsquo;s uncommon &mdash; tie-back and other surgeries also affect the ability to bark, some more than others. Since the laryngeal aperture is always open (either supported by the stent or through the tie-back of the laryngeal cartilage), dogs can&lsquo;t generate sufficient air pressure to vibrate the vocal folds. So although the dog pushes the air through the larynx as if to bark, no sound is produced except a quick burst of air. Our dog still performs the action of &lsquo;barking&rsquo;. We can hear her do it, even though the vocal folds don&lsquo;t vibrate to produce the vocalization.
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Are there any post-procedure restrictions for the animal?"
                index={8}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                  Many of the same restrictions that apply after tie-back surgery also apply to the stent procedure, i.e. no swimming and avoiding food that sheds small particles because they can be inhaled into the lungs. Also, elevating food/water dishes from floor level is recommended. The stent and tie-back procedures both carry a risk of <a href='https://www.petmd.com/dog/conditions/respiratory/aspiration-pneumonia-dogs' className='link-secondary' target="_blank" rel="noopener noreferrer">aspiration pneumonia</a> because they keep the laryngeal aperture open at all times, which means contaminants like bits of food or dirty water can enter the lungs and cause infection. The stent may actually be less prone to contaminant entry than tie-back, because the stent diameter may be narrower than the laryngeal aperture after tie-back surgery. Maybe a larger research study could address that question.
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Where can we get this procedure done? "
                index={9}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                  <p className='accordion__text'>This is a difficult question because we&rsquo;re afraid there are far too many people that want it and far too few providers. We can&rsquo;t publish names. Contact us via <a href="https://www.facebook.com/groups/laryngealstentfordogs" className="link-dark" target="_blank" rel="noreferrer noopener">our Facebook group</a> or the contact page and we may be able to help you find someone.
                  </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Where can I purchase a stent?"
                index={10}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                <p className='accordion__text'>
                  That information is out there if you look hard enough for it, but it is a <span className='emphasis'>very bad idea</span> for non-veterinarians to purchase these products directly from the manufacturer. How do we know? Because we, in desperation, did just that, and the product they sent us was 1) not the appropriate one for this procedure and 2) not the right size for Miss B. It cost us $250 and now it&rsquo;s not even heavy enough to be a paperweight. So don&rsquo;t do it. </p>
                  <p className='accordion__text'>Dogs come in all shapes and sizes and so do their larynxes, so using the wrong stent size pretty much guarantees that either it&rsquo;s too big for the airway or won&rsquo;t hold its position, both of which would require a second procedure to fix. 
                </p>
              </AccordionContent>

              <AccordionContent
                className='accordion__faqs'
                title="Can the procedure be performed by a non-veterinarian?"
                index={11}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}>
                  <p className='accordion__text'>
                    Absolutely, emphatically no. The procedure can NOT be performed by individuals who are not qualified, experienced, licensed veterinarians at a fully-equipped veterinary facility. The procedure requires special instruments, anesthesia, access to imaging, and the ability to use x-rays to take accurate measurements. However, since the procedure doesn&rsquo;t involve incisions or penetration of any tissue, it doesn&rsquo;t require surgical facilities or a surgical staff and could be performed by a qualified primary veterinarian in any adequately-equipped veterinary clinic.
                  </p>
                </AccordionContent>
  
                
                <p className={styles.content_text}>
                  If you have other questions, please send us an email with the Contact form or, better yet, join our <a href="https://www.facebook.com/groups/laryngealstentfordogs" className="link-dark" target="_blank" rel="noreferrer noopener">Facebook group</a> to stay on top of all the stent-related news.
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