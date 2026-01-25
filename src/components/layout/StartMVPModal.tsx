'use client'

import { useState, useEffect } from 'react'

interface StartMVPModalProps {
  onClose: () => void
  initialData?: {
    projectType?: string
    category?: string
    isFoundingClient?: boolean
  }
}

const StartMVPModal = ({ onClose, initialData }: StartMVPModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    idea: '',
    budget: '',
    timeline: '',
    contactMethod: 'email',
    whatsappNumber: '',
    message: '',
    heardAboutUs: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (initialData?.projectType) {
      setFormData(prev => ({
        ...prev,
        idea: `I'm interested in building: ${initialData.projectType}`,
      }))
    }
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare email content
      const emailSubject = `New MVP Inquiry: ${formData.company || formData.name}`
      
      const emailBody = `
NEW MVP INQUIRY

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

ADDITIONAL INFO:
• Heard About Us: ${formData.heardAboutUs || 'Not specified'}

MESSAGE:
${formData.message || 'No additional message'}

TIMESTAMP: ${new Date().toLocaleString()}
---
Scale with Destiny MVP Inquiry
      `.trim()

      // Create mailto link with YOUR EMAIL
      const recipientEmail = 'hello.scalewithdestiny@gmail.com'
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
          message: '',
          heardAboutUs: ''
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
    { id: 'email', label: 'Email', icon: '✉️' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💬' }
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Start Your MVP Journey</h2>
            <p className="text-gray-600 text-sm">Tell us about your idea</p>
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

                <div className="grid md:grid-cols-2 gap-4">
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
                      <option value="not-sure">Not sure yet</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP (Within 1 month)</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="flexible">Flexible</option>
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
                      placeholder="Describe your MVP idea, target users, and what problem it solves..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
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
              </div>

              {/* Contact Preference */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Preference</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {contactMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
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
                      <span className="mr-2">{method.icon}</span>
                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>

                {/* WhatsApp Number Field */}
                {formData.contactMethod === 'whatsapp' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      required={formData.contactMethod === 'whatsapp'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                )}
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
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
                    Preparing Email...
                  </span>
                ) : (
                  'Send Inquiry via Email'
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

            {/* Privacy Notice */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Your information is secure. We'll respond within 24 hours.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default StartMVPModal