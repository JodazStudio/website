import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import AboutView from '@/components/views/About';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <AboutView />
      <Contact />
    </>
  );
};

export default About;
