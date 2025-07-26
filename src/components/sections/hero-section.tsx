"use client"

import Image from "next/image"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "@/lib/data"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-white/30 to-yellow-100/50"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce opacity-40">🎈</div>
      <div className="absolute top-1/3 right-1/3 text-4xl animate-pulse opacity-50">🎉</div>
      <div className="absolute bottom-1/4 left-1/3 text-5xl animate-bounce opacity-30">🎊</div>
      <div className="absolute bottom-1/3 right-1/4 text-3xl animate-pulse opacity-40">✨</div>

      <Image
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop"
        alt="Celebración colorida y elegante"
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Badge - Posicionado en la parte superior */}
      <div className="absolute top-32 left-0 right-0 z-30">
        <div className="text-center">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 text-base px-4 py-1 shadow-lg">
            🎉 {companyInfo.description} ✨
          </Badge>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section - Centrado */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
              ¡Celebra
            </span>
            <span className="text-gray-800"> la</span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Vida!
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium max-w-4xl mx-auto">
            Creamos momentos mágicos llenos de <span className="text-pink-600 font-bold">alegría</span>,{" "}
            <span className="text-purple-600 font-bold">diversión</span> y{" "}
            <span className="text-yellow-600 font-bold">felicidad</span> para tus celebraciones más especiales ✨
          </p>
        </div>

        {/* Botones Principales - Centrados y más grandes */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
          >
            <Calendar className="mr-3 h-6 w-6" />🎉 ¡Reservar mi Fiesta!
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-xl px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
          >
            <Phone className="mr-3 h-6 w-6" />📞 Llamar Ahora
          </Button>
        </div>
      </div>

      {/* Stats Section - Móvil: En el pie del hero */}
      <div className="block md:hidden absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-3">
            {companyInfo.stats.map((stat, index) => (
              <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border flex-shrink-0 ${stat.bgColor}`}>
                <div className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.number} {stat.emoji}
                </div>
                <div className="text-gray-700 font-medium text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section - Desktop: En el pie del hero */}
      <div className="hidden md:block absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInfo.stats.map((stat, index) => (
              <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border ${stat.bgColor}`}>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.number} {stat.emoji}
                </div>
                <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}