import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Neil Thompson",
    location: "Cambridge",
    rating: 5,
    text: "Exceptional service from start to finish. The team installed our solar panels professionally and efficiently. Highly recommend Boost Electrical for any renewable energy projects."
  },
  {
    id: 2,
    name: "Sandra Williams",
    location: "Colchester",
    rating: 5,
    text: "Quick response for our emergency electrical issue. Professional, courteous, and fair pricing. Will definitely use Boost Electrical again."
  },
  {
    id: 3,
    name: "Jessica Martinez",
    location: "Braintree",
    rating: 5,
    text: "Outstanding smart home installation. The team explained everything clearly and the system works perfectly. Great value for money."
  },
  {
    id: 4,
    name: "Alessandro Romano",
    location: "Ipswich",
    rating: 5,
    text: "Professional EICR testing and certification completed same day. Thorough work and excellent customer service throughout."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-boost-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">Join 250+ happy customers across East Essex</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="bg-boost-gray">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex text-boost-orange text-xl">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 italic">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div className="flex items-center justify-center">
                      <div>
                        <h4 className="font-heading font-bold text-boost-dark">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-boost-orange font-medium">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-boost-orange" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
