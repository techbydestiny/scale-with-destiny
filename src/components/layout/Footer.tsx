import Link from 'next/link'
import { FaLinkedin, FaXTwitter, FaGlobe } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    Services: [
      { label: 'Web Design & Development', href: '#services' },
      { label: 'SEO Optimization', href: '#services' },
      { label: 'Business Setup', href: '#services' },
      { label: 'Light Marketing', href: '#services' },
    ],
    'Global Reach': [
      { label: 'North America', href: '/global-reach' },
      { label: 'Europe', href: '/global-reach' },
      { label: 'Asia Pacific', href: '/global-reach' },
      { label: 'Middle East', href: '/global-reach' },
      { label: 'Africa', href: '/global-reach' },
    ],
    Company: [
      { label: 'Our Process', href: '#process' },
      { label: 'Contact Us', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/scalewthdestiny', icon: <FaXTwitter size={20} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/scalewithdestiny', icon: <FaLinkedin size={20} /> },
    { name: 'Instagram', href: 'https://instagram.com/_scalewithdestiny', icon: <FaInstagramSquare size={20} /> },
  ]

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SWD</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">Scale With Destiny</div>
                  <div className="text-sm text-gray-600">Global Business Solutions</div>
                </div>
              </div>
              <p className="text-gray-600 max-w-md">
                Professional web design, SEO optimization, and business setup services for local businesses worldwide. 
                Helping businesses establish their digital presence and grow globally.
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MdEmail className="text-indigo-600" />
                Get Business Insights
              </h3>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-500">
                Tips for growing your local business online
              </p>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                {category === 'Global Reach' && <FaGlobe className="text-indigo-600" size={14} />}
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-2"
                    >
                      {link.label}
                      {link.label.includes('Global') && <FaGlobe size={12} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 flex items-center justify-center">
                <MdPhone className="text-indigo-600" size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Phone Support</div>
                <div className="text-gray-600">+234 (806) 280-4129</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 flex items-center justify-center">
                <MdEmail className="text-indigo-600" size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Email</div>
                <a href="mailto:hello@scalewithdestiny.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  hello.scalewithdestiny@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 flex items-center justify-center">
                <MdLocationOn className="text-indigo-600" size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Global Coverage</div>
                <div className="text-gray-600">Serving businesses worldwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © {currentYear} Scale With Destiny. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Get Quote
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-50 to-emerald-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">24/7 Global Support</div>
                  <div className="text-xs text-gray-600">Available worldwide</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-50 to-cyan-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Local Market Expertise</div>
                  <div className="text-xs text-gray-600">Tailored to your region</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-50 to-violet-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Flexible Pricing</div>
                  <div className="text-xs text-gray-600">Plans for every business</div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Note */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Partnered with businesses in 30+ countries. Ready to help your business grow locally and globally.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
              >
                Start Your Business Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer