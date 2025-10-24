import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import founder from '@/assets/images/pic.jpg';
import Hero from '@/assets/hero.jpeg';

const AboutView = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[800px] h-screen overflow-hidden bg-slate-900 bg-cover bg-center "
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute z-2 inset-0 bg-black opacity-50 w-full h-full"></div>

      <div className="absolute container lg:ml-36 px-4 z-10 py-24 lg:py-48">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-50 to-blue-400 bg-clip-text text-transparent">
                {t('about.line1')}
                <span className="block">{t('about.line2')}</span>
              </h1>

              <p className="text-md md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                {t('about.description')}
              </p>
            </div>

            <div className="flex justify-center items-center  animate-fade-in">
              <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
                <img src={founder} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 w-full flex justify-center z-3 h-20">
        <button onClick={() => scrollToSection('experience')} className="animate-float z-10">
          <Button variant="scroll" size="icon-lg">
            <ChevronDown className="w-6 h-6" />
          </Button>
        </button>
      </div>
    </section>
  );
};

export default AboutView;
