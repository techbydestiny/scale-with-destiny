'use client'

import { useState } from 'react'
import { FaGlobe, FaSearch, FaChartLine, FaUsers, FaShieldAlt, FaHeadset, FaMapMarkerAlt, FaLanguage, FaMoneyBillWave, FaClock } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

const regions = [
  {
    id: 'north-america',
    name: 'North America',
    description: 'Serving businesses across the United States and Canada with localized digital solutions.',
    countries: ['United States', 'Canada'],
    services: ['Local SEO', 'Google Business Setup', 'E-commerce Solutions'],
    icon: '🌎',
    color: 'from-blue-50 to-indigo-100',
    stats: { businesses: '500+', growth: '35%', response: '< 24h' }
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'Helping European businesses establish their digital presence with multi-language support.',
    countries: ['United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands'],
    services: ['Multi-language Websites', 'GDPR Compliance', 'Local Payment Integration'],
    icon: '🏛️',
    color: 'from-purple-50 to-violet-100',
    stats: { businesses: '300+', growth: '28%', response: '< 24h' }
  },
  {
    id: 'asia-pacific',
    name: 'Asia Pacific',
    description: 'Digital solutions tailored for the diverse markets of Asia and the Pacific region.',
    countries: ['Australia', 'Singapore', 'Japan', 'India', 'New Zealand'],
    services: ['Mobile-First Design', 'Local Search Optimization', 'Social Media Integration'],
    icon: '🗻',
    color: 'from-emerald-50 to-teal-100',
    stats: { businesses: '400+', growth: '42%', response: '< 24h' }
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    description: 'Supporting business growth in rapidly developing Middle Eastern markets.',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'],
    services: ['Arabic Website Design', 'Local Payment Gateways', 'Regional SEO'],
    icon: '🕌',
    color: 'from-amber-50 to-orange-100',
    stats: { businesses: '150+', growth: '45%', response: '< 24h' }
  },
  {
    id: 'africa',
    name: 'Africa',
    description: 'Empowering African businesses with affordable digital solutions for local markets.',
    countries: ['South Africa', 'Nigeria', 'Kenya', 'Ghana', 'Egypt'],
    services: ['Mobile-Optimized Solutions', 'Local Payment Methods', 'Affordable Packages'],
    icon: '🌍',
    color: 'from-green-50 to-lime-100',
    stats: { businesses: '200+', growth: '38%', response: '< 24h' }
  },
  {
    id: 'latin-america',
    name: 'Latin America',
    description: 'Helping businesses grow in Spanish and Portuguese speaking markets.',
    countries: ['Brazil', 'Mexico', 'Argentina', 'Colombia', 'Chile'],
    services: ['Spanish/Portuguese Sites', 'Local E-commerce Setup', 'Regional Marketing'],
    icon: '🌵',
    color: 'from-rose-50 to-pink-100',
    stats: { businesses: '180+', growth: '32%', response: '< 24h' }
  }
]

const servicesByRegion = {
  'North America': ['Local SEO', 'Google My Business', 'Social Media Marketing', 'Website Design'],
  'Europe': ['Multi-language SEO', 'GDPR Compliance', 'Local Payment Systems', 'Content Localization'],
  'Asia Pacific': ['Mobile Optimization', 'Local Search Engines', 'Social Commerce', 'App Integration'],
  'Middle East': ['Arabic Content', 'Local Payment Gateways', 'Social Media in Arabic', 'Eid Campaigns'],
  'Africa': ['Mobile-First Design', 'USSD Integration', 'Local Payment Methods', 'Community Marketing'],
  'Latin America': ['Spanish SEO', 'Mercado Libre Integration', 'Local Social Media', 'Festival Campaigns']
}

