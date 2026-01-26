import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  themeColor: '#4f46e5', // Changed to indigo for business/professional look
}

export const metadata: Metadata = {

  title: {
    default: 'Scale With Destiny | Web Design, SEO & Business Setup',
    template: '%s | Scale With Destiny'
  },
   icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  description: 'Professional web design, SEO optimization & business manager setup for local businesses worldwide. Helping local businesses establish their digital presence across multiple locations.',
  keywords: [
    'web design services',
    'SEO optimization', 
    'business setup',
    'local business marketing',
    'Google Business optimization',
    'website development',
    'digital presence',
    'business growth',
    'worldwide business services',
    'small business solutions',
    'business manager setup',
    'light marketing services',
    'global business support',
    'local SEO',
    'website design agency',
    'business consulting'
  ],
  authors: [{ name: 'Scale With Destiny' }],
  creator: 'Scale With Destiny',
  publisher: 'Scale With Destiny',
  metadataBase: new URL('https://scalewithdestiny.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scalewithdestiny.com',
    title: 'Scale With Destiny | Web Design, SEO & Business Setup',
    description: 'Professional web design, SEO & business setup for local businesses worldwide',
    siteName: 'Scale With Destiny',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scale With Destiny - Global Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale With Destiny | Web Design & Business Solutions',
    description: 'Helping local businesses worldwide with web design, SEO and business setup',
    creator: '@scalewthdestiny',
    images: ['/og-image.png'],
    site: '@scalewthdestiny',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here
    // google: 'verification_token',
  },
  category: 'Business Services',
}

// JSON-LD Structured Data for Local Business Services
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'Scale With Destiny',
  description: 'Professional web design, SEO optimization & business setup services for local businesses worldwide',
  url: 'https://scalewithdestiny.com',
  telephone: '+1-555-123-4567',
  email: 'hello@scalewithdestiny.com',
  logo: 'https://scalewithdestiny.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Global',
    addressRegion: 'Worldwide',
    addressCountry: 'WORLD'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0,
    longitude: 0
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
    description: 'Serving local businesses in multiple countries globally'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
          description: 'Custom website design and development for local businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimization',
          description: 'Search engine optimization services for local business visibility'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Setup & Management',
          description: 'Business manager setup and operational support'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Light Marketing Services',
          description: 'Targeted marketing solutions for local business growth'
        }
      }
    ]
  },
  sameAs: [
    'https://twitter.com/scalewithdestiny',
    'https://facebook.com/scalewithdestiny',
    'https://linkedin.com/company/scalewithdestiny'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Additional meta tags for global business focus */}
        <meta name="geo.region" content="WORLD" />
        <meta name="geo.placename" content="Global" />
        <meta name="target" content="global" />
        <meta name="distribution" content="global" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}