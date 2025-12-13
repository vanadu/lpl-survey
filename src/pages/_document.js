
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script  strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-P8C8X6FG72" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `

            const gtag_host = window.location.hostname

            if (gtag_host !== 'localhost' ) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P8C8X6FG72', {
                page_path: window.location.pathname,
              });
            } 

            `,
          }}
      />

      </Head> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


