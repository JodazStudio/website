import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import portfolioEcommerce from '@/assets/portfolio-ecommerce.jpg';
import portfolioCorporate from '@/assets/portfolio-corporate.jpg';
import portfolioRestaurant from '@/assets/portfolio-restaurant.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: portfolioEcommerce,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application"
    },
    {
      title: "Corporate Website",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      image: portfolioCorporate,
      technologies: ["Next.js", "TypeScript", "Tailwind", "CMS"],
      category: "Website"
    },
    {
      title: "Restaurant Management",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
      image: portfolioRestaurant,
      technologies: ["Vue.js", "Firebase", "Payment API", "Analytics"],
      category: "Web App"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-2 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-foreground">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
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
                  {project.technologies.map((tech, i) => (
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;