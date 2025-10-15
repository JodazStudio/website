import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Video from './Video';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen h-full overflow-hidden">
      <Video />
      <div className="absolute z-2 inset-0 bg-black opacity-25 w-full h-full"></div>

      <div className="absolute container lg:ml-36 px-4 z-10 py-24 lg:py-48">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-50 to-blue-400 bg-clip-text text-transparent">
                {t('hero.line1', 'Transform Your')}
                <span className="block">{t('hero.line2', 'Digital Presence')}</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                {t(
                  'hero.description',
                  'We create innovative and cutting-edge digital products, developing personalized solutions, websites, and extraordinary applications that offer unique experiences and maximize success in the market.'
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection('contact')}
                  className="group"
                >
                  {t('hero.ctaPrimary', 'Start Your Project')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>

                <Button
                  variant="outline-hero"
                  size="xl"
                  onClick={() => scrollToSection('services')}
                >
                  {t('hero.ctaSecondary', 'Learn More')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 w-full flex justify-center z-3 h-20">
        <button onClick={() => scrollToSection('services')} className="animate-float z-10">
          <Button variant="scroll" size="icon-lg">
            <ChevronDown className="w-6 h-6" />
          </Button>
        </button>
      </div>
    </section>
  );
};

export default Hero;
