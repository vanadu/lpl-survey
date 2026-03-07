import React from 'react'
import { useState, useRef, useContext } from 'react'
import ShowMoreContent from '../components/ShowMoreContent'
import AccordionContent from '../components/AccordionContent'
import ShowAnswerContent from '../components/ShowAnswerContent'
import Link from 'next/link'

const Scrap = () => {

  // !VA Index of the current ShowMore 
  const [activeIndex, setActiveIndex] = useState(0)
  // !VA Index of the current Accordion block
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  // !VA 2024 working with contexts
  // const foo = useContext(GuidenavContext)


  return (
    <>
      <main className="page home">
        <section>


          <div className="scrap">
            <h2>Accordion Test</h2>
            <AccordionContent
              title="Money Is No Object"
              index={1}
              activeAccordionIndex={activeAccordionIndex}
              setActiveAccordionIndex={setActiveAccordionIndex}
            >
              <p className="accordion__text">
                If money is no object, you will probably want to focus on the
                veterinary-medical approaches to laryngeal paralysis treatment: surgery
                or the laryngeal stent. Currently in 2025 there are very few stent
                providers worldwide, so its availability for you depends on your
                location. Unless you are fortunate enough to live close to a stent
                provider, your only option is surgery, which has been the standard
                treatment for laryngeal paralysis for over 40 years. The surgery is
                expensive and has significant risk factors, but has a high likelihood of
                a positive outcome. You can read more about it on the{" "}
                <Link
                  href="/patients/treatment"
                  className="link-dark"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Treatment Options
                </Link>{" "}
                page of this website.
              </p>
            </AccordionContent>
          </div>



          <div className='scrap'> 
            <h2>ShowMore Test</h2>
            <ShowMoreContent
              title="Is there a cure for laryngeal paralysis in dogs?"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              <div className="showmore__content-block">
                <span className="showmore__content-space"></span>

                <p className="showmore__content-inline">
                  There is no known cure for canine laryngeal paralysis &mdash; it&rsquo;s a
                  neurological disease that doesn&rsquo;t get better on its own. It&rsquo;s a
                  progressive condition, meaning it gets worse over weeks, months or years
                  &mdash; it&rsquo;s not possible to predict how it will progress. In younger
                  dogs, it can be hereditary. In older dogs, it&rsquo;s generally associated
                  with age-related neurological decline. For more information about the
                  causes of laryngeal paralysis in dogs, see the{" "}
                  <Link
                    href="/patients/aboutlarpar"
                    className="link-dark"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Crash Course in Laryngeal Paralysis
                  </Link>{" "}
                  section.
                </p>
              </div>
            </ShowMoreContent>
          </div>


<div className="browse-question-container">
  <ShowAnswerContent
    title="Approximately what is your age?"
    index={2}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
    >
    <div className="showanswer__content-block"></div>
  
      <ul>
        <li className="browse-showanswer-radio">
          <span class="browse-showanswer-icon browse-showanswer-icon--radio"></span>
          <span>Under 20</span></li>
          <li className="browse-showanswer-radio"><span class="browse-icon browse-icon--radio"></span>
          <span>20-34</span></li>
          <li className="browse-showanswer-radio"><span class="browse-icon browse-icon--radio"></span><span>35-49</span></li>
          <li className="browse-showanswer-radio"><span class="browse-icon browse-icon--radio"></span><span>50-6</span></li>
          <li className="browse-showanswer-radio"><span class="browse-icon browse-icon--radio"></span><span>Over 65</span></li></ul>
  </ShowAnswerContent>
</div>

        </section>
      </main>
    </>
  )
}

export default Scrap