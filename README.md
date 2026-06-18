# Auden Landscape Architecture & Design Studio

A premium, production-ready website for a landscape architecture studio, built with modern tools and best practices.

---

## Tech Stack

- **Framework:** React 19
- **Bundler:** Vite 8
- **Language:** TypeScript 6 (strict mode)
- **Styling:** Tailwind CSS 4 (custom earth-tone theme tokens)
- **Animations:** motion (v12)
- **Routing:** react-router-dom v7 (SPA with multi-page routing)
- **Meta tags:** react-helmet-async
- **Icons:** lucide-react v1
- **PWA:** vite-plugin-pwa (service worker + manifest)
- **Linting:** ESLint 9 + typescript-eslint + eslint-plugin-react-hooks

---

## Design Palette

| Token | Hex | Usage |
|-------|-----|-------|
| brand-white | `#FFFFFF` | Cards, bg |
| warm-beige | `#F9F6F0` | Page bg |
| light-beige | `#E8DDD0` | Borders |
| dark-brown | `#2C1810` | Headings, footer, overlays |
| warm-brown | `#5C4033` | Body text |
| golden-brown | `#8B6914` | Accents, buttons, hover |
| darker-brown | `#6B4F12` | Hover states |

---

## Routes

| Path | Page | Meta Tags |
|------|------|-----------|
| `/` | Home (all sections) | Static |
| `/projects/:id` | Project detail | Dynamic (title, og:*, twitter:*) |
| `/terms` | Terms & Conditions | Static |
| `*` | 404 Not Found | noindex |

---

## Features

- **Performance:** `font-display: swap`, `fetchPriority`, `loading="lazy"`, `srcSet`/`sizes` for responsive images, `requestAnimationFrame`-throttled scroll handlers
- **SEO:** Semantic HTML, JSON-LD structured data (LocalBusiness), Open Graph / Twitter Card meta tags, `robots.txt`, dynamic `sitemap.xml`
- **Accessibility:** Proper heading hierarchy, `aria-expanded`, `aria-label`, focus trapping in modal, focus restoration on close, reduced-motion support via CSS
- **PWA:** Service worker with Workbox precaching, manifest.webmanifest (add to home screen)
- **UX:** Cookie consent banner, scroll-to-top button, error boundary error recovery, 404 page, smooth scroll navigation, section-based active nav tracking
- **Scroll Restoration:** Automatic scroll-to-top on route change via `ScrollToTop` component

---

## Commands

```bash
npm run dev       # Development server (port 3000)
npm run build     # Production build + sitemap generation
npm run preview   # Preview production build
npm run lint      # TypeScript check + ESLint
npm run lint:ts   # TypeScript check only
npm run clean     # Remove dist/ and server.js
```

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `SITE_URL` | `https://example.com` | Base URL used in sitemap generation |

Set `SITE_URL` before `npm run build` to use your actual domain:
```bash
SITE_URL=https://yourdomain.com npm run build
```
