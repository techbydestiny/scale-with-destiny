'use client'
import { RxLightningBolt } from "react-icons/rx"
import { GiBullseye } from "react-icons/gi"
import { MdMoneyOff } from "react-icons/md"
import { FaGlobeAmericas, FaChartLine, FaBusinessTime, FaMobileAlt, FaSearch } from "react-icons/fa"

import { useState, useEffect } from 'react'
import BuildProjectModal from '../layout/BuildProjectModal'
import FoundingClientModal from '../layout/FoundingClientModal'

// Services Blueprints - What we CAN build for you
const serviceBlueprints = [
  {
    id: 1,
    title: 'Professional Website Design',
    category: 'Web Design • Local Business',
    description: 'Custom, responsive websites designed to convert visitors into customers for local businesses.',
    features: ['Mobile-First Design', 'SEO Optimized', 'Fast Loading', 'Easy Content Management'],
    timeline: '2-4 Weeks',
    budget: '$200-$1,000',
    icon: <FaMobileAlt className="text-indigo-600" size={24} />,
    tags: ['Website', 'Responsive', 'Local Business'],
    color: 'from-blue-50 to-indigo-100',
    idealFor: ['Restaurants', 'Retail Stores', 'Service Businesses']
  },
  {
    id: 2,
    title: 'SEO & Local Search Optimization',
    category: 'SEO • Google Business',
    description: 'Boost your local visibility with targeted SEO strategies and Google Business optimization.',
    features: ['Local SEO Audit', 'Google Business Setup', 'Keyword Research', 'On-Page SEO'],
    timeline: 'Ongoing',
    budget: '$300-$800/mo',
    icon: <FaSearch className="text-green-600" size={24} />,
    tags: ['SEO', 'Google Business', 'Local Search'],
    color: 'from-green-50 to-emerald-100',
    idealFor: ['All Local Businesses', 'Multi-location Businesses']
  },
  {
    id: 3,
    title: 'Business Setup & Management',
    category: 'Business Solutions • Setup',
    description: 'Complete business manager setup including tools, processes, and operational support.',
    features: ['Business Tool Setup', 'Process Documentation', 'Team Training', 'Ongoing Support'],
    timeline: '1-2 Weeks',
    budget: '$1,000-$5,000',
    icon: <FaBusinessTime className="text-purple-600" size={24} />,
    tags: ['Business Setup', 'Operations', 'Management'],
    color: 'from-purple-50 to-violet-100',
    idealFor: ['New Businesses', 'Expanding Businesses', 'Digital Transformation']
  },
  {
    id: 4,
    title: 'E-commerce & Online Store',
    category: 'E-commerce • Retail',
    description: 'Complete online store setup with payment processing, inventory management, and marketing.',
    features: ['Online Store Setup', 'Payment Integration', 'Inventory System', 'Marketing Tools'],
    timeline: '3-6 Weeks',
    budget: '$500-$3,000',
    icon: <FaChartLine className="text-amber-600" size={24} />,
    tags: ['E-commerce', 'Online Store', 'Retail'],
    color: 'from-amber-50 to-orange-100',
    idealFor: ['Retail Stores', 'Product Businesses', 'Boutiques']
  },
  {
    id: 5,
    title: 'Light Marketing Package',
    category: 'Marketing • Local',
    description: 'Targeted marketing campaigns to reach local customers and grow your business.',
    features: ['Social Media Setup', 'Email Marketing', 'Local Ads', 'Content Creation'],
    timeline: 'Ongoing',
    budget: '$750-$3,000/mo',
    icon: <RxLightningBolt className="text-rose-600" size={24} />,
    tags: ['Marketing', 'Social Media', 'Local Ads'],
    color: 'from-rose-50 to-pink-100',
    idealFor: ['Service Businesses', 'Restaurants', 'Local Services']
  },
  {
    id: 6,
    title: 'Global Business Expansion',
    category: 'International • Expansion',
    description: 'Help local businesses expand their reach with multi-language and international strategies.',
    features: ['Multi-language Support', 'International SEO', 'Global Payment Setup', 'Market Research'],
    timeline: '4-8 Weeks',
    budget: '$5,000-$10,000',
    icon: <FaGlobeAmericas className="text-cyan-600" size={24} />,
    tags: ['Global', 'International', 'Expansion'],
    color: 'from-teal-50 to-cyan-100',
    idealFor: ['Businesses Going Global', 'Multi-national Operations']
  }
]

