import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './button';

interface ScrollButtonProps {
  targetId: string;
  className?: string;
  ariaLabel?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ 
  targetId, 
  className = "", 
  ariaLabel = "Scroll down" 
}) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`absolute bottom-4 w-full flex justify-center z-[10] h-20 ${className}`}>
      <div className="animate-float">
        <Button 
          variant="scroll" 
          size="icon-lg" 
          onClick={scrollToSection} 
          aria-label={ariaLabel}
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default ScrollButton;
