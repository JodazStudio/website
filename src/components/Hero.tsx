import { ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection('contact')}
                  className="group"
                >
                  Start Your Project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                
                <Button 
                  variant="outline-hero" 
                  size="xl"
                  onClick={() => scrollToSection('services')}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Video Placeholder */}
            <div className="animate-scale-in">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-elegant">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Video placeholder */}
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                  <Button variant="scroll" size="icon-lg" className="relative z-10 group">
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform fill-current" />
                  </Button>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="absolute top-1/2 left-8 w-1 h-1 bg-white/50 rounded-full animate-float"></div>
                </div>
                
                <div className="mt-6 text-center text-white/80">
                  <p className="text-sm">Watch how we transform businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <Button variant="scroll" size="icon-lg">
          <ChevronDown className="w-6 h-6" />
        </Button>
      </button>
    </section>
  );
};

export default Hero;