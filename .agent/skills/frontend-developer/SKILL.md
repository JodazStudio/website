---
name: frontend-dev-guidelines
description: Opinionated frontend development standards for modern Astro + React + TypeScript applications. Covers Islands Architecture, Static Site Generation (SSG), Tailwind CSS, SEO optimization, i18n, and strict TypeScript practices.
---


# Frontend Development Guidelines

**(Astro · Islands Architecture · Tailwind CSS · TypeScript · SEO-First)**

You are a **senior frontend engineer** operating under strict architectural and performance standards.

Your goal is to build **lightning-fast, SEO-optimized, and maintainable applications** using:

* **Astro** for the core framework (MPA / SSG)
* **React** for interactive "Islands" only
* **Astro Routing** (`src/pages/`) and Layouts
* **Tailwind CSS + shadcn/ui** for styling
* **Mobile-first** responsive design
* **Strict i18n** (Internationalization)
* **SEO Best Practices** (Metadata, Sitemaps, Schema.org)

This skill defines **how frontend code must be written**, not merely how it *can* be written.

---

## 1. Core Architectural Doctrine (Non-Negotiable)

### 1. Astro-First & Islands Architecture
* Use **Astro components (`.astro`)** by default for all static UI, layouts, and page structures.
* Use **React components (`.tsx`)** ONLY for interactive elements that require client-side state (hooks).
* Hydrate React components using `client:load`, `client:visible`, or `client:idle` only when necessary.
* Avoid shipping unnecessary JavaScript to the client.

### 2. File-Based Routing & Layouts
* Routes live in `src/pages/` using `.astro` or `.md/.mdx` files.
* Use **Layouts** (`src/layouts/`) to wrap pages and manage common structure (HTML boilerplate, Analytics, Navigation).
* Common components live in `src/components/`.

### 3. Tailwind CSS + shadcn/ui
* Use pure Tailwind CSS utility classes.
* shadcn/ui components (`src/components/ui/`) are the source of truth for all complex primitives.
* Always include `client:load` or similar directives for interactive shadcn components (e.g., Modals, Dropdowns).

### 4. Search Engine Optimization (SEO)
* Every page must have a `<SEO />` or `<BaseHead />` component with:
  - Unique `<title>` and `<meta name="description">`.
  - Open Graph (OG) tags and Twitter cards.
  - Canonical URLs.
* Maintain a `sitemap-index.xml` and `robots.txt`.

### 5. Internationalization (i18n)
* Use Astro's built-in i18n support or a dedicated integration.
* All routes should follow a locale pattern (e.g., `/en/about`, `/es/acercas-de`).
* Never hardcode strings; use translation keys.

### 6. Mobile-First Responsiveness
* All UI must be designed and implemented mobile-first.
* Use base Tailwind classes for mobile, and breakpoint prefixes (`md:`, `lg:`) for larger screens.

---

## 2. When to Use This Skill

Use **frontend-dev-guidelines** when:

* Creating pages or layouts in Astro.
* Building interactive React components for the site.
* Implementing i18n or SEO features.
* Styling with Tailwind CSS.
* Optimizing assets or performance.

---

## 3. Quick Start Checklists

### New Page Checklist

* [ ] Create `src/pages/[lang]/index.astro`.
* [ ] Use a Layout component.
* [ ] Pass unique SEO metadata (title, description).
* [ ] Ensure all text uses translation helpers.
* [ ] Add interactive elements as React Islands where needed.

---

## 4. Component Standards

### Astro Component (Static)

```astro
---
// src/components/Header.astro
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<header class="p-4 border-b">
  <h1 class="text-2xl font-bold">{title}</h1>
</header>
```

### React Island (Interactive)

```tsx
// src/components/Counter.tsx
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
};

// Usage in .astro:
// <Counter client:visible />
```

---

## 5. Performance Defaults

* Use **Astro Image** component for optimized assets.
* Prefer static generation (SSG) for all marketing pages.
* Minimize the use of `client:load` to reduce Time to Interactive (TTI).

---

## 6. Anti-Patterns (Immediate Rejection)

❌ Using React for a purely static component.
❌ Hardcoding strings (ignoring i18n).
❌ Missing meta tags or titles on pages.
❌ Over-hydrating: Using `client:load` for things below the fold.

---

## 7. Skill Status

**Status:** Stable, Astro-native
**Intended Use:** Astro + React Applications prioritizing Performance and SEO.
