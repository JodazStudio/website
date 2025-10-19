import Contact from '@/components/Contact';
import AboutView from '@/components/views/About';
import ExperienceView from '@/components/views/Experience';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <AboutView />
      <ExperienceView />
      <Contact />
    </>
  );
};

export default About;
