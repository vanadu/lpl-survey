import React from 'react';
import SurveyHero from "../components/SurveyHero";
import { NextSeo } from 'next-seo';
const SurveyShare = () => {
  const url = "https://larparlife.org";
  const text = "Help improve outcomes for dogs with LP/GOLPP";
  const Icon = {
    facebook: <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 22v-8h3l1-4h-4V8c0-1 .3-2 2-2h2V2h-3c-3 0-5 2-5 5v3H6v4h3v8h4z" />
    </svg>,
    email: <svg viewBox="0 0 24 24">
      <path d="M2 4h20v16H2zM12 13 2 6v2l10 7 10-7V6z" />
    </svg>,
    linkedin: <svg viewBox="0 0 24 24">
      <path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 8h2v13H3zM9 8h2v2h.1c.3-.6 1.3-2 3.4-2 3.6 0 4.3 2.4 4.3 5.5V21h-2v-6c0-1.4 0-3-2-3s-2.3 1.6-2.3 3V21H9z" />
    </svg>,
    reddit: <svg viewBox="0 0 24 24">
      <path d="M12 22c5 0 9-3 9-7s-4-7-9-7-9 3-9 7 4 7 9 7zm5-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2 3c1.5 1 4.5 1 6 0" />
    </svg>,
    slack: <svg viewBox="0 0 24 24">
      <path d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5zm2-8a2 2 0 1 1-2-2v2h2zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5zm8 2a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v5zm-2 8a2 2 0 1 1 2 2v-2h-2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z" />
    </svg>,
    discord: <svg viewBox="0 0 24 24">
      <path d="M20 4a16 16 0 0 0-4-1l-.2.4a14 14 0 0 1 3.8 1.2 13 13 0 0 0-15.2 0A14 14 0 0 1 8.2 3.4L8 3a16 16 0 0 0-4 1C1 8 0 12 0 12s1 4 4 6c1.5 1 3 1.5 3 1.5l.7-1a10 10 0 0 1-2.5-1.2c3 2 10 2 13 0a10 10 0 0 1-2.5 1.2l.7 1S18.5 19 20 18c3-2 4-6 4-6s-1-4-4-8z" />
    </svg>,
    link: <svg viewBox="0 0 24 24">
      <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0 0 6h3v2h-3a5 5 0 0 1-5-5zm6-1h4v2h-4zm5-4h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 0 0 0-6h-3V7z" />
    </svg>
  };

  /* !VA When ready...
  // LinkedIn
  https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}
  
  // Reddit
  https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}
  
  // Slack & Discord
  // No direct share URL → rely on copy link or navigator.share
  
   */

  return <>
      <NextSeo title="LarPar/GOLPP Survey 2026: Presented by LarParLife.org" description="Gathering information about laryngeal paralysis in dogs, cats, and horses to move forward towards better treatments in the future" canonical="https://larparlife.com" />
      <main className="page home">
        <header className="home-head card card--lift">
          <SurveyHero />
        </header>

        <article className="card">
          <div className="share-grid">
            <a href="#" className="share-btn" data-translate="survey_share.a.001">{Icon.facebook}<span>Facebook</span></a>

            <a href="#" className="share-btn" data-translate="survey_share.a.002">{Icon.email}<span>Email</span></a>

            <a href="#" className="share-btn" data-translate="survey_share.a.003">{Icon.linkedin}<span>LinkedIn</span></a>

            <a href="#" className="share-btn" data-translate="survey_share.a.004">{Icon.reddit}<span>Reddit</span></a>

            <a href="#" className="share-btn" data-translate="survey_share.a.005">{Icon.slack}<span>Slack</span></a>

            <a href="#" className="share-btn" data-translate="survey_share.a.006">{Icon.discord}<span>Discord</span></a>


            <button className="share-btn" onClick={() => navigator.clipboard.writeText(url)}>
              {Icon.link}
              <span>Copy Link</span>
            </button>
          </div>

        </article>

      </main>

    </>;
};
export default SurveyShare;
