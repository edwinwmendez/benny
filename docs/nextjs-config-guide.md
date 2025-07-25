# Next.js Configuration Guide - next.config.js

> **Fuente:** [Next.js Configuration Documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js)
> **Fecha de consulta:** 2025-01-25

## 📋 Introducción

`next.config.js` es un archivo de configuración regular de Node.js (no un archivo JSON) que se coloca en la raíz del proyecto (junto a `package.json`) y es usado por el servidor de Next.js y las fases de construcción.

## 🔧 Tipos de Configuración

### Configuración Básica

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* opciones de configuración aquí */
}

module.exports = nextConfig
```

### Configuración ESM (.mjs)

```javascript
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* opciones de configuración aquí */
}

export default nextConfig
```

### Configuración con Función

```javascript
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* opciones de configuración aquí */
  }
  return nextConfig
}
```

### Configuración Async

```javascript
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* opciones de configuración aquí */
  }
  return nextConfig
}
```

## 🏗️ Opciones de Configuración Principales

### Build y Output

#### `output`
Controla cómo Next.js construye y exporta la aplicación:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 'standalone' | 'export'
}
```

#### `distDir`
Directorio personalizado para la construcción:

```javascript
const nextConfig = {
  distDir: 'build', // Por defecto es '.next'
}
```

#### `generateBuildId`
ID de construcción personalizado:

```javascript
const nextConfig = {
  generateBuildId: async () => {
    // Retorna un string único para esta construcción
    return 'my-build-id'
  },
}
```

### Performance y Optimización

#### `compress`
Habilita compresión gzip:

```javascript
const nextConfig = {
  compress: true, // Por defecto true en producción
}
```

#### `productionBrowserSourceMaps`
Genera source maps en producción:

```javascript
const nextConfig = {
  productionBrowserSourceMaps: true,
}
```

#### `optimizePackageImports`
Optimiza imports de paquetes:

```javascript
const nextConfig = {
  optimizePackageImports: ['lodash', 'date-fns'],
}
```

### Routing y URLs

#### `basePath`
Despliega la aplicación bajo un sub-path:

```javascript
const nextConfig = {
  basePath: '/docs',
}
```

#### `trailingSlash`
Configura el comportamiento de las barras finales:

```javascript
const nextConfig = {
  trailingSlash: true, // Añade slash al final
}
```

#### `redirects`
Configura redirects:

```javascript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
    ]
  },
}
```

#### `rewrites`
Configura rewrites (cambios de URL internos):

```javascript
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
}
```

### Headers y Seguridad

#### `headers`
Configura headers personalizados:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}
```

#### `poweredByHeader`
Controla el header X-Powered-By:

```javascript
const nextConfig = {
  poweredByHeader: false, // Remueve el header
}
```

### Variables de Entorno

#### `env`
Variables de entorno disponibles en el cliente:

```javascript
const nextConfig = {
  env: {
    CUSTOM_KEY: 'my-value',
    API_URL: process.env.API_URL,
  },
}
```

### React y JavaScript

#### `reactStrictMode`
Habilita React Strict Mode:

```javascript
const nextConfig = {
  reactStrictMode: true, // Recomendado
}
```

#### `swcMinify`
Usa SWC para minificación:

```javascript
const nextConfig = {
  swcMinify: true, // Por defecto desde Next.js 13
}
```

### TypeScript

#### `typescript`
Configuración de TypeScript:

```javascript
const nextConfig = {
  typescript: {
    // ⚠️ Peligroso: permite errores de TypeScript en producción
    ignoreBuildErrors: true,
  },
}
```

### ESLint

#### `eslint`
Configuración de ESLint:

```javascript
const nextConfig = {
  eslint: {
    // ⚠️ Peligroso: permite errores de ESLint en producción
    ignoreDuringBuilds: true,
    dirs: ['pages', 'utils'], // Solo ejecuta ESLint en estas carpetas
  },
}
```

### Imágenes

#### `images`
Configuración del componente Image:

```javascript
const nextConfig = {
  images: {
    domains: ['example.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
}
```

### Webpack

#### `webpack`
Configuración personalizada de Webpack:

```javascript
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modificaciones personalizadas de webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
```

### Experimental Features

#### `experimental`
Características experimentales:

```javascript
const nextConfig = {
  experimental: {
    appDir: true, // Habilita App Router (estable desde 13.4)
    turbopack: true, // Habilita Turbopack
    serverComponentsExternalPackages: ['@prisma/client'],
  },
}
```

## 🚀 Configuraciones Comunes por Tipo de Proyecto

### Landing Page / Marketing Site

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para hosting estático
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Para export estático
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### Full-Stack Application

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.example.com', 'api.example.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig
```

### High-Performance Application

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  optimizePackageImports: [
    'lodash',
    'date-fns',
    '@mui/material',
    '@mui/icons-material',
  ],
  experimental: {
    turbopack: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all'
    }
    return config
  },
}

module.exports = nextConfig
```

## 🔒 Configuraciones de Seguridad

### Headers de Seguridad Recomendados

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 📋 Mejores Prácticas

### ✅ Recomendado

1. **Siempre usar TypeScript annotations:**
   ```javascript
   /** @type {import('next').NextConfig} */
   ```

2. **Habilitar React Strict Mode:**
   ```javascript
   reactStrictMode: true
   ```

3. **Usar SWC minifier:**
   ```javascript
   swcMinify: true
   ```

4. **Configurar imágenes apropiadamente:**
   ```javascript
   images: {
     domains: ['trusted-domain.com'],
     formats: ['image/webp'],
   }
   ```

5. **Implementar headers de seguridad:**
   ```javascript
   async headers() {
     return [/* headers de seguridad */]
   }
   ```

### ❌ Evitar

1. **Ignorar errores en producción:**
   ```javascript
   // ❌ Evitar
   typescript: { ignoreBuildErrors: true }
   eslint: { ignoreDuringBuilds: true }
   ```

2. **Configuraciones inseguras:**
   ```javascript
   // ❌ Evitar
   images: { domains: ['*'] }
   ```

3. **Exponer secretos:**
   ```javascript
   // ❌ Evitar
   env: {
     SECRET_KEY: process.env.SECRET_KEY // No hacer esto
   }
   ```

## 🔄 Fases de Configuración

Next.js pasa diferentes fases al archivo de configuración:

```javascript
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* configuración de desarrollo */
    }
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      /* configuración de producción */
    }
  }

  return {
    /* configuración por defecto */
  }
}
```

Esta guía cubre las configuraciones más importantes de `next.config.js` para optimizar tu aplicación Next.js según tus necesidades específicas.