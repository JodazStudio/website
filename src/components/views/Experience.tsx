import { useTranslation } from 'react-i18next';
import ExperienceItem from './experience/ExperienceItem';
import type { IExperienceItem } from '@/models';

const ExperienceView = () => {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }) as IExperienceItem[];
  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          {t('experience.title', 'Work Experience')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {t('experience.description', 'All my professional experiences as a software engineer')}
        </p>

        <div className="space-y-8">
          {items && items.map((exp, idx) => <ExperienceItem key={idx} {...exp} />)}
        </div>
      </div>
    </section>
  );
};

export default ExperienceView;
