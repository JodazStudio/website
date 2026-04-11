# Jesus Ordosgoitty Brand Guidelines

## Purpose

To provide official brand guidelines, colors, and design patterns for the "Jesus Ordosgoitty" portfolio project. Use this skill when:
- Creating new UI components or pages
- Implementing design-consistent styling
- Selecting colors and visual effects
- Applying animations and transitions
- Maintaining consistency between light and dark modes

## Triggers

This skill should be used when the user mentions:
- "Jesus Ordosgoitty brand"
- "Jesus Ordosgoitty design guidelines"
- "colors for Jesus Ordosgoitty"
- "portfolio styles"
- "brand guidelines for the website project"

## Brand Identity

The "Jesus Ordosgoitty" portfolio represents a professional, modern, and tech-forward developer identity. The brand utilizes a strong blue-themed palette with high-contrast elements and elegant visual effects.

## Core Typography

| Usage | Font Family | Source |
| :--- | :--- | :--- |
| **Primary Sans-serif** | `Fira Code` | @fontsource/fira-code |
| **Monospace** | `Fira Code` | @fontsource/fira-code |

## Color Palette

The project uses a theme-aware color system using HSL variables for core UI elements and a specific brand palette for identity-driven elements.

### Brand Palette (Hex Approximation)

- **Brand Dark:** `#161B24` (Primary Background / Navy)
- **Brand Medium:** `#1C4C96` (Secondary Blue)
- **Brand Bright:** `#0B5EF3` (Primary Action / Bright Blue)
- **Brand Light Blue:** `#D6DFF8` (Muted / Background Accents)
- **Brand Off-White:** `#EDECEB` (Light Mode Background)

### Semantic HSL Variables (Light/Dark Mode)

| Variable | Light Mode (HSL) | Dark Mode (HSL) |
| :--- | :--- | :--- |
| `--background` | `30 14% 93%` | `217 57% 13%` |
| `--foreground` | `217 57% 13%` | `30 14% 93%` |
| `--primary` | `221 91% 50%` | `221 91% 50%` |
| `--secondary` | `218 67% 35%` | `218 67% 35%` |
| `--muted` | `228 57% 91%` | `218 67% 25%` |
| `--accent` | `217 57% 13%` | `221 91% 50%` |
| `--border` | `228 57% 91%` | `218 67% 25%` |

## Visual Language

### Gradients

The brand uses smooth linear gradients to create depth and focus.

- **Primary Gradient:** `linear-gradient(135deg, hsl(var(--brand-bright)), hsl(var(--brand-medium)))`
- **Hero Gradient:** `linear-gradient(135deg, hsl(var(--brand-dark)), hsl(var(--brand-medium)))`
- **Card Gradient:** `linear-gradient(145deg, hsl(0 0% 100%), hsl(var(--brand-light-blue)))`

### Shadows and Depth

- **Elegant Shadow:** `0 10px 30px -10px hsl(var(--brand-medium) / 0.3)`
- **Glow Shadow:** `0 0 40px hsl(var(--brand-bright) / 0.4)` (`shadow-glow`)
- **Card Shadow:** `0 4px 20px -2px hsl(var(--brand-dark) / 0.1)`

### Blueprint Grid

Technical sections should use the "Blueprint" aesthetic:
- **Background Pattern:** `.blueprint-grid` (60px grid lines using `var(--border)`).
- **Fade Effect:** `.blueprint-grid-fade` for smooth transitions.

### Transitions

The project prefers smooth interactions using standard Tailwind easing or custom cubic-bezier curves.

## Animations

Core animations used to make the UI feel "alive":

- `fade-in`: Opacity 0 to 1 with 20px upward movement.
- `slide-up`: Opacity 0 to 1 with 30px upward movement.
- `scale-in`: Scale 0.95 to 1 with opacity.
- `float`: Continuous 10px vertical floating effect.
- `typewriter`: For text revealing effects.
- `animate-slide-up-delayed`: Custom "slide-up-bounce" effect (700ms).

## Design Principles

1. **Tech-Forward:** Use bright blues and glows to emphasize a modern developer aesthetic.
2. **Readability:** Ensure high contrast between text and background, especially in Dark Mode.
3. **Subtle Motion:** Use floating and sliding animations to create a dynamic but professional feel.
4. **Theme Fidelity:** Always respect the HSL variable system for light/dark mode compatibility.
5. **Blueprint Logic:** Use structured grids and consistent 2px borders to emphasize a professional, architectural developer feel.

## Best Practices

- **Tailwind Integration:** Use semantic classes (e.g., `bg-primary`, `text-foreground`, `shadow-elegant`).
- **Gradient Usage:** Apply gradients mainly to hero sections, primary buttons, and decorative cards.
- **Borders:** Main structural grids use `border-2` (2px thickness) with `border-border`.
- **Radius:** Standard border radius is `0.5rem` (`--radius`). However, **structural grid elements and Blueprint-themed sections MUST use square corners (`rounded-none`).**
