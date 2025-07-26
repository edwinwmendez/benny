"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Crown, Sparkles, PartyPopper, ChevronDown, Star, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG, NAVIGATION_ITEMS } from "@/lib/constants"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const smoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId)
    if (element) {
      const headerHeight = 80 // Altura aproximada del header fijo
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
      setIsServicesOpen(false)
    }
  }

  const handleServiceNavigation = (targetId: string, filterType?: string) => {
    // Navegar a la sección
    smoothScroll(targetId)
    
    // Si hay un filtro específico, activarlo después de un pequeño delay
    if (filterType) {
      setTimeout(() => {
        // Disparar un evento personalizado para activar el filtro
        window.dispatchEvent(new CustomEvent('activateServiceFilter', {
          detail: { filterType }
        }))
      }, 100) // Reducido de 500ms a 100ms para mayor velocidad
    }
  }

  const serviceLinks = [
    { 
      href: "#servicios-grid", 
      label: "🎉 Servicios Principales", 
      icon: Star,
      filterType: "principales"
    },
    { 
      href: "#servicios-grid", 
      label: "⭐ Servicios Adicionales", 
      icon: Gift,
      filterType: "adicionales"
    },
  ]

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150) // 150ms delay antes de cerrar
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => smoothScroll('#inicio')}>
            <div className="relative">
              <Crown className="h-10 w-10 text-yellow-500" />
              <Sparkles className="h-4 w-4 text-pink-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-sm text-yellow-600 font-medium">{SITE_CONFIG.tagline}</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.label === "Servicios") {
                return (
                  <div 
                    key={item.href} 
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <button
                      className="flex items-center text-gray-700 hover:text-pink-600 transition-colors font-medium"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-pink-100 py-2 z-50"
                      >
                        {serviceLinks.map((serviceLink) => (
                          <button
                            key={`${serviceLink.href}-${serviceLink.filterType}`}
                            onClick={() => handleServiceNavigation(serviceLink.href, serviceLink.filterType)}
                            className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                          >
                            <serviceLink.icon className="h-5 w-5 mr-3" />
                            {serviceLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <button 
                  key={item.href}
                  onClick={() => smoothScroll(item.href)}
                  className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              )
            })}
            <Button 
              onClick={() => window.open(`${SITE_CONFIG.links.whatsapp}?text=${encodeURIComponent('¡Hola! 🎉 Me gustaría cotizar un evento con Producciones Benny. ¿Podrían ayudarme con información y precios?')}`, '_blank')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <PartyPopper className="mr-2 h-4 w-4" />
              ¡Cotizar Evento!
            </Button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-6 space-y-4">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.label === "Servicios") {
                return (
                  <div key={item.href} className="space-y-2">
                    <div className="text-gray-800 font-semibold text-sm uppercase tracking-wide px-2">
                      {item.label}
                    </div>
                    {serviceLinks.map((serviceLink) => (
                      <button
                        key={`mobile-${serviceLink.href}-${serviceLink.filterType}`}
                        onClick={() => handleServiceNavigation(serviceLink.href, serviceLink.filterType)}
                        className="w-full flex items-center px-4 py-2 text-gray-700 hover:text-pink-600 font-medium"
                      >
                        <serviceLink.icon className="h-4 w-4 mr-3" />
                        {serviceLink.label}
                      </button>
                    ))}
                  </div>
                )
              }
              
              return (
                <button 
                  key={item.href}
                  onClick={() => smoothScroll(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-pink-600 font-medium"
                >
                  {item.label}
                </button>
              )
            })}
            <Button 
              onClick={() => {
                window.open(`${SITE_CONFIG.links.whatsapp}?text=${encodeURIComponent('¡Hola! 🎉 Me gustaría cotizar un evento con Producciones Benny. ¿Podrían ayudarme con información y precios?')}`, '_blank')
                setIsMenuOpen(false)
              }}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              <PartyPopper className="mr-2 h-4 w-4" />
              ¡Cotizar Evento!
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}