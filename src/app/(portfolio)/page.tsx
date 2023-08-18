import { tagLine, revalidateTime } from "@/data/infos";
import ServicesSection from "@/components/portfolio/ServicesSection";
import HeroSection from "@/components/portfolio/HeroSection";

export const revalidate = revalidateTime.projects;

export default function PortfolioPage() {
  return (
    <div className="">
      <HeroSection />

      <ServicesSection />
    </div>
  );
}
