// Constantes de la aplicación

export const SITE_CONFIG = {
  name: "Producciones Benny",
  tagline: "Eventos e Imagen ✨",
  description: "Creamos momentos mágicos llenos de alegría, diversión y felicidad para tus celebraciones más especiales",
  url: "https://produccionesbenny.com",
  ogImage: "/og-image.jpg",
  links: {
    whatsapp: "https://wa.me/51999999999",
    instagram: "https://instagram.com/produccionessbenny",
    facebook: "https://facebook.com/produccionessbenny",
    email: "mailto:contacto@produccionessbenny.com",
    phone: "tel:+51999999999",
  },
}

export const FILTER_OPTIONS = [
  { key: "todos", label: "🎉 Todos los Eventos", color: "from-pink-500 to-purple-600" },
  { key: "quinceanos", label: "👑 Quinceaños", color: "from-pink-500 to-rose-600" },
  { key: "bodas", label: "💒 Bodas", color: "from-red-500 to-pink-600" },
  { key: "cumpleanos", label: "🎂 Cumpleaños", color: "from-blue-500 to-cyan-600" },
  { key: "promociones", label: "🎓 Promociones", color: "from-green-500 to-emerald-600" },
  { key: "otros", label: "🎊 Otros Eventos", color: "from-purple-500 to-violet-600" },
] as const

export const NAVIGATION_ITEMS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const

export const BANQUET_ITEMS = {
  bebidas: [
    "🍾 Champagne helado en copas de cristal",
    "🥤 Gaseosas y agua por mesa",
    "💧 Agua mineral en dispensador",
    "🍹 Aperitivos: Pisco Sour, Maracuyá Sour, Chilcano",
    "🍸 Digestivos: Algarrobina, Daiquiri, Piña Colada",
  ],
  cena: [
    "🍗 Pollo al horno, al ajillo, enrollado",
    "🥗 Ensaladas: blanca, alemana, rusa, wolf",
    "🍚 Arroz al olivo, jardinera, árabe, blanco",
    "👨‍🍳 Preparaciones gourmet variadas",
  ],
  postres: [
    "🍗 Piernitas de pollo",
    "🥪 Sándwiches tropicales",
    "🍓 Tartaletas de fresa",
    "🎂 Torta personalizada en cajitas",
    "🍫 Trufas y alfajores",
  ],
}

export const ENTERTAINMENT_ITEMS = {
  horaLoca: [
    "🎬 Personajes de TV y cine",
    "👗 Variedad de vestuarios temáticos",
    "🐍 Juegos interactivos: Anaconda, Salta Soga",
    "🕺 Limbo, Pole Dance, Pistola Shop",
    "🎈 Globos pencil y animación",
  ],
  adicionales: [
    "🍫 Pileta de chocolate",
    "🍎 Mesa de frutas de estación",
    "🚗 Limusina y cadetes",
    "💃 Pista de baile LED",
    "📺 Pantalla LED gigante",
    "📸 Selfie 360° y anfitrionaje temático",
  ],
}

export const RESPONSE_TIME = "Te respondemos en menos de 30 minutos"
export const PRIVACY_MESSAGE = "Solo necesitamos estos datos básicos para enviarte una propuesta personalizada 💖"