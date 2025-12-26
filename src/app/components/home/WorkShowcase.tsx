'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Mock data - replace with real case studies
const caseStudies = [
  {
    id: 1,
    title: 'RevenueOS',
    category: 'SaaS • B2B',
    challenge: 'A seed-stage startup needed to validate their revenue operations platform before securing Series A funding.',
    solution: 'We designed and built a functional MVP with core automation features in 8 weeks, enabling them to secure $500K in pre-seed and demonstrate traction to investors.',
    results: [
      { value: '60 days', label: 'From idea to launch' },
      { value: '$500K', label: 'Pre-seed raised' },
      { value: '12', label: 'Pilot customers' },
      { value: '89%', label: 'User retention' }
    ],
    imageColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    tags: ['Fintech', 'Automation', 'B2B SaaS'],
    link: '/work/revenueos'
  },
  {
    id: 2,
    title: 'MindfulHQ',
    category: 'Health Tech • B2C',
    challenge: 'A wellness coach with a successful 1:1 practice needed a scalable mobile solution to reach more clients while maintaining personalized experiences.',
    solution: 'We developed a subscription-based iOS app with custom meditation builder, progress tracking, and community features that allowed her to scale from 20 to 5,000+ users.',
    results: [
      { value: '5,000+', label: 'Downloads' },
      { value: '22%', label: 'Conversion rate' },
      { value: '4.8', label: 'App Store rating' },
      { value: '$45K', label: 'Monthly recurring revenue' }
    ],
    imageColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
    tags: ['Mobile App', 'Subscription', 'Wellness'],
    link: '/work/mindfulhq'
  },
  {
    id: 3,
    title: 'SupplyChainAI',
    category: 'Enterprise • AI',
    challenge: 'A logistics enterprise needed to prototype an AI forecasting tool to validate demand from enterprise clients before full-scale development.',
    solution: 'We built an interactive data visualization dashboard with predictive algorithms and real-time insights that secured 3 enterprise pilots and generated immediate revenue.',
    results: [
      { value: '3', label: 'Enterprise pilots' },
      { value: '89%', label: 'Forecast accuracy' },
      { value: '$1.2M', label: 'Pipeline generated' },
      { value: '8 weeks', label: 'To first revenue' }
    ],
    imageColor: 'bg-gradient-to-br from-purple-50 to-violet-100',
    tags: ['AI/ML', 'Enterprise', 'Data Visualization'],
    link: '/work/supplychainai'
  },
  {
    id: 4,
    title: 'TalentSync',
    category: 'HR Tech • SaaS',
    challenge: 'An HR tech startup needed to pivot from their complex enterprise solution to a simpler MVP that could validate market need quickly.',
    solution: 'We redesigned their platform into a streamlined candidate matching tool, focusing on core AI matching algorithms and reducing features by 70% for faster launch.',
    results: [
      { value: '45 days', label: 'To pivot launch' },
      { value: '200%', label: 'User growth' },
      { value: '4.7', label: 'CSAT score' },
      { value: 'Pre-seed', label: 'Funding secured' }
    ],
    imageColor: 'bg-gradient-to-br from-amber-50 to-orange-100',
    tags: ['HR Tech', 'AI Matching', 'B2B'],
    link: '/work/talentsync'
  },
  {
    id: 5,
    title: 'EcoTrack',
    category: 'Sustainability • Mobile',
    challenge: 'A sustainability startup needed a mobile app to help consumers track and reduce their carbon footprint with gamified experiences.',
    solution: 'We created a React Native app with carbon footprint calculator, challenge system, and social sharing features that engaged users daily.',
    results: [
      { value: '10K+', label: 'Active users' },
      { value: '4 min', label: 'Avg session time' },
      { value: '3.2', label: 'Daily opens' },
      { value: 'Seed', label: 'Round closed' }
    ],
    imageColor: 'bg-gradient-to-br from-teal-50 to-cyan-100',
    tags: ['Mobile', 'Gamification', 'Sustainability'],
    link: '/work/ecotrack'
  },
  {
    id: 6,
    title: 'LegalBot',
    category: 'Legal Tech • AI',
    challenge: 'A legal tech company needed to test their AI contract review technology with real users before investing in full-scale development.',
    solution: 'We built a web-based MVP with AI-powered contract analysis, highlighting risks and suggesting improvements, validating both technology and business model.',
    results: [
      { value: '95%', label: 'Accuracy rate' },
      { value: '2 min', label: 'Avg analysis time' },
      { value: '$250K', label: 'ARR from MVP' },
      { value: 'Series A', label: 'Ready for funding' }
    ],
    imageColor: 'bg-gradient-to-br from-rose-50 to-pink-100',
    tags: ['AI', 'Legal Tech', 'Web App'],
    link: '/work/legalbot'
  }
]

const WorkShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filters = [
    { id: 'all', label: 'All Work', count: 6 },
    { id: 'saas', label: 'SaaS', count: 3 },
    { id: 'mobile', label: 'Mobile', count: 2 },
    { id: 'enterprise', label: 'Enterprise', count: 2 },
    { id: 'ai', label: 'AI/ML', count: 3 }
  ]

  // Get unique tags from all projects
  const allTags = Array.from(new Set(caseStudies.flatMap(project => project.tags)))

  // Filter projects based on active filter
  const filteredProjects = caseStudies.filter(project => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'saas') return project.category.includes('SaaS')
    if (activeFilter === 'mobile') return project.category.includes('Mobile') || project.tags.includes('Mobile')
    if (activeFilter === 'enterprise') return project.category.includes('Enterprise')
    if (activeFilter === 'ai') return project.tags.includes('AI') || project.tags.includes('AI/ML')
    return project.tags.includes(activeFilter)
  })

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
            REAL-WORK RESULTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            From <span className="text-gray-600">zero</span> to{' '}
            <span className="relative">
              <span className="text-black">market-ready</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-400 to-transparent rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real MVPs built for founders who needed more than code—they needed validation, traction, and a clear path to growth.
          </p>
        </div>

        {/* Filters with Counts */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-black text-white shadow-lg'
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
          
          {/* Additional tag filters */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
              More tags
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveFilter(tag.toLowerCase())}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '6+', label: 'MVPs Launched' },
              { value: '60-90', label: 'Avg Days to Launch' },
              { value: '$2.5M+', label: 'Client Funding Raised' },
              { value: '100%', label: 'Founder Satisfaction' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link href={project.link} className="block h-full">
                <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-300">
                  {/* Project Header */}
                  <div className={`h-48 ${project.imageColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-7xl font-bold text-white/10 transition-transform group-hover:scale-110">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-black/80 backdrop-blur-sm text-xs font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Challenge & Solution (Collapsed by default) */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">CHALLENGE</h4>
                        <p className="text-sm text-gray-700 line-clamp-2">{project.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">OUR SOLUTION</h4>
                        <p className="text-sm text-gray-700 line-clamp-3">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="pt-6 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">RESULTS ACHIEVED</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.results.slice(0, 4).map((result, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 rounded-xl p-3 text-center group-hover:bg-gray-100 transition-colors"
                          >
                            <div className="text-lg font-bold text-black mb-1">{result.value}</div>
                            <div className="text-xs text-gray-600">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View Case Study Link */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                          View full case study
                        </span>
                        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-black to-gray-900 rounded-3xl p-12 text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-gray-300 mb-8">
                Explore detailed case studies with timelines, challenges, and measurable outcomes.
              </p>
              <Link
                href="/work"
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-100 transition-all hover:scale-105"
              >
                View All Case Studies
                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Custom CSS for line-clamp */}
      <style jsx>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
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

export default WorkShowcase