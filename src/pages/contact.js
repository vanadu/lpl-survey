import { useState, useReducer } from 'react'

import Link from 'next/link'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA The below is the old emailjs import from the Wallis page.
// import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from "@emailjs/browser"
import { FaPaw } from 'react-icons/fa'
import SurveyHero from "../components/SurveyHero"

// !VA This is based on this site https://wallis.dev/blog/emailjs-with-recaptcha and this repo https://github.com/james-wallis/wallisconsultancy/blob/master/components/messageForm.js

/* !VA
For this form to work:

LOCALHOST
1) Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY, NEXT_PUBLIC_EMAILJS_SERVICE_ID,
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   in .env.local
2) Add localhost to the allowed domains for the reCAPTCHA site key
3) If EmailJS domain allowlist is enabled, add http://localhost:3000
4) Restart next dev after changing env vars

PRODUCTION (DigitalOcean)
1) Set the same NEXT_PUBLIC_* vars in .env.production or PM2/server env
   BEFORE running next build
2) Add the production domain to reCAPTCHA allowed domains
3) If EmailJS domain allowlist is enabled, add the production origin
4) Rebuild and restart PM2

Note: NEXT_PUBLIC_* values are exposed to the browser and are bundled at build time.
*/

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'email':
      return { ...state, email: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

export default function MessageForm() {
  // !VA Initialize the formState containing the name, email, and message.
  const [formState, dispatch] = useReducer(reducer, initialState);
  // !VA Initialize the toggle for the error state of the form
  const [showFormErr, setShowFormErr] = useState(false);
  // !VA Piece of state containing the title, i.e. status message displayed to the user when the form is submitted and the paragraph, i.e. explanatory text of the status message
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  // !VA Toggle that displays the recaptcha when the Send is clicked
  const [showCaptcha, setShowCaptcha] = useState(false);
  // !VA Initialize formState with the name, email, and message properties.
  const { name, email, message } = formState;
  // !VA Assign the environment variable to a local variable.
  const recaptcha_site_key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  
  // !VA This is called in the onSubmit method of the form element. All it does is set the showCaptcha piece of state. 
  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  // !VA Runs when the ReCaptcha component is executed. The captchaValue is passed from the ReCaptcha component when the user clicks the "I'm a human" checkbox. 
  const sendEmail = (captchaValue) => {
    // !VA If any of the form fields is empty, set the showFormErr piece of state to true
    if (name === '' || email === '' || message === '') {
      setShowFormErr(true);
      return;
    }

    // !VA Params contains the existing formState properties with the user entries plus the captchaValue returned from the ReCaptcha component. params now has everything it needs to be passed to EmailJS.
    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    };

    // !VA Initial message and state while the async call is made.
    setFormSubmitted({ title: 'Sending message...', paragraph: '' });
    // !VA Environment variable names changed to reflect .env.local
    // !VA Send the EmailJS values. The 'then' means the promise returned a response from EmailJS was recieved, either a success 200 or an unidentified message code that indicates and error on the EMailJS side. If 200, display the Message sent text. If EmailJS returns an error, display an EmailJS specific error and show error message. 
    // !VA If the promise fails, then the payload never got to EmailJS and the ReCaptcha failed. 
    // !VA g-captcha-response is being sent, it's in params.
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    )
      .then(({ status }) => {
        if (status === 200) {
          setFormSubmitted({ title: 'Message has been sent', paragraph: 'We\'ll respond as soon as we can.' });
        } else {
          setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'The message couldn\'t be send due to an error with the email provider. Please contact us via Facebook Messenger.' });
        }
      }, (err) => {
        /* !VA  
        Disabling this eslint directive -- I want to see the Recaptcha error.
        // eslint-disable-next-line no-console
        */
       // !VA This is where we're getting the recaptcha unknown issue message.
        setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'The message couldn\'t be sent due to a network issue. Try again later or contact us by Facebook Messenger.' });
      });
  };

  /* !VA  
  OUTER CONDITIONAL: 'title' is the message generated by the form submission. If it is empty, then then the form hasn't been submitted so display the form so the user can fill it out.
  Else, the 'title' is not empty, then it contains the user input, so display the Recaptcha to collect the recaptcha code from the Recaptcha component. 
  */
 /* !VA  
  INNER CONDITIONAL
  showCaptcha is set in submitFormAndShowCaptcha. If it is false, then show the form for the user to fill out. Once Send is clicked and the form is submitted, showCaptcha will be set to true in submitFormAndShowCaptcha so we can collect the recaptcha code to add to params, which will be passed to EmailJS.
 */
  return (
    <>
      <NextSeo 
        title="LP/GOLPP Survey 2006: Contact Us"
        description="Contact us to provide feedback, suggestions or comments about the 2026 LP/GOLPP Survey powered by LarParLife.org."
        canonical="https://larparlife.com/contact"
      />


      <main className="page home">
        <header className="home-head card card--lift">
          <SurveyHero />
        </header>





        <section className="content-body">
            {/* CONTENT START */}



            <article className='card'>

              <div className="topic-head">
                <h1 className="topic-subhead-title">
                  Survey Comments or Suggestions?
                </h1>

                <div className="container-flex-center">
                  <h2 className="heading-framed-text">Contact Us</h2>
                </div>
              </div>
            </article>
        </section>

        <section className="content-body home-head">

            <div className="outer-conditional-open">
              {formSubmitted.title === '' ? (
                <div className="contact-form-feedback">

                  

                  <p className="content-text">
                    If you have questions, comments, or suggestions about the 2026 LP/GOLPP Survey, feel free to contact us.
                  </p>

                  <ul className="content-list-no-bullet">
                    <li className="content-list-item">
                      <FaPaw className="content-list-item-svg" />
                      Send us a private message with&nbsp;
                      <Link
                        href="https://www.facebook.com/van.l.albert/"
                        className="contact-form-link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Facebook Messenger
                      </Link>.
                    </li>

                    <li className="content-list-item">
                      <FaPaw className="content-list-item-svg" />
                      Use the Contact form below to send us an email.
                    </li>
                  </ul>

                  <p className="content-text contact-privacy">
                    <span className="semibold">About Your Privacy</span>: We don&lsquo;t share, sell, or allow your email address or personal information to come to third parties for any reason.
                  </p>

                  {!showCaptcha ? (
                    <form
                      className="contact-form"
                      onSubmit={submitFormAndShowCaptcha}
                    >
                      <div className="contact-form-user">

                        <div className="contact-form-field">
                          <label className="contact-form-input-label" htmlFor="contact-form-name">
                            Your Name:
                          </label>
                          <input
                            id="contact-form-name"
                            className="contact-form-input"
                            type="text"
                            value={name}
                            onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                            required
                          />
                        </div>

                        <div className="contact-form-field">
                          <label className="contact-form-input-label" htmlFor="contact-form-email">
                            Your Email:
                          </label>
                          <input
                            id="contact-form-email"
                            className="contact-form-input"
                            type="email"
                            value={email}
                            onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                            required
                          />
                        </div>

                      </div>

                      <div className="contact-form-message">
                        <div className="contact-form-field">
                          <label className="contact-form-input-label" htmlFor="contact-form-message">
                            Your Message:
                          </label>
                          <textarea
                            rows="5"
                            id="contact-form-message"
                            className="contact-form-textarea"
                            value={message}
                            onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="contact-form-fields">
                        {showFormErr ? (
                          <p className="sm:mr-4 text-red-400">
                            Please fill in all three input boxes to send a message
                          </p>
                        ) : null}

                        <button className="contact-form-button" type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                  ) : (
                    <ReCAPTCHA
                      sitekey={recaptcha_site_key}
                      onChange={sendEmail}
                    />
                  )}
                </div>
              ) : (
                <div className="contact-form-feedback">
                  <div className="contact-heading">
                    <h3 className="heading-head">{formSubmitted.title}</h3>
                    <p>{formSubmitted.paragraph}</p>
                  </div>
                </div>
              )}
            </div>


        </section>

      </main>

    </>

  )
}