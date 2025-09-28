import { Globe, Mail, Phone } from 'lucide-react';
import jodazLogo from '@/assets/jodaz-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={jodazLogo} 
                alt="JODAZ DEV" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-accent-foreground/80 leading-relaxed mb-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@jodazdev.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-accent-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CRM Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Applications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-accent-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-foreground/60 mb-4 md:mb-0">
              © {currentYear} JODAZ DEV. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;