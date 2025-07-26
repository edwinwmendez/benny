"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Camera, Calendar, X, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { galleryItems } from "@/lib/data"
import { FILTER_OPTIONS } from "@/lib/constants"
import type { FilterType, GalleryItem } from "@/lib/types"

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("todos")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const filteredGallery = activeFilter === "todos" 
    ? galleryItems 
    : galleryItems.filter((item) => item.type === activeFilter)

  // Detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      const wasMobile = isMobile
      const newIsMobile = window.innerWidth < 768
      setIsMobile(newIsMobile)
      
      // Resetear slide si cambió el número de imágenes por slide
      if (wasMobile !== newIsMobile) {
        setCurrentSlide(0)
      }
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [isMobile])

  // Funciones del carrusel
  const nextSlide = () => {
    // En móviles: 1 imagen por slide, en desktop: 3 imágenes por slide
    const imagesPerSlide = isMobile ? 1 : 3
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredGallery.length / imagesPerSlide))
  }

  const prevSlide = () => {
    const imagesPerSlide = isMobile ? 1 : 3
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredGallery.length / imagesPerSlide)) % Math.ceil(filteredGallery.length / imagesPerSlide))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const getCarouselImages = () => {
    // En móviles: 1 imagen por slide, en desktop: 3 imágenes por slide
    const imagesPerSlide = isMobile ? 1 : 3
    const startIndex = currentSlide * imagesPerSlide
    return filteredGallery.slice(startIndex, startIndex + imagesPerSlide)
  }

  const totalSlides = () => {
    const imagesPerSlide = isMobile ? 1 : 3
    return Math.ceil(filteredGallery.length / imagesPerSlide)
  }

  // Resetear carrusel cuando cambia el filtro
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter)
    setCurrentSlide(0)
    setShowAllImages(false)
  }

  return (
    <section id="galeria" className="py-12 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-3 text-sm px-4 py-1">
            📸 Galería de Momentos Mágicos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Momentos que
            </span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              {" "}Brillan ✨
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {FILTER_OPTIONS.map((option) => (
            <Button
              key={option.key}
              onClick={() => handleFilterChange(option.key as FilterType)}
              className={`${
                activeFilter === option.key
                  ? `bg-gradient-to-r ${option.color} text-white`
                  : "bg-white text-gray-700 hover:bg-pink-50"
              } border-2 border-pink-200 transition-all transform hover:scale-105 text-sm px-4 py-2`}
            >
              {option.label}
            </Button>
          ))}
        </div>

        {/* Gallery Content */}
        {!showAllImages ? (
          // Modo Carrusel - Solo 3 imágenes
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCarouselImages().map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center mb-1">
                        <item.icon className="h-4 w-4 mr-2" />
                        <Badge className={`${item.badgeColor} border-0 text-white text-xs`}>{item.category}</Badge>
                      </div>
                      <h4 className="font-bold text-base">{item.title}</h4>
                      <p className="text-xs text-gray-200">{item.description}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <button
                        className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 hover:bg-white/30 transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedImage(item)
                        }}
                      >
                        <Camera className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navegación del carrusel */}
            {totalSlides() > 1 && (
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  onClick={prevSlide}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                {/* Dots de navegación */}
                <div className="flex space-x-2">
                  {Array.from({ length: totalSlides() }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}

            {/* Botón Ver Todas las Imágenes */}
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllImages(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 shadow-lg transform hover:scale-105 transition-all"
              >
                <Eye className="mr-2 h-5 w-5" />
                Ver Todas las Imágenes ({filteredGallery.length})
              </Button>
            </div>
          </div>
        ) : (
          // Modo Grid Completo
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center mb-1">
                        <item.icon className="h-4 w-4 mr-2" />
                        <Badge className={`${item.badgeColor} border-0 text-white text-xs`}>{item.category}</Badge>
                      </div>
                      <h4 className="font-bold text-base">{item.title}</h4>
                      <p className="text-xs text-gray-200">{item.description}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <button
                        className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 hover:bg-white/30 transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedImage(item)
                        }}
                      >
                        <Camera className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Volver al Carrusel */}
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllImages(false)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 shadow-lg transform hover:scale-105 transition-all"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Volver al Carrusel
              </Button>
            </div>
          </div>
        )}

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
      </div>
    </section>
  )
}