import { Metadata } from 'next'
import AuditClient from './AuditClient'

export const metadata: Metadata = {
  title: 'Free Website Audit | Get Your Free SEO & Web Design Analysis | Scale With Destiny',
  description: 'Get a free, no-obligation website audit and SEO analysis. We\'ll analyze your site speed, SEO, mobile responsiveness, and provide a 5-step action plan to get more customers.',
  keywords: 'free website audit, SEO audit, website analysis, Google Business audit, local SEO check, website performance test',
  alternates: {
    canonical: 'https://scalewithdestiny.com/audit',
  },
  openGraph: {
    title: 'Free Website Audit | Get Your Free SEO & Web Design Analysis',
    description: 'Get a comprehensive website audit and 5-step action plan. Free, no obligation.',
    url: 'https://scalewithdestiny.com/audit',
    type: 'website',
    images: [
      {
        url: '/og-audit.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Website Audit - Get Your SEO Analysis Today'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Audit | Scale With Destiny',
    description: 'Get a free website audit and SEO analysis. Limited time offer.',
    images: ['/og-audit.jpg'],
  },
}

export default function AuditPage() {
  return <AuditClient />
}