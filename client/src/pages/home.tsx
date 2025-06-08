import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import TestimonialsSection from "@/components/sections/testimonials";
import ServiceAreasSection from "@/components/sections/service-areas";
import ContactSection from "@/components/sections/contact";
import PricingSection from "@/components/sections/pricing";
import Footer from "@/components/footer";
import FloatingCallButton from "@/components/floating-call-button";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <ContactSection />
      <PricingSection />
      <Footer />
      <FloatingCallButton />
      <ScrollToTop />
    </div>
  );
}
