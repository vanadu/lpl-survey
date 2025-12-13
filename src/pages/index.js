import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter} from 'next/router'
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA Markdown Blog Imports
// !VA ---------------------
// !VA fs can't be imported into React. But next.js knows that in conjunction with getStaticProps the file system can be accessed.
import fs from 'fs'
// !VA We also need to use the path module to be able to navigate the local file system
import path from 'path'
import matter from 'gray-matter'
// import PostListing from '../components/blog_components/PostListing'
// !VA Icons
import { FaArrowCircleRight, FaPaw } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { MdMail } from 'react-icons/md'


import JoinUsIcon from '../../public/img-lpl-community.png'
import MissBHome from '../../public/img-miss-b-home.jpg'
import StentArgentineHome from '../../public/img-stent-argentine-home.webp'
import MockHeroVideo from '../../public/MOCK-hero-video.png'

// !VA Components
import Layout from '@/components/Layout'
import BottomNav from '../components/BottomNav'
import ShowMoreContent from '@/components/ShowMoreContent'
// !VA Styles
import * as styles from '../styles/Home.module.scss'

const Home = ( {posts}) => {
  // !VA Log out the posts exported from the getStaticProps function below 
  const router = useRouter()

  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <>
      <NextSeo 
        title="Lar Par: 21st Century Guide to Laryngeal Paralysis in Dogs"
        description="Love your dog? Learn all about laryngeal paralysis symptoms, surgery, stent and treatment alternatives."
        canonical="https://larparlife.com"
        />
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.hero_content}>
            <div className={styles.hero}>
              <div className={styles.hero_head}>
                <p className={styles.hero_head_heading}>
                     Lar Par?
                </p>
                <p className={styles.hero_head_emphasis}>
                  LIFE!
                </p>
              </div>

              <div className={styles.hero_video}>
                {/* You have to comment this out for dev if you're using Chrome because you get strange errors. It's a Vimeo problem */}
                <iframe className={styles.hero_video_frame} title="Do Laryngeal Stents for LarPar Work?" src="https://player.vimeo.com/video/774914281?h=0a34926c18&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_&amp;dnt=1" />

                   
                <div className={styles.hero_video_sharebar}>
                  <figcaption className=''>
                    <div className='hero_video_sharebar_item'>
                      <p className='hero_video-sharebar-label'>Share on:</p>
                    </div>
                  </figcaption>
                                        
                  <div className='hero_video_sharebar_item'>
                    <a href='https://youtu.be/bB0aCPxL168' target="_blank" rel="noopener noreferrer" aria-label="Visit Us On Youtube"><TfiYoutube className={styles.icon} /></a>
                  </div>
                    
                  <div className='hero_video_sharebar_item'>
                    <a href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.larparlife.com%2F' target="_blank" rel="noopener noreferrer" aria-label="Visit Us On Facebook"><FaFacebookSquare className={styles.icon} /></a>
                  </div>
                    
                  <div className='hero_video_sharebar_item'>
                    <a href='https://twitter.com/intent/tweet
                      ?url=https%3A%2F%2Fwww.larparlife.com
                      &text=NEW+Non-Surgical+Treatment+For+LarPar+(GOLPP)!
                      &hashtags=larpar,seniordogs,laryngealparalysis,golpp,larparlife' target="_blank" rel="noopener noreferrer" aria-label="Visit Us On X (Twitter)"><FaTwitterSquare className={styles.icon} /></a>
                  </div>
                    
                  <div className='hero_video_sharebar_item'>
                    <Link href='/contact' aria-label='Contact Us'>
                      <MdMail className={styles.icon} />
                    </Link>
                  </div>
                </div>
              </div>



              {/* <div className={styles.hero_video}>
                <Image 
                  src={MockHeroVideo} 
                  className={styles.mock_hero_video} 
                  alt="Mock Hero Video" 
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section_content}>
          {/* Top level parent container for all community elements - spans the entire page width to allow the marquee elements to extend to the device borders. */}
          <div className={styles.community}>

            <h2 className={styles.community_head}>Feeling Overwhelmed?</h2>
            {/* <h3 className={styles.community_subhead}>Laryngeal Paralysis in Dogs Quick FAQs</h3> */}

            {/* !VA Container for the individual community question animations */}
            {/* !VA I used this technique: https://stackoverflow.com/questions/45847392/pure-css-continuous-horizontal-text-scroll-without-break. There was also a codepen I leaned on but I can't find it now.  */}
            {/* !VA This technique makes it very hard to switch directions and I don't have time to deal with it right now. */}
            {/* !VA There is a copy of each marquee to ensure that it reaches across the entire device width.  */}
            <div className={styles.community_questions}>
              {/* First scrolling animation  */}
              <div className={styles.marquee_wrapper1}>
                <div className={styles.marquee1}>
                  <p>
                  <Link href='#what_is_golpp' className={styles.link_community}>What is GOLPP?</Link> <Link href='#what_are_the_side_effects_of_surgery' className={styles.link_community}>What are the side effects of surgery?</Link> <Link href='#what_causes_laryngeal_paralysis' className={styles.link_community}>What causes laryngeal paralysis?</Link> <Link href='#what_is_the_difference_between_surgery_and_stent'  className={styles.link_community}>What&lsquo;s the difference between surgery and stent?</Link> <Link href='#are_there_other_types_of_surgery_besides_tieback'  className={styles.link_community}>Are there other kinds of surgery besides tieback?</Link> <Link href='#how_much_does_tieback_surgery_cost' className={styles.link_community}>How much does tieback surgery cost?</Link>&nbsp;
                  </p>
                  <p>
                  <Link href='#what_is_golpp' className={styles.link_community}>What is GOLPP?</Link> <Link href='#what_are_the_side_effects_of_surgery' className={styles.link_community}>What are the side effects of surgery?</Link> <Link href='#what_causes_laryngeal_paralysis' className={styles.link_community}>What causes laryngeal paralysis?</Link> <Link href='#what_is_the_difference_between_surgery_and_stent'  className={styles.link_community}>What&lsquo;s the difference between surgery and stent?</Link> <Link href='#are_there_other_types_of_surgery_besides_tieback'  className={styles.link_community}>Are there other kinds of surgery besides tieback?</Link> <Link href='#how_much_does_tieback_surgery_cost' className={styles.link_community}>How much does tieback surgery cost?</Link>&nbsp;
                  </p>
                </div>
              </div>
              {/* Second scrolling animation  */}
              <div className={styles.marquee_wrapper2}>
                <div className={styles.marquee2}>
                    <p>
                      <Link href='#how_dangerous_is_aspiration_pneumonia' className={styles.community_link}>How dangerous is aspiration pneumonia?&nbsp;</Link>
                      <Link href='#are_there_lar_par_groups_on_facebook' className={styles.community_link}>Are there Lar Par groups on Facebook?&nbsp;</Link>
                      <Link href='#which_breeds_does_lar_par_affect' className={styles.community_link}>Which breeds does Lar Par affect?&nbsp;</Link>
                      <Link href='#where_can_get_up_to_date_info_on_laryngeal_paralysis' className={styles.community_link}>Where can I get up-to-date information about Lar Par?&nbsp;</Link>
                      <Link href='#why_do_I_need_a_specialist_diagnosis_for_lar_par' className={styles.community_link}>Why do I need a specialist diagnosis for laryngeal paralysis?&nbsp;</Link>&nbsp;
                      <Link href='#what_do_I_do_in_a_breathing_emergency' className={styles.community_link}>What do I do in a breathing emergency?</Link>&nbsp;
                    </p>
                    <p>
                      <Link href='#how_dangerous_is_aspiration_pneumonia' className={styles.community_link}>How dangerous is aspiration pneumonia? </Link>
                      <Link href='#are_there_lar_par_groups_on_facebook' className={styles.community_link}>Are there Lar Par groups on Facebook? </Link>
                      <Link href='#which_breeds_does_lar_par_affect' className={styles.community_link}>Which breeds does Lar Par affect?</Link>
                      <Link href='#where_can_get_up_to_date_info_on_laryngeal_paralysis' className={styles.community_link}>Where can I get up-to-date information about Lar Par?</Link>
                      <Link href='#why_do_I_need_a_specialist_diagnosis_for_lar_par' className={styles.community_link}>Why do I need a specialist diagnosis?</Link>&nbsp;
                      <Link href='#what_do_I_do_in_a_breathing_emergency' className={styles.community_link}>What do I do in a breathing emergency?</Link>
                    </p>
                </div>
              </div>
              {/* Third scrolling animation  */}
              <div className={styles.marquee_wrapper3}>
                <div className={styles.marquee3}>
                  <p>
                    <Link href='#is_it_bad_for_my_lar_par_dog_to_get_excited' className={styles.community_link}>Is it bad for my Lar Par dog to get excited?</Link>&nbsp;
                    <Link href='#is_prolonging_life_the_best_thing_for_my_lar_par_dog' className={styles.community_link}>Is prolonging life the best thing for my Lar Par dog?</Link>&nbsp;
                    <Link href='#why_does_my_veterinarian_advise_against_surgery' className={styles.community_link}>Why does my primary veterinarian advise against surgery?</Link>&nbsp;
                    <Link href='#has_any_dog_every_died_from_a_stent_implant_for_lar_par' className={styles.community_link}>Has any dog every died from a stent implant?</Link>&nbsp;
                    <Link href='#lpcure' className={styles.community_link}>Is there a cure for Lar Par?</Link>
                    <Link href='#is_the_stent_treatment_available_where_I_live' className={styles.community_link}>Is the stent treatment available where I live?</Link>
                         &nbsp;
                    </p>
                    <p>
                    <Link href='#is_it_bad_for_my_lar_par_dog_to_get_excited' className={styles.community_link}>Is it bad for my Lar Par dog to get excited?</Link>&nbsp;
                    <Link href='#is_prolonging_life_the_best_thing_for_my_lar_par_dog' className={styles.community_link}>Is prolonging life the best thing for my Lar Par dog?</Link>&nbsp;
                    <Link href='#why_does_my_veterinarian_advise_against_surgery' className={styles.community_link}>Why does my primary veterinarian advise against surgery?</Link>&nbsp;
                    <Link href='#has_any_dog_every_died_from_a_stent_implant_for_lar_par' className={styles.community_link}>Has any dog every died from a stent implant?</Link>&nbsp;
                    <Link href='#lpcure' className={styles.community_link}>Is there a cure for Lar Par?</Link>&nbsp;
                    <Link href='#is_the_stent_treatment_available_where_I_live' className={styles.community_link}>Is the stent treatment available where I live?</Link>
                         &nbsp;
                    </p>
                </div>
              </div>
              {/* Fourth scrolling animation  */}
              <div className={styles.marquee_wrapper4}>
                <div className={styles.marquee4}>
                  <p>
                    <Link href='#what_should_i_feed_my_lar_par_dog' className={styles.community_link}>What should I feed my Lar Par dog?</Link>&nbsp;
                    <Link href='#what_is_bveap_surgery' className={styles.community_link}>What is BVEAP surgery?</Link>&nbsp;
                    <Link href='#how_long_before_my_dogs_lar_par_gets_really_bad' className={styles.community_link}>How long before my dog&lsquo;s Lar Par gets really bad?</Link>&nbsp;
                    <Link href='#what_is_stridor' className={styles.community_link}>What&lsquo;s stridor?</Link>&nbsp;
                    <Link href='#are_all_surgeons_equally_skilled_at_tieback_surgery' className={styles.community_link}>Are all surgeons equally skilled at tieback surgery?</Link>&nbsp;
                    <Link href='#can_lar_par_dogs_get_aspiration_pneumonia_without_surgery' className={styles.community_link}>Can Lar Par dogs get aspiration pneumonia without surgery?</Link>&nbsp;
                       &nbsp; 
                  </p>
                  <p>
                    <Link href='#what_should_i_feed_my_lar_par_dog' className={styles.community_link}>What should I feed my Lar Par dog?</Link>&nbsp;
                    <Link href='#what_is_bveap_surgery' className={styles.community_link}>What is BVEAP surgery?</Link>&nbsp;
                    <Link href='#how_long_before_my_dogs_lar_par_gets_really_bad' className={styles.community_link}>How long before my dog&lsquo;s Lar Par gets really bad?</Link>&nbsp;
                    <Link href='#what_is_stridor' className={styles.community_link}>What&lsquo;s stridor?</Link>&nbsp;
                    <Link href='#are_all_surgeons_equally_skilled_at_tieback_surgery' className={styles.community_link}>Are all surgeons equally skilled at tieback surgery?</Link>&nbsp;
                    <Link href='#can_lar_par_dogs_get_aspiration_pneumonia_without_surgery' className={styles.community_link}>Can Lar Par dogs get aspiration pneumonia without surgery?</Link>&nbsp;
                       &nbsp; 
                  </p>
                </div>
              </div>
              {/* Fifth scrolling animation  */}
              <div className={styles.marquee_wrapper5}>
                <div className={styles.marquee5}>
                  <p>
                    <Link href='#are_there_supplements_that_can_help_my_lar_par_dog' className={styles.community_link}>Are there supplements that can help my Lar Par dog?</Link>&nbsp;
                    <Link href='#how_can_i_be_sure_my_dog_has_laryngeal_paralysis' className={styles.community_link}>How can I be sure my dog has Lar Par?</Link>&nbsp;
                    <Link href='#can_acupuncture_help_with_laryngeal_paralysis_in_dogs' className={styles.community_link}>Can acupuncture help with Lar Par?</Link>&nbsp;
                    <Link href='#how_much_does_the_specialist_diagnosis_for_laryngeal_paralysis_in_dogs_cost' className={styles.community_link}>How much does the specialist diagnosis for laryngeal paralysis in dogs cost?</Link>&nbsp;
                    <Link href='#can_a_regular_x_ray_tell_if_my_dog_has_lar_par' className={styles.community_link}>Can a regular X-ray tell if my dog has Lar Par?</Link>&nbsp;
                  </p>
                  <p>
                    <Link href='#are_there_supplements_that_can_help_my_lar_par_dog' className={styles.community_link}>Are there supplements that can help my Lar Par dog?</Link>&nbsp;
                    <Link href='#how_can_i_be_sure_my_dog_has_laryngeal_paralysis' className={styles.community_link}>How can I be sure my dog has Lar Par?</Link>&nbsp;
                    <Link href='#can_acupuncture_help_with_laryngeal_paralysis_in_dogs' className={styles.community_link}>Can acupuncture help with Lar Par?</Link>&nbsp;
                    <Link href='#how_much_does_the_specialist_diagnosis_for_laryngeal_paralysis_in_dogs_cost' className={styles.community_link}>How much does the specialist diagnosis cost?</Link>&nbsp;
                    <Link href='#can_a_regular_x_ray_tell_if_my_dog_has_lar_par' className={styles.community_link}>Can a regular X-ray tell if my dog has Lar Par?</Link>&nbsp;
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.community_content}>
                <h3 className={styles.community_cta}>
                  <Link href='/social' className={styles.community_cta}>Join the Community!</Link>
                </h3>
                <Link href='/social' className='link-dark'>
                  <Image 
                    src={JoinUsIcon} 
                    className={styles.community_icon} 
                    alt="Join the Lar Par Community" 
                  />
                </Link>
                <div className={styles.community_text}>
                  <p className={styles.content_text}>
                  How can you make the best decision about your dog&rsquo;s Lar Par when you have so many questions and when so many people &mdash; even veterinarians &mdash; seem to be saying different things? 
                  </p>
                  <p className={styles.content_text}>
                  Your Lar Par decisions depend on your personal circumstances and your individual dog, so the best place to find guidance is the community of people like you who have first-hand experience, information, and insights to share. You can connect with thousands of people worldwide by <Link href='/social' className={styles.community_link}>joining the growing network of Facebook groups worldwide</Link>. 
                  </p>
                  <p className={styles.content_text}>
                    You can click on any question in the scrolling marquee text above to go straight to the <a href='#quickfaqs' className={styles.community_link}>Laryngeal Paralysis/GOLPP Quick FAQs</a> at the bottom of this page.
                  </p>
                </div>
                
            </div>

          </div>
        </div>
      </section>


      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.main}>
            <h1 className={styles.main_head}>Laryngeal Paralysis in Dogs: <span 
            className="mobile-show-inline"><br /></span>The 21st Century Guide</h1>
            <h2 className={styles.main_subhead}>Your Lar Par Dog&rsquo;s Best Friend</h2>
            <p className={styles.content_text}>Lar Par dogs&rsquo; best friends are the people who love them enough to make informed choices for them. This website provides reliable, up-to-date information so that people can make the best decisions for their beloved canine companions who suffer from laryngeal paralysis.   </p>

            <h2 className={styles.main_subhead}>Lar Par: The Deadly Little Defect</h2>
            <figure className={styles.figure_small}>
              <Image 
                src={MissBHome} 
                // width="0"
                // height="0"
                // sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className={styles.figure_small_image} 
                alt="Miss B Haven" 
              />
              <figcaption className={styles.figure_small_caption}>Miss B Haven</figcaption>
            </figure>
            <p className={styles.content_text}> 
              With laryngeal paralysis, the larynx (the &lsquo;voicebox&rsquo; that dogs use to bark) stops working properly. The parts that are supposed to open and close to let air through 
              become paralyzed and flaccid, blocking the airway. It&lsquo;s a neurological defect &mdash; the nerves that control the muscles of the larynx stop working. Lar Par dogs can be otherwise perfectly healthy but because of this deadly little defect, they can&lsquo;t get enough air to sustain a quality life. That&lsquo;s the way it was with our black Lab Miss B, but we swore that when Miss B&rsquo;s time came, it wouldn&rsquo;t be for something as menial as that. To learn more about our battle to keep Miss B alive and breathing, go to <Link href="/stories" className="link" target="_blank">Miss B&rsquo;s Incredible Stent&nbsp;Journey&nbsp;<FaArrowCircleRight className="read_more_svg"/></Link>
            </p>
            <h2 className={styles.main_subhead}>The Non-Surgical Alternative</h2>
            <p className={styles.content_text}> 
              You may have heard that the only veterinary procedure to treat dogs with <a href="https://www.vet.cornell.edu/departments/riney-canine-health-center/canine-health-information/laryngeal-paralysis" className="link-dark" target="_blank" rel="noreferrer noopener">GOLPP (geriatric-onset laryngeal paralysis and polyneuropathy)</a> is <span className='bold italic'>expensive surgery with a risk of complications</span>. 
            </p> 

            <p className={styles.content_text}> 
              But there&rsquo;s another veterinary procedure&nbsp;&mdash; one that&rsquo;s kept dogs around the world breathing normally for years &mdash; and we want the whole world to know about it. 
            </p>

            <figure className={styles.figure_small}>
              <Image 
                src={StentArgentineHome} 
                // width="0"
                // height="0"
                // sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className={styles.figure_small_image} 
                alt="Silicone Laryngeal Stent" 
              />
              <figcaption className={styles.figure_small_caption}>Silicone Laryngeal Stent</figcaption>
            </figure>
            
            <p className={styles.content_text}>
              This procedure is called the <span className='italic'>laryngeal stent</span> &mdash; placing a stent prothesis in the larynx that allows the dog to breathe. <a href="https://medical-dictionary.thefreedictionary.com/stenting" className='link' target="_blank" rel="noreferrer noopener">Stenting</a> has been used in human medicine for decades and is often used in animals for other conditions.</p>

            <h2 className={styles.main_subhead}>
              Where To Go From Here
            </h2>

            <ul className={styles.content_list_no_bullet}>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                The <a href='#quickfaqs' className='link-dark'>Laryngeal Paralysis/GOLPP Quick FAQs</a> at the bottom of this page provide quick answers for many of the questions people ask when they first learn about laryngeal paralysis and GOLPP in dogs.
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                If you&rsquo;ve noticed a change in your dog&rsquo;s breathing recently and want to know more about it, go to the&nbsp;<Link href='/allabout' className='link'>Lar Par Guide</Link> to see all the available topics.
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                Learn about 5 good reasons to love the silicone stent procedure for canine laryngeal paralysis on the <Link href='/whystent' className='link'>Why Stent?</Link> page. 
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                To read the inspirational stories about the stent treatment for laryngeal paralysis in dogs, go to the  <Link href='/stories' className='link'>Stories</Link> pages.
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                If you&rsquo;re a veterinarian seeking research info and procedural details about the silicone laryngeal stent implant for canine laryngeal paralysis, visit the <Link href='/dvms' className='link'>Info for DVMs</Link> section.
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                You can also find links to pertinent research and informational websites from respected institutions on the <Link href="/patients/links" className='link'>Research Links and More Info</Link> page. 
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                In the <Link href="/blog" className='link'>News</Link> you can explore a dog lover&lsquo;s perspective on Lar Par-related topics.
              </li>
            </ul>
            <p className={styles.content_text}>
              People want a more moderate treatment path for their beloved canine companions, a third way between surgery and deteriorating quality of life. It&rsquo;s time for this affordable, life-saving alternative to move into the mainstream of veterinary care.  
            </p>

          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.main}>
            <h2 id="quickfaqs" className={styles.main_head}>Laryngeal Paralysis in Dogs <span className='mobile-show-inline'><br /></span> Quick FAQs</h2>
            <p className={styles.content_text}>
              Here are some frequently-asked questions about laryngeal paralysis/GOLPP in dogs. For more detailed answers, visit our <Link href='/allabout' className='link-dark'>21st Century Guide to Laryngeal Paralysis </Link> or join the <Link href='/social' className='link-dark'>Lar Par community on Facebook</Link>. 
            </p>
            <div className={styles.quick_faqs}>
              {/* MARQUEE TEXT SECTION 1 */}
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What is GOLPP?'
                  anchor='what_is_golpp'
                  index={1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                    <span className='semibold'>GOLPP</span> stands for <span className='semibold-italic'>Geteriatric Onset Laryngeal Paralysis and Polyneuropathy</span>, which is a long way of saying that some dogs’ nervous systems begin to weaken when they reach a certain age. As a result, the muscles no longer receive the signals from the brain that tell them what to do. Most often, the larynx is the first thing to become paralyzed. Then, the hind end becomes progressively weaker. See the <Link href='/allabout' className='link-dark'>Lar Par Guide</Link> to learn more and to find links to detailed explanations on veterinary websites. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What are the side effects of surgery?'
                  anchor='what_are_the_side_effects_of_surgery'
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Although surgery for laryngeal paralysis in most cases results in positive outcomes, there is a significant risk of complications, some of which can be very serious or fatal. Possible complications include aspiration pneumonia, anesthesia intolerance, suture failure, and infection at the incision site. These risks factors have been studied extensively in the 40 years since LP surgeries first were developed. For more information, see the research studies linked to on the <Link href='/patients/links' className='link-dark'>Research and Website Links</Link> page of the <Link href='/allabout' className='link-dark'>Lar Par Guide</Link>. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What causes laryngeal paralysis?'
                  anchor='what_causes_laryngeal_paralysis'
                  index={3}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Veterinary science distinguishes between acquired and congenital laryngeal paralysis. Acquired LP can be caused by age-related neurological degeneration, trauma to the neck or throat, or other factors related to injury or disease. Congenital LP is present at birth and generally has a genetic or breed-specific component. In both cases, it can be treated with surgery or a stent implant, however with age-related neurological degeneration, the polyneuropathy will progress even if the laryngeal paralysis is treated. For more information see the <Link href='/allabout' className='link-dark'>Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What&lsquo;s the difference between surgery and stent?'
                  anchor='what_is_the_difference_between_surgery_and_stent'
                  index={4}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Surgery is an invasive procedure that entails modifying the physical structure of the larynx to enlarge the airway through the paralyzed larynx. The stent implant is a minimally invasive procedure that entails placing a physical body between the paralyzed parts of the larynx to create an artifical airway. For more information, see the <Link href='/patients/treatment' className='link-dark'>Treatment Options</Link> topic in the <Link href='#' className='link-dark'>Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are there other kinds of surgery besides tieback?'
                  anchor='are_there_other_types_of_surgery_besides_tieback'
                  index={5}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      There are several surgical techniques for canine laryngeal paralysis. Some of the ways they differ are: 1) whether they remove tissue or surgically modify existing tissue, 2) the surgical skill and experience required for the technique, 3) whether the technique requires an artificial prothesis and 4) whether there is science-based research to evaluate the outcomes. Since the 1990&lsquo;s, unilateral arytenoid laterialization (&lsquo;tieback&rsquo;) surgery has been the preferred surgical technique worldwide. In the 2020&lsquo;s, stents have gained increased attention as an alternative to invasive LP surgery. For more information, visit the <Link href='http://localhost:3000/patients/treatment' className='link-dark' rel="noopener noreferrer" target="_blank">Treatments</Link> page in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How much does tieback surgery cost?'
                  anchor='how_much_does_tieback_surgery_cost'
                  index={6}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      The cost of tieback surgery varies greatly depending on where you live. In the continental United States cost ranges from about $2500 in some parts of the Midwest to over $8000 in major metropolitan areas, with the national average at about $4500. In the UK and EU, costs are considerably lower, generally in the $2200 range. These estimates are based on pre-2024 sources and are likely to be significantly higher in 2025 due to inflation. This doesn&lsquo;t include the cost of the diagnosis or potential post-operative complications. For more information, visit <Link href='/patients/aboutlarpar/cost' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Costs</Link> page in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* MARQUEE TEXT SECTION 2 */}
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How dangerous is aspiration pneumonia?'
                  anchor='how_dangerous_is_aspiration_pneumonia'
                  index={7}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                     Aspiration pneumonia is a serious condition that can occur when contaminants enter the lungs and cause an infection. Laryngeal paralysis increases the risk of aspiration pneumonia because a paralyzed larynx cannot open and close as it should to protect the lungs from contaminants during inhalation. While AP is possible with a fully paralyzed larynx, the risk increases considerably after tieback surgery or a stent implant because the size of the always-open artificial aperture is much greater than the small aperture created by the paralyzed larynx. Aspiration pneumonia can usually be treated with antibiotics but if not caught in time it can be life-threatening. For more information, visit the <Link href='/patients/aboutlarpar' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Crash Course</Link> in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link>
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are there Lar Par groups on Facebook?'
                  anchor='are_there_lar_par_groups_on_facebook'
                  index={8}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      There are a number of Facebook groups focusing on laryngeal paralysis, most of which are closed (i.e., private) with a perspective that is enforced by the group&lsquo;s administrators. For information about open (i.e., public) groups with a free-speech policy that allows users to share experiences with naturopathic alternatives and stent implants, visit the <Link href='/social' className='link-dark' rel="noopener noreferrer" target="_blank">Community</Link> page. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Which breeds does Lar Par affect?'
                  anchor='which_breeds_does_lar_par_affect'
                  index={9}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Laryngeal paralysis most frequently affects large and giant breeds like Newfoundlands, Labrador and Golden Retrievers, Greyhounds, German Shepherds, Brittany Spaniels and other large-breed and mixed-breed dogs. Cats can also be affected although it is much less common. Some breeds such as Huskies are genetically predisposed to laryngeal paralysis. For more information, visit the <Link href='/patients/aboutlarpar' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Crash Course</Link> in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Where can I get up-to-date information about Lar Par?'
                  anchor='where_can_get_up_to_date_info_on_laryngeal_paralysis'
                  index={10}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      There are many websites that provide information about laryngeal paralysis in dogs, but internet searches with search engines such as Google and inquiries with AI engines such as ChatGPT will generally not lead you to current, up-to-date information. Veterinary websites tend to focus only on surgical treatment options that are taught in veterinary teaching institutions to the exclusion of all other topics, such as acupuncture or stent implants. Websites that feature information on laryngeal paralysis are generally not updated with information past 2020. While these websites can provide valuable information about the condition of canine laryngeal paralysis, the best source for current information is this website or the network of open, public Facebook groups. For more information, visit the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link> and the <Link href='/social' className='link-dark' rel="noopener noreferrer" target="_blank">Community</Link> page.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Why do I need a specialist diagnosis?'
                  anchor='why_do_I_need_a_specialist_diagnosis_for_lar_par'
                  index={11}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Laryngeal paralysis is a complex condition whose symptoms overlap with other conditions. A definitive diagnosis requires specialized knowledge of the canine airway, specialized technology, and experience. Laryngeal paralysis is often misdiagnosed by primary veterinarians and a misdiagnosis can result in a serious health crisis for your dog. In late-stage LP, breathing emergencies and even suffocation events can happen with very little warning. If you suspect that your dog has laryngeal paralysis, the best course of action is to get a definitive diagnosis by a board-certified soft-tissue specialist or surgeon. In the US, you can find a board-certified surgeon on the website of the <a href="https://acvs.org" className="link-dark" target="_blank" rel="noreferrer noopener">American College of Veterinary Surgeons</a>. Outside the US, contact your primary veterinarian for a referral. For more information, visit the <Link href='/patients/aboutlarpar/cost' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Costs</Link> page. You can find even more detailed information on <a href="https://www.facebook.com/groups/1737118503207596/permalink/3705841026335324" className="link-dark" target="_blank" rel="noreferrer noopener">this Facebook group post</a>
                      
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What do I do in a breathing emergency?'
                  anchor='what_do_I_do_in_a_breathing_emergency'
                  index={12}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                    A breathing crisis caused by laryngeal paralysis is a terrifying and traumatic experience, both for you and your dog. Most often it occurs when the paralyzed, flaccid laryngeal cartilages are sucked inwards when a dog tries to pull more air through the paralyzed larynx than the constricted aperture can pass. When this occurs, the airway is completely blocked, and a&nbsp;
                    <a href="https://vcahospitals.com/know-your-pet/cyanosis-in-dogs" className="link-dark" target="_blank" rel="noreferrer noopener">cyanosis</a> or suffocation event is imminent. When this happens, you must 1) reduce your dog&lsquo;s body temperature through external cooling, i.e., cool packs, cold water, or a cool, temperature-controlled environment 2) calm your dog, ideally with sedation and 3) find a way to get enough oxygen to the dog to sustain life until the cartilages return to their original state and the episode passes. Your best course of action might be to find an emergency vet who will handle the crisis professionally, possibly with intubation. But once a breathing crisis has occurred, it is almost certain to happen again without treatment with surgery or stent, and if that isn&lsquo;t an option for you, you must be prepared for a recurrence. <a href="https://www.facebook.com/groups/1737118503207596/permalink/3703753429877417" className="link-dark" target="_blank" rel="noreferrer noopener">This Facebook group post</a> may give you an idea of what to expect in a breathing crisis, but your best bet is to speak to your veterinarian about your dog&lsquo;s quality of life with late-stage laryngeal paralysis.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* MARQUEE TEXT SECTION 3 */}  
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is it bad for my Lar Par dog to get excited?'
                  anchor='is_it_bad_for_my_lar_par_dog_to_get_excited'
                  index={13}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      When dogs get excited, they 1) breathe heavier and pant harder 2) become more physically active, consuming oxygen in the process and 3) often try to vocalize or bark. These behaviors are bad for Lar Par dogs because the heavy breathing forces more air through the constricted paralyzed larynx, the heightened oxygen consumption makes them breathe even harder to compensate, and barking agitates the already dysfunctional larynx. In a dog with bilateral or end-stage laryngeal paralysis, being anxious or excitable is almost certain to eventually result in a breathing emergency or potentially life-threatening breathing crisis. If your Lar Par dog has an anxious or excitable nature, you best course of action is to talk to your primary vet about medications that can moderate this behavior, get a referral to a surgeon or stent provider, or have the very difficult discussion about your beloved companion&lsquo;s prospects for quality of life moving forward. The Lar Par community is a good place to get support and information from people whose lives have been touched by canine laryngeal paralysis. For more information, visit the <Link href='/social' className='link-dark' rel="noopener noreferrer" target="_blank">Community</Link> page.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is prolonging life the best thing for my Lar Par dog?'
                  anchor='is_prolonging_life_the_best_thing_for_my_lar_par_dog'
                  index={14}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      This is the most difficult question a dog lover can face and only you can answer it. But for that, you need accurate, complete information. Your decision will depend not only on the prospects for your beloved companion&lsquo;s long-term qualify of life, but also on your personal circumstances. Laryngeal paralysis/GOLPP is a serious illness and all the choices are lesser-evil ones. If the prospects for long-term qualify of life are poor, letting your beloved companion go humanely in a loving environment may be in their best interest. If you are grappling with the question of your Lar Par dog&lsquo;s future, you might benefit from the support and shared experience that <a href="#" className="link-dark" target="_blank" rel="noreferrer noopener">Lar Par community on social media</a> can provide.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Why does my primary veterinarian advise against surgery?'
                  anchor='why_does_my_veterinarian_advise_against_surgery'
                  index={15}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      It is not uncommon for a primary veterinarians to recommend humane euthansia for Lar Par dogs. This is often based on the age and overall health of the dog and whether there are prexisting conditions that may result in post-surgery complications, but also on the veterinarian&lsquo;s personal experience. Primary veterinarians are the ones who see the aftermath of treatment, and are often tasked with treating long-term complications and euthanizing animals when surgical treatment is unsuccessful. If you believe your primary veterinarian&lsquo;s recommendation does not reflect your Lar Par dog&lsquo;s actual condition, your best path forward is to consult with a board-certified surgeon for a specialist diagnosis and second opinion.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Has any dog every died from a stent implant?'
                  anchor='has_any_dog_every_died_from_a_stent_implant_for_lar_par'
                  index={16}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      As of early 2025 we are not aware of any dog that did not survive the 10-minute silicone stent implant procedure. Like any veterinary-medical treatment, the stent implant results in increased risk of aspiration pneumonia as well as other treatment-related complications. However, the risks of long-term anesthesia and complications of invasive surgery do not apply to the stent implant. You can find the most up-do-date information about the stent alternative and follow current stent stories on <a href="https://www.facebook.com/groups/laryngealstentfordogs" className="link-dark" target="_blank" rel="noreferrer noopener">this stent-specific Facebook group</a>
                      <Link href='#' className='link-dark' rel="noopener noreferrer" target="_blank"></Link>.  
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is there a cure for Lar Par?'
                  anchor='lpcure'
                  index={17}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      There is no medicinal, homeopathic, pharmaceutical, or veterinary-medical cure for laryngeal paralysis or GOLPP. If anyone tells you otherwise, you are being misinformed. Laryngeal paralysis is a condition that causes the airway to be obstructed, and short of removing the obstruction with surgery or creating an artificial airway through the paralyzed larynx with a laryngeal stent, there is no treatment that will restore breathing. There are a variety of pharmaceuticals and naturopathic medicinals that may or may not have a positive effect for your dog, but they are not a cure and no cure is on the horizon. For more information, visit the <Link href='/patients/treatment' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Options</Link> page in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Is the stent treatment available where I live?'
                  anchor='is_the_stent_treatment_available_where_I_live'
                  index={18}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Silicone stent implants are done in some clinics in the EU, specifically France, Spain, and Germany, and as of January 2025 there are two stent providers in the US. We hope there will be more in 2025 as the silicone stent treatment enters mainstream veterinary practice. For more information, visit the <Link href='/patients/treatment/stent' className='link-dark' rel="noopener noreferrer" target="_blank">Stent</Link> page in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link> and join the <a href="'https://www.facebook.com/groups/laryngealstentfordogs" className="link-dark" target="_blank" rel="noreferrer noopener">stent-specific Facebook group</a>.
                      
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* MARQUEE TEXT SECTION 4 */}
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What should I feed my Lar Par dog?'
                  anchor='what_should_i_feed_my_lar_par_dog'
                  index={19}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      There is no consensus on this question, but in general most primary veterinarians and specialists recommend avoiding dry kibble because it sheds dust that can be inhaled, potentially causing aspiration pneumonia. Some vets go further, recommending that food be processed into a meatball shape that can be swallowed whole instead of chewed into smaller pieces, thereby reducing the potential for inhalation of food particles. Then, there is everything in-between &mdash; people who home-cook their dog&lsquo;s food and serve it in raised bowls in soups, stews, or mashes. The way to get a food recommendation is to reach out to the <Link href='/social' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par community on social media</Link>.   
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What is BVEAP surgery?'
                  anchor='what_is_bveap_surgery'
                  index={20}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      BVEAP stands for <span className='italic'>Bilateral Vocal Fold Excision &amp; Bilateral Arytenoidpexy</span > and is a surgical technique performed almost exclusively in the US by Dr. Ken Sadanaga at the VRC in Malvern, PA. This technique is significantly more challenging than conventional &lsquo;tieback&rsquo; (unilateral arytenoid lateralization), but also brings significant benefits. For more information, visit the <Link href='/patients/treatment/surgery/surgerytypes' className='link-dark' rel="noopener noreferrer" target="_blank">Surgery Types</Link> page in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link> and the <a href="https://www.vrcmalvern.com/bilateral-vocal-fold-excision-mucosoplasty-bilateral-arytenoidpexy-bveap-approach-to-laryngeal-paralysis-in-dogs/" className="link-dark" target="_blank" rel="noreferrer noopener">BVEAP page on the VRC Malvern&lsquo;s website</a>.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How long before my dog&lsquo;s Lar Par gets really bad?'
                  anchor='how_long_before_my_dogs_lar_par_gets_really_bad'
                  index={21}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Laryngeal paralysis/GOLPP is a progressive condition, and how fast it progresses is different for each individual dog and can&lsquo;t be determined in advance. Once paralysis begins on one side of the arytenoid cartilage, it can take weeks or months to become fully paralyzed, and paralysis on the other side can occur at the same time or in a different time frame that can take weeks or months. The entire process from initial signs of paralysis to end-stage can take months or years and it&lsquo;s not possible to predict how long it will take. That&lsquo;s why it&lsquo;s crucial to develop a game plan as soon as you suspect laryngeal paralysis is in your dog&lsquo;s future. For more information, visit the <Link href='/patients/aboutlarpar' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Crash Course</Link> in the <Link href='#' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link>. 

                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}                  

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What is stridor?'
                  anchor='what_is_stridor'
                  index={22}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Stridor is the loud, raspy, scratchy breathing sound that is generated when air passes over semi-rigid tissue in the airway, causing it to vibrate. Stridor is the most noticeable symptom of laryngeal paralysis/GOLPP. Paralyzed laryngeal cartilages hang in a flaccid state in a nearly closed position. As a result, the air passes much faster over them, causing them to vibrate with a high-pitched, scratchy sound. To hear what this sounds like, visit the <Link href='patients/aboutlarpar' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Crash Course</Link> page in the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link>, click the &lsquo;What does laryngeal paralysis in dogs sound like&lsquo; link, and listen to the video of Miss B&lsquo;s breathing with end-stage LP the day before her stent implant. End-stage laryngeal paralysis is a life-threatening condition so if your dog sounds like this, you should seek professional veterinary advice without delay.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are all surgeons equally skilled at tieback surgery?'
                  anchor='are_all_surgeons_equally_skilled_at_tieback_surgery'
                  index={23}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Successful surgery depends not just on the surgeon, but also the anesthesiologist, the surgical team, and the facility, and not all these factors are the same for all veterinary hospitals. Among the most important factors for a positive outcome are how much experience the surgeon has and which anesthesia protocols are used. Unfortunately, there is no way for patients to evaluate these factors in advance. Board certification is a good measure of skill and conformance to standards. Some, but not all, board certified surgeons are listed on the <a href="https://acvs.org" className="link-dark" target="_blank" rel="noreferrer noopener">American College of Veterinary Surgeons</a> website. In the UK, the <a href="https://www.rcvs.org.uk/home/" className="link-dark" target="_blank" rel="noreferrer noopener">Royal College of Veterinary Surgeons</a> keeps records of board-certification. In other countries, inquire with your primary veterinarian for information about board certification. For recommendations, the <Link href='/social' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par community on social media</Link> can be a great help. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Can Lar Par dogs get aspiration pneumonia without surgery?'
                  anchor='can_lar_par_dogs_get_aspiration_pneumonia_without_surgery'
                  index={24}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Any dog can get aspiration pneumonia if unsterile water or contaminants enter the lungs. The opening/closing of the larynx provides a measure of defense against contaminants and if it is not closing properly when it should, the risk of contaminants getting through to the lungs increases. So the answer to that question is yes. BUT &mdash; and that&lsquo;s a big BUT &mdash; the risk of AP is proportional to the size of the always-open aperture because the greater the airflow, the greater the potential for contaminants to ride that air through the paralyzed larynx on down into the lungs. You may hear the admins of Facebook Lar Par groups claim that the AP risk is the same before and after tieback surgery. This is blatant, indefensible misinformation that calls into question these people&lsquo;s competency to choose what information their group members can and can&lsquo;t see. On this point, it&lsquo;s better to listen to people who teach veterinary science, and <a href="https://www.google.com/search?client=firefox-b-1-d&q=is+the+risk+of+aspiration+pneumonia+greater+after+tieback+surgery" className="link-dark" target="_blank" rel="noreferrer noopener">all of them concur that aspiration risk increases significantly after tieback surgery</a>. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* MARQUEE TEXT SECTION 5 */}
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are there supplements that can help my Lar Par dog?'
                  anchor='are_there_supplements_that_can_help_my_lar_par_dog'
                  index={25}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      There is to our knowledge no science-based evidence that any supplement has any effect on the symptoms of laryngeal paralysis or GOLPP. That doesn&lsquo;t mean that they do not have any effect, it just means that there is currently no published, peer-reviewed research showing that any supplement has benefited any Lar Par dog in any way. There are veterinarians that prescribe certain pharmaceuticals to help with Lar Par symptoms, even though there is no substantial research demonstrating their efficacy. There are also veterinarians that recommend certain supplements despite the lack of science-based evidence that they work. Each individual has to assess such claims for themselves. The universal principle applies here just as well as it does everywhere else: <span className='italic'>caveat emptor</span> &mdash; let the buyer beware.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How can I be sure my dog has Lar Par?'
                  anchor='how_can_i_be_sure_my_dog_has_laryngeal_paralysis'
                  index={26}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      There are classic symptoms of laryngeal paralysis/GOLPP to watch for. But many of these symptoms coincide with other conditions, and even experienced veterinarians sometimes misinterpret what they observe, leading to a misdiagnosis that can have serious ramifications for your Lar Par dog. The only way to definitively diagnose laryngeal paralysis/GOLPP in dogs is by laryngoscope performed by a qualified soft tissue specialist or veterinarian with extensive experience in conditions of the upper airway. The Lar Par exam requires the appropriate sedative in the appropriate amount. Incorrect sedative or dosage can influence the movement of the&nbsp;
                      <a href="https://anatomylearner.com/dog-larynx-anatomy/" className="link-dark" target="_blank" rel="noreferrer noopener">arytenoid cartilages</a>, which often leads to false results. To get an idea of the complexity involved in the laryngeal paralysis diagnosis, read <a href="https://www.facebook.com/groups/1737118503207596/permalink/3705841026335324" className="link-dark" target="_blank" rel="noreferrer noopener">this post on the open Lar Par Facebook group</a>. For a definitive diagnosis, contact a board-certified soft tissue specialist or surgeon. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}


              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Can acupuncture help with Lar Par?'
                  anchor='can_acupuncture_help_with_laryngeal_paralysis_in_dogs'
                  index={27}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Acupuncture has been demonstrated to be effective in treating certain conditions, but there is currently no evidence showing that symptoms or causes laryngeal paralysis/GOLPP can be treated with acupuncture. That doesn&lsquo;t mean is not effective, it just means there’s no science-based evidence indicating that it is. Acupuncture treatment options for your dog should be discussed with a licensed veterinary acupuncturist.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How much does the specialist diagnosis cost?'
                  anchor='how_much_does_the_specialist_diagnosis_for_laryngeal_paralysis_in_dogs_cost'
                  index={28}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      The cost of a definitive diagnosis can vary depending on your location and the type of facility offering the diagnosis. Generally, specialized veterinary services are more expensive in major metropolitan areas. You may be able to reduce costs by having any required imaging done by your primary veterinarian and forwarded to the specialist. You may also choose to decline some of the tests recommended by the specialist if your only concern is whether the larynx itself is paralyzed. For more information, visit the <Link href='/patients/aboutlarpar/cost' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment Costs</Link> page of the <Link href='/allabout' className='link-dark' rel="noopener noreferrer" target="_blank">Lar Par Guide</Link> and talk to your specialist.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Can a regular X-ray tell if my dog has Lar Par?'
                  anchor='can_a_regular_x_ray_tell_if_my_dog_has_lar_par'
                  index={29}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      No. X-rays only represent the position of a body at the instant the image is taken. Laryngeal paralysis involves not only the position of the laryngeal cartilages, but also to what extent they can still move to open and close the airway. While transnasal laryngoscopy and laryngeal ultrasound have been known to diagnose laryngeal paralysis, the preferred technique is transoral video endoscope, which has the benefit that the video record can be shared with the client. (Source -  CompendiumVet.com: Continuing Education for Veterinarians). For more information, contact your specialist.
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}       

            </div> 


            <p className={styles.content_text}>
              Laryngeal paralysis and GOLPP in dogs is a complex topic, and you&lsquo;re bound to encounter people with strong opinions that aren&lsquo;t always based on accurate information. The purpose of this site is to collect current, verifiable information on laryngeal paralysis and GOLPP into one place. We&lsquo;ve done the research and can provide references to published sources for everything you read here. If you believe information on this site is inaccurate, please contact us via our <Link href='/contact' className='link-dark'>Contact page</Link> or <Link href='/social' className='link-dark'>social media</Link>. 
            </p>
            <p className={styles.content_text}>
              &nbsp;
            </p>    


          </div>
 
        </div>
      </section>







    </>
  )
}

export default Home

export async function getStaticProps() {
  // !VA use the fs module to get an array of the files in the posts folder
  const files = fs.readdirSync((path.join('src/posts')))
  // !VA When you log the files, it won't show in the browser, but will show in the terminal because this is server-side
  // !VA Get slug and front matter from posts array
  const posts = files.map(filename => {
    // !VA Create slug
    const slug = filename.replace('.md', '')
    // !VA Get frontmatter. readFileSync also comes from the fs module
    const markdownWithMeta = fs.readFileSync(path.join('src/posts', filename), 'utf-8')
    // !VA This logs out an object with the markdown including metadata, i.e. frontmatter to the terminal

    // !VA Now we wrap the post object in a matter object from the gray-matter package. Destructure out the data from the matter object and rename it 'frontmatter'. data is the metadata in the Markdown file.
    const { data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  // !VA Now, this logs out an array containing the slug and the frontmatter for each post to the terminal
  // !VA Now we're passing the posts object to the Home component via props
  return {
    props: {
      posts: posts,
    }
  }
}