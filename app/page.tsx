"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Music,
  Camera,
  Utensils,
  Sparkles,
  Heart,
  Crown,
  Gift,
  PartyPopper,
  Wine,
  Instagram,
  Facebook,
  PhoneIcon as WhatsApp,
  Zap,
  Smile,
  Cake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProducccionesBenny() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeFilter, setActiveFilter] = useState("todos")
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const galleryItems = [
    // Quinceaños
    {
      id: 1,
      category: "👑 Quinceaños",
      type: "quinceanos",
      title: "¡Quinceaños de Ensueño!",
      description: "Una celebración mágica llena de elegancia y alegría",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      icon: Crown,
      badgeColor: "bg-gradient-to-r from-pink-500 to-rose-600",
    },
    {
      id: 2,
      category: "👑 Quinceaños",
      type: "quinceanos",
      title: "Princesa por un Día",
      description: "Decoración dorada con toques de rosa y púrpura",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      icon: Crown,
      badgeColor: "bg-gradient-to-r from-pink-500 to-rose-600",
    },
    {
      id: 3,
      category: "👑 Quinceaños",
      type: "quinceanos",
      title: "Vals Inolvidable",
      description: "El momento más especial de la celebración",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      icon: Crown,
      badgeColor: "bg-gradient-to-r from-pink-500 to-rose-600",
    },
    {
      id: 15,
      category: "👑 Quinceaños",
      type: "quinceanos",
      title: "Mesa Principal Dorada",
      description: "Decoración exclusiva para la quinceañera",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      icon: Crown,
      badgeColor: "bg-gradient-to-r from-pink-500 to-rose-600",
    },
    {
      id: 16,
      category: "👑 Quinceaños",
      type: "quinceanos",
      title: "Decoración Rosa y Dorada",
      description: "Ambiente mágico para una princesa",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      icon: Crown,
      badgeColor: "bg-gradient-to-r from-pink-500 to-rose-600",
    },
    // Bodas
    {
      id: 4,
      category: "💒 Bodas",
      type: "bodas",
      title: "Boda de Cuento de Hadas",
      description: "El día más importante de sus vidas",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
      icon: Heart,
      badgeColor: "bg-gradient-to-r from-red-500 to-pink-600",
    },
    {
      id: 5,
      category: "💒 Bodas",
      type: "bodas",
      title: "Recepción Romántica",
      description: "Celebración llena de amor y alegría",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop",
      icon: Heart,
      badgeColor: "bg-gradient-to-r from-red-500 to-pink-600",
    },
    {
      id: 6,
      category: "💒 Bodas",
      type: "bodas",
      title: "Primer Baile",
      description: "El momento más emotivo de la celebración",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      icon: Heart,
      badgeColor: "bg-gradient-to-r from-red-500 to-pink-600",
    },
    {
      id: 17,
      category: "💒 Bodas",
      type: "bodas",
      title: "Mesa de Novios Elegante",
      description: "Decoración sofisticada para el día especial",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=400&fit=crop",
      icon: Heart,
      badgeColor: "bg-gradient-to-r from-red-500 to-pink-600",
    },
    // Cumpleaños
    {
      id: 7,
      category: "🎂 Cumpleaños",
      type: "cumpleanos",
      title: "Cumpleaños Espectacular",
      description: "Celebrando la vida con mucha diversión",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
      icon: Gift,
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    },
    {
      id: 8,
      category: "🎂 Cumpleaños",
      type: "cumpleanos",
      title: "Fiesta Temática",
      description: "Decoración personalizada según los gustos del festejado",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      icon: Gift,
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    },
    {
      id: 9,
      category: "🎂 Cumpleaños",
      type: "cumpleanos",
      title: "Momento del Brindis",
      description: "Celebrando un año más de vida y alegría",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      icon: Gift,
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    },
    {
      id: 18,
      category: "🎂 Cumpleaños",
      type: "cumpleanos",
      title: "Celebración Colorida",
      description: "Fiesta llena de alegría y diversión",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      icon: Gift,
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    },
    // Promociones
    {
      id: 10,
      category: "🎓 Promociones",
      type: "promociones",
      title: "Graduación Exitosa",
      description: "Celebrando los logros académicos",
      image: "https://images.unsplash.com/photo-1523050854058-1cb2f99b2d8b?w=600&h=400&fit=crop",
      icon: PartyPopper,
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-600",
    },
    {
      id: 11,
      category: "🎓 Promociones",
      type: "promociones",
      title: "Fiesta de Promoción",
      description: "El final de una etapa, el inicio de otra",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      icon: PartyPopper,
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-600",
    },
    {
      id: 19,
      category: "🎓 Promociones",
      type: "promociones",
      title: "Ceremonia de Graduación",
      description: "Momento de orgullo y celebración",
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&h=400&fit=crop",
      icon: PartyPopper,
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-600",
    },
    // Otros Eventos
    {
      id: 12,
      category: "🎊 Otros Eventos",
      type: "otros",
      title: "Evento Corporativo",
      description: "Celebraciones empresariales elegantes",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      icon: Users,
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600",
    },
    {
      id: 13,
      category: "🎊 Otros Eventos",
      type: "otros",
      title: "Despedida Especial",
      description: "Momentos únicos para recordar",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      icon: Users,
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600",
    },
    {
      id: 14,
      category: "🎊 Otros Eventos",
      type: "otros",
      title: "Celebración Familiar",
      description: "Reuniones familiares llenas de amor",
      image: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=600&h=400&fit=crop",
      icon: Users,
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600",
    },
    {
      id: 20,
      category: "🎊 Otros Eventos",
      type: "otros",
      title: "Fiesta de Aniversario",
      description: "Celebrando momentos especiales",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
      icon: Users,
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600",
    },
  ]

  const filteredGallery =
    activeFilter === "todos" ? galleryItems : galleryItems.filter((item) => item.type === activeFilter)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Crown,
      title: "Quinceaños",
      description: "El día más mágico de tu princesa",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
    },
    {
      icon: Heart,
      title: "Bodas",
      description: "El inicio de su cuento de hadas",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100",
    },
    {
      icon: Gift,
      title: "Cumpleaños",
      description: "Celebra la vida con alegría",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
    },
    {
      icon: PartyPopper,
      title: "Promociones",
      description: "¡Celebra tus logros con estilo!",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    },
    {
      icon: Users,
      title: "Despedidas",
      description: "Momentos únicos e inolvidables",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    },
    {
      icon: Sparkles,
      title: "Eventos Especiales",
      description: "Cada momento merece ser celebrado",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
    },
  ]

  const features = [
    {
      icon: MapPin,
      title: "Infraestructura Premium",
      description: "Área libre de 9mt de altura, pista de porcelanato, jardín con ventilación natural y zonas selfie",
      color: "text-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
    },
    {
      icon: Sparkles,
      title: "Decoración Exclusiva",
      description: "Mesas con finas telas brocadas, sillas tiffany doradas, accesorios temáticos y iluminación LED",
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    },
    {
      icon: Utensils,
      title: "Menajería de Lujo",
      description: "Platos dorados, copas de cristal, cubiertos hoteleros y arreglos florales en bases doradas",
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
    },
    {
      icon: Music,
      title: "Sistema de Audio Premium",
      description: "Equipos de alta potencia, DJ profesional, luces inteligentes, láser RGB y efectos especiales",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
    },
    {
      icon: Camera,
      title: "Producción Audiovisual",
      description: "Filmación cinematográfica, sesiones fotográficas y cuadro de firmas personalizado",
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    },
    {
      icon: Wine,
      title: "Banquete Gourmet",
      description: "Buffet completo, bebidas premium, torta personalizada y variedad de aperitivos",
      color: "text-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 text-6xl animate-bounce opacity-20 pointer-events-none">🎉</div>
      <div className="fixed top-20 right-20 text-4xl animate-pulse opacity-30 pointer-events-none">✨</div>
      <div className="fixed bottom-20 left-20 text-5xl animate-bounce opacity-25 pointer-events-none">🎈</div>
      <div className="fixed bottom-10 right-10 text-3xl animate-pulse opacity-30 pointer-events-none">🎊</div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Crown className="h-10 w-10 text-yellow-500" />
                <Sparkles className="h-4 w-4 text-pink-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Producciones Benny
                </h1>
                <p className="text-sm text-yellow-600 font-medium">Eventos e Imagen ✨</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Inicio
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Servicios
              </Link>
              <Link href="#galeria" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Galería
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Contacto
              </Link>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                <PartyPopper className="mr-2 h-4 w-4" />
                ¡Cotizar Evento!
              </Button>
            </div>

            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-6 space-y-4">
              <Link href="#inicio" className="block text-gray-700 hover:text-pink-600 font-medium">
                Inicio
              </Link>
              <Link href="#servicios" className="block text-gray-700 hover:text-pink-600 font-medium">
                Servicios
              </Link>
              <Link href="#galeria" className="block text-gray-700 hover:text-pink-600 font-medium">
                Galería
              </Link>
              <Link href="#contacto" className="block text-gray-700 hover:text-pink-600 font-medium">
                Contacto
              </Link>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <PartyPopper className="mr-2 h-4 w-4" />
                ¡Cotizar Evento!
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
              🎉 Eventos Premium desde 2010 ✨
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                500+ 🎊
              </div>
              <div className="text-gray-700 font-medium">Fiestas Increíbles</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                15+ ✨
              </div>
              <div className="text-gray-700 font-medium">Años de Alegría</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                100% 🎈
              </div>
              <div className="text-gray-700 font-medium">Sonrisas Garantizadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            {[
              {
                icon: Crown,
                title: "Quinceaños",
                subtitle: "El día más mágico de tu princesa",
                description:
                  "Celebramos los 15 años con elegancia y distinción. Incluye decoración temática personalizada, pista de baile, DJ profesional, fotografía, banquete completo y animación especial para hacer de este día un recuerdo inolvidable.",
                features: [
                  "Decoración temática completa",
                  "Fotografía profesional",
                  "DJ y animación",
                  "Banquete gourmet",
                  "Vals coreografiado",
                ],
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-purple-100",
                price: "Desde S/. 2,500",
                popular: true,
              },
              {
                icon: Heart,
                title: "Bodas",
                subtitle: "El inicio de su cuento de hadas",
                description:
                  "Tu boda perfecta con todos los detalles cuidados al máximo. Ceremonia, recepción, decoración floral, banquete de lujo, música en vivo, fotografía y video cinematográfico para capturar cada momento especial.",
                features: [
                  "Ceremonia completa",
                  "Decoración floral premium",
                  "Banquete de lujo",
                  "Música en vivo",
                  "Video cinematográfico",
                ],
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-purple-100",
                price: "Desde S/. 4,500",
                popular: false,
              },
              {
                icon: Gift,
                title: "Cumpleaños",
                subtitle: "Celebra la vida con alegría",
                description:
                  "Fiestas de cumpleaños memorables para todas las edades. Decoración personalizada según tus gustos, entretenimiento, juegos, música, fotografía y un delicioso banquete para compartir con tus seres queridos.",
                features: [
                  "Decoración personalizada",
                  "Entretenimiento y juegos",
                  "Música y DJ",
                  "Fotografía del evento",
                  "Banquete adaptado",
                ],
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-purple-100",
                price: "Desde S/. 1,800",
                popular: false,
              },
              {
                icon: PartyPopper,
                title: "Promociones",
                subtitle: "¡Celebra tus logros con estilo!",
                description:
                  "Graduaciones y promociones que marcan el final de una etapa importante. Ceremonia especial, decoración académica, fotografía grupal, brindis de honor y celebración con música y baile.",
                features: [
                  "Ceremonia de graduación",
                  "Decoración académica",
                  "Fotografía grupal",
                  "Brindis de honor",
                  "Celebración con baile",
                ],
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-purple-100",
                price: "Desde S/. 2,200",
                popular: false,
              },
              {
                icon: Users,
                title: "Eventos Corporativos",
                subtitle: "Profesionalismo y elegancia",
                description:
                  "Eventos empresariales de alto nivel. Conferencias, lanzamientos, cenas de gala, celebraciones corporativas con servicio premium, tecnología audiovisual y catering ejecutivo.",
                features: [
                  "Servicio premium",
                  "Tecnología audiovisual",
                  "Catering ejecutivo",
                  "Protocolo empresarial",
                  "Coordinación completa",
                ],
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-purple-100",
                price: "Desde S/. 3,200",
                popular: false,
              },
              {
                icon: Sparkles,
                title: "Eventos Especiales",
                subtitle: "Cada momento merece ser celebrado",
                description:
                  "Aniversarios, despedidas, baby showers y celebraciones únicas. Diseñamos eventos personalizados según tus necesidades específicas con atención al detalle y servicio excepcional.",
                features: [
                  "Diseño personalizado",
                  "Atención al detalle",
                  "Servicio excepcional",
                  "Flexibilidad total",
                  "Coordinación experta",
                ],
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-purple-100",
                price: "Desde S/. 1,500",
                popular: false,
              },
            ].map((service, index) => (
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

      {/* Detailed Services */}
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
                      <li>🍾 Champagne helado en copas de cristal</li>
                      <li>🥤 Gaseosas y agua por mesa</li>
                      <li>💧 Agua mineral en dispensador</li>
                      <li>🍹 Aperitivos: Pisco Sour, Maracuyá Sour, Chilcano</li>
                      <li>🍸 Digestivos: Algarrobina, Daiquiri, Piña Colada</li>
                    </ul>
                  </div>
                  <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                      <Utensils className="mr-2 h-5 w-5" />
                      Cena Buffet 🍗
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>🍗 Pollo al horno, al ajillo, enrollado</li>
                      <li>🥗 Ensaladas: blanca, alemana, rusa, wolf</li>
                      <li>🍚 Arroz al olivo, jardinera, árabe, blanco</li>
                      <li>👨‍🍳 Preparaciones gourmet variadas</li>
                    </ul>
                  </div>
                  <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-yellow-600 mb-4 flex items-center">
                      <Cake className="mr-2 h-5 w-5" />
                      Aperitivos & Postres 🧁
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>🍗 Piernitas de pollo</li>
                      <li>🥪 Sándwiches tropicales</li>
                      <li>🍓 Tartaletas de fresa</li>
                      <li>🎂 Torta personalizada en cajitas</li>
                      <li>🍫 Trufas y alfajores</li>
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
                      <li>🎬 Personajes de TV y cine</li>
                      <li>👗 Variedad de vestuarios temáticos</li>
                      <li>🐍 Juegos interactivos: Anaconda, Salta Soga</li>
                      <li>🕺 Limbo, Pole Dance, Pistola Shop</li>
                      <li>🎈 Globos pencil y animación</li>
                    </ul>
                  </div>
                  <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                      <Zap className="mr-2 h-5 w-5" />
                      Servicios Adicionales ⭐
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>🍫 Pileta de chocolate</li>
                      <li>🍎 Mesa de frutas de estación</li>
                      <li>🚗 Limusina y cadetes</li>
                      <li>💃 Pista de baile LED</li>
                      <li>📺 Pantalla LED gigante</li>
                      <li>📸 Selfie 360° y anfitrionaje temático</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
            <Button
              onClick={() => setActiveFilter("todos")}
              className={`${
                activeFilter === "todos"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-50"
              } border-2 border-pink-200 transition-all transform hover:scale-105`}
            >
              🎉 Todos los Eventos
            </Button>
            <Button
              onClick={() => setActiveFilter("quinceanos")}
              className={`${
                activeFilter === "quinceanos"
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-50"
              } border-2 border-pink-200 transition-all transform hover:scale-105`}
            >
              👑 Quinceaños
            </Button>
            <Button
              onClick={() => setActiveFilter("bodas")}
              className={`${
                activeFilter === "bodas"
                  ? "bg-gradient-to-r from-red-500 to-pink-600 text-white"
                  : "bg-white text-gray-700 hover:bg-red-50"
              } border-2 border-red-200 transition-all transform hover:scale-105`}
            >
              💒 Bodas
            </Button>
            <Button
              onClick={() => setActiveFilter("cumpleanos")}
              className={`${
                activeFilter === "cumpleanos"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              } border-2 border-blue-200 transition-all transform hover:scale-105`}
            >
              🎂 Cumpleaños
            </Button>
            <Button
              onClick={() => setActiveFilter("promociones")}
              className={`${
                activeFilter === "promociones"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50"
              } border-2 border-green-200 transition-all transform hover:scale-105`}
            >
              🎓 Promociones
            </Button>
            <Button
              onClick={() => setActiveFilter("otros")}
              className={`${
                activeFilter === "otros"
                  ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-50"
              } border-2 border-purple-200 transition-all transform hover:scale-105`}
            >
              🎊 Otros Eventos
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(item)}
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
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Familias
              </span>
              <br />
              <span className="text-gray-800">Felices</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Hablan 💕
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                event: "Quinceaños 👑",
                text: "¡Producciones Benny hizo realidad el sueño de mi princesa! Todo fue mágico, desde la decoración hasta el último detalle. ¡Mi hija no para de sonreír! 💖",
                color: "from-pink-500 to-rose-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
              },
              {
                name: "Carlos Mendoza",
                event: "Boda 💒",
                text: "Nuestra boda fue un cuento de hadas gracias al equipo de Benny. La alegría, la música, la comida... ¡todo superó nuestros sueños más grandes! ✨",
                color: "from-purple-500 to-violet-600",
                bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
              },
              {
                name: "Ana Rodríguez",
                event: "Cumpleaños 🎂",
                text: "¡Qué celebración tan increíble! El cumpleaños de mi esposo fue pura diversión. Todos nuestros invitados se fueron con una sonrisa enorme 😊",
                color: "from-yellow-500 to-orange-600",
                bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`${testimonial.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105`}
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="text-gray-800 font-bold text-lg">{testimonial.name}</p>
                    <p className={`bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent font-semibold`}>
                      {testimonial.event}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-pink-100 via-white to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 mb-6 text-lg px-6 py-2">
              📞 ¡Hablemos de tu Celebración!
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                ¡Hagamos Realidad
              </span>
              <br />
              <span className="text-gray-800">tu</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Fiesta Soñada! 🎉
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">¡Contáctanos Ahora! 📱</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 bg-white/70 rounded-xl p-6 shadow-lg">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">📍 Nuestra Ubicación</h4>
                    <p className="text-gray-600 text-lg">Av. El Sol 527, San Carlos, S.J.L</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/70 rounded-xl p-6 shadow-lg">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">📞 Llámanos</h4>
                    <p className="text-gray-600 text-lg">+51 999 999 999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/70 rounded-xl p-6 shadow-lg">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">📧 Escríbenos</h4>
                    <p className="text-gray-600 text-lg">contacto@produccionessbenny.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/70 rounded-xl p-6 shadow-lg">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 shadow-lg">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">📸 Instagram</h4>
                    <p className="text-gray-600 text-lg">@produccionessbenny</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/70 rounded-xl p-6 shadow-lg">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 shadow-lg">
                    <Facebook className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">🔗 Facebook</h4>
                    <p className="text-gray-600 text-lg">facebook.com/produccionessbenny</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white/70 rounded-xl p-6 shadow-lg">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 shadow-lg">
                    <WhatsApp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">💬 WhatsApp</h4>
                    <p className="text-gray-600 text-lg">+51 999 999 999</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">¡Déjanos tus Datos!</h3>
              <Card className="bg-gradient-to-br from-white to-pink-50 border-0 shadow-2xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    ✨ ¡Cotización Rápida y Gratis! 🎊
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-800 text-sm font-bold mb-2">👤 Tu Nombre</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm"
                        placeholder="¿Cómo te llamas?"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-800 text-sm font-bold mb-2">📱 WhatsApp</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm"
                        placeholder="Tu número de WhatsApp"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-800 text-sm font-bold mb-2">🎉 ¿Qué vas a celebrar?</label>
                      <select className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm">
                        <option value="">Selecciona tu celebración</option>
                        <option value="quinceanos">👑 Quinceaños</option>
                        <option value="boda">💒 Boda</option>
                        <option value="cumpleanos">🎂 Cumpleaños</option>
                        <option value="promocion">🎓 Promoción</option>
                        <option value="otro">✨ Otro evento especial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-800 text-sm font-bold mb-2">💭 Cuéntanos brevemente</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-lg text-gray-800 focus:border-pink-500 focus:outline-none transition-colors shadow-sm resize-none"
                        placeholder="Fecha aproximada, número de invitados y cualquier detalle especial..."
                      ></textarea>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
                        <PartyPopper className="mr-3 h-6 w-6" />🎉 ¡Quiero mi Cotización!
                      </Button>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          type="button"
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                        >
                          <WhatsApp className="mr-2 h-5 w-5" />💬 WhatsApp Directo
                        </Button>
                        <Button
                          type="button"
                          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                        >
                          <Phone className="mr-2 h-5 w-5" />📞 Llamar Ya
                        </Button>
                      </div>
                    </div>

                    <div className="text-center pt-4 border-t border-pink-200">
                      <p className="text-sm text-gray-600 mb-2">
                        🕐 <strong>Te respondemos en menos de 30 minutos</strong>
                      </p>
                      <p className="text-xs text-gray-500">
                        Solo necesitamos estos datos básicos para enviarte una propuesta personalizada 💖
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
