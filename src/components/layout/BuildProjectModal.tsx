'use client'

import { useState } from 'react'
import { MdAttachEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"

interface BuildProjectModalProps {
  onClose: () => void
  serviceType: string
  category: string
}

const BuildProjectModal = ({ onClose, serviceType, category }: BuildProjectModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    location: '',
    serviceInterest: serviceType,
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
      const emailSubject = `New Service Inquiry: ${serviceType} - ${formData.businessName || 'New Business'}`

      const emailBody = `
NEW BUSINESS SERVICE INQUIRY - SCALE WITH DESTINY

SERVICE DETAILS:
• Service Type: ${serviceType}
• Category: ${category}

BUSINESS INFORMATION:
• Contact Name: ${formData.name}
• Email: ${formData.email}
• Business Name: ${formData.businessName || 'Not provided'}
• Business Type: ${formData.businessType || 'Not specified'}
• Location: ${formData.location || 'Not specified'}

PROJECT REQUIREMENTS:
• Budget Range: ${formData.budget || 'Not specified'}
• Desired Timeline: ${formData.timeline || 'Not specified'}

CONTACT PREFERENCES:
• Preferred Method: ${formData.contactMethod.toUpperCase()}
${formData.contactMethod === 'whatsapp' ? `• WhatsApp: ${formData.whatsappNumber}` : ''}
${formData.contactMethod === 'instagram' ? `• Instagram: ${formData.instagram}` : ''}
${formData.contactMethod === 'twitter' ? `• Twitter/X: ${formData.twitter}` : ''}

ADDITIONAL MESSAGE:
${formData.message || 'No additional message'}

TIMESTAMP: ${new Date().toLocaleString()}
---
Submitted via Scale With Destiny Website - Service Quote Request
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
          businessName: '',
          businessType: '',
          location: '',
          serviceInterest: serviceType,
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

  const budgetOptions = [
    { value: '', label: 'Select budget range' },
    { value: 'Under $1,000', label: 'Under $1,000' },
    { value: '$1,000 - $3,000', label: '$1,000 - $3,000' },
    { value: '$3,000 - $5,000', label: '$3,000 - $5,000' },
    { value: '$5,000 - $10,000', label: '$5,000 - $10,000' },
    { value: '$10,000 - $20,000', label: '$10,000 - $20,000' },
    { value: '$20,000+', label: '$20,000+' },
    { value: 'Need consultation', label: 'Need consultation' }
  ]

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: 'ASAP (Within 1 week)', label: 'ASAP (Within 1 week)' },
    { value: 'Within 2-4 weeks', label: 'Within 2-4 weeks' },
    { value: '1-2 months', label: '1-2 months' },
    { value: '2-3 months', label: '2-3 months' },
    { value: '3+ months', label: '3+ months' },
    { value: 'Not sure', label: 'Not sure' }
  ]

  const contactMethods = [
    { id: 'email', label: 'Email', icon: <MdAttachEmail size={24} /> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <IoLogoWhatsapp size={24} /> },
    { id: 'instagram', label: 'Instagram', icon: <FaInstagramSquare size={24} /> },
    { id: 'twitter', label: 'Twitter/X', icon: <FaXTwitter size={24} /> }
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get Quote for {serviceType}</h2>
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
              {/* Service Info */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100">
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">Service Selected</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{serviceType}</p>
                    <p className="text-sm text-gray-600">{category}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white text-indigo-600 text-sm font-medium border border-indigo-200">
                    Quote Request
                  </span>
                </div>
              </div>

              {/* Business Information */}
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
                      name="businessName"
                      value={formData.businessName}
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

              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Location Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="City, Country (e.g., New York, USA)"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      We use this to tailor our services to your local market needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Project Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      {timelineOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
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
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Tell us more about your business needs, specific requirements, or any questions you have..."
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

export default BuildProjectModal