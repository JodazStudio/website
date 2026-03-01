// src/components/islands/PortfolioIsland.tsx
// React Island — carousel needs client-side interactivity
import { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import LightRays from '@/components/LightRays';
import portfolioRestaurant from '@/assets/fruga.png';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  code?: string;
  website?: string;
}

interface PortfolioStrings {
  title: string;
  titleAccent: string;
  description: string;
  websiteLabel: string;
}

interface Props {
  projects: Project[];
  strings: PortfolioStrings;
  lang?: string;
}

const imageMap: Record<string, string | { src: string }> = {
  'horsy.png': 'https://res.cloudinary.com/jodaz/image/upload/v1727464583/images/projects/horsy.png',
  'fruga.png': portfolioRestaurant,
};

const PortfolioIsland = ({ projects, strings }: Props) => {
  const [carouselWidth, setCarouselWidth] = useState(420);

  useEffect(() => {
    const updateCarouselWidth = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCarouselWidth(320);
      } else if (width < 1536) {
        setCarouselWidth(420);
      } else {
        setCarouselWidth(720);
      }
    };
    updateCarouselWidth();
    window.addEventListener('resize', updateCarouselWidth);
    return () => window.removeEventListener('resize', updateCarouselWidth);
  }, []);

  const mappedProjects = projects.map((project) => {
    const rawImage = imageMap[project.image] || project.image;
    return {
      ...project,
      image: typeof rawImage === 'string' ? rawImage : rawImage.src,
    };
  });

  return (
    <section id="portfolio" className="min-h-[100vh] lg:min-h-[600px] lg:h-[75vh] bg-slate-900 relative">
      <LightRays className="" raysColor="#4833e6" rayLength={600} pulsating />
      <div className="container flex flex-col lg:flex-row h-full items-center justify-center overflow-hidden lg:space-x-20">
        <div className="flex flex-col text-center lg:text-left lg:items-start animate-fade-in z-[3] py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {strings.title}
            <span className="text-primary">{strings.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {strings.description}
          </p>
        </div>

        <div className="flex justify-center align-items-center pb-14">
          <Carousel
            items={mappedProjects}
            autoplay
            loop
            baseWidth={carouselWidth}
            pauseOnHover
            autoplayDelay={4500}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioIsland;
