'use client'

import { useState, useEffect } from 'react'
import FaultyTerminal from './FaultyTerminal'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 animate-fade-in">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* FaultyTerminal Background - only render on client */}
        {isMounted && (
          <div className="absolute inset-0 z-0">
            <FaultyTerminal
              scale={2}
              gridMul={[2, 1]}
              digitSize={1.5}
              timeScale={0.7}
              pause={false}
              scanlineIntensity={1}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0}
              tint="#00ff88"
              mouseReact={true}
              mouseStrength={0.6}
              pageLoadAnimation={false}
              brightness={1.5}
              className="w-full h-full"
              style={{ opacity: 0.6 }}
            />
          </div>
        )}
        
        {/* Dark gradient overlay - lighter to see terminal better */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-gray-900/50 z-10 pointer-events-none"></div>
        
        {/* Green tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ai-green/25 via-transparent to-transparent z-20 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up pt-8 sm:pt-12">
          {/* Banner */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-800 max-w-full">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ai-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-xs sm:text-sm whitespace-nowrap">Series D funding round was closed</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-delay">
            <span className="text-white">Your smartest AI assistant</span>
            <br />
            <span className="text-ai-green">work faster and smarter</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl animate-fade-in-delay">
            Smarter sales, faster decisions: AI powered dashboard with call analytics, transcripts, summaries and more.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay">
            <a href="#signup" className="group px-6 sm:px-8 py-3 sm:py-4 bg-ai-green text-black rounded-lg font-semibold text-base sm:text-lg hover:bg-ai-green-dark transition-all duration-300 shadow-lg shadow-ai-green/30 hover:shadow-xl hover:shadow-ai-green/50 flex items-center justify-center gap-2">
              GET STARTED
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#features" className="px-6 sm:px-8 py-3 sm:py-4 text-white underline decoration-2 underline-offset-4 hover:text-ai-green transition-colors text-base sm:text-lg font-medium flex items-center justify-center">
              DISCOVER MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

