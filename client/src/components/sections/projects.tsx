import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Solar Panel Installation",
    description: "Residential solar system with battery storage",
    category: "renewable",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    categoryLabel: "Renewable Energy"
  },
  {
    id: 2,
    title: "Office Complex Rewiring",
    description: "Complete electrical fit-out for modern office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    categoryLabel: "Commercial"
  },
  {
    id: 3,
    title: "Smart Home Automation",
    description: "Complete home automation with app control",
    category: "smart",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    categoryLabel: "Smart Homes"
  },
  {
    id: 4,
    title: "Complete House Rewiring",
    description: "Full electrical upgrade for period property",
    category: "domestic",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    categoryLabel: "Domestic"
  },
  {
    id: 5,
    title: "EV Charging Station",
    description: "Fast-charge point installation for home",
    category: "renewable",
    image: "https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    categoryLabel: "Renewable Energy"
  },
  {
    id: 6,
    title: "Industrial Maintenance",
    description: "Factory electrical system overhaul",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    categoryLabel: "Commercial"
  }
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "commercial", label: "Commercial" },
  { key: "domestic", label: "Domestic" },
  { key: "renewable", label: "Renewable" },
  { key: "smart", label: "Smart Homes" }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-boost-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-boost-dark mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing our expertise across commercial, domestic, renewable energy, and smart home projects
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.key 
                    ? "bg-boost-orange text-white hover:bg-boost-orange-light" 
                    : "bg-white text-boost-dark hover:bg-boost-orange hover:text-white"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover" 
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="font-heading font-bold text-boost-dark mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <span className="inline-block bg-boost-orange/10 text-boost-orange px-3 py-1 rounded-full text-sm font-medium self-start">
                    {project.categoryLabel}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
