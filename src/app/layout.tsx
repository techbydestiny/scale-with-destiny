import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0000FF',
}

// Business Information
const BUSINESS_INFO = {
  name: 'Scale With Destiny',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://scale-with-destiny.vercel.app',
  email: 'hello@scalewithdestiny.com',
  phone: '+234-812-345-6789',
  address: {
    city: 'Global Remote',
    region: 'Worldwide',
    country: 'Global'
  },
  social: {
    twitter: '@scalewithdestiny',
    facebook: 'scalewithdestiny',
    instagram: '_scalewithdestiny',
    linkedin: 'company/scalewithdestiny'
  },
  countriesServed: ['Nigeria', 'United Kingdom', 'USA', 'Canada', 'Australia']
}

// OG Image Configuration
const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Scale With Destiny - Professional Web Design, SEO & Business Setup Services',
  type: 'image/png'
}

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  
  title: {
    default: 'Scale With Destiny | Web Design, SEO & Business Setup for Local Businesses',
    template: '%s | Scale With Destiny'
  },
  
  description: 'Professional web design, SEO optimization & business setup services for local businesses in Nigeria, UK, USA, Canada & Australia. Get a free website audit today.',
  
  keywords: [
    'web design services', 'SEO optimization', 'business setup', 'local business marketing',
    'Google Business optimization', 'website development', 'digital presence', 'business growth',
    'Nigeria web design', 'UK SEO services', 'USA business setup', 'Canada marketing',
    'Australia digital agency', 'small business solutions', 'local SEO', 'ecommerce development'
  ],
  
  authors: [{ name: 'Scale With Destiny', url: BUSINESS_INFO.url }],
  creator: 'Scale With Destiny',
  publisher: 'Scale With Destiny',
  
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/usa',
      'en-GB': '/united-kingdom',
      'en-NG': '/nigeria',
      'en-CA': '/canada',
      'en-AU': '/australia',
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_NG', 'en_AU', 'en_CA'],
    url: BUSINESS_INFO.url,
    title: 'Scale With Destiny | Professional Web Design, SEO & Business Setup',
    description: `Helping local businesses in ${BUSINESS_INFO.countriesServed.join(', ')} establish their digital presence with expert web design and SEO.`,
    siteName: 'Scale With Destiny',
    images: [OG_IMAGE],
    emails: [BUSINESS_INFO.email],
    phoneNumbers: [BUSINESS_INFO.phone],
    countryName: 'Global',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Scale With Destiny | Web Design, SEO & Business Setup',
    description: `Professional digital solutions for local businesses in ${BUSINESS_INFO.countriesServed.join(', ')}.`,
    creator: BUSINESS_INFO.social.twitter,
    site: BUSINESS_INFO.social.twitter,
    images: [OG_IMAGE.url],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'fndAxw2kbzfJQWLEGWmY6YsAF8H-GLI2IFBxayNSWyI',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${BUSINESS_INFO.url}#organization`,
      name: BUSINESS_INFO.name,
      description: `Professional web design, SEO optimization & business setup services for local businesses worldwide.`,
      url: BUSINESS_INFO.url,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      logo: `${BUSINESS_INFO.url}/logo.png`,
      image: OG_IMAGE.url,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Global',
      },
      areaServed: BUSINESS_INFO.countriesServed,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Business Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Setup & Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Development' } },
        ],
      },
      sameAs: [
        `https://twitter.com/${BUSINESS_INFO.social.twitter.replace('@', '')}`,
        `https://facebook.com/${BUSINESS_INFO.social.facebook}`,
        `https://linkedin.com/${BUSINESS_INFO.social.linkedin}`,
        `https://instagram.com/${BUSINESS_INFO.social.instagram}`,
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '$$',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <meta name="geo.region" content="NG,GB,US,CA,AU" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}