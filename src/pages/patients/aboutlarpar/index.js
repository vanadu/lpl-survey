import React from 'react'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

import ReactTooltip from 'react-tooltip'
// !VA Components

import ShowMoreContent from '../../../components/ShowMoreContent'
// !VA React Icons
import { FaPaw } from 'react-icons/fa'

// !VA Images
import HumanLarynx from '../../../../public/img-human-larynx.jpg'
import Epiglottis from '../../../../public/img-epiglottis.jpg'
import DogLarynx from '../../../../public/img-larynx-tamara-rees.png'
import LarparStages from '../../../../public/img-larpar-stages.jpg'
import MissBXmas from '../../../../public/img-miss-b-xmas.jpg'
import MissBInBushes from '../../../../public/img-miss-b-in-bushes.jpg'
// !VA Custom Components
import PatientsNav from '@/components/guidenav/PatientsNav'
import GuideNav from '@/components/GuideNav'



// !VA Styles
import * as styles from '../../../styles/Light.module.scss'

const AboutLarpar = () => {
  // !VA The index of the current ShowMore topic
  const [activeIndex, setActiveIndex] = useState(0)

  const refTopics = useRef()
  const refOverview = useRef();
  const refSymptoms = useRef();
  const refCause = useRef();
  const refProgression = useRef();
  const refTreatment = useRef();

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };

  return (
    <>
      <NextSeo 
        title="Lar Par Crash Course: Symptoms, Causes & Progression"
        description="Learn about the sounds, symptoms, causes, diagnosis and treatments for laryngeal paralysis in dogs."
        canonical="https://larparlife.com/patients/aboutlarpar"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />

      {/* Intro Section, includes Sound of LarPar Video */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Lar Par Crash Course:<span className='mobile-show-inline'><br /></span> Symptoms, Causes & Progression</h1>
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
            <h2 className={styles.topic_subhead_title}>How Do You Know If Your Dog <span className='mobile-show-inline'><br /></span> Has Laryngeal Paralysis?</h2>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section_content}>
          {/* ShowMoreComponent content start */}
          <div className={styles.content_block}>
            <div className={styles.showmore_content_inline}>
            <p className={styles.content_text}>
                If your dog is making a raspy, wheezing sound, then he or she might have laryngeal paralysis (LarPar)<span className='mobile-hide-inline'> or geriatric-onset laryngeal paralysis and polyneuropathy (GOLPP)</span>.
              </p>
            </div>

            <ShowMoreContent 
              title='What does laryngeal paralysis in dogs sound like?'
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
                <div className={styles.showmore_content_block}>
                <span className={styles.showmore_content_space}></span>
                <div className={styles.figure_flex}>
                  <div className={styles.container}>
                    <iframe className={styles.figure_iframe} width="560" height="315" src="https://www.youtube.com/embed/2S_UO21AiHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <figcaption className={styles.figure_caption}>
                      The Sound of Laryngeal Paralysis
                    </figcaption>
                  </div>
                </div>
              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}

        </div>
      </section>


      {/* Section Page Nav Menu */}
      <section className={[styles.section, styles.section_full_width].join(' ')}>

          <div 
            className={[styles.section_menu, 'sticky'].join(' ')}
            ref={refTopics}
            >
            <ul className={styles.section_menu_list}>
              <li 
                onClick={() => refOverview.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className={styles.section_menu_list_item}>
                <h4>Overview</h4>
              </li>
              <li 
                onClick={() => refSymptoms.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className={styles.section_menu_list_item}
              >
                <h4>Symptoms</h4>
              </li>
              <li 
                onClick={() => refCause.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className={styles.section_menu_list_item}
              >
                <h4>Cause</h4>
              </li>
              <li 
                onClick={() => refProgression.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className={styles.section_menu_list_item}
              >
                <h4>Progression</h4>
              </li>
              <li 
                onClick={() => refTreatment.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className={styles.section_menu_list_item}
              >
                <h4>Treatment</h4>
              </li>
            </ul>
          </div>

      </section>


      {/* Overview Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

            {/* Overview Content */}
            <div className={styles.content_block}>
              <h2 
                className={styles.content_head}
                ref={refOverview}
                >Overview</h2>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}>
                  Laryngeal paralysis is a common condition of the larynx that afflicts older dogs mostly in large and giant breeds.&nbsp;
                </p>
                <ShowMoreContent
                  title='Which breeds does laryngeal paralysis affect?'
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                >
                  <div className='showmore-content-text'>
                    <span className={styles.showmore_content_space}></span>
                     <p className={styles.content_text}>
                    Laryngeal paralysis is common in large and giant breeds like Labrador Retrievers, Newfoundlands, Borzois, Golden Retrievers, Greyhounds, German Shepherds, Brittany Spaniels, or and other large-breed and large mixed-breed dogs are  and even cats, though that&rsquo;s less common.
                    </p> 
                  </div>
                </ShowMoreContent>
              </div>
              {/* ShowMoreComponent content end */}
              
              <p className={styles.content_text}>
                In LarPar, muscles of the larynx become paralyzed and the laryngeal cartilages become flaccid, cutting off airflow to the lungs. 
              </p>
    
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How does the larynx get paralyzed?'
                  index={3}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                   <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <figure className={styles.showmore_figure}>
                      <Image src={DogLarynx} className={styles.showmore_figure_image} alt="Laryngeal Paralysis - Epiglottis"/>
                      <figcaption className={styles.showmore_figure_caption}>
                      &copy; 2020 <a href="https://www.marvistavet.com" className='link-dark' target="_blank" rel="noreferrer noopener">marvistavet.com</a> <br />
                      Illustration by Tamara Rees</figcaption>
                    </figure>
                     <p className={styles.content_text}>
                      When we (dogs and cats included) swallow, a flap of tissue called the <span className='semibold-italic'>epiglottis</span> covers the airway to the lungs. The epiglottis is kind of like a trap door with a hinge on one side that flips open and closed. When closed, substances enter the esophagus and pass into the stomach. When open, air enters the larynx so we can make sounds used to speak and sing. The air then passes through the <span className='semibold-italic'>trachea</span> to the lungs.  
                    </p>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      In dogs and cats the larynx has <span className='semibold-italic'>arytenoid cartilages</span> at either side that operate kind of like a double sliding door to cover the trachea during swallowing. There are muscles that push these pieces of cartilage together to open and close the airway. They also use this mechanism to bark or meow. 
                    </p>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      With laryngeal paralysis, the muscles that move these pieces of cartilage stop working over a period of months or years. The &lsquo;double sliding door&rsquo; can&rsquo;t open or close anymore and the cartilage eventually end up as flaccid tissue that blocks the airflow to the lungs. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            </div>
            {/* Overview Content End */}


        </div>
      </section>

      {/* Symptoms Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Symptoms Content Start */}
          <div className={styles.content_block}>
            <div
              ref={refSymptoms}
              className="section_content-subhead menu-spacer"
              >
              <h2 className={styles.content_head}>Symptoms</h2>
              
              <p className={styles.content_text}>
                As with any progressive condition, symptoms are barely noticeable at first and get worse with time.
              </p>
              
              <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  Noisy, raspy breathing (stridor)&nbsp;
                  <ShowMoreContent
                    title='What&rsquo;s stridor?'
                    index={4}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                      <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                        <p className={styles.content_text}>
                        Stridor is the sound created when the air passage is constricted. It sounds like air passing through a drinking straw, but rougher. For an example, watch the video at the top of this page.
                      </p>
                    </div>
                  </ShowMoreContent> 

                  </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                    Exercise intolerance due to lack of oxygen reaching the lungs.&nbsp;
                  </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                    Extreme panting in hot/humid weather.&nbsp;&nbsp;
                    <ShowMoreContent
                      title='Why is heat dangerous?'
                      index={5}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                        <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                          <p className={styles.content_text}>
                          Dogs use their breath to both cool and fuel their bodies. The air they inhale contains oxygen and it&rsquo;s cooler than their body temperature. When they exhale, the air they expel contains carbon dioxide and body heat. That&rsquo;s why dogs pant when it&rsquo;s hot &mdash; because the air they&rsquo;re inhaling is already warm, so it can&rsquo;t be used to cool the body. But with laryngeal paralysis, their airway is constricted, so they can&rsquo;t pass enough air to both oxygenate and cool the body. The body heat builds up and can result in heat stroke, which can be life-threatening.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                    The bark often gets weaker and raspy due to the paralysis of the laryngeal cartilages.
                  </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                    Coughing or gagging when eating or drinking.
                  </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                    In extreme situations, gums can turn purple or blue, indicating potentially fatal cyanosis.&nbsp;&nbsp;
                    <ShowMoreContent
                      title='What&rsquo;s cyanosis?'
                      index={6}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                        <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                          <p className={styles.content_text}>
                          Cynanosis is when body tissue turns blue due to lack of oxygen in the blood. In dogs, fur covers most of the body so look for signs of cyanosis in the gums and tongue. Cyanosis is an emergency situation that indicates suffocation. It&rsquo;s crucial to calm the dog, cool the body with ice or cold water, and find oxygen immediately, otherwise the dog could get into a cycle of stress that results in complete closure of the airway and death by asphyxiation.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </li>
                </ul>
                
                <p className={styles.content_text}>
                All these symptoms of laryngeal paralysis are all just what you&rsquo;d expect from a blocked airway &mdash; noisy breathing, problems swallowing, and oxygen deprivation.
                </p>
              </div>
          </div>
          {/* Symptoms Content End */}

        </div>
      </section>

      {/* Causes Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Causes Content Start */}
          <div className={styles.content_block}>
            <div
              ref={refCause}
            className="section_content-subhead menu-spacer">
              <h2 className={styles.content_head}>Causes of Laryngeal Paralysis</h2>
            </div>
            <p className={styles.content_text}>Laryngeal paralysis can be caused by a genetic trait or it can be a result of trauma or neurological degeneration.</p>

            <ul className={styles.content_list_no_bullet}>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
              <span className='semibold-italic'>Congenital laryngeal paralysis</span> in dogs is inherited and symptoms often appear earlier in life.
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Which breeds does congenital larygneal paralysis affect?'
                  index={7}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                    <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      Congenital laryngeal paralysis in dogs is more common in breeds such as Bouvier des Flandres, Siberian Huskies, Bull Terriers, and Dalmatians. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                <span className='semibold-italic'>Acquired laryngeal paralysis</span> in dogs can appear as a result of trauma or age-related neuromuscular degeneration.

                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <ShowMoreContent
                    title='What can cause acquired laryngeal paralysis in dogs?'
                    index={8}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                      <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        Using a neck or prong collar with excessive force can result in a throat injury that can cause laryngeal paralysis. But it is most often the result of general neuromuscular decline in senior dogs, and is related to other symptoms such as hind-end weakness. This form of LarPar is referred to as &lsquo;geriatric-onset laryngeal paralysis and polyneuropathy&rsquo;, or GOLPP.
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </li>
            </ul>
          </div>
          {/* Causes Content End */}

        </div>
      </section>


      {/* Progression Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Progression Content Start */}
          <div className={styles.content_block}>
            <div
              ref={refProgression}
              className="section_content-subhead menu-spacer"
              >
              <h2 className={styles.content_head}>Progression</h2>
            </div>
            <figure className={styles.figure_float_right}>
              <Image src={LarparStages} className={styles.figure_image} alt="Laryngeal Paralysis Progression" />
            </figure>
  
            <p className={styles.content_text}>Laryngeal paralysis in dogs generally starts with failure of the cartilage on one side of the larynx. This is called <span className='semibold-italic'>unilateral laryngeal paralysis</span>, and it only partially restricts air passage, so symptoms are mild to moderate.</p>
  
            <p className={styles.content_text}>As the condition progresses, both cartilages become paralyzed. This is called <span className='semibold-italic'>bilateral laryngeal paralysis</span>. At this stage, the airway is mostly blocked and the dog is can&rsquo;t get enough air to fuel the body. If the dog gets overexcited or overheated, a dangerous situation can result. </p>
            <h3 className={styles.content_subhead}>How long does it take?</h3>
            <p className={styles.content_text}>
              A dog can have unilateral laryngeal paralysis for many months before it becomes bilateral. But the transition from unilateral to bilateral is inevitable and it can come seemingly overnight. Once the bilateral stage is reached, quality of life deteriorates quickly and you should be prepared in advance either for a veterinary procedure, i.e. surgery or stent, or end-of-life care. 
            </p>
  
            <h3 className={styles.content_subhead}>Case Study: Laryngeal Paralysis Progression&nbsp;in&nbsp;Miss&nbsp;B</h3>
            <p className={styles.content_text}>
              It took just over two years from the time we noticed symptoms until her laryngeal paralysis reached the end-of-life stage.  
            </p>
            <ShowMoreContent
              title='More about Miss B&rsquo;s LarPar'
              index={9}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
                <div className={styles.showmore_content_block}>
                <span className={styles.showmore_content_space}></span>
                  <p className={styles.content_text}>
                  We first noticed that Miss B&rsquo;s breathing was louder than normal in March 2020. She was 11 when she was diagnosed with early-stage laryngeal paralysis in June 2020. She could still go on walks through that summer and 2021, but her breathing and overall weakness from oxygen depletion progressed. But once she became bilateral in early 2022, she couldn&rsquo;t tolerate temperatures above 60 degrees for any length of time. She could do short morning walks until about April 2022. By June 2022, we were afraid to let her out for more than a few minutes at at time. Once we had to we carry her from the neighbor&rsquo;s yard back into the A/C to prevent a crisis. 
                </p>
                <span className={styles.showmore_content_space}></span>
                <figure className='showmore-figure'>
                  <Image src={MissBInBushes} className={styles.showmore_figure_image} alt="Laryngeal Paralysis Progression" />
                  <figcaption className={styles.showmore_figure_caption}>Miss B didn&rsquo;t have any larygeal paralysis symptoms until she&nbsp;was&nbsp;11.</figcaption>
                </figure>
                  <p className={styles.content_text}>
                  That whole summer of 2022 she all she could do was lay motionless and get up to eat and go potty. Just standing up and walking caused her to pant violently. By September 2022, we knew she was reaching end-of-life. On September 9, 2022 we found a stent provider who saved her life. You can read about that incredible story&nbsp;<Link href="/stories" className='link-dark'>here</Link>. 
                </p>
              </div>
            </ShowMoreContent>
  
            <h3 className={styles.content_subhead}>Aspiration Pneumonia Risk</h3>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <p className={styles.showmore_content_inline}>
                With LarPar, the paralyzed laryngeal cartilages leave a narrow opening through which contaminants can pass and get into the lungs. When that happens, the lungs can become infected.&#8203;&nbsp;
              </p>
              <ShowMoreContent
                title='What is aspiration pneumonia?'
                index={10}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                  <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    When anything other than air is inhaled (or <span className='semibold-italic'>aspirated</span>), into the lungs, an infection can result. Contaminants can include food particles, regurgitated stomach contents, liquids, reaches the lungs &mdash; pretty much anything that&rsquo;s not air. A normal larynx works to keep contaminants out, but with LarPar the likelihood of contaminants reaching the lungs increases considerably. Aspiration pneumonia can usually be treated with antibiotics but if not caught in time or if antibiotics are ineffective, it can be a life-threatening condition. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
          </div>

        </div>
      </section>

      {/* Treatment Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Treatment Content Start */}
          <div className={styles.content_block}>
            <div
              ref={refTreatment}
              className="section_content-subhead menu-spacer"
              >
              <h2 className={styles.content_head}>Treatment</h2>
  
            </div>
            <p className={styles.content_text}>There is no known pharmaceutical or naturopathic treatment that can repair the function of a paralyzed larynx. There are only two veterinary-medical procedures that can restore breathing through the paralyzed larynx so the dog can live out its natural life &mdash; <span className='italic'>surgery</span> and <span className='italic'>laryngeal stent</span>. These procedures will be discussed in detail in the Treatment details section.</p>
  
            <p className={styles.content_text}>There are also a number of pharmaceuticals and naturopathic treatments that are reported to be effective in managing some of the effects of laryngeal paralysis  for some dogs. However, there is no scientific evidence demonstrating their effectiveness. You can learn about these approaches in the <Link href='/patients/treatment/managing' className='link-dark'>Managing Laryngeal Paralysis</Link> page of the <Link href='/patients/treatment' className='link-dark'>Treatment Options</Link> section.</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutLarpar