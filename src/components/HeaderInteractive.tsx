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
      const scrollElement = document.getElementById('scroll');
      if (scrollElement) {
        setIsScrolled(window.scrollY >= scrollElement.offsetTop);
      } else {
        setIsScrolled(window.scrollY > 0);
      }
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
      }
    } else {
      window.location.href = item.href;
    }
  };

  const altLang = lang === 'es' ? 'EN' : 'ES';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-blue-600 transition-colors duration-300 ${
        isMenuOpen
          ? 'bg-gray-900'
          : isScrolled
            ? 'bg-gray-900 backdrop-blur-sm'
            : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between h-full w-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoSrc} alt="JODAZ DEV" className="h-12 lg:h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-lg text-blue-100 hover:text-primary transition-colors font-semibold"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-lg text-blue-100 hover:text-primary transition-colors font-semibold"
                >
                  {item.label}
                </a>
              )
            ))}
            {/* Language switcher */}
            <a
              href={altLangHref}
              className="text-sm px-2 py-1 rounded text-blue-100 hover:text-primary border border-blue-100/30 hover:border-primary transition-colors"
              aria-label={`Switch to ${altLang}`}
            >
              {altLang}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden py-1 transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 bg-gray-900 backdrop-blur-sm' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="space-y-4 pt-4">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="py-2 block text-blue-100 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="py-2 block text-blue-100 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
          {/* Language switcher (mobile) */}
          <div className="md:hidden mt-4 border-t border-white/10 pt-4 flex items-center justify-center gap-4">
            <a
              href={altLangHref}
              className="text-sm px-3 py-2 rounded text-blue-100 hover:text-primary border border-blue-100/30 hover:border-primary transition-colors"
              aria-label={`Switch to ${altLang}`}
            >
              {altLang}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderInteractive;
