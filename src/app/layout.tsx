import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import ErrorBoundary from '@/components/error-boundary'
import './globals.css'

export const metadata: Metadata = {
  title: 'Producciones Benny - Eventos de Ensueño en Lima | Quinceaños, Bodas, Cumpleaños',
  description: 'Especialistas en eventos únicos desde 2010. Quinceaños mágicos, bodas de cuento, cumpleaños especiales. ¡500+ familias felices nos respaldan!',
  keywords: 'eventos lima, quinceaños lima, bodas lima, cumpleaños, producciones benny, eventos sociales, fiestas lima',
  generator: 'Producciones Benny',
  openGraph: {
    title: 'Producciones Benny - Eventos de Ensueño en Lima',
    description: 'Especialistas en eventos únicos desde 2010. Quinceaños, bodas, cumpleaños especiales.',
    type: 'website',
    locale: 'es_PE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-PE">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
