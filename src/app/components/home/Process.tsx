'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { SiCssdesignawards } from "react-icons/si";
import { MdBuildCircle } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const Process = () => {
  const [activePhase, setActivePhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
        'Feature Prioritization Matrix'
      ],
      icon: <SiCssdesignawards size={26}/>,
      timeline: '2-3 weeks'
    },
    {
      number: '02',
      title: 'Build & Launch',
      description: 'We build your robust, scalable MVP with precision and launch it to the world.',
      details: [
        'Full-Stack Development (Next.js, Node, etc.)',
        'Agile 2-Week Sprints with Demos',
        'Automated Testing & QA',
        'Performance Optimization'
      ],
      icon: <MdBuildCircle size={26}/>,
      timeline: '6-8 weeks'
    },
    {
      number: '03',
      title: 'Market & Scale',
      description: 'We equip you with the strategy and tools to find your first 1000 users.',
      details: [
        'Go-to-Market Strategy Development',
        'Core Messaging & Positioning',
        'Launch Playbook Creation',
        'Growth Metrics & Analytics'
      ],
      icon: <FaArrowTrendUp size={26}/>,
      timeline: '2-3 weeks'
    }
  ]

  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-6">
            THE DESTINY PATH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From concept to <span className="text-black">customers</span> in 90 days
          </h2>
          <p className="text-xl text-gray-600">
            A proven 3-phase process that eliminates guesswork and accelerates your path to product-market fit.
          </p>
        </div>

        {/* Process Phases */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div key={phase.number} className="relative">
              {/* Phase Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Phase Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-gray-500">{phase.number}</span>
                  <span className="text-3xl">{phase.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-6">{phase.description}</p>

                {/* Details List */}
                <ul className="space-y-3">
                  {phase.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      </div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Timeline */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">TIMELINE</span>
                    <span className="text-sm font-bold">{phase.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Ready to walk the path?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book a free strategy session where we'll map out your product's first 90 days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process