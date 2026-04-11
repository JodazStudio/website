// src/components/HeaderInteractive.tsx
// React Island — handles mobile menu, scroll detection, and language switching
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  key: string;
  label: string;
  href: string;
  isSection: boolean;
}

interface Props {
  navItems: NavItem[];
  logoSrc: string;
  lang: string;
  altLangHref: string;
}

const HeaderInteractive = ({ navItems, logoSrc, lang, altLangHref }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.isSection) {
      const element = document.getElementById(item.key);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      } else {
        window.location.href = item.href;
      }
    } else {
      window.location.href = item.href;
    }
  };

  const altLang = lang === 'es' ? 'EN' : 'ES';

  const handleLangSwitch = () => {
    const targetLang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('preferred_lang', targetLang);
    sessionStorage.removeItem('lang_redirected');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen
          ? 'bg-background shadow-lg'
          : isScrolled
            ? 'bg-background/80 backdrop-blur-md shadow-elegant py-1'
            : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Logo */}
          <a href={lang === 'es' ? '/es/' : '/'} className="flex items-center space-x-3 transition-transform hover:scale-105">
            <img
              src={logoSrc}
              alt="Jesus Ordosgoitty"
              className={`h-8 lg:h-9 w-auto transition-all duration-300 ${isScrolled || isMenuOpen ? 'brightness-0' : ''}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className={`text-base lg:text-lg transition-colors font-semibold ${
                    isScrolled || isMenuOpen ? 'text-foreground hover:text-primary' : 'text-blue-50 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className={`text-base lg:text-lg transition-colors font-semibold ${
                    isScrolled || isMenuOpen ? 'text-foreground hover:text-primary' : 'text-blue-50 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
            {/* Language switcher */}
            <a
              href={altLangHref}
              onClick={handleLangSwitch}
              className={`text-sm px-3 py-1 rounded-full border transition-all duration-300 font-bold ${
                isScrolled || isMenuOpen
                  ? 'text-foreground border-foreground/20 hover:border-primary hover:text-primary'
                  : 'text-blue-50 border-blue-50/30 hover:border-white hover:text-white'
              }`}
              aria-label={`Switch to ${altLang}`}
            >
              {altLang}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled || isMenuOpen ? 'text-foreground' : 'text-blue-50'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[80vh] opacity-100 pb-8' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-6 pt-6">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-2xl text-foreground hover:text-primary transition-colors font-bold text-left"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-2xl text-foreground hover:text-primary transition-colors font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="pt-6 border-t border-foreground/10">
              <a
                href={altLangHref}
                onClick={handleLangSwitch}
                className="inline-flex items-center text-lg font-bold text-foreground hover:text-primary transition-colors"
                aria-label={`Switch to ${altLang}`}
              >
                <span className="mr-2">Language:</span>
                <span className="px-3 py-1 bg-muted rounded-full text-primary">{altLang}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderInteractive;
