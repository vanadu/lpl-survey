import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

// React Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// !VA React Icons
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
import { BsPlusSquareDotted, BsMinusSquareDotted } from 'react-icons/bs'
import { FaPaw } from 'react-icons/fa'
// !VA Custom Components
import ShowMoreContent from '../../../../components/ShowMoreContent'
import StentNav from '../../../../components/guidenav/StentNav'
import GuideNav from '@/components/GuideNav'
// !VA Images
import SiliconeStents from '../../../../../public/img-abtvet-stents.jpg'
import StentCircled from '../../../../../public/img-stent-circled.jpg'
import StentWithForceps from '../../../../../public/img-stent-with-forceps.jpg'
import DumonStent from '../../../../../public/img-dumon-stent.jpg'
import Dexstent from '../../../../../public/img-dexstent-ln.png'
import MissBXrayStent from '../../../../../public/img-miss-b-xray-stent.jpg'
import NitinolStentXraySmall from '../../../../../public/img-nitinol-stent-xray-small.jpg'




import Treats4 from '../../../../../public/img-treats-04.jpg'
import Treats5 from '../../../../../public/img-treats-05.jpg'
import Treats6 from '../../../../../public/img-treats-06.jpg'
// !VA Style modules
import * as styles from '../../../../styles/Light.module.scss'

