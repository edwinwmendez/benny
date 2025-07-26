"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Star, Calendar, Instagram, Facebook, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SITE_CONFIG, RESPONSE_TIME, PRIVACY_MESSAGE } from "@/lib/constants"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    evento: '',
    mensaje: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsApp = () => {
    const message = `¡Hola! Soy ${formData.nombre || '[Nombre]'} y estoy interesado en sus servicios para ${formData.evento || 'un evento especial'}. ${formData.mensaje ? `Detalles: ${formData.mensaje}` : ''}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`${SITE_CONFIG.links.whatsapp}?text=${encodedMessage}`, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nombre || !formData.telefono) {
      alert('Por favor completa tu nombre y teléfono')
      return
    }
    handleWhatsApp()
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Respuesta inmediata",
      description: "Chatea con nosotros ahora",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      action: () => window.open(SITE_CONFIG.links.whatsapp, '_blank'),
      badge: "Más rápido"
    },
    {
      icon: Phone,
      title: "Llamada",
      subtitle: "+51 999 999 999",
      description: "Habla directamente con nosotros",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      action: () => window.open(SITE_CONFIG.links.phone, '_self'),
      badge: "Directo"
    },
    {
      icon: MapPin,
      title: "Visítanos",
      subtitle: "Av. El Sol 527, S.J.L",
      description: "Conoce nuestras instalaciones",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      action: () => {},
      badge: "Presencial"
    }
  ]

  return (
    <section id="contacto" className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Decoraciones de fondo */}
      <div className="absolute top-10 left-10 text-6xl opacity-5 animate-pulse">💬</div>
      <div className="absolute top-20 right-20 text-8xl opacity-5 animate-bounce">📞</div>
      <div className="absolute bottom-20 left-20 text-7xl opacity-5 animate-pulse">✨</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header mejorado */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4 px-6 py-2 text-sm shadow-lg">
            🎊 ¡Hablemos de tu Celebración!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ¡Tu Evento Perfecto
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Empieza Aquí! 🎉
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            🌟 Estamos listos para convertir tu visión en la celebración de tus sueños. 
            <strong> Respuesta garantizada en menos de 30 minutos</strong> 📱✨
          </p>
          
          {/* Elementos de confianza */}
          <div className="flex justify-center items-center mt-6 space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Disponible ahora
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              500+ eventos realizados
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 text-green-500 mr-1" />
              Respuesta inmediata
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar premium - Lado izquierdo */}
          <div className="h-full">
            <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl overflow-hidden relative h-full">
              {/* Decoración */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-200 to-pink-200 rounded-full transform translate-x-10 -translate-y-10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-200 to-orange-200 rounded-full transform -translate-x-8 translate-y-8 opacity-60"></div>
              
              <CardContent className="p-10 relative z-10 h-full flex flex-col">
                {/* Métodos de contacto */}
                <div className="mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-3">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">Contáctanos Ahora</h4>
                    <p className="text-sm text-gray-600">Elige tu método favorito</p>
                  </div>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div 
                        key={index}
                        className={`${method.bgColor} rounded-xl p-4 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-white`}
                        onClick={method.action}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:shadow-xl transition-all`}>
                            <method.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="font-bold text-gray-800 text-base">{method.title}</h5>
                              <Badge className={`bg-gradient-to-r ${method.color} text-white text-xs px-3 py-1 shadow-sm`}>
                                {method.badge}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-700 font-medium">{method.subtitle}</p>
                            <p className="text-xs text-gray-500 mt-1">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex-grow">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">Horarios de Atención</h4>
                    <p className="text-sm text-gray-600">Siempre disponibles para ti</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-yellow-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                          <span className="font-semibold text-gray-700">Lunes - Viernes</span>
                        </div>
                        <span className="font-bold text-yellow-600">9:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-orange-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                          <span className="font-semibold text-gray-700">Sábados</span>
                        </div>
                        <span className="font-bold text-orange-600">9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario principal - Lado derecho - 2 columnas */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden relative">
              {/* Decoración del formulario */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-pink-100 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Cotización Gratuita e Inmediata</h3>
                  <p className="text-gray-600">Completa el formulario y recibe tu presupuesto personalizado por WhatsApp</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Indicador de progreso */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between text-sm text-purple-600 font-medium">
                      <span>📋 Información básica</span>
                      <span>⚡ Respuesta en 30min</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                          <span className="text-purple-600 text-sm">👤</span>
                        </div>
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gradient-to-r from-gray-50 to-purple-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:bg-white transition-all shadow-sm"
                        placeholder="Escribe tu nombre completo"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                          <span className="text-green-600 text-sm">📱</span>
                        </div>
                        Tu WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gradient-to-r from-gray-50 to-green-50 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none focus:bg-white transition-all shadow-sm"
                        placeholder="+51 999 999 999"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-yellow-600 text-sm">🎉</span>
                      </div>
                      Tipo de Celebración
                    </label>
                    <select
                      name="evento"
                      value={formData.evento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gradient-to-r from-gray-50 to-yellow-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none focus:bg-white transition-all shadow-sm"
                    >
                      <option value="">✨ Selecciona tu evento especial</option>
                      <option value="quinceanos">👑 Quinceaños - Celebración de Princesa</option>
                      <option value="boda">💒 Boda - El Día Más Especial</option>
                      <option value="cumpleanos">🎂 Cumpleaños - Fiesta Inolvidable</option>
                      <option value="promocion">🎓 Graduación - Logro Alcanzado</option>
                      <option value="corporativo">🏢 Evento Corporativo</option>
                      <option value="otro">🌟 Otro evento especial</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-pink-600 text-sm">💭</span>
                      </div>
                      Cuéntanos tu Visión
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-4 bg-gradient-to-r from-gray-50 to-pink-50 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none focus:bg-white transition-all shadow-sm resize-none"
                      placeholder="📅 Fecha aproximada, 👥 número de invitados, 🎨 colores favoritos, 💡 ideas especiales..."
                    />
                  </div>

                  {/* Botón mejorado */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-600 text-white text-xl py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <Send className="h-6 w-6" />
                        <span>🎊 ¡Enviar por WhatsApp!</span>
                        <MessageCircle className="h-6 w-6" />
                      </div>
                    </Button>
                    
                    {/* Garantías bajo el botón */}
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                      <div className="text-xs text-gray-500">
                        <div className="text-green-500 font-bold">✓</div>
                        Sin compromiso
                      </div>
                      <div className="text-xs text-gray-500">
                        <div className="text-blue-500 font-bold">⚡</div>
                        Respuesta inmediata
                      </div>
                      <div className="text-xs text-gray-500">
                        <div className="text-purple-500 font-bold">🎁</div>
                        Cotización gratis
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
} 