---
title: "Santa Rosa 10K"
description: "A dynamic landing page for a popular 10K running event in Venezuela, built with Next.js 15 and GSAP."
publishDate: 2025-05-30
tags: ["Next.js", "Tailwind CSS", "GSAP", "Lottie"]
isFeatured: true
liveUrl: "https://santarosa10k.com"
lang: "en"
---

The Santa Rosa 10K is more than just a race; it's an annual athletic tradition that transforms the city into a vibrant hub of energy and health. For the 2025 edition, the goal was to elevate the event's digital presence, moving away from fragmented coordination to a centralized, high-performance platform that could handle thousands of visitors and a fast-paced registration cycle.

### Tech Stack

To meet the demands of high traffic and provide a modern user experience, we chose a cutting-edge stack:
- **Next.js 15 (App Router)**: Leveraged for its superior performance, SEO capabilities, and robust server-side rendering.
- **Tailwind CSS**: Enabled a bespoke, responsive design that maintains consistency across all devices.
- **GSAP & Lottie**: These were crucial for the "alive" feel of the site, using fluid animations to guide runners through the event details and categories.
- **Cloudinary & AWS S3**: Implemented for high-availability media storage, ensuring that high-resolution event photos and assets load instantly.

### Branding

The visual identity of Santa Rosa 10K was designed to reflect intensity, passion, and community joy. We moved away from generic sports aesthetics to a bold, high-contrast look:
- **Color Palette**: We utilized **Deep Purple** (#0D164D) as the primary anchor, contrasted with **Vibrant Yellow** (#FFDB4A) to evoke energy and visibility.
- **Typography**: A strategic pairing of `Permanent Marker` for energetic, "street-style" headlines and `Poppins` for clean, professional body text.
- **Visual Language**: The interface uses custom gradients and motion-driven components that simulate the speed and movement of the athletes themselves.

### Registration System

Efficiency was the core requirement for the registration process. Instead of building a complex custom backend, we engineered a pragmatic "Docs-as-DB" solution:
- **Seamless Integration**: A custom-styled Google Form was embedded to provide a unified experience without the overhead of a dedicated database server.
- **Real-time Data**: The form fed directly into a **Google Spreadsheet**, allowing organizers to manage participants, track kit sizes, and monitor statistics in real-time.
- **Human-Centric Verification**: Payments were funneled through local banking methods (Pagomóvil and Transfers) and verified via **WhatsApp**, combining digital speed with the trust of direct communication.

This streamlined approach allowed us to launch the platform in record time while maintaining the reliability needed for a large-scale public event.
