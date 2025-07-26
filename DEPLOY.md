# 🚀 Guía de Deploy - Producciones Benny

## ✅ Proyecto Listo para Deploy

El proyecto ya está completamente preparado y probado para deployment en Vercel.

## 📋 Pasos para Deploy en Vercel

### 1. Subir a GitHub

```bash
# Si no tienes Git inicializado
git init
git add .
git commit -m "🎉 Initial commit - Producciones Benny website"

# Crear repositorio en GitHub (ve a github.com)
# Luego conectar:
git remote add origin https://github.com/TU_USUARIO/producciones-benny.git
git branch -M main
git push -u origin main
```

### 2. Deploy en Vercel

1. **Ir a [vercel.com](https://vercel.com)**
2. **Hacer clic en "Sign up" y usar tu cuenta de GitHub**
3. **Clic en "Import Project"**
4. **Seleccionar tu repositorio "producciones-benny"**
5. **Vercel detectará automáticamente que es Next.js**
6. **Hacer clic en "Deploy"**

### 3. ¡Listo! 🎉

- Tu sitio estará en: `https://producciones-benny.vercel.app`
- Cada vez que hagas push a GitHub, se actualizará automáticamente
- HTTPS automático incluido

## 📝 Configuraciones Post-Deploy

### Actualizar datos reales:
Edita el archivo `src/lib/constants.ts`:

```javascript
export const SITE_CONFIG = {
  // ... otros campos
  links: {
    whatsapp: "https://wa.me/TU_NUMERO_REAL",
    instagram: "https://instagram.com/CUENTA_REAL",
    facebook: "https://facebook.com/CUENTA_REAL",
    email: "mailto:EMAIL_REAL",
    phone: "tel:+TELEFONO_REAL",
  },
}
```

### Dominio personalizado (opcional):
1. En Vercel Dashboard → Settings → Domains
2. Agregar tu dominio personalizado
3. Configurar DNS según las instrucciones

## 🔧 Comandos útiles

```bash
# Desarrollo local
pnpm dev

# Build de prueba
pnpm build

# Servir build local
pnpm start

# Linting
pnpm lint
```

## 📱 URLs del proyecto

- **Desarrollo**: http://localhost:3000
- **Producción**: https://producciones-benny.vercel.app (después del deploy)

---

## 🎯 Para tu cliente

Una vez deployado, tu cliente podrá ver el sitio en vivo en la URL de Vercel. Cualquier cambio que hagas y subas a GitHub se reflejará automáticamente en el sitio web.