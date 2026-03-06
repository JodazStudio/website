---
title: "Santa Rosa 10K"
description: "Una landing page dinámica para un evento de carrera 10K en Venezuela, construida con Next.js 15 y GSAP."
publishDate: 2025-05-30
tags: ["Next.js", "Tailwind CSS", "GSAP", "Lottie"]
isFeatured: true
liveUrl: "https://santarosa10k.com"
lang: "es"
---

La Carrera Santa Rosa 10K es más que una simple competencia; es una tradición atlética anual que transforma la ciudad en un centro vibrante de energía y salud. Para la edición 2025, el objetivo fue elevar la presencia digital del evento, pasando de una coordinación fragmentada a una plataforma centralizada de alto rendimiento capaz de gestionar miles de visitantes y un ciclo de inscripción acelerado.

### Tech Stack

Para satisfacer las demandas de alto tráfico y ofrecer una experiencia de usuario moderna, seleccionamos un stack de vanguardia:
- **Next.js 15 (App Router)**: Utilizado por su rendimiento superior, capacidades de SEO y un robusto renderizado del lado del servidor.
- **Tailwind CSS**: Permitió un diseño responsivo y a medida que mantiene la consistencia en todos los dispositivos.
- **GSAP y Lottie**: Fueron fundamentales para dar una sensación de "vida" al sitio, utilizando animaciones fluidas para guiar a los corredores a través de los detalles y categorías del evento.
- **Cloudinary y AWS S3**: Implementados para un almacenamiento de medios de alta disponibilidad, asegurando que las fotos del evento en alta resolución carguen instantáneamente.

### Branding

La identidad visual de Santa Rosa 10K fue diseñada para reflejar intensidad, pasión y alegría comunitaria. Nos alejamos de la estética deportiva genérica para lograr un aspecto audaz y de alto contraste:
- **Paleta de Colores**: Utilizamos el **Púrpura Oscuro** (#0D164D) como ancla principal, contrastado con un **Amarillo Vibrante** (#FFDB4A) para evocar energía y visibilidad.
- **Tipografía**: Una combinación estratégica de `Permanent Marker` para titulares enérgicos de estilo "callejero" y `Poppins` para textos de cuerpo limpios y profesionales.
- **Lenguaje Visual**: La interfaz utiliza gradientes personalizados y componentes basados en movimiento que simulan la velocidad y el dinamismo de los propios atletas.

### Registration System

La eficiencia fue el requisito central para el proceso de inscripción. En lugar de construir un complejo backend personalizado, diseñamos una solución pragmática de "Docs-as-DB":
- **Integración Fluida**: Se integró un Google Form con estilos personalizados para ofrecer una experiencia unificada sin la sobrecarga de un servidor de base de datos dedicado.
- **Datos en Tiempo Real**: El formulario alimenta directamente una **Google Spreadsheet**, permitiendo a los organizadores gestionar participantes, rastrear tallas de kits y monitorear estadísticas en tiempo real.
- **Verificación Centrada en el Humano**: Los pagos se canalizaron a través de métodos bancarios locales (Pagomóvil y Transferencias) y se verificaron vía **WhatsApp**, combinando la velocidad digital con la confianza de la comunicación directa.

Este enfoque optimizado nos permitió lanzar la plataforma en tiempo récord, manteniendo la confiabilidad necesaria para un evento público de gran escala.
