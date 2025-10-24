import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import portfolioRestaurant from '@/assets/fruga.png';

const Portfolio = () => {
  const { t } = useTranslation();

  const imageMap: Record<string, string> = {
    'horsy.png':
      'https://res.cloudinary.com/jodaz/image/upload/v1727464583/images/projects/horsy.png',
    'fruga.png': portfolioRestaurant,
  };

  const projects = t('portfolio.projects', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    image: string;
    code?: string;
    website?: string;
  }>;

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('portfolio.title', 'Our')}
            <span className="text-primary">{t('portfolio.titleAccent', 'Portfolio')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t(
              'portfolio.description',
              'Explore selected projects that blend performance, accessibility, and thoughtful UX—built to scale and deliver measurable impact.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const image = imageMap[project.image];

            return (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-2 bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.website && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-foreground"
                          asChild
                        >
                          <a href={project.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            {t('portfolio.website', 'Website')}
                          </a>
                        </Button>
                      )}
                      {project.code && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-foreground"
                          asChild
                        >
                          <a href={project.code} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            {t('portfolio.code', 'Code')}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies &&
                      project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
