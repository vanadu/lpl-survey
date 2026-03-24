import React from 'react'

const PrivacyInfo = () => {
  return (
    <>
      <section className="content-body privacy-info">
        <article className="card privacy-info-card">
          <h1 className="privacy-info__title">Privacy Policy</h1>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Overview</h2>
            <p className="privacy-info__text">
              This site collects and processes limited personal information solely to
              support the LP/GOLPP survey and ensure the integrity of its results. No
              data is collected for marketing or unrelated purposes.
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">What We Collect</h2>
            <p className="privacy-info__text">
              We collect only the information necessary to verify survey responses:
            </p>
            <ul className="privacy-info__list privacy-info__list--data-points">
              <li className="privacy-info__list-item">First name</li>
              <li className="privacy-info__list-item">Companion animal&lsquo;s name</li>
              <li className="privacy-info__list-item">Country of residence</li>
              <li className="privacy-info__list-item">
                Email address or Facebook account name
              </li>
            </ul>
            <p className="privacy-info__text">
              Providing this information allows responses to be unique and verifiable
              without identifying participants outside the context of the survey.
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">How Your Data Is Used</h2>
            <p className="privacy-info__text">Your data is used only to:</p>
            <ul className="privacy-info__list">
              <li className="privacy-info__list-item">
                Prevent duplicate or invalid submissions
              </li>
              <li className="privacy-info__list-item">
                Validate and maintain the integrity of survey results
              </li>
              <li className="privacy-info__list-item">
                Analyze responses in aggregate form
              </li>
            </ul>
            <p className="privacy-info__text">
              Your personal details are not published, sold, or used for marketing.
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Legal Basis (EU/EEA)</h2>
            <p className="privacy-info__text">
              Data is processed based on your consent (GDPR Art. 6(1)(a)).
            </p>
            <p className="privacy-info__text">
              You may withdraw consent at any time.
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Data Storage and Security</h2>
            <ul className="privacy-info__list">
              <li className="privacy-info__list-item">
                Data is stored electronically
              </li>
              <li className="privacy-info__list-item">
                Reasonable technical and organizational measures are used to protect it
              </li>
              <li className="privacy-info__list-item">
                No system can guarantee absolute security
              </li>
            </ul>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Data Retention</h2>
            <p className="privacy-info__text">
              Survey data may be retained for ongoing analysis.
            </p>
            <p className="privacy-info__text">
              If you have provided identifiable information, you may request deletion.
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Data Sharing</h2>
            <p className="privacy-info__text">
              Data is not shared with third parties except where necessary to operate
              the survey (e.g., hosting or email services). Any such providers are
              expected to handle data in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">International Transfers</h2>
            <p className="privacy-info__text">
              Data may be processed or stored on servers located outside the EU/EEA.
            </p>
            <p className="privacy-info__text">
              Where this occurs, appropriate safeguards are applied.
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Your Rights (EU/EEA)</h2>
            <p className="privacy-info__text">You have the right to:</p>
            <ul className="privacy-info__list">
              <li className="privacy-info__list-item">Access your data</li>
              <li className="privacy-info__list-item">Correct inaccurate data</li>
              <li className="privacy-info__list-item">Request deletion</li>
              <li className="privacy-info__list-item">
                Restrict or object to processing
              </li>
              <li className="privacy-info__list-item">
                Withdraw consent at any time
              </li>
              <li className="privacy-info__list-item">
                Lodge a complaint with your local data protection authority
              </li>
            </ul>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Data Controller</h2>
            <p className="privacy-info__text">LarparLife.org</p>
            <p className="privacy-info__text">
              Contact: [Insert email or contact form link]
            </p>
          </section>

          <section className="privacy-info__section">
            <h2 className="privacy-info__heading">Contact</h2>
            <p className="privacy-info__text">
              For any questions or requests regarding your data:
            </p>
            <p className="privacy-info__text">[Insert contact method]</p>
          </section>
        </article>
      </section>
    </>
  )
}

export default PrivacyInfo