import { Oswald, Open_Sans } from 'next/font/google'
import { useEffect } from 'react'
// !VA Date: 2024.03.29 Still using the Head component for the viewport property
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the metatags Head component. Here we define the default meta tags used for all pages unless overridden on specific pages. This will be the same as defined in index.js.
import {DefaultSeo} from 'next-seo';
// !VA Date: 2024.03.29 I don't remember what the Script component was used for, but it's not used now.
import Script from 'next/script'
// !VA See https://www.npmjs.com/package/analytics
import analytics from '../utility/analytics'

import { useRouter } from 'next/router'
import * as gtag from "../lib/gtag";

import Layout from '../components/Layout'
// !VA Date: 2024.03.29 I don't remember what this was for
// import { stdin, stdout } from 'node:process';

// !VA Import default global styles
import '../styles/globals.css'
import "../styles/globals.scss";
// import "../styles/survey.scss";      // ✅ global, allowed here
// !VA TEST
import "survey-core/survey-core.css"; // import the SurveyJS stylesheets

// !VA If loading a variable font, you don't need to specify the font weight
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700'],
  variable: '--oswald-font',
  display: 'swap',
})

const opensans = Open_Sans({
  subsets: ['latin'],
  weight: ['300','400','600','700'],
  variable: '--opensans-font',
  display: 'swap',
})



function MyApp({ Component, pageProps }) {
  
  // !VA useRouter and useEffect required for Google Analytics
  const router = useRouter();



  
  // !VA I don't even know if this works...I tried to remove it but kept getting url is undefined errors. DOn't have time for it right now... 
  useEffect(() => {
    // !VA If serving from localhost, host will be 'localhost'. If serving from the domain, host will be www.larparlife.com
    const useEffect_host = window.location.hostname
    if (useEffect_host !== 'localhost') {

      // !VA DISABLED FOR TESTING
      // analytics.page() 
      
      // !VA Console log confirmation that handleRouteChange is running
      const handleRouteChange = (url) => {
        // !VA DISABLED FOR TESTING
        // gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };

    } 


  // }, [router.events]);
  // },[]);
  });



  // !VA Script tags required for Google Analytics. Just as above, in the code snippet below, conditionally run the GA gtag code if the host is not 'localhost'
  // !VA Date: 2024.03.29 NextSeo replaces Head component. Here we define the default template for meta tags.
  return (
    <>



      <style jsx global>{`
        :root {
          --oswald-font: ${oswald.style.fontFamily};
          --opensans-font: ${opensans.style.fontFamily};
        }'
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://www.googletagmanager.com"></link>
        <link rel="preconnect" href="https://www.gstatic.com"></link>
      </Head>
      
      <Layout>
      <DefaultSeo
        title="LarPar/GOLPP Survey 2026."
        description="Survey to collect LP/GOLPP information from the people who love their LP dogs the most."
        openGraph={{
          title: 'LarPar/GOLPP Survey 2026: Powered by larparlife.org',
          description: 'Survey to collect LP/GOLPP information from the people who love their LP dogs the most.',
          type: 'website',
          locale: 'en_US',
          url: 'https://larparlife.org',
          images: [
            {
              url: 'https://larparlife.org/og/lplsurvey-og.png',
              width: 1200,
              height: 630,
              alt: 'LarPar/GOLPP Survey 2026',
              type: 'image/png',
            },
          ],
          site_name: 'LarParLife.org',
        }}
        twitter={{
          handle: '@larparlife',
          site: '@larparlife',
          cardType: 'summary_large_image',
        }}
      />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
