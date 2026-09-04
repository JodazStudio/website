// src/components/views/About.tsx
// React Island — accepts string props from Astro parent (no react-i18next)
import ScrollButton from '@/components/ui/ScrollButton';
import FadeContent from '@/components/ui/FadeContent';
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
  return (
    <section
      className="relative min-h-[800px] h-screen overflow-hidden bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${typeof heroImg === 'string' ? heroImg : heroImg.src})` }}
    >
      <div className="absolute z-[2] inset-0 bg-black opacity-50 w-full h-full"></div>

      <div className="absolute container lg:ml-36 px-4 z-10 py-24 lg:py-48">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <FadeContent blur={true} duration={1000} threshold={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-50 to-blue-400 bg-clip-text text-transparent">
                  {strings.line1}
                  <span className="block">{strings.line2}</span>
                </h1>
              </FadeContent>

              <FadeContent blur={true} duration={1000} threshold={0.2} delay={200}>
                <p className="text-md md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  {strings.description}
                </p>
              </FadeContent>
            </div>

            <div className="flex justify-center items-center animate-fade-in">
              <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
                <img src={typeof founderImg === 'string' ? founderImg : founderImg.src} alt="Jesus Ordosgoitty — Full Stack Web Developer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton targetId="experience" />
    </section>
  );
};

export default AboutView;
