'use client'

import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

interface QuoteFormData {
  name: string
  email: string
  company: string
  businessType: string
  services: string[]
  location: string
  budget: string
  timeline: string
  contactMethod: string
  whatsappNumber: string
  instagram: string
  twitter: string
  message: string
}

const serviceOptions = [
  'Web Design',
  'SEO',
  'Business Setup',
  'Marketing',
  'eCommerce',
  'Social Media',
  'Branding',
  'Consulting'
]

const contactMethods = [
  { id: 'email', label: 'Email', icon: '✉️' },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
  { id: 'instagram', label: 'Instagram', icon: '📷' },
  { id: 'twitter', label: 'Twitter/X', icon: '🐦' }
]

const Hero = ({ onGetQuote }: { onGetQuote: () => void }) => {
  const [loaded, setLoaded] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [currentTagline, setCurrentTagline] = useState(0)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string>('')
  
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    company: '',
    businessType: '',
    services: [],
    location: '',
    budget: '',
    timeline: '',
    contactMethod: '',
    whatsappNumber: '',
    instagram: '',
    twitter: '',
    message: ''
  })

  useEffect(() => {
    setLoaded(true)
    
    const metricsInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 4000)
    
    return () => {
      clearInterval(metricsInterval)
      clearInterval(taglineInterval)
    }
  }, [])

  // Handle Get Quote button click - YOUR EXACT DESIGN
  const handleGetQuote = () => {
    setShowQuoteModal(true)
    setIsSubmitted(false)
    setError('')
    onGetQuote?.()
  }

  // Handle modal close - YOUR EXACT DESIGN
  const onClose = () => {
    setShowQuoteModal(false)
  }

  // Handle form input changes - YOUR EXACT DESIGN
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle service toggle - YOUR EXACT DESIGN
  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
      return { ...prev, services }
    })
  }

  // NEW: EmailJS submission logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    // Validation
    if (!formData.name || !formData.email || !formData.contactMethod) {
      setError('Please fill in all required fields (*)')
      return
    }

    if (formData.contactMethod === 'whatsapp' && !formData.whatsappNumber) {
      setError('Please provide your WhatsApp number')
      return
    }
    if (formData.contactMethod === 'instagram' && !formData.instagram) {
      setError('Please provide your Instagram username')
      return
    }
    if (formData.contactMethod === 'twitter' && !formData.twitter) {
      setError('Please provide your Twitter/X username')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        business_name: formData.company,
        business_type: formData.businessType,
        services: formData.services.join(', '),
        location: formData.location,
        budget: formData.budget,
        timeline: formData.timeline,
        contact_method: formData.contactMethod,
        whatsapp_number: formData.whatsappNumber,
        instagram: formData.instagram,
        twitter: formData.twitter,
        message: formData.message,
        urgency: 'none',
        submitted_at: new Date().toLocaleString(),
        total_services: formData.services.length
      }

      // Send email via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      // Success
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        setShowQuoteModal(false)
        setIsSubmitted(false)
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          businessType: '',
          services: [],
          location: '',
          budget: '',
          timeline: '',
          contactMethod: '',
          whatsappNumber: '',
          instagram: '',
          twitter: '',
          message: ''
        })
      }, 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setError('Failed to send quote request. Please try again or contact us directly.')
      setIsSubmitting(false)
    }
  }

  // Your existing Hero content
  const metrics = [
    { value: '48', label: 'Hours to Quote', suffix: 'Hours' },
    { value: '100%', label: 'Client Satisfaction', suffix: 'Satisfaction' },
    { value: '24/7', label: 'Global Support', suffix: 'Support' },
    { value: '50+', label: 'Countries Served', suffix: 'Countries' },
  ]

  const features = [
    'Free Website Audit',
    'SEO Strategy Session',
    'Business Setup Guidance',
    'No Long-Term Contracts'
  ]

  const taglines = [
    'Web design, SEO & business setup for local businesses worldwide.',
    'Helping local businesses establish their digital presence globally.',
    'Professional solutions for businesses in every corner of the world.',
    'From local storefront to global online presence.'
  ]

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* YOUR EXACT HERO COMPONENT - NO CHANGES */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-100/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-100/40 to-transparent rounded-full blur-3xl" />
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
                    WEB DESIGN • SEO • BUSINESS SETUP • MARKETING
                  </span>
                </div>
              </div>
              <div className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium">
                SERVING BUSINESSES WORLDWIDE
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <span className="text-gray-600 block">Scale Your Local</span>
              <span className="text-gray-900 block relative">
                Business Worldwide
                <span className="absolute -bottom-2 left-0 w-64 h-1 bg-gradient-to-r from-indigo-600 via-cyan-500 to-transparent rounded-full" />
              </span>
              <span className="text-gray-600 block">with Expert Solutions</span>
            </h1>
            
            {/* Animated Subheadline */}
            <div className="h-20 md:h-16 mb-10 max-w-3xl">
              <div className="relative h-full">
                {taglines.map((tagline, index) => (
                  <p
                    key={index}
                    className={`absolute top-0 left-0 text-lg md:text-xl lg:text-2xl text-gray-600 transition-all duration-500 ${
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
                  className="inline-flex items-center px-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm transition-all duration-300 cursor-default group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="mr-2 text-green-600 group-hover:text-indigo-600 transition-colors">✓</span>
                  {feature}
                </div>
              ))}
            </div>
            
            {/* CTA Buttons - Only added onClick to Get Quote button */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <button
                onClick={handleGetQuote}
                className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-base font-medium text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center">
                  Get Your Free Quote
                  <svg 
                    className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-indigo-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <div className="relative">
                <a
                  href="#services"
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 text-base font-medium text-gray-700 hover:border-indigo-400 hover:text-gray-900 transition-all duration-300 hover:shadow-sm"
                >
                  View Our Services
                </a>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                  Free website audit included
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
                    className="text-center cursor-pointer group"
                    onClick={() => setCurrentMetric(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setCurrentMetric(index)}
                    aria-label={`View metric: ${metric.label}`}
                  >
                    <div className="relative inline-block">
                      <div className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 transition-all duration-500 group-hover:text-indigo-600 ${
                        currentMetric === index ? 'scale-105 text-indigo-600' : 'scale-100'
                      }`}>
                        {metric.value}
                        <span className={`text-lg transition-colors ${
                          currentMetric === index ? 'text-indigo-500' : 'text-gray-500'
                        }`}>
                          {metric.suffix}
                        </span>
                      </div>
                      {currentMetric === index && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full" />
                      )}
                    </div>
                    <div className={`text-sm font-medium transition-colors duration-300 group-hover:text-gray-900 ${
                      currentMetric === index ? 'text-indigo-600' : 'text-gray-600'
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
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                      currentMetric === index
                        ? 'w-8 bg-gradient-to-r from-indigo-600 to-cyan-500'
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
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 group focus:outline-none"
              aria-label="Scroll to services section"
            >
              <span className="text-xs text-gray-500 font-medium tracking-wider group-hover:text-indigo-600 transition-colors">
                EXPLORE OUR SERVICES
              </span>
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7-7V3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* YOUR EXACT FORM MODAL - Only added onSubmit and EmailJS logic */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Get Your Free Quote</h2>
                <p className="text-gray-600 text-sm">Tell us about your business needs</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="m-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-700">{error}</span>
                </div>
              </div>
            )}

            {/* Success Message */}
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Quote Request Sent!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for your interest! We've received your quote request.
                </p>
                <p className="text-gray-600 mb-6">
                  We'll review your information and get back to you within <strong>24 hours</strong>.
                </p>
                <div className="animate-pulse text-sm text-gray-500">
                  This window will close in 5 seconds...
                </div>
              </div>
            ) : (
              /* Form - Added onSubmit handler */
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Business Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Your Business Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Type
                        </label>
                        <input
                          type="text"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="e.g., Restaurant, Retail, Service, etc."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Services Needed</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-3 text-sm font-medium rounded-xl border transition-all ${
                            formData.services.includes(service)
                              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                              : 'border-gray-300 text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Project Details</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="City, Country"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="">Select budget</option>
                          <option value="$500-$1k">$500 - $1,000</option>
                          <option value="$1k-$3k">$1,000 - $3,000</option>
                          <option value="$3k-$5k">$3,000 - $5,000</option>
                          <option value="$5k+">$5,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="ASAP">ASAP (Within 2 weeks)</option>
                          <option value="1 month">Within 1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3+ months">3+ months</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Preferred Contact Method *</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {contactMethods.map((method) => (
                        <label
                          key={method.id}
                          className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.contactMethod === method.id
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method.id}
                            checked={formData.contactMethod === method.id}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          <span className="text-2xl mb-2">{method.icon}</span>
                          <span className="text-sm font-medium">{method.label}</span>
                        </label>
                      ))}
                    </div>

                    {/* Conditional Fields Based on Contact Method */}
                    {formData.contactMethod === 'whatsapp' && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    )}

                    {formData.contactMethod === 'instagram' && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Instagram Username *
                        </label>
                        <input
                          type="text"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="@username"
                        />
                      </div>
                    )}

                    {formData.contactMethod === 'twitter' && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Twitter/X Username *
                        </label>
                        <input
                          type="text"
                          name="twitter"
                          value={formData.twitter}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="@username"
                        />
                      </div>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details or Questions
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us more about your business needs..."
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Quote Request'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-4 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Privacy Notice */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-600 text-center">
                    <strong>How this works:</strong> We'll automatically send your quote request to our team.
                    Just click "Send Quote Request" and we'll get back to you with a custom proposal within 24 hours.
                    <br />
                    <span className="block mt-1">
                      Your information is secure. We never share your details with third parties.
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Hero