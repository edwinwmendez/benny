"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Crown, Sparkles, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG, NAVIGATION_ITEMS } from "@/lib/constants"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
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
            {NAVIGATION_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
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
            {NAVIGATION_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block text-gray-700 hover:text-pink-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <PartyPopper className="mr-2 h-4 w-4" />
              ¡Cotizar Evento!
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}