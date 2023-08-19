import Image from "next/image";

import { tagLine } from "@/data/infos";

/**
 * @description This component is the hero section of the portfolio page
 */
const HeroSection = () => {
  return (
    <>
      <section
        className="min-h-[calc(100vh-70px)] lg:pt-[6rem] px-[6%] lg:pb-[4rem] bg-indigo-50 dark:bg-indigo-900"
        id="hero"
      >
        <div className="grid lg:grid-cols-12 lg:items-center">
          <div className="max-w-screen-2xl lg:col-span-7 mr-auto place-self-center order-2 lg:order-1 text-center lg:text-left">
            <h1 className="mb-8 text-3xl md:text-4xl lg:text-6xl font-extrabold lg:leading-tight">
              La ressource{" "}
              <span className="uppercase text-indigo-500 dark:text-indigo-300">
                Qualité
              </span>{" "}
              de votre appli web{" "}
              <span className="uppercase text-indigo-500 dark:text-indigo-300">
                React
              </span>
            </h1>

            <h3 className="mb-10 lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in digni ssim euismod purus donec mus vulputate habitant iaculis.
              Com odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
            </h3>

            <a href="mailto:erischondev@gmail.com" className="">
              <button className="bg-indigo-500 text-gray-100 font-semibold px-9 py-3 hover:bg-transparent hover:text-indigo-600 border border-indigo-600 text-lg md:text-2xl transition duration-300">
                Parlons-en !
              </button>
            </a>
          </div>

          <div className="relative lg:flex lg:col-span-5 lg:mt-0 w-80 h-80 order-1 lg:order-2 mx-auto">
            <Image
              src="/images/hero-5.png"
              alt="hero"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
