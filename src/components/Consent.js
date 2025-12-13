/*
 !VA Component containing all content for displaying the user consent privacy form to users. Includes:
  * react-cookie-consent component
  * Wrappers for the above
  * Code required to show/hide the consent form and the full privacy statement
*/

import React from 'react'
import { useState, useRef } from 'react'
import CookieConsent from 'react-cookie-consent'
import Modal from 'react-modal'
import AccordionContent from './AccordionContent'

export function ShowPolicy() {
  return (
    <div className="show-policy-wrap">
      <button>Show Policy</button>
    </div>
  );
}


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function Consent() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)
  
  return (
    <>
        <CookieConsent
          debug={true}
          disableStyles={true}
          // disableStyles={true}
          enableDeclineButton={true}
          flipButtons={true}
          buttonText="I accept"
          declineButtonText="I decline"
          containerClasses="consent-wrap"
          contentClasses="consent-content"
          buttonClasses="consent-accept-button"
          declineButtonClasses="consent-decline-button"
          buttonWrapperClasses="consent-button-wrap"
          location="bottom"
          cookieName="larParLifeConsentCookie"
          expires={150}
          overlay={false}
          overlayClasses="consent-overlay"
          // Below are generic styles, not CookieConsent props
          style={{ background: "#2B373B" }}
          // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          // ButtonComponent={ShowPolicy}
        >
          <p><span className="bold">We won&lsquo;t collect or share your personal information, period. </span>By accepting our <span className="semibold">Privacy Policy</span> you can help us improve the site for future visitors. </p>
          <div className="consent-policy-button-wrap">
            <button 
              onClick={openModal}
              // Disables the module's inline styles
              className="consent-policy-button"
            >View Our Privacy Policy</button>
          </div>
          <Modal
            className="consent-policy-modal"
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            // shouldFocusAfterRender={true}
            shouldCloseOnOverlayClick={false}
            // preventScroll={true}

          >
        
            <div className="privacy-policy-container">

              <div className='privacy-policy-content'>
                <h2>Privacy Policy</h2>
                <p><span className="semibold">This website&lsquo;s purpose </span>is to provide information about the condition of canine laryngeal paralysis to website visitors. No products or services are offered for sale and no personally identifiable information is collected or shared with third parties.</p>
                <p><span className="semibold">When you visit the website,</span> five pieces of information are stored in your browser in the form of &lsquo;cookies&rsquo;:</p>
                <ul>
                  <li>Our content delivery provider (Cloudflare) sets two cookies required for security and functionality. See <a href="#" className="link-dark" target="_blank" rel="noreferrer noopener">Cloudflare&lsquo;s GDPR Compliance Statement</a>.</li>
                  <li>Google sets two cookies that provide us with information about which pages visitors access and their country of origin. This information does not include an IP address or any other <a href="https://support.google.com/analytics/answer/6366371" className="link-dark" target="_blank" rel="noreferrer noopener">personally identifiable information</a>. For more information, see <a href="https://support.google.com/analytics/topic/2919631" className="link-dark" target="_blank" rel="noreferrer noopener">Google&lsquo;s Data Privacy and Security statement</a>.</li>
                  <li>Some locations require a cookie that records whether the visitor accepted or declined our Privacy Policy.</li>
                  <li>When using the Contact form, the user&lsquo;s IP address is anonymized by our contact form provider EmailJS in accordance with their Privacy Policy. The user&lsquo;s email address is never shared by us or the provider for any purpose.</li>
                </ul>
                <p><span className="semibold">If you want to disable cookies</span>, you can do it by accessing the settings of your internet browser.</p>
                <p><span className="semibold">This website is not responsible</span> for data and privacy protection on any third party websites, including sites linked to from this website. </p>
                <p><span className="semibold">We reserve the right</span> to modify this Privacy Policy in accordance with our goal of furthering the interests of animals with laryngeal paralysis. In that event, the Privacy Policy and Consent Form will be updated accordingly. </p>
              </div>
              <div className='privacy-policy-close-container'>
                <button className="privacy-policy-close"onClick={closeModal}>Close</button>
              </div>
            </div>

          </Modal>

        </CookieConsent>
    </>
  )
}

export default Consent