import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/home/Hero'
import Process from '@/components/home/Process'
import ServicesShowcase from '@/components/home/WorkShowcase'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Professional Web Design & SEO Services | Scale With Destiny',
  description: 'Expert web design, SEO optimization, and business setup services for local businesses in Nigeria, UK, USA, Canada, and Australia. Get a free website audit.',
  alternates: {
    canonical: 'https://scale-with-destiny.vercel.app',
  },
  openGraph: {
    title: 'Scale With Destiny | Web Design & SEO for Local Businesses',
    description: 'Get more customers with professional web design and SEO services.',
    url: 'https://scale-with-destiny.vercel.app',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Static SEO Content - Visible to Search Engines */}
      <section className="sr-only md:not-sr-only md:absolute md:opacity-0 md:pointer-events-none">
        <h1>Scale With Destiny | Professional Web Design & SEO Services for Local Businesses Worldwide</h1>
        <p>
          Scale With Destiny provides professional web design, SEO optimization, and business setup services 
          for local businesses in Nigeria, United Kingdom, USA, Canada, and Australia. 
          We help businesses establish their digital presence and get more customers from Google.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li>Web Design & Development - Custom websites that convert visitors into customers</li>
          <li>SEO Optimization - Rank higher on Google and get found by local customers</li>
          <li>Business Setup - Complete business manager setup and operational support</li>
          <li>Digital Marketing - Targeted campaigns to reach local customers</li>
          <li>E-Commerce Development - Online stores with payment processing</li>
        </ul>
        <h2>Countries We Serve</h2>
        <ul>
          <li><Link href="/nigeria">Web Design & SEO Services in Nigeria</Link></li>
          <li><Link href="/united-kingdom">Web Design & SEO Services in United Kingdom</Link></li>
          <li><Link href="/usa">Web Design & SEO Services in USA</Link></li>
          <li><Link href="/canada">Web Design & SEO Services in Canada</Link></li>
          <li><Link href="/australia">Web Design & SEO Services in Australia</Link></li>
        </ul>
      </section>

      {/* Client-side Interactive Components */}
      <Hero />
      <Process />
      <ServicesShowcase />
      <CTA />
    </>
  )
}