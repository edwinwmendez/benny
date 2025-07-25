import {
  Crown,
  Heart,
  Gift,
  PartyPopper,
  Users,
  Sparkles,
  MapPin,
  Utensils,
  Music,
  Camera,
  Wine,
  Phone,
  Mail,
  Instagram,
  Facebook,
  PhoneIcon as WhatsApp,
  Building2,
  Palette,
  Volume2,
  Video,
  ChefHat,
  PartyPopper as Entertainment,
} from "lucide-react"
import type { GalleryItem, Service, Feature, Testimonial, ContactInfo } from "./types"

// Datos de la galería de eventos
export const galleryItems: GalleryItem[] = [
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

// Datos de servicios principales
export const services: Service[] = [
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
]

// Servicios detallados por categorías
export const detailedServices = {
  infraestructura: {
    title: "🏰 Infraestructura Mágica",
    subtitle: "Espacio libre de 9m de altura decorado con pista de porcelanato, jardín natural y zonas selfie",
    icon: Building2,
    color: "from-pink-500 to-rose-600",
    services: [
      {
        icon: "✨",
        title: "Ambiente completamente climatizado",
        description: "Control de temperatura para el confort de todos los invitados"
      },
      {
        icon: "🌿",
        title: "Jardín con ventilación natural",
        description: "Espacios abiertos con vegetación natural para fotos al aire libre"
      },
      {
        icon: "🛋️",
        title: "Mobiliario lounge premium",
        description: "Muebles elegantes y cómodos para el descanso de los invitados"
      },
      {
        icon: "📸",
        title: "Zonas fotográficas especializadas",
        description: "Espacios diseñados específicamente para sesiones fotográficas"
      }
    ]
  },
  decoracion: {
    title: "🌟 Decoración Deslumbrante",
    subtitle: "Mesas vestidas con telas brocadas, sillas Tiffany doradas y decoración LED",
    icon: Palette,
    color: "from-purple-500 to-violet-600",
    services: [
      {
        icon: "🎨",
        title: "Telas brocadas temáticas",
        description: "Telas de alta calidad con diseños exclusivos según la temática del evento"
      },
      {
        icon: "✨",
        title: "Accesorios dorados exclusivos",
        description: "Detalles dorados que añaden elegancia y sofisticación"
      },
      {
        icon: "💡",
        title: "Iluminación LED especializada",
        description: "Sistema de luces LED programables para crear ambientes únicos"
      },
      {
        icon: "🎪",
        title: "Decoración principal personalizada",
        description: "Arreglos centrales diseñados según los gustos del cliente"
      }
    ]
  },
  sonido: {
    title: "🎵 Sonido & Efectos Espectaculares",
    subtitle: "Sistema de audio de alta potencia, DJ profesional, luces inteligentes y efectos",
    icon: Volume2,
    color: "from-blue-500 to-cyan-600",
    services: [
      {
        icon: "🔊",
        title: "Equipos de sonido premium",
        description: "Sistema de audio de alta fidelidad para una experiencia sonora perfecta"
      },
      {
        icon: "🎧",
        title: "DJ con música actualizada",
        description: "DJ profesional con amplio repertorio musical y música actual"
      },
      {
        icon: "💡",
        title: "Luces móviles y láser RGB",
        description: "Efectos de iluminación dinámica con colores vibrantes"
      },
      {
        icon: "💨",
        title: "Efectos de humo y chisperos",
        description: "Efectos especiales para momentos climáticos del evento"
      }
    ]
  },
  fotografia: {
    title: "📸 Fotografía & Video Cinematográfico",
    subtitle: "Filmación cinematográfica, sesiones exteriores y cuadro de firmas",
    icon: Video,
    color: "from-green-500 to-emerald-600",
    services: [
      {
        icon: "🎬",
        title: "Criterio cinematográfico",
        description: "Producción audiovisual con técnicas cinematográficas profesionales"
      },
      {
        icon: "🏞️",
        title: "Sesiones en locaciones abiertas",
        description: "Fotografías en espacios exteriores con paisajes naturales"
      },
      {
        icon: "🖼️",
        title: "Trabajo final: Cuadro de firmas",
        description: "Cuadro personalizado donde los invitados dejan sus mensajes"
      },
      {
        icon: "✨",
        title: "Tomas espontáneas de calidad",
        description: "Captura de momentos únicos y naturales durante el evento"
      }
    ]
  },
  banquete: {
    title: "🍰 Banquete Delicioso",
    subtitle: "Buffet completo con aperitivos, cena gourmet, torta personalizada y bebidas",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    services: [
      {
        icon: "🥂",
        title: "Champagne helado en cristal",
        description: "Brindis con champagne servido en copas de cristal"
      },
      {
        icon: "🍸",
        title: "Aperitivos y digestivos selectos",
        description: "Variedad de bocaditos y bebidas para acompañar"
      },
      {
        icon: "🍴",
        title: "Cena con múltiples opciones",
        description: "Buffet completo con opciones para todos los gustos"
      },
      {
        icon: "🎂",
        title: "Torta en masa elástica personalizada",
        description: "Torta diseñada según la temática y gustos del evento"
      }
    ]
  },
  entretenimiento: {
    title: "🎉 Entretenimiento Espectacular",
    subtitle: "Hora loca con personajes, juegos interactivos, seguridad profesional y anfitrionaje",
    icon: Entertainment,
    color: "from-yellow-500 to-orange-600",
    services: [
      {
        icon: "🎭",
        title: "Personajes de TV y cine",
        description: "Animadores caracterizados como personajes favoritos"
      },
      {
        icon: "🎲",
        title: "Juegos y animación",
        description: "Actividades interactivas para mantener entretenidos a los invitados"
      },
      {
        icon: "👮",
        title: "Personal de seguridad",
        description: "Equipo de seguridad profesional para garantizar tranquilidad"
      },
      {
        icon: "🎆",
        title: "Anfitrionaje especializado",
        description: "Maestro de ceremonias para coordinar y dirigir el evento"
      }
    ]
  }
}

// Características y servicios adicionales (mantener para compatibilidad)
export const features: Feature[] = [
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

// Testimonios de clientes
export const testimonials: Testimonial[] = [
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
]

// Información de contacto
export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "📍 Nuestra Ubicación",
    value: "Av. El Sol 527, San Carlos, S.J.L",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Phone,
    title: "📞 Llámanos",
    value: "+51 999 999 999",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Mail,
    title: "📧 Escríbenos",
    value: "contacto@produccionessbenny.com",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Instagram,
    title: "📸 Instagram",
    value: "@produccionessbenny",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Facebook,
    title: "🔗 Facebook",
    value: "facebook.com/produccionessbenny",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: WhatsApp,
    title: "💬 WhatsApp",
    value: "+51 999 999 999",
    color: "from-red-500 to-pink-600",
  },
]

// Información de la empresa
export const companyInfo = {
  name: "Producciones Benny",
  tagline: "Eventos e Imagen ✨",
  description: "Eventos Premium desde 2010",
  stats: [
    {
      number: "500+",
      label: "Fiestas Increíbles",
      emoji: "🎊",
      color: "from-pink-600 to-purple-600",
      bgColor: "border-pink-200",
    },
    {
      number: "15+",
      label: "Años de Alegría",
      emoji: "✨",
      color: "from-yellow-500 to-orange-500",
      bgColor: "border-yellow-200",
    },
    {
      number: "100%",
      label: "Sonrisas Garantizadas",
      emoji: "🎈",
      color: "from-green-500 to-emerald-500",
      bgColor: "border-green-200",
    },
  ],
}