export default function GlobalReach() {
  const [activeRegion, setActiveRegion] = useState(regions[0])
  const [selectedService, setSelectedService] = useState('Local SEO')

  const globalStats = [
    { icon: <FaGlobe />, value: '30+', label: 'Countries Served', description: 'Across 6 continents' },
    { icon: <FaUsers />, value: '1,730+', label: 'Businesses Helped', description: 'Local to global' },
    { icon: <FaChartLine />, value: '98%', label: 'Client Satisfaction', description: 'Across all regions' },
    { icon: <FaClock />, value: '24/7', label: 'Global Support', description: 'All time zones covered' }
  ]

  const uniqueServices = [
    { icon: <FaLanguage />, title: 'Multi-language Support', description: 'Websites in local languages with cultural adaptation' },
    { icon: <FaMoneyBillWave />, title: 'Local Payment Integration', description: 'Region-specific payment gateways and methods' },
    { icon: <FaSearch />, title: 'Regional SEO', description: 'Optimized for local search engines and directories' },
    { icon: <FaShieldAlt />, title: 'Compliance Ready', description: 'GDPR, CCPA, and local regulations covered' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-cyan-500/5" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100 mb-6">
              <FaGlobe className="text-indigo-600" />
              <span className="text-sm font-medium text-indigo-600">GLOBAL BUSINESS SOLUTIONS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Serving Local Businesses{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We provide professional web design, SEO, and business setup solutions tailored to local markets across the globe.
              Helping businesses establish their digital presence and grow internationally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#regions" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
                Explore Regions
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-indigo-400 hover:text-gray-900 transition-colors">
                Get Regional Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 text-indigo-600 text-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section id="regions" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Coverage</h2>
            <p className="text-gray-600">Select a region to see how we help businesses in your area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region)}
                className={`text-left p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  activeRegion.id === region.id
                    ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-white'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl mb-2">{region.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${activeRegion.id === region.id ? 'bg-indigo-600' : 'bg-gray-300'}`} />
                </div>
                <p className="text-gray-600 text-sm mb-4">{region.description}</p>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-1">COUNTRIES</div>
                    <div className="flex flex-wrap gap-1">
                      {region.countries.slice(0, 3).map((country) => (
                        <span key={country} className="px-2 py-1 bg-gray-100 text-xs rounded">
                          {country}
                        </span>
                      ))}
                      {region.countries.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-xs rounded">
                          +{region.countries.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-1">TOP SERVICES</div>
                    <div className="flex flex-wrap gap-1">
                      {region.services.slice(0, 2).map((service) => (
                        <span key={service} className="px-2 py-1 bg-gradient-to-r from-indigo-50 to-cyan-50 text-indigo-700 text-xs rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Region Details */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
              <div className={`h-4 bg-gradient-to-r ${activeRegion.color}`} />
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Region Info */}
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{activeRegion.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{activeRegion.name}</h3>
                        <p className="text-gray-600">{activeRegion.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {Object.entries(activeRegion.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 rounded-xl bg-gray-50">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                          <div className="text-sm font-medium text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Services for this region */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-gray-900">Popular Services in {activeRegion.name}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {servicesByRegion[activeRegion.name as keyof typeof servicesByRegion].map((service) => (
                          <button
                            key={service}
                            onClick={() => setSelectedService(service)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              selectedService === service
                                ? 'border-indigo-500 bg-indigo-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="text-sm font-medium text-gray-900">{service}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Get Quote Sidebar */}
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-2xl p-6 text-white">
                      <h4 className="text-xl font-bold mb-4">Get Quote for {activeRegion.name}</h4>
                      <p className="text-gray-300 mb-6 text-sm">
                        Tell us about your business in {activeRegion.name} and we'll provide a customized solution.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <MdEmail className="text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Email Us</div>
                            <div className="text-gray-300 text-sm">hello@scalewithdestiny.com</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <MdPhone className="text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Call Us</div>
                            <div className="text-gray-300 text-sm">+1 (555) 123-4567</div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-white/10">
                          <a
                            href={`/contact?region=${activeRegion.name}`}
                            className="block w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-center font-medium rounded-xl hover:shadow-lg transition-all"
                          >
                            Get Regional Quote
                          </a>
                          <p className="text-xs text-gray-400 mt-2 text-center">
                            24-hour response time for {activeRegion.name} inquiries
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Global Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Expertise, Local Solutions</h2>
            <p className="text-gray-600">
              We understand that every market is unique. Here's how we adapt our services for global success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {uniqueServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 text-indigo-600 text-xl mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Success Stories</h2>
            <p className="text-gray-600">See how we've helped businesses grow in different regions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                region: 'Europe',
                business: 'Boutique Hotel Chain',
                result: '250% increase in direct bookings',
                quote: 'Their multi-language SEO strategy transformed our European market presence.',
                color: 'from-purple-50 to-violet-100'
              },
              {
                region: 'Asia Pacific',
                business: 'E-commerce Retailer',
                result: '180% growth in mobile sales',
                quote: 'The mobile-first approach perfectly captured our Asian customer base.',
                color: 'from-emerald-50 to-teal-100'
              },
              {
                region: 'Middle East',
                business: 'Restaurant Group',
                result: '300% more online orders',
                quote: 'Arabic website and local payment integration changed our business.',
                color: 'from-amber-50 to-orange-100'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className={`h-2 rounded-full bg-gradient-to-r ${story.color} mb-6`} />
                <div className="flex items-center gap-3 mb-4">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">{story.region}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{story.business}</h4>
                <div className="text-lg font-bold text-indigo-600 mb-4">{story.result}</div>
                <p className="text-gray-600 italic mb-6">"{story.quote}"</p>
                <a href="/portfolio" className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                  View case study →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business Worldwide?</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Get a free regional analysis and discover how we can help your business succeed in your local market and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Get Your Free Regional Analysis
                  </a>
                  <a
                    href="#regions"
                    className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:border-white/50 transition-colors"
                  >
                    Explore More Regions
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'How do you handle different time zones for global support?',
                  answer: 'We have team members strategically located in different time zones to provide 24/7 support. You\'ll always have someone available during your local business hours.'
                },
                {
                  question: 'Can you build websites in multiple languages?',
                  answer: 'Yes! We specialize in multi-language websites with proper cultural adaptation. We work with local translators and ensure your content resonates with each target market.'
                },
                {
                  question: 'How do you handle local payment methods?',
                  answer: 'We integrate region-specific payment gateways like Alipay for China, Mercado Pago for Latin America, and local bank transfers where preferred.'
                },
                {
                  question: 'What about local SEO for different countries?',
                  answer: 'We optimize for local search engines (Google, Baidu, Yandex) and directories specific to each region. We also handle Google My Business setup for local businesses worldwide.'
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 transition-colors">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}