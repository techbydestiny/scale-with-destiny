'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaGlobeAmericas, FaChartLine, FaShieldAlt, FaHeadset } from "react-icons/fa"

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: '48', label: 'Hours to quote', description: 'Fast response time' },
    { value: '30+', label: 'Countries served', description: 'Global reach' },
    { value: '100%', label: 'Satisfied clients', description: 'Client satisfaction' },
    { value: 'Free', label: 'Website audit', description: 'No obligation' },
  ]

  const benefits = [
    'Free website & SEO audit',
    'Personalized strategy session',
    'Clear pricing with no hidden fees',
    'Meet your dedicated team',
    'Get immediate actionable insights'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically connect to your email service
      console.log('Email submitted:', email)
      setIsSubmitted(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-cyan-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm mb-8">
                <FaGlobeAmericas className="text-white" size={16} />
                <span className="text-sm font-medium tracking-wider text-white">GLOBAL BUSINESS SOLUTIONS • FREE AUDIT</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-gray-300">Scale Your Business</span>{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Worldwide</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white via-cyan-400 to-transparent rounded-full" />
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Get a free website audit and strategy session. We'll analyze your digital presence, 
                identify growth opportunities, and show you exactly how to expand your business locally and globally.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Left Column - Benefits */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 text-white">What you'll get:</h3>
                <ul className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 border border-cyan-500/40 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200 group-hover:text-white transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Quick Email Capture */}
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold mb-4 text-white">Prefer email first?</h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-colors"
                        required
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                      >
                        {isSubmitted ? 'Sent!' : 'Send'}
                      </button>
                    </div>
                    <p className="text-sm text-gray-400">
                      We'll send a custom proposal within 24 hours. No spam, ever.
                    </p>
                  </form>
                </div>
              </div>

              {/* Right Column - CTA Form */}
              <div className="bg-gradient-to-br from-gray-900 to-indigo-950 border border-indigo-800/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 mb-6">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-white">Most Popular</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-100">Free Website Audit</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    <span className="text-5xl font-bold text-white">$0</span>
                    <span className="text-gray-300">/audit</span>
                  </div>
                  <p className="text-gray-300 mb-8">
                    Perfect for businesses ready to grow their digital presence
                  </p>
                </div>

                {/* Calendar CTA */}
                <div className="space-y-6">
                  <Link
                    href="/contact"
                    className="block w-full py-4 px-6 bg-gradient-to-r from-white to-cyan-100 text-gray-900 font-bold text-center rounded-xl hover:from-gray-100 hover:to-cyan-200 transition-all hover:scale-[1.02] group shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Get Free Audit & Strategy Session
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </span>
                  </Link>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-4">Or choose a different option:</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="#services"
                        className="flex-1 py-3 text-white px-6 border border-gray-700 rounded-xl text-center font-medium hover:border-cyan-500/50 hover:bg-white/5 transition-colors"
                      >
                        View Services
                      </Link>
                      <Link
                        href="#process"
                        className="flex-1 py-3 px-6 text-white border border-gray-700 rounded-xl text-center font-medium hover:border-cyan-500/50 hover:bg-white/5 transition-colors"
                      >
                        See Our Process
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 pt-8 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 flex items-center justify-center">
                        <FaShieldAlt className="text-cyan-400" size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Secure & Confidential</div>
                        <div className="text-xs text-gray-400">Your data is protected</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 flex items-center justify-center">
                        <FaHeadset className="text-indigo-400" size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">24/7 Support</div>
                        <div className="text-xs text-gray-400">Global assistance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="mt-20 pt-12 border-t border-white/10">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Scale With Destiny?</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We combine local market expertise with global best practices to help your business thrive.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <FaGlobeAmericas className="text-cyan-400" size={24} />,
                    title: 'Global Expertise',
                    description: 'Local market knowledge combined with worldwide best practices'
                  },
                  {
                    icon: <FaChartLine className="text-indigo-400" size={24} />,
                    title: 'Growth Focused',
                    description: 'Strategies designed to scale your business locally and globally'
                  },
                  {
                    icon: <FaHeadset className="text-green-400" size={24} />,
                    title: 'Dedicated Support',
                    description: '24/7 assistance for businesses in all time zones'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-grid-white\/\[0\.02\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default CTA