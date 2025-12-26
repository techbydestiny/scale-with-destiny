import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: {
    default: 'Scale with Destiny | MVP SaaS Design & Development',
    template: '%s | Scale with Destiny'
  },
  description: 'From vision to viable. Fast. We design, develop, and prep your SaaS MVP for market in one focused partnership.',
  keywords: ['MVP development', 'SaaS design', 'startup agency', 'product development', 'SaaS launch'],
  authors: [{ name: 'Scale with Destiny' }],
  metadataBase: new URL('https://scalewithdestiny.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scalewithdestiny.com',
    title: 'Scale with Destiny | MVP SaaS Design & Development',
    description: 'From vision to viable. Fast. Design, development, and market strategy for your SaaS.',
    siteName: 'Scale with Destiny',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scale with Destiny',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale with Destiny',
    description: 'From vision to viable. Fast.',
    creator: '@scalewithdestiny',
    images: ['/og-image.png'],
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
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Scale with Destiny',
  description: 'MVP SaaS Design & Development Agency',
  url: 'https://scalewithdestiny.com',
  logo: 'https://scalewithdestiny.com/logo.png',
  areaServed: 'Worldwide',
  serviceType: ['MVP Development', 'SaaS Design', 'Product Strategy'],
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
      </head>
      <body className="min-h-screen bg-white text-black antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}