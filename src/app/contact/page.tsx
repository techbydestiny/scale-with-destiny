import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Scale With Destiny | Free Business Consultation & Website Audit',
  description: 'Get a free business consultation and website audit. Professional web design, SEO, and business setup services for local businesses worldwide. Contact our global team today.',
  keywords: 'contact web design agency, SEO consultation, business setup help, free website audit, global business services',
  alternates: {
    canonical: 'https://scalewithdestiny.com/contact',
  },
  openGraph: {
    title: 'Contact Scale With Destiny | Free Business Consultation',
    description: 'Get a free consultation and website audit for your business',
    url: 'https://scalewithdestiny.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactClient />
}