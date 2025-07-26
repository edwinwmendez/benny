"use client"

import Navigation from "@/components/sections/navigation"
import HeroSection from "@/components/sections/hero-section"
import ServicesGridSection from "@/components/sections/services-grid-section"
// import DetailedServicesSection from "@/components/sections/detailed-services-section"
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
        <ServicesGridSection />
        {/* <DetailedServicesSection /> */}
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        
        {/* Footer básico para demostración */}
        <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Producciones Benny</h3>
              <p className="text-purple-200 mb-4">Convirtiendo sueños en celebraciones inolvidables ✨</p>
              <div className="flex justify-center space-x-6 text-purple-300">
                <span>📞 +51 999 999 999</span>
                <span>📧 contacto@produccionesbenny.com</span>
                <span>📍 Av. El Sol 527, S.J.L</span>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-700">
                <p className="text-sm text-purple-300">&copy; 2024 Producciones Benny. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
