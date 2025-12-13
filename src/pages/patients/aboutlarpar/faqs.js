import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

// !VA Custom Components
import AccordionContent from '../../../components/AccordionContent'

import GuideNav from '@/components/GuideNav'
import PatientsNav from '@/components/guidenav/PatientsNav'
// !VA Style modules
import * as styles from '../../../styles/Light.module.scss'


const Faqs = () => {

  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)
  
  return (
  <>
    <NextSeo 
      title="Lar Par: FAQs About Laryngeal Paralysis & GOLPP in Dogs"
      description="Find answers to a wide range of frequently-asked questions about laryngeal paralysis in dogs"
      canonical="https://larparlife.com/patients/aboutlarpar/faqs"
    />
      <GuideNav />
    {/* Intro Section Head*/}
    <section className={styles.section}>
      <div className={styles.section_content}>
        <div className={styles.topic_head}>
          <h1 className={styles.topic_head_title}>Laryngeal Paralysis In Dogs Frequently&nbsp;Asked&nbsp;Questions</h1>
        </div>
      </div>
    </section>

    {/* Submenu for the Patients pages */}
    <section className={styles.section}>
      {/* Submenu for the Patients pages */}
      <PatientsNav />
    </section>

    {/* Intro Section Subhead*/}
    <section className={styles.section}>
      <div className={styles.section_content}>
        <div className={styles.topic_subhead}>
          <h2 className={styles.topic_subhead_title}>Answers to Common Questions About&nbsp;<span className='mobile-hide-inline'>Canine</span> Lar Par and GOLPP
          </h2>
        </div>
      </div>
    </section>

    {/* FAQs Section */}
    <section className={styles.section}>
      <div className={styles.section_content}>
        <div className={styles.content}>
          <p className={styles.content_text}>Here are some answers to frequently-asked questions about laryngeal paralysis in dogs. This info comes from veterinary websites, scientific publications, through interactions with veterinarians, from our own experience with laryngeal paralysis and the stent implant in our dog. We&rsquo;re not veterinarians. Always consult with a veterinary professional before making any decisions regarding the health of your companion. </p>
          <AccordionContent
            className='accordion__faqs'
            title='Can laryngeal paralysis in dogs be&nbsp;cured?'
            index={1}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>There&rsquo;s no cure for laryngeal paralysis in dogs. There are veterinary-medical procedures (i.e. laryngeal stent and different kinds of surgery) that can restore normal breathing, and there are medications that may be able to help with your dog&rsquo;s quality of life. But there is no treatment or medication that will restore the function of the larynx to its pre-paralysis condition.  </p>
            <div className="modal-icon-block">
              <div className="modal-icon-block-icons">
              </div>
            </div>
          </AccordionContent> 

          <AccordionContent
                className='accordion__faqs'
                title='How many dogs get laryngeal paralysis?'
                index={2}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}
                >
                <p className='accordion__text'>
                  Nobody knows for sure, but we agree with people who say the actual numbers are much higher than generally assumed. Some people say 1000 cases annually in the US, some say 5000. We think it&rsquo;s a lot more, because statistics indicate most people with LarPar dogs choose euthanasia over expensive tie-back surgery and that&rsquo;s the end of it. So there are untold thousands of cases in the &lsquo;dark zone&rsquo; &mdash; there&rsquo;s no way to get any data about why the dog was euthanized because there was no confirmed diagnosis. We&rsquo;ll have a blog post about this topic soon.
                  </p>
              </AccordionContent> 

          <AccordionContent
            className='accordion__faqs'
            title='What happens if I don&rsquo;t do anything?'
            index={3}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>If you don&rsquo;t do anything, your dog&rsquo;s condition will worsen and he or she will eventually not <be></be> able to get enough air to sustain life. There&rsquo;s no telling how long this could take. In our case, our dog was 11 before the first symptoms appeared, and it was 2&frac12; years before she reached end-stage. The first 18 months were manageable, and it wasn&rsquo;t until the last two months that we started asking ourselves whether it was time for us to let her go. But your case may be different so we can only say this: if your dog has early stage laryngeal paralysis, there&rsquo;s not much you can do except prepare yourself for what&rsquo;s to come. You must have a game plan for when it starts affecting your dog&rsquo;s quality of life. Because if your dog stays otherwise healthy, the laryngeal paralysis <span className='italic'>will</span> progress and you <span className='italic'>will</span> eventually have to take some action.</p>
          </AccordionContent> 

          <AccordionContent
            className='accordion__faqs'
            title='How bad does laryngeal paralysis in dogs&nbsp;get?'
            index={4}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>We can only say it was very difficult to watch our beloved companion struggle to breathe. She suffered anxiety, extreme exercise intolerance, nosebleeds, and general weakness, and she couldn&rsquo;t be outside for more than a few minutes at a time.&nbsp;<a href="https://youtu.be/2S_UO21AiHY" className='link-dark' target="_blank" rel="noreferrer noopener">This video of Miss B </a>was taken a few days before the date we had set to euthanize her, but fortunately, we found a stent provider at the last minute. Our advice is to choose now whether you will 1) do a veterinary procedure or 2) try to manage it until end-of-life. If you choose the former, start preparing now because there are a lot of decisions and it&rsquo;s not cheap. If you choose the latter, be aware that it&rsquo;s really distressing.</p>
          </AccordionContent> 
          
          <AccordionContent
            className='accordion__faqs'
            title='Can my primary vet help me manage my dog&rsquo;s laryngeal paralysis?'
            index={5}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>Some primary veterinarians have more experience with laryngeal paralysis than others, but there&rsquo;s very little your vet can do besides prescribing medications that might or might not have any benefit for your dog. Doxepin, gabapentin, acupuncture, massage, herbal extracts, CBD oil, and other pharmaceutical and naturopathic treatments are things people claim to have good results with, but there is no scientific evidence that they work. Having said that, the DVM who placed Miss B&rsquo;s stent prescribes Doxepin for laryngeal paralysis and has observed positive effects in some &mdash; but not all &mdash; dogs, and we trust her judgment. For more information see the <Link href='/patients/treatment/managing' className='link-dark' rel="noopener noreferrer" target="_blank">Managing LarPar</Link> page in the <Link href='/patients/treatment' className='link-dark' rel="noopener noreferrer" target="_blank">Treatments</Link> section.</p>
          </AccordionContent>

          <AccordionContent
            className='accordion__faqs'
            title='How can I be sure my dog has larygeal paralysis?'
            index={6}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>You will need to see a soft-tissue specialist to get a definitive diagnosis. Your primary veterinarian should be able to refer you to one in your area. It can&rsquo;t hurt to reach out to other veterinarians if your primary can&rsquo;t give you a specific recommendation. The  <a href="https://online.acvs.org/acvsssa/rflssareferral.query_page?P_VENDOR_TY=VETS" className='link-dark' target="_blank" rel="noreferrer noopener">American College of Veterinary Surgeons website</a> has a page where you can search their database for veterinary surgeons by U.S. state. Once you&rsquo;ve found one, it&rsquo;s always good to seek recommendations either through local veterinarians or social media.</p>
          </AccordionContent>
          
          <AccordionContent
            className='accordion__faqs'
            title='How much does treatment for laryngeal paralysis cost?'
            index={7}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>There&rsquo;s no simple answer to this question. Surgery will cost between $3,000 and $6000 in the US or &euro;2000 in Europe, and that doesn&rsquo;t cover the cost of potential complications. The stent implant procedure should cost about a quarter of that, if you can find someone to do it. Pharmaceuticals and naturopathic treatments can cost whatever you are willing to spend. For more information, see the <Link href='/patients/aboutlarpar/cost' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Costs</Link> page in the <Link href='/patients/' className='link-dark' rel="noopener noreferrer" target="_blank">Patients</Link> section.</p>
          </AccordionContent>

          <AccordionContent
            className='accordion__faqs'
            title='Are there any other health risks associated with laryngeal paralysis?'
            index={8}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>The greatest health risk associated with laryngeal paralysis is aspiration pneumonia (AP), which is caused by inhaling contaminants such as food particles or unsterile liquids into the lungs, which then become infected. This can happen because instead of opening and closing in a normally functioning larynx, the laryngeal cartilages become paralyzed in a nearly-closed position, whereby a small slit-shaped opening between them stays open all the time. It&rsquo;s barely large enough to breathe through, but it is big enough to allow contaminants to pass into the trachea and travel to the lungs and become infected. Aspiration pneumonia is a serious condition that in most cases can be successfully treated with antibiotics, if it is identified and treated in time.</p>
          </AccordionContent>

          <AccordionContent
            className='accordion__faqs'
            title='Is my senior dog too old for surgery?'
            index={9}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>Age itself isn&rsquo;t a disease but it is a factor. While older dogs do have a somewhat higher risks of complications from surgery, it&rsquo;s really not about age but rather about quality of life. There is a cost/benefit involved, not just financially but also in terms of the toll any potential complications might take on your dog&rsquo;s remaining quality of life. With laryngeal paralysis the animal is often otherwise perfectly healthy, and that&rsquo;s really more important than numerical age. For more information, see the <Link href='/patients/aboutlarpar/cost' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Costs</Link> page in the <Link href='/patients/' className='link-dark' rel="noopener noreferrer" target="_blank">Patients</Link> section. </p>
          </AccordionContent>

          <AccordionContent
            className='accordion__faqs'
            title='Why does my primary vet advise against surgery?'
            index={10}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>Some people claim that primary veterinarians advise against surgery because they don&rsquo;t know enough about laryngeal paralysis. We think some people say that because they just don&rsquo;t know anything about being a vet. One good reason a primary veterinarian might recommend against surgery is because they see the aftermath of it every day &mdash; the secondary infection, the aspiration pneumonia, the ripped stiches, and most heartbreaking, the dogs that live another 4 months after surgery just to suffer horribly and die from cancer or kidney disease. We discuss this topic in detail in an upcoming blog post.</p>
          </AccordionContent>

          
          <p className={styles.content_text}>
            These are just a few of the many questions you might have about the very complex topic of laryngeal paralysis in dogs. We believe a lot of these questions will become moot once the stent procedure becomes routine. An affordable, non-surgical, minimally-invasive veterinary procedure for laryngeal paralysis will fundamentally change the cost-benefit calculus for people of all income levels and eliminate the need for pharmaceutical/medicinal approaches that have questionable outcomes. 
          </p>


        </div>
      </div>
    </section>
  </>
  )
}


export default Faqs