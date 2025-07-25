"use client"

import Navigation from "@/components/sections/navigation"
import HeroSection from "@/components/sections/hero-section"
import EnhancedServicesSection from "@/components/sections/enhanced-services-section"
import DetailedServicesSection from "@/components/sections/detailed-services-section"
import GallerySection from "@/components/sections/gallery-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"

export default function ProduccionesBenny() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 text-6xl animate-bounce opacity-20 pointer-events-none">🎉</div>
      <div className="fixed top-20 right-20 text-4xl animate-pulse opacity-30 pointer-events-none">✨</div>
      <div className="fixed bottom-20 left-20 text-5xl animate-bounce opacity-25 pointer-events-none">🎈</div>
      <div className="fixed bottom-10 right-10 text-3xl animate-pulse opacity-30 pointer-events-none">🎊</div>

      <Navigation />
      <main>
        <HeroSection />
        <EnhancedServicesSection />
        <DetailedServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  )
}
