// src/components/views/About.tsx
// React Island — accepts string props from Astro parent (no react-i18next)
import { ChevronDown } from 'lucide-react';
import founderImg from '@/assets/images/pic.jpg';
import heroImg from '@/assets/hero.jpeg';

interface AboutStrings {
  line1: string;
  line2: string;
  description: string;
}

interface Props {
  strings: AboutStrings;
}

const AboutView = ({ strings }: Props) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[800px] h-screen overflow-hidden bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${typeof heroImg === 'string' ? heroImg : heroImg.src})` }}
    >
      <div className="absolute z-[2] inset-0 bg-black opacity-50 w-full h-full"></div>

      <div className="absolute container lg:ml-36 px-4 z-10 py-24 lg:py-48">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-50 to-blue-400 bg-clip-text text-transparent">
                {strings.line1}
                <span className="block">{strings.line2}</span>
              </h1>

              <p className="text-md md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                {strings.description}
              </p>
            </div>

            <div className="flex justify-center items-center animate-fade-in">
              <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
                <img src={typeof founderImg === 'string' ? founderImg : founderImg.src} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 w-full flex justify-center z-[3] h-20">
        <button
          onClick={() => scrollToSection('experience')}
          className="animate-float z-10 w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default AboutView;
