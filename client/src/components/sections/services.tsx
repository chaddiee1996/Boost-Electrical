import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "fas fa-solar-panel",
    title: "Renewable Energy Solutions",
    description: "Solar panel installations, EV charging stations, and sustainable energy systems for homes and businesses.",
    category: "renewable"
  },
  {
    icon: "fas fa-home",
    title: "Smart Home Technology",
    description: "Advanced lighting, security systems, and home automation for modern living convenience.",
    category: "smart"
  },
  {
    icon: "fas fa-industry",
    title: "Commercial & Industrial",
    description: "Office fit-outs, industrial electrical projects, and commercial maintenance services.",
    category: "commercial"
  },
  {
    icon: "fas fa-clipboard-check",
    title: "EICR Testing & Compliance",
    description: "Same-day certification, PAT testing, and electrical safety compliance services.",
    category: "testing"
  },
  {
    icon: "fas fa-drafting-compass",
    title: "Electrical Design & Consultancy",
    description: "Custom electrical solutions, technical planning, and professional consultation services.",
    category: "design"
  },
  {
    icon: "fas fa-house-user",
    title: "Domestic Services",
    description: "Complete rewiring, electrical repairs, installations, and home electrical maintenance.",
    category: "domestic"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-boost-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-boost-dark mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical solutions from renewable energy to smart home technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="service-card bg-white h-full hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="text-boost-orange text-4xl mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-boost-dark mb-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-base">
                    {service.description}
                  </CardDescription>
                  <button className="inline-flex items-center text-boost-orange font-semibold hover:text-boost-orange-light transition-colors">
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
