import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import DeliveryModelsSection from "@/components/DeliveryModelsSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <ScrollReveal />
      <div className="md:h-screen flex flex-col md:overflow-hidden relative">
        <Navbar />
        <HeroSection />
      </div>
      <ServicesSection />
      <TechStackSection />
      <DeliveryModelsSection />
      <ProcessSection />
      {/* <WorkSection /> */}
      <TestimonialsSection />
      {/* <ClientsSection /> */}
      <AboutSection />
      <TeamSection />
      <FaqSection />
      <Footer />
      <ScrollToTopButton />
      <FloatingActions />
    </div>
  );
}
