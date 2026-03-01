---
name: astro-best-practices
description: Core performance and architectural guidelines for Astro applications. Focuses on the Islands Architecture, SSG, and Asset Optimization to ensure lightning-fast websites. Triggers on any task involving Astro components, layouts, pages, or performance audits.
---

# Astro Best Practices

A guide to building extremely performant and modern websites with **Astro**. These rules are prioritized by their impact on **Core Web Vitals** and **Developer Experience**.

## When to Apply

Reference these guidelines when:
- Creating new Astro pages or layouts.
- Deciding which UI components to use (React vs. Astro).
- Optimizing for SEO and PageSpeed.
- Implementing hydration strategies (`client:*` directives).
- Configuring global site settings.

## Rule Categories

### 1. Minimal JavaScript (CRITICAL)
- **Astro Components First**: Use `.astro` components for any static UI. If it doesn't need client-side state, it doesn't need React.
- **Islands Architecture**: Only use React components for interactive "Islands".
- **Opt-out of Hydration**: Never use a `client:*` directive unless interactivity is actually required.

### 2. Hydration Strategies (CRITICAL)
- **Lazy Hydration**: Use `client:visible` for components below the fold (e.g., Footer, scroll animations).
- **Prioritize TTI**: Use `client:idle` for low-priority scripts (e.g., chat widgets).
- **Initial Load**: Use `client:load` ONLY for essential interactive elements in the viewport (e.g., Main Menu).

### 3. Static Site Generation (SSG)
- **Pre-rendering**: Use SSG for all marketing and content pages. Avoid SSR unless strictly necessary for dynamic data.
- **Data Fetching**: Fetch data at build time inside the Astro `---` block. Do not fetch data inside React islands if it can be passed as a prop from the Astro parent.

### 4. SEO & Metadata
- **Global BaseHead**: Use a single common component in all layouts for meta tags, titles, and icons.
- **Canonical URLs**: Always include a canonical URL tag to avoid duplicate content issues.
- **Alt Text**: Mandatory `alt` text for all images.

### 5. Asset Optimization (HIGH)
- **Astro Image Component**: Use the built-in `<Image />` component for automatic format conversion (WebP/AVIF) and resizing.
- **Font Hoisting**: Use local fonts and `font-display: swap` to prevent FOIT (Flash of Invisible Text).

### 6. i18n & Routing
- **Locale Routing**: Structure pages as `src/pages/[lang]/index.astro`.
- **Locale Discovery**: Use the `Astro.preferredLocale` or extract it from the URL.
- **Fallbacks**: Always provide a fallback language for untranslated content.

## Anti-Patterns (Immediate Rejection)

❌ Using React for a header/footer that doesn't have complex interactivity.
❌ Not using the Astro `<Image />` component.
❌ Missing page titles or meta descriptions.
❌ Over-hydrating: Putting the entire page inside a single React component.

## Summary Checklist
- [ ] Is this UI static? (If yes, use `.astro`)
- [ ] Are all images optimized?
- [ ] Do all pages have unique metadata?
- [ ] Are below-the-fold components hydrated with `client:visible`?
- [ ] Is all text translatable?
