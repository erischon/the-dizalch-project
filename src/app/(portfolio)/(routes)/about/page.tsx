import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Stacks from "@/components/portfolio/Stacks";

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
