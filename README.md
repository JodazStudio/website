# JODAZ DEV Website

Welcome to the official repository for **JODAZ DEV**, a premium digital presence and software development platform. This project is built with a focus on performance, modern aesthetics, and a seamless multi-language experience.

## 🚀 Technology Stack

This project leverages cutting-edge web technologies:

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **UI Library**: [React 18](https://reactjs.org/) (via Astro Islands)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Internationalization**: i18next with Astro i18n support
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v18.17.1 or higher
- **pnpm**: v8 or higher (Recommended)

### Local Development

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**:
   ```sh
   pnpm install
   ```

3. **Start the development server**:
   ```sh
   pnpm dev
   ```
   The site will be available at `http://localhost:4321`.

## 📁 Project Structure

```text
/
├── public/          # Static assets (fonts, images, icons)
├── src/
│   ├── assets/      # Project-specific assets
│   ├── components/  # Reusable UI components (Astro & React)
│   ├── hooks/       # Custom React hooks
│   ├── layouts/     # Base layouts for pages
│   ├── lib/         # Utility functions and configurations
│   ├── pages/       # Astro page routes (multi-language support)
│   └── index.css    # Global styles and Tailwind directives
├── astro.config.mjs # Astro configuration & integrations
├── tailwind.config.ts # Tailwind CSS theme & plugin config
└── tsconfig.json    # TypeScript configuration
```

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `pnpm dev` | Starts the development server |
| `pnpm build` | Builds the project for production |
| `pnpm preview` | Previews the production build locally |
| `pnpm check` | Runs Astro type checks |
| `pnpm lint` | Lints the project files |

## 🌐 Branding & Design

This project follows the **JODAZ DEV** brand guidelines:
- **Background**: Stone (`color-1`)
- **Accents**: Blue / Navy
- **Typography**: Modern, premium sans-serif fonts.

---

Built with ❤️ by [JODAZ DEV](https://jodaz.xyz)
