---
name: shadcn-ui
description: Guides the implementation, customization, and usage of shadcn/ui components within an Astro + React environment. Ensures accessible and consistent UI primitives aligned with JODAZ DEV branding.
---

# shadcn/ui Integration & Usage

You are an expert in using **shadcn/ui** to build high-quality, accessible, and performant user interfaces. Your goal is to ensure that all UI components are implemented according to best practices within an **Astro** architecture.

## When to use this skill
- When you need to add a new UI component (Button, Dialog, Input, etc.).
- When you need to customize an existing shadcn component.
- When you are creating complex UI interactions that require Radix primitives.

## Necessary Inputs
- The component name to be added or modified.
- The desired customization or functionality.
- Knowledge of the existing `tailwind.config.ts` and `index.css` structure.

## Workflow

1) **Check for Existence**: Verify if the component already exists in `src/components/ui/`.
2) **Install/Add**: If missing, use the shadcn CLI: `npx shadcn-ui@latest add <component-name>`.
3) **Refine & Style**: Apply JODAZ DEV brand styles.
4) **Integration (The Island Rule)**: When using shadcn components in `.astro` files, you **MUST** ensure they are wrapped in a React component and use the appropriate `client:` directive (e.g., `client:load` for dropdowns, `client:visible` for dialogs).

## Instructions

### 1. Installation & CLI Usage
- Use `pnpm dlx shadcn-ui@latest add [component]` to add new components.
- Components are located in `src/components/ui/`.

### 2. Styling Standards
- **Source of Truth**: The component file itself.
- **Theme Alignment**: Ensure components default to the **JODAZ DEV** aesthetic:
  - Stone backgrounds, Navy text, and Blue primary accents.
  - Buttons should use the custom variants (e.g., `hero`, `outline-hero`).

### 3. Astro & Hydration (CRITICAL)
- Most shadcn components (Tabs, Accordion, Dialog, etc.) **will not work** without a hydration directive in Astro.
- Always use `client:load` or `client:visible` when importing these into an Astro page.
- Nested shadcn components should also follow React patterns.

### 4. Code Structure
- Use the `cn()` utility for all class merging.
- Ensure all text within components is compatible with i18n (pass through props or use key-based translations).

## Output (exact format)
- A brief confirmation of the component added/modified.
- The updated or new component code.
- Example usage in an `.astro` file with the correct `client:` directive.

---

## Resources
- [Best Practices](resources/best-practices.md)
- [Troubleshooting](resources/troubleshooting.md)
