// src/components/views/Experience.tsx
// React Island — accepts string props from Astro parent (no react-i18next)
import ExperienceItem from './experience/ExperienceItem';
import type { IExperienceItem } from '@/models';
import FadeContent from '@/components/ui/FadeContent';

interface Study {
  period: string;
  title: string;
  institution?: string;
}

interface SkillsSection {
  title: string;
  items: string[];
}

interface StudiesSection {
  title: string;
  items: Study[];
}

interface ExperienceStrings {
  title: string;
  description: string;
  items: IExperienceItem[];
  skills?: SkillsSection;
  studies?: StudiesSection;
}

interface Props {
  strings: ExperienceStrings;
}

const ExperienceView = ({ strings }: Props) => {
  const { title, description, items, skills, studies } = strings;

  return (
    <section className="py-20 bg-gray-100" id="experience">
      <div className="container mx-auto px-4" id="scroll">
        <FadeContent blur={true} duration={800} threshold={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            {title}
          </h2>
        </FadeContent>
        <FadeContent blur={true} duration={800} threshold={0.1} delay={100}>
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
        </FadeContent>

        {/* 3-column layout: Experience | Skills | Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Experience column */}
          <div className="flex flex-col gap-8">
            {items && items.map((exp, idx) => <ExperienceItem key={idx} {...exp} />)}
          </div>

          {/* Skills column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {skills?.title ?? 'Skills'}
            </h3>
            {skills?.items && skills.items.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {skills.items.map((skill, idx) => (
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
              {studies?.title ?? 'Studies'}
            </h3>
            {studies?.items && studies.items.length > 0 && (
              <div className="flex flex-col gap-6">
                {studies.items.map((study, idx) => (
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
