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
  FaRocket,
  FaGoogle,
  FaStar,
  FaUsers,
  FaRegBuilding,
  FaLanguage
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Web Design & SEO Services in Canada | Toronto, Vancouver, Montreal | Scale With Destiny',
  description: 'Professional web design, SEO optimization, and business setup for Canadian businesses in Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton. Bilingual support available. Get a free website audit today.',
  keywords: 'web design Canada, SEO services Canada, Toronto web designer, Vancouver SEO expert, Montreal digital agency, Calgary web development, Ottawa SEO, Canadian business website, local SEO Canada, Google Business Canada, bilingual website Canada',
  alternates: {
    canonical: 'https://scalewithdestiny.com/canada',
  },
  openGraph: {
    title: 'Web Design & SEO Services in Canada | Scale With Destiny',
    description: 'Grow your Canadian business with professional web design and SEO services. Bilingual support available. Trusted by businesses across Canada.',
    locale: 'en_CA',
    url: 'https://scalewithdestiny.com/canada',
    type: 'website',
    siteName: 'Scale With Destiny',
    images: [
      {
        url: '/og-canada.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design & SEO Services for Canadian Businesses'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Services in Canada',
    description: 'Professional digital solutions for Canadian businesses. Bilingual support. Free website audit available.',
    images: ['/og-canada.jpg'],
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

// LocalBusiness Schema for Canada
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Scale With Destiny - Canada',
  description: 'Professional web design, SEO optimization, and business setup services for Canadian businesses. Bilingual support available.',
  url: 'https://scalewithdestiny.com/canada',
  email: 'hello@mail.scalewithdestiny.com',
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
    contains: [
      { '@type': 'City', name: 'Toronto' },
      { '@type': 'City', name: 'Vancouver' },
      { '@type': 'City', name: 'Montreal' },
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'City', name: 'Edmonton' },
      { '@type': 'City', name: 'Winnipeg' },
      { '@type': 'City', name: 'Quebec City' }
    ]
  },
  priceRange: '$1,800 - $8,000 CAD',
  currenciesAccepted: 'CAD',
  paymentAccepted: ['Bank Transfer', 'Card Payment', 'Stripe', 'PayPal', 'Interac'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Canadian Business Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design Canada',
          description: 'Custom, responsive websites with bilingual support and Canadian payment integration'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Services Canada',
          description: 'Local SEO and Google ranking optimization for Canadian searches'
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
      name: 'Do you offer bilingual services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer services in both English and French, including website translation and bilingual SEO optimization for Canadian businesses.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical website projects take 2-4 weeks depending on complexity. Bilingual websites may take slightly longer for translation work.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses across Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We work with businesses across all provinces and territories - from Vancouver to Toronto, Montreal to Calgary, and everywhere in between.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will my website show up on Google Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our SEO services are specifically designed to rank your business on Google Canada searches with local keyword targeting for Canadian audiences.'
      }
    }
  ]
}

