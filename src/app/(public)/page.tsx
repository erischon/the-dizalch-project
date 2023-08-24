import { revalidateTime } from "@/data/infos";

import HeroSection from "@/components/public/sections/HeroSection";
import ProblemSection from "@/components/public/sections/ProblemSection";
import SolutionSection from "@/components/public/sections/SolutionSection";
import ServicesSection from "@/components/public/sections/ServicesSection";
import TestimonialsSection from "@/components/public/sections/TestimonialsSection";
import AboutSection from "@/components/public/sections/AboutSection";
import FaqSection from "@/components/public/sections/FaqSection";
import CtaSection from "@/components/public/sections/CtaSection";
import ExpertiseSection from "@/components/public/sections/ExpertiseSection";

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
      <ExpertiseSection />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
