import { useState, useReducer } from 'react'

import Link from 'next/link'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA The below is the old emailjs import from the Wallis page.
// import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from "@emailjs/browser"
import { FaPaw } from 'react-icons/fa'
import * as styles from '../styles/Light.module.scss'

// !VA This is based on this site https://wallis.dev/blog/emailjs-with-recaptcha and this repo https://github.com/james-wallis/wallisconsultancy/blob/master/components/messageForm.js
/* !VA  
This will not work on localhost. The environment variables for this are set in the Vercel settings. They're called the same as they are in .env.local, but for some reason .env.local isn't being accessed in the Vercel build. To test this on localhost, you have to:
		In the Vercel CP, change this environment variable asfollows:
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 6Lck55QpAAAAAGENEry_CfKq2RJaEGqPUTQlH9qD

    And in the EmailJS CP, change as follows:
    Recaptcha Secret Key: 6Lck55QpAAAAALfgDgAVBOw0WhfzBxJWUuVUFNkK

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
        title="Stent Procedure for Laryngeal Paralysis in Dogs: Contact Us"
        description="Contact us to learn more about laryngeal paralysis and stent implants as an effective alternative to surgery."
        canonical="https://larparlife.com/contact"
      />
      <section className={styles.section}>
        <div className={styles.section_content}>
          {/* CONTENT START */}
          <div className={styles.topic_head}>
            <h1 className={styles.topic_subhead_title}>Questions about <span className='mobile-show-inline'><br /></span>Laryngeal Paralysis in Dogs?</h1>

            <div className={styles.container_flex_center}>
              <h2 className={styles.heading_framed_text}>Contact Us</h2>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section_content}>
 
          {/* OUTER CONDITIONAL OPEN */}
          <div className="outer-conditional-open">
            { formSubmitted.title === '' ? ( 
            // INNER CONDITIONAL OPEN
            <div className={styles.contact_form_feedback}>
              <p className={styles.content_text}>If you have questions about laryngeal paralysis in dogs or the stent procedure that weren&lsquo;t answered on this site, or have information, a correction, or a suggestion to share, feel free to contact us.</p>
              <ul className={styles.content_list_no_bullet}>

                <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>
                  Send us a private message with&nbsp;
                  <Link href='https://www.facebook.com/van.l.albert/' 
                    className='link-dark-nowrap' rel="noopener noreferrer" target="_blank">
                    Facebook Messenger
                  </Link>.
                  
                </li>
                <li className={styles.content_list_item}>
                  <FaPaw className={styles.content_list_item_svg} />
                  Join the&nbsp;
                  <Link href='/social' className='link-dark-nowrap' rel="noopener noreferrer" target="_blank">
                  Lar Par Community
                  </Link>
                  &nbsp; and share your story.
                </li>
                {/* <li className={styles.content_list_item}><FaPaw className={styles.content_list_item_svg}/>You can post or send a private message to our Twitter account at <a href='https://twitter.com/LarParLife' className='link' target="_blank" rel="noopener noreferrer">https://twitter.com/LarParLife</a>.  </li> */}
                <li className={styles.content_list_item}>
                  <FaPaw className={styles.content_list_item_svg}/>
                  Use the Contact form below to send us an email. 
                </li>
              </ul>
              {/* <p className={styles.content_text}> */}
              <p className={[styles.content_text, styles.contact_privacy].join(' ')}>
                <span className='semibold'>About Your Privacy</span>: We don&lsquo;t share, sell, or allow your email address or personal information to come to third parties for any reason.
              </p>
              {/* If showCaptcha is false, show the form. If it is true, show the reCaptcha component. */}
              {!showCaptcha ? (
                <form 
                  className={styles.contact_form}
                  onSubmit={submitFormAndShowCaptcha}>
                  <div className={styles.contact_form_user}>
                    <div className={styles.contact_form_field}>
                      <label className={styles.contact_form_input_label} htmlFor="contact-form-name">
                      Your Name:
                      </label>
                      <input
                          id="contact-form-name"
                          className={styles.contact_form_input}
                          type="text"
                          value={name}
                          onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                          required
                        />
                    </div>
                    <div className={styles.contact_form_field}>
                      <label className={styles.contact_form_input_label} htmlFor="contact-form-email">
                      Your Email:

                      </label>
                      <input
                          id="contact-form-email"
                          className={styles.contact_form_input}
                          type="email"
                          value={email}
                          onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                          required
                        />
                    </div>
                  </div>
                  <div className={styles.contact_form_message}>
                    <div className={styles.contact_form_field}>
                      <label className={styles.contact_form_input_label} htmlFor="contact-form-message">
                        Your Message:
                      </label>
                      <textarea
                          rows="5"
                          id="contact-form-message"
                          className={styles.contact_form_textarea}
                          type="text"
                          value={message}
                          onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                          required
                        />
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center flex-col sm:flex-row">
                    {showFormErr ? <p className="sm:mr-4 text-red-400">Please fill in all three input boxes to send a message</p> : null}
                    <button className={styles.contact_form_button} type="submit">
                      Send
                    </button>
                  </div>
                </form>
              ) : (
                <>                    
                  <ReCAPTCHA
                    sitekey={recaptcha_site_key}
                    onChange={sendEmail}
                  />
                </>
              )}
            </div>
            // INNER CONDITIONAL CLOSE
            ) : (
            <div className={styles.contact_form_feedback}>
              <div className={styles.contact_heading}>
                <h3 className={styles.heading_head}>{formSubmitted.title}</h3>
                <p>{formSubmitted.paragraph}</p>
              </div>
            </div>
            )}
          </div>
          {/* OUTER CONDITIONAL CLOSE */}
        </div>
      </section>
    </>

  )
}