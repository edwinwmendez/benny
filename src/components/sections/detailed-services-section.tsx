"use client"

import { useState } from "react"
import { Utensils, PartyPopper, Wine, Cake, Smile, Zap, Star, Sparkles, Users, ArrowRight, CheckCircle, Heart, Calendar, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BANQUET_ITEMS, ENTERTAINMENT_ITEMS } from "@/lib/constants"
import { detailedServices } from "@/lib/data"

export default function DetailedServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const serviceCategories = [
    {
      id: "infraestructura",
      ...detailedServices.infraestructura,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-100",
      hoverGradient: "from-pink-100 to-rose-200",
      emoji: "🏰",
      features: ["9m de altura libre", "Pista de porcelanato", "Jardín natural", "Zonas selfie especiales"]
    },
    {
      id: "decoracion",
      ...detailedServices.decoracion,
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-100",
      hoverGradient: "from-purple-100 to-violet-200",
      emoji: "🌟",
      features: ["Telas brocadas temáticas", "Sillas Tiffany doradas", "Iluminación LED", "Arreglos dorados"]
    },
    {
      id: "sonido",
      ...detailedServices.sonido,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-100",
      hoverGradient: "from-blue-100 to-cyan-200",
      emoji: "🎵",
      features: ["Audio alta potencia", "DJ profesional", "Luces RGB láser", "Efectos especiales"]
    },
    {
      id: "fotografia",
      ...detailedServices.fotografia,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-100",
      hoverGradient: "from-green-100 to-emerald-200",
      emoji: "📸",
      features: ["Criterio cinematográfico", "Sesiones exteriores", "Cuadro de firmas", "Tomas espontáneas"]
    },
    {
      id: "banquete",
      ...detailedServices.banquete,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-100",
      hoverGradient: "from-orange-100 to-red-200",
      emoji: "🍰",
      features: ["Champagne cristal", "Aperitivos selectos", "Buffet gourmet", "Torta personalizada"]
    },
    {
      id: "entretenimiento",
      ...detailedServices.entretenimiento,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-100",
      hoverGradient: "from-yellow-100 to-orange-200",
      emoji: "🎉",
      features: ["Personajes TV/cine", "Juegos interactivos", "Personal seguridad", "Anfitrionaje experto"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 text-8xl opacity-5 animate-spin-slow">⭐</div>
      <div className="absolute top-20 right-20 text-6xl opacity-10 animate-bounce">🎪</div>
      <div className="absolute bottom-20 left-20 text-7xl opacity-5 animate-pulse">✨</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-10 animate-bounce">🎨</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 mb-6 text-lg px-6 py-2 animate-pulse">
            ✨ Servicios Especializados Premium
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experiencias que
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Transforman ✨
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada detalle cuenta para crear momentos mágicos. Descubre nuestros servicios especializados 
            diseñados para hacer de tu evento una experiencia única e inolvidable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((service, index) => (
            <Card 
              key={service.id}
              className={`relative group transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 shadow-xl overflow-hidden ${
                hoveredCard === service.id 
                  ? `bg-gradient-to-br ${service.hoverGradient}` 
                  : `bg-gradient-to-br ${service.bgGradient}`
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating Animation */}
              <div 
                className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`
                }}
              >
                {service.emoji}
              </div>
              
              <CardContent className="p-8 relative z-10">
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Premium
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-purple-600 font-medium">
                      +{service.features.length - 3} servicios más...
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline"
                  className="w-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 group-hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  Ver Detalles Completos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>


        {/* Enhanced Traditional Sections */}
        <div className="space-y-12">
          {/* Banquete Section - Enhanced */}
          <Card className="bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 border-0 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
            <CardContent className="p-12 relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center">
                  <div className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Utensils className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">Banquete Gourmet 🍽️</h3>
                    <p className="text-xl text-gray-600">¡Sabores que alegran el corazón!</p>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-0 text-lg px-4 py-2">
                  <Star className="mr-2 h-5 w-5" />
                  Premium
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-red-100">
                  <div className="flex items-center mb-6">
                    <Wine className="mr-3 h-8 w-8 text-red-500" />
                    <h4 className="text-2xl font-bold text-red-600">Bebidas Premium 🥂</h4>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    {BANQUET_ITEMS.bebidas.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
                  <div className="flex items-center mb-6">
                    <Utensils className="mr-3 h-8 w-8 text-orange-500" />
                    <h4 className="text-2xl font-bold text-orange-600">Cena Buffet 🍗</h4>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    {BANQUET_ITEMS.cena.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-yellow-100">
                  <div className="flex items-center mb-6">
                    <Cake className="mr-3 h-8 w-8 text-yellow-500" />
                    <h4 className="text-2xl font-bold text-yellow-600">Aperitivos & Postres 🧁</h4>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    {BANQUET_ITEMS.postres.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Entertainment Section - Enhanced */}
          <Card className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 border-0 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
            <CardContent className="p-12 relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center">
                  <div className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300">
                    <PartyPopper className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">Departamento Artístico 🎭</h3>
                    <p className="text-xl text-gray-600">¡Diversión sin límites!</p>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0 text-lg px-4 py-2">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Espectacular
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                  <div className="flex items-center mb-6">
                    <Smile className="mr-3 h-8 w-8 text-purple-500" />
                    <h4 className="text-2xl font-bold text-purple-600">Hora Loca Mix 🎪</h4>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    {ENTERTAINMENT_ITEMS.horaLoca.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Zap className="mr-3 h-8 w-8 text-blue-500" />
                    <h4 className="text-2xl font-bold text-blue-600">Servicios Adicionales ⭐</h4>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    {ENTERTAINMENT_ITEMS.adicionales.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 text-lg px-6 py-2">
                  Experiencia Premium Garantizada
                </Badge>
                <Heart className="h-8 w-8 text-red-500 ml-3 animate-pulse" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">¿Listo para Crear Magia? ✨</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Cada momento merece ser especial. Permítenos transformar tu evento en una experiencia inolvidable 
                con nuestros servicios premium y atención personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all">
                  <Calendar className="mr-2 h-6 w-6" />
                  🎊 ¡Planear Mi Evento Ahora!
                </Button>
                <Button variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 transform hover:scale-105 transition-all">
                  <Users className="mr-2 h-6 w-6" />
                  💬 Consulta Personalizada
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

      {/* Service Modal - FUERA del contenedor z-10 */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
            
            {/* Header del Modal - Compacto */}
            <div className={`bg-gradient-to-r ${selectedService.gradient} p-4 sm:p-6 text-white`}>
              <div className="flex items-center">
                <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg mr-4">
                  <selectedService.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 leading-tight">{selectedService.title}</h3>
                  <p className="text-sm sm:text-base opacity-90">{selectedService.subtitle}</p>
                </div>
                <div className="text-2xl sm:text-3xl opacity-30">
                  {selectedService.emoji}
                </div>
              </div>
            </div>
            
            {/* Contenido del Modal - Compacto */}
            <div className="p-4 sm:p-6">
              {/* Features principales - Compacto */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-500" />
                  Características Principales
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
                  {selectedService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Servicios detallados - Compacto */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-500" />
                  Servicios Incluidos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {selectedService.services.map((subService: any, index: number) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br ${selectedService.bgGradient} rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-white/20`}
                    >
                      <div className="text-xl sm:text-2xl mb-2">{subService.icon}</div>
                      <h5 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">{subService.title}</h5>
                      <p className="text-gray-600 text-xs leading-relaxed">{subService.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Call to Action - Compacto */}
              <div className={`bg-gradient-to-r ${selectedService.bgGradient} rounded-lg p-4 text-center`}>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">¿Te Interesa Este Servicio? 🤔</h4>
                <p className="text-sm text-gray-600 mb-3">
                  ¡Contáctanos para una cotización personalizada!
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center">
                  <Button className={`bg-gradient-to-r ${selectedService.gradient} hover:scale-105 transition-all text-white shadow-lg text-sm px-4 py-2`}>
                    <Calendar className="mr-2 h-4 w-4" />
                    🎊 ¡Cotizar!
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 text-sm px-4 py-2">
                    <Heart className="mr-2 h-4 w-4" />
                    💬 Más Info
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}