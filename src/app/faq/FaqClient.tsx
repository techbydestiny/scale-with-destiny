'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaSearch, 
  FaDollarSign, 
  FaClock, 
  FaGlobe, 
  FaChartLine, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaUsers,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set())

  const toggleQuestion = (index: number) => {
    const newOpen = new Set(openQuestions)
    if (newOpen.has(index)) {
      newOpen.delete(index)
    } else {
      newOpen.add(index)
    }
    setOpenQuestions(newOpen)
  }

  const faqs = [
    {
      category: 'Services & Pricing',
      icon: <FaDollarSign className="text-blue-600" />,
      description: 'Learn about our service packages, pricing models, and what\'s included in each solution.',
      questions: [
        {
          q: 'How much does a professional website cost?',
          a: 'Website costs range from $200 to $1,000+ depending on complexity. Basic business sites start at $2,000-5,000, e-commerce sites at $5,000-10,000, and custom enterprise solutions at $10,000+. We offer free quotes after understanding your specific business needs.',
          tags: ['pricing', 'website', 'budget']
        },
        {
          q: 'What\'s included in your SEO packages?',
          a: 'Our SEO packages include comprehensive website audit, keyword research, on-page optimization, local SEO setup, Google Business optimization, monthly performance reports, and ongoing optimization. Packages start at $500/month with 3-month minimum commitment.',
          tags: ['seo', 'packages', 'monthly']
        },
        {
          q: 'Do you offer package deals for multiple services?',
          a: 'Yes! We offer bundled packages combining web design, SEO, and business setup at discounted rates. Our "Complete Business Solution" package saves 15% compared to purchasing services separately.',
          tags: ['bundles', 'discount', 'packages']
        }
      ]
    },
    {
      category: 'Timeline & Process',
      icon: <FaClock className="text-cyan-600" />,
      description: 'Understand our project timelines, development process, and what to expect at each stage.',
      questions: [
        {
          q: 'How long does it take to build a website?',
          a: 'Typical timelines: Basic business websites (2-4 weeks), E-commerce sites (3-6 weeks), Custom web applications (4-8 weeks). We provide detailed timelines after our initial consultation based on your specific requirements.',
          tags: ['timeline', 'website', 'development']
        },
        {
          q: 'What\'s your process for local business setup?',
          a: 'Our 4-step process: 1) Business analysis & goal setting, 2) Tool & platform setup, 3) Team training & documentation, 4) Ongoing support & optimization. Most setups are complete within 1-2 weeks.',
          tags: ['process', 'setup', 'business']
        },
        {
          q: 'How quickly can you start SEO work?',
          a: 'We can begin SEO work within 1-2 weeks of project start. Initial audit and setup typically take 2 weeks, with visible results starting in 1-3 months depending on competition and website history.',
          tags: ['seo', 'timeline', 'start']
        }
      ]
    },
    {
      category: 'Global Services',
      icon: <FaGlobe className="text-green-600" />,
      description: 'Information about our international services, multi-language support, and global coverage.',
      questions: [
        {
          q: 'Do you work with businesses outside your country?',
          a: 'Yes! We serve businesses in 30+ countries including Nigeria, United Kingdom, USA, Canada, and Australia. We specialize in adapting solutions for local markets, including multi-language support, local payment integration, and regional SEO optimization.',
          tags: ['global', 'international', 'countries']
        },
        {
          q: 'How do you handle different time zones?',
          a: 'We have team members strategically located across time zones. We use asynchronous communication tools and schedule meetings during your business hours. We provide 24/7 email support with guaranteed 24-hour response time.',
          tags: ['timezone', 'support', 'global']
        },
        {
          q: 'Can you build websites in multiple languages?',
          a: 'Absolutely! We specialize in multi-language websites with proper cultural adaptation. We work with professional translators and ensure your content resonates with each target market.',
          tags: ['languages', 'multilingual', 'translation']
        }
      ]
    },
    {
      category: 'Technical & Support',
      icon: <FaShieldAlt className="text-purple-600" />,
      description: 'Technical details about our platforms, security, and ongoing support options.',
      questions: [
        {
          q: 'What platforms do you work with?',
          a: 'We work with modern platforms including WordPress, Shopify, Webflow, and custom solutions using Next.js/React. We choose the platform that best fits your business needs and budget.',
          tags: ['platforms', 'technology', 'tools']
        },
        {
          q: 'Do you provide ongoing support?',
          a: 'Yes! All projects include 30 days of free support. We offer monthly maintenance packages starting at $150/month for updates, security, backups, and minor changes.',
          tags: ['support', 'maintenance', 'updates']
        },
        {
          q: 'Who owns the website after completion?',
          a: 'You own 100% of your website, content, and code. We transfer all credentials and provide documentation. We only retain access if you choose our maintenance plan.',
          tags: ['ownership', 'rights', 'transfer']
        }
      ]
    },
    {
      category: 'Local Business Focus',
      icon: <FaUsers className="text-amber-600" />,
      description: 'Local SEO strategies, Google Business optimization, and community-focused marketing.',
      questions: [
        {
          q: 'How do you optimize for local search?',
          a: 'We implement local SEO strategies including Google Business setup, local citations, location-specific pages, local schema markup, and reviews management to boost your visibility in local search results.',
          tags: ['local', 'seo', 'google-business']
        },
        {
          q: 'Can you help with Google Business setup?',
          a: 'Yes! We handle complete Google Business setup including profile creation, verification, optimization, posts setup, and review management. This service is included in our SEO packages.',
          tags: ['google', 'business', 'setup']
        },
        {
          q: 'Do you create content for local businesses?',
          a: 'We offer content creation services including local-focused blog posts, service pages, and location-specific content. We research local keywords and create content that resonates with your community.',
          tags: ['content', 'local', 'marketing']
        }
      ]
    },
    {
      category: 'Getting Started',
      icon: <FaChartLine className="text-rose-600" />,
      description: 'How to begin working with us, what to prepare, and contract information.',
      questions: [
        {
          q: 'How do I get started?',
          a: 'Start with a free consultation call. We\'ll discuss your business, goals, and challenges, then provide a customized proposal. No commitment required for the initial consultation.',
          tags: ['start', 'consultation', 'process']
        },
        {
          q: 'What do I need to prepare?',
          a: 'Just bring your business goals and any existing materials (logos, content, etc.). We guide you through the entire process and handle most technical aspects for you.',
          tags: ['preparation', 'requirements', 'documents']
        },
        {
          q: 'Is there a minimum contract period?',
          a: 'For web design, no minimum. For SEO and maintenance services, we require a 3-month minimum to see meaningful results. Month-to-month options available after initial period.',
          tags: ['contract', 'minimum', 'terms']
        }
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Questions', count: faqs.reduce((acc, cat) => acc + cat.questions.length, 0), icon: <FaSearch className="text-gray-600" />, description: 'Browse all frequently asked questions' },
    ...faqs.map(cat => ({
      id: cat.category.toLowerCase().replace(/[^a-z]/g, '-'),
      label: cat.category,
      count: cat.questions.length,
      icon: cat.icon,
      description: cat.description
    }))
  ]

  const filteredFaqs = faqs
    .filter(cat => activeCategory === 'all' || cat.category.toLowerCase().replace(/[^a-z]/g, '-') === activeCategory)
    .flatMap((cat, catIndex) => cat.questions.map((q, qIndex) => ({ 
      ...q, 
      category: cat.category, 
      icon: cat.icon,
      globalIndex: catIndex * 100 + qIndex
    })))
    .filter(faq => 
      searchQuery === '' || 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-600 mb-6">
            <FaSearch size={14} />
            FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to know about our web design, SEO, and business setup services for local businesses worldwide.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions (e.g., 'pricing', 'timeline', 'SEO')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-sm'
                }`}
                aria-label={`Show ${cat.label}`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === cat.id
                    ? 'bg-white/20'
                    : 'bg-gray-100'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-blue-700">
                Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
                <button 
                  onClick={() => setSearchQuery('')}
                  className="ml-2 text-blue-500 hover:text-blue-700 underline font-medium"
                >
                  Clear search
                </button>
              </p>
            </div>
          )}

          {/* FAQ List - Accordion Style */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-expanded={openQuestions.has(index)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center flex-shrink-0">
                            {faq.icon}
                          </div>
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                          {faq.q}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openQuestions.has(index) ? (
                          <FaChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {openQuestions.has(index) && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {faq.tags.map((tag, tagIndex) => (
                            <button
                              key={tagIndex}
                              onClick={() => setSearchQuery(tag)}
                              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                            >
                              #{tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <FaSearch className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">No results found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We couldn't find any FAQs matching "{searchQuery}". Try different keywords or browse by category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                View All Questions
              </button>
            </div>
          )}

          {/* Still Have Questions */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Still have questions?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help with personalized advice for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/#services"
                  className="px-8 py-3 border-2 border-gray-300 bg-white text-gray-700 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '24h', label: 'Response Time', description: 'Guaranteed', href: '/contact' },
              { value: '30+', label: 'Countries Served', description: 'Worldwide', href: '/#global' },
              { value: '98%', label: 'Satisfaction Rate', description: 'Happy clients', href: '/results' },
              { value: 'Free', label: 'Consultation', description: 'No obligation', href: '/audit' }
            ].map((stat, index) => (
              <Link
                key={index}
                href={stat.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}