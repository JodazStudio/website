import { FOOTER_LINKS, FOOTER_CREDITS_LINK } from '@/lib/links';
import jodazLogo from '@/assets/jodaz_isotipo.png';
import { useTranslation } from 'react-i18next';
// removed unused Mail icon import

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
                    <span>{link.label}</span>
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
