// import { ExternalLink, Github } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import portfolioRestaurant from '@/assets/fruga.png';
import Carousel from './Carousel';
import LightRays from './LightRays';

const Portfolio = () => {
  const { t } = useTranslation();
  const [carouselWidth, setCarouselWidth] = useState(420);

  useEffect(() => {
    const updateCarouselWidth = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCarouselWidth(320); // phone
      } else if (width < 1536) {
        setCarouselWidth(420); // laptop
      } else {
        setCarouselWidth(720); // large desktop
      }
    };

    updateCarouselWidth();
    window.addEventListener('resize', updateCarouselWidth);
    return () => window.removeEventListener('resize', updateCarouselWidth);
  }, []);

  const imageMap: Record<string, string> = {
    'horsy.png':
      'https://res.cloudinary.com/jodaz/image/upload/v1727464583/images/projects/horsy.png',
    'fruga.png': portfolioRestaurant,
  };

  const projects = (t('portfolio.projects', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    image: string;
    code?: string;
    website?: string;
  }>).map(project => ({
    ...project,
    image: imageMap[project.image] || project.image
  }));

  return (
    <section id="portfolio" className="min-h-[600px] h-[100vh] bg-slate-900 relative">
      <LightRays className='' raysColor='#4833e6' />

      <div className="container flex flex-col lg:flex-row h-full items-center justify-center overflow-hidden">
        <div className="flex flex-col text-center lg:text-left lg:items-start mb-8 animate-fade-in z-[3] relative py-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('portfolio.title', 'Our')}
            <span className="text-primary">{t('portfolio.titleAccent', 'Portfolio')}</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t(
              'portfolio.description',
              'Explore selected projects that blend performance, accessibility, and thoughtful UX—built to scale and deliver measurable impact.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2 flex justify-center">
            <Carousel items={projects} autoplay loop baseWidth={carouselWidth} pauseOnHover autoplayDelay={4500} />
          </div>
        </div>
        {/*
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
         */}
      </div>
    </section>
  );
};

export default Portfolio;
