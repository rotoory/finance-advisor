import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhoWeHelpSection from "@/components/sections/WhoWeHelpSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SchedulingSection from "@/components/sections/SchedulingSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhoWeHelpSection />
        <HowItWorksSection />
        <SchedulingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}