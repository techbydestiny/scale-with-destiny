'use client'

import { useState } from 'react'

import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

interface StartMVPModalProps {
  onClose: () => void
}

const StartMVPModal = ({ onClose }: StartMVPModalProps) => {
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
      console.log('Form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      // Reset and close after 3 seconds
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
      }, 3000)

    } catch (error) {
      console.error('Error submitting form:', error)
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
    { id: 'email', label: 'Email', icon: <MdAttachEmail size={26}/> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <IoLogoWhatsapp size={26}/> },
    { id: 'instagram', label: 'Instagram', icon: <FaInstagramSquare size={26}/> },
    { id: 'twitter', label: 'Twitter/X', icon: <FaXTwitter size={26}/> }
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

        {/* Success Message */}
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              We've received your information and will reach out to you within 24 hours via your preferred method.
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              Closing in 3 seconds...
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

            {/* Form Actions */}
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
                    Submitting...
                  </span>
                ) : (
                  'Submit & Start Conversation'
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
            <p className="mt-6 text-xs text-gray-500 text-center">
              By submitting this form, you agree to our Privacy Policy. We'll never share your information without permission.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default StartMVPModal