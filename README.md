# Kuskalla Import — Landing Premium

Landing de una página para **Kuskalla Import** (Lima): importadores directos de
acabados premium SPC y PVC. Estilo showroom oscuro fiel a su marca.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion
- Tipografía: Poppins (display) + Lato (cuerpo)

## Desarrollo local
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Variables de entorno (opcionales)
Copia `.env.local.example` a `.env.local` y pega tus IDs (sin ellos la web
funciona igual, solo no rastrea):
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 (`G-XXXXXXXXXX`)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta/Facebook Pixel
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — token de Google Search Console

## Subir a GitHub
```bash
git init
git add .
git commit -m "Kuskalla Import landing"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/kuskalla.git
git push -u origin main
```
> No se sube `node_modules`, `.next` ni `.env.local` (ya están en `.gitignore`).
> El `.env.local.example` sí se sube como plantilla.

## Desplegar en Vercel
1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio de GitHub.
2. Vercel detecta **Next.js** automáticamente (no hay que configurar build).
3. (Opcional) En *Settings → Environment Variables* pega `NEXT_PUBLIC_GA_ID`,
   `NEXT_PUBLIC_META_PIXEL_ID` y `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
4. Deploy. Cada `git push` a `main` vuelve a desplegar automáticamente.
5. Conecta tu dominio `kuskallaimport.com` en *Settings → Domains*.

> El SEO usa `https://kuskallaimport.com` (en `app/layout.tsx`, `robots.ts`,
> `sitemap.ts`). Si usas otro dominio, actualiza `SITE_URL` en esos archivos.

## Estructura
- `app/page.tsx` — landing completa (todas las secciones).
- `app/layout.tsx` — metadata SEO, JSON-LD, Nav/Footer, barra móvil, analítica.
- `app/sitemap.ts`, `app/robots.ts` — SEO técnico.
- `components/` — Hero, Process, BeforeAfter, Catálogo, ProjectsStack, TikTokFeed,
  Testimonials, Faq, QuoteForm, MobileCTABar, etc.
- `lib/content.ts` — datos reales (contacto, productos, FAQ, testimonios).
- `public/img/` — imágenes (WebP optimizadas).

## Datos / medios
- Contacto, dirección, horario, reseñas y redes en `lib/content.ts`. Los CTA abren
  WhatsApp (`wa.me/51939511299`) con mensaje prellenado.
- Imágenes de producto: reales de kuskallaimport.com (pertenecen al negocio).
  Par `antes/despues` y paisajes generados a medida.
- Testimonios: de muestra (reemplazar por reseñas reales). Fotos de stock.
- Videos: embeds reales del TikTok `@kuskallaimport`.
