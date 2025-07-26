"use client"

import { useState } from "react"
import { PartyPopper, Phone, Send, Calendar, Clock, MapPin, Star, MessageCircle, Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { contactInfo } from "@/lib/data"
import { RESPONSE_TIME, PRIVACY_MESSAGE, SITE_CONFIG } from "@/lib/constants"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    evento: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppDirect = () => {
    const message = formData.nombre 
      ? `¡Hola! Soy ${formData.nombre} y estoy interesado en contratar sus servicios para ${formData.evento || 'un evento especial'}. ${formData.mensaje ? `Detalles: ${formData.mensaje}` : ''}`
      : "¡Hola! Estoy interesado en contratar sus servicios para un evento especial. ¿Podrían enviarme más información?"
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`${SITE_CONFIG.links.whatsapp}?text=${encodedMessage}`, '_blank')
  }

  const handleCall = () => {
    window.open(SITE_CONFIG.links.phone, '_self')
  }

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Consulta sobre ${formData.evento || 'servicios de eventos'}`)
    const body = encodeURIComponent(`
Hola,

Mi nombre es ${formData.nombre || '[Nombre]'} y estoy interesado en sus servicios.

Tipo de evento: ${formData.evento || '[Por definir]'}
Teléfono: ${formData.telefono || '[Por proporcionar]'}

Detalles adicionales:
${formData.mensaje || '[Sin detalles adicionales por el momento]'}

Espero su respuesta.

Saludos!
    `)
    window.open(`${SITE_CONFIG.links.email}?subject=${subject}&body=${body}`, '_self')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nombre || !formData.telefono) {
      alert('Por favor completa al menos tu nombre y teléfono')
      return
    }
    
    setIsSubmitting(true)
    // Simular envío
    setTimeout(() => {
      handleWhatsAppDirect()
      setIsSubmitting(false)
    }, 1000)
  }

  const quickContactMethods = [
    {
      title: "WhatsApp Inmediato",
      description: "Respuesta en minutos",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-600",
      action: handleWhatsAppDirect,
      emoji: "💬"
    },
    {
      title: "Llamada Directa",
      description: "Habla con nosotros ahora",
      icon: Phone,
      color: "from-blue-500 to-cyan-600",
      action: handleCall,
      emoji: "📞"
    },
    {
      title: "Email Detallado",
      description: "Envía tu consulta completa",
      icon: Mail,
      color: "from-purple-500 to-violet-600",
      action: handleEmailDirect,
      emoji: "📧"
    }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: SITE_CONFIG.links.instagram,
      color: "from-pink-500 to-purple-600",
      description: "Síguenos para ver eventos"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: SITE_CONFIG.links.facebook,
      color: "from-blue-500 to-indigo-600",
      description: "Únete a nuestra comunidad"
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-pink-100 via-white to-purple-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 text-8xl opacity-5 animate-pulse">📞</div>
      <div className="absolute top-20 right-20 text-6xl opacity-10 animate-bounce">💬</div>
      <div className="absolute bottom-20 left-20 text-7xl opacity-5 animate-pulse">✨</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-10 animate-bounce">🎊</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-6 text-lg px-6 py-2 animate-pulse">
            📞 ¡Hablemos de tu Celebración!
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ¡Hagamos Realidad
            </span>
            <br />
            <span className="text-gray-800">tu</span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Fiesta Soñada! 🎉
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para hacer de tu evento una experiencia única. ¡Contáctanos ahora y recibe tu cotización personalizada!
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickContactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-0 shadow-xl overflow-hidden bg-white"
              onClick={method.action}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl mb-2">{method.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <MapPin className="mr-3 h-8 w-8 text-pink-600" />
              ¡Encuéntranos! 📍
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => {
                    if (contact.title.includes('WhatsApp')) {
                      window.open(SITE_CONFIG.links.whatsapp, '_blank')
                    } else if (contact.title.includes('Llámanos')) {
                      window.open(SITE_CONFIG.links.phone, '_self')
                    } else if (contact.title.includes('Escríbenos')) {
                      window.open(SITE_CONFIG.links.email, '_self')
                    } else if (contact.title.includes('Instagram')) {
                      window.open(SITE_CONFIG.links.instagram, '_blank')
                    } else if (contact.title.includes('Facebook')) {
                      window.open(SITE_CONFIG.links.facebook, '_blank')
                    }
                  }}
                >
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${contact.color} shadow-lg`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-800 font-bold text-lg">{contact.title}</h4>
                    <p className="text-gray-600 text-lg">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Star className="mr-2 h-6 w-6 text-yellow-500" />
                Síguenos en Redes
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    onClick={() => window.open(social.url, '_blank')}
                    className={`bg-gradient-to-r ${social.color} hover:scale-110 transition-all duration-300 shadow-lg`}
                    title={social.description}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-orange-500" />
                Horarios de Atención
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
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
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Send className="mr-3 h-8 w-8 text-purple-600" />
              ¡Déjanos tus Datos!
            </h3>
            <Card className="bg-gradient-to-br from-white to-pink-50 border-0 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  ✨ ¡Cotización Rápida y Gratis! 🎊
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">👤 Tu Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm"
                      placeholder="¿Cómo te llamas?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">📱 WhatsApp / Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm"
                      placeholder="Tu número de contacto"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">🎉 ¿Qué vas a celebrar?</label>
                    <select 
                      name="evento"
                      value={formData.evento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm"
                    >
                      <option value="">Selecciona tu celebración</option>
                      <option value="quinceanos">👑 Quinceaños</option>
                      <option value="boda">💒 Boda</option>
                      <option value="cumpleanos">🎂 Cumpleaños</option>
                      <option value="promocion">🎓 Promoción</option>
                      <option value="corporativo">🏢 Evento Corporativo</option>
                      <option value="otro">✨ Otro evento especial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">💭 Cuéntanos brevemente</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm resize-none"
                      placeholder="Fecha aproximada, número de invitados y cualquier detalle especial..."
                    ></textarea>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <PartyPopper className="mr-3 h-6 w-6" />🎉 ¡Quiero mi Cotización!
                        </>
                      )}
                    </Button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />💬 WhatsApp
                      </Button>
                      <Button
                        type="button"
                        onClick={handleCall}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                      >
                        <Phone className="mr-2 h-5 w-5" />📞 Llamar
                      </Button>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-pink-200">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-4 w-4 text-green-500 mr-2" />
                      <p className="text-sm text-gray-600">
                        🕐 <strong>{RESPONSE_TIME}</strong>
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {PRIVACY_MESSAGE}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100 rounded-3xl p-8 shadow-xl">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Tienes una fecha en mente? 📅</h3>
            <p className="text-lg text-gray-600 mb-6">
              ¡Las mejores fechas se reservan rápido! No esperes más para asegurar tu celebración perfecta.
            </p>
            <Button 
              onClick={handleWhatsAppDirect}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all"
            >
              <Calendar className="mr-2 h-5 w-5" />
              🗓️ ¡Reservar Mi Fecha Ya!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}