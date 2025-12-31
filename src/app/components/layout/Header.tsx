'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const navigation = [
  { name: 'Process', href: '#process' },
  { name: 'Work', href: '#work' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [startModalOpen, setStartModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-80"
            >
              <span className="text-gray-600">Scale with</span>
              <span className="font-bold text-black">Destiny</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-black cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => setStartModalOpen(true)}
                className="rounded-full cursor-pointer bg-black px-5 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:scale-105"
              >
                Start Your MVP
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
            <div className="md:hidden border-t border-gray-100 py-4 animate-slide-down">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-base font-medium text-gray-700 transition-colors hover:text-black py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setStartModalOpen(true)
                  }}
                  className="rounded-full bg-black px-5 py-3 text-base font-medium text-white text-center transition-colors hover:bg-gray-800 mt-4"
                >
                  Start Your MVP
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Start MVP Modal */}
      {startModalOpen && (
        <StartMVPModal onClose={() => setStartModalOpen(false)} />
      )}
    </>
  )
}

// Start MVP Modal Component - UPDATED TO SEND TO EMAIL
const StartMVPModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    idea: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare email content
      const emailSubject = `New MVP Inquiry from ${formData.name} - ${formData.company || 'No Company'}`

      const emailBody = `
NEW MVP INQUIRY - SCALE WITH DESTINY

CONTACT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Company/Project: ${formData.company || 'Not provided'}

PROJECT DETAILS:
• Idea: ${formData.idea}
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
Submitted via Scale with Destiny Website
      `.trim()

      // YOUR EMAIL - UPDATE THIS
      const recipientEmail = 'hello.scalewithdestiny@gmail.com'
      
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
          idea: '',
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
            <h2 className="text-2xl font-bold">Start Your MVP Journey</h2>
            <p className="text-gray-600 text-sm">Tell us about your idea and how you'd like to connect</p>
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

        {/* Success Message - UPDATED */}
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Check Your Email!</h3>
            <p className="text-gray-600 mb-4">
              We've opened your email client with a pre-filled message.
            </p>
            <p className="text-gray-600 mb-6">
              Just hit <strong>"Send"</strong> to submit your inquiry to us.
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
                <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Project Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Startup Name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      <option value="$5k-10k">$5,000 - $10,000</option>
                      <option value="$10k-25k">$10,000 - $25,000</option>
                      <option value="$25k-50k">$25,000 - $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your idea *
                    </label>
                    <textarea
                      name="idea"
                      value={formData.idea}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Describe your SaaS/MVP idea..."
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP (Within 1 month)</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="2-3 months">2-3 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Preference */}
              <div>
                <h3 className="text-lg font-semibold mb-4">How would you like us to reach you? *</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {contactMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.contactMethod === method.id
                          ? 'border-black bg-black text-white'
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="@username"
                    />
                  </div>
                )}
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anything else you'd like to share?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Questions, concerns, or additional details..."
                />
              </div>
            </div>

            {/* Form Actions - UPDATED BUTTON TEXT */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-4 px-6 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  'Open Email & Send Inquiry'
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

            {/* Privacy Notice - UPDATED */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-600 text-center">
                <strong>How this works:</strong> When you click submit, we'll open your email client with a pre-filled message. 
                Just hit "Send" to submit your inquiry to us. We'll respond within 24 hours.
                <br />
                <span className="block mt-1">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}