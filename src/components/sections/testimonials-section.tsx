"use client"

import { Star, Quote, Heart, Users, Camera } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { testimonials } from "@/lib/data"

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decoraciones de fondo */}
      <div className="absolute top-10 left-10 text-6xl animate-pulse opacity-10">💝</div>
      <div className="absolute top-20 right-20 text-5xl animate-bounce opacity-10">⭐</div>
      <div className="absolute bottom-20 left-20 text-7xl animate-pulse opacity-10">🎉</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-bounce opacity-10">💫</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 mb-4 text-sm px-4 py-1">
            ⭐ Testimonios Reales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Familias Felices
            </span>
            <span className="text-gray-800"> que</span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Hablan por Nosotros 💕
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada sonrisa, cada lágrima de felicidad, cada momento mágico... 
            Así es como nuestras familias describen sus celebraciones con nosotros
          </p>
        </div>

        {/* Stats destacados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-sm text-gray-600 font-medium">Eventos Realizados</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-sm text-gray-600 font-medium">Satisfacción</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              5★
            </div>
            <div className="text-sm text-gray-600 font-medium">Calificación</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
              8+
            </div>
            <div className="text-sm text-gray-600 font-medium">Años Experiencia</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${testimonial.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}
            >
              {/* Icono decorativo */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="h-8 w-8 text-purple-600" />
              </div>
              
              <CardContent className="p-6 relative">
                {/* Header con estrellas y badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge className={`bg-gradient-to-r ${testimonial.color} text-white text-xs px-2 py-1`}>
                    Cliente VIP
                  </Badge>
                </div>

                {/* Testimonio */}
                <div className="mb-6">
                  <Quote className="h-6 w-6 text-purple-400 mb-2" />
                  <p className="text-gray-700 italic text-base leading-relaxed font-medium">
                    {testimonial.text}
                  </p>
                </div>

                {/* Footer con info del cliente */}
                <div className="border-t border-white/50 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center`}>
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-bold text-base">{testimonial.name}</p>
                      <p className={`bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent font-semibold text-sm flex items-center`}>
                        <Camera className="h-3 w-3 mr-1" />
                        {testimonial.event}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}