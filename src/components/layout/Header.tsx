'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MdAttachEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Global Reach', href: '/global-reach' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false) // Close mobile menu on route change
  }, [pathname])

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center gap-2"
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  Scale With Destiny
                </span>
                <span className="text-xs text-gray-500 font-medium group-hover:text-indigo-500 transition-colors">
                  Global Business Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative ${
                      isActive 
                        ? 'text-indigo-600' 
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
                    )}
                  </Link>
                )
              })}
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 active:scale-95"
              >
                Get Free Quote
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="pt-3 border-t border-gray-100 mt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setQuoteModalOpen(true)
                    }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-3.5 rounded-lg font-medium text-center hover:shadow-lg transition-all active:scale-95"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Quote Modal */}
      {quoteModalOpen && (
        <QuoteModal onClose={() => setQuoteModalOpen(false)} />
      )}
    </>
  )
}

// Quote Modal Component - UPDATED FOR BUSINESS SERVICES
const QuoteModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    businessType: '',
    location: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    contactMethod: 'email',
    whatsappNumber: '',
    instagram: '',
    twitter: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    'Web Design & Development',
    'SEO Optimization',
    'Google Business Setup',
    'Social Media Management',
    'Email Marketing',
    'Content Creation',
    'Business Consulting',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare email content
      const emailSubject = `New Business Quote Request from ${formData.name} - ${formData.company || 'New Business'}`

      const emailBody = `
NEW BUSINESS QUOTE REQUEST - SCALE WITH DESTINY

CONTACT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}
• Business Type: ${formData.businessType || 'Not specified'}
• Location: ${formData.location || 'Not specified'}

SERVICES REQUESTED:
${formData.services.length > 0 
  ? formData.services.map(service => `• ${service}`).join('\n') 
  : '• Not specified'}

PROJECT DETAILS:
• Budget Range: ${formData.budget || 'Not specified'}
• Timeline: ${formData.timeline || 'Not specified'}

CONTACT PREFERENCES:
• Preferred Method: ${formData.contactMethod.toUpperCase()}
${formData.contactMethod === 'whatsapp' ? `• WhatsApp: ${formData.whatsappNumber}` : ''}
${formData.contactMethod === 'instagram' ? `• Instagram: ${formData.instagram}` : ''}
${formData.contactMethod === 'twitter' ? `• Twitter/X: ${formData.twitter}` : ''}

ADDITIONAL MESSAGE:
${formData.message || 'No additional message'}

TIMESTAMP: ${new Date().toLocaleString()}
---
Submitted via Scale With Destiny Website - Business Services Quote
      `.trim()

      // YOUR EMAIL - UPDATE THIS
      const recipientEmail = 'hello@scalewithdestiny.com'
      
      // Create mailto link
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      
      // Open user's email client
      window.location.href = mailtoLink
      
      setIsSubmitted(true)
      
      // Reset form and close after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          businessType: '',
          location: '',
          services: [],
          budget: '',
          timeline: '',
          contactMethod: 'email',
          whatsappNumber: '',
          instagram: '',
          twitter: '',
          message: ''
        })
        onClose()
      }, 5000)

    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
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
      const newServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
      return { ...prev, services: newServices }
    })
  }

  const contactMethods = [
    { id: 'email', label: 'Email', icon: <MdAttachEmail size={24}/> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <IoLogoWhatsapp size={24}/> },
    { id: 'instagram', label: 'Instagram', icon: <FaInstagramSquare size={24}/>},
    { id: 'twitter', label: 'Twitter/X', icon: <FaXTwitter size={24}/> }
  ]

  return (
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

        {/* Success Message */}
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Check Your Email!</h3>
            <p className="text-gray-600 mb-4">
              We've opened your email client with your quote request details.
            </p>
            <p className="text-gray-600 mb-6">
              Just hit <strong>"Send"</strong> to submit your request. We'll respond within 24 hours.
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              This window will close in 5 seconds...
            </div>
          </div>
        ) : (
          /* Form */
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
                className="flex-1 py-4 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Opening Email...
                  </span>
                ) : (
                  'Open Email & Send Request'
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
                <strong>How this works:</strong> We'll open your email client with a pre-filled quote request.
                Just hit "Send" and we'll get back to you with a custom proposal within 24 hours.
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
  )
}