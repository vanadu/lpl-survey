
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self'; image-src 'self' 'https://staging.crossandhigh.com'; script-src 'self' https://www.google-analytics.com; font-src 'self' 'https://fonts.googleapis.com'",
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Permissions-Policy',
              value: "camera=(); battery=(self); geolocation=(); microphone=('https://a-domain.com')",
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
          ],
        },
      ];
  },   
  async redirects() {
    return [
      {
        source: '/saga',
        destination: '/stories',
        permanent: true,
      },
      {
        source: '/larpar',
        destination: '/patients',
        permanent: true,
      },
      {
        source: '/stent',
        destination: '/whystent',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/patients/aboutlarpar',
        permanent: true,
      },
      {
        source: '/roadmap',
        destination: '/whystent',
        permanent: true,
      },
      {
        source: '/you',
        destination: '/',
        permanent: true,
      }
    ]
  },
}
