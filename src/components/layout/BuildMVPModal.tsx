'use client'

import { useState } from 'react'

interface BuildMVPModalProps {
  onClose: () => void
  projectType: string
  category: string
}

const BuildMVPModal = ({ onClose, projectType, category }: BuildMVPModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: '8-10 weeks',
    budget: '$8-15K',
    message: '',
    contactMethod: 'email',
    heardAboutUs: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // AFFORDABLE Pricing for new agency
  const pricingTiers = [
    { 
      value: '$8-15K', 
      label: 'Starter MVP', 
      description: 'Basic features • 6-8 weeks • Perfect for validation',
      features: ['Core functionality', 'Basic UI/UX', 'Essential features']
    },
    { 
      value: '$15-25K', 
      label: 'Growth MVP', 
      description: 'Full features • 8-10 weeks • Ready for launch',
      features: ['Enhanced UI/UX', 'Advanced features', 'Admin dashboard']
    },
    { 
      value: '$25-35K', 
      label: 'Premium MVP', 
      description: 'Complete solution • 10-12 weeks • Investor-ready',
      features: ['Custom design', 'All features', 'Scalable architecture']
    }
  ]

  const timelineOptions = [
    { value: '6-8 weeks', label: 'Fast Track (6-8 weeks)' },
    { value: '8-10 weeks', label: 'Standard (8-10 weeks)' },
    { value: '10-12 weeks', label: 'Comprehensive (10-12 weeks)' }
  ]

  const heardAboutUsOptions = [
    'Google Search',
    'LinkedIn',
    'Twitter/X',
    'Instagram',
    'Referral',
    'YouTube',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const recipientEmail = 'your-email@gmail.com' // CHANGE TO YOUR EMAIL
      const emailSubject = `MVP Quote: ${projectType} - ${formData.company || formData.name}`
      
      const emailBody = `
🏗️ MVP QUOTE REQUEST

PROJECT DETAILS:
• Project: ${projectType}
• Category: ${category}
• Selected Package: ${formData.budget}
• Preferred Timeline: ${formData.timeline}

CLIENT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}
• Heard About Us: ${formData.heardAboutUs || 'Not specified'}

CONTACT PREFERENCE:
• Method: ${formData.contactMethod}

ADDITIONAL NOTES:
${formData.message || 'No additional notes'}

TIMESTAMP: ${new Date().toLocaleString()}
---
Sent via Scale with Destiny Project Quote Form
      `.trim()

      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      
      window.location.href = mailtoLink
      
      setIsSubmitted(true)
      
      setTimeout(() => {
        setIsSubmitted(false)
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">Get Your Quote</h2>
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
          <p className="text-gray-600 text-sm">
            Get a detailed quote for your <strong className="text-black">{projectType}</strong>
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Check Your Email!</h3>
            <p className="text-gray-600 mb-4">
              We've opened your email client with your quote request.
            </p>
            <p className="text-gray-600 mb-6">
              Just hit <strong>"Send"</strong> and we'll get back to you with a detailed proposal within 24 hours.
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              Closing in 5 seconds...
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Project Summary */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-lg">{projectType}</div>
                    <div className="text-sm text-gray-600 mt-1">{category}</div>
                    <div className="text-xs text-gray-500 mt-2">Starting at $8,000</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-700">3 Packages</div>
                    <div className="text-xs text-gray-500">Choose what fits your needs</div>
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="space-y-4">
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
                      Email *
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
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your Startup"
                  />
                </div>
              </div>

              {/* Pricing Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Choose Your Package</h3>
                <div className="space-y-3">
                  {pricingTiers.map((tier) => (
                    <label
                      key={tier.value}
                      className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.budget === tier.value
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          name="budget"
                          value={tier.value}
                          checked={formData.budget === tier.value}
                          onChange={handleChange}
                          className="mt-1 mr-3"
                          required
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold">{tier.label}</div>
                              <div className="text-sm opacity-90 mt-1">{tier.description}</div>
                            </div>
                            <div className="text-xl font-bold">{tier.value}</div>
                          </div>
                          <div className="mt-3 text-sm">
                            <span className="font-medium">Includes:</span> {tier.features.join(' • ')}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline & Source */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    {timelineOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you find us?
                  </label>
                  <select
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    {heardAboutUsOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Preferred Contact Method</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['email', 'whatsapp'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.contactMethod === method
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Any specific requirements or questions?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us about specific features, integrations, or timeline concerns..."
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Preparing Quote...
                  </span>
                ) : (
                  'Get Detailed Quote'
                )}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>

            {/* Guarantee */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fixed pricing • No hidden fees • 100% satisfaction</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default BuildMVPModal