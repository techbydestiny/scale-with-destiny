'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Process = () => {
  const [activePhase, setActivePhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate phases for demo/engagement
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const phases = [
    {
      number: '01',
      title: 'Design & Define',
      description: 'We transform your idea into a clickable blueprint and strategic roadmap.',
      details: [
        'Product Strategy Workshop',
        'UX/UI Design & Interactive Prototyping',
        'User Journey Mapping',
        'Feature Prioritization Matrix',
        'Technical Architecture Planning'
      ],
      icon: '🎯',
      timeline: '2-3 weeks',
      deliverables: ['Product Spec', 'Interactive Prototype', 'Technical Roadmap']
    },
    {
      number: '02',
      title: 'Build & Launch',
      description: 'We build your robust, scalable MVP with precision and launch it to the world.',
      details: [
        'Full-Stack Development (Next.js, Node, etc.)',
        'Agile 2-Week Sprints with Demos',
        'Automated Testing & QA',
        'Performance Optimization',
        'Deployment & DevOps Setup'
      ],
      icon: '⚡',
      timeline: '6-8 weeks',
      deliverables: ['Production-Ready MVP', 'Admin Dashboard', 'Analytics Setup']
    },
    {
      number: '03',
      title: 'Market & Scale',
      description: 'We equip you with the strategy and tools to find your first 1000 users.',
      details: [
        'Go-to-Market Strategy Development',
        'Core Messaging & Positioning',
        'Launch Playbook Creation',
        'Growth Metrics & Analytics',
        'User Acquisition Framework'
      ],
      icon: '📈',
      timeline: '2-3 weeks',
      deliverables: ['GTM Strategy', 'Launch Plan', 'Growth Playbook']
    }
  ]

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            THE DESTINY PATH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            From concept to{' '}
            <span className="relative">
              <span className="text-black">customers</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-400 to-transparent rounded-full" />
            </span>{' '}
            in 90 days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 3-phase process that eliminates guesswork and accelerates your path to product-market fit.
            No surprises, just predictable progress.
          </p>
        </div>

        {/* Interactive Phase Selector (Mobile & Tablet) */}
        <div className="md:hidden mb-8">
          <div className="flex rounded-xl border border-gray-200 bg-white p-1">
            {phases.map((phase, index) => (
              <button
                key={phase.number}
                onClick={() => setActivePhase(index)}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                  activePhase === index
                    ? 'bg-black text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {phase.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Process Visualization */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Desktop Process Timeline */}
          <div className="hidden md:flex items-center justify-between mb-12">
            {phases.map((phase, index) => (
              <div key={phase.number} className="relative flex-1">
                {/* Timeline Connector */}
                {index < phases.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-200">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full" />
                  </div>
                )}
                
                {/* Phase Indicator */}
                <button
                  onClick={() => setActivePhase(index)}
                  className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
                    activePhase === index ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3 transition-all ${
                    activePhase === index
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-600 border-2 border-gray-200'
                  }`}>
                    {phase.icon}
                  </div>
                  <span className={`text-sm font-semibold ${
                    activePhase === index ? 'text-black' : 'text-gray-500'
                  }`}>
                    {phase.number}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className={`bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Phase Header */}
            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{phases[activePhase].icon}</span>
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Phase {phases[activePhase].number}
                      </span>
                      <h3 className="text-3xl font-bold text-black">
                        {phases[activePhase].title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 max-w-3xl">
                    {phases[activePhase].description}
                  </p>
                </div>
                <div className="bg-black text-white px-6 py-3 rounded-xl">
                  <div className="text-sm font-medium text-gray-300">TIMELINE</div>
                  <div className="text-2xl font-bold">{phases[activePhase].timeline}</div>
                </div>
              </div>
            </div>

            {/* Phase Content */}
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                {/* What's Included */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-6 pb-3 border-b border-gray-100">
                    What's Included
                  </h4>
                  <ul className="space-y-4">
                    {phases[activePhase].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 group-hover:text-black transition-colors">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-6 pb-3 border-b border-gray-100">
                    Key Deliverables
                  </h4>
                  <div className="space-y-4">
                    {phases[activePhase].deliverables.map((deliverable, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800">{deliverable}</span>
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
                            Deliverable
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline Visualization */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 mb-4">PROGRESS TRACKING</h4>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(activePhase + 1) * 33.33}%` 
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Start</span>
                      <span>Phase {(activePhase + 1)} of 3</span>
                      <span>Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setActivePhase(prev => Math.max(0, prev - 1))}
              disabled={activePhase === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activePhase === 0
                  ? 'opacity-50 cursor-not-allowed text-gray-400'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Phase
            </button>
            
            <div className="flex items-center gap-2">
              {phases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activePhase === idx
                      ? 'bg-black w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to phase ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActivePhase(prev => Math.min(phases.length - 1, prev + 1))}
              disabled={activePhase === phases.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activePhase === phases.length - 1
                  ? 'opacity-50 cursor-not-allowed text-gray-400'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Next Phase
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative bg-gradient-to-br from-black to-gray-900 rounded-3xl p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to walk the path?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a free strategy session where we'll map out your product's first 90 days and identify your biggest opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/start"
                  className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-black hover:bg-gray-100 transition-all hover:scale-105"
                >
                  Begin Your Journey
                  <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-medium text-white hover:border-white/50 transition-colors"
                >
                  See Case Studies
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-400 mb-4">TRUSTED BY FOUNDERS AT</p>
                <div className="flex flex-wrap justify-center gap-8 text-gray-300">
                  <span className="text-sm font-medium">YC-backed startups</span>
                  <span className="text-sm font-medium">Seed-stage companies</span>
                  <span className="text-sm font-medium">Enterprise innovators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-grid-white\/\[0\.05\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Process