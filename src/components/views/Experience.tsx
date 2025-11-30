import { useTranslation } from 'react-i18next';
import ExperienceItem from './experience/ExperienceItem';
import type { IExperienceItem } from '@/models';

const ExperienceView = () => {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }) as IExperienceItem[];
  // Optional sections powered by i18n; fall back safely if not present
  const skills = t('experience.skills.items', { returnObjects: true }) as string[] | undefined;
  const studies = t('experience.studies.items', {
    returnObjects: true,
  }) as Array<{ period: string; title: string; institution?: string }> | undefined;

  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-4" id="scroll">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          {t('experience.title', 'Work Experience')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {t('experience.description', 'All my professional experiences as a software engineer')}
        </p>

        {/* 3-column layout: Experience | Skills | Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Experience column */}
          <div className="flex flex-col gap-8">
            {items && items.map((exp, idx) => <ExperienceItem key={idx} {...exp} />)}
          </div>

          {/* Skills column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('experience.skills.title', 'Skills')}
            </h3>
            {skills && skills.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <li
                    key={`${skill}-${idx}`}
                    className="px-3 py-1 rounded-md border border-border bg-muted/40 text-foreground text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Studies column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('experience.studies.title', 'Studies')}
            </h3>
            {studies && studies.length > 0 && (
              <div className="flex flex-col gap-6">
                {studies.map((study, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold rounded px-2 py-1 leading-none mt-1">
                      {study.period}
                    </span>
                    <div>
                      <div className="text-foreground font-semibold">{study.title}</div>
                      {study.institution && (
                        <div className="text-muted-foreground text-sm">{study.institution}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceView;
