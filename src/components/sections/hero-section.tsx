"use client"

import Image from "next/image"
import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "@/lib/data"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

      <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-6 text-lg px-6 py-2 shadow-lg">
            🎉 {companyInfo.description} ✨
          </Badge>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
            ¡Celebra
          </span>
          <br />
          <span className="text-gray-800">la</span>{" "}
          <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Vida!
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-700 mb-10 leading-relaxed font-medium">
          Creamos momentos mágicos llenos de <span className="text-pink-600 font-bold">alegría</span>,{" "}
          <span className="text-purple-600 font-bold">diversión</span> y{" "}
          <span className="text-yellow-600 font-bold">felicidad</span> para tus celebraciones más especiales ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {companyInfo.stats.map((stat, index) => (
            <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border ${stat.bgColor}`}>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number} {stat.emoji}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}