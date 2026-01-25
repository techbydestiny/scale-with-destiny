'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SiCssdesignawards } from "react-icons/si"
import { MdBuildCircle } from "react-icons/md"
import { FaArrowTrendUp } from "react-icons/fa6"
import { FaGlobeAmericas } from "react-icons/fa"

const Process = () => {
  const [activePhase, setActivePhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const phases = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business needs, target audience, and competitive landscape to create a winning digital strategy.',
      details: [
        'Free Website & SEO Audit',
        'Business Goals Alignment',
        'Target Audience Analysis',
        'Competitive Research'
      ],
      icon: <SiCssdesignawards size={26} className="text-indigo-600" />,
      timeline: '3-5 Days',
      globalNote: 'Local market analysis for your specific region'
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'We create beautiful, functional websites optimized for your local market with global best practices.',
      details: [
        'Responsive Web Design',
        'SEO-Optimized Development',
        'Google Business Setup',
        'Local SEO Implementation'
      ],
      icon: <MdBuildCircle size={26} className="text-cyan-500" />,
      timeline: '2-4 Weeks',
      globalNote: 'Multi-language & local payment integration support'
    },
    {
      number: '03',
      title: 'Launch & Growth',
      description: 'We launch your digital presence and implement strategies to attract local customers and grow your business.',
      details: [
        'Website Launch & Optimization',
        'Ongoing SEO Management',
        'Light Marketing Campaigns',
        'Performance Analytics'
      ],
      icon: <FaArrowTrendUp size={26} className="text-green-500" />,
      timeline: 'Ongoing',
      globalNote: 'Global support with local market expertise'
    }
  ]

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100 text-sm font-medium text-indigo-600 mb-6">
            <FaGlobeAmericas className="text-indigo-500" />
            OUR GLOBAL PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            How We Help Local Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Go Global</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 3-phase framework that transforms local businesses into thriving digital enterprises with worldwide potential.
          </p>
        </div>

        {/* Process Phases */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {phases.map((phase, index) => (
            <div key={phase.number} className="relative group">
              {/* Connecting Line for Desktop */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-200 to-cyan-200 group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors z-10" />
              )}
              
              {/* Phase Card */}
              <div className={`relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-2 ${
                activePhase === index ? 'ring-2 ring-indigo-500/20' : ''
              }`}>
                {/* Phase Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-gray-300 group-hover:text-indigo-200 transition-colors">{phase.number}</span>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm">
                    {phase.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">{phase.title}</h3>
                <p className="text-gray-600 mb-6">{phase.description}</p>

                {/* Details List */}
                <ul className="space-y-3 mb-6">
                  {phase.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Global Note */}
                <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-indigo-50/30 border border-gray-100">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <FaGlobeAmericas className="text-indigo-500" size={14} />
                    <span className="font-medium text-indigo-600">Global Feature:</span> {phase.globalNote}
                  </p>
                </div>

                {/* Timeline */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">AVERAGE TIMELINE</span>
                    <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text">
                      {phase.timeline}
                    </span>
                  </div>
                </div>

                {/* Interactive Button */}
                <button
                  onClick={() => setActivePhase(index)}
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all ${
                    activePhase === index 
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 ring-4 ring-indigo-500/20' 
                      : 'bg-gray-300 group-hover:bg-indigo-300'
                  }`}
                  aria-label={`Select ${phase.title} phase`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Phase Indicator Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {phases.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                activePhase === index
                  ? 'w-10 bg-gradient-to-r from-indigo-600 to-cyan-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to phase ${index + 1}`}
            />
          ))}
        </div>

        {/* Active Phase Details */}
        <div className={`max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 p-8 shadow-sm transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-50 to-cyan-50">
              {phases[activePhase].icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Currently Viewing: Phase {phases[activePhase].number}</h4>
              <p className="text-sm text-gray-600">{phases[activePhase].timeline} timeline</p>
            </div>
          </div>
          <p className="text-gray-700">
            <span className="font-medium text-indigo-600">Global Business Focus:</span> {phases[activePhase].description}
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50/50 to-cyan-50/50 rounded-2xl border border-indigo-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get a free website audit and personalized strategy session. We'll show you exactly how to establish your digital presence in your local market and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-3 text-base font-medium text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
              >
                Get Free Website Audit
              </Link>
              <Link
                href="/global-reach"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:border-indigo-400 hover:text-gray-900 transition-colors"
              >
                View Global Coverage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process