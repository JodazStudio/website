import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-background min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t('nav.about', 'About me')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t(
            'about.intro',
            "Hi, I'm Jodaz. I design and build fast, accessible, and scalable digital products. This page is coming soon."
          )}
        </p>
      </div>
    </section>
  );
};

export default About;
