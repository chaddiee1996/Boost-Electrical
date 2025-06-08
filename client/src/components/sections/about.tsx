import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { target: 10, label: "Years Experience", suffix: "+" },
  { target: 500, label: "Projects Completed", suffix: "+" },
  { target: 250, label: "Happy Customers", suffix: "+" },
  { target: 2, label: "Hours Response", prefix: "<" }
];

const features = [
  {
    icon: "fas fa-leaf",
    title: "Renewable Energy Specialists",
    description: "Leading experts in sustainable electrical solutions"
  },
  {
    icon: "fas fa-brain",
    title: "Smart Home Experts",
    description: "Cutting-edge home automation and technology"
  },
  {
    icon: "fas fa-certificate",
    title: "Same-Day Certification",
    description: "Fast, reliable testing and compliance services"
  },
  {
    icon: "fas fa-pound-sign",
    title: "Competitive Pricing",
    description: "Fair, transparent pricing with no hidden costs"
  }
];

export default function AboutSection() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounters = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    stats.forEach((stat, index) => {
      let start = 0;
      const increment = stat.target / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.target) {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = stat.target;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.ceil(start);
            return newCounters;
          });
        }
      }, 20);
    });
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onViewportEnter={animateCounters}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-boost-dark mb-8">
              Why Choose Boost Electrical?
            </h2>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-boost-orange mb-2">
                    {stat.prefix}
                    <span>{counters[index]}</span>
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Differentiators */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-boost-orange/10 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${feature.icon} text-boost-orange text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-boost-dark mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional electrician working on modern electrical installations and wiring systems in Colchester" 
              className="rounded-2xl shadow-2xl w-full" 
              loading="lazy"
            />
            <motion.div 
              className="absolute bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-boost-orange rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-bolt text-white text-sm md:text-lg"></i>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
