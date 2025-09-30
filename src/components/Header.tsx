import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jodazLogo from '@/assets/jodaz-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={jodazLogo} alt="JODAZ DEV" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
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
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
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
        )}
      </div>
    </header>
  );
};

export default Header;
