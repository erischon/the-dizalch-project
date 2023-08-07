import About from "@/components/portfolio/about";
import Experience from "@/components/portfolio/experience";
import Stacks from "@/components/portfolio/stacks";

/**
 * @description About Page
 * @version 1.0.0
 */
const AboutPage = () => {
  return (
    <div className="my-8">
      <About />

      <Stacks />

      <Experience />
    </div>
  );
};

export default AboutPage;
