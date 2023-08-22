import { revalidateTime } from "@/data/infos";

import ServicesSection from "@/components/public/sections/ServicesSection";
import HeroSection from "@/components/public/sections/HeroSection";
import AboutSection from "@/components/public/sections/AboutSection";
import TestimonialsSection from "@/components/public/sections/TestimonialsSection";
import HooksSection from "@/components/public/sections/HooksSection";

export const revalidate = revalidateTime.projects;

export default function PortfolioPage() {
  return (
    <div className="">
      <HeroSection />

      <HooksSection />

      <ServicesSection />

      <AboutSection />

      <TestimonialsSection />
    </div>
  );
}
