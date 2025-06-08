import logoPath from "@assets/18a21e1438_logo-edited-2_1749387425572.webp";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-boost-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={logoPath} 
                alt="Boost Electrical Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Colchester's premier electrical contractors specializing in renewable energy and smart home solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Boost-Electrical/61555036015241/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-boost-orange hover:bg-boost-orange-light rounded-lg flex items-center justify-center transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.instagram.com/boostelectricalltd" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-boost-orange hover:bg-boost-orange-light rounded-lg flex items-center justify-center transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.google.com/search?sa=X&sca_esv=6ce0cdcc7f2b4c2a&hl=en-GB&authuser=1&nirf=Boost%20Electricity&biw=2048&bih=983&sxsrf=ADLYWIJumGCZRk2q0XYdnedOdEZXyKnS_Q%3A1731269344415&q=Boost%20Electrical&stick=H4sIAAAAAAAAAONgU1I1qDAySktJNE1NMUoyTTZKNDG0MqhISgEyjQwSDVMNTIBM00WsAk75-cUlCq45qcklRZnJiTkAmGxKNDwAAAA&mat=CT6Ees0wsz6Q&ved=2ahUKEwiZ8qLyyNKJAxXDXUEAHSAwI_cQrMcEegQIFBAD&sei=zIhFaJzPAv-9hbIP8uz24Q4" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-boost-orange hover:bg-boost-orange-light rounded-lg flex items-center justify-center transition-colors"
              >
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-boost-orange transition-colors text-left"
                >
                  Solar Panel Installation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-boost-orange transition-colors text-left"
                >
                  Smart Home Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-boost-orange transition-colors text-left"
                >
                  EICR Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-boost-orange transition-colors text-left"
                >
                  Commercial Electrical
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-boost-orange transition-colors text-left"
                >
                  Domestic Services
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Colchester</li>
              <li className="text-gray-300">Cambridge</li>
              <li className="text-gray-300">Braintree</li>
              <li className="text-gray-300">Ipswich</li>
              <li className="text-gray-300">East Essex & Surrounding Areas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-phone text-boost-orange mr-3"></i>
                <a href="tel:01206645155" className="text-gray-300 hover:text-boost-orange transition-colors">
                  01206 645 155
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-boost-orange mr-3"></i>
                <a href="mailto:Enquiries@BoostElectrical.co.uk" className="text-gray-300 hover:text-boost-orange transition-colors">
                  Enquiries@BoostElectrical.co.uk
                </a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-boost-orange mr-3 mt-1"></i>
                <div className="text-gray-300">
                  <p>Mon-Fri: 7:00-18:00</p>
                  <p>Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">&copy; 2024 Boost Electrical. All rights reserved.</p>
          <div className="flex items-center text-gray-300 text-sm">
            <i className="fas fa-shield-alt text-boost-orange mr-2"></i>
            <span>NICEIC Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
