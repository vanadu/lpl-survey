import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
// !VA Custom components
import ShowMoreContent from '@/components/ShowMoreContent'
import GuideNav from '@/components/GuideNav'

// !VA Icons
import { FaFacebook } from "react-icons/fa";
// !VA React Icons
import { FaPaw } from 'react-icons/fa'

// !VA Styles
import * as styles from '../styles/Light.module.scss'

const Social = () => {

  // !VA ShowMore component index
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>The Canine Laryngeal <span className='mobile-show-inline'><br /></span>Paralysis/GOLPP  Community</h1>
          </div>
          <h2 className={styles.content_head}>What is the Lar Par community?</h2>
          <p className={styles.content_text}>
            The Lar Par community is the collective of people whose lives have been impacted by canine laryngeal paralysis/GOLPP. 
          </p>



          {/* ShowMoreComponent content start */}
          <div className={styles.content_text}>
            <ShowMoreContent
              title='Learn more...'
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore-content-text">
                <span className="showmore-content-space"></span>
                <p className="showmore-content-text">
                  If your beloved companion has or has had this horrible disease, you&rsquo;re a member of the community even if you choose to remain silent or anonymous. But if you want to connect with others, the best way is to join one of our growing international network of Facebook groups.
                </p>
              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}
          



          <h2 className={styles.content_head}>The Open Community</h2>
          <p className={styles.content_text}>
            A truly open community embraces and respects all members regardless of their personal circumstances. 
          </p>
          {/* ShowMoreComponent content start */}
          <div className={styles.content_text}>
            <ShowMoreContent
              title='Learn more...'
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore-content-text">
                {/* <figure className="showmore-figure">
                  <Image src={[showmore image]} className="showmore-figure-image" alt="[showmore alt text]"/>
                  <figcaption className="showmore-figure-caption">
                    [showmore figure caption]
                  </figcaption>
                </figure> */}
                <span className="showmore-content-space"></span>
                <p className="showmore-content-text">
                  Each community member&rsquo;s dog is unique and individual, and each community member has a unique situation that informs their decisions. For some of us, our personal circumstances sadly limit our available options for helping our beloved companions with Lar Par. A true community accepts this with compassion and understanding and without judgment. 
                </p>
              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}
          

          <h2 className={styles.content_head}>The Lar Par Community Network</h2>
          <p className={styles.content_text}>
            There a lot of Facebook groups that deal with canine laryngeal paralysis and GOLPP, but three stand out as being open, unbiased, and supportive of free speech.
          </p>
          {/* ShowMoreComponent content start */}
          <div className={styles.content_text}>
            <ShowMoreContent
              title='Learn more...'
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              >
              <div className="showmore-content-text">
                <span className="showmore-content-space"></span>
                <p className="showmore-content-text">
                  Not all Facebook groups are equal. Some are run by administrators that choose what they think you should hear and block or ban anyone who questions their authority. Our community has three simple rules:
                </p>
                <ul className={styles.content_list_no_bullet}>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>Treat other group members with respect, even if you don&lsquo;t share their opinion.</li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>Don&lsquo;t use the group for spam, marketing, or personal/business networking, and limit discussions to topics directly related to laryngeal paralysis/GOLPP. </li>
                  <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>Limit discussions to treatments, medications, and remedies that can be proven to be prescribed, performed, or supported by licensed veterinarians. </li>
                </ul> 
              </div>
            </ShowMoreContent>
          </div>  
          {/* ShowMoreComponent content end */}
          
          <p className={styles.content_text}>
            The Lar Par Community network currently has three Facebook groups active in English and German to help people whose dogs suffer from laryngeal paralysis:
          </p>
          <div className={styles.section_content}>
              <hr className={styles.content_list_spacer}/>
          </div>
          <div className={styles.social_links}> 
            <div className={styles.social_link}>
              <div className={styles.social_link_head}>
                <h3 className={styles.social_link_head_text}>Lar Par/GOLPP International <span className='mobile-show-inline'><br /></span> Facebook Group</h3>
              </div>
              <div className={styles.social_link_content}>
                <p className={styles.social_link_content_text}>
                  This open English language group is a positive environment that supports free speech for all people with Lar Par dogs, regardless of personal circumstances.  
                </p>
                <div className={styles.social_link_item}>
                  <Link 
                    href='https://www.facebook.com/groups/1737118503207596' 
                    className='link-dark' 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <FaFacebook
                      className={styles.social_icon}
                    />
                    <p className={styles.social_icon_caption}>
                      Lar Par/GOLPP International <br/> Group (English language)
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.section_content}>
              <hr className={styles.content_list_spacer}/>
            </div>

            <div className={styles.social_links}> 
              <div className={styles.social_link}>
                <div className={styles.social_link_head}>
                  <h3 className={styles.social_link_head_text}>Kehlkopflähmung / Polyneuropathie beim Hund  - Erfahrungen und Austausch</h3>
                </div>
                <div className={styles.social_link_content}>
                  <p className={styles.social_link_content_text}>
                    Diese deutschsprachige Gruppe ist eine offene, positive Umgebung für den Austausch von Informationen und Erfahrungen zum Thema Kehlkopflähmung und GOLPP. 
                  </p>
                  <div className={styles.social_link_item}>
                    <Link 
                      href='https://www.facebook.com/groups/1424122448476490/' 
                      className='link-dark' 
                      rel="noopener noreferrer" 
                      target="_blank">
                      <FaFacebook
                        className={styles.social_icon}
                      />
                      <p className={styles.social_icon_caption}>
                        Lar Par/GOLPP International <br/> Group (German language)
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section_content}>
              <hr className={styles.content_list_spacer}/>
            </div>


            

            <div className={styles.social_link}>
              <div className={styles.social_link_head}>
                <h3 className={styles.social_link_head_text}>Laryngeal Stent Treatment <span className='mobile-show-inline'><br /></span> for Laryngeal Paralysis (GOLPP)</h3>
              </div>
              <div className={styles.social_link_content}>
                <p className={styles.social_link_content_text}>
                  This group was founded in 2022 to advocate for and inform about the silicone stent alternative for canine laryngeal paralysis.
                </p>
                <div className={styles.social_link_item}>
                  <Link 
                    href='https://www.facebook.com/groups/laryngealstentfordogs' 
                    className='link-dark' 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <FaFacebook
                      className={styles.social_icon}
                    />
                    <p className={styles.social_icon_caption}>
                    Laryngeal Stent Treatment for <br/> Laryngeal Paralysis (GOLPP) 
                    </p>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Social