# Next.js App Router - Guía de Estructura de Proyecto

> **Fuente:** [Next.js Project Structure Documentation](https://nextjs.org/docs/app/getting-started/project-structure)
> **Fecha de consulta:** 2025-01-25

## 📁 Carpetas de Nivel Superior

### Carpetas Principales del Framework

| Carpeta | Propósito |
|---------|-----------|
| `app` | **App Router** - Nueva arquitectura de rutas |
| `pages` | **Pages Router** - Arquitectura legacy |
| `public` | **Assets estáticos** - Servidos desde la raíz |
| `src` | **Código fuente** - Carpeta opcional para organización |

### Carpetas de Configuración y Tooling

| Carpeta | Descripción |
|---------|-------------|
| `.next` | Output de construcción de Next.js |
| `node_modules` | Dependencias del proyecto |
| `.env*` | Variables de entorno |
| `next.config.js` | Archivo de configuración |
| `package.json` | Dependencias y scripts |
| `instrumentation.ts` | Archivo de instrumentación |
| `middleware.ts` | Middleware de Next.js |

## 🗂️ Convenciones de Routing del App Router

### Archivos Especiales de Routing

| Archivo | Propósito | Ejemplo |
|---------|-----------|---------|
| `layout.js` | Layout compartido | `app/layout.js` |
| `page.js` | Página única y accesible públicamente | `app/page.js` |
| `loading.js` | UI de carga | `app/loading.js` |
| `not-found.js` | UI de página no encontrada | `app/not-found.js` |
| `error.js` | UI de error | `app/error.js` |
| `global-error.js` | UI de error global | `app/global-error.js` |
| `route.js` | Endpoint de API | `app/api/route.js` |
| `template.js` | Layout re-renderizado | `app/template.js` |
| `default.js` | Fallback de rutas paralelas | `app/@folder/default.js` |

### Rutas Anidadas

```
app/
├── layout.js          # Layout raíz
├── page.js            # Página principal (/)
├── dashboard/         # Ruta: /dashboard
│   ├── layout.js      # Layout del dashboard
│   ├── page.js        # Página del dashboard
│   └── settings/      # Ruta: /dashboard/settings
│       └── page.js    # Página de configuración
└── blog/              # Ruta: /blog
    ├── [slug]/        # Ruta dinámica: /blog/[slug]
    │   └── page.js
    └── page.js        # Lista de blog
```

### Rutas Dinámicas

| Convención | Ejemplo | URL |
|------------|---------|-----|
| `[folder]` | `[id]/page.js` | `/1`, `/2`, `/abc` |
| `[...folder]` | `[...slug]/page.js` | `/a`, `/a/b`, `/a/b/c` |
| `[[...folder]]` | `[[...slug]]/page.js` | `/`, `/a`, `/a/b` |

## 🏗️ Estrategias de Organización de Proyecto

### 1. Almacenar archivos fuera de `app`

```
proyecto/
├── components/        # Componentes reutilizables
│   ├── ui/
│   └── forms/
├── lib/              # Funciones utilidad
├── hooks/            # Custom hooks
├── app/              # Solo archivos de routing
│   ├── layout.js
│   ├── page.js
│   └── dashboard/
│       └── page.js
└── public/           # Assets estáticos
```

**✅ Ventajas:**
- Separación clara entre lógica de routing y componentes
- Fácil reutilización de componentes
- Estructura limpia

### 2. Almacenar archivos en carpetas de nivel superior de `app`

```
app/
├── (marketing)/      # Grupo de rutas
│   ├── about/
│   └── contact/
├── (shop)/
│   ├── checkout/
│   └── product/
├── globals.css
├── layout.js
└── page.js
```

**✅ Ventajas:**
- Todo el código relacionado con rutas en un lugar
- Colocación de archivos por característica

### 3. Separar archivos por característica o ruta

```
app/
├── dashboard/
│   ├── _components/   # Componentes privados del dashboard
│   │   ├── nav.js
│   │   └── sidebar.js
│   ├── _lib/         # Utilidades privadas
│   │   └── utils.js
│   ├── layout.js
│   ├── page.js
│   └── settings/
│       └── page.js
├── globals.css
├── layout.js
└── page.js
```

**✅ Ventajas:**
- Máxima colocación
- Fácil navegación
- Encapsulación por característica

## 📂 Convenciones Especiales

### Carpetas Privadas
Prefijo con `_` para crear carpetas privadas:

```
app/
├── _components/      # No crea rutas
├── _lib/            # No crea rutas
├── (dashboard)/     # Grupo de rutas
└── dashboard/       # Crea ruta /dashboard
```

### Grupos de Rutas
Usa paréntesis `()` para agrupar rutas sin afectar la URL:

```
app/
├── (marketing)/
│   ├── about/       # URL: /about
│   └── contact/     # URL: /contact
└── (shop)/
    ├── cart/        # URL: /cart
    └── checkout/    # URL: /checkout
```

### Rutas Paralelas
Usa `@` para rutas paralelas:

```
app/
├── @analytics/
│   └── page.js
├── @team/
│   └── page.js
├── layout.js       # Recibe ambas como props
└── page.js
```

## 🎯 Estructura Recomendada para Proyecto Típico

### Opción A: Separación Completa

```
proyecto/
├── src/                    # Carpeta fuente opcional
│   ├── app/               # App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── route.ts
│   ├── components/        # Componentes globales
│   │   ├── ui/           # Componentes de UI
│   │   └── layout/       # Componentes de layout
│   ├── lib/              # Utilidades
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── hooks/            # Custom hooks
├── public/               # Assets estáticos
├── next.config.js
├── tailwind.config.js
└── package.json
```

### Opción B: Por Características

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── _components/
│   │   │   ├── hero.tsx
│   │   │   └── cta.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── dashboard/
│   │   ├── _components/
│   │   ├── _lib/
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/           # Componentes compartidos
    └── ui/
```

## 📋 Mejores Prácticas

### ✅ Recomendado
- Usar carpeta `src/` para proyectos medianos/grandes
- Colocar componentes relacionados cerca de donde se usan
- Usar carpetas privadas (`_`) para implementación interna
- Usar grupos de rutas `()` para organización lógica
- Mantener `app/` enfocado en routing

### ❌ Evitar
- Mezclar lógica de negocio con archivos de routing
- Anidar demasiado profundo
- Nombres inconsistentes de carpetas
- Colocar todos los componentes en una sola carpeta

## 🔗 Archivos de Configuración Importantes

| Archivo | Propósito |
|---------|-----------|
| `next.config.js` | Configuración de Next.js |
| `middleware.ts` | Middleware del Edge Runtime |
| `instrumentation.ts` | Instrumentación y telemetría |
| `tsconfig.json` | Configuración TypeScript |
| `tailwind.config.js` | Configuración Tailwind CSS |

Esta estructura proporciona flexibilidad mientras mantiene las convenciones establecidas por Next.js App Router.