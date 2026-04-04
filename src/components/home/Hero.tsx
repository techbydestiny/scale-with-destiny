'use client'

import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";

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

const heroImage = '/images/hero-image.png'

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

const Hero = ({ onGetQuote }: { onGetQuote?: () => void }) => {
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
  }

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

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Replace with your actual image path
  const heroImage = '/images/hero-image.png'

  return (
    <>
      {/* Dark Minimal Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-black">
        {/* Dark Gradient Background */}
        <div className="absolute inset-0">
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Subtle noise texture */}

          
          {/* Accent glow */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-thriveGreen/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-thriveGreen/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div>
                {/* Minimal Eyebrow */}
                <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-1000 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-thriveGreen" />
                  <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">
                    Digital Solutions
                  </span>
                </div>
                
                {/* Main Headline */}
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-1000 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <span className="text-white block">Scale Your</span>
                  <span className="text-white block">
                    Business{' '}
                    <span className="bg-gradient-to-r from-thriveGreen to-blue-400 bg-clip-text text-transparent">
                      Worldwide
                    </span>
                  </span>
                </h1>
                
                {/* Animated Subheadline */}
                <div className="h-20 md:h-16 mb-8">
                  <div className="relative h-full">
                    {taglines.map((tagline, index) => (
                      <p
                        key={index}
                        className={`absolute top-0 left-0 text-gray-400 text-lg leading-relaxed transition-all duration-500 ${
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
                
                {/* Feature Badges - Minimal Style */}
                <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-300 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  {features.map((feature, index) => (
                    <div
                      key={feature}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-thriveGreen/50 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="mr-2 text-thriveGreen">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-500 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <button
                    onClick={handleGetQuote}
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-thriveGreen text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-thriveGreen/25 hover:scale-[1.02]"
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
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </button>
                  
                  <button
                    onClick={scrollToServices}
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  >
                    View Our Services
                  </button>
                </div>

                {/* Metrics - Minimal Style */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 transition-all duration-1000 delay-700 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  {metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className="text-center cursor-pointer group"
                      onClick={() => setCurrentMetric(index)}
                    >
                      <div className={`text-3xl font-bold text-white mb-1 transition-all duration-300 group-hover:text-thriveGreen ${
                        currentMetric === index ? 'text-thriveGreen scale-105' : ''
                      }`}>
                        {metric.value}
                        <span className="text-sm text-gray-400 ml-0.5">{metric.suffix}</span>
                      </div>
                      <div className={`text-xs text-gray-500 tracking-wide transition-colors group-hover:text-gray-400 ${
                        currentMetric === index ? 'text-thriveGreen' : ''
                      }`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className={`hidden lg:block transition-all duration-1000 delay-500 ${
                loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] bg-gradient-to-br from-indigo-100 to-cyan-100">
                   
                      <Image
                        src={heroImage}
                        alt="Business growth illustration"
                        fill
                        className="object-cover"
                        priority
                      /> 
          
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-xs">
                          <Image
                          src={heroImage}
                          alt="Business growth illustration"
                          fill
                          className="object-top object-contain"
                          priority
                        /> 
                        </div>
                      </div>
                    </div>
                    
                    {/* Optional: Add a decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-2xl opacity-30 -z-10" />
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur-2xl opacity-30 -z-10" />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-bounce">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-medium text-gray-700">100+ Clients Worldwide</span>
                    </div>
                  </div>
                  
                  {/* Second Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500 text-lg"><FaStar  size={20}/></span>
                      <span className="text-xs font-medium text-gray-700">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Minimal Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 group focus:outline-none"
          >
            <span className="text-[10px] text-gray-600 tracking-widest uppercase group-hover:text-gray-400 transition-colors">
              Scroll
            </span>
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Modal (Keep the same with dark theme adjustments) */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
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

            {/* Rest of the modal with dark theme - same as before but with dark colors */}
            {/* ... keep the form content from your original modal with dark styling ... */}
          </div>
        </div>
      )}
    </>
  )
}

export default Hero