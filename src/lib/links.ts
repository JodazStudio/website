import { Globe, Mail } from 'lucide-react';

export const FOOTER_LINKS = [
  {
    label: 'Email',
    href: 'mailto:contact@jodaz.dev',
    icon: Mail,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jodaz.dev',
    icon: null, // Use custom SVG or lucide-react Instagram icon if available
  },
  {
    label: 'GitHub',
    href: 'https://github.com/JodazDev',
    icon: null, // Use custom SVG or lucide-react GitHub icon if available
  },
];

export const FOOTER_CREDITS_LINK = {
  label: 'jodaz.dev',
  href: 'https://jodaz.dev',
  icon: Globe,
};
