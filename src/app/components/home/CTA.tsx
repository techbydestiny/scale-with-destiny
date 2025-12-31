'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: '90%', label: 'MVPs launched on time', description: 'We deliver when promised' },
    { value: '60-90', label: 'Days to launch', description: 'From idea to market-ready' },
    { value: '100%', label: 'Founder satisfaction', description: 'Every client stays partnered' },
    { value: '$0', label: 'Down payment', description: 'Start with just a conversation' },
  ]

  const benefits = [
    'No obligation 30-minute strategy session',
    'Custom roadmap for your product',
    'Clear pricing with no hidden fees',
    'Meet your dedicated product team',
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
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium tracking-wider text-white">NO OBLIGATION • FREE STRATEGY SESSION</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl text-gray-500 lg:text-7xl font-bold mb-8">
                Your{' '}
                <span className="relative inline-block">
                  <span className="text-white">destiny</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-400 to-transparent rounded-full" />
                </span>{' '}
                starts here
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Book a free 30-minute strategy session. We'll map your product's path to market, 
                identify key opportunities, and show you exactly how we can help.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Left Column - Benefits */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">What you'll get:</h3>
                <ul className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200 group-hover:text-white transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Quick Email Capture */}
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold mb-4">Prefer email first?</h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hello@scalewithdestiny.com"
                        className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                        required
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
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
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-gray-800 mb-6">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-white">Most Popular</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-100">Free Strategy Session</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    <span className="text-5xl font-bold text-gray-600">$0</span>
                    <span className="text-gray-400">/session</span>
                  </div>
                  <p className="text-gray-300 mb-8">
                    Perfect for founders ready to take the next step
                  </p>
                </div>

                {/* Calendar CTA */}
                <div className="space-y-6">
                  <Link
                    href="https://cal.com/scale-with-destiny-ic2pbw/strategy"
                    target="_blank"
                    className="block w-full py-4 px-6 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-center rounded-xl hover:from-gray-100 hover:to-gray-300 transition-all hover:scale-[1.02] group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Book Now - 30 Minutes
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </span>
                  </Link>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-4">Or choose a different option:</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="#process"
                        className="flex-1 py-3 text-white px-6 border border-gray-700 rounded-xl text-center font-medium hover:border-gray-600 hover:bg-white/5 transition-colors"
                      >
                        See Process
                      </Link>
                      <Link
                        href="#work"
                        className="flex-1 py-3 px-6 text-white border border-gray-700 rounded-xl text-center font-medium hover:border-gray-600 hover:bg-white/5 transition-colors"
                      >
                        View Case Studies
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 pt-8 border-t border-gray-800">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span>Available this week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>No sales pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2 text-gray-300">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Bottom Trust Signals */}
            <div className="mt-20 pt-12 border-t border-white/10">
              <div className="text-center">
                <p className="text-gray-400 mb-8">Trusted by ambitious founders at:</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-300">
                  {[
                    'YC-backed Startups',
                    'Seed-Stage Companies',
                    'Series A Scale-ups',
                    'Enterprise Innovators'
                  ].map((company, index) => (
                    <div
                      key={company}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                      <span className="font-medium">{company}</span>
                    </div>
                  ))}
                </div>
                
                {/* Testimonial Preview */}
                <div className="mt-12 max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <p className="text-lg text-gray-200 mb-4">
                    "Scale with Destiny took our vague idea and turned it into a launch-ready MVP in 75 days. 
                    Their process is exactly what every founder needs."
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Alex Chen</div>
                      <div className="text-sm text-gray-400">Founder, RevenueOS (YC W23)</div>
                    </div>
                    <Link
                      href="/testimonials"
                      className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      Read more stories →
                    </Link>
                  </div>
                </div>
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