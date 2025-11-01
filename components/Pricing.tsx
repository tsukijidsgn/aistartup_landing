'use client'

import { useEffect, useRef, useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for individuals getting started',
    features: [
      '100 call transcriptions/month',
      'Basic analytics dashboard',
      'Email support',
      '5 team members',
      'Standard integrations',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Best for growing teams',
    features: [
      'Unlimited transcriptions',
      'Advanced AI analytics',
      'Priority support',
      'Unlimited team members',
      'All integrations',
      'Custom reports',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom AI training',
      'SLA guarantee',
      'On-premise deployment',
      'Advanced security',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]))
            }, index * 150)
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="text-white">Simple, Transparent</span>{' '}
            <span className="text-ai-green">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Choose the plan that works best for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative p-6 sm:p-8 rounded-xl border transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-br from-gray-900 to-black border-ai-green shadow-lg shadow-ai-green/20 md:scale-105 hover:scale-110'
                  : 'bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-ai-green/50 hover:shadow-lg hover:shadow-ai-green/10'
              } ${
                visibleCards.has(index) ? 'animate-scale-in opacity-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ai-green text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2 text-sm sm:text-base">{plan.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400">{plan.description}</p>
              </div>

              <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-ai-green mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base text-center block ${
                  plan.popular
                    ? 'bg-ai-green text-black hover:bg-ai-green-dark shadow-lg shadow-ai-green/30'
                    : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

