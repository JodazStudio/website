import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import jodazLogo from '@/assets/jodaz_isotipo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpaque, setIsOpaque] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const servicesTop = servicesSection.offsetTop;
        setIsOpaque(window.scrollY >= servicesTop - 100); // Adjust offset as needed
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isOpaque || isMenuOpen ? 'bg-gray-900 backdrop-blur-sm text-blue-600' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={jodazLogo} alt="JODAZ DEV" className="h-12 lg:h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`text-lg text-blue-100 hover:text-primary transition-colors font-semibold`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`text-lg text-blue-100 hover:text-primary transition-colors font-semibold`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-lg text-blue-100 hover:text-primary transition-colors font-semibold`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Button */}
          {/* <div className="hidden md:block">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden py-1 transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="space-y-4 pt-4">
            <button
              onClick={() => scrollToSection('services')}
              className="py-2 block text-blue-100 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="py-2 block text-blue-100 hover:text-primary transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-2 block text-blue-100 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            {/* <Button
              variant="hero"
              size="lg"
              className="w-full mt-4"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
