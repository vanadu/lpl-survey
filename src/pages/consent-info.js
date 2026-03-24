import React from 'react'
import Link from 'next/link'

import SurveyHero from "../components/SurveyHero"

const ConsentInfo = () => {
  return (
    <>
      <main className="page home">
        <header className="home-head card card--lift">
          <SurveyHero/>
        </header>
        <section className="content-body consent-info home-head">

            <article className="card consent-info-section">
              <h1 className="consent-info-title">Consent to Participate in Survey</h1>
              <h2 className="consent-info-heading">Purpose</h2>
              <p className="consent-info-text">
                You are invited to take part in a survey about experiences related to LP/GOLPP.
                The goal is to collect information for research, awareness, and general
                understanding of this condition.
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">What to Expect</h2>
              <ul className="consent-info-list">
                <li className="consent-info-list-item">
                  The survey takes approximately 5-20 minutes to complete, depending on your own personal LP/GOLPP experience.
                </li>
                <li className="consent-info-list-item">
                  Questions cover symptoms, history, and related experiences
                </li>
                <li className="consent-info-list-item">
                  Most questions are required to ensure the results are complete and usable
                </li>
              </ul>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Voluntary Participation</h2>
              <p className="consent-info-text">
                Participation is completely voluntary. You may stop at any time without penalty.
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Risks / Discomforts</h2>
              <p className="consent-info-text">
                There are no known physical risks. Some questions may involve personal topics
                and could cause mild emotional discomfort.
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Benefits</h2>
              <p className="consent-info-text">
                There is no direct benefit to you. Your responses may contribute to a better
                understanding of LP/GOLPP.
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Privacy and Data Use</h2>

              <p className="consent-info-text">
                We collect a limited set of information needed to verify survey results:
              </p>

              <ul className="consent-info-list consent-info-list--data-points">
                <li className="consent-info-list-item">Your first name</li>
                <li className="consent-info-list-item">Your companion animal&lsquo;s name</li>
                <li className="consent-info-list-item">The country in which you live</li>
                <li className="consent-info-list-item">
                  Your email address or Facebook account name
                </li>
              </ul>

              <p className="consent-info-text">
                This information is used solely to ensure that responses are unique and
                verifiable, without making you identifiable outside the context of the survey.
              </p>

              <ul className="consent-info-list">
                <li className="consent-info-list-item">
                  Responses are stored electronically and analyzed in aggregate form
                </li>
                <li className="consent-info-list-item">
                  Identifying details are not published or shared outside the survey context
                </li>
                <li className="consent-info-list-item">
                  Data is processed based on your consent (GDPR Art. 6(1)(a))
                </li>
                <li className="consent-info-list-item">
                  Reasonable steps are taken to protect your data, but absolute security
                  cannot be guaranteed
                </li>
              </ul>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Data Controller</h2>
              <p className="consent-info-text">LarparLife.org</p>
              <p className="consent-info-text">
                Contact: <Link href='/contact' className='link-accent'>Data Controller Contact</Link>
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Data Retention</h2>
              <p className="consent-info-text">
                Responses may be stored for future analysis unless you request deletion
                (where identifiable data has been provided).
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Your Rights (EU/EEA)</h2>
              <p className="consent-info-text">You have the right to:</p>
              <ul className="consent-info-list">
                <li className="consent-info-list-item">Access your data</li>
                <li className="consent-info-list-item">Correct inaccurate data</li>
                <li className="consent-info-list-item">Request deletion of your data</li>
                <li className="consent-info-list-item">
                  Restrict or object to processing
                </li>
                <li className="consent-info-list-item">
                  Withdraw consent at any time (without affecting prior processing)
                </li>
                <li className="consent-info-list-item">
                  Lodge a complaint with your local data protection authority
                </li>
              </ul>
              <p className="consent-info-text">
                For more details, see our{' '}
                <Link href="/privacy-policy" className="link-accent consent-info-link">
                  Privacy Policy
                </Link>.
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Eligibility</h2>
              <p className="consent-info-text">
                You should be 18 years or older (or have appropriate consent, if applicable).
              </p>
            </article>

            <article className="consent-info-section">
              <h2 className="consent-info-heading">Contact</h2>
              <p className="consent-info-text">
                For questions about this survey or your data, contact:
              </p>
              <p className="consent-info-text">[Insert contact name/email]</p>
            </article>

            <article className="consent-info-section consent-info-section--consent">
              <h2 className="consent-info-heading">Consent</h2>
              <p className="consent-info-text">
                By continuing, you confirm that:
              </p>
              <ul className="consent-info-list">
                <li className="consent-info-list-item">
                  You have read and understand the information above
                </li>
                <li className="consent-info-list-item">
                  You consent to the processing of your data as described
                </li>
                <li className="consent-info-list-item">
                  You are participating voluntarily
                </li>
                <li className="consent-info-list-item">
                  You meet the eligibility requirements
                </li>
              </ul>
            </article>
        </section>
      </main>
    </>
  )
}

export default ConsentInfo