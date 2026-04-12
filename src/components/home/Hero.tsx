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
  { id: 'email', label: 'Email', icon: FaEnvelope, placeholder: 'We\'ll reply to your email' },
  { id: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp, placeholder: 'Enter your WhatsApp number with country code' },
  { id: 'instagram', label: 'Instagram', icon: FaInstagram, placeholder: '@username' },
  { id: 'twitter', label: 'Twitter/X', icon: FaTwitter, placeholder: '@username' }
]

const Hero = ({ onGetQuote }: { onGetQuote?: () => void }) => {
  const [loaded, setLoaded] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [currentTagline, setCurrentTagline] = useState(0)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  
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

  const metrics = useMemo(() => [
    { value: '48', label: 'Hours to Quote', suffix: 'h', icon: FaClock, trend: '+12%' },
    { value: '100%', label: 'Client Satisfaction', suffix: '', icon: FaChartLine, trend: '5.0 avg' },
    { value: '24/7', label: 'Global Support', suffix: '', icon: FaGlobe, trend: 'Always on' },
    { value: '50+', label: 'Countries Served', suffix: '', icon: FaUsers, trend: 'Growing' },
  ], [])

  const features = useMemo(() => [
    'Free Website Audit',
    'SEO Strategy Session',
    'Business Setup Guidance',
    'No Long-Term Contracts'
  ], [])

  const taglines = useMemo(() => [
    'Web design, SEO & business setup for local businesses worldwide.',
    'Helping local businesses establish their digital presence globally.',
    'Professional solutions for businesses in every corner of the world.',
    'From local storefront to global online presence.'
  ], [])

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
  }, [metrics.length, taglines.length])

  const handleGetQuote = useCallback(() => {
    setShowQuoteModal(true)
    setIsSubmitted(false)
    setError('')
    onGetQuote?.()
  }, [onGetQuote])

  const onClose = useCallback(() => {
    setShowQuoteModal(false)
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleServiceToggle = useCallback((service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
        urgency: 'none',
        submitted_at: new Date().toLocaleString(),
        total_services: formData.services.length
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
  }, [formData, isSubmitting])

  const scrollToServices = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      {/* Modern Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-thriveGreen/5 to-blue-500/5 rounded-full blur-3xl" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column - Text Content */}
              <motion.div variants={itemVariants}>
                {/* Modern Eyebrow */}
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-thriveGreen opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-thriveGreen"></span>
                  </span>
                  <span className="text-xs font-mono tracking-wider text-gray-300 uppercase">
                    Digital Solutions
                  </span>
                </div>
                
                {/* Main Headline */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
                  <span className="text-white block">Scale Your</span>
                  <span className="text-white block">
                    Business{' '}
                    <span className="bg-gradient-to-r from-thriveGreen via-blue-400 to-thriveGreen bg-clip-text text-transparent animate-gradient">
                      Worldwide
                    </span>
                  </span>
                </h1>
                
                {/* Animated Subheadline */}
                <div className="h-20 md:h-16 mb-10">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentTagline}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-gray-300 text-lg leading-relaxed"
                    >
                      {taglines[currentTagline]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                
                {/* Feature Badges - Modern Style */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      variants={itemVariants}
                      custom={index}
                      className="group relative inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-thriveGreen/50 transition-all duration-300 cursor-default overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-thriveGreen/0 via-thriveGreen/10 to-thriveGreen/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                      <FaCheck className="mr-2 text-thriveGreen text-xs" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <motion.button
                    onClick={handleGetQuote}
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-200 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-thriveGreen/25 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Get Your Free Quote
                      <FaArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.button>
                  
                  <motion.button
                    onClick={scrollToServices}
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Our Services
                    <FaChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Metrics - Modern Style */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                      <motion.div
                        key={metric.label}
                        className="group relative cursor-pointer"
                        onClick={() => setCurrentMetric(index)}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-center">
                          <Icon className={`w-6 h-6 mx-auto mb-2 transition-all duration-300 ${
                            currentMetric === index ? 'text-thriveGreen scale-110' : 'text-gray-500 group-hover:text-gray-400'
                          }`} />
                          <div className={`text-2xl font-bold text-white mb-1 transition-all duration-300 ${
                            currentMetric === index ? 'text-thriveGreen' : 'group-hover:text-gray-200'
                          }`}>
                            {metric.value}
                            <span className="text-sm text-gray-400 ml-0.5">{metric.suffix}</span>
                          </div>
                          <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                          <div className="text-[10px] text-thriveGreen/60 opacity-0 group-hover:opacity-100 transition-opacity">
                            {metric.trend}
                          </div>
                        </div>
                        
                        {/* Animated Progress Bar */}
                        {currentMetric === index && (
                          <motion.div 
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-thriveGreen to-blue-400 rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Right Column - Image with Modern Effects */}
              <motion.div 
                variants={itemVariants}
                className="hidden lg:block relative"
              >
                <div className="relative group">
                  {/* Main Image Container with Glass Effect */}
                  <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl">
                    <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px]">
                      <Image
                        src="/images/hero-image.png"
                        alt="Business growth illustration"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  
                  {/* Floating Badge 1 */}
                  <motion.div 
                    className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">Active Clients</div>
                        <div className="text-sm font-bold text-thriveGreen">100+ Worldwide</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating Badge 2 */}
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-4"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">Client Rating</div>
                        <div className="text-sm font-bold text-thriveGreen">4.9/5 Stars</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge 3 */}
                  <motion.div 
                    className="absolute top-1/2 -right-8 bg-thriveGreen/90 backdrop-blur-md rounded-xl shadow-lg p-3"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-center">
                      <div className="text-xs font-bold text-black">TRUSTED</div>
                      <div className="text-[10px] text-black/80">Global Leader</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Modern Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={scrollToServices}
            className="flex flex-col items-center gap-2 group focus:outline-none"
          >
            <span className="text-[10px] text-gray-500 tracking-widest uppercase group-hover:text-gray-400 transition-colors">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </section>

      {/* Modern Modal with Glassmorphism */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="sticky top-0 bg-gray-900/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Get Your Free Quote
                  </h2>
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
                  <motion.div 
                    className="text-center py-12"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    <div className="w-16 h-16 bg-thriveGreen/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="w-8 h-8 text-thriveGreen" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quote Request Sent!</h3>
                    <p className="text-gray-400">
                      Thank you for reaching out! We'll get back to you within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <motion.div 
                        className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <p className="text-red-400 text-sm">{error}</p>
                      </motion.div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name <span className="text-thriveGreen">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address <span className="text-thriveGreen">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-thriveGreen transition-colors"
                        >
                          <option value="">Select business type</option>
                          <option value="startup">Startup</option>
                          <option value="small">Small Business</option>
                          <option value="medium">Medium Business</option>
                          <option value="enterprise">Enterprise</option>
                          <option value="nonprofit">Nonprofit</option>
                        </select>
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
                                ? 'bg-thriveGreen text-black'
                                : 'bg-white/5 text-gray-300 hover:bg-white/10'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors"
                          placeholder="City, Country"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-thriveGreen transition-colors"
                        >
                          <option value="">Select budget</option>
                          <option value="<5k">Less than $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-thriveGreen transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (ASAP)</option>
                          <option value="1-3">1-3 months</option>
                          <option value="3-6">3-6 months</option>
                          <option value="6+">6+ months</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Contact Method <span className="text-thriveGreen">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {contactMethods.map(method => {
                          const Icon = method.icon
                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, contactMethod: method.id }))}
                              className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200 ${
                                formData.contactMethod === method.id
                                  ? 'border-thriveGreen bg-thriveGreen/10'
                                  : 'border-white/10 bg-white/5 hover:bg-white/10'
                              }`}
                            >
                              <Icon className={`w-5 h-5 ${
                                formData.contactMethod === method.id ? 'text-thriveGreen' : 'text-gray-400'
                              }`} />
                              <span className="text-xs">{method.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {formData.contactMethod === 'whatsapp' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          WhatsApp Number <span className="text-thriveGreen">*</span>
                        </label>
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors"
                          placeholder="+1 234 567 8900"
                          required={formData.contactMethod === 'whatsapp'}
                        />
                      </motion.div>
                    )}

                    {formData.contactMethod === 'instagram' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Instagram Username <span className="text-thriveGreen">*</span>
                        </label>
                        <input
                          type="text"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors"
                          placeholder="@yourusername"
                          required={formData.contactMethod === 'instagram'}
                        />
                      </motion.div>
                    )}

                    {formData.contactMethod === 'twitter' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Twitter/X Username <span className="text-thriveGreen">*</span>
                        </label>
                        <input
                          type="text"
                          name="twitter"
                          value={formData.twitter}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors"
                          placeholder="@yourusername"
                          required={formData.contactMethod === 'twitter'}
                        />
                      </motion.div>
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-thriveGreen transition-colors resize-none"
                        placeholder="Tell us more about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-thriveGreen to-green-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-thriveGreen/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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