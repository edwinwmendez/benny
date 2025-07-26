"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/data"

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-12 bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Familias
            </span>
            <span className="text-gray-800"> Felices</span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Hablan 💕
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${testimonial.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105`}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-base leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="text-gray-800 font-bold text-base">{testimonial.name}</p>
                  <p className={`bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent font-semibold text-sm`}>
                    {testimonial.event}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}