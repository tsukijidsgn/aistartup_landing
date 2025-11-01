'use client'

import { useState, useEffect, useRef } from 'react'

export default function Signup() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you! We\'ll send you a signup link shortly.')
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="signup" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Ready to Get</span>{' '}
            <span className="text-ai-green">Started?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto">
            Join thousands of teams already using our AI assistant to transform their workflow
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-ai-green focus:ring-2 focus:ring-ai-green/20 transition-all hover:border-ai-green/50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-ai-green text-black rounded-lg font-semibold text-base sm:text-lg hover:bg-ai-green-dark transition-all duration-300 shadow-lg shadow-ai-green/30 hover:shadow-xl hover:shadow-ai-green/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing up...
                </>
              ) : (
                <>
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

