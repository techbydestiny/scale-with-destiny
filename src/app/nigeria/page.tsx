import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaMobileAlt, 
  FaChartLine, 
  FaWhatsapp, 
  FaEnvelope, 
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaGoogle,
  FaStar,
  FaUsers,
  FaRegBuilding
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Web Design & SEO Services in Nigeria | Lagos, Abuja, Port Harcourt | Scale With Destiny',
  description: 'Professional web design, SEO optimization, and business setup for Nigerian businesses in Lagos, Abuja, Port Harcourt, Ibadan, Kano. Get a free website audit. 50+ businesses served. 24/7 local support.',
  keywords: 'web design Nigeria, SEO services Nigeria, Lagos web designer, Abuja SEO expert, Port Harcourt digital agency, Nigerian business website, local SEO Nigeria, Google Business Nigeria, website design Lagos, SEO company Abuja',
  alternates: {
    canonical: 'https://scalewithdestiny.com/nigeria',
  },
  openGraph: {
    title: 'Web Design & SEO Services in Nigeria | Scale With Destiny',
    description: 'Grow your Nigerian business with professional web design and SEO services. Trusted by 50+ Nigerian businesses. Free audit available.',
    locale: 'en_NG',
    url: 'https://scalewithdestiny.com/nigeria',
    type: 'website',
    siteName: 'Scale With Destiny',
    images: [
      {
        url: '/og-nigeria.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design & SEO Services for Nigerian Businesses'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Services in Nigeria',
    description: 'Professional digital solutions for Nigerian businesses. Free website audit available.',
    images: ['/og-nigeria.jpg'],
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
    google: 'fndAxw2kbzfJQWLEGWmY6YsAF8H-GLI2IFBxayNSWyI',
  },
  category: 'Business Services',
}

// LocalBusiness Schema for Nigeria
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Scale With Destiny - Nigeria',
  description: 'Professional web design, SEO optimization, and business setup services for Nigerian businesses.',
  url: 'https://scalewithdestiny.com/nigeria',
  telephone: '+2348062804129',
  email: 'hello@mail.scalewithdestiny.com',
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
    contains: [
      { '@type': 'City', name: 'Lagos' },
      { '@type': 'City', name: 'Abuja' },
      { '@type': 'City', name: 'Port Harcourt' },
      { '@type': 'City', name: 'Ibadan' },
      { '@type': 'City', name: 'Kano' }
    ]
  },
  priceRange: '₦150,000 - ₦500,000',
  currenciesAccepted: 'NGN',
  paymentAccepted: ['Bank Transfer', 'Card Payment', 'Installment'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Nigeria Business Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design Nigeria',
          description: 'Custom, responsive websites with local payment integration'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Services Nigeria',
          description: 'Local SEO and Google ranking optimization'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Setup',
          description: 'Complete business management solutions'
        }
      }
    ]
  }
}

// FAQ Schema for rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside Lagos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We work with businesses across Nigeria - Lagos, Abuja, Port Harcourt, Ibadan, Kano, and everywhere in between.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Nigeria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical website projects take 2-4 weeks depending on complexity. We offer expedited services for urgent projects.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you accept payment in Naira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we accept payment in Naira (NGN) with flexible installment options for Nigerian businesses.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will my website show up on Google Nigeria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our SEO services are specifically designed to rank your business on Google Nigeria searches.'
      }
    }
  ]
}

