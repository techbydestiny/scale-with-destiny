import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    Services: [
      { label: 'MVP Design', href: '/services/design' },
      { label: 'Development', href: '/services/development' },
      { label: 'Market Strategy', href: '/services/strategy' },
      { label: 'Pricing', href: '/pricing' },
    ],
    Company: [
      { label: 'Our Process', href: '/process' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/scalewithdestiny', icon: '𝕏' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/scalewithdestiny', icon: 'in' },
    { name: 'Instagram', href: 'https://github.com/scalewithdestiny', icon: '⎋' },
  ]

  return (
    <footer id='insights' className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-semibold mb-4">
                <span className="text-gray-600">Scale with</span>
                <span className="font-bold text-black">Destiny</span>
              </div>
              <p className="text-gray-600 max-w-md">
                We transform ambitious ideas into market-ready SaaS products. 
                From design to development to launch strategy—we're your dedicated 
                partner in growth.
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-black mb-3">Join our founder insights</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-black mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © {currentYear} Scale with Destiny. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-black transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-600 text-center md:text-right">
              <a href="mailto:hello@scalewithdestiny.com" className="hover:text-black transition-colors">
                hello@scalewithdestiny.com
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Remote-first team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Flat-rate pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer