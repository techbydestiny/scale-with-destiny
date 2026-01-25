'use client'

import { useState } from 'react'
import { MdAttachEmail, MdLocationOn, MdAccessTime } from "react-icons/md"
import { BsWhatsapp } from 'react-icons/bs'
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe, FaHeadset, FaChartLine } from "react-icons/fa"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    location: '',
    serviceInterest: '',
    budget: '',
    timeline: '',
    message: '',
    urgency: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    // Validation
    if (!formData.name || !formData.email || !formData.location || !formData.serviceInterest || !formData.message) {
      setError('Please fill in all required fields (*)')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Prepare EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        business_name: formData.businessName,
        business_type: formData.businessType,
        location: formData.location,
        services: formData.serviceInterest,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        urgency: formData.urgency,
        submitted_at: new Date().toLocaleString(),
        timestamp: new Date().toISOString()
      }

      // Send email via EmailJS
      const response =  await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      console.log('EmailJS Success:', response)
      
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          businessName: '',
          businessType: '',
          location: '',
          serviceInterest: '',
          budget: '',
          timeline: '',
          message: '',
          urgency: 'normal'
        })
      }, 5000)

    } catch (error) {
      console.error('EmailJS Error:', error)
      setError('Failed to send message. Please try again or contact us directly.')
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
      details: ['hello.scalewithdestiny@gmail.com', 'Responses within 24 hours'],
      action: 'mailto:hello.scalewithdestiny@gmail.com',
      color: 'from-blue-50 to-cyan-100'
    },
    {
      icon: <BsWhatsapp size={24}/>,
      title: 'WhatsApp',
      details: ['+234 (806) 280-4129', 'Quick chat for urgent inquiries'],
      action: 'https://wa.me/2348062804129',
      color: 'from-green-50 to-emerald-100'
    },
    {
      icon: <FaGlobe size={24}/>,
      title: 'Global Support',
      details: ['24/7 availability', 'All time zones covered'],
      action: '#',
      color: 'from-indigo-50 to-purple-100'
    }
  ]

  const socialLinks = [
    { platform: 'Twitter', handle: '@scalewthdestiny', url: 'https://twitter.com/scalewthdestiny', icon: <FaTwitter size={20}/> },
    { platform: 'LinkedIn', handle: 'Scale with Destiny', url: 'https://linkedin.com/company/scalewithdestiny', icon: <FaLinkedinIn size={20}/> },
    { platform: 'Instagram', handle: '@_scalewithdestiny', url: 'https://instagram.com/_scalewithdestiny', icon: <FaInstagram size={20}/> }
  ]

  const serviceOptions = [
    'Web Design & Development',
    'SEO Optimization',
    'Google Business Setup',
    'Business Consulting',
    'Light Marketing',
    'E-commerce Setup',
    'Other'
  ]

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000+',
    'Need consultation'
  ]

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100 text-sm font-medium text-indigo-600 mb-6">
                <FaGlobe size={16} />
                GLOBAL BUSINESS CONNECTIONS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Let's Scale Your Business{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Worldwide</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-cyan-500 to-transparent rounded-full" />
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Ready to transform your business with professional web design, SEO, and business setup solutions? 
                Connect with our global team and get a personalized strategy for your local market.
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
                  <h2 className="text-2xl font-bold mb-8 text-gray-900">Connect With Our Global Team</h2>
                  
                  {/* Contact Cards */}
                  <div className="space-y-6 mb-12">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`group block p-6 bg-gradient-to-br ${info.color} border border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-300 transition-all duration-300`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl text-gray-700 group-hover:text-indigo-600 transition-colors">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-900 transition-colors">
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

                  {/* Global Coverage */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl border border-indigo-100">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MdLocationOn className="text-indigo-600" />
                      Global Coverage
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        North America
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        Europe
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        Asia Pacific
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        Middle East & Africa
                      </li>
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-gray-900">Follow Our Journey</h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                          aria-label={social.platform}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'View Our Services', href: '/services' },
                        { label: 'See Our Process', href: '/process' },
                        { label: 'Global Reach', href: '/global-reach' },
                        { label: 'Get Free Website Audit', href: '/contact?audit=true' }
                      ].map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="block text-gray-600 hover:text-indigo-600 transition-colors text-sm flex items-center gap-2"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12">
                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-red-700">{error}</span>
                      </div>
                    </div>
                  )}

                  {/* Success Message */}
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Message Sent!</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Thank you for reaching out via EmailJS. We'll get back to you within 24 hours with a personalized strategy for your business.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Get Your Free Business Consultation</h2>
                        <p className="text-gray-600">
                          Tell us about your business and goals. We'll provide a customized strategy 
                          to help you establish your digital presence and grow in your local market.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Business Info */}
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Business Name
                            </label>
                            <input
                              type="text"
                              name="businessName"
                              value={formData.businessName}
                              onChange={handleChange}
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="Your Business Name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Business Type
                            </label>
                            <input
                              type="text"
                              name="businessType"
                              value={formData.businessType}
                              onChange={handleChange}
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="e.g., Restaurant, Retail, Service"
                            />
                          </div>
                        </div>

                        {/* Location & Services */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Location *
                            </label>
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="City, Country"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Service Interest *
                            </label>
                            <select
                              name="serviceInterest"
                              value={formData.serviceInterest}
                              onChange={handleChange}
                              required
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                              <option value="">Select a service</option>
                              {serviceOptions.map((service) => (
                                <option key={service} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Budget & Timeline */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Budget Range
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                              <option value="">Select budget</option>
                              {budgetOptions.map((budget) => (
                                <option key={budget} value={budget}>
                                  {budget}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Timeline
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                              <option value="">Select timeline</option>
                              <option value="ASAP">ASAP (Within 1 week)</option>
                              <option value="2-4 weeks">2-4 weeks</option>
                              <option value="1-2 months">1-2 months</option>
                              <option value="2-3 months">2-3 months</option>
                              <option value="Flexible">Flexible</option>
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Tell Us About Your Business Goals *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Describe your business, current challenges, and what you hope to achieve with our services..."
                          />
                        </div>

                        {/* Urgency */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Urgency Level
                          </label>
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          >
                            <option value="normal">Normal Priority</option>
                            <option value="urgent">Urgent (1-2 days)</option>
                            <option value="asap">ASAP (Same day)</option>
                          </select>
                        </div>

                        {/* Form Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
                                Sending...
                              </span>
                            ) : (
                              'Get Free Business Consultation'
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({
                                name: '',
                                email: '',
                                businessName: '',
                                businessType: '',
                                location: '',
                                serviceInterest: '',
                                budget: '',
                                timeline: '',
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

                {/* Global Team Availability */}
                <div className="mt-12 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Global Team Availability</h3>
                      <p className="text-white/90">
                        Currently accepting projects for businesses in 30+ countries.
                        <span className="block mt-2 flex items-center gap-2">
                          <FaHeadset />
                          <span className="text-sm">24/7 support across all time zones</span>
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-sm font-bold"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-lg font-bold">Global Experts</div>
                        <div className="text-sm text-white/80">Specialists in local markets</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Promise */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                        <MdAccessTime className="text-green-600" size={20} />
                      </div>
                      <h4 className="font-semibold">24-Hour Response</h4>
                    </div>
                    <p className="text-sm text-gray-600">Initial response within 24 hours, guaranteed.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <FaChartLine className="text-blue-600" size={20} />
                      </div>
                      <h4 className="font-semibold">Free Analysis</h4>
                    </div>
                    <p className="text-sm text-gray-600">Free website & SEO audit with every consultation.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                        <FaGlobe className="text-purple-600" size={20} />
                      </div>
                      <h4 className="font-semibold">Local Expertise</h4>
                    </div>
                    <p className="text-sm text-gray-600">Market-specific strategies for your region.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Quick answers about our global business services
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: 'How quickly can you start working on my project?',
                    a: 'We can typically begin within 1-2 weeks of project confirmation. For urgent needs, we offer expedited onboarding.'
                  },
                  {
                    q: 'Do you work with businesses outside your home country?',
                    a: 'Absolutely! We serve businesses in 30+ countries and specialize in adapting solutions for local markets worldwide.'
                  },
                  {
                    q: 'What\'s included in a website audit?',
                    a: 'Our free audit includes SEO analysis, performance review, UX evaluation, and competitive benchmarking for your local market.'
                  },
                  {
                    q: 'Can you help with local payment integration?',
                    a: 'Yes, we specialize in integrating region-specific payment gateways like Alipay, Mercado Pago, and local bank transfers.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-sm transition-shadow hover:border-indigo-200">
                    <h3 className="font-semibold mb-3 text-gray-900">{faq.q}</h3>
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700"
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