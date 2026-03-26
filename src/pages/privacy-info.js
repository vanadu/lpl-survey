import React from 'react'
import Link from 'next/link'

import SurveyHero from "../components/SurveyHero"

const PrivacyInfo = () => {
  return (
    <>

      <main className="page home">
        <header className="home-head card card--lift">
          <SurveyHero/>
        </header>
        <section className="content-body privacy-info home-head">
          <article className="card privacy-info-card">
            <h1 className="privacy-info-title">Privacy Policy</h1>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Overview</h3>
              <p className="privacy-info-text">
                This site collects and processes limited personal information solely to
                support the LP/GOLPP survey and ensure the integrity of its results. No
                data is collected for marketing or unrelated purposes.
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">What We Collect</h3>
              <p className="privacy-info-text">
                We collect only the information necessary to verify survey responses:
              </p>
              <ul className="privacy-info-list privacy-info-list--data-points">
                <li className="privacy-info-list-item">First name</li>
                <li className="privacy-info-list-item">Companion animal&lsquo;s name</li>
                <li className="privacy-info-list-item">Country of residence</li>
                <li className="privacy-info-list-item">
                  Email address or Facebook account name
                </li>
              </ul>
              <p className="privacy-info-text">
                Providing this information allows responses to be unique and verifiable
                without identifying participants outside the context of the survey.
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">How Your Data Is Used</h3>
              <p className="privacy-info-text">Your data is used only to:</p>
              <ul className="privacy-info-list">
                <li className="privacy-info-list-item">
                  Prevent duplicate or invalid submissions
                </li>
                <li className="privacy-info-list-item">
                  Validate and maintain the integrity of survey results
                </li>
                <li className="privacy-info-list-item">
                  Analyze responses in aggregate form
                </li>
              </ul>
              <p className="privacy-info-text">
                Your personal details are not published, sold, or used for marketing.
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Legal Basis (EU/EEA)</h3>
              <p className="privacy-info-text">
                Data is processed based on your consent (GDPR Art. 6(1)(a)).
              </p>
              <p className="privacy-info-text">
                You may withdraw consent at any time.
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Data Storage and Security</h3>
              <ul className="privacy-info-list">
                <li className="privacy-info-list-item">
                  Data is stored electronically
                </li>
                <li className="privacy-info-list-item">
                  Reasonable technical and organizational measures are used to protect it
                </li>
                <li className="privacy-info-list-item">
                  No system can guarantee absolute security
                </li>
              </ul>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Data Retention</h3>
              <p className="privacy-info-text">
                Survey data may be retained for ongoing analysis.
              </p>
              <p className="privacy-info-text">
                If you have provided identifiable information, you may request deletion.
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Data Sharing</h3>
              <p className="privacy-info-text">
                Data is not shared with third parties except where necessary to operate
                the survey (e.g., hosting or email services). Any such providers are
                expected to handle data in accordance with applicable data protection laws.
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">International Transfers</h3>
              <p className="privacy-info-text">
                Data may be processed or stored on servers located outside the EU/EEA.
              </p>
              <p className="privacy-info-text">
                Where this occurs, appropriate safeguards are applied.
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Your Rights (EU/EEA)</h3>
              <p className="privacy-info-text">You have the right to:</p>
              <ul className="privacy-info-list">
                <li className="privacy-info-list-item">Access your data</li>
                <li className="privacy-info-list-item">Correct inaccurate data</li>
                <li className="privacy-info-list-item">Request deletion</li>
                <li className="privacy-info-list-item">
                  Restrict or object to processing
                </li>
                <li className="privacy-info-list-item">
                  Withdraw consent at any time
                </li>
                <li className="privacy-info-list-item">
                  Lodge a complaint with your local data protection authority
                </li>
              </ul>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Data Controller</h3>
              <p className="privacy-info-text">LarparLife.org</p>
              <p className="privacy-info-text">
                Contact: <Link href='/contact' className='link-dark'>Data Controller Contact</Link>
              </p>
            </article>

            <article className="card privacy-info-section">
              <h3 className="privacy-info-heading">Contact</h3>
              <p className="privacy-info-text">
                For any questions or requests regarding your data:
              </p>
              <p className="privacy-info-text"><Link href='/contact' className='link-accent'>Data Controller Contact</Link></p>
            </article>
          </article>
        </section>
      </main>
    </>
  )
}

export default PrivacyInfo