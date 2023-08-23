import { revalidateTime } from "@/data/infos";

import ServicesSection from "@/components/public/sections/ServicesSection";
import HeroSection from "@/components/public/sections/HeroSection";
import AboutSection from "@/components/public/sections/AboutSection";
import TestimonialsSection from "@/components/public/sections/TestimonialsSection";
import ProblemSection from "@/components/public/sections/ProblemSection";
import SolutionSection from "@/components/public/sections/SolutionSection";

export const revalidate = revalidateTime.projects;

/**
 * @description Landing Page
 * @version 1.0.0
 */
export default function LandingPage() {
  return (
    <div className="">
      <HeroSection />

      <ProblemSection />
      <SolutionSection />

      <ServicesSection />

      <TestimonialsSection />
    </div>
  );
}
