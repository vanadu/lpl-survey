import React from 'react'
import { useState, useRef, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
// import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

// !VA React Tooltip
import 'react-tooltip/dist/react-tooltip.css'
// !VA React Icons
import { FaPaw } from 'react-icons/fa'

// !VA Custom Components
import PatientsNav from '../../components/guidenav/PatientsNav'
import ShowMoreContent from '../../components/ShowMoreContent'
import AccordionContent from '../../components/AccordionContent'
import GuideNav from '@/components/GuideNav'
// !VA Images
import MissBStentLink from '../../../public/img-miss-b-stent-link.jpg'
import Treats2 from '../../../public/img-treats-02.jpg'
import Treats3 from '../../../public/img-treats-03.jpg'
// !VA Style modules
import * as styles from '../../styles/Light.module.scss'

// !VA Receive the props from the AccordionContent tags.
//prettier-ignore


// !VA 2024
import { GuidenavContext } from '@/components/Contexts'





const Patients = () => {

  // !VA Index of the current ShowMore 
  const [activeIndex, setActiveIndex] = useState(0)
  // !VA Index of the current Accordion block
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  // !VA 2024 working with contexts
  // const foo = useContext(GuidenavContext)



  return (
    <>
      <NextSeo 
        title="Dog Lover's Guide to Canine Laryngeal Paralysis & GOLPP"
        description="Straight talk about laryngeal paralysis in dogs including costs, surgery, treatment alternatives and FAQs."
        canonical="https://larparlife.com/patients"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />

      {/* Intro Section Head */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Dog Lover&rsquo;s Guide to <span className="mobile-show-inline"><br /></span> <span className="mobile-hide-inline">Canine</span> Laryngeal Paralysis &amp; GOLPP</h1>
          </div>
        </div>
      </section>

      {/* Submenu for the Patients pages */}
      <section className={styles.section}>
        <PatientsNav />
      </section>

      {/* Intro Section Subhead */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_subhead}>
            <h2 className={styles.topic_subhead_title}>The Straight Truth About <span className="mobile-show-inline"><br /></span> Lar Par and GOLPP in Dogs
            </h2>
          </div>
        </div>
      </section>  

      {/* What Is Laryngeal Paralysis Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <h2 className={styles.content_head}>What Is Laryngeal Paralysis?</h2>
          <p className={styles.content_text}>
            Here&rsquo;s the thing about about laryngeal paralysis (Lar Par) and geriatric-onset laryngeal paralysis and polyneuropathy (GOLPP) &mdash; <span className="semibold">your dog might be perfectly healthy</span>. Liver, heart, all the vital organs are in tip-top working order. Your dog has lots of energy and wants to run, play and enjoy life. The problem is that the nerves that control two little muscles in the throat, the ones the dog uses to bark, stop working. Instead of opening and closing, the voice box (or <span className='italic'>larynx</span>) becomes paralyzed and stops letting air through. 
          </p>

          {/* ShowMoreComponent content start */}
          {/* Is there a cure for... */}
          <div className={styles.content_text}>

            <ShowMoreContent
              title='Is there a cure for laryngeal paralysis in dogs?' 
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className={styles.showmore_content_block}>
              <span className={styles.showmore_content_space}></span>
                <p className={styles.showmore_content_inline}>
                There is no known cure for canine laryngeal paralysis &mdash; it&lsquo;s a neurological disease that doesn&lsquo;t get better on its own.  It&rsquo;s a progressive condition, meaning it gets worse over weeks, months or years&nbsp;&mdash; it&rsquo;s not possible to predict how it will progress. In younger dogs, it can be hereditary. On older dogs, it&lsquo;s generally associated with age-related neurological decline. For more information about the causes of laryngeal paralysis in dogs, see the <Link href='/patients/aboutlarpar' className='link-dark' rel="noopener noreferrer" target="_blank">Crash Course in Laryngeal Paralysis</Link> section.
                </p>

              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}

          {/* ShowMoreComponent content start */}
          {/* How can I help my dog with... */}
          <div className={styles.content_text}>

            <ShowMoreContent
              title='How can I help my dog with laryngeal paralysis?' 
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className={styles.showmore_content_block}>
              <span className={styles.showmore_content_space}></span>
                <p className={styles.showmore_content_inline}>
                  It boils down to this:
                </p>
                <ul className={styles.content_list_no_bullet}>
                  <li className={styles.content_list_item}>
                    <FaPaw className={styles.content_list_item_svg}/>There are surgical treatments for laryngeal paralysis but they cost a lot of money and there is risk involved for the dog. </li>
                  <li className={styles.content_list_item}>
                    <FaPaw className={styles.content_list_item_svg}/>There&rsquo;s a non-surgical, much more affordable stent treatment but as of early 2025 finding a veterinarian in the US or UK to place a laryngeal stent is difficult.
                  </li>
                  <li className={styles.content_list_item}>
                    <FaPaw className={styles.content_list_item_svg}/>Pharmaceutical, naturopathic, or alternative treatments or lifestyle modifications could  <span className='italic bold'>prolong</span> life, but they all result in a decreased <span className='italic bold'>quality</span> of life. </li>
                </ul>
              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}

          {/* ShowMoreComponent content start */}
          {/* Where can I get reliable information about */}
          <div className={styles.content_text}>
            <ShowMoreContent
              title='Where can I get up-to-date, reliable information?'
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore-content-text">
                <span className={styles.showmore_content_space}></span>
                <p className="showmore-content-text">
                  First you&rsquo;ll want to talk to your primary veterinarian for a recommendation based on your dog&lsquo;s breathing and overall health condition. Keep in mind that primary veterinarians are generally not trained or equipped to make a Lar Par definitive diagnosis, and misdiagnoses aren&lsquo;t uncommon. 
                </p>
                <span className={styles.showmore_content_space}></span>
                <p className="showmore-content-text">
                  For a definitive diagnosis, make an appointment with a board-certified soft-tissue specialist. You can find one in your area by following the Find a Surgeon link on the <a href="htttps://acvs.org" className="link-dark" target="_blank" rel="noreferrer noopener">American College of Veterinary Surgeons</a> website. The specialist&lsquo;s diagnosis is critical because it can tell you what stage the disease is in. You&lsquo;ll need that when you start thinking about treatment options moving forward. 
                </p>
                <span className={styles.showmore_content_space}></span>
                <p className="showmore-content-text">
                  For general information about laryngeal paralysis, our website is a great place to start because, in addition to current information compiled from various reliable sources, we&lsquo;ve also included up-to-date information about a newer, minimally-invasive treatment option &mdash; the laryngeal stent &mdash; that you won&lsquo;t find on other websites. 
                </p>
              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}
            
        </div>
      </section>

      {/* Path Forward Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <h2 className={styles.content_head}>Choosing A Path Forward</h2>
          <p className={styles.content_text}>
            If your dog has laryngeal paralysis or GOLPP, you have some tough decisions to make. We&rsquo;ve been there and understand how hard it is to see a beloved companion struggle to breathe. The most important thing you can do is inform yourself and develop a game plan moving forward.  
          </p>
          <p className={styles.content_text}>
            What you do now depends on: 
          </p>
          <ul className={styles.content_list_no_bullet}>
            <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
              How much money you can spend on your dog&rsquo;s treatment.</li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
              How long you guess your dog might stay healthy after treatment.
            </li>
            <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
              How much risk you&rsquo;re willing to subject your dog to during and after treatment.</li>
          </ul>
          <p className={styles.content_text}>
            Those are three critical factors that will inform your decision process, so take a moment to decide which of these factors best reflect your situation:
          </p>
          {/* Generic container for the Choices accordion content */}
          <div className={styles.container}>
            <AccordionContent
              className='accordion-title'
              title='Money Is No Object'
              index={1}
              activeAccordionIndex={activeAccordionIndex}
              setActiveAccordionIndex={setActiveAccordionIndex}
              >
              <p className='accordion__text'>
                If money is no object, you will probably want to focus on the veterinary-medical approaches to laryngeal paralysis treatment: surgery or the laryngeal stent. Currently in 2025 there are very few stent providers worldwide, so its availablility for you depends on your location. Unless you are fortunate enough to live close to a stent provider, your only option is surgery, which has been the standard treatment for laryngeal paralysis for over 40 years. The surgery is expensive and has significant risk factors, but has a high likelihood of a positive outcome. You can read more about it on the <Link href='/patients/treatment' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Options</Link> page of this website.
              </p>
            </AccordionContent>

            <AccordionContent
              className='accordion-title'
              title='I Have Limited Means'
              index={2}
              activeAccordionIndex={activeAccordionIndex}
              setActiveAccordionIndex={setActiveAccordionIndex}
              >
              <p className='accordion__text'>
                You&rsquo;ll need to first weigh the cost/benefit of surgery and decide whether it&rsquo;s possible for you, either in your own budget or with help from your family or support network. If you decide you can&rsquo;t afford it, your choices are limited to the more affordable stent procedure &mdash; which unfortunately is as yet unavailable in most of the world &mdash; or to managing the condition as best as you can until end-of-life. That means means curtailing your dog&rsquo;s activities, avoiding hot weather and humidity, and other limitations. While there are prescription medications and naturopathic remedies that <span className='italic'>may help</span> some dogs, there is no scientific evidence that they <span className='italic'>will help</span> yours. We&rsquo;ll discuss the non-surgical options on the 
                <Link href='/patients/treatment' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Options</Link> page. 
              </p>
            </AccordionContent>

            <AccordionContent
              className='accordion-title acc-3'
              title='I Will Not Risk Surgery'
              index={3}
              activeAccordionIndex={activeAccordionIndex}
              setActiveAccordionIndex={setActiveAccordionIndex}
              >
              <p className='accordion__text'>
                Not wanting to subject your dog to the risks of surgery is a reasonable position that many people share. While laryngeal paralysis surgery has good success rates, any surgery &mdash; human as well as veterinary &mdash; has risks of complications that can have severe or even lethal consequences for the patient. Also, some dogs just aren&rsquo;t candidates for laryngeal paralysis surgery due to other conditions or illnesses. If surgery isn&rsquo;t an option for your dog, you may consider laryngeal stent, but until it becomes more widely available that option is limited by your location. This leaves the difficult path of trying to manage the condition with prescription medications, naturopathic remedies, lifestyle modifications, and eventually palliative care.
              </p>
            </AccordionContent>
          </div>
        </div>
      </section>

      {/* Where To Go From Here Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <h2 className={styles.content_head}>Where To Go From Here</h2>
          <p className={styles.content_text}>
            This website is dedicated to helping you make informed choices about LP based on current information about stent treatments and clinical research data about surgical options. We started gathering information about the stent treatment in April of 2022 as our dog was days away from euthanasia due to end-stage laryngeal paralysis. Like many other people, we refused surgery because of the high cost and risk factors for our senior dog. As of April 2024, our dog is nearly sixteen years old and has lived over 570 days post-stent with a good quality of life, and we want everyone to have that option available to them. But if you can&rsquo;t find a stent provider, you will have to make an informed choice about other options.
          </p>
          <p className={styles.content_text}>
            The <Link href='/patients/aboutlarpar' className='link-dark' rel="noopener noreferrer" target="_blank">LarPar Crash Course</Link> provides details about the condition of laryngeal paralysis &mdash; what it is, what causes it, and how it progresses. The <Link href='/patients/aboutlarpar/faqs' className='link-dark' rel="noopener noreferrer" target="_blank">FAQs page</Link> provides answers to many common questions about LarPar. On the <Link href="/patients/treatment"  className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Options</Link> page you&rsquo;ll find details about ways to treat laryngeal paralysis &mdash; surgical techniques, the laryngeal stent, as well as various ways you can try to manage laryngeal paralysis symptoms without veterinary-medical treatment if surgery or stent is not a option for you. You can find links to research about canine laryngeal paralysis on the <Link href='/patients/links' className='link-dark'>Research Links &amp; More Info</Link> page. To get a Lar Par Dog Lover&rsquo;s perspective on Lar Par-related topics, you can visit our <Link href="/blog" className='link-dark' rel="noopener noreferrer" target="_blank">News &amp; Notes</Link> section. There you&rsquo;ll find insights on current topics of interest to people whose dogs are suffering from laryngeal paralysis. 
          </p>
          <p className={styles.content_text}>
            The information on this site is compiled from verifiable sources which include websites of veterinary institutions, published research, and discussions with veterinarians. Our goal is to share information we&lsquo;ve collected so that people don&lsquo;t have to repeat our work and reinvent the wheel. Unlike other sites, the stent treatment for laryngeal paralysis in dogs features prominently on these pages. That&lsquo;s because 1) it saved our dog&lsquo;s life and 2) as of early 2025 this is still the only place you can learn about it. We hope this information helps you on your Lar Par journey moving forward. 
          </p>
          <p className={styles.content_text}>
            &nbsp;
          </p>
        </div>
      </section>
    </>
  )
}

export default Patients