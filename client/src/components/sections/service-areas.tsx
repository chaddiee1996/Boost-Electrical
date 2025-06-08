import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const serviceAreas = [
  { name: "Colchester (Main Hub)", isMain: true },
  { name: "Cambridge", isMain: false },
  { name: "Braintree", isMain: false },
  { name: "Ipswich", isMain: false }
];

export default function ServiceAreasSection() {
  return (
    <section className="py-20 bg-boost-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-boost-dark mb-6">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We cover East Essex and surrounding areas with fast, reliable electrical services
            </p>
            
            <div className="space-y-4">
              {serviceAreas.map((area, index) => (
                <motion.div 
                  key={area.name}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-boost-orange rounded-full mr-3"></div>
                  <span className="font-medium text-boost-dark">{area.name}</span>
                </motion.div>
              ))}
            </div>
            
            <Card className="mt-8 bg-white">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-boost-dark mb-2">Emergency Response</h3>
                <p className="text-gray-600">Less than 2 hours response time across our coverage area</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="aspect-square bg-white shadow-lg">
              <CardContent className="p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <i className="fas fa-map-marked-alt text-boost-orange text-6xl mb-4"></i>
                  <h3 className="font-heading font-bold text-boost-dark text-xl mb-2">Coverage Area</h3>
                  <p className="text-gray-600 mb-4">East Essex & Surrounding Areas</p>
                  <div className="grid grid-cols-2 gap-4">
                    {serviceAreas.map((area) => (
                      <div key={area.name} className="text-center">
                        <i className="fas fa-map-marker-alt text-boost-orange text-lg"></i>
                        <p className="text-xs text-gray-500 mt-1">{area.name.split(' ')[0]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