export default function NigeriaPage() {
  const cities = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano', 'Benin City', 'Enugu', 'Abeokuta']
  
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section - Dark Blue Background */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-blue-200 font-mono text-sm tracking-wider">🇳🇬 NIGERIA</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Web Design & SEO Services{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                in Nigeria
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
             Professional web designers for web design and developement, SEO optimization, and business setup services tailored for Nigerian businesses 
              in <strong className="text-white">Lagos, Abuja, Port Harcourt</strong>, and across the nation. 
              Get found on Google and start getting more customers today.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['✓ 50+ Nigerian Businesses Served', '✓ 24/7 Local Support', '✓ Payment in Naira'].map((badge, i) => (
                <span key={i} className="text-sm text-blue-100 flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-blue-300" />
                  {badge}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/audit">
                <button className="group relative inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                  Get Free Nigerian Business Audit →
                  <FaRocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="#services">
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave separator to white */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Cities Served Section - White Background */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">WE SERVE BUSINESSES ACROSS NIGERIA</p>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">
                  <FaMapMarkerAlt className="w-3 h-3 text-blue-600" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Nigerian Businesses Served', icon: <FaRegBuilding className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
              { value: '98%', label: 'Client Satisfaction', icon: <FaStar className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
              { value: '48h', label: 'Quote Turnaround', icon: <FaClock className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
              { value: '24/7', label: 'Local Support', icon: <FaUsers className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} bg-opacity-10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - White Background */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 text-sm font-mono uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Complete Digital Solutions for Nigerian Businesses
            </h2>
            <p className="text-gray-600">
              Tailored services to help your business grow online and attract more local customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMobileAlt className="w-8 h-8" />,
                title: 'Web Design Nigeria',
                desc: 'Custom, responsive websites optimized for Nigerian audiences. Mobile-first design with local payment integration (Paystack, Flutterwave).',
                price: 'From ₦150,000',
                features: ['Mobile-Optimized', 'Fast Loading', 'SEO Ready', 'Content Management', 'Local Payment Gateway', 'SSL Security'],
                popular: true
              },
              {
                icon: <FaChartLine className="w-8 h-8" />,
                title: 'SEO Services Nigeria',
                desc: 'Rank #1 on Google Nigeria searches. Local SEO, keyword research, and Google Business Profile optimization for Nigerian businesses.',
                price: 'From ₦200,000/mo',
                features: ['Local SEO', 'Keyword Research', 'Google Maps', 'Monthly Reports', 'Competitor Analysis', 'Backlink Building'],
                popular: false
              },
              {
                icon: <FaCheckCircle className="w-8 h-8" />,
                title: 'Business Setup',
                desc: 'Complete business manager setup, process documentation, and operational support for Nigerian entrepreneurs.',
                price: 'From ₦250,000',
                features: ['Business Tools', 'Process Setup', 'Team Training', 'Ongoing Support', 'Documentation', 'Growth Strategy'],
                popular: false
              },
            ].map((service, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                service.popular 
                  ? 'border-blue-500 shadow-lg shadow-blue-500/10' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <div className="text-blue-600 font-bold text-2xl mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaCheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/audit">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
                    Get Quote →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nigeria Section - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 text-sm font-mono uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Why Nigerian Businesses Trust Scale With Destiny
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Local Market Expertise', desc: 'We understand the Nigerian market, customer behavior, and local competition. Our strategies are tailored specifically for Nigerian audiences.', icon: <FaUsers className="w-5 h-5" /> },
                  { title: 'Mobile-First Approach', desc: 'Over 80% of Nigerian users browse on mobile. We optimize every website for the best mobile experience, ensuring you don\'t lose customers.', icon: <FaMobileAlt className="w-5 h-5" /> },
                  { title: 'Affordable Pricing in Naira', desc: 'Competitive rates in NGN with flexible installment options for Nigerian businesses. No hidden fees, transparent pricing.', icon: <FaCheckCircle className="w-5 h-5" /> },
                  { title: 'Local Support Team', desc: 'Get support during Nigerian business hours, no time zone issues. We\'re here when you need us, Monday through Friday.', icon: <FaClock className="w-5 h-5" /> },
                  { title: 'Google Business Experts', desc: 'We specialize in Google Business Profile optimization for Nigerian businesses, helping you show up on Google Maps.', icon: <FaGoogle className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <div className="text-blue-600">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Grow Your Nigerian Business?</h3>
                <p className="text-gray-600">
                  Get a free website audit and personalized strategy session. We'll show you exactly how to get more customers online.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700 text-sm">Free Website Audit</span>
                  <FaCheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700 text-sm">SEO Strategy Session</span>
                  <FaCheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700 text-sm">Custom Quote in 48 Hours</span>
                  <FaCheckCircle className="w-4 h-4 text-green-500" />
                </div>
              </div>
              
              <Link href="/audit">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25">
                  Claim Free Audit →
                </button>
              </Link>
              
              <p className="text-center text-gray-500 text-xs mt-4">
                No obligation. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Study Teaser - White Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 text-sm font-mono uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Nigerian Businesses We've Helped
            </h2>
            <p className="text-gray-600">
              Real results from real Nigerian businesses who trusted us with their digital presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { industry: 'Restaurant', location: 'Lagos', result: '300% increase in online orders', metric: '+300%' },
              { industry: 'Real Estate', location: 'Abuja', result: '#1 on Google for 15+ keywords', metric: '#1 Ranking' },
              { industry: 'E-commerce', location: 'Port Harcourt', result: '200% traffic growth in 3 months', metric: '+200%' },
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-600 font-bold text-2xl">{caseStudy.metric}</span>
                  <span className="text-gray-500 text-sm">{caseStudy.location}</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{caseStudy.industry}</h3>
                <p className="text-gray-600 text-sm">{caseStudy.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-mono uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-2">
              Everything you need to know about our services in Nigeria
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Do you work with businesses outside Lagos?', a: 'Yes! We work with businesses across Nigeria - Lagos, Abuja, Port Harcourt, Ibadan, Kano, Benin City, Enugu, and everywhere in between. Our team serves clients nationwide.' },
              { q: 'How long does it take to build a website?', a: 'Typical website projects take 2-4 weeks depending on complexity. We offer expedited services for urgent projects and provide regular updates throughout the process.' },
              { q: 'Do you offer payment in Naira?', a: 'Yes, we accept payment in Naira (NGN) with flexible installment options for Nigerian businesses. We also offer discounts for upfront payments.' },
              { q: 'Will my website show up on Google Nigeria?', a: 'Absolutely. Our SEO services are specifically designed to rank your business on Google Nigeria searches. We target local keywords and optimize for Nigerian search patterns.' },
              { q: 'Do you provide ongoing support after launch?', a: 'Yes! All our websites come with 30 days of free support. We also offer affordable monthly maintenance packages for ongoing updates and support.' },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all">
                <h3 className="text-gray-900 font-semibold mb-2 flex items-start gap-2">
                  <span className="text-blue-600">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-600 pl-6">
                  <span className="text-blue-600">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/faq">
              <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                View all FAQs →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Gradient */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Nigerian Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 50+ Nigerian businesses that have already scaled their digital presence with us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/audit">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Get Free Audit →
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Contact Our Nigerian Team
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <FaWhatsapp className="text-white/80 w-5 h-5" />
            <span className="text-white/80 text-sm">WhatsApp: +234 806 280 4129</span>
            <FaEnvelope className="text-white/80 w-5 h-5 ml-4" />
            <span className="text-white/80 text-sm">hello@mail.scalewithdestiny.com</span>
          </div>
        </div>
      </section>
    </>
  )
}