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
  isOpaque?: boolean;
}

const HeaderInteractive = ({ navItems, logoSrc, lang, altLangHref, isOpaque = false }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isIntroing, setIsIntroing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Intro animation: show name for 3 seconds on mount
    const timer = setTimeout(() => setIsIntroing(false), 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const showName = isHovered || isIntroing || isMenuOpen;

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
          ? 'bg-brand-dark shadow-lg'
          : isOpaque
            ? 'bg-brand-dark py-1'
            : isScrolled
              ? 'bg-brand-dark py-1'
              : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Logo */}
          <a
            href={lang === 'es' ? '/es/' : '/'}
            className="flex items-center transition-transform hover:scale-105 group px-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={logoSrc}
              alt="Jesus Ordosgoitty Logo"
              className={`h-8 lg:h-9 w-auto transition-all duration-300 ${isScrolled || isMenuOpen || isOpaque ? 'brightness-0 invert' : ''}`}
            />
            <div
              className={`flex items-center transition-all duration-700 ease-in-out overflow-hidden whitespace-nowrap ${
                showName ? 'max-w-[300px] opacity-100' : 'max-w-0 opacity-0'
              } ${isScrolled || isMenuOpen || isOpaque ? 'text-white' : 'text-blue-50'}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full opacity-60 mr-4 ml-4 ${isScrolled || isMenuOpen || isOpaque ? 'bg-white' : 'bg-brand-bright'}`} />
              <span className="text-lg lg:text-xl font-bold tracking-tight">
                Jesus Ordosgoitty
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className={`text-base lg:text-lg transition-colors font-semibold ${
                    isScrolled || isMenuOpen || isOpaque ? 'text-white hover:text-brand-bright' : 'text-blue-50 hover:text-brand-bright'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className={`text-base lg:text-lg transition-colors font-semibold ${
                    isScrolled || isMenuOpen || isOpaque ? 'text-white hover:text-brand-bright' : 'text-blue-50 hover:text-brand-bright'
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
              className={`text-sm px-3 py-1 rounded-none border-2 transition-all duration-300 font-bold ${
                isScrolled || isMenuOpen || isOpaque
                  ? 'text-white border-white/20 hover:border-brand-bright hover:bg-white hover:text-brand-dark'
                  : 'text-blue-50 border-blue-50/30 hover:border-white hover:bg-white hover:text-brand-dark'
              }`}
              aria-label={`Switch to ${altLang}`}
            >
              {altLang}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled || isMenuOpen || isOpaque ? 'text-white' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[80vh] opacity-100 pb-8 bg-brand-dark' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-6 pt-6">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-2xl text-white hover:text-brand-bright transition-colors font-bold text-left"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-2xl text-white hover:text-brand-bright transition-colors font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="pt-6 border-t border-white/10">
              <a
                href={altLangHref}
                onClick={handleLangSwitch}
                className="inline-flex items-center text-lg font-bold text-white hover:text-brand-bright transition-colors"
                aria-label={`Switch to ${altLang}`}
              >
                <span className="mr-2">Language:</span>
                <span className="px-3 py-1 border-2 border-brand-bright rounded-none text-brand-bright">{altLang}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderInteractive;
