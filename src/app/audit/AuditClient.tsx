'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaCheckCircle, 
  FaChartLine, 
  FaMobileAlt, 
  FaTachometerAlt, 
  FaSearch,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function AuditClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    businessType: '',
    country: '',
    competitors: '',
    goals: '',
    message: ''
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    if (!formData.name || !formData.email || !formData.website || !formData.country) {
      setError('Please fill in all required fields (*)')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        website_url: formData.website,
        business_type: formData.businessType,
        country: formData.country,
        competitors: formData.competitors,
        goals: formData.goals,
        message: formData.message,
        submitted_at: new Date().toLocaleString(),
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      setIsSubmitted(true)
      setIsSubmitting(false)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setError('Failed to send audit request. Please try again or contact us directly.')
      setIsSubmitting(false)
    }
  }

  const auditBenefits = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: 'SEO Analysis',
      description: 'Check your keyword rankings, meta tags, and on-page optimization'
    },
    {
      icon: <FaTachometerAlt className="w-6 h-6" />,
      title: 'Performance Check',
      description: 'Analyze your site speed, Core Web Vitals, and mobile responsiveness'
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: 'Conversion Review',
      description: 'Identify opportunities to turn more visitors into customers'
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: 'Competitor Analysis',
      description: 'See how you stack up against local competitors'
    },
    {
      icon: <FaMobileAlt className="w-6 h-6" />,
      title: 'Google Business Check',
      description: 'Optimize your Google Business Profile for local search'
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Action Plan',
      description: 'Get a prioritized 5-step plan to improve your results'
    }
  ]

  const countries = [
    'Nigeria', 'United Kingdom', 'United States', 'Canada', 'Australia',
    'South Africa', 'Kenya', 'Ghana', 'Germany', 'France', 'Other'
  ]

  const businessTypes = [
    'Restaurant / Cafe',
    'Retail Store',
    'E-commerce',
    'Professional Services (Legal, Accounting, Consulting)',
    'Healthcare / Medical',
    'Real Estate',
    'Hotel / Hospitality',
    'Construction / Home Services',
    'Education / Training',
    'Startup / Tech',
    'Other'
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl border border-gray-200 p-12 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Audit Request Received! 🎉</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for requesting a free website audit, {formData.name.split(' ')[0]}!
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Our team will analyze your website within <strong>24-48 hours</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">You'll receive a <strong>detailed 5-step action plan</strong> via email</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Schedule a <strong>free 30-minute strategy call</strong> to review findings</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Back to Home
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-600 mb-6">
            <FaSearch size={14} />
            LIMITED TIME OFFER
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Free Website Audit
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover exactly what's holding your website back from generating more customers. 
            Get a personalized 5-step action plan - completely free, no obligation.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['No credit card required', '24-48 hour turnaround', '100% confidential'].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheckCircle className="w-4 h-4 text-green-500" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Benefits Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          What's Included in Your Free Audit?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auditBenefits.map((benefit, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audit Form */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
            <h2 className="text-2xl font-bold text-white mb-2">Request Your Free Audit</h2>
            <p className="text-white/90">Fill out the form below and we'll get back to you within 24-48 hours</p>
          </div>

          {/* Form Body */}
          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
                  Your Information
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@yourbusiness.com"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Website Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                  Website Details
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://yourbusiness.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Business Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">3</span>
                  Business Information
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Top Competitors (Optional)
                    </label>
                    <input
                      type="text"
                      name="competitors"
                      value={formData.competitors}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="competitor1.com, competitor2.com"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Goals */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">4</span>
                  Your Goals
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What are your main goals for your website?
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Get more local customers, increase online sales, improve Google rankings..."
                  />
                </div>
              </div>

              {/* Step 5: Additional Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">5</span>
                  Additional Information (Optional)
                </h3>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Anything else you'd like us to know about your business or website?"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Get My Free Website Audit
                    <FaArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: 'Is the website audit really free?', a: 'Yes! Our website audit is completely free with no obligation. We provide a detailed 5-step action plan to help you improve your online presence.' },
            { q: 'How long does the audit take?', a: 'We typically deliver your audit results within 24-48 hours. Our team manually reviews every aspect of your website to provide personalized recommendations.' },
            { q: 'Do I need to get on a sales call?', a: 'Not unless you want to! We include a free 30-minute strategy call to review your audit results, but it\'s optional. No pressure, no hard selling.' },
            { q: 'What if I don\'t have a website yet?', a: 'No problem! We can still provide a consultation on what you need to get started and how to build a website that generates leads from day one.' },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer to talk to someone directly?</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/2348062804129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all"
            >
              <FaEnvelope className="w-5 h-5" />
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}