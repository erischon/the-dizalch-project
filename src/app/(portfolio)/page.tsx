import { revalidateTime } from "@/data/infos";

import ServicesSection from "@/components/portfolio/sections/ServicesSection";
import HeroSection from "@/components/portfolio/sections/HeroSection";
import AboutSection from "@/components/portfolio/sections/AboutSection";

export const revalidate = revalidateTime.projects;

export default function PortfolioPage() {
  return (
    <div className="">
      <HeroSection />

      <ServicesSection />

      <AboutSection />
    </div>
  );
}
