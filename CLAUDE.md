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

This is primarily a **single-page marketing website** for Vecminds Technologies built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v3 — the homepage carries most of the content, with a small number of standalone routes layered on top for SEO (services hub + detail pages, legal).

### Homepage section order

`app/page.tsx` composes the homepage as a linear stack of section components in this order:

```
Navbar → HeroSection → ServicesSection → TechStackSection →
DeliveryModelsSection → ProcessSection → AboutSection →
TeamSection → FaqSection → Footer
```

`WorkSection`, `TestimonialsSection`, and `ClientsSection` exist but are commented out.

### Routes

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Homepage — section stack above |
| `/services` | `app/services/page.tsx` | Services index/hub. Lists both services from `lib/services.ts` with their own card + `heroLead` teaser. Has its own `BreadcrumbList` + `ItemList` JSON-LD. **Not** linked from Navbar/Footer — those intentionally still point to the homepage `#services` anchor (see Conventions below) |
| `/services/custom-software-development` | `app/services/custom-software-development/page.tsx` | Static route (not a dynamic `[slug]`) — calls `getService("custom-software-development")` |
| `/services/ai-development-automation` | `app/services/ai-development-automation/page.tsx` | Same pattern — `getService("ai-development-automation")` |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Privacy policy |
| 404 | `app/not-found.tsx` | Self-contained, inline-styled (no Tailwind/shared components) |

Both service detail routes render through the shared `components/ServiceDetail.tsx` template, driven entirely by `lib/services.ts`. To add a new service: add an entry to the `SERVICES` array, then add a thin route file that calls `getService(slug)` and renders `<ServiceDetail service={service} />` — copy an existing service page file as the template.

### Key files

| File | Purpose |
|---|---|
| `lib/integrations.ts` | GA and GTM IDs — all tracking/integration constants live here |
| `lib/data.ts` | Content arrays (`HERO_BRANDS`, `BACKERS` tech stack) and shared TypeScript interfaces (`Brand`, `StackItem`) |
| `lib/services.ts` | Single source of truth for service content (titles, FAQs, deliverables, process steps, meta tags). Powers `ServicesSection`, `ServiceDetail`, the `/services` index, and `app/sitemap.ts` |
| `components/ScrollReveal.tsx` | Client component using `IntersectionObserver` to add `.reveal` / `.is-visible` classes for scroll-triggered fade-in animations |
| `components/ServiceDetail.tsx` | Shared page template rendered by both service detail routes |
| `app/sitemap.ts` / `app/robots.ts` | Sitemap and robots config. `sitemap.ts` uses hardcoded `lastModified` constants (never `new Date()`) so builds don't reset Google's recrawl-trust signal |
| `app/globals.css` | All custom CSS: marquee animations, `.svc-card` hover choreography, `.team-card` flex-accordion, `.smart-nav` hide/show, `.reveal` scroll animation, `.btn-shine` button effect |

### Conventions

- **Max content width**: `max-w-[88rem] mx-auto` — used consistently across all sections and the navbar.
- **Brand color**: `#2754D9` (blue) used for CTAs, hover states, and the Footer CTA block.
- **Background**: `#F5F5F5` site-wide.
- **Fonts**: Manrope (primary, `font-sans`) and Inter (`font-inter`), loaded via `next/font/google` and exposed as CSS variables.
- **Section IDs** for anchor links: `#services`, `#process`, `#team`, `#about`, `#contact` (Footer) — these scroll within the homepage. `/services` also exists as a real, indexable route (see Routes above); Navbar/Footer deliberately still point to the homepage anchor, not the route, so don't "fix" that without checking — it was a scoped decision, not an oversight.
- **Client components**: Only `Navbar`, `Footer`, and `ScrollReveal` use `'use client'`. All other components are server components (no interactivity needed).
- **Cal.com**: Integrated via `@calcom/embed-react`. `components/CalComButton.tsx` is a reusable client component that initialises the Cal.com popup on mount (`getCalApi`) and renders a `<button>` with the required `data-cal-*` attributes. `Navbar`, `Footer`, and `FaqSection` all use `<CalComButton>` for booking calls (namespace: `15min`, link: `vecminds/15min`).
- **Analytics**: GA4 + GTM IDs are hardcoded in `lib/integrations.ts` and injected via `<Script>` tags in `layout.tsx`.
- **Remote images**: `next.config.ts` allowlists `ik.imagekit.io`, `cdn.jsdelivr.net`, and `images.higgs.ai`. Tech stack icons are fetched from `cdn.jsdelivr.net/gh/devicons/devicon`.
- **Scroll animations**: Add class `reveal` to any element; `ScrollReveal` picks it up automatically via a set of CSS selectors. The `.is-visible` class triggers the CSS transition defined in `globals.css`.
- **Hover utilities**: CSS classes like `.svc-card`, `.dm-row`, `.team-card`, `.card-lift`, `.btn-shine`, `.expand-card` are defined in `globals.css` and applied directly in components — they are not Tailwind utilities.

### SEO / structured data

`app/layout.tsx` injects sitewide `Organization`, `WebSite`, and `ItemList` (services) JSON-LD inline in `<head>`. OpenGraph and Twitter card metadata are exported as the `metadata` constant from the same file.

Individual routes add their own page-specific schema on top of that:
- Service detail pages (`/services/[each]`): `Service`, `BreadcrumbList`, `FAQPage`
- `/services` index: `BreadcrumbList`, `ItemList`
- Homepage: `FAQPage` (`FaqSection`), `Person` (`TeamSection`, founder only — the rest of the team is an unnamed collective by design, see About/Team conventions)

Breadcrumb and `ItemList` `url`/`item` fields for "Services" point to the real `/services` route, not the `#services` homepage anchor — keep these in sync if that route ever moves or is removed.
