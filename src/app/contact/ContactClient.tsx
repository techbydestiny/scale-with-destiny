'use client'

import { useState } from 'react'
import { 
  MdAttachEmail, 
  MdLocationOn, 
  MdAccessTime 
} from "react-icons/md"
import { BsWhatsapp } from 'react-icons/bs'
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaGlobe, 
  FaHeadset, 
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa"
import emailjs from '@emailjs/browser'

export default function ContactClient() {
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
    
    if (!formData.name || !formData.email || !formData.location || !formData.serviceInterest || !formData.message) {
      setError('Please fill in all required fields (*)')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
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

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      setIsSubmitted(true)
      setIsSubmitting(false)
      
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
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: <MdAttachEmail size={24}/>,
      title: 'Email',
      details: ['hello@scalewithdestiny.com', 'Responses within 24 hours'],
      action: 'mailto:hello@scalewithdestiny.com',
    },
    {
      icon: <BsWhatsapp size={24}/>,
      title: 'WhatsApp',
      details: ['+234 (806) 280-4129', 'Quick chat for urgent inquiries'],
      action: 'https://wa.me/2348062804129',
    },
    {
      icon: <FaGlobe size={24}/>,
      title: 'Global Support',
      details: ['24/7 availability', 'All time zones covered'],
      action: '#',
    }
  ]

  const socialLinks = [
    { platform: 'Twitter', handle: '@scalewithdestiny', url: 'https://twitter.com/scalewithdestiny', icon: <FaTwitter size={20}/> },
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
      {/* H1 for SEO - Hidden visually but accessible to search engines */}
      <h1 className="sr-only">Contact Scale With Destiny | Free Business Consultation & Website Audit</h1>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 text-sm font-medium text-blue-600 mb-6">
                <FaGlobe size={16} />
                GLOBAL BUSINESS CONNECTIONS
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Let's Scale Your Business{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Worldwide</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-transparent rounded-full" />
                </span>
              </h2>
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
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">Connect With Our Global Team</h3>
                  
                  <div className="space-y-6 mb-12">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="group block p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2 group-hover:text-gray-900 transition-colors">
                              {info.title}
                            </h4>
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
                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MdLocationOn className="text-blue-600" />
                      Global Coverage
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <a href="/usa" className="hover:text-blue-600">North America (USA, Canada)</a>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <a href="/united-kingdom" className="hover:text-blue-600">Europe (UK, EU)</a>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <a href="/australia" className="hover:text-blue-600">Asia Pacific (Australia, Singapore)</a>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <a href="/nigeria" className="hover:text-blue-600">Middle East & Africa (Nigeria, UAE)</a>
                      </li>
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="text-lg font-semibold mb-6 text-gray-900">Follow Our Journey</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
                          aria-label={social.platform}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Web Design Services', href: '/services/web-design' },
                        { label: 'SEO Services', href: '/services/seo' },
                        { label: 'Business Setup', href: '/services/business-setup' },
                        { label: 'Free Website Audit', href: '/audit' }
                      ].map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="block text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2"
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

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Message Sent!</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Thank you for reaching out! We'll get back to you within 24 hours with a personalized strategy for your business.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-10">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">Get Your Free Business Consultation</h3>
                        <p className="text-gray-600">
                          Tell us about your business and goals. We'll provide a customized strategy 
                          to help you establish your digital presence and grow in your local market.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="e.g., Restaurant, Retail, Service"
                            />
                          </div>
                        </div>

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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Budget Range
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Describe your business, current challenges, and what you hope to achieve with our services..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Urgency Level
                          </label>
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="normal">Normal Priority</option>
                            <option value="urgent">Urgent (1-2 days)</option>
                            <option value="asap">ASAP (Same day)</option>
                          </select>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                        </div>

                        <p className="text-xs text-gray-500 text-center pt-4">
                          By submitting this form, you agree to our Privacy Policy. 
                          We respect your privacy and will never share your information.
                        </p>
                      </form>
                    </>
                  )}
                </div>

                {/* Global Team Availability */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-2xl font-bold mb-3">Global Team Availability</h4>
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
                        {['Nigeria', 'UK', 'USA', 'Canada'].map((country, i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-xs font-bold"
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-lg font-bold">Local Experts</div>
                        <div className="text-sm text-white/80">In your time zone</div>
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
      </main>
    </>
  )
}