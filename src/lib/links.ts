import { Globe, Mail, Github, Instagram, Linkedin, Briefcase } from 'lucide-react';

export const FOOTER_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jodaz/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jodaz.dev',
    icon: Instagram, // Use custom SVG or lucide-react Instagram icon if available
  },
  {
    label: 'Github',
    href: 'https://github.com/jodaz-dev',
    icon: Github, // Use custom SVG or lucide-react GitHub icon if available
  },
  {
    label: 'Upwork',
    href: 'https://upwork.com/freelancers/jesusordosgoitty4',
    icon: Briefcase,
  },
];

export const FOOTER_CREDITS_LINK = {
  label: 'jodaz.dev',
  href: 'https://jodaz.xyz',
  icon: Globe,
};
