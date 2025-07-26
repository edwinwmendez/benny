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
        
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-3 px-4 py-1 text-sm">
            ¡Hablemos de tu Celebración!
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ¡Conectemos
            </span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}y Celebremos! 🎉
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para hacer de tu evento algo extraordinario. ¡Contáctanos ahora!
          </p>
        </div>

        {/* Grid de métodos de contacto */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className={`${method.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
              onClick={method.action}
            >
              <CardContent className="p-3 md:p-6 text-center">
                <div className="relative mb-2 md:mb-4">
                  <div className={`inline-flex p-2 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r ${method.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
                  </div>
                  <Badge className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-gradient-to-r ${method.color} text-white text-xs`}>
                    {method.badge}
                  </Badge>
                </div>
                <h3 className="font-bold text-sm md:text-lg text-gray-800 mb-1">{method.title}</h3>
                <p className="text-xs md:text-sm font-medium text-gray-600 mb-1 md:mb-2">{method.subtitle}</p>
                <p className="text-xs text-gray-500 hidden md:block">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Sidebar informativo - Lado izquierdo */}
          <div className="space-y-6">
            {/* Horarios */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-orange-500 mr-2" />
                  <h4 className="font-bold text-gray-800">Horarios de Atención</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes sociales */}
            <Card className="bg-gradient-to-br from-pink-50 to-purple-100 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-purple-500 mr-2" />
                  <h4 className="font-bold text-gray-800">Síguenos</h4>
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={() => window.open(SITE_CONFIG.links.instagram, '_blank')}
                    variant="outline"
                    className="w-full border-2 border-pink-200 text-pink-600 hover:bg-pink-50"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                  <Button
                    onClick={() => window.open(SITE_CONFIG.links.facebook, '_blank')}
                    variant="outline"
                    className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Garantía */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-bold text-gray-800 mb-2">Garantía Total</h4>
                <p className="text-sm text-gray-600">
                  {RESPONSE_TIME} o tu consulta es gratis
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulario principal - Lado derecho - 2 columnas */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-800">Solicita tu Cotización Gratis</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">👤 Tu Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="¿Cómo te llamas?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">📱 Tu Teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Tu número de contacto"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">🎉 Tipo de Evento</label>
                    <select
                      name="evento"
                      value={formData.evento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">¿Qué vas a celebrar?</option>
                      <option value="quinceanos">👑 Quinceaños</option>
                      <option value="boda">💒 Boda</option>
                      <option value="cumpleanos">🎂 Cumpleaños</option>
                      <option value="promocion">🎓 Promoción</option>
                      <option value="corporativo">🏢 Evento Corporativo</option>
                      <option value="otro">✨ Otro evento especial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">💭 Cuéntanos más</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                      placeholder="Fecha aproximada, número de invitados, ideas especiales..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    🎊 ¡Quiero mi Cotización!
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer de privacidad */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            🔒 {PRIVACY_MESSAGE}
          </p>
        </div>
      </div>
    </section>
  )
} 