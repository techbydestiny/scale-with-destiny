'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaStar, 
  FaArrowRight, 
  FaChevronDown,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaCheck,
  FaGlobe,
  FaClock,
  FaUsers,
  FaChartLine
} from "react-icons/fa6"

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
  { id: 'email', label: 'Email', icon: FaEnvelope },
  { id: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp },
  { id: 'instagram', label: 'Instagram', icon: FaInstagram },
  { id: 'twitter', label: 'Twitter/X', icon: FaTwitter }
]

const Hero = ({ onGetQuote }: { onGetQuote?: () => void }) => {
  const [loaded, setLoaded] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [currentTagline, setCurrentTagline] = useState(0)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [imageError, setImageError] = useState(false)
  
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

  const metrics = [
    { value: '48', label: 'Hours to Quote', suffix: 'h' },
    { value: '100%', label: 'Client Satisfaction', suffix: '' },
    { value: '24/7', label: 'Global Support', suffix: '' },
    { value: '50+', label: 'Countries Served', suffix: '' },
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

  const handleGetQuote = () => {
    setShowQuoteModal(true)
    setIsSubmitted(false)
    setError('')
    onGetQuote?.()
  }

  const onClose = () => {
    setShowQuoteModal(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
      return { ...prev, services }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
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
      
      setTimeout(() => {
        setShowQuoteModal(false)
        setIsSubmitted(false)
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

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section - Dark Blue Gradient to match country pages */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div>
                <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-1000 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                  <span className="text-xs font-mono tracking-wider text-blue-200 uppercase">
                    Digital Solutions
                  </span>
                </div>
                
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-1000 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <span className="text-white block">Scale Your</span>
                  <span className="text-white block">
                    Business{' '}
                    <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                      Worldwide
                    </span>
                  </span>
                </h1>
                
                <div className="h-20 md:h-16 mb-8">
                  <div className="relative h-full">
                    {taglines.map((tagline, index) => (
                      <p
                        key={index}
                        className={`absolute top-0 left-0 text-blue-100 text-lg leading-relaxed transition-all duration-500 ${
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
                
                <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-300 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  {features.map((feature, index) => (
                    <div
                      key={feature}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-blue-100"
                    >
                      <FaCheck className="mr-2 text-blue-300 text-xs" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-500 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <button
                    onClick={handleGetQuote}
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Your Free Quote
                      <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button
                    onClick={scrollToServices}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    View Our Services
                    <FaChevronDown className="ml-2 w-4 h-4" />
                  </button>
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20 transition-all duration-1000 delay-700 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  {metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className="text-center cursor-pointer"
                      onClick={() => setCurrentMetric(index)}
                    >
                      <div className={`text-3xl font-bold text-white mb-1 transition-all duration-300 ${
                        currentMetric === index ? 'text-blue-300 scale-105' : ''
                      }`}>
                        {metric.value}
                        <span className="text-sm text-blue-200 ml-0.5">{metric.suffix}</span>
                      </div>
                      <div className={`text-xs text-blue-200/70 tracking-wide transition-colors ${
                        currentMetric === index ? 'text-blue-300' : ''
                      }`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Image with Next.js optimization */}
              <div className={`hidden lg:block transition-all duration-1000 delay-500 ${
                loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] bg-gradient-to-br from-blue-800/50 to-indigo-900/50">
                      {!imageError ? (
                        <Image
                          src="/images/hero-image.png"
                          alt="Business growth illustration showing global expansion and digital success"
                          width={600}
                          height={600}
                          className="w-full h-full object-cover"
                          priority
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        // Fallback content if image doesn't load
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center p-8">
                            <FaGlobe className="w-24 h-24 text-blue-300 mx-auto mb-4" />
                            <p className="text-white text-lg">Global Digital Solutions</p>
                            <p className="text-blue-200 text-sm mt-2">Web Design • SEO • Business Setup</p>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-medium text-white">100+ Clients Worldwide</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <FaStar className="w-4 h-4 text-yellow-400" />
                      </div>
                      <span className="text-xs font-medium text-white">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave separator to white */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
        
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 z-10 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 group focus:outline-none"
          >
            <span className="text-[10px] text-white/50 tracking-widest uppercase group-hover:text-white/80 transition-colors">
              Scroll
            </span>
            <FaChevronDown className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors animate-bounce" />
          </button>
        </div>
      </section>

      {/* Quote Modal - Keep as is */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="sticky top-0 bg-gray-900 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Get Your Free Quote</h2>
                  <p className="text-gray-400 text-sm">Tell us about your business needs</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quote Request Sent!</h3>
                    <p className="text-gray-400">Thank you! We'll get back to you within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Services Interested In
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {serviceOptions.map(service => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                              formData.services.includes(service)
                                ? 'bg-blue-600 text-white'
                                : 'bg-white/5 text-gray-300 hover:bg-white/10'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Contact Method <span className="text-blue-500">*</span>
                      </label>
                      <div className="grid grid-cols-4 gap-3">
                        {contactMethods.map(method => {
                          const Icon = method.icon
                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, contactMethod: method.id }))}
                              className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200 ${
                                formData.contactMethod === method.id
                                  ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                                  : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span className="text-xs">{method.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {formData.contactMethod === 'whatsapp' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          WhatsApp Number <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    )}

                    {formData.contactMethod === 'instagram' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Instagram Username <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    )}

                    {formData.contactMethod === 'twitter' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Twitter/X Username <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="twitter"
                          value={formData.twitter}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Hero