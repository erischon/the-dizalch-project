import About from "@/components/portfolio/sections/AboutSection";
import Experience from "@/components/portfolio/Experience";
import Stacks from "@/components/portfolio/Stacks";

/**
 * @description About Page
 * @version 1.0.0
 */
const AboutPage = () => {
  return (
    <div className="">
      <About />

      <Stacks />

      <Experience />
    </div>
  );
};

export default AboutPage;