interface ServicesShowcaseProps {
  onOpenQuoteModal: (serviceType: string, category: string) => void
}

const ServicesShowcase = ({ onOpenQuoteModal }: ServicesShowcaseProps) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [foundingModalOpen, setFoundingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{type: string, category: string} | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filters = [
    { id: 'all', label: 'All Services', count: 6 },
    { id: 'web', label: 'Web Design', count: 2 },
    { id: 'seo', label: 'SEO', count: 2 },
    { id: 'business', label: 'Business Setup', count: 3 },
    { id: 'global', label: 'Global', count: 1 }
  ]

  const filteredServices = serviceBlueprints.filter(service => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'web') return service.category.includes('Design') || service.tags.includes('Website')
    if (activeFilter === 'seo') return service.category.includes('SEO') || service.tags.includes('SEO')
    if (activeFilter === 'business') return service.category.includes('Business') || service.tags.includes('Business')
    if (activeFilter === 'global') return service.category.includes('Global') || service.tags.includes('Global')
    return service.tags.some(tag => tag.toLowerCase().includes(activeFilter))
  })

  const handleServiceClick = (serviceType: string, category: string) => {
    setSelectedService({ type: serviceType, category })
    onOpenQuoteModal(serviceType, category)
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Updated Header - Business Services Focus */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100 text-sm font-medium text-indigo-600 mb-6 shadow-sm">
            <FaGlobeAmericas className="text-indigo-500 mr-2" size={16} />
            GLOBAL BUSINESS SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Services for <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Local Businesses</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-cyan-500 to-transparent rounded-full" />
            </span>{' '}
            Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional web design, SEO optimization, and business setup solutions tailored for local businesses 
            looking to establish their digital presence and grow globally.
          </p>
        </div>

        {/* Service Stats */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '48 Hours', label: 'Quick Response', description: 'Initial quote turnaround' },
              { value: '30+', label: 'Countries Served', description: 'Global reach' },
              { value: 'Flexible', label: 'Pricing Options', description: 'From $500 projects' },
              { value: '24/7', label: 'Global Support', description: 'Always available' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow hover:border-indigo-200"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-white/20'
                  : 'bg-gray-100 group-hover:bg-gray-200'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Service Blueprints Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-indigo-200 transition-all duration-300">
                {/* Service Header */}
                <div className={`h-48 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl font-bold text-white/10 transition-transform group-hover:scale-110">
                      {service.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold shadow-sm">
                      {service.icon}
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Timeline & Budget */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                        <div className="text-xs font-medium">{service.timeline}</div>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full">
                        <div className="text-xs font-semibold">{service.budget}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">KEY FEATURES</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">IDEAL FOR</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 text-xs font-medium text-indigo-700 border border-indigo-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => handleServiceClick(service.title, service.category)}
                      className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Quote for This Service
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Updated for Business Services */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Every local business deserves a professional digital presence. Get started with a free 
                  website audit and personalized strategy session tailored to your local market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setFoundingModalOpen(true)}
                    className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 transition-all hover:scale-105"
                  >
                    Get Free Website Audit
                    <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                  <a
                    href="#process"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3 text-base font-medium text-white hover:border-white/50 transition-colors"
                  >
                    See Our Process
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            {/* Value Propositions */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <GiBullseye size={27} className="text-indigo-600" />, title: 'Strategy First', desc: 'We plan before we build' },
                { icon: <RxLightningBolt size={27} className="text-cyan-500" />, title: 'Fast Setup', desc: 'Quick launch timelines' },
                { icon: <FaGlobeAmericas size={27} className="text-green-500" />, title: 'Global Support', desc: '24/7 worldwide assistance' },
                { icon: <MdMoneyOff size={27} className="text-purple-500" />, title: 'Flexible Pricing', desc: 'Plans for every budget' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-white shadow-sm mb-3">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {foundingModalOpen && (
        <FoundingClientModal
          onClose={() => setFoundingModalOpen(false)}
        />
      )}
    </section>
  )
}

export default ServicesShowcase