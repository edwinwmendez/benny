"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { galleryItems } from "@/lib/data"
import { FILTER_OPTIONS } from "@/lib/constants"
import type { FilterType, GalleryItem } from "@/lib/types"

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("todos")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredGallery = activeFilter === "todos" 
    ? galleryItems 
    : galleryItems.filter((item) => item.type === activeFilter)

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-6 text-lg px-6 py-2">
            📸 Galería de Momentos Mágicos
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Momentos que
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Brillan ✨
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTER_OPTIONS.map((option) => (
            <Button
              key={option.key}
              onClick={() => setActiveFilter(option.key as FilterType)}
              className={`${
                activeFilter === option.key
                  ? `bg-gradient-to-r ${option.color} text-white`
                  : "bg-white text-gray-700 hover:bg-pink-50"
              } border-2 border-pink-200 transition-all transform hover:scale-105`}
            >
              {option.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center mb-2">
                    <item.icon className="h-5 w-5 mr-2" />
                    <Badge className={`${item.badgeColor} border-0 text-white`}>{item.category}</Badge>
                  </div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <button
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(item)
                    }}
                  >
                    <Camera className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="object-cover w-full h-auto max-h-[70vh]"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <selectedImage.icon className="h-6 w-6 mr-3 text-pink-600" />
                  <Badge className={`${selectedImage.badgeColor} border-0 text-white`}>
                    {selectedImage.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">¿Te Gustó lo que Viste? 😍</h3>
            <p className="text-xl text-gray-600 mb-6">
              ¡Hagamos que tu evento sea el próximo en nuestra galería de momentos mágicos!
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all">
              <Calendar className="mr-2 h-5 w-5" />🎉 ¡Quiero mi Evento Así!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}