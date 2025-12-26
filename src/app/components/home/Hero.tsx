'use client'

import { useEffect, useState } from 'react'

const Hero = ({ onStartMVP }: { onStartMVP: () => void }) => {
  const [loaded, setLoaded] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    setLoaded(true)
    
    // Auto-rotate metrics for better engagement
    const metricsInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    
    // Typewriter effect for dynamic text
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 4000)
    
    return () => {
      clearInterval(metricsInterval)
      clearInterval(taglineInterval)
    }
  }, [])

  const metrics = [
    { value: '60-90', label: 'Days to MVP', suffix: 'Days' },
    { value: '100%', label: 'On-Time Delivery', suffix: 'On-Time' },
    { value: '24/7', label: 'Partner Support', suffix: 'Support' },
    { value: '$0', label: 'Down Payment', suffix: 'To Start' },
  ]

  const features = [
    'No equity required',
    'Flat-rate pricing',
    'Dedicated product team',
    'Go-to-market strategy included'
  ]

  const taglines = [
    'We design, develop, and prep your SaaS MVP for market.',
    'From idea to launch in 90 days or less.',
    'Your dedicated partner for product-market fit.',
    'Strategy, design, development, and launch—handled.'
  ]

  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-100/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-black/[0.01] bg-[size:40px_40px]" />
      
      <div className="container relative mx-auto px-4 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className={`inline-flex items-center rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm mb-8 overflow-hidden transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <div className="flex items-center px-5 py-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-600 tracking-wider">
                  DESIGN • DEVELOP • LAUNCH • SCALE
                </span>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-black text-white text-sm font-medium">
              $0 DOWN
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <span className="text-gray-600 block">From Vision</span>
            <span className="text-black block relative">
              to Viable.
              <span className="absolute -bottom-2 left-0 w-48 h-1 bg-gradient-to-r from-black via-gray-600 to-transparent rounded-full" />
            </span>
            <span className="text-gray-600 block">Fast.</span>
          </h1>
          
          {/* Animated Subheadline */}
          <div className="h-20 md:h-16 mb-10 max-w-3xl">
            <div className="relative h-full">
              {taglines.map((tagline, index) => (
                <p
                  key={index}
                  className={`absolute top-0 left-0 text-xl md:text-2xl text-gray-600 transition-all duration-500 ${
                    currentTagline === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-4'
                  }`}
                >
                  {tagline}
                </p>
              ))}
            </div>
          </div>
          
          {/* Feature Badges */}
          <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            {features.map((feature, index) => (
              <div
                key={feature}
                className="inline-flex items-center px-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 hover:shadow-sm transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="mr-2 text-green-600">✓</span>
                {feature}
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <button
              onClick={onStartMVP}
              className="group relative inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-medium text-white overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center">
                Start Your MVP Journey
                <svg 
                  className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <div className="relative">
              <a
                href="#process"
                onClick={scrollToProcess}
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 text-base font-medium text-gray-700 hover:border-gray-400 hover:text-black transition-all duration-300 hover:shadow-sm"
              >
                See Our Process
              </a>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                Free strategy call included
              </span>
            </div>
          </div>
          
          {/* Metrics */}
          <div className={`pt-12 border-t border-gray-200 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="text-center cursor-pointer"
                  onClick={() => setCurrentMetric(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setCurrentMetric(index)}
                  aria-label={`View metric: ${metric.label}`}
                >
                  <div className="relative inline-block">
                    <div className={`text-3xl md:text-4xl font-bold text-black mb-2 transition-all duration-500 ${
                      currentMetric === index ? 'scale-105' : 'scale-100'
                    }`}>
                      {metric.value}
                      <span className="text-lg text-gray-500 ml-1">{metric.suffix}</span>
                    </div>
                    {currentMetric === index && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-black to-gray-600 rounded-full" />
                    )}
                  </div>
                  <div className={`text-sm font-medium transition-colors duration-300 ${
                    currentMetric === index ? 'text-black' : 'text-gray-600'
                  }`}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Metric Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {metrics.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMetric(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                    currentMetric === index
                      ? 'w-8 bg-black'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to metric ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 group focus:outline-none"
            aria-label="Scroll to process section"
          >
            <span className="text-xs text-gray-500 font-medium tracking-wider group-hover:text-gray-700 transition-colors">
              SCROLL TO EXPLORE
            </span>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Inline styles moved to globals.css or kept minimal */}
      <style jsx>{`
        .bg-grid-black\/\[0\.01\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.01)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
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

export default Hero