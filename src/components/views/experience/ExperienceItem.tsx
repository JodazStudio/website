import { Briefcase } from 'lucide-react';
import { IExperienceItem } from '@/models';

interface ExperienceItemProps extends IExperienceItem {}

const ExperienceItem = ({ company, roles }: ExperienceItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 text-muted-foreground">
        <Briefcase className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{company}</h3>
        <ul className="mt-1 space-y-1">
          {roles.map((role, idx) => (
            <li key={idx} className="text-sm">
              <div className="text-muted-foreground">{role.title}</div>
              <div className="text-xs text-muted-foreground/80">{role.period}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
