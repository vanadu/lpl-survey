
const cspHeader = `
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.googletagmanager.com https://www.gstatic.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
img-src 'self' https://crossandhigh.com https://staging.crossandhigh.com https://region1.google-analytics.com blob: data:;
font-src 'self' https://fonts.gstatic.com;
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
block-all-mixed-content;
upgrade-insecure-requests;
frame-src youtube.com https://www.youtube.com https://player.vimeo.com https://www.google.com;
connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com ws://localhost:3000 https://api.emailjs.com;
`




module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: false
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=()'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  async redirects() {
    return [
      { source: "/00_Landing", destination: "/", permanent: false },
      { source: "/01_UserInfo", destination: "/", permanent: false },
      { source: "/02_CmpnInfo", destination: "/", permanent: false },
      { source: "/03_InfoSources", destination: "/", permanent: false },
      { source: "/04_IntubationHistory", destination: "/", permanent: false },
      { source: "/05_BreathingCrisis", destination: "/", permanent: false },
      { source: "/06_EarlySymptoms", destination: "/", permanent: false },
      { source: "/07_PrimaryDuration", destination: "/", permanent: false },
      { source: "/08_PrimaryVet", destination: "/", permanent: false },
      { source: "/09_Diagnosis", destination: "/", permanent: false },
      { source: "/10_TreatmentStatus", destination: "/", permanent: false },
      { source: "/11_TreatmentFactors", destination: "/", permanent: false },
      { source: "/12_Management", destination: "/", permanent: false },
      { source: "/13_OTCProducts", destination: "/", permanent: false },
      { source: "/14_Aspiration", destination: "/", permanent: false },
      { source: "/15_Neuropathy", destination: "/", permanent: false },
      { source: "/16_Conclusion", destination: "/", permanent: false },
    ];
  }
}
