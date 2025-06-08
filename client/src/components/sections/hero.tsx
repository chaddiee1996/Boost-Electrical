import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Powering Your Future with{" "}
            <span className="text-boost-orange">Smart, Sustainable</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Colchester's Premier Electrical Contractors - From Green Energy to Smart Homes
          </p>
          
          {/* Service Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-white">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="fas fa-shield-alt text-boost-orange mr-2"></i>
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="fas fa-certificate text-boost-orange mr-2"></i>
              <span className="font-medium">NICEIC Approved</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="fas fa-clock text-boost-orange mr-2"></i>
              <span className="font-medium">Emergency Callouts</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-boost-orange hover:bg-boost-orange-light text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect h-16 min-w-[200px]"
            >
              <i className="fas fa-calculator mr-2"></i>
              Get Free Quote
            </Button>
            <Button 
              asChild
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-boost-dark px-8 py-6 text-lg font-semibold transition-all duration-300 h-16 min-w-[200px]"
            >
              <a href="tel:01206645155" className="flex items-center justify-center">
                <i className="fas fa-phone mr-2"></i>
                Call 01206 645 155
              </a>
            </Button>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
