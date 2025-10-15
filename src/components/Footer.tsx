import { FOOTER_LINKS, FOOTER_CREDITS_LINK } from '@/lib/links';
import jodazLogo from '@/assets/jodaz_isotipo.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-6 gap-10 mb-12">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <img src={jodazLogo} alt="JODAZ DEV" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-accent-foreground/80 leading-relaxed mb-6 max-w-md">
              {t(
                'footer.description',
                'JODAZ DEV crafts innovative digital products, custom websites, and applications that elevate your brand and deliver unique experiences. We help businesses stand out and succeed in the digital world through creativity, technology, and personalized solutions.'
              )}
            </p>
          </div>

          {/* Contact & Social Links */}
          <div>
            <h4 className="font-bold text-accent-foreground mb-4">
              {t('footer.contactLinks', 'Contact & Links')}
            </h4>
            <ul className="space-y-2 text-accent-foreground/80">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener' : undefined}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    {link.icon ? <link.icon className="w-5 h-5" /> : null}
                    {link.label === 'Instagram' ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                      </svg>
                    ) : null}
                    {link.label === 'GitHub' ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.18 9.18 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                      </svg>
                    ) : null}
                    {/* {link.label === 'Email' ? <Mail className="w-5 h-5" /> : null} */}
                    <span>
                      {link.label === 'Email'
                        ? 'contact@jodaz.xyz'
                        : t(`footer.links.${link.label.toLowerCase()}`, link.label)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col items-center">
            <p className="text-accent-foreground/60 text-center mb-2">
              © {currentYear}{' '}
              <a
                className="hover:text-primary underline transition-colors"
                href={FOOTER_CREDITS_LINK.href}
              >
                {t('footer.companyName', 'JODAZ DEV')}
              </a>
              . {t('footer.allRights', 'All rights reserved.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
