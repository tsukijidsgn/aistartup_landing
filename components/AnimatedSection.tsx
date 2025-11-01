'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'scale'
}

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const directionClasses = {
    up: 'scroll-animate',
    left: 'scroll-animate-left',
    right: 'scroll-animate-right',
    scale: 'scroll-animate-scale',
  }

  return (
    <div
      ref={ref}
      className={`${directionClasses[direction]} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

