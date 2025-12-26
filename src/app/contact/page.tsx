'use client'

import { useState } from 'react'
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsWhatsapp } from 'react-icons/bs';
import { TiMediaPlayReverse } from 'react-icons/ti';
import { TfiTwitter } from 'react-icons/tfi';
import { DiGithub } from 'react-icons/di';

export default function ContactPage() {
    const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    urgency: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Contact form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          urgency: 'normal'
        })
      }, 5000)

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

  const contactInfo = [
    {
      icon: <MdAttachEmail size={24}/>,
      title: 'Email',
      details: ['hello@scalewithdestiny.com', 'responses within 24 hours'],
      action: 'mailto:hello@scalewithdestiny.com'
    },
    {
      icon: <BsWhatsapp size={24}/>,
      title: 'WhatsApp',
      details: ['+1 (555) 123-4567', 'Quick chat for urgent inquiries'],
      action: 'https://wa.me/15551234567'
    },
    {
      icon: <TiMediaPlayReverse size={24}/>,
      title: 'Hours',
      details: ['Mon-Fri: 9AM-6PM PST', 'Weekends by appointment'],
      action: '#'
    }
  ]

  const socialLinks = [
    { platform: 'Twitter', handle: '@scalewithdestiny', url: 'https://twitter.com/scalewithdestiny', icon: <TfiTwitter size={24}/> },
    { platform: 'LinkedIn', handle: 'Scale with Destiny', url: 'https://linkedin.com/company/scalewithdestiny', icon: 'in' },
    { platform: 'Instagram', handle: '@scalewithdestiny', url: 'https://instagram.com/scalewithdestiny', icon: <FaInstagramSquare size={24}/> },
    { platform: 'GitHub', handle: 'scalewithdestiny', url: 'https://github.com/scalewithdestiny', icon: <DiGithub size={24}/> }
  ]

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                GET IN TOUCH
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Let's build your{' '}
                <span className="relative">
                  <span className="text-black">destiny</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-400 to-transparent rounded-full" />
                </span>{' '}
                together
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Have questions about our process? Ready to start your MVP? 
                Reach out—we're here to help turn your vision into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold mb-8">Ways to Connect</h2>
                  
                  {/* Contact Cards */}
                  <div className="space-y-6 mb-12">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="group block p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{info.icon}</div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-black transition-colors">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Follow Our Journey</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
                        >
                          <span className="text-xl">{social.icon}</span>
                          <div className="text-left">
                            <div className="font-medium text-sm">{social.platform}</div>
                            <div className="text-xs text-gray-500">{social.handle}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* FAQ Quick Links */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Quick Answers</h3>
                    <div className="space-y-3">
                      {[
                        'How much does an MVP cost?',
                        'What\'s your typical timeline?',
                        'Do you work with non-technical founders?',
                        'Can you help with funding?'
                      ].map((question, idx) => (
                        <a
                          key={idx}
                          href="/faq"
                          className="block text-gray-600 hover:text-black transition-colors text-sm"
                        >
                          {question} →
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12">
                  {/* Success Message */}
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                        <p className="text-gray-600">
                          Fill out the form below and we'll get back to you as soon as possible. 
                          For urgent matters, consider using WhatsApp for faster response.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Company/Project
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                              placeholder="Startup Name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Urgency
                            </label>
                            <select
                              name="urgency"
                              value={formData.urgency}
                              onChange={handleChange}
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                            >
                              <option value="normal">Normal Priority</option>
                              <option value="urgent">Urgent (1-2 days)</option>
                              <option value="asap">ASAP (Same day)</option>
                            </select>
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="What would you like to discuss?"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Your Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="Tell us about your project, questions, or ideas..."
                          />
                        </div>

                        {/* Form Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
                                Sending...
                              </span>
                            ) : (
                              'Send Message'
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({
                                name: '',
                                email: '',
                                company: '',
                                subject: '',
                                message: '',
                                urgency: 'normal'
                              })
                            }}
                            className="py-4 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-colors"
                          >
                            Clear Form
                          </button>
                        </div>

                        {/* Privacy Notice */}
                        <p className="text-xs text-gray-500 text-center pt-4">
                          By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                          We respect your privacy and will never share your information.
                        </p>
                      </form>
                    </>
                  )}
                </div>

                {/* Team Availability */}
                <div className="mt-12 bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Team Availability</h3>
                      <p className="text-gray-300">
                        Currently accepting 2-3 new projects for Q1 {currentYear}.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center text-sm font-bold"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-lg font-bold">4 team members</div>
                        <div className="text-sm text-gray-400">Ready to work on your project</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Promise */}
                <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">Our Response Promise</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          Initial response within 24 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          Free strategy call within 48 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-500" />
                          Detailed proposal within 72 hours
                        </li>
                      </ul>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">24h</div>
                      <div className="text-sm text-gray-500">Response time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Quick answers to common questions about working with us
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: 'How much does an MVP typically cost?',
                    a: 'MVP costs range from $15,000 to $50,000 depending on complexity, features, and timeline. We provide fixed-price quotes after our strategy session.'
                  },
                  {
                    q: 'What\'s your typical timeline?',
                    a: 'Most MVPs take 60-90 days from kickoff to launch. This includes design, development, testing, and deployment.'
                  },
                  {
                    q: 'Do you work with non-technical founders?',
                    a: 'Absolutely! We specialize in guiding non-technical founders through the entire process, from idea validation to technical execution.'
                  },
                  {
                    q: 'Can you help with funding or investors?',
                    a: 'No, but we help prepare investor materials, create pitch decks, and educate you on how and where to find investors.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-sm transition-shadow">
                    <h3 className="font-semibold mb-3">{faq.q}</h3>
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-black font-semibold hover:underline"
                >
                  View all FAQs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}