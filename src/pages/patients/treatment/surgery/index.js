import React from 'react'
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
// !VA Custom Components
import ShowMoreContent from '../../../../components/ShowMoreContent'
import SurgeryNav from '../../../../components/guidenav/SurgeryNav'
import GuideNav from '@/components/GuideNav'
// !VA Images
import Pharynx from '../../../../../public/img-pharynx.jpg'
import { useEffect, useState, useRef } from 'react'

// !VA Styles
import * as styles from '../../../../styles/Light.module.scss'


const Surgery = () => {
  const [activeIndex, setActiveIndex] = useState()

  return (
    <>
      <NextSeo 
        title="Lar Par Surgery for Dogs: Types, Risk Factors and Background"
        description="Learn about the risk factors and quality of life cost/benefit associated with laryngeal paralysis surgery."
        canonical="https://larparlife.com/patients/treatment/surgery"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Lar Par Surgery for Dogs: Types, Risk Factors and Background</h1>
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
            <h2 className={styles.topic_subhead_title}>Surgical Treatment Options for<span className='mobile-hide-inline'>&nbsp;Canine</span>&nbsp;Laryngeal&nbsp;Paralysis</h2>
          </div>

        </div>
      </section>  

      {/* Overview Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          <p className={styles.content_text}>
            Since the 1980&rsquo;s, surgery has been the only effective treatment for laryngeal paralysis and will remain the recommended veterinary-medical treatment until the <Link href='\patients\treatment\stent' className='link-dark'>stent procedure</Link> gains widespread adoption. You can find financial estimates for various options on the <Link href='patients/aboutlarpar/cost' className='link-dark'>Treatment Costs</Link> page. 
          </p>
          <p className={styles.content_text}>Surgery has a high likelihood of restoring your dog&rsquo;s breathing and quality of life to a pre-LP condition. However, surgery is expensive and there are significant risk factors. Each person must evaluate risk factors and cost to determine whether surgery is right for them.</p>
          <p className={styles.content_text}>
            You&rsquo;ll probably hear different opinions on surgery depending on whether the outcome was good or poor for any particular dog. If you want unbiased information, look to scientific research. You can find a compilation of peer-reviewed veterinary research from over 40 years on the <Link href='/patients/links' className='link-dark' rel="noopener noreferrer" target="_blank">Research and Links</Link> page.
          </p>
          
        </div>
      </section>


      {/* Cost/Benefit Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

            {/* Cost/Benefit of Surgery Content Start */}
            <div className={styles.content_block}>
  
              <h2 className={styles.content_head}>Cost/Benefit of Surgery</h2>
              
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}>
                  Weighing the cost vs. benefit of surgery means not just the financial aspect, but also the toll surgery might have on your dog&rsquo;s quality of life in the short- and long-term. 
                </p>
                <p className={styles.showmore_content_space}></p>       
                <ShowMoreContent
                  title='Is prolonging life with surgery the best thing for my dog?'
                  index={1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      Surgery will most likely restore your dog&rsquo;s breathing so he or she can live out their natural life. But what if there are significant post-op complications or more health issues appear and your financial resources are stretched thin? What if the dog&rsquo;s net remaining quality of life is less <span className='italic'>with</span> surgery than it would have been <span className='italic'>without</span> it? These are very difficult questions that are unique to laryngeal paralysis because surgery is <span className='italic'>likely</span> to restore quality of life and prolong the natural life of the dog &mdash; but not without significant cost and risk. The risk assessment is treatment-specific, so the cost/benefit equation will be different for surgery and stent. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
            </div>
            {/* Cost/Benefit of Surgery Content End */}
          
        </div>
      </section>

      {/* Risk Assessment Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

            {/* Risk Assessment Content Start */}
            <div className={styles.content_block}>

              <h2 className={styles.content_head}>Risk Assessment</h2>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <p className={styles.showmore_content_inline}>
                  All surgery &mdash; human or veterinary &mdash; is associated with some risk, which can be broken down in terms of <span className='semibold-italic'>likelihood</span> of occurrence and <span className='semibold-italic'>severity</span> of outcome.
                </p>
                <ShowMoreContent
                  title='Is laryngeal paralysis surgery risky?'
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      <span className='semibold-italic'>Risky</span> is a loaded word that doesn&rsquo;t give us any helpful information about the actual <span className='semibold-italic'>level of risk</span> involved in a procedure. So it&rsquo;s better to talk about <span className='semibold-italic'>risk factors</span> to get an accurate risk assessment of laryngeal paralysis surgery.
                    </p>
                  </div>
                </ShowMoreContent>

              </div>  
              {/* ShowMoreComponent content end */}
              
            </div>
            {/* Risk Assessment Content End */}

          
        </div>
      </section>

      {/* Risk Factors Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

            {/* Risk Factors Content Start */}
            <div className={styles.content_block}>

              <h3 className={styles.content_subhead}>Risk Factors</h3>
              <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <span className='bold'>Incision site issues</span> &mdash; The dog can scratch or tear sutures, or a seroma (fluid buildup under the incision) or bacterial infection can develop at the incision.&#8203;&nbsp;
                  {/* ShowMoreComponent content start */}
                  <p className={styles.showmore_content_space}></p>
                  <div className={styles.showmore_content_list}>
                    <ShowMoreContent
                      title='How dangerous are incision site issues?'
                      index={3}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                      <div className={styles.showmore_content_block}>

                          <p className={styles.content_text}>
                          Incision site problems rarely develop into serious conditions. If the dog gets at the incision site, find a way to prevent it and get the wound treated. Seromas and bacterial infections are treatable by your veterinarian. So while the <span className='semibold-italic'>likelihood</span> of problems with the incision site is moderate, the <span className='semibold-italic'>severity</span> of possible issues is generally very low.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </div>
                  <hr className={styles.content_list_spacer}/>
                  {/* ShowMoreComponent content end */}
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Anesthesia intolerance</span> &mdash; A small percentage of dogs can have adverse reactions to anesthesia ranging from vomiting to stroke and cardiac arrest. Older dogs are at greater risk for anesthesia intolerance.&#8203;&nbsp;
                {/* ShowMoreComponent content start */}
                <p className={styles.showmore_content_space}></p>
                <div className={styles.showmore_content_list}>
                  <ShowMoreContent
                    title='How dangerous is anesthesia in larygeal paralysis surgery?'
                    index={4}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        Laryngeal paralysis surgery requires a relatively long anesthesia time (avg. 30 - 45 minutes). Different breeds can react differently to anesthesia. Anesthesia guidelines have been recently updated to incorporate current research and improve safety. <a href="https://www.aaha.org/aaha-guidelines/2020-aaha-anesthesia-and-monitoring-guidelines-for-dogs-and-cats/anesthesia-and-monitoring-home/" className="link-dark" target="_blank" rel="noreferrer noopener">According to the AAHA</a>, anesthesia protocols, and hence safety, differ from practice to practice and depend on individual anesthesiologists. There are no science-based statistics on anesthesia-related mortality during or after laryngeal paralysis surgery. While the <span className='semibold-italic'>likelihood</span> of severe anesthesia reaction is very low, the possible <span className='semibold-italic'>severity</span> is very high. 
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
                <hr className={styles.content_list_spacer}/>
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <span className='bold'>Failure of suture at the cartilage </span>&mdash; In some cases, the sutures that &lsquo;tie-back&rsquo; the paralyzed cartilage to the laryngeal wall can fail, causing the cartilage to return to its pre-surgery position.&#8203;&nbsp;
                  {/* ShowMoreComponent content start */}
                  <p className={styles.showmore_content_space}></p>
                  <div className={styles.showmore_content_list}>
                    <ShowMoreContent
                      title='How dangerous is it if the sutures fail?'
                      index={5}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                      <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                        <p className={styles.showmore_content_text}>
                          If the sutures that &rsquo;tie-back&lsquo; the laryngeal cartilage fail, laryngeal paralysis symptoms will reappear and the dog is basically back at square one. You&rsquo;ll have to decide again whether to repeat the surgery if possible, to implant a laryngeal stent if available, or decline further treatment. Sutures can fail months or even years after the operation. While the <span className='semibold-italic'>likelihood</span> of suture failure is generally considered very low, i.e. less than 3%, the <span className='semibold-italic'>severity</span> of such a failure is very high due to the high cost of the repeat surgery and the possible breathing emergency that could result from recurrence of symptoms.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </div>  
                  {/* ShowMoreComponent content end */}
                  <hr className={styles.content_list_spacer}/>
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <span className='bold'>Aspiration pneumonia</span> &mdash; When contaminants (i.e. anything that&rsquo;s not air) enter the lungs, an infection is likely to result. This is far and away the biggest risk factor and the most frequent post-op cause of death after laryngeal paralysis surgery.&#8203;&nbsp; 
                  {/* ShowMoreComponent content start */}
                  <p className={styles.showmore_content_space}></p>
                  <div className={styles.showmore_content_list}>
                    <ShowMoreContent
                      title='How dangerous is aspiration pneumonia?'
                      index={6}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      >
                      <div className={styles.showmore_content_block}>
                        <span className={styles.showmore_content_space}></span>
                        <p className={styles.showmore_content_text}>
                          Aspiration pneumonia is a very serious, potentially life-threatening condition. It&rsquo;s especially dangerous in the days after surgery because dogs are more likely to cough, gag, and regurgitate stomach contents, which can then be inhaled and reach the lungs. Post-op AP can range from mild to severe and is treated with antibiotics. Aspiration pneumonia mortality has been shown to increase over time. So regarding <span className='semibold-italic'>likelihood</span>, to quote <a href="https://pubmed.ncbi.nlm.nih.gov/26720085/" className="link-dark" target="_blank" rel="noreferrer noopener">this 25-year study</a>, <span className='italic'>&ldquo;The 1-, 3-, and 4-year survival rates for dogs with postoperative aspiration pneumonia were 83.1%, 51.5%, and 25.8%, respectively.&rdquo;</span> &nbsp;What this may mean is that even after successful tieback or other surgery, your LarPar dog&rsquo;s quality of life may greatly increase, he/she but may never be out of the woods because the risk of aspiration pneumonia will remain and possibly increase for the lifespan of the dog. Since AP results in a significant number of deaths, the severity level can be considered <span className='semibold-italic'>high</span>.
                        </p>
                      </div>
                    </ShowMoreContent>
                  </div>  
                  {/* ShowMoreComponent content end */}
                  <hr className={styles.content_list_spacer}/>
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Coexisting conditions</span> &mdash; Existing conditions of the pharynx (throat cavity), digestive or respiratory system can increase the likelihood and severity of surgery-related complications, particularly aspiration pneumonia.
                {/* ShowMoreComponent content start */}
                <p className={styles.showmore_content_space}></p>
                <div className={styles.showmore_content_block}>
                  <ShowMoreContent
                    title='How do coexisting conditions play a role?'
                    index={7}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <figure className={styles.figure_small}>
                        <Image src={Pharynx} className={styles.figure_small_image} alt="Laryngeal Paralysis &mdash; Pharynx"/>
                        <figcaption className={styles.showmore_figure_caption}>
                          Pharynx 
                        </figcaption>
                      </figure>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        The larynx is part of a complex, interrelated <span className='semibold-italic'>pharynx</span> in which a dysfunction in one part causes an imbalance that affects other parts. For instance, if the esophagus is dysfunctional, that can cause the dog to regurgitate. A functioning larynx would work to block the regurgitant from passing through the larynx to the trachea and lungs. But with tieback, one of those cartilages that would normally block out contaminants is always open, so the regurgitant always has access to the trachea and lungs, which increases the risk of aspiration pneumonia. This is one way that coexisting conditions (<span className='italic'>comorbidities</span>) can affect both the <span className="semibold-italic">likelihood</span> and <span className="semibold-italic">severity</span> of post-op complications.  
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
                  <hr className={styles.content_list_spacer}/>
                </li>
              </ul>
              
            </div>
            {/* Risk Factors Content End */}
          
        </div>
      </section>

      {/* Negotiating Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

            {/* Negotiating Realities Content Start */}
            <div className={styles.content_block}>

              <h2 className={styles.content_head}>Negotiating the Realities</h2>
              <p className={styles.content_text}>
                Post-operative complications of laryngeal paralysis surgery are often talked about in terms of <span className='semibold-italic'>likelihood</span> of occurrence without addressing the their potential <span className='semibold-italic'>severity</span>.
              </p>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='How do websites and social media spin LarPar surgery?'
                  index={8}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className={styles.showmore_content_block}>
  
                  <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                    <p className={styles.showmore_content_inline}>
                      Websites and research papers frame LarPar surgery in favorable terms and social media tends to highlight the pro-surgery narrative. For instance:
                    </p>
                      
                    <ul className={styles.content_list_no_bullet}>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <a href="https://cvm.msu.edu/scs/research-initiatives/golpp/living-with-golpp" className="link-dark" target="_blank" rel="noreferrer noopener">According to the University of Michigan</a>,<span className='italic'> &ldquo;failure of tieback surgery is extremely rare, if done correctly&rdquo;</span>. That doesn&rsquo;t tell us anything about <span className='semibold-italic'>how often it&rsquo;s done correctly</span> and <span className='semibold-italic'>how often it&rsquo;s not</span>.
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  The same UM web page states an 18% risk of aspiration pneumonia without providing any information about recurrence or mortality.
                </li>
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  <a href="https://www.akc.org/expert-advice/health/what-to-know-about-anesthesia/" className="link-dark" target="_blank" rel="noreferrer noopener">According to the AKC</a>, 1 in 2,000 <span className='semibold-italic'>healthy</span> dogs die from anesthesia annually, but that says nothing about how many <span className='semibold-italic'>unhealthy</span> ones do, and LarPar dogs aren&rsquo;t healthy. 
                </li>
                
                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  Social media tends to amplify testimonials of those people whose experience with surgery has been positive, because those people are most likely to remain active in the social media forum. People whose experience was negative tend to stop participating in these social media forums after the death of their dog, because the LarPar narrative is associated with traumatic, painful memories. For a detailed analysis, <Link href='/blog/inwiththenew' className='link-dark'>see this blog post</Link>.
                </li>
              </ul>
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              
            </div>
            {/* Negotiating Realities Content Start */}
          
        </div>
      </section>

      {/* Summary Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>


            {/* Summry and Conclusions Content Start */}
            <div className={styles.content_block}>

              <h2 className={styles.content_head}>Summary &amp; Conclusions</h2>
              <p className={styles.content_text}>
                While most sources describe excellent outcomes of laryngeal paralysis surgery, there are possible complications that may result in an ongoing financial commitment and negative quality of life for the dog. Assessing risk factors is difficult due to a lack of science-based research and hard statistics. Online sources tend to frame the surgery narrative in vague terms that downplay the severity of negative outcomes. Social media tends to promote surgery-positive narratives and suppress negative ones. So while surgery can result in a longer, happier life for your dog, no matter what steps you take to minimize it, chance will always play a role in the outcome. Each person must determine for themselves whether the risk involved in surgery justifies not just the financial expenditure, but also reflects the best interests of the companion animal.
              </p>
              <p className={styles.content_text}>
                &nbsp;
              </p>
            </div>
            {/* Summry and Conclusions Content Start */}
          
        </div>
      </section>

    </>
  )
}

export default Surgery