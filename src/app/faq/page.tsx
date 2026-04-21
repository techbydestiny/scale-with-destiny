import { Metadata } from 'next'
import Link from 'next/link'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'FAQ | Web Design, SEO & Business Setup Questions Answered',
  description: 'Get answers to common questions about web design pricing, SEO timelines, global services, and business setup. Free consultation available for your business.',
  keywords: 'web design FAQ, SEO questions, business setup help, website pricing, local SEO answers',
  alternates: {
    canonical: 'https://scalewithdestiny.com/faq',
  },
  openGraph: {
    title: 'FAQ | Web Design, SEO & Business Setup Questions',
    description: 'Everything you need to know about our web design, SEO, and business setup services',
    url: 'https://scalewithdestiny.com/faq',
    type: 'website',
  },
}

// FAQ data for schema
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a professional website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website costs range from $200 to $1,000+ depending on complexity. Basic business sites start at $2,000-5,000, e-commerce sites at $5,000-10,000, and custom enterprise solutions at $10,000+. We offer free quotes after understanding your specific business needs.'
      }
    },
    {
      '@type': 'Question',
      name: 'What\'s included in your SEO packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our SEO packages include comprehensive website audit, keyword research, on-page optimization, local SEO setup, Google Business optimization, monthly performance reports, and ongoing optimization. Packages start at $500/month with 3-month minimum commitment.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical timelines: Basic business websites (2-4 weeks), E-commerce sites (3-6 weeks), Custom web applications (4-8 weeks). We provide detailed timelines after our initial consultation based on your specific requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside your country?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We serve businesses in 30+ countries including Nigeria, United Kingdom, USA, Canada, and Australia. We specialize in adapting solutions for local markets, including multi-language support, local payment integration, and regional SEO optimization.'
      }
    }
  ]
}

export default function FAQPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      {/* Client-side interactive component */}
      <FaqClient />
    </>
  )
}