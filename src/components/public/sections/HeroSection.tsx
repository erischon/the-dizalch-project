import Image from "next/image";
import Link from "next/link";

import Section from "@/components/public/Section";

/**
 * @description This component is the hero section of the portfolio page
 */
export default function HeroSection() {
  return (
    <>
      <Section background="bg-indigo-900" id="hero">
        <div className="grid lg:grid-cols-12 lg:items-center p-2">
          <div className="max-w-xl lg:max-w-screen-2xl h-full lg:col-span-8 mx-auto place-self-center order-2 lg:order-1 text-center lg:text-left lg:flex lg:flex-col lg:gap-4 lg:pr-5">
            <h1 className="mb-8 mt-2 text-3xl md:text-4xl lg:text-6xl font-semibold mx-auto lg:mx-0 text-gray-100 tracking-wide">
              Une aide sur mesure pour tester votre code
            </h1>

            <h3 className="mb-10 text-lg md:text-xl lg:text-2xl text-gray-100">
              Nous sommes votre ressource externe qui va analyser votre code
              React, le documenter, et créer les tests nécessaires (unitaires ou
              E2E).
            </h3>

            <a
              href="https://calendly.com/erischon/contact"
              target="_blank"
              className="animate-bounce"
            >
              <button className="bg-gray-100 text-gray-700 font-semibold px-9 py-3 hover:bg-transparent hover:text-gray-100 border border-gray-100 dark:hover:text-gray-100 dark:hover:border-gray-100 text-lg md:text-2xl transition duration-300 rounded-lg">
                En savoir plus
              </button>
            </a>
          </div>

          <div className="relative lg:flex lg:col-span-4 lg:mb-0 w-[14rem] h-[14rem] lg:h-[24rem] lg:w-[24rem] order-1 lg:order-2 mx-auto">
            <Image
              src="/images/hero-14.png"
              alt="hero"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
