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
  themeColor: '#0000FF', // 
}

// Business Information
const BUSINESS_INFO = {
  name: 'Scale With Destiny',
  url: 'https://scalewithdestiny.com',
  email: 'hello@scalewithdestiny.com',
  phone: '+234-08-123-4567',
  address: {
    city: 'Global Remote',
    region: 'Worldwide',
    country: 'Global'
  },
  social: {
    twitter: '@scalewthdestiny',
    facebook: 'scalewthdestiny',
    instagram: '_scalewithdestiny',
    linkedin: 'company/scalewithdestiny'
  },
  // Countries served
  countriesServed: ['Nigeria', 'United Kingdom', 'USA', 'Canada', 'Australia']
}

// OG Image Configuration
const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Scale With Destiny - Professional Web Design, SEO & Business Setup Services for Local Businesses Worldwide',
  type: 'image/png'
}

// Favicon Configuration
const FAVICON = {
  ico: '/favicon.ico',
  png32: '/favicon-32x32.png',
  png16: '/favicon-16x16.png',
  apple: '/apple-touch-icon.png',
  manifest: '/site.webmanifest',
  maskIcon: '/safari-pinned-tab.svg',
  msTileColor: '#00A86B'
}

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  
  title: {
    default: 'Scale With Destiny | Professional Web Design, SEO & Business Setup for Local Businesses',
    template: '%s | Scale With Destiny'
  },
  
  description: 'Professional web design, SEO optimization & business setup services helping local businesses in Nigeria, UK, USA, Canada & Australia establish and scale their digital presence. Expert solutions for websites, Google Business, and marketing.',
  
  keywords: [
    'web design services',
    'SEO optimization',
    'business setup',
    'local business marketing',
    'Google Business optimization',
    'website development',
    'digital presence',
    'business growth',
    'Nigeria web design',
    'UK SEO services',
    'USA business setup',
    'Canada marketing',
    'Australia digital agency',
    'small business solutions',
    'business manager setup',
    'light marketing services',
    'global business support',
    'local SEO',
    'website design agency',
    'business consulting',
    'ecommerce development',
    'brand strategy',
    'digital marketing agency'
  ],
  
  authors: [{ name: 'Scale With Destiny', url: BUSINESS_INFO.url }],
  creator: 'Scale With Destiny',
  publisher: 'Scale With Destiny',
  
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-GB': '/',
      'en': '/',
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_NG', 'en_AU'],
    url: BUSINESS_INFO.url,
    title: 'Scale With Destiny | Professional Web Design, SEO & Business Setup Services',
    description: `Helping local businesses in ${BUSINESS_INFO.countriesServed.join(', ')} establish their digital presence with expert web design, SEO optimization, and business setup solutions. Get a free quote today!`,
    siteName: 'Scale With Destiny',
    images: [OG_IMAGE],
    emails: [BUSINESS_INFO.email],
    phoneNumbers: [BUSINESS_INFO.phone],
    countryName: 'Global',
    ttl: 604800,
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Scale With Destiny | Web Design, SEO & Business Setup',
    description: `Professional digital solutions for local businesses in ${BUSINESS_INFO.countriesServed.join(', ')}. Web design, SEO, business setup, and marketing services.`,
    creator: BUSINESS_INFO.social.twitter,
    site: BUSINESS_INFO.social.twitter,
    images: [OG_IMAGE.url],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: FAVICON.ico, sizes: 'any' },
      { url: FAVICON.png32, sizes: '32x32', type: 'image/png' },
      { url: FAVICON.png16, sizes: '16x16', type: 'image/png' },
    ],
    shortcut: [FAVICON.png32],
    apple: [
      { url: FAVICON.apple, sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: FAVICON.maskIcon,
        color: '#00A86B',
      },
    ],
  },
  
  manifest: FAVICON.manifest,
  
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: 'your-google-verification-code',
  },
  
  category: 'Business Services',
  
  classification: 'Digital Agency, Web Design, SEO Services, Business Consulting',
  
  appleWebApp: {
    capable: true,
    title: 'Scale With Destiny',
    statusBarStyle: 'black-translucent',
  },
  
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
}

