import OfferPopup from "@/components/OfferPopup";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PetShopSection from "@/components/sections/PetShopSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FaqSection from "@/components/sections/FaqSection";
import GallerySection from "@/components/sections/GallerySection";
import BookingSection from "@/components/sections/BookingSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/sections/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <OfferPopup />
      <a href="#sobre" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Pular para o conteúdo
      </a>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PetShopSection />
        <DifferentialsSection />
        <ReviewsSection />
        <FaqSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
