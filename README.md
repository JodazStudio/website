# Jesus Ordosgoitty - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Frontend Developer and Full Stack Engineer. Built with React, TypeScript, and Tailwind CSS, featuring internationalization support for English and Spanish.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Internationalization**: Full i18n support with English and Spanish translations
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Portfolio Showcase**: Highlighting key projects with live demos and code links
- **About Section**: Personal introduction and professional background
- **Contact Integration**: Easy ways to get in touch
- **Performance Optimized**: Fast loading with Vite build system
- **Docker Support**: Containerized deployment ready

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Internationalization**: react-i18next
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: Docker, Lovable

## 📦 Installation & Development

### Prerequisites

- Node.js (LTS version)
- pnpm (or npm/yarn)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <YOUR_GIT_URL>
   cd website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## 🐳 Docker Deployment

### Build and Run with Docker

1. **Build the Docker image**

   ```bash
   docker build -t jodaz-portfolio .
   ```

2. **Run the container**

   ```bash
   docker run -p 8080:8080 jodaz-portfolio
   ```

3. **Access the application**
   Open `http://localhost:8080` in your browser

The Dockerfile uses a multi-stage build for optimal image size and includes all necessary dependencies.

## 🌐 Internationalization

The site supports two languages:

- English (`/public/locales/en/common.json`)
- Spanish (`/public/locales/es/common.json`)

To add new languages or modify translations, edit the JSON files in `/public/locales/`.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── views/          # Page-specific components
├── assets/             # Images and media files
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Page components
└── models.ts           # TypeScript interfaces
```

## 🚀 Deployment

### Docker Deployment

Use the provided Dockerfile for containerized deployment on any platform supporting Docker.

## 📞 Contact

- [LinkedIn](https://www.linkedin.com/in/jodaz/)
- [Github](https://github.com/jodaz)

---

Built with ❤️ by Jesus Ordosgoitty
