import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoPath from "@assets/18a21e1438_logo-edited-2_1749387425572.webp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 overflow-hidden">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logoPath} 
                alt="Boost Electrical Logo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-boost-orange transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-boost-orange transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-boost-orange transition-colors duration-200 font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-boost-orange transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <a 
                href="tel:01206645155" 
                className="bg-boost-orange text-white px-4 py-2 rounded-lg hover:bg-boost-orange-light transition-colors duration-200 font-medium"
              >
                <i className="fas fa-phone mr-2"></i>01206 645 155
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <i className="fas fa-bars text-xl text-boost-dark"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-left px-3 py-2 hover:text-boost-orange transition-colors"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-left px-3 py-2 hover:text-boost-orange transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="text-left px-3 py-2 hover:text-boost-orange transition-colors"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-left px-3 py-2 hover:text-boost-orange transition-colors"
                  >
                    Contact
                  </button>
                  <a 
                    href="tel:01206645155" 
                    className="bg-boost-orange text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-boost-orange-light transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
