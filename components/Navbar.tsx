'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gray-900 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white font-bold text-base sm:text-lg">
              AI
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-white hover:text-ai-green transition-colors text-sm xl:text-base">Home</a>
            <a href="#features" className="text-white hover:text-ai-green transition-colors text-sm xl:text-base">Features</a>
            <a href="#resources" className="text-white hover:text-ai-green transition-colors text-sm xl:text-base">Resources</a>
            <a href="#pricing" className="text-white hover:text-ai-green transition-colors text-sm xl:text-base">Pricing</a>
            <a href="#community" className="text-white hover:text-ai-green transition-colors text-sm xl:text-base">Community</a>
          </div>

          {/* Desktop CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a href="#signup" className="hidden sm:block px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg border border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm sm:text-base">
              GET STARTED
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-ai-green transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-ai-green transition-colors px-2 py-2"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-ai-green transition-colors px-2 py-2"
              >
                Features
              </a>
              <a
                href="#resources"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-ai-green transition-colors px-2 py-2"
              >
                Resources
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-ai-green transition-colors px-2 py-2"
              >
                Pricing
              </a>
              <a
                href="#community"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-ai-green transition-colors px-2 py-2"
              >
                Community
              </a>
              <a href="#signup" onClick={() => setMobileMenuOpen(false)} className="w-full mt-2 px-4 py-2 rounded-lg border border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm text-center block">
                GET STARTED
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

