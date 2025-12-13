import { Oswald, Inter, Boogaloo, Open_Sans, Inconsolata } from 'next/font/google'
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
import '../styles/globals.scss'

// !VA If loading a variable font, you don't need to specify the font weight
const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--oswald-font'
})
const boogaloo = Boogaloo({ 
  subsets: ['latin'], 
  variable: '--boogaloo-font',
  weight: ["400"],
})
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--inter-font'
})
const opensans = Open_Sans(
  { subsets: ['latin'],
    variable: '--opensans-font'
})
const inconsolata = Inconsolata(
  { subsets: ['latin'],
    variable: '--inconsolata-font'
})

function MyApp({ Component, pageProps }) {
  
  // !VA useRouter and useEffect required for Google Analytics
  const router = useRouter();



  
  // !VA I don't even know if this works...I tried to remove it but kept getting url is undefined errors. DOn't have time for it right now... 
  useEffect(() => {
    // !VA If serving from localhost, host will be 'localhost'. If serving from the domain, host will be www.larparlife.com
    const useEffect_host = window.location.hostname
    if (useEffect_host !== 'localhost') {


      analytics.page() 
      
      // !VA Console log confirmation that handleRouteChange is running
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };

    } 


  // }, [router.events]);
  },[]);



  // !VA Script tags required for Google Analytics. Just as above, in the code snippet below, conditionally run the GA gtag code if the host is not 'localhost'
  // !VA Date: 2024.03.29 NextSeo replaces Head component. Here we define the default template for meta tags.
  return (
    <>



      <style jsx global>{`
        :root {
          --oswald-font: ${oswald.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};

          --opensans-font: ${opensans.style.fontFamily};
          --inconsolata-font: ${inconsolata.style.fontFamily};
        }'
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://www.googletagmanager.com"></link>
        <link rel="preconnect" href="https://www.gstatic.com"></link>
      </Head>
      
      <Layout>
        <DefaultSeo
          title="Lar Par in Dogs: The 21st Century Guide to Canine Laryngeal Paralysis"
          description="All about about laryngeal paralysis in dogs: symptoms, surgery, stent and other alternative treatments."
          openGraph={{
            title: 'Lar Par in Dogs: The 21st Century Guide to Canine Laryngeal Paralysis',
            description: 'All about about laryngeal paralysis in dogs: symptoms, surgery, stent and other alternative treatments.',
            type: 'website',
            locale: 'en_US',
            url: 'https://larparlife.com',
            images: {
              url: 'https://staging.crossandhigh.com/images/img-opengraph-larparlife.jpg',
              width: '1650',
              height: '856',
              alt: 'Lar Par Life'
            }
          }}

          twitter={{
            description: 'laryngeal paralysis in dogs: symptoms, surgery, stent and other alternative treatments.',
            handle: '@larparlife',
            site: '@larparlife',
            images: {
              url: 'https://staging.crossandhigh.com/images/TwitterCardImage_LarParLife_2022.12.12A.jpg',
              width: '1650',
              height: '856',
              alt: 'Lar Par Life'
            },
            cardType: 'summary_large_image',
          }}
          />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
