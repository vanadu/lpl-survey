import {Metadata} from 'next'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

// !VA React Icons
import { FaPaw } from 'react-icons/fa'
// !VA Custom Components
import ShowMoreContent from '../../../../components/ShowMoreContent'
import StentNav from '../../../../components/guidenav/StentNav'
import GuideNav from '@/components/GuideNav'

// !VA Images
import SiliconeStents from '../../../../../public/img-abtvet-stents.jpg'
import MissBXrayStent from '../../../../../public/img-miss-b-xray-stent.jpg'
// !VA Style modules
import * as styles from '../../../../styles/Light.module.scss'



export const metadata = {
  title: 'Laryngeal Stent',
}


//prettier-ignore
function Stent() {



  const refBackground = useRef();
  const refStudies = useRef();
  const refJosephine = useRef();
  const refProcedure = useRef();
  const refAftermath = useRef();
  // const refEpi = useRef();

  // !VA 2024 isActive is not used, I don't think
  const [isActive, setIsActive ] = useState('false')
  // !VA ShowMore component index
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <NextSeo 
        title="Lar Par: Stent Treatment for Laryngeal Paralysis in Dogs"
        description="Learn about the risks, benefits, and other details about stent implants for laryngeal paralysis in dogs."
        canonical="https://larparlife.com/patients/treatment/stent"
      />
      {/* Navigation for the Guide pages with All Topics and About Stents links */}
      <GuideNav />
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Stent Treatment for <span className='mobile-show-inline'><br /></span>Laryngeal Paralysis in Dogs</h1>
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
            <h2 className={styles.topic_subhead_title}>The 21st Century Solution <span className='mobile-show-inline'><br /></span>for Senior Lar Par Dogs
            </h2>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <figure className={styles.figure_float_right}>
            <Image src={MissBXrayStent}  className={styles.figure_image} alt="Miss B&rsquo;s laryngeal stent" />
            <figcaption className={styles.figure_caption}>Miss B&rsquo;s Laryngeal Stent</figcaption>
          </figure>
          <p className={styles.content_text}>
            Our 13-year-old Labrador was suffocating when they closed the door. When we came in five minutes later she was awake and breathing normally &mdash; without surgery. So why are people saying surgery is the only way to treat laryngeal paralysis in dogs? 
          </p>
          <div className={styles.content_text}>
            <p className={styles.showmore_content_inline}>
            What they&rsquo;re not talking about is the <span className='semibold-italic'>laryngeal stent</span> &mdash; the future of laryngeal paralysis treatment in the 21st century.&#8203;&nbsp;
            </p>
          </div>  
        </div>
      </section>


      {/* Stent Procedure Section  */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* The Laryngeal Stent Procedure Content Start */}
          <div className={styles.content_block}>
            <h2 className={styles.content_head}>The Laryngeal Stent Procedure<span className='mobile-hide-inline'> for Canine&nbsp;Laryngeal&nbsp;Paralysis</span></h2>
            {/* ShowMoreComponent content start */}
            <div className={styles.showmore_content_block}>
                <p className={styles.content_text}>
                The laryngeal stent procedure for laryngeal paralysis in dogs is quick and affordable. There&rsquo;s no surgery, no stitches, no incision, no penetration of tissue at all and therefore no chance for post-surgical infection. It takes as little as five minutes, which means only five minutes of anesthesia. Normal breathing is restored immediately, the recovery period is short, and post-procedure medications are minimal.&#8203;&nbsp;
              </p>
              <ShowMoreContent
                title='What&rsquo;s a laryngeal stent?'
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className={styles.showmore_content_block}>
                  <figure className={styles.showmore_figure}>
                    <Image src={SiliconeStents} className={styles.showmore_figure_image} alt="Silicone Laryngeal Stents for Dogs"/>
                    <figcaption className={styles.showmore_figure_caption}>
                      Silicone Laryngeal Stents for Dogs
                    </figcaption>
                  </figure>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    A laryngeal stent is an artificial structure placed within the paralyzed larynx to allow air to pass unobstructed to the lungs. Once implanted, stents stay in position without sutures or incisions. This is a completely different paradigm than 20th century approaches that permanently modify the structure of the larynx through surgery.
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}

          </div>
          {/* The Laryngeal Stent Procedure Content End */}

        </div>
      </section>

      {/* Cost Benefit Section */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          
          {/* The Cost/Benefit Content Start */}
          <div className={styles.content_block}>

            <h2 className={styles.content_head}>Cost/Benefit of Laryngeal Stents</h2>
            
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <p className={styles.showmore_content_inline}>
                Weighing the cost vs. benefit of a stent procedure means not just the financial aspect, but also the toll the procedure might have on your dog&rsquo;s quality of life in the short- and long-term.&nbsp;
              </p>
              <ShowMoreContent
                title='Is prolonging life with a laryngeal stent the best thing for my dog?'
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    Just like surgery, a laryngeal stent can restore your dog&rsquo;s breathing so he or she can live out her or his natural life. But the difference between surgery and stent lies in the cost &mdash; not just the financial aspect but also in terms of the burden placed on the dog with regard to recovery time and possible complications. The laryngeal stent procedure takes a fraction of the time to perform, costs on average a fraction of the money, and comes with significantly fewer possible complications compared to surgery.In case of unforeseen issues, it can also simply be removed in a simple procedure. Consequently, the risk assessment is much simpler and entails less stress and uncertainty for the pet parent and the dog than the surgical option.
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
          </div>
          {/* The Cost/Benefit Content End */}

        </div>
      </section>

      {/* Risk Assessment Content Block */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          
        <h2 className={styles.content_head}>Risk Assessment</h2>
        {/* ShowMoreComponent content start */}
        <div className={styles.content_text}>
          <p className={styles.showmore_content_space}></p>   
          <p className={styles.showmore_content_inline}>
            Laryngeal stent placement isn&rsquo;t surgery, so many of the risk factors associated with surgery don&rsquo;t apply. But the stent procedure isn&rsquo;t risk&#8209;free. Just like with surgery, it can be helpful to view risk factors in terms of <span className='semibold-italic'>likelihood</span> of occurrence and <span className='semibold-italic'>severity</span> of outcome.
          </p>
          <span className={styles.showmore_content_space}></span>
          <ShowMoreContent
            title='Is the laryngeal stent procedure risky?'
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            >
            <div className={styles.showmore_content_block}>
              <p className={styles.showmore_content_text}>
                Since the stent procedure involves no incision, requires minimal anesthesia, and can be reversed by simply removing the stent, it&rsquo;s reasonable to say that stent placement is not a risky procedure when compared to surgical treatments. Having said that, there are post-procedure complications that can occur with both stent and surgery, so it&rsquo;s best to talk about the actual <span className='semibold-italic'>risk factors</span>.
              </p>
            </div>
          </ShowMoreContent>
        </div>  
        {/* ShowMoreComponent content end */}

        </div>
      </section>

      {/*  */}
      <section className={styles.section}>
        <div className={styles.section_content}>

          {/* Risk Factors Content Start */}
          <div className={styles.content_block}>
            <h3 className={styles.content_subhead}>Risk Factors</h3>
            <ul className={styles.content_list_no_bullet}>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                <span className='bold'>Stent migration</span> &mdash; After placement, the stent can shift out of position. In this case, a corrective procedure is required to reposition it. 
                {/* ShowMoreComponent content start */}
                <div className={styles.showmore_content_list}>
                  <ShowMoreContent
                    title='How dangerous is it if the stent migrates?'
                    index={4}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                        Stent sizing and positioning is different for each individual dog and can&rsquo;t be exactly determined in advance. Spasmodic coughing or gagging can cause a stent to migrate out of position or even be coughed out. While these aren&rsquo;t dangerous situations, they do require a repeat procedure to correct and in the interim, laryngeal paralysis symptoms reappear. The likelihood of stent migration can be reduced with medications, but some level of risk will always be there. However, since the stent placement is quick and affordable compared to surgery, while the <span className='semibold-italic'>likelihood</span> of stent migration is low to moderate, the <span className='semibold-italic'>severity</span> of possible issues is generally considered to be low.
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Anesthesia intolerance</span> &mdash; A small percentage of dogs can have adverse reactions to anesthesia ranging from vomiting to stroke and cardiac arrest. Older dogs are at greater risk for anesthesia intolerance.
              {/* ShowMoreComponent content start */}
              <div className={styles.showmore_content_list}>
                <ShowMoreContent
                  title='How dangerous is anesthesia in larygeal stent placement?'
                  index={5}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      Laryngeal stent placement only requires three to five minutes of anesthesia as opposed to 30&#8209;45 minutes for surgery. While reactions to anesthesia can never be ruled out and differ depending on breed and individual anesthesia protocols, the amount and duration of anesthesia are generally considered to be the most critical risk factors. So considering the very low consumption and duration required for the stent procedure, both the <span className='semibold-italic'>likelihood</span> and possible <span className='semibold-italic'>severity</span> of possible anesthesia reactions is negligible. 
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                <span className='bold'>Aspiration pneumonia</span> &mdash; When foreign substances, that is, anything that&rsquo;s not air, enters the lungs, the lungs are likely to become infected. As with surgery, this is the most serious risk factor post-procedure with with laryngeal stents.   
                {/* ShowMoreComponent content start */}
                <div className={styles.showmore_content_list}>                             <ShowMoreContent
                    title='How dangerous is aspiration pneumonia?'
                    index={6}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    >
                    <div className={styles.showmore_content_block}>
                      <span className={styles.showmore_content_space}></span>
                      <p className={styles.showmore_content_text}>
                      <span className='bold'>Aspiration pneumonia</span> is a potentially life-threatening condition. Just like with surgery, a stent provides a pathway to the lungs that&rsquo;s always open for contaminants to enter. The size, position, and stent type may reduce the likelihood of post-procedure aspiration pneumonia compared with surgery, but as of early 2025 there&rsquo;s no publicly&#8209;available research to address these questions. So until stent-specific research is available, we have to assume that the same risk level as with laryngeal paralysis surgery &mdash; the <span className='semibold-italic'>likelihood</span> can be considered moderate and the possible <span className='semibold-italic'>severity</span> can be considered high. For more information, see the Risk Factors section of the <Link href='/patients/treatment/surgery' className='link-dark'>About Surgery</Link> page.
                      </p>
                    </div>
                  </ShowMoreContent>
                </div>  
                {/* ShowMoreComponent content end */}
              </li>
              <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/><span className='bold'>Coexisting conditions</span> &mdash; Coexisting conditions (<span className='italic'>comorbidities</span>) can complicate laryngeal paralysis treatment by stent or surgery, in particular by increasing the likelihood and severity of aspiration pneumonia.
              {/* ShowMoreComponent content start */}
              <div className={styles.showmore_content_list}>
                <ShowMoreContent
                  title='How do coexisting conditions affect a laryngeal stent?'
                  index={7}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className={styles.showmore_content_block}>
                    <span className={styles.showmore_content_space}></span>
                    <p className={styles.showmore_content_text}>
                      Coexisting conditions, in particular conditions that cause regurgitation, coughing, or gagging can affect a laryngeal stent. Spasmodic coughing or gagging can cause the stent to migrate, especially in the week following the implant procedure. Esophogeal dysfunction can cause recurring regurgitation, which can increase both the <span className="semibold-italic">likelihood</span> and <span className="semibold-italic">severity</span> of aspiration pneumonia. As of early 2025 there&rsquo;s no research on the likelihood or severity of complications relating to coexisting conditions with a laryngeal stent compared with surgery. For more information, see the <Link href='/patients/treatment/surgery' className='link-dark'>About Surgery</Link> page.  
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              
              </li>
              
            </ul>
          </div>
          {/* Risk Factors Content End */}

          {/* More Info Content Start */}

          <div className={styles.content_block}>
            <h2 className={styles.content_head}>More Info About Stents for Lar Par</h2>
            <p className={styles.content_text}>
            <span className='bold '>Silicone Stent</span> &mdash; To read abut the research studies that started the stenting revolution for laryngeal paralysis in dogs, visit the <Link href='/patients/treatment/stent/stentstudies' className='link-dark'>Stent Studies</Link>.
            </p>
            
            <p className={styles.content_text}>
              <span className='bold'>Nitinol Stent</span> &mdash; We can&rsquo;t point you to any studies on the Nitinol stent because none have been released. The only information available about the Nitinol laryngeal stent product for laryngeal paralysis in dogs is on the <a href="https://www.dextronix.com/nitinol-laryngeal-stent" className="link-dark" target="_blank" rel="noreferrer noopener">manufacturer&rsquo;s website.</a> We&rsquo;ll be releasing all the information we&rsquo;ve been able to gather about this product in an upcoming blog post.
            </p>
            <p className={styles.content_text}>
              &nbsp;
            </p>
          </div>
          {/* More Info Content End */}

        </div>{/* .content */}
      </section>
    </>
  )
}

export default Stent

