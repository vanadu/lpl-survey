
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA React Icons
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
import { BsPlusSquareDotted, BsMinusSquareDotted } from 'react-icons/bs'
import { FaPaw } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Custom Components
import ShowMoreContent from '@/components/ShowMoreContent'
import BottomNav from '@/components/BottomNav'
// !VA Images
import MissBXrayStentHeart from 
'/public/img-miss-b-stent-heart.jpg'
// !VA Style modules
import * as styles from '../styles/Light.module.scss'

//prettier-ignore
function WhyStent() {


  const [activeIndex, setActiveIndex] = useState(null) 



  return (
    <>
      <NextSeo 
        title="Five Reasons to Love the Stent Treatment for Lar Par in Dogs"
        description="Need a reason to love the stent alternative to surgery for laryngeal paralysis in dogs? Look no further!"
        canonical="https://larparlife.com/whystent"
      />
      <section className={styles.section}>
    
          <div className={styles.section_content}>
    
    
              <div className={styles.why_title}>
                <h1 className={styles.why_title_head}><span className={styles.massive}>FIVE GOOD REASONS</span><br />to <FaHeart className='heart' aria-label='love' /> the
                <span className={styles.why_title_head}>Stent Treatment For Laryngeal&nbsp;Paralysis&nbsp;in&nbsp;Dogs!</span></h1>

              </div>
              <div className={styles.skip_this}>
                <div 
                  className={styles.skip_this_button}
                  >
                  <Link href="/patients/treatment/stent" className={styles.skip_this_link}>
                  Skip this and go <span className='mobile-hide-inline'>straight</span> to&nbsp;the&nbsp;<span className='nowrap'><span className='bold'>Stent</span> page&nbsp;&nbsp;<FaArrowCircleRight className={styles.related_links_figure_icon} /></span>
                  </Link>
                </div>
              </div>
              <p className={styles.content_text}>
                The laryngeal stent is the first major veterinary-medical development in laryngeal paralysis treatment in decades. It&lsquo;s not intended to replace laryngeal paralysis surgery, but instead to give veterinarians another tool for their treatment toolchest to help ease the suffering of Lar Par dogs in the short-term until surgery can be performed or even in the long-term for dogs who aren&lsquo;t candidates for surgery due advanced age, pre-existing conditions or financial constraints. And what&lsquo;s not to love about that?
              </p>
              <figure className={styles.figure_float_right}>
                <Image src={MissBXrayStentHeart}  className={styles.figure_image} alt="Miss B&rsquo;s Laryngeal Stent" />
                <figcaption className={styles.figure_caption}>Miss B loves her laryngeal stent!</figcaption>
              </figure>

    

              <div className={styles.why_content }>
                <div className={styles.heading_underline}>
                  <p className={styles.reason_heading_head}>Reason 1:</p>
                  <hr className={styles.rule_underline}/>
                </div>
                <h2 className={styles.reason_heading_text}>All People Love Their&nbsp;Dog(s)!</h2>
    
                <div className={styles.content_text}>
    
                  {/* ShowMoreComponent content start */}
                  <div className={styles.content_text}>
                    <p className={styles.showmore_content_inline}>
                    People love their LarPar dogs, no matter whether they have thousands of dollars to spend on surgery or not. And financially-challenged people who love their LarPar dogs should have an affordable option available to them, assuming that such an option exists. <span className='bold italic'>And it does</span> &mdash; so it&rsquo;s time everyone stops pretending it&nbsp;doesn&rsquo;t.&nbsp;
                    </p>
                    <ShowMoreContent
                      title='What&rsquo;s different about LarPar?'
                      index={1}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                       <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                        <p className={styles.showmore_content_text}>
                          What&rsquo;s different about laryngeal paralysis is that unlike most terminal diseases it doesn&rsquo;t destroy a vital organ&rsquo;s ability to function. Laryngeal paralysis incapacitates two pieces of cartilage in the larynx which block the airway to the lungs. So by restoring the air passage through the larynx with a stent, you can restore the health of the animal. <a href="https://www.verywellhealth.com/stents-and-when-they-are-used-1745738" className="link-dark" target="_blank" rel="noreferrer noopener">Stenting has become routine</a> in all areas of human medicine. The laryngeal stent is quick, affordable, and proven in the field to be effective. Fast-tracking the adoption of this procedure will ensure that people &mdash; regardless of their income level or willingness to subject their senior dogs to invasive surgery &mdash; don&rsquo;t have to watch their beloved companions suffer and die unnecessarily.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </div>  
                  {/* ShowMoreComponent content end */}
                </div>
              </div>
    
              <div className={styles.why_content}>
                <div className={styles.heading_underline}>
                    <p className={styles.reason_heading_head}>Reason 2:</p>
                    <hr className={styles.rule_underline}/>
                </div>
                <h2 className={styles.reason_heading_text}>All Surgery Involves&nbsp;Some&nbsp;Risk</h2>
      
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <p className={styles.showmore_content_inline}>
                    All invasive surgeries &mdash; human and veterinary&nbsp;&mdash; are associated with some risk. The laryngeal stent implant is considered a <span className='semibold-italic'>minimally-invasive</span> procedure because there&rsquo;s no incision involved. For more information and sources, see the <Link href='/patients/treatment/surgery' className='link-dark' rel="noopener noreferrer" target="_blank">Surgery</Link> page in the <Link href='/patients/treatment' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment</Link> section.&nbsp;
                  </p>
                  <ShowMoreContent
                    title='How risky is stent vs. surgery?'
                    index={2}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                     <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        Laryngeal stent implant requires no incision, so there&rsquo;s no possibility of primary infection. There are no stitches for the dog to tear or scratch at. There are no internal sutures, so there&rsquo;s no danger of suture failure which would require a repeat operation with extended anesthesia. Anesthesia for stent placement is under 10 minutes as opposed to 30 - 45 minutes for surgery. For people concerned about anesthesia intolerance in senior dogs, this is a big advantage.
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>
              
              <div  className={styles.why_content}>
                <div className={styles.heading_underline}>
                    <p className={styles.reason_heading_head}>Reason 3:</p>
                    <hr className={styles.rule_underline}/>
                </div>
                <h2 className={styles.reason_heading_text}>If You Don&rsquo;t Like It, You Can Return&nbsp;It</h2>
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <p className={styles.showmore_content_inline}>
                    If the outcome of the silicone stent placement is unacceptable to you, it can be removed in another short procedure so you can proceed with surgery. Other stent types can&lsquo;t be removed easily, if at all.
                  </p>
                  <ShowMoreContent
                    title='Can a stent be removed?'
                    index={3}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                     <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        A silicone laryngeal stent can be removed in a procedure that&rsquo;s basically the reverse of the placement procedure. That means that at any time you can go back to where you were before stent implant, making the laryngeal stent the perfect interim solution if your dog has another condition that needs to be addressed before tieback surgery. But you might find that once the stent is implanted, no further treatment is necessary. Many stent recipients lived out their full lives with a good quality of life after the implant. Stent implants are increasingly recognized as a life-long solution, not just an interim one &mdash; particularly for senior dogs suffering from geriatric-onset laryngeal paralysis and polyneuropathy (GOLPP).
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>
              
              <div className={styles.why_content}>
                  <div className={styles.heading_underline}>
                      <p className={styles.reason_heading_head}>Reason 4:</p>
                      <hr className={styles.rule_underline}/>
                  </div>
                  <h2 className={styles.reason_heading_text}>Likelihood of Aspiration&nbsp;Pneumonia</h2>
        
                  {/* ShowMoreComponent content start */}
                  <div className={styles.content_text}>
                    <p className={styles.showmore_content_inline}>
                      We have reason to believe that the risk of aspiration pneumonia is considerably less with a laryngeal stent than with tieback surgery. This has to do with the size and position of the stent compared to the aperture created by the surgically tied-back laryngeal cartilage.&nbsp;
                    </p>
                    <ShowMoreContent
                      title='Why is this a big deal?'
                      index={4}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                       <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                        <p className={styles.showmore_content_text}>
                          Aspiration pneumonia is the single most likely post-op cause of death. If it can be demonstrated that the laryngeal stent has a significantly lower risk of aspiration pneumonia, that would be a big life-saving advantage for the silicone stent compared to any surgical procedure for laryngeal paralysis. For more information, see the <Link href='/patients/treatment/stent' className='link-dark' rel="noopener noreferrer" target="_blank">Stent</Link> page in the <Link href='/patients/treatment' className='link-dark' rel="noopener noreferrer" target="_blank">Treatment</Link> section.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </div>  
                  {/* ShowMoreComponent content end */}
              </div>
    
              <div className={styles.why_content}>
                <div className={styles.heading_underline}>
                  <p className={styles.reason_heading_head}>Reason 5:</p>
                  <hr className={styles.rule_underline}/>
                </div>
                <h2 className={styles.reason_heading_text}>More Stents = More Lives Saved = More&nbsp;Revenue</h2>
      
                {/* ShowMoreComponent content start */}
                <div className={styles.content_text}>
                  <p className={styles.showmore_content_inline}>
                    Anyone who has had any routine human-medical procedure like cataract surgery or a colonoscopy knows that medical teams perform them on multiple patients in assembly-line fashion. That means that once the procedure theater has been prepared, multiple procedures can be performed consecutively, which increases safety and maximizes both productivity and revenue. &nbsp; 
                  </p>
                  <ShowMoreContent
                    title='How are stents a win-win-win for clinics, clients, and patients?'
                    index={5}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                     <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        Laryngeal stent implants are a win-win-win for  
                        people, their dogs, and the veterinarians who perform the procedure. A tieback procedure takes hours to prepare for and perform. A stent implant takes a fraction of that. So all other things being equal, that means for each tieback surgery costing $4000, an estimated 4 stent implants can be done at $1200 apiece. That&rsquo;s $4000 vs. $4800 in revenue in the same time period, with four lives saved with a stent for each one with surgery. Still, surgery will remain the preferred treatment for younger animals with congenital or acquired laryngeal paralysis, so the revenue stream from surgery won&rsquo;t go away. It&rsquo;ll require an adjustment of the business model, but will result in greater revenue as more dogs stay alive and require more years of veterinary care.
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </div>
              
              <div className={styles.why_content}>
                <h2 className={styles.reason_heading_text}>Other Advantages of Stents for Laryngeal Paralysis in Dogs?</h2>
                <p className={styles.content_text}>
                  There are probably more reasons to <FaHeart className='heart'/> the stent procedure for laryngeal paralysis in dogs that we haven&rsquo;t thought of yet. If you can think of any <Link href='/contact' className='link-dark' rel="noopener noreferrer" target="_blank">contact us here</Link> or join our <a href="https://www.facebook.com/groups/laryngealstentfordogs" className="link-dark" target="_blank" rel="noreferrer noopener">Facebook group</a>.
                </p>
              </div>
              
    


          </div>{/* .section_content .*/}  
          <BottomNav /> 
      </section>
    </>
  )
}

export default WhyStent
