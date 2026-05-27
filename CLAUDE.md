# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js, port 3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint via next lint
```

No test runner is configured.

## Architecture

This is a **single-page marketing website** for Vecminds Technologies built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v3.

### Page structure

`app/page.tsx` composes the page as a linear stack of section components in this order:

```
Navbar → HeroSection → ServicesSection → TechStackSection →
DeliveryModelsSection → ProcessSection → AboutSection →
TeamSection → FaqSection → Footer
```

`WorkSection`, `TestimonialsSection`, and `ClientsSection` exist but are commented out.

### Key files

| File | Purpose |
|---|---|
| `lib/integrations.ts` | Calendly URL, GA and GTM IDs — all tracking/integration constants live here |
| `lib/data.ts` | Content arrays (`HERO_BRANDS`, `BACKERS` tech stack) and shared TypeScript interfaces (`Brand`, `StackItem`) |
| `components/ScrollReveal.tsx` | Client component using `IntersectionObserver` to add `.reveal` / `.is-visible` classes for scroll-triggered fade-in animations |
| `app/globals.css` | All custom CSS: marquee animations, `.svc-card` hover choreography, `.team-card` flex-accordion, `.smart-nav` hide/show, `.reveal` scroll animation, `.btn-shine` button effect |

### Conventions

- **Max content width**: `max-w-[88rem] mx-auto` — used consistently across all sections and the navbar.
- **Brand color**: `#2754D9` (blue) used for CTAs, hover states, and the Footer CTA block.
- **Background**: `#F5F5F5` site-wide.
- **Fonts**: Manrope (primary, `font-sans`) and Inter (`font-inter`), loaded via `next/font/google` and exposed as CSS variables.
- **Section IDs** for anchor links: `#services`, `#process`, `#team`, `#about`, `#contact` (Footer).
- **Client components**: Only `Navbar`, `Footer`, and `ScrollReveal` use `'use client'`. All other components are server components (no interactivity needed).
- **Calendly**: Loaded via `<Script>` in `layout.tsx`. `Navbar` and `Footer` call `window.Calendly.initPopupWidget()` on click; they fall back to the raw `CALENDLY_URL` if the widget hasn't loaded.
- **Analytics**: GA4 + GTM IDs are hardcoded in `lib/integrations.ts` and injected via `<Script>` tags in `layout.tsx`.
- **Remote images**: `next.config.ts` allowlists `ik.imagekit.io`, `cdn.jsdelivr.net`, and `images.higgs.ai`. Tech stack icons are fetched from `cdn.jsdelivr.net/gh/devicons/devicon`.
- **Scroll animations**: Add class `reveal` to any element; `ScrollReveal` picks it up automatically via a set of CSS selectors. The `.is-visible` class triggers the CSS transition defined in `globals.css`.
- **Hover utilities**: CSS classes like `.svc-card`, `.dm-row`, `.team-card`, `.card-lift`, `.btn-shine`, `.expand-card` are defined in `globals.css` and applied directly in components — they are not Tailwind utilities.

### SEO / structured data

`app/layout.tsx` injects `Organization` and `WebSite` JSON-LD schemas inline in `<head>`. OpenGraph and Twitter card metadata are exported as the `metadata` constant from the same file.
