"use client"

import { PartyPopper, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { contactInfo } from "@/lib/data"
import { RESPONSE_TIME, PRIVACY_MESSAGE } from "@/lib/constants"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-pink-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-6 text-lg px-6 py-2">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">¡Contáctanos Ahora! 📱</h3>

            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/70 rounded-xl p-6 shadow-lg">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${contact.color} shadow-lg`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">{contact.title}</h4>
                    <p className="text-gray-600 text-lg">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">¡Déjanos tus Datos!</h3>
            <Card className="bg-gradient-to-br from-white to-pink-50 border-0 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  ✨ ¡Cotización Rápida y Gratis! 🎊
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">👤 Tu Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm"
                      placeholder="¿Cómo te llamas?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">📱 WhatsApp</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm"
                      placeholder="Tu número de WhatsApp"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">🎉 ¿Qué vas a celebrar?</label>
                    <select className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm">
                      <option value="">Selecciona tu celebración</option>
                      <option value="quinceanos">👑 Quinceaños</option>
                      <option value="boda">💒 Boda</option>
                      <option value="cumpleanos">🎂 Cumpleaños</option>
                      <option value="promocion">🎓 Promoción</option>
                      <option value="otro">✨ Otro evento especial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-bold mb-2">💭 Cuéntanos brevemente</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm resize-none"
                      placeholder="Fecha aproximada, número de invitados y cualquier detalle especial..."
                    ></textarea>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
                      <PartyPopper className="mr-3 h-6 w-6" />🎉 ¡Quiero mi Cotización!
                    </Button>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="button"
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                      >
                        <Phone className="mr-2 h-5 w-5" />💬 WhatsApp Directo
                      </Button>
                      <Button
                        type="button"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                      >
                        <Phone className="mr-2 h-5 w-5" />📞 Llamar Ya
                      </Button>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-pink-200">
                    <p className="text-sm text-gray-600 mb-2">
                      🕐 <strong>{RESPONSE_TIME}</strong>
                    </p>
                    <p className="text-xs text-gray-500">
                      {PRIVACY_MESSAGE}
                    </p>
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