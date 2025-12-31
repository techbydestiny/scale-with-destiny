'use client'

import { useState, useEffect } from 'react'
import BuildMVPModal from '../layout/BuildMVPModal'
import FoundingClientModal from '../layout/FoundingClientModal'

// Project Blueprints - What we CAN build for you
const projectBlueprints = [
  {
    id: 1,
    title: 'SaaS Dashboard MVP',
    category: 'B2B • SaaS',
    description: 'A comprehensive dashboard with analytics, user management, and reporting. Perfect for startups needing to demonstrate value to investors.',
    features: ['User authentication', 'Real-time analytics', 'Data visualization', 'Admin panel'],
    timeline: '6-8 weeks',
    budget: '$25-35K',
    imageColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    tags: ['Dashboard', 'Analytics', 'B2B']
  },
  {
    id: 2,
    title: 'Mobile App MVP',
    category: 'Consumer • Mobile',
    description: 'A user-friendly mobile app with core features, push notifications, and social integration. Built with React Native.',
    features: ['User onboarding', 'Push notifications', 'In-app messaging', 'Social integration'],
    timeline: '8-10 weeks',
    budget: '$30-40K',
    imageColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
    tags: ['Mobile App', 'React Native', 'iOS/Android']
  },
  {
    id: 3,
    title: 'Marketplace Platform',
    category: 'Marketplace • P2P',
    description: 'A two-sided marketplace connecting buyers and sellers with payment processing and reviews.',
    features: ['User verification', 'Payment processing', 'Review system', 'Search & filters'],
    timeline: '10-12 weeks',
    budget: '$35-50K',
    imageColor: 'bg-gradient-to-br from-purple-50 to-violet-100',
    tags: ['Marketplace', 'E-commerce', 'Payments']
  },
  {
    id: 4,
    title: 'AI-Powered Tool',
    category: 'AI • Automation',
    description: 'A smart tool leveraging AI/ML to automate processes and provide intelligent recommendations.',
    features: ['AI integration', 'Data processing', 'Custom training', 'API endpoints'],
    timeline: '8-12 weeks',
    budget: '$40-60K',
    imageColor: 'bg-gradient-to-br from-amber-50 to-orange-100',
    tags: ['AI/ML', 'Automation', 'Data Processing']
  },
  {
    id: 5,
    title: 'Content Platform',
    category: 'Media • Subscription',
    description: 'A subscription-based platform with video streaming, user subscriptions, and creator tools.',
    features: ['Video streaming', 'Subscription mgmt', 'Creator dashboard', 'Content management'],
    timeline: '10-14 weeks',
    budget: '$45-65K',
    imageColor: 'bg-gradient-to-br from-teal-50 to-cyan-100',
    tags: ['Streaming', 'Subscription', 'Content']
  },
  {
    id: 6,
    title: 'Internal Tool MVP',
    category: 'Enterprise • Internal',
    description: 'A custom internal tool to streamline business operations and improve team productivity.',
    features: ['Role-based access', 'Workflow automation', 'Data import/export', 'Team collaboration'],
    timeline: '6-10 weeks',
    budget: '$20-35K',
    imageColor: 'bg-gradient-to-br from-rose-50 to-pink-100',
    tags: ['Internal Tools', 'Automation', 'Productivity']
  }
]

const WorkShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [buildModalOpen, setBuildModalOpen] = useState(false)
  const [foundingModalOpen, setFoundingModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<{type: string, category: string} | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filters = [
    { id: 'all', label: 'All Types', count: 6 },
    { id: 'saas', label: 'SaaS', count: 2 },
    { id: 'mobile', label: 'Mobile', count: 1 },
    { id: 'ai', label: 'AI/ML', count: 1 },
    { id: 'marketplace', label: 'Marketplace', count: 1 }
  ]

  const filteredProjects = projectBlueprints.filter(project => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'saas') return project.category.includes('SaaS')
    if (activeFilter === 'mobile') return project.category.includes('Mobile')
    if (activeFilter === 'ai') return project.category.includes('AI')
    if (activeFilter === 'marketplace') return project.category.includes('Marketplace')
    return project.tags.some(tag => tag.toLowerCase().includes(activeFilter))
  })

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Updated Header - Honest Approach */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
            WHAT WE BUILD
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your <span className="text-gray-600">idea</span> made{' '}
            <span className="relative">
              <span className="text-black">market-ready</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-400 to-transparent rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a new agency, we're building our first success stories. 
            Here are examples of MVPs we can create for you each designed to validate your idea and attract early adopters.
          </p>
        </div>

        {/* Updated Stats - Focus on Process */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '60-90', label: 'Days to Launch', description: 'Typical timeline' },
              { value: '$25-50K', label: 'Project Range', description: 'Common budget range' },
              { value: '3-Phase', label: 'Clear Process', description: 'Design → Build → Launch' },
              { value: '100%', label: 'Dedicated', description: 'Focus on your success' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
        </div>

        {/* Project Blueprints Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
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
                  
                  {/* Timeline & Budget */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                        <div className="text-xs font-medium">{project.timeline}</div>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full">
                        <div className="text-xs font-semibold">{project.budget}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">KEY FEATURES</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setSelectedProject({
                          type: project.title,
                          category: project.category
                        })
                        setBuildModalOpen(true)
                      }}
                      className="w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Quote for This MVP
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Updated Messaging */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to build your first success story?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Every great agency starts with their first client. Let's make yours a remarkable success.
                  We're offering special introductory rates for our founding clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setFoundingModalOpen(true)}
                    className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    Apply as Founding Client
                    <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                  <a
                    href="#process"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3 text-base font-medium text-white hover:border-white/50 transition-colors"
                  >
                    See How We Work
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
            </div>
            
            {/* Trust Builders */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🎯', title: 'Strategy First', desc: 'We validate before we build' },
                { icon: '⚡', title: 'Fast Execution', desc: '60-90 days to launch' },
                { icon: '💬', title: 'Transparent', desc: 'Weekly updates & demos' },
                { icon: '💰', title: 'Introductory Rates', desc: 'Special founding client pricing' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-semibold mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {buildModalOpen && selectedProject && (
        <BuildMVPModal
          onClose={() => {
            setBuildModalOpen(false)
            setSelectedProject(null)
          }}
          projectType={selectedProject.type}
          category={selectedProject.category}
        />
      )}

      {foundingModalOpen && (
        <FoundingClientModal
          onClose={() => setFoundingModalOpen(false)}
        />
      )}

      <style jsx>{`
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