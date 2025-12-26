'use client'

import { useState } from 'react'
import Image from 'next/image'

// Mock data - replace with real case studies
const caseStudies = [
  {
    id: 1,
    title: 'RevenueOS',
    category: 'SaaS • B2B',
    challenge: 'A seed-stage startup needed to validate their revenue operations platform before Series A.',
    solution: 'Designed and built a functional MVP in 8 weeks that secured $500K in pre-seed funding.',
    results: ['Launched in 60 days', '$500K pre-seed raised', '12 pilot customers'],
    imageColor: 'bg-gradient-to-br from-gray-100 to-gray-200'
  },
  {
    id: 2,
    title: 'MindfulHQ',
    category: 'Health Tech • B2C',
    challenge: 'A wellness coach needed a mobile app to scale her 1:1 meditation practice.',
    solution: 'Developed a subscription-based iOS app with custom meditation builder and analytics.',
    results: ['5,000+ downloads', '22% conversion rate', '4.8 App Store rating'],
    imageColor: 'bg-gradient-to-br from-gray-50 to-gray-100'
  },
  {
    id: 3,
    title: 'SupplyChainAI',
    category: 'Enterprise • AI',
    challenge: 'A logistics company needed to prototype an AI forecasting tool for enterprise clients.',
    solution: 'Built a data visualization dashboard with predictive algorithms and real-time insights.',
    results: ['3 enterprise pilots', '89% forecast accuracy', '$1.2M pipeline generated'],
    imageColor: 'bg-gradient-to-br from-gray-200 to-gray-300'
  }
]

const WorkShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'saas', label: 'SaaS' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'enterprise', label: 'Enterprise' }
  ]

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 mb-6">
            PROVEN RESULTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From zero to <span className="text-black">market-ready</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real MVPs built for founders who needed more than code—they needed a path to market.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-300 opacity-30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">CHALLENGE</h4>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">OUR SOLUTION</h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">RESULTS</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.results.map((result, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 text-sm font-medium text-gray-700"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Project Link */}
                <a
                  href={`/work/${project.id}`}
                  className="mt-6 inline-flex items-center text-sm font-medium text-black hover:underline group/link"
                >
                  View case study
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:border-gray-400 transition-colors"
          >
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  )
}

export default WorkShowcase