export default function CanadaPage() {
  const cities = ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City']
  
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
              <span className="text-blue-200 font-mono text-sm tracking-wider">🇨🇦 CANADA</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Web Design & SEO Services{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                in Canada
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Professional web design, SEO optimization, and business setup services for Canadian businesses 
              in <strong className="text-white">Toronto, Vancouver, Montreal, Calgary, Ottawa</strong>, and across Canada.
              Bilingual support available in English and French.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['✓ Bilingual Support (English/French)', '✓ Interac Payment Available', '✓ 24/7 Canadian Support'].map((badge, i) => (
                <span key={i} className="text-sm text-blue-100 flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-blue-300" />
                  {badge}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/audit">
                <button className="group relative inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                  Get Free Canadian Business Audit →
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
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">WE SERVE BUSINESSES ACROSS CANADA</p>
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
              { value: '40+', label: 'Canadian Businesses Served', icon: <FaRegBuilding className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
              { value: '4.9', label: 'Client Rating', icon: <FaStar className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
              { value: '48h', label: 'Quote Turnaround', icon: <FaClock className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
              { value: '24/7', label: 'Canadian Support', icon: <FaUsers className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
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

      {/* Services Section - Light Gray Background */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 text-sm font-mono uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Complete Digital Solutions for Canadian Businesses
            </h2>
            <p className="text-gray-600">
              Tailored services to help your business grow online and attract more local customers across Canada
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMobileAlt className="w-8 h-8" />,
                title: 'Web Design Canada',
                desc: 'Custom, responsive websites for Canadian businesses. Mobile-first design with bilingual support (English/French) and Canadian payment integration (Interac, Stripe).',
                price: 'From $1,800 CAD',
                features: ['Mobile-Optimized', 'Fast Loading', 'SEO Ready', 'Bilingual Support', 'Interac Integration', 'SSL Security'],
                popular: true
              },
              {
                icon: <FaChartLine className="w-8 h-8" />,
                title: 'SEO Services Canada',
                desc: 'Rank #1 on Google Canada searches. Local SEO, keyword research, and Google Business Profile optimization for Canadian businesses.',
                price: 'From $850 CAD/mo',
                features: ['Local SEO', 'Keyword Research', 'Google Maps', 'Monthly Reports', 'Competitor Analysis', 'Bilingual SEO'],
                popular: false
              },
              {
                icon: <FaCheckCircle className="w-8 h-8" />,
                title: 'Business Setup',
                desc: 'Complete business manager setup, process documentation, and operational support for Canadian entrepreneurs.',
                price: 'From $3,500 CAD',
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

      {/* Why Canada Section - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 text-sm font-mono uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Why Canadian Businesses Trust Scale With Destiny
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Bilingual Support', desc: 'We offer services in both English and French, including website translation and bilingual SEO optimization for Canadian businesses.', icon: <FaLanguage className="w-5 h-5" /> },
                  { title: 'Canadian Market Expertise', desc: 'We understand the Canadian market, customer behavior, and local competition across all provinces and territories.', icon: <FaUsers className="w-5 h-5" /> },
                  { title: 'Interac Payment Integration', desc: 'Seamless integration with Interac, Canada\'s most popular payment method, plus Stripe and PayPal options.', icon: <FaCheckCircle className="w-5 h-5" /> },
                  { title: 'Canadian Business Hours Support', desc: 'Get support during Canadian business hours across Eastern, Central, Mountain, and Pacific time zones.', icon: <FaClock className="w-5 h-5" /> },
                  { title: 'Google Business Experts', desc: 'We specialize in Google Business Profile optimization for Canadian businesses, helping you show up on Google Maps.', icon: <FaGoogle className="w-5 h-5" /> },
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Grow Your Canadian Business?</h3>
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
                  Claim Free Canadian Audit →
                </button>
              </Link>
              
              <p className="text-center text-gray-500 text-xs mt-4">
                No obligation. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser - Light Gray Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 text-sm font-mono uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Canadian Businesses We've Helped
            </h2>
            <p className="text-gray-600">
              Real results from real Canadian businesses who trusted us with their digital presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { industry: 'Retail Chain', location: 'Toronto', result: '280% increase in online sales', metric: '+280%' },
              { industry: 'Tourism Company', location: 'Vancouver', result: '#1 on Google for 20+ keywords', metric: '#1 Ranking' },
              { industry: 'Professional Services', location: 'Montreal', result: 'Bilingual site increased leads by 150%', metric: '+150%' },
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
              Everything you need to know about our services in Canada
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Do you offer bilingual services?', a: 'Yes! We offer services in both English and French, including website translation, bilingual SEO, and content localization for Canadian businesses.' },
              { q: 'How long does it take to build a website?', a: 'Typical website projects take 2-4 weeks depending on complexity. Bilingual websites may take slightly longer for translation and cultural adaptation work.' },
              { q: 'Do you accept Interac payments?', a: 'Yes! We accept Interac e-Transfer, the most popular payment method in Canada, along with credit cards, Stripe, and PayPal.' },
              { q: 'Will my website show up on Google Canada?', a: 'Yes. Our SEO services are specifically designed to rank your business on Google Canada searches with local keyword targeting for Canadian audiences.' },
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
            Ready to Transform Your Canadian Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 40+ Canadian businesses that have already scaled their digital presence with us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/audit">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Get Free Canadian Audit →
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Contact Our Canadian Team
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <FaEnvelope className="text-white/80 w-5 h-5 ml-4" />
            <span className="text-white/80 text-sm">hello@mail.scalewithdestiny.com</span>
          </div>
        </div>
      </section>
    </>
  )
}