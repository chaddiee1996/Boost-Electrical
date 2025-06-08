import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-boost-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-boost-dark mb-4">
            Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Please fill out the form requesting a pricing list and we will email you!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold text-boost-dark text-center">
                Request Pricing Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <i className="fas fa-file-invoice-dollar text-boost-orange text-5xl mb-4"></i>
                <p className="text-gray-600 mb-6">
                  Get detailed pricing for all our electrical services. Simply fill out our contact form 
                  and we'll send you our comprehensive pricing list within 24 hours.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-boost-orange mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-boost-dark">Transparent Pricing</h4>
                      <p className="text-sm text-gray-600">No hidden costs or surprises</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-clock text-boost-orange mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-boost-dark">Quick Response</h4>
                      <p className="text-sm text-gray-600">Pricing sent within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-calculator text-boost-orange mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-boost-dark">Detailed Quotes</h4>
                      <p className="text-sm text-gray-600">Comprehensive pricing breakdown</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-handshake text-boost-orange mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-boost-dark">Fair Rates</h4>
                      <p className="text-sm text-gray-600">Competitive market pricing</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="bg-boost-orange hover:bg-boost-orange-light text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Request Pricing List
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services Covered */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-boost-dark mb-6">Services We Price</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-center">
                  <i className="fas fa-solar-panel text-boost-orange mr-2"></i>
                  <span className="text-gray-600">Solar Installations</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-home text-boost-orange mr-2"></i>
                  <span className="text-gray-600">Smart Home Systems</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-industry text-boost-orange mr-2"></i>
                  <span className="text-gray-600">Commercial Projects</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clipboard-check text-boost-orange mr-2"></i>
                  <span className="text-gray-600">EICR Testing</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-house-user text-boost-orange mr-2"></i>
                  <span className="text-gray-600">Domestic Services</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-drafting-compass text-boost-orange mr-2"></i>
                  <span className="text-gray-600">Design & Consultancy</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
