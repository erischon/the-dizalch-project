import { tagLine } from "@/data/infos";

/**
 * @description This component is the hero section of the portfolio page
 */
const HeroSection = () => {
  return (
    <>
      <section className="flex justify-start flex-wrap px-4 mx-auto mb-8 lg:mt-6">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] mb-8 w-full md:max-w-2xl md:mx-auto">
          <div>
            <div className="mb-4 flex flex-col items-center gap-1 ">
              <div className="text-xs text-gray-500 md:text-sm dark:text-gray-100">
                Bonjour, je suis
              </div>

              <h2 className="text-2xl font-bold text-teal-400 md:text-4xl">
                Eri Schön
              </h2>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-center sm:mb-10 sm:text-5xl md:text-6xl md:leading-tight">
              {tagLine}
            </h1>
          </div>

          <h3 className="mb-8 md:text-lg sm:mb-10 text-center">
            Je suis votre solution pour la fabrication d'application Web{" "}
            <span className="bg-teal-300 font-semibold dark:text-gray-700">
              fluide
            </span>
            ,{" "}
            <span className="bg-teal-300 font-semibold dark:text-gray-700">
              rapide
            </span>
            , et{" "}
            <span className="bg-teal-300 font-semibold dark:text-gray-700">
              fiable
            </span>
          </h3>

          <a href="mailto:erischondev@gmail.com" className="my-8">
            <button className="bg-teal-500 text-white font-semibold px-6 py-2 hover:opacity-60 hover:text-black text-lg md:text-2xl">
              Parlons-en !
            </button>
          </a>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
