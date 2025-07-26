"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Users, Clock, CheckCircle, X, ArrowRight, Building2, Palette, Volume2, Video, ChefHat, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { detailedServices } from "@/lib/data"

// Tipos para los servicios
interface Service {
  id: string
  title: string
  description: string
  price: string
  duration: string
  capacity: string
  features: string[]
  image: string
  category: string
  icon: any
  badgeColor: string
  type: ServiceType
}

type ServiceType = "principales" | "adicionales"

// Servicios principales
const mainServices: Service[] = [
  {
    id: "1",
    title: "Bodas de Ensueño",
    description: "Celebra el día más importante de tu vida con elegancia y romance",
    price: "Desde $2,500",
    duration: "8-12 horas",
    capacity: "50-300 personas",
    features: ["Decoración completa", "Coordinación del evento", "Flores naturales", "Iluminación especial"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    category: "Bodas",
    icon: Star,
    badgeColor: "bg-gradient-to-r from-pink-500 to-rose-500",
    type: "principales"
  },
  {
    id: "2",
    title: "Eventos Corporativos",
    description: "Fortalece tu equipo con eventos profesionales memorables",
    price: "Desde $1,800",
    duration: "4-8 horas",
    capacity: "20-500 personas",
    features: ["Tecnología audiovisual", "Catering ejecutivo", "Branding personalizado", "Networking areas"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    category: "Corporativo",
    icon: Users,
    badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
    type: "principales"
  },
  {
    id: "3",
    title: "Cumpleaños Únicos",
    description: "Convierte cada año en una celebración inolvidable",
    price: "Desde $800",
    duration: "4-6 horas",
    capacity: "10-100 personas",
    features: ["Temática personalizada", "Animación", "Torta espectacular", "Fotografía"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    category: "Cumpleaños",
    icon: Clock,
    badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    type: "principales"
  },
  {
    id: "4",
    title: "Graduaciones Especiales",
    description: "Celebra tus logros académicos con estilo",
    price: "Desde $1,200",
    duration: "5-8 horas",
    capacity: "30-200 personas",
    features: ["Ceremonia elegante", "Fotografía profesional", "Catering gourmet", "Diploma frame"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    category: "Graduación",
    icon: CheckCircle,
    badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
    type: "principales"
  },
  {
    id: "5",
    title: "Quinceañeros de Princesa",
    description: "Celebra tus 15 años como la princesa que eres",
    price: "Desde $2,000",
    duration: "6-10 horas",
    capacity: "50-250 personas",
    features: ["Vals coreografiado", "Vestido de ensueño", "Corona y cetro", "Fotografía de princesa"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    category: "Quinceaños",
    icon: Star,
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    type: "principales"
  },
  {
    id: "6",
    title: "Eventos Premium",
    description: "Experiencias exclusivas para ocasiones especiales",
    price: "Desde $3,500",
    duration: "8-12 horas",
    capacity: "100-500 personas",
    features: ["Servicio de lujo", "Chef exclusivo", "Entretenimiento VIP", "Coordinador personal"],
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    category: "Premium",
    icon: Star,
    badgeColor: "bg-gradient-to-r from-purple-500 to-yellow-600",
    type: "principales"
  }
]

// Servicios adicionales basados en detailedServices
const additionalServices: Service[] = [
  {
    id: "add1",
    title: "Infraestructura Mágica",
    description: "Espacio libre de 9m de altura decorado con pista de porcelanato, jardín natural y zonas selfie",
    price: "Desde $500",
    duration: "Evento completo",
    capacity: "Según necesidad",
    features: ["Ambiente climatizado", "Jardín con ventilación natural", "Mobiliario lounge premium", "Zonas fotográficas especializadas"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    category: "Infraestructura",
    icon: Building2,
    badgeColor: "bg-gradient-to-r from-pink-500 to-rose-600",
    type: "adicionales"
  },
  {
    id: "add2",
    title: "Decoración Deslumbrante",
    description: "Mesas vestidas con telas brocadas, sillas Tiffany doradas y decoración LED",
    price: "Desde $800",
    duration: "Montaje completo",
    capacity: "Personalizable",
    features: ["Telas brocadas temáticas", "Accesorios dorados exclusivos", "Iluminación LED especializada", "Decoración principal personalizada"],
    image: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?auto=format&fit=crop&w=800&q=80",
    category: "Decoración",
    icon: Palette,
    badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600",
    type: "adicionales"
  },
  {
    id: "add3",
    title: "Sonido & Efectos Espectaculares",
    description: "Sistema de audio de alta potencia, DJ profesional, luces inteligentes y efectos",
    price: "Desde $600",
    duration: "Evento completo",
    capacity: "Cobertura total",
    features: ["Equipos de sonido premium", "DJ con música actualizada", "Luces móviles y láser RGB", "Efectos de humo y chisperos"],
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    category: "Audio y Luces",
    icon: Volume2,
    badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    type: "adicionales"
  },
  {
    id: "add4",
    title: "Fotografía & Video Cinematográfico",
    description: "Filmación cinematográfica, sesiones exteriores y cuadro de firmas",
    price: "Desde $700",
    duration: "Cobertura completa",
    capacity: "Registro total",
    features: ["Criterio cinematográfico", "Sesiones en locaciones abiertas", "Trabajo final: Cuadro de firmas", "Tomas espontáneas de calidad"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    category: "Audiovisual",
    icon: Video,
    badgeColor: "bg-gradient-to-r from-green-500 to-emerald-600",
    type: "adicionales"
  },
  {
    id: "add5",
    title: "Banquete Delicioso",
    description: "Buffet completo con aperitivos, cena gourmet, torta personalizada y bebidas",
    price: "Desde $900",
    duration: "Servicio completo",
    capacity: "Según invitados",
    features: ["Champagne helado en cristal", "Aperitivos y digestivos selectos", "Cena con múltiples opciones", "Torta en masa elástica personalizada"],
    image: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?auto=format&fit=crop&w=800&q=80",
    category: "Gastronomía",
    icon: ChefHat,
    badgeColor: "bg-gradient-to-r from-orange-500 to-red-600",
    type: "adicionales"
  },
  {
    id: "add6",
    title: "Entretenimiento Espectacular",
    description: "Hora loca con personajes, juegos interactivos, seguridad profesional y anfitrionaje",
    price: "Desde $400",
    duration: "Animación completa",
    capacity: "Para todos",
    features: ["Personajes de TV y cine", "Juegos y animación", "Personal de seguridad", "Anfitrionaje especializado"],
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
    category: "Entretenimiento",
    icon: PartyPopper,
    badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-600",
    type: "adicionales"
  }
]

// Combinar todos los servicios
const allServices = [...mainServices, ...additionalServices]

// Opciones de filtro
const FILTER_OPTIONS = [
  { key: "principales", label: "🎉 Servicios Principales", color: "from-purple-500 to-pink-500" },
  { key: "adicionales", label: "⭐ Servicios Adicionales", color: "from-blue-500 to-indigo-500" }
]

export default function ServicesGridSection() {
  const [activeFilter, setActiveFilter] = useState<ServiceType>("principales")
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const filteredServices = allServices.filter((service) => service.type === activeFilter)

  return (
    <section id="servicios-grid" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 mb-6 text-lg px-6 py-2">
            ⭐ Servicios Especializados
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Servicios que
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Enamoran 💜
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros paquetes especializados, diseñados para hacer de tu evento una experiencia única e inolvidable
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTER_OPTIONS.map((option) => (
            <Button
              key={option.key}
              onClick={() => setActiveFilter(option.key as ServiceType)}
              className={`${
                activeFilter === option.key
                  ? `bg-gradient-to-r ${option.color} text-white`
                  : "bg-white text-gray-700 hover:bg-purple-50"
              } border-2 border-purple-200 transition-all transform hover:scale-105`}
            >
              {option.label}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card 
              key={service.id}
              className="relative group overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer border-0 bg-white"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={`${service.badgeColor} border-0 text-white`}>
                    {service.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {service.capacity}
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 group-hover:bg-purple-600 group-hover:text-white transition-all"
                    >
                      Ver Detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
              
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto relative">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <selectedService.icon className="h-6 w-6 mr-3 text-purple-600" />
                    <Badge className={`${selectedService.badgeColor} border-0 text-white`}>
                      {selectedService.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedService.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{selectedService.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Precio</h4>
                      <p className="text-2xl font-bold text-purple-600">{selectedService.price}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Duración</h4>
                      <p className="text-gray-600">{selectedService.duration}</p>
                    </div>
                    <div className="col-span-2">
                      <h4 className="font-semibold text-gray-800 mb-2">Capacidad</h4>
                      <p className="text-gray-600">{selectedService.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                    🎉 ¡Quiero Este Servicio!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">¿No Encuentras lo que Buscas? 🤔</h3>
            <p className="text-xl text-gray-600 mb-6">
              ¡Creamos paquetes personalizados para hacer realidad tu evento soñado!
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all">
              <Star className="mr-2 h-5 w-5" />
              💜 ¡Crear Paquete Personalizado!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}