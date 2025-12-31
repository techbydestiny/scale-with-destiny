'use client'

import { useState } from 'react'

interface FoundingClientModalProps {
  onClose: () => void
}

const FoundingClientModal = ({ onClose }: FoundingClientModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectIdea: '',
    timeline: '',
    currentStage: '',
    funding: '',
    message: '',
    contactMethod: 'email'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const benefits = [
    '30% off standard rates (limited time)',
    'Priority access to our founding team',
    'Extended 90-day post-launch support',
    'Featured case study on our website',
    'Direct access to agency founder',
    'Co-marketing opportunities'
  ]

  const currentStageOptions = [
    'Idea stage (just starting)',
    'Validation stage (testing idea)',
    'Ready to build (validated idea)',
    'Seeking investors',
    'Post-MVP scaling'
  ]

  const fundingOptions = [
    'Bootstrapped',
    'Friends & Family',
    'Angel investment',
    'Pre-seed funding',
    'Seed funding',
    'Not funded yet'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const recipientEmail = 'your-email@gmail.com' // CHANGE TO YOUR EMAIL
      const emailSubject = `Founding Client Application: ${formData.company || formData.name}`
      
      const emailBody = `
🎯 FOUNDING CLIENT APPLICATION

APPLICANT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}

PROJECT DETAILS:
• Project Idea: ${formData.projectIdea}
• Current Stage: ${formData.currentStage}
• Funding Status: ${formData.funding}
• Preferred Timeline: ${formData.timeline}

CONTACT PREFERENCE:
• Method: ${formData.contactMethod}

ADDITIONAL MESSAGE:
${formData.message || 'No additional message'}

TIMESTAMP: ${new Date().toLocaleString()}
---
FOUNDING CLIENT BENEFITS REQUESTED:
• 30% discounted rate
• Priority access & support
• Featured case study
• Founder-level partnership

Sent via Scale with Destiny Founding Client Application
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
            <div>
              <h2 className="text-2xl font-bold">Become a Founding Client</h2>
              <div className="inline-flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                  LIMITED SPOTS
                </span>
                <span className="text-sm text-gray-600">3 spots remaining</span>
              </div>
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
          <p className="text-gray-600 text-sm mt-2">
            Apply for exclusive founding client benefits and rates
          </p>
        </div>

        {/* Benefits Section */}
        <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-yellow-200">
          <h3 className="font-bold text-lg mb-3">🎁 Founding Client Benefits</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-800">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Success Message */}
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Application Sent!</h3>
            <p className="text-gray-600 mb-4">
              We've opened your email client with your founding client application.
            </p>
            <p className="text-gray-600 mb-6">
              Just hit <strong>"Send"</strong> and we'll review your application within 24 hours.
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              Closing in 5 seconds...
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
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
                    Company/Project Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your Startup"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project idea *
                  </label>
                  <textarea
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Describe your MVP idea, target users, and problem you're solving..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Stage *
                    </label>
                    <select
                      name="currentStage"
                      value={formData.currentStage}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select stage</option>
                      {currentStageOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Funding Status *
                    </label>
                    <select
                      name="funding"
                      value={formData.funding}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select status</option>
                      {fundingOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timeline *
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="e.g., 3 months, ASAP, flexible"
                  />
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <h3 className="text-lg font-semibold mb-3">How should we contact you? *</h3>
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
                        required
                      />
                      <span className="capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why should we choose you as a founding client?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us about your vision, team, or what makes your project special..."
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  'Apply for Founding Client Spot'
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

            {/* Terms */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Applications reviewed within 24 hours. Limited to 3 founding client spots.
                <br />
                By applying, you agree to our terms and privacy policy.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default FoundingClientModal