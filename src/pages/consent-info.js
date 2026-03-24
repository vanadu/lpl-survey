import React from 'react'
import Link from 'next/link'

const ConsentInfo = () => {
  return (
    <>
      <section className="content-body consent-info">
        <article className="card consent-info-card">
          <h1 className="consent-info__title">Consent to Participate in Survey</h1>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Purpose</h2>
            <p className="consent-info__text">
              You are invited to take part in a survey about experiences related to LP/GOLPP.
              The goal is to collect information for research, awareness, and general
              understanding of this condition.
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">What to Expect</h2>
            <ul className="consent-info__list">
              <li className="consent-info__list-item">
                The survey takes approximately X-Y minutes to complete
              </li>
              <li className="consent-info__list-item">
                Questions cover symptoms, history, and related experiences
              </li>
              <li className="consent-info__list-item">
                Most questions are required to ensure the results are complete and usable
              </li>
            </ul>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Voluntary Participation</h2>
            <p className="consent-info__text">
              Participation is completely voluntary. You may stop at any time without penalty.
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Risks / Discomforts</h2>
            <p className="consent-info__text">
              There are no known physical risks. Some questions may involve personal topics
              and could cause mild emotional discomfort.
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Benefits</h2>
            <p className="consent-info__text">
              There is no direct benefit to you. Your responses may contribute to a better
              understanding of LP/GOLPP.
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Privacy and Data Use</h2>

            <p className="consent-info__text">
              We collect a limited set of information needed to verify survey results:
            </p>

            <ul className="consent-info__list consent-info__list--data-points">
              <li className="consent-info__list-item">Your first name</li>
              <li className="consent-info__list-item">Your companion animal&lsquo;s name</li>
              <li className="consent-info__list-item">The country in which you live</li>
              <li className="consent-info__list-item">
                Your email address or Facebook account name
              </li>
            </ul>

            <p className="consent-info__text">
              This information is used solely to ensure that responses are unique and
              verifiable, without making you identifiable outside the context of the survey.
            </p>

            <ul className="consent-info__list">
              <li className="consent-info__list-item">
                Responses are stored electronically and analyzed in aggregate form
              </li>
              <li className="consent-info__list-item">
                Identifying details are not published or shared outside the survey context
              </li>
              <li className="consent-info__list-item">
                Data is processed based on your consent (GDPR Art. 6(1)(a))
              </li>
              <li className="consent-info__list-item">
                Reasonable steps are taken to protect your data, but absolute security
                cannot be guaranteed
              </li>
            </ul>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Data Controller</h2>
            <p className="consent-info__text">LarparLife.org</p>
            <p className="consent-info__text">
              Contact: [email address or contact form link]
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Data Retention</h2>
            <p className="consent-info__text">
              Responses may be stored for future analysis unless you request deletion
              (where identifiable data has been provided).
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Your Rights (EU/EEA)</h2>
            <p className="consent-info__text">You have the right to:</p>
            <ul className="consent-info__list">
              <li className="consent-info__list-item">Access your data</li>
              <li className="consent-info__list-item">Correct inaccurate data</li>
              <li className="consent-info__list-item">Request deletion of your data</li>
              <li className="consent-info__list-item">
                Restrict or object to processing
              </li>
              <li className="consent-info__list-item">
                Withdraw consent at any time (without affecting prior processing)
              </li>
              <li className="consent-info__list-item">
                Lodge a complaint with your local data protection authority
              </li>
            </ul>
            <p className="consent-info__text">
              For more details, see our{' '}
              <Link href="/privacy-policy" className="link-accent consent-info__link">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Eligibility</h2>
            <p className="consent-info__text">
              You should be 18 years or older (or have appropriate consent, if applicable).
            </p>
          </section>

          <section className="consent-info__section">
            <h2 className="consent-info__heading">Contact</h2>
            <p className="consent-info__text">
              For questions about this survey or your data, contact:
            </p>
            <p className="consent-info__text">[Insert contact name/email]</p>
          </section>

          <section className="consent-info__section consent-info__section--consent">
            <h2 className="consent-info__heading">Consent</h2>
            <p className="consent-info__text">
              By continuing, you confirm that:
            </p>
            <ul className="consent-info__list">
              <li className="consent-info__list-item">
                You have read and understand the information above
              </li>
              <li className="consent-info__list-item">
                You consent to the processing of your data as described
              </li>
              <li className="consent-info__list-item">
                You are participating voluntarily
              </li>
              <li className="consent-info__list-item">
                You meet the eligibility requirements
              </li>
            </ul>
          </section>
        </article>
      </section>
    </>
  )
}

export default ConsentInfo