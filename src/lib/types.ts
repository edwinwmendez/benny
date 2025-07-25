// Tipos TypeScript para la aplicación
export interface GalleryItem {
  id: number
  category: string
  type: string
  title: string
  description: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  badgeColor: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  features: string[]
  color: string
  bgColor: string
  price: string
  popular: boolean
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
  bgColor: string
}

export interface Testimonial {
  name: string
  event: string
  text: string
  color: string
  bgColor: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  color: string
}

export type FilterType = "todos" | "quinceanos" | "bodas" | "cumpleanos" | "promociones" | "otros"