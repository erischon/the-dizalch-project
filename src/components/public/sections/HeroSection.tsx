import Image from "next/image";

/**
 * @description This component is the hero section of the portfolio page
 */
const HeroSection = () => {
  return (
    <>
      <section
        className="min-h-[calc(100vh-70px)] lg:py-[4rem] px-[6%] bg-indigo-500 dark:bg-indigo-900"
        id="hero"
      >
        <div className="grid lg:grid-cols-12 lg:items-center rounded-lg shadow-lg">
          <div className="bg-red-500 max-w-screen-2xl h-full lg:col-span-6 mr-auto place-self-center order-2 lg:order-1 text-center lg:text-left ">
            <h1 className="mb-8 text-3xl md:text-4xl lg:text-6xl font-extrabold lg:leading-tight sm:max-w-lg mx-auto lg:mx-0 text-gray-100">
              Optimiser votre application React
            </h1>

            <h3 className="mb-10 lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in digni ssim euismod purus donec mus vulputate habitant iaculis.
              Com odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
            </h3>

            <a href="mailto:erischondev@gmail.com" className="">
              <button className="bg-gray-100 text-gray-700 font-semibold px-9 py-3 hover:bg-transparent hover:text-gray-100 border border-gray-100 dark:hover:text-gray-100 dark:hover:border-gray-100 text-lg md:text-2xl transition duration-300 rounded-lg">
                Parlons-en !
              </button>
            </a>
          </div>

          <div className="relative lg:flex lg:col-span-6 lg:mb-0 w-[17rem] h-[20rem] order-1 lg:order-2 mx-auto">
            <Image
              src="/images/hero-10.png"
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
