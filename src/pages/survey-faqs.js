import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../public/img-lpl-org-logo.png";
import BrowseMode from "../../public/img-browse-mode.png";
import SurveyMode from "../../public/img-survey-mode.png";
import SurveyHero from "../components/SurveyHero";
import ShowMoreContent from '../components/ShowMoreContent';
import { BsClipboardCheck, BsBook } from "react-icons/bs";
const SurveyFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const TOP_ICON_LINKS = [{
    href: "/browse-mode/Browse_00_Landing",
    label: "Browse",
    imgSrc: "/img-sj-top-icon-browse.png"
  }, {
    href: "/survey-faqs",
    label: "FAQ",
    imgSrc: "/img-sj-top-icon-faq.png"
  }, {
    href: "https://larparlife.com/allabout",
    label: "LP Info",
    imgSrc: "/img-sj-top-icon-lpinfo.png"
  }, {
    href: "/survey-share",
    label: "Share",
    imgSrc: "/img-sj-top-icon-share.png"
  }];
  return <>

      <main className="page home">
        <header className="home-head card card--lift">

          <SurveyHero />

        </header>

        <section className="content-body">

          <article>
            <h2 className="survey-faqs-heading" data-translate="survey_faqs.h2.001">Survey FAQs</h2>
            <p data-translate="survey_faqs.p.002">Here are some answers to frequently-asked questions about the <span className="emphasis">LP/GOLPP Survey 2026</span>.</p>
          </article> 

          <article>
            <ShowMoreContent header={<h3 className="showmore__title" data-translate="survey_faqs.h3.003">
                  How much time does the survey take?
                </h3>} index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                <p className="showmore_content_inline" data-translate="survey_faqs.p.004">
                  Completing the survey could take five minutes or twenty &mdash; it all depends on your personal LP/GOLPP experience. 
                </p>
                <p className="showmore_content_inline" data-translate="survey_faqs.p.005">
                  The interactive, mobile-friendly design lets you answer questions while you watch TV or do other things. It remembers your place, so you can come back to it whenever you have a few minutes. The important thing is that you complete the questions and submit your responses whenever it fits into your schedule. Your experience matters!
                </p>
            </ShowMoreContent>
          </article>

          <article>

            <ShowMoreContent header={<h3 className="showmore__title" data-translate="survey_faqs.h3.006">
                  Why are there so many questions about how much things cost
                </h3>} index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
              <p className="showmore_content_inline" data-translate="survey_faqs.p.007">
                It&lsquo;s not really about the cost itself. Cost is the only reliable way to gauge the severity of a procedure or veterinary health event. If your LP companion spent five days in emergency care for aspiration pneumonia, that will cost much more than a single overnight stay.  
              </p>
              <p className="showmore_content_inline" data-translate="survey_faqs.p.008">
                The objective is to draw inferences about which approaches result in more or fewer health events that require veterinary care. Cost is the only empirical data available for reference, and that&lsquo;s why it appears so often in the survey.
              </p>
            </ShowMoreContent>
          </article>

          <article>

            <ShowMoreContent header={<h3 className="showmore__title" data-translate="survey_faqs.h3.009">
                  What are the icons at the top of each survey page for?
                </h3>} index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                <ul className="showmore_survey_icons_description">
                  <li data-translate="survey_faqs.li.010"><img src="/img-sj-top-icon-browse.png" alt="Browse icon" />&nbsp;&nbsp;Opens <span className="emphasis">Browse Mode </span>in a new tab so you can browse the survey questions in a flat-file format.</li>
                  <li data-translate="survey_faqs.li.011"><img src="/img-sj-top-icon-faq.png" alt="FAQs icon" />&nbsp;&nbsp;Opens the <span className="emphasis">Survey FAQs</span> page in a new tab where you can get answers to frequently-asked questions about the survey.</li>
                  <li data-translate="survey_faqs.li.012"><img src="/img-sj-top-icon-lpinfo.png" alt="LP Info icon" />&nbsp;&nbsp;Opens the <span className="emphasis">Lar Par Guide</span> at <a data-translate="survey_faqs.a.013" href="https://larparlife.com">https://larparlife.com</a>, where you can get useful information about a variety of LP/GOLPP related topics.</li>
                  <li data-translate="survey_faqs.li.014"><img src="/img-sj-top-icon-share.png" alt="Browse icon" />&nbsp;&nbsp;Opens the <span className="emphasis">Share Survey</span> page with convenient links for sharing the survey with your friends and colleagues via social media and email. </li>
                </ul>
            </ShowMoreContent>

          </article>

          <article>

            <ShowMoreContent header={<h3 className="showmore__title" data-translate="survey_faqs.h3.015">
                  Do I have to actually fill out the survey to see the questions?
                </h3>} index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                <span className="showmore_content_space"></span>
                <p className="showmore_content_inline" data-translate="survey_faqs.p.016">
                  The LP/GOLPP Survey 2026 has two working modes: <span className="emphasis">Survey Mode</span> and <span className="emphasis">Browse Mode</span>. 
                </p>

                <p className="showmore_content_inline" data-translate="survey_faqs.p.017">
                  <span className="emphasis">Browse Mode</span> is a stripped-down, flat version of the survey content without any of the response processing, internal logic, or personalization. 
                </p>

                <p className="showmore_content_inline" data-translate="survey_faqs.p.018">This can be useful for people who are still learning about LP/GOLPP. It provides quick overview of many of the decisions they&lsquo;ll be facing on their LP/GOLPP journey. But because the functionality is disabled, many of the questions may seem out of context.</p>

                <p className="showmore_content_inline" data-translate="survey_faqs.p.019">
                  You can&lsquo;t submit responses in <span className="emphasis">Browse Mode</span>. For the fully customized survey experience and to share the details of your LP/GOLPP journey, run the survey in full <span className="emphasis">Survey Mode</span>.
                </p>
            </ShowMoreContent>
          </article>


          <article>

            <ShowMoreContent header={<h3 className="showmore__title" data-translate="survey_faqs.h3.020">
                  Why is some text highlighted in Browse Mode?
                </h3>} index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                <p className="showmore_content_inline" data-translate="survey_faqs.p.021">
                  Highlighted text in <span className="emphasis">Browse Mode</span> summarizes a section that would require a user response in <span className="emphasis">Survey Mode</span> and indicates descriptive text that isn&lsquo;t relevant in <span className="emphasis">Survey Mode</span>. 
                </p>
            </ShowMoreContent>

          </article>

          <article>


            <ShowMoreContent header={<h3 className="showmore__title" data-translate="survey_faqs.h3.022">
                  Where can I learn more about how my information is being used and the about survey&lsquo;s consent policy?
                </h3>} index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                <p className="showmore_content_inline" data-translate="survey_faqs.p.023">
                  <span className="emphasis">Browse Mode</span> doesn&lsquo;t collect any data &mdash; it&lsquo;s purely for informational purposes. If you take the survey in <span className="emphasis">Survey Mode</span>, you&lsquo;ll find links to our <span className="emphasis">Privacy</span> and <span className="emphasis">Consent</span> policies that you can review before you provide any personal information. 
                </p>
            </ShowMoreContent>

          </article>

        </section>

      </main>

    </>;
};
export default SurveyFaqs;
