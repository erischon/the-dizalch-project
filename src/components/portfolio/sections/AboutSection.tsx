import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

/**
 * @description About component,
 * @version 1.0.0
 */
const AboutSection = () => {
  return (
    <section
      className="min-h-screen pt-[4rem] lg:pt-[6rem] px-[6%] pb-[2rem] lg:pb-[4rem] bg-indigo-50 dark:bg-indigo-900"
      id="about"
    >
      <div className="grid md:grid-cols-12 mx-auto mb-8">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="flex flex-col items-start mb-8">
            <p className="mb-3 text-indigo-500 dark:text-indigo-300 relative after:inline-block after:w-20 after:h-[0.1rem] after:bg-indigo-300 after:bottom-[50%] after:right-[-6rem] after:absolute">
              A propos
            </p>

            <h2 className="text-3xl font-semibold">
              Améliorer la qualité de votre application React avec un Freelance
            </h2>
          </div>

          <div className="my-6">
            <p>
              Bonjour, je suis Eri, je suis tombé dans l'univers du Web en 1995
              et depuis je ne l'ai pas quitté.
            </p>
            <p>
              Aujourd'hui je suis développeur web Full-stack Freelance en full
              remote.
            </p>
            <p>
              J'ai une expertise en création, modification et entretien de site
              et d'application Web.
            </p>
          </div>

          <div className="my-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nam
            fugit eaque quia commodi dolore pariatur qui aliquam placeat nemo,
            tenetur, esse exercitationem!
          </div>
        </div>

        <div className="md:col-span-6 mx-auto my-auto order-1 md:order-2">
          <div className="w-80 h-80  relative">
            <Image src="/erischon_indigo.png" alt="Eri Schön" fill />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-center">
        <div className="flex flex-col items-center px-8 md:px-28 py-10 text-gray-100 bg-indigo-700 rounded-lg shadow-md dark:shadow-black/60 m-4 min-w-[200px]">
          <AiOutlineCheckCircle className="text-4xl mb-2" />
          <p className="text-4xl font-bold mb-0">3+</p>
          <p>années d'expérience</p>
        </div>

        <div className="flex flex-col items-center px-8 md:px-28 py-10 text-gray-100 bg-indigo-700 rounded-lg shadow-md dark:shadow-black/60 m-4 min-w-[200px]">
          <AiOutlineCheckCircle className="text-4xl mb-2" />
          <p className="text-4xl font-bold mb-0">50+</p>
          <p>applications optimisées</p>
        </div>

        <div className="flex flex-col items-center px-8 md:px-28 py-10 text-gray-100 bg-indigo-700 rounded-lg shadow-md dark:shadow-black/60 m-4 min-w-[200px]">
          <AiOutlineCheckCircle className="text-4xl mb-2" />
          <p className="text-4xl font-bold mb-0">200+</p>
          <p>tests effectués</p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
