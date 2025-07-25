"use client"

import { useState } from "react"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { services, detailedServices } from "@/lib/data"

export default function EnhancedServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-6 text-lg px-6 py-2">
            🎪 Nuestros Servicios Completos
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Servicios que
            </span>
            <br />
            <span className="text-gray-800">Brillan</span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              ✨
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cada detalle diseñado para crear la fiesta perfecta llena de{" "}
            <span className="text-pink-600 font-bold">alegría</span>,{" "}
            <span className="text-purple-600 font-bold">diversión</span> y{" "}
            <span className="text-yellow-600 font-bold">momentos mágicos</span> 🎉
          </p>
        </div>

        <Tabs defaultValue="eventos" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 h-16 gap-4 bg-transparent p-2">
            <TabsTrigger 
              value="eventos" 
              className="text-lg font-bold px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:shadow-md data-[state=inactive]:border-2 data-[state=inactive]:border-gray-200 transition-all duration-300"
            >
              🎉 Organización de Eventos
            </TabsTrigger>
            <TabsTrigger 
              value="servicios" 
              className="text-lg font-bold px-6 py-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:shadow-md data-[state=inactive]:border-2 data-[state=inactive]:border-gray-200 transition-all duration-300"
            >
              ✨ Servicios Adicionales
            </TabsTrigger>
          </TabsList>

          <TabsContent value="eventos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </TabsContent>

          <TabsContent value="servicios" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(detailedServices).map(([key, categoryData]) => (
                <Card
                  key={key}
                  className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 relative overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${categoryData.color} shadow-lg mb-4`}>
                        <categoryData.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{categoryData.title}</h3>
                      <p className="text-lg text-gray-600 font-medium mb-6 leading-relaxed">{categoryData.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      {categoryData.services.map((service, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 hover:bg-white/80 transition-colors">
                          <div className="text-2xl">{service.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800 text-sm mb-1">{service.title}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button
                        className={`w-full bg-gradient-to-r ${categoryData.color} hover:opacity-90 text-white font-bold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Consultar {categoryData.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}