// Enhanced JSON-LD Structured Data with Google Business integration
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${BUSINESS_INFO.url}#organization`,
      name: BUSINESS_INFO.name,
      description: `Professional web design, SEO optimization & business setup services for local businesses in ${BUSINESS_INFO.countriesServed.join(', ')}`,
      url: BUSINESS_INFO.url,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS_INFO.url}/logo.png`,
        width: 512,
        height: 512,
      },
      image: {
        '@type': 'ImageObject',
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.region,
        addressCountry: BUSINESS_INFO.address.country,
      },
      areaServed: BUSINESS_INFO.countriesServed.map(country => ({
        '@type': 'Country',
        name: country,
      })),
      foundingDate: '2023',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Business Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Design & Development',
              description: 'Custom website design and development for local businesses with modern, responsive layouts that convert visitors into customers.',
              serviceType: 'Web Development',
              provider: { '@id': `${BUSINESS_INFO.url}#organization` },
              areaServed: BUSINESS_INFO.countriesServed,
              audience: { '@type': 'Audience', name: 'Small to Medium Businesses' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Optimization',
              description: 'Advanced search engine optimization services for local business visibility and ranking improvements.',
              serviceType: 'SEO',
              provider: { '@id': `${BUSINESS_INFO.url}#organization` },
              areaServed: BUSINESS_INFO.countriesServed,
              audience: { '@type': 'Audience', name: 'Local Businesses' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Setup & Management',
              description: 'Complete business manager setup and operational support for scaling your enterprise.',
              serviceType: 'Business Consulting',
              provider: { '@id': `${BUSINESS_INFO.url}#organization` },
              areaServed: BUSINESS_INFO.countriesServed,
              audience: { '@type': 'Audience', name: 'Entrepreneurs & Startups' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Marketing Services',
              description: 'Targeted marketing solutions for local business growth including social media, content, and paid advertising.',
              serviceType: 'Marketing',
              provider: { '@id': `${BUSINESS_INFO.url}#organization` },
              areaServed: BUSINESS_INFO.countriesServed,
              audience: { '@type': 'Audience', name: 'Growing Businesses' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce Development',
              description: 'Complete e-commerce solutions including Shopify, WooCommerce, and custom online stores.',
              serviceType: 'E-Commerce',
              provider: { '@id': `${BUSINESS_INFO.url}#organization` },
              areaServed: BUSINESS_INFO.countriesServed,
              audience: { '@type': 'Audience', name: 'Retail & E-Commerce' },
            },
          },
        ],
      },
      sameAs: [
        `https://twitter.com/${BUSINESS_INFO.social.twitter.replace('@', '')}`,
        `https://facebook.com/${BUSINESS_INFO.social.facebook}`,
        `https://linkedin.com/${BUSINESS_INFO.social.linkedin}`,
        `https://instagram.com/${BUSINESS_INFO.social.instagram}`,
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
          timeZone: 'Africa/Lagos',
        },
      ],
      priceRange: '$$',
      paymentAccepted: ['Credit Card', 'PayPal', 'Bank Transfer', 'Stripe'],
      currenciesAccepted: 'USD, GBP, NGN, CAD, AUD',
    },
    // LocalBusiness Schema for each country served
    ...BUSINESS_INFO.countriesServed.map(country => ({
      '@type': 'LocalBusiness',
      name: `${BUSINESS_INFO.name} - ${country}`,
      description: `Professional web design and SEO services for businesses in ${country}`,
      areaServed: country,
      url: BUSINESS_INFO.url,
      sameAs: [
        `https://twitter.com/${BUSINESS_INFO.social.twitter.replace('@', '')}`,
        `https://facebook.com/${BUSINESS_INFO.social.facebook}`,
      ],
    })),
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': `${BUSINESS_INFO.url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BUSINESS_INFO.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${BUSINESS_INFO.url}/services`,
        },
      ],
    },
  ],
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What countries do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `We serve businesses in ${BUSINESS_INFO.countriesServed.join(', ')}. Our global team provides services across multiple time zones to support local businesses in these regions.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Scale With Destiny offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer comprehensive digital services including web design and development, SEO optimization, business setup and management, digital marketing, and e-commerce solutions for local businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes! We work with clients in ${BUSINESS_INFO.countriesServed.join(', ')} and specialize in helping local businesses establish their digital presence.`,
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical website projects take 2-4 weeks depending on complexity. We also offer expedited services for urgent projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer free 30-minute consultations to discuss your business needs and how we can help you grow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have Google Reviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are in the process of setting up our Google Business profile. Soon, you will be able to leave reviews and see what other clients are saying about our services.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for analytics and tracking */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Additional meta tags for better SEO */}
        <meta name="google-site-verification" content="fndAxw2kbzfJQWLEGWmY6YsAF8H-GLI2IFBxayNSWyI" />
        <meta name="geo.region" content={BUSINESS_INFO.countriesServed.map(c => {
          const codes: Record<string, string> = {
            'Nigeria': 'NG',
            'United Kingdom': 'GB',
            'USA': 'US',
            'Canada': 'CA',
            'Australia': 'AU'
          }
          return codes[c]
        }).join(',')} />
        <meta name="geo.placename" content="Global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="language" content="English" />
        
        {/* Google Site Verification - Add when you have it */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        
        {/* Google Analytics - Add your GA4 ID when ready */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}