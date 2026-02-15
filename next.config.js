
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
  }
}
