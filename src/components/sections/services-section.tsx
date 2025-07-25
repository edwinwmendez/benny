"use client"

import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { services, features } from "@/lib/data"

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-6 text-lg px-6 py-2">
            🎪 Nuestros Servicios Mágicos
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Celebraciones
            </span>
            <br />
            <span className="text-gray-800">que</span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Enamoran ✨
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cada evento es una oportunidad única para crear recuerdos inolvidables llenos de{" "}
            <span className="text-pink-600 font-bold">magia</span> y{" "}
            <span className="text-purple-600 font-bold">emoción</span> 🎉
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 relative overflow-hidden`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg animate-pulse">
                    ⭐ Más Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} shadow-lg mb-4`}>
                    <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-lg text-gray-600 font-medium mb-4">{service.subtitle}</p>
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white font-bold text-lg shadow-lg`}
                  >
                    {service.price}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-center">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-center">✨ Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-bold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    ¡Cotizar {service.title}!
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 transition-all bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Más Información
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-3 rounded-full bg-white shadow-lg">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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