# Video Expansion — Scroll-Driven Media Showcase

Live Demo: https://gourab775.github.io/video-expansion

Category: Creative Agency / Media Portfolio

Stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion

## Overview

Video Expansion is a premium creative-agency showcase anchored by an immersive scroll-to-expand hero. Media (video or image) expands from a centered card into full-bleed as the user scrolls, revealing an editorial landing with services, portfolio, proof metrics, testimonials, and a conversion CTA — all orchestrated with motion and built for performance and SEO via Next.js App Router.

The design system leans on Tailwind 4, shadcn patterns, Base UI primitives, and Framer Motion for staggered reveals, while remote image handling is pre-configured for Unsplash and Pexels.

## Features

- **Scroll-Expand Hero** — `ScrollExpandMedia` component with scrubbed expansion (card → full-bleed), background parallax, and toggled media source (video ↔ image) with fade and backdrop blur
- **Complete Agency Narrative** — Hero → Services (3-card grid) → Portfolio (4-project masonry) → Stats (250+/80+/15+/8+ metrics) → Testimonials → CTA, with `SectionReveal` and `StaggerChildren` choreography
- **Media Toggle** — Fixed glass toggle (Video/Image) with active gradient (`emerald 05B/10B981`) and auto-hide on scroll >100px
- **Modern App Router** — `src/app` routing (`/`, `/services`, `/work`, `/contact`), `next/font` Geist, `next.config.ts` remotePatterns for `images.unsplash.com` and `images.pexels.com`
- **Motion & Polish** — Framer Motion entrance/stagger, `GradientCard`, responsive grids, optimized posters and fallbacks, backdrop-blur glass and gradient accents

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, PostCSS, `tailwind-merge`, `tw-animate-css`, `clsx` |
| Animation | Framer Motion 12 |
| UI | Base UI React, shadcn, `class-variance-authority`, `lucide-react` |
| Media | Pexels MP4 + Unsplash images, static posters/backgrounds |

## Project Structure

```
video-expansion/
├── src/
│   ├── app/
│   │   ├── page.tsx             # Home (toggle + ScrollExpandMedia + sections)
│   │   ├── layout.tsx           # Root layout
│   │   ├── services/ work/ contact/ (routes)
│   │   └── globals.css
│   ├── components/
│   │   └── ui/
│   │       ├── scroll-expansion-hero.tsx  # Core expand mechanic
│   │       ├── GradientCard.tsx
│   │       ├── SectionReveal.tsx
│   │       ├── SectionHeading.tsx
│   │       └── StaggerChildren.tsx
│   └── lib/
│       └── utils.ts
├── public/                      # Static assets
├── next.config.ts               # images.remotePatterns (unsplash, pexels)
├── components.json              # shadcn config
├── eslint.config.mjs / postcss.config.mjs
└── package.json
```

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

## Deployment

```bash
npm run build
```

- **Vercel** — Zero-config Next.js import; build `npm run build`
- **GitHub Pages (static export)** — Set `output: 'export'` in `next.config.ts` if needed and publish `out/`; live at https://gourab775.github.io/video-expansion
- **Netlify / EdgeOne Pages / Node host** — `npm run build` then `npm run start` (SSR) or static export for CDN

Remote images are pre-allowed in `next.config.ts` for Pexels and Unsplash; add additional CDNs there if needed.

## Customization

- **Hero Media** — Replace `natureMedia` URLs in `src/app/page.tsx` (Pexels MP4, Unsplash posters/backgrounds) and titles; tune `ScrollExpandMedia` props
- **Sections** — Edit `FEATURES`, `PORTFOLIO`, `STATS`, `TESTIMONIALS` arrays in `src/app/page.tsx`; add/remove `<section>` blocks
- **Motion** — Adjust delays/stagger in `SectionReveal` / `StaggerChildren` / `framer-motion` transitions
- **Design** — Theme via Tailwind 4 in `src/app/globals.css`, glass/toggle colors in inline styles, card variants via `cva` in `src/components/ui/`
- **Routes** — Implement `/services`, `/work`, `/contact` in `src/app/{route}/page.tsx` (currently linked placeholders)

## License

MIT — free for personal and commercial use.
