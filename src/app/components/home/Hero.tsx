'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)
  const metricsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLoaded(true)
    
    // Auto-rotate metrics for better engagement
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { value: '60-90', label: 'Days to MVP', suffix: 'Days' },
    { value: '100%', label: 'On-Time Delivery', suffix: 'On-Time' },
    { value: '24/7', label: 'Partner Support', suffix: 'Support' },
    { value: '30', label: 'Day Strategy Phase', suffix: 'Days' },
  ]

  const features = [
    'No equity required',
    'Flat-rate pricing',
    'Dedicated product team',
    'Go-to-market strategy included'
  ]

  // Typewriter effect for dynamic text
  const taglines = [
    'We design, develop, and prep your SaaS MVP for market.',
    'From idea to launch in 90 days or less.',
    'Your dedicated partner for product-market fit.',
    'Strategy, design, development, and launch—handled.'
  ]
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 4000)
    return () => clearInterval(taglineInterval)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Enhanced Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] animate-[pulse_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-100 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-gray-100 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      {/* Grid overlay for structure */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
      
      <div className="container relative mx-auto px-4 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow with animation */}
          <div className={`inline-flex items-center overflow-hidden rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center px-4 py-2">
              <span className="text-sm font-medium text-gray-600 tracking-wide animate-slide">
                DESIGN • DEVELOP • LAUNCH • SCALE
              </span>
            </div>
            <div className="px-4 py-2 bg-black text-white text-sm font-medium">
              $0 DOWN
            </div>
          </div>
          
          {/* Main Headline with gradient accent */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-gray-600 block">From Vision</span>
            <span className="text-black block relative">
              to Viable.
              <span className="absolute -bottom-2 left-0 w-48 h-1 bg-gradient-to-r from-black to-gray-400 rounded-full" />
            </span>
            <span className="text-gray-600 block">Fast.</span>
          </h1>
          
          {/* Animated Subheadline */}
          <div className="h-24 md:h-20 mb-10 max-w-3xl">
            <p className={`text-xl md:text-2xl text-gray-600 transition-all duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              {taglines[currentTagline]}
            </p>
          </div>
          
          {/* Feature Badges */}
          <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {features.map((feature, index) => (
              <div
                key={feature}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="mr-2">✓</span>
                {feature}
              </div>
            ))}
          </div>
          
          {/* CTA Buttons with enhanced hover effects */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link
              href="/start"
              className="group relative inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-medium text-white overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Start Your MVP Journey
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <div className="relative">
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 text-base font-medium text-gray-700 hover:border-gray-400 hover:text-black transition-all duration-300"
              >
                See Our Process
              </Link>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                Free strategy call included
              </span>
            </div>
          </div>
          
          {/* Animated Metrics Carousel */}
          <div ref={metricsRef} className={`pt-12 border-t border-gray-200 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`text-center transition-all duration-500 ${
                    currentMetric === index
                      ? 'scale-105 opacity-100'
                      : 'scale-95 opacity-70'
                  }`}
                  onClick={() => setCurrentMetric(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setCurrentMetric(index)}
                  aria-label={`View metric: ${metric.label}`}
                >
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                      {metric.value}
                      <span className="text-lg text-gray-500 ml-1">{metric.suffix}</span>
                    </div>
                    {currentMetric === index && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-black rounded-full" />
                    )}
                  </div>
                  <div className={`text-sm font-medium transition-colors ${
                    currentMetric === index ? 'text-black' : 'text-gray-600'
                  }`}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Metric Indicator Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {metrics.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMetric(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentMetric === index
                      ? 'bg-black w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to metric ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 font-medium tracking-wider">
              SCROLL TO EXPLORE
            </span>
            <div className="animate-bounce-slow">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-black transition-colors cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                onClick={() => {
                  document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll to process section"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .bg-grid-black\/\[0\.02\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  )
}

export default Hero