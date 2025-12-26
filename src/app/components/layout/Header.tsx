'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Process', href: '/process' },
  { name: 'Work', href: '/work' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="text-gray-600">Scale with</span>
            <span className="font-bold text-black">Destiny</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/start"
              className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:scale-105"
            >
              Start Your MVP
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 transition-colors hover:text-black py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/start"
                className="rounded-full bg-black px-5 py-3 text-base font-medium text-white text-center transition-colors hover:bg-gray-800 mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Your MVP
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}