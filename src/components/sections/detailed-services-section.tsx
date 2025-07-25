"use client"

import { Utensils, PartyPopper, Wine, Cake, Smile, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BANQUET_ITEMS, ENTERTAINMENT_ITEMS } from "@/lib/constants"

export default function DetailedServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Todo lo que
            </span>
            <br />
            <span className="text-gray-800">Necesitas para</span>{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Celebrar 🎊
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Banquete Section */}
          <Card className="bg-gradient-to-br from-red-50 to-pink-100 border-0 shadow-2xl">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-red-500 to-pink-600 shadow-lg mr-6">
                  <Utensils className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">Banquete Gourmet 🍽️</h3>
                  <p className="text-gray-600 text-lg">¡Sabores que alegran el corazón!</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-pink-600 mb-4 flex items-center">
                    <Wine className="mr-2 h-5 w-5" />
                    Bebidas Premium 🥂
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {BANQUET_ITEMS.bebidas.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                    <Utensils className="mr-2 h-5 w-5" />
                    Cena Buffet 🍗
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {BANQUET_ITEMS.cena.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-yellow-600 mb-4 flex items-center">
                    <Cake className="mr-2 h-5 w-5" />
                    Aperitivos & Postres 🧁
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {BANQUET_ITEMS.postres.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Entertainment Section */}
          <Card className="bg-gradient-to-br from-purple-50 to-blue-100 border-0 shadow-2xl">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg mr-6">
                  <PartyPopper className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">Departamento Artístico 🎭</h3>
                  <p className="text-gray-600 text-lg">¡Diversión sin límites!</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-purple-600 mb-4 flex items-center">
                    <Smile className="mr-2 h-5 w-5" />
                    Hora Loca Mix 🎪
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {ENTERTAINMENT_ITEMS.horaLoca.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Servicios Adicionales ⭐
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {ENTERTAINMENT_ITEMS.adicionales.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}