const StentTypes = () => {

  const [isActive, setIsActive ] = useState('false')
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <NextSeo 
        title="Lar Par: Stent Types For Laryngeal Paralysis in Dogs"
        description="Learn about types of stents for canine laryngeal paralysis:  silicone stents vs Nitinol wire stents."
        canonical="https://larparlife.com/patients/treatment/stent/stenttypes"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Stent Types for <span className='mobile-show-inline'><br /></span>Laryngeal Paralysis in Dogs
            </h1>
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
            <h2 className={styles.topic_subhead_title}>Silicone Stents vs. <span className='mobile-show-inline'><br /></span>Nitinol Wire Stents</h2>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Types of Laryngeal Stents Content Start */}
          <div className={styles.content_block}>
            <p className={styles.content_text}>
              There are two currently two main types of stents for laryngeal paralysis in dogs: the <span className='semibold-italic'>silicone&nbsp;stent</span> and the <span className='semibold-italic'>Nitinol</span> stent.
            </p>
            <h2 className={styles.content_subhead}>Dumon Silicone Stent</h2>
            <figure className={styles.figure_float_right}>
                <Image src={DumonStent} className={styles.figure_image} alt="Dumon Stent"/>
              </figure>
            <p className={styles.content_text}>
              Currently, the most common type of silicone stent for laryngeal paralysis is the Dumon stent. First developed in the late 1980s, the Dumon stent is a tubular prothesis with studs on the exterior wall to anchor the prothesis in the tissue of the airway. Dumon and similar stent silicone stent designs were the only airway prothesis available until the early 2000s when self-expanding metal stents (SEMS) using Nitinol were developed for airway use. However, <a href="https://www.fda.gov/news-events/fda-brief/fda-brief-fda-outlines-considerations-medical-devices-containing-metal-alloy-nitinol-part-ongoing" className="link-dark" target="_blank" rel="noreferrer noopener">the FDA has recently issued warnings</a> for human use of Nitinol stents, which is sure to have repercussions for veterinary applications.
            </p>
    
            <h2 className={styles.content_subhead}>Nitinol Stent</h2>
    
            <figure className={styles.figure_float_right}>
              <Image src={Dexstent} className={styles.figure_image} alt="Nitinol Stent"/>
              <figcaption className={styles.figure_caption}>
                &copy;2022&nbsp;Dextronix,&nbsp;Inc. 
              </figcaption>
            </figure>
              <p className={styles.content_text}>
              For canine laryngeal paralysis, only one Nitinol stenting product has been developed &mdash; the Dextronix DexStent LN. While other Nitinol airway stents are a tubular mesh, this product is double-loop of Nitinol wire. The only information available about it is on the Dextronix website and to date no research data about the product has been publicly released. There are legitimate safety concerns with this product. For more information, see <Link href='/blog/fda-report-fuels-concerns-about-dextronix-nitinol-stent-for-dogs' className='link-dark' rel="noopener noreferrer" target="_blank">this article in the News &amp; Notes</Link> section.
            </p>
          </div>

          {/* Stent Type Details Content Start */}
            <div className={styles.content_block}>
              <div 
                className={styles.container}
                style={{ marginTop: '1rem' }}
                >
                <h2 className={styles.content_head}>Laryngeal Stent Types</h2>
                <Tabs
                  style={{ margin: '1rem 0'}}>
                  <TabList>
                    <Tab><span className='bold'>Silicon Stent FAQs</span> </Tab>
                    <Tab><span className='bold'>Nitinol Stent FAQs</span></Tab>
                  </TabList>
              
                  <TabPanel>
                    {/* ShowMoreComponent content start */}
                    <div className={styles.content_text}>
                      <p className={styles.showmore_content_inline}>
                        Silicone stents are inexpensive, have been used in human medicine for over 50 years, and are being used to treat LarPar in a growing number of clinics around the globe.&#8203;&nbsp;
                      </p>
                      <p className={styles.showmore_content_space}></p>
                      <ShowMoreContent
                        title='How do silicone stents work?'
                        index={2}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <figure className={styles.showmore_figure}>
                          <Image src={StentCircled} className={styles.showmore_figure_image} alt="Silicone Stent Implant"/>
                          <figcaption className={styles.showmore_figure_caption}>
                            Silicone Stent Implant
                          </figcaption>
                        </figure>
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents work by implanting a short (~50mm or just under 2 inches) tube that runs through the paralyzed larynx that the dog can breathe through to get air to the lungs. See the silicone stent implanted in our Labrador in the x-ray image at the top of this page.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='How is a silicone stent implanted?'
                        index={3}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <figure className={styles.showmore_figure}>
                            <Image src={StentWithForceps} className={styles.showmore_figure_image} alt="Implanting a laryngeal stent in a dog" />
                            <figcaption className={styles.showmore_figure_caption}>
                              Implanting a Laryngeal Stent
                            </figcaption>
                          </figure>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            To implant a stent, once the dog is positioned on the table and anesthesia is administered, the stent is folded over and grasped with long forceps. Then the forceps holding the stent are inserted into the dog&rsquo;s larynx. Once the stent is in the correct position, the forceps are released. No special tools are required. The process takes on average under three minutes, and normal breathing is restored as soon as the stent is in place.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='How much do silicone stents cost?'
                        index={4}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents cost approximately $160 apiece, and are currently imported from the producer in Europe. Shipping charges apply. The manufacturer recommends having three stent sizes on hand for each procedure in case sizing adjustments need to be made on&#8209;the&#8209;fly, but the client only pays for the stent that is used. How much it costs to implant the stent varies. See the <Link href='/patients/aboutlarpar/cost' className='link-dark'>Treatment Costs</Link> page in the <Link href='/patients' className='link-dark'>Patients</Link> section for more details about treatment costs.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do silicone stents ever need to be replaced?'
                        index={5}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents can be replaced if the need arises. But in the majority of cases we know of, the dogs lived the rest of their lives with the same stent. Sam, one of the first stent recipients, lived two years and three months after the implant with the same stent with no negative side&#8209;effects. Our Miss B has lived eight months to date with her stent.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do silicone stents have side&#8209;effects?'
                        index={6}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents can result in throat-clearing and periodic light coughing. <span className='mobile-hide-inline'>This can happen as the dog reacts to the foreign object and clears mucus and detritus that may collect around the stent opening.</span> A similar cough is often reported in LarPar dogs, with or without surgery.<span className='mobile-hide-inline'> This happens because the natural mechanisms that a healthy larynx has for clearing material from the laryngeal orifice area don&rsquo;t work with a paralyzed larynx.</span> Halitosis ranging from mild to extreme has been reported in some stent recipients. In rare cases, the patient can have an allergic reaction or the tissue around the stent can become infected, in which case the stent has to be removed. We believe most of these issues will be resolved as the veterinary community adopts the procedure and turns its attention to solving issues. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Has any dog ever died after a stent implant?'
                        index={7}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            To our knowledge, no dog has died as a direct result of a stent implant. If the stent isn&rsquo;t tolerated, it can simply be removed in a procedure that is the reverse of the implantation.
                          </p>
                        </div>
                      </ShowMoreContent>
                    </div>  
                    {/* ShowMoreComponent content end */}
    
    
    
                  </TabPanel>
                  
                  <TabPanel>
                    {/* ShowMoreComponent content start */}
                    <div className={styles.content_text}>
                      <p className={styles.showmore_content_inline}>
                        The Dextronix DexStent LN Nitinol stents is a patented product for human-medical applications to treat vocal cord paresis. It is currently under FDA review. It is unclear whether it is approved for veterinary use. No research data about this product has been publicly released. The information below is paraphrased from the Dextronix website. The statements below represent the opinions of this author regarding about the product based on the available information. For complete information about the Dextronix DexStent LN, contact Dextronix Inc.&#8203;&nbsp;&#8203;&nbsp;
                      </p>
                      <p className={styles.showmore_content_space}></p>
                      <ShowMoreContent
                        title='How does the Nitinol stent work?'
                        index={8}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <figure className={styles.showmore_figure}>
                            <Image src={NitinolStentXraySmall} className={styles.showmore_figure_image} alt="Nitinol Stent Implant"/>
                            <figcaption className={styles.showmore_figure_caption}>
                              X-ray of Nitinol Stent
                            </figcaption>
                          </figure>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            The Nitinol stent is a nickel-titanium wire structure that expands and contracts in response to muscular activity (i.e. swallowing, coughing and barking), thereby allowing the larynx to open and close. The goal is to emulate the function of a healthy larynx. This is in contrast to silicon stents and surgery which leave an orifice in the laryngeal cavity that is always open, increasing the risk of aspiration pneumonia.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='How is a Nitinol stent implanted?'
                        index={9}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            The Nitinol stent is implanted using a <a href="https://dextronix.egnyte.com/dl/2Lbjxntdgt" className="link-dark" target="_blank" rel="noreferrer noopener">proprietary three-part &lsquo;delivery system&rsquo;</a>. It is unclear whether the delivery device is also able to remove the device. The stent can&rsquo;t be implanted without these delivery devices. It&rsquo;s still unclear whether DVMs have to purchase this delivery system separately or whether it&rsquo;s included in the price of the stent purchase. We have no idea what it costs, but it looks expensive. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='What does a Nitinol stent cost?'
                        index={10}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            We inquired in 2020 and were told it would cost around $1800. Recently, we heard a report that the cost would be closer to $1200. That doesn&rsquo;t include the cost of the implant procedure. This puts the price range close to the cost of tieback surgery. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do Nitinol stents ever need to be replaced?'
                        index={11}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            We assume the Nitinol stent is a permanent implant but as with any stent implant, if it&rsquo;s not tolerated by the patient or in case of some unforseen issue with the product it would need to be removed. There&rsquo;s no information about whether there any complications associated with the product removal. NOTE: We have of a case in which it was stated that the product could not be removed after a period of several weeks due to tissue growth. It&lsquo;s reasonable to assume this means that the device is intended to be a permanent, non-removable implant.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do Nitinol stents have side&#8209;effects?'
                        index={12}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Many of the same possible adverse effects as with silicon stents are noted in the product documentation. But one thing of great concern is specific to this product: <span className='bold italic'>fracture</span>. We don&rsquo;t know if that means that the product itself can break or fracture and if that might result in a piece of titanium wire stuck in your dog&rsquo;s throat. Again, the manufacturer has released no information detailing the fracture risk besides a passing remark about it on the official website. We are aware of at least one case in which the device fractured, resulting in recurrence of end-stage LP symptoms. Subsequently, the device could not be removed without invasive surgery. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Has any dog ever died from a Nitinol stent implant?'
                        index={13}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            The manufacturer hasn&rsquo;t released any research information, so we don&rsquo;t know whether any dogs have died as a result of the DexStent LN implant. The company claims to have done research with the <a href="https://www.vet.upenn.edu/" className="link-dark" target="_blank" rel="noreferrer noopener">University of Pennsylvania College of Veterinary Medicine</a>, which UPennVet publicly denies.  We have a hard time understanding why this research is unavailable to the public.
                          </p>
                        </div>
                      </ShowMoreContent>
                    </div>
    
                  </TabPanel>
                </Tabs>
    
              </div>
            </div>
            {/* Stent Type Details Content Start */}

        </div>
      </section>

      {/* Stent Type Details Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Stent Type Details Content Start */}
          <div className={styles.content_block}>
              <div 
                className={styles.container}
                style={{ marginTop: '1rem' }}
                >
                <h2 className={styles.content_head}>Laryngeal Stent Types</h2>
                <Tabs
                  style={{ margin: '1rem 0'}}>
                  <TabList>
                    <Tab><span className='bold'>Silicon Stent FAQs</span> </Tab>
                    <Tab><span className='bold'>Nitinol Stent FAQs</span></Tab>
                  </TabList>
              
                  <TabPanel>
                    {/* ShowMoreComponent content start */}
                    <div className={styles.content_text}>
                      <p className={styles.showmore_content_inline}>
                        Silicone stents are inexpensive, have been used in human medicine for over 50 years, and are being used to treat LarPar in a growing number of clinics around the globe.&#8203;&nbsp;
                      </p>
                      <p className={styles.showmore_content_space}></p>
                      <ShowMoreContent
                        title='How do silicone stents work?'
                        index={2}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <figure className={styles.showmore_figure}>
                          <Image src={StentCircled} className={styles.showmore_figure_image} alt="Silicone Stent Implant"/>
                          <figcaption className={styles.showmore_figure_caption}>
                            Silicone Stent Implant
                          </figcaption>
                        </figure>
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents work by implanting a short (~50mm or just under 2 inches) tube that runs through the paralyzed larynx that the dog can breathe through to get air to the lungs. See the silicone stent implanted in our Labrador in the x-ray image at the top of this page.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='How is a silicone stent implanted?'
                        index={3}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <figure className={styles.showmore_figure}>
                            <Image src={StentWithForceps} className={styles.showmore_figure_image} alt="Implanting a laryngeal stent in a dog" />
                            <figcaption className={styles.showmore_figure_caption}>
                              Implanting a Laryngeal Stent
                            </figcaption>
                          </figure>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            To implant a stent, once the dog is positioned on the table and anesthesia is administered, the stent is folded over and grasped with long forceps. Then the forceps holding the stent are inserted into the dog&rsquo;s larynx. Once the stent is in the correct position, the forceps are released. No special tools are required. The process takes on average under three minutes, and normal breathing is restored as soon as the stent is in place.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='How much do silicone stents cost?'
                        index={4}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents cost approximately $160 apiece, and are currently imported from the producer in Europe. Shipping charges apply. The manufacturer recommends having three stent sizes on hand for each procedure in case sizing adjustments need to be made on&#8209;the&#8209;fly, but the client only pays for the stent that is used. How much it costs to implant the stent varies. See the <Link href='/patients/aboutlarpar/cost' className='link-dark'>Treatment Costs</Link> page in the <Link href='/patients' className='link-dark'>Patients</Link> section for more details about treatment costs.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do silicone stents ever need to be replaced?'
                        index={5}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents can be replaced if the need arises. But in the majority of cases we know of, the dogs lived the rest of their lives with the same stent. Sam, one of the first stent recipients, lived two years and three months after the implant with the same stent with no negative side&#8209;effects. Our Miss B has lived eight months to date with her stent.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do silicone stents have side&#8209;effects?'
                        index={6}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Silicone stents can result in throat-clearing and periodic light coughing. <span className='mobile-hide-inline'>This can happen as the dog reacts to the foreign object and clears mucus and detritus that may collect around the stent opening.</span> A similar cough is often reported in LarPar dogs, with or without surgery.<span className='mobile-hide-inline'> This happens because the natural mechanisms that a healthy larynx has for clearing material from the laryngeal orifice area don&rsquo;t work with a paralyzed larynx.</span> Halitosis ranging from mild to extreme has been reported in some stent recipients. In rare cases, the patient can have an allergic reaction or the tissue around the stent can become infected, in which case the stent has to be removed. We believe most of these issues will be resolved as the veterinary community adopts the procedure and turns its attention to solving issues. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Has any dog ever died after a stent implant?'
                        index={7}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            To our knowledge, no dog has died as a direct result of a stent implant. If the stent isn&rsquo;t tolerated, it can simply be removed in a procedure that is the reverse of the implantation.
                          </p>
                        </div>
                      </ShowMoreContent>
                    </div>  
                    {/* ShowMoreComponent content end */}
    
    
    
                  </TabPanel>
                  
                  <TabPanel>
                    {/* ShowMoreComponent content start */}
                    <div className={styles.content_text}>
                      <p className={styles.showmore_content_inline}>
                        The Dextronix DexStent LN Nitinol stents is a patented product for human-medical applications to treat vocal cord paresis. It is currently under FDA review. It is unclear whether it is approved for veterinary use. No research data about this product has been publicly released. The information below is paraphrased from the Dextronix website. The statements below represent the opinions of this author regarding about the product based on the available information. For complete information about the Dextronix DexStent LN, contact Dextronix Inc.&#8203;&nbsp;&#8203;&nbsp;
                      </p>
                      <p className={styles.showmore_content_space}></p>
                      <ShowMoreContent
                        title='How does the Nitinol stent work?'
                        index={8}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <figure className={styles.showmore_figure}>
                            <Image src={NitinolStentXraySmall} className={styles.showmore_figure_image} alt="Nitinol Stent Implant"/>
                            <figcaption className={styles.showmore_figure_caption}>
                              X-ray of Nitinol Stent
                            </figcaption>
                          </figure>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            The Nitinol stent is a nickel-titanium wire structure that expands and contracts in response to muscular activity (i.e. swallowing, coughing and barking), thereby allowing the larynx to open and close. The goal is to emulate the function of a healthy larynx. This is in contrast to silicon stents and surgery which leave an orifice in the laryngeal cavity that is always open, increasing the risk of aspiration pneumonia.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='How is a Nitinol stent implanted?'
                        index={9}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            The Nitinol stent is implanted using a <a href="https://dextronix.egnyte.com/dl/2Lbjxntdgt" className="link-dark" target="_blank" rel="noreferrer noopener">proprietary three-part &lsquo;delivery system&rsquo;</a>. It is unclear whether the delivery device is also able to remove the device. The stent can&rsquo;t be implanted without these delivery devices. It&rsquo;s still unclear whether DVMs have to purchase this delivery system separately or whether it&rsquo;s included in the price of the stent purchase. We have no idea what it costs, but it looks expensive. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='What does a Nitinol stent cost?'
                        index={10}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            We inquired in 2020 and were told it would cost around $1800. Recently, we heard a report that the cost would be closer to $1200. That doesn&rsquo;t include the cost of the implant procedure. This puts the price range close to the cost of tieback surgery. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do Nitinol stents ever need to be replaced?'
                        index={11}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            We assume the Nitinol stent is a permanent implant but as with any stent implant, if it&rsquo;s not tolerated by the patient or in case of some unforseen issue with the product it would need to be removed. There&rsquo;s no information about whether there any complications associated with the product removal. NOTE: We have of a case in which it was stated that the product could not be removed after a period of several weeks due to tissue growth. It&lsquo;s reasonable to assume this means that the device is intended to be a permanent, non-removable implant.
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Do Nitinol stents have side&#8209;effects?'
                        index={12}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            Many of the same possible adverse effects as with silicon stents are noted in the product documentation. But one thing of great concern is specific to this product: <span className='bold italic'>fracture</span>. We don&rsquo;t know if that means that the product itself can break or fracture and if that might result in a piece of titanium wire stuck in your dog&rsquo;s throat. Again, the manufacturer has released no information detailing the fracture risk besides a passing remark about it on the official website. We are aware of at least one case in which the device fractured, resulting in recurrence of end-stage LP symptoms. Subsequently, the device could not be removed without invasive surgery. 
                          </p>
                        </div>
                      </ShowMoreContent>
                      <span className={styles.showmore_content_space}></span>
                      <ShowMoreContent
                        title='Has any dog ever died from a Nitinol stent implant?'
                        index={13}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        >
                        <div className={styles.showmore_content_block}>
                          <span className={styles.showmore_content_space}></span>
                          <p className={styles.showmore_content_text}>
                            The manufacturer hasn&rsquo;t released any research information, so we don&rsquo;t know whether any dogs have died as a result of the DexStent LN implant. The company claims to have done research with the <a href="https://www.vet.upenn.edu/" className="link-dark" target="_blank" rel="noreferrer noopener">University of Pennsylvania College of Veterinary Medicine</a>, which UPennVet publicly denies.  We have a hard time understanding why this research is unavailable to the public.
                          </p>
                        </div>
                      </ShowMoreContent>
                    </div>
    
                  </TabPanel>
                </Tabs>
    
              </div>
            </div>
            {/* Stent Type Details Content Start */}


        </div>
      </section>



    </>
  )
}

export default StentTypes