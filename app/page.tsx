import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Resources from '@/components/Resources'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Community from '@/components/Community'
import Signup from '@/components/Signup'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollToTop from '@/components/ScrollToTop'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <Features />
      <Resources />
      <Pricing />
      <Testimonials />
      <Community />
      <Signup />
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </main>
  )
}

