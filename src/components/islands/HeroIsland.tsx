// src/components/islands/HeroIsland.tsx
// React Island — scroll button interactivity + animations
import { Button } from '@/components/ui/button';
import ScrollButton from '@/components/ui/ScrollButton';
import ColorBends from '@/components/ColorBends';

interface Props {
  line1: string;
  line2: string;
  description: string;
  ctaPrimary: string;
}

const HeroIsland = ({ line1, line2, description, ctaPrimary }: Props) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[600px] h-[100vh] bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-black opacity-50 w-full h-full z-0">
        <ColorBends colors={['#4833e6']} noise={0.15} />
      </div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex z-10 py-24 lg:py-48 w-full h-full relative">
          <div className="flex items-start w-full">
            <div
              className="flex flex-col justify-center text-white space-y-8 animate-fade-in h-full"
              id="scroll"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-50 to-blue-400 bg-clip-text text-transparent">
                {line1}
                <span className="block">{line2}</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection('contact')}
                  className="group"
                >
                  {ctaPrimary}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton targetId="services" />
    </section>
  );
};

export default HeroIsland;
