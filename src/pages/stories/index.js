import React from 'react'
import { useState, useRef } from 'react'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

// import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
// !VA React Tooltip
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
// !VA Styles
import * as styles from '../../styles/Light.module.scss'
// !VA Components
import ScrollToTop from '../../components/ScrollToTop'
import BottomNav from '@/components/BottomNav'
// !VA Images
import MissBInSidecar from '../../../public/img-miss-b-in-sidecar.jpg'
import MissBCoolingVest from '../../../public/img-miss-b-cooling-vest.webp'
import MissBTinyHouse from '../../../public/img-miss-b-tiny-house.webp'
import MissBRideHome from '../../../public/img-miss-b-ride-home.webp'
import WrongStent from '../../../public/img-wrong-stent.webp'
// !VA Icons
import { FaPaw } from 'react-icons/fa'
// !VA StoriesNav
import StoriesNav from '@/components/guidenav/StoriesNav'


const Stories = () => {

  // !VA Section menu anchors
  const refJul = useRef();
  const refAug = useRef();
  const refSep = useRef();
  const refEpi = useRef();
  // !VA Section menu active state
  const [isActive, setIsActive ] = useState('false')
  // !VA Not sure why these are grayed
  const toggleMenu = () => {
      setIsActive(!isActive)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  // !VA We use the StoriesNav component here to display the list of Success Stories. Don't forget that it's the PAGE that's displaying here, so the URL will reflect the displayed page. 
  return (
    <>
      <NextSeo 
        title="Stent Stories: Dogs Living With Lar Par Without Surgery"
        description="Inspiring stories about dogs with stents living quality lives with laryngeal paralysis - without surgery!"
        canonical="https://larparlife.com/stories"
      />
      <section className={styles.section}>
        {/* StoriesNav component is the menu for the Stories items. Currently there aren't any other stories, so there's only a stories_banner here. */}
        <StoriesNav />
        {/* Page heading */}
        <div className={styles.section_content}>
          <div className={styles.topic_head}>
            <h1 className={styles.topic_head_title}>Stent Stories: Treating <span className='mobile-show-inline'><br /></span>Laryngeal Paralysis <span className='mobile-show-inline'><br /></span> Without Surgery</h1>
          </div>
          <div className={styles.topic_subhead}>
            <h2 className={styles.topic_subhead_title}>Miss B&rsquo;s Incredible Stent Journey</h2>
          </div>
          <p className={styles.content_text}>
              On Sept. 9, 2022 we put our dying dog in the car and drove 400 miles to have a silicone tube put in her throat, not knowing whether she&rsquo;d be alive when we got back.
            </p>
        </div>

      </section>

      {/* Section Menu */}
      <section className={styles.section}>
        <div className={styles.section_menu}>
          <ul className={styles.section_menu_list}>
            <li 
              onClick={() => refJul.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={styles.section_menu_list_item}
            >
              July <span className={styles.mobile_hide}>2022</span>
            </li>
            <li 
              onClick={() => refAug.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={styles.section_menu_list_item}
            >
              August <span className={styles.mobile_hide}>2022</span>
            </li>
            <li 
              onClick={() => refSep.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={styles.section_menu_list_item}
            >
              September <span className={styles.mobile_hide}>2022</span>
            </li>
            <li 
              onClick={() => refEpi.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={styles.section_menu_list_item}
            >
              Epilogue 
            </li>
          </ul>
        </div>
      </section>

      {/* JULY */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          {/* Need container_flex_center to push the figure down below the heading */}
          <div 
            className={styles.container_flex_center}
            ref={refJul}
            >
            <div className={styles.section_heading}>
              <h2 className={styles.content_head}>July 2022</h2>
              <hr className={styles.rule_underline} />
            </div>
          </div>

          <figure className={styles.figure_float_right}>
            <Image src={MissBInSidecar} className={styles.figure_image} alt="Miss B In Sidecar " width={130} height={104} />
            <figcaption className={styles.figure_caption}>
              Miss B has brought big smiles to folks in our community in her motorcycle sidecar and&nbsp;Doggles
            </figcaption>
          </figure>
          <p className={styles.content_text}>
            Euthanasia is a heart-rending choice. Still, when it&rsquo;s a companion animal&rsquo;s time, you have to let them go.
          </p>

          <p className={styles.content_text}>
            But not for a a minor neurological defect. We swore that when Miss B&rsquo;s time came, it wouldn&rsquo;t be for something as menial as laryngeal paralysis.
          </p>
          <p className={styles.content_text}>
            So after the LarPar diagnosis in June 2021 we considered our options.&nbsp; 
            {/* <div className={styles.tooltip_container}>
              <span
                className={styles.tooltip_trigger}
                data-tooltip-id='tieback01'
                data-tooltip-content="Any surgery with older animals is a risk, and tieback is no exception."  
                data-tooltip-place='top'
                >We didn&rsquo;t like the risks associated with tieback surgery</span>,
                <Tooltip
                id="tieback01" />
            </div> */}
            We didn&rsquo;t like the risks associated with tieback and other laryngeal paralysis surgeries&nbsp;so we scoured the web for alternative, non-surgical laryngeal paralysis treatments. We found a 2020 research study from Argentina in which a laryngeal stent was used provide air passage through the paralyzed larynx. Miss B&rsquo;s LarPar was still early-stage, so we decided on a wait&#8209;and&#8209;see for &lsquo;that stent thing&rsquo;.
          </p>

          <p className={styles.content_text}>
            By April of 2022, her LarPar had progressed and we were doubtful that she would survive the summer. In June 2022 we found a follow-up study by a French-Spanish team in the Journal of Veterinary Science that used the stent procedure with positive results. But that time, the temperature was rising and Miss B&rsquo;s condition was deteriorating fast.
          </p>


          <figure className={styles.figure_float_right}>
            <Image src={MissBCoolingVest} alt="Miss Bs Cooling Vest" className={styles.figure_image}/>
            <figcaption className={styles.figure_caption}>
              By June Miss B couldn&rsquo;t spend more than a few minutes outside even with her stylish &rsquo;cooling&nbsp;vest&rsquo;
            </figcaption>
          </figure>
          <p className={styles.content_text}>
            What makes hot weather so dangerous for LarPar dogs is that their bodies are air-cooled. Dogs don&rsquo;t have sweat glands, so they expel their internal body heat by means of panting. If the air is too warm and they&rsquo;re too active, they can&rsquo;t cool themselves enough this way which can lead to heat stroke. But with LarPar suffers, it&rsquo;s even more dangerous. They can barely get enough oxygen through the constricted airway to stay alive, much less to cool their bodies in the heat and humidity of East Coast summers.
          </p>
          <p className={styles.content_text}>
            As her condition worsened, Miss B got weaker and weaker. Soon we had to keep her indoors in the A/C and only let her out at dawn and dusk. Any time, she could have a&nbsp;cyanosis episode
            {/* <div className={styles.tooltip_container}>
              <span 
              className={styles.tooltip_trigger}
              data-tooltip-id='cyanosis01'
              data-tooltip-content="Skin and other body tissue turning blue is a sign of oxygen starvation"
              >
                cyanosis episode
              </span>
              <Tooltip 
                wrapper="span"
                effect='solid'
                className='tooltip_style'  
                id="cyanosis01" />
            </div>  */}
            &nbsp;which could be fatal. By the end of July, we were unconsciously counting the days until we would have to let her go. 
          </p>
          <p className={styles.content_text}>
            But we weren&rsquo;t giving up. She was still in overall good health, and if she could only get air past that limp cartilage in her throat, she could live many happy months, or even years. We vowed to give it our all before we let Miss B go. 
            <br className={styles.mobile_hide}/>
          </p> 
        </div>
      </section>

      {/* AUGUST */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div
            className={styles.container_flex_center}
            ref={refAug}
            >
            <div className={styles.section_heading}>
              <h2 className={styles.content_head}>August 2022</h2>
              <hr className={styles.rule_underline} />
            </div>
          </div>

          <figure className={styles.figure_float_right}>
            <Image src={WrongStent} alt="We Bought The Wrong Stent" className={styles.figure_image}/>
            <figcaption className={styles.figure_caption}>
              In desperation, we ordered a stent from the manufacturer. It cost $250 and didn&rsquo;t get used, so don&rsquo;t&nbsp;do&nbsp;that!
            </figcaption>
          </figure>
          <p className={styles.content_text}>
            In August started making calls, a lot of calls. In retrospect, I think we were just naive about how things work. But that didn&rsquo;t help us with the frustration and anger we were feeling.
          </p>
          <p className={styles.content_text}>
            We understand that veterinarians are under <a href='https://todaysveterinarypractice.com/news/study-looks-at-veterinarian-attitudes-toward-euthanasia-of-pets/' className='link-secondary' target="_blank" rel="noopener noreferrer">enormous pressure to do the impossible</a>. We respect that, and in hindsight we understand why things work the way they do. But still, of the 40-odd inquiries we made by phone and email:
          </p>
          <ul className={styles.content_list_no_bullet}>
            <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>About 60% of them wouldn&rsquo;t answer any questions unless we drive to their location and pay for an in-person consultation.</li>
            <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>About 10% referred us to a&nbsp; tie-back surgery
              {/* <div className={styles.tooltip_container}>
                <span 
                  className={styles.tooltip_trigger}
                  data-tooltip-id='tieback02' 
                  data-tooltip-content="For more info about tie-back surgery see the LarPar page." 
                  data-place='top'
                  >
                  tie-back surgery
                </span>
                <Tooltip wrapper="span" effect='solid' className='tooltip_style'  id="tieback02" />
              </div> */}
              &nbsp;specialist
            </li>
            <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>The rest told us on the phone to send them an email but didn&rsquo;t respond to it</li>
          </ul>
          <p className={styles.content_text}>
            We contacted the European distributor and ordered the appropriate stent. All we wanted was for someone to try. If our dog didn&rsquo;t survive the attempt then at least <span className='emphasis'>something</span> was learned and maybe the next time would be the charm that saved a dog&rsquo;s life.</p>
            <p className={styles.content_text}>So we soldiered on. We asked the European distributor for their U.S. customer list. They gave us five contacts. One receptionist in Colorado told us they would only provide information if we travel there from Maryland for an in-person consult. We had a good laugh over that one. One contact said they had no idea what we were talking about. One didn&rsquo;t return the call.
          </p>
          <p className={styles.content_text}>
            In late August, we were elated to get a return call from a practice about 500 miles west of here. The surgical assistant told us their surgeon had performed the stent procedure on a dog that was not a candidate for tie-back. She told us he would be willing to do a Zoom call to discuss it. She was very nice and incredibly helpful and we thanked her profusely.
          </p>
          <p className={styles.content_text}>
            That encouraged us to continue the search locally, to no avail. But one day in late August we made a call, and to our amazement the person who answered the phone wasn&rsquo;t a receptionist, but actually the practicing veterinarian. He gave us the name of a specialist at an newly-opened, big-name chain facility. We forwarded our documentation to them. A young internist agreed to do the procedure. We rejoiced &mdash; until we got the quote. It was almost as much as tie-back surgery. We felt that the overhead for this non-surgical procedure didn&rsquo;t warrant a such a bill. But more importantly, if the inexperienced internist didn&rsquo;t place the stent properly, it would require additional corrective procedures at the same rate until they got it right. We just weren&rsquo;t going to commit to writing a blank check that could end up costing more than surgery. As each day passed and Miss B&rsquo;s life became decreasingly worth living, we had to come to grips with the fact we were perhaps ahead of our time and that she just wasn&rsquo;t going to get a life-saving stent no matter how hard we tried. </p>
          <p className={styles.content_text}>
            By this point it was clear that Miss B would suffocate to death within days. She could only breathe lying down. As soon as she stood up and her body started consuming oxygen, she couldn&rsquo;t get any air. Emotionally, we were done. We decided not to pursue it with the one veterinarian who had returned our call. Most likely, by the time we scheduled the procedure and drove out there, Miss B would be dead. We started thinking about how we would spend her last days.
          </p>
        </div> 
      </section>
  
      {/*  SEPTEMBER */}
      <section className={styles.section}>
        <div className={styles.section_content} >
          {/* Heading */}
          <div 
            className={styles.container_flex_center}
            ref={refSep}
            >
            <div className={styles.section_heading}>
              <h2 className={styles.content_head}>September 2022</h2>
              <hr className={styles.rule_underline} />
            </div>

          </div>
          {/* Content */}
          <figure className={styles.figure_float_right}>
            <Image src={MissBTinyHouse} alt="Miss B Post-Procedure" className={styles.figure_image}/>
            <figcaption className={styles.figure_caption}>Afterwards in the Tiny House, exhausted, sedated &mdash; and breathing normally while we had a little&nbsp;cry</figcaption>
          </figure>
          <p className={styles.content_text}>
              Then, on September 7, we got a call from a really friendly guy in New England. He told us he was the practice manager for a clinic where his wife is the veterinarian. They had over 20 years experience practicing together, and he was returning our call about the stent thing. He said they were in the same boat as we were a few weeks ago when&nbsp;
              {/* <div className={styles.tooltip_container}> */}
              <span 
                className={styles.tooltip_trigger} 
                data-tooltip-id='dane01'
                data-tooltip-content="Read about Josephine on the Stent page."  
                data-place='top'>
              </span>Josephine, their Great Dane
              <Tooltip id="dane01" />
              {/* </div> */}
              ,&nbsp;was dying of LarPar. He said they couldn&rsquo;t get anyone to do it either, so they ordered some stents and did it themselves. He told us it took a couple tries but eventually&nbsp;
                {/* <div className={styles.tooltip_container}>
                  <span 
                    className={styles.tooltip_trigger}
                    data-tooltip-id='right01'
                    data-tooltip-content="For this incredible story see the Stent page."  
                    data-place='top'>
                    they got it right
                    </span>
                    <Tooltip wrapper="span" effect='solid' className='tooltip_style' id="right01" />
                </div> */}
                &nbsp;they got it right and their dog had been breathing normally for about a month. 
          </p>
          <p className={styles.content_text}>
            The rest of the conversation went like this:
          </p>
          <p className={styles.content_text}>
            Us: <span className='italic'>&quot;Can you do it again? We can leave tomorrow night and be there the next morning.&quot;</span>
          </p>
          <p className={styles.content_text}>
            Him: <span  className='italic'>&quot;Sure!&quot;</span>
          </p>
            <p className={styles.content_text}>At 3AM on September 9, 2022, we set out on our 7.5-hour drive. We crossed the George Washington Bridge, crossed over Manhattan through Connecticut, and headed north toward New England.</p>
            <p className={styles.content_text}>We arrived at 10:30 the next morning. They took us in immediately. We filled out the forms. They explained the post-procedure regimen. Then they took us in for the X-rays, explaining the procedure in detail based on the images. At about 11:30 AM they took Miss B in for the procedure. About five minutes later, they came out and said Miss B would be waking up very soon, and invited us in to be there when she came to. When we came in, she was still asleep but breathing normally. They were long, deep breaths, even and barely audible. After a simple five-minute procedure, Miss B could breathe again. </p>
            <p className={styles.content_text}> It&rsquo;s hard to describe what we were feeling then. Imagine being catapulted from the depths of despair and failure and disgust with humanity to a place that&rsquo;s exactly the opposite of that in just over 24 hours. Thanks to our New England friends, not only has Miss B&rsquo;s life been renewed, but also our faith in people. You just have to find the right ones. Though they may seem few and far between, they are out there and if you look hard enough and don&rsquo;t give up, you will find them. Maybe not always, but it&rsquo;s <span className='italic'>always possible</span>, and that makes it <span className='italic'>always worth trying</span>.
          </p>
        </div>
      </section>

  
          {/* EPILOGUE */}
      <section className={styles.section}>
        <div className={styles.section_content}>
          {/* Heading */}
          <div 
            className={styles.container_flex_center}
            ref={refEpi}
            >
            <div className={styles.section_heading}>
              <h2 className={styles.content_head}>Epilogue</h2>
              <hr className={styles.rule_underline} />
            </div>
          </div>
          {/* Content */}
          <figure className={styles.figure_float_right}>
            <Image src={MissBRideHome} alt="On The Way Home With Stent" className={styles.figure_image}/>
            <figcaption className={styles.figure_caption}>On the bumpy, never-ending ride home from New England after achieving what seemed like the&nbsp;impossible</figcaption>
          </figure>
          <p className={styles.content_text}>We spared you the gory details about how, as residents of the sedate Eastern Shore of Maryland, after the trip through New York City we needed a cardiologist almost as much as Miss B needed a stent. About how we got lost crossing the Green Mountains and there was no cell reception to geolocate ourselves. About how we stayed at an off-the-grid Tiny House on a farm with mice in the ceiling that kept us awake for hours. Or how our truck got stuck and had to be pulled out by a huge farm tractor. Or about the 9 hour rush-hour return trip via Albany that was so bumpy we were terrified it was going to jar Miss B&rsquo;s new stent loose in her throat. Or about ... blah blah blah. None of that matters.</p>
          <p className={styles.content_text}>What matters is that Miss B has been breathing normally every since. And when she dies, which could be next week or next month or years from now, it won&rsquo;t be because of a minor neurological defect in the larynx. It will be of something fatal, something terminal, something that actually kills her. And we want everyone to know that there is a third option between expensive, risky surgery and euthanasia. It&rsquo;s affordable, quick, and it works. It should be available to all LarPar dogs and until it is, everyone should be asking, &ldquo;Why not?&rdquo;</p>
          <p className={styles.content_text}>
          <span className='italic'>Our beloved Miss B crossed over the Rainbow Bridge peacefully on August 27th, 2024 at the age of 16 1/2. Our hope that she would live out her life breathing normally was realized, but in the end she succumbed to the polyneuropathy that goes along with GOLPP (Geriatric-Onset Laryngeal Paralysis and Polyneuropathy). We documented her post-stent life extensively in video and will release her end-of-life celebration video in January 2025. Miss B had a beautiful life and we will remember her always.</span>
          </p>
          <p className={styles.content_text}>
            &nbsp;
          </p>
        </div>
      </section>
  
    </>
  )
}

export default Stories