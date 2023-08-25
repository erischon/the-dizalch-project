"use client";

import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";

import { gains } from "@/data/infos";
import GainCard from "@/components/public/GainCard";
import Slideshow from "@/components/public/Slideshow";
import Section from "@/components/public/Section";

/**
 * @descriptionSolution Section
 * @version 1.0.0
 */
export default function SolutionSection() {
  const media = useMediaQuery("(max-width: 768px)");

  return (
    <Section id="solution" background="bg-gray-800">
      <div className="bg-gray-900 rounded-3xl p-10 lg:p-20 shadow-lg shadow-black/20">
        <div className="flex flex-col md:items-start mb-10 max-w-3xl text-center md:text-left">
          <p className="text-md text-gray-300 mb-5">La solution</p>

          <h2 className="text-4xl font-semibold">
            Augmenter la Qualité et optimiser le process de développement
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 grow">
          <div className="lg:col-span-7 lg:pr-14 max-w-3xl flex flex-col md:mb-10 lg:mb-0">
            <div className="mb-5 lg:mb-14">
              <p className="text-center md:text-left md:text-lg lg:text-2xl mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                praesentium! Quo voluptates tenetur fugit deserunt reprehenderit
                dolorem, adipisci neque perferendis.
              </p>

              <p className="text-center md:text-left md:text-lg lg:text-2xl mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                praesentium! Quo voluptates tenetur fugit deserunt reprehenderit
                dolorem, adipisci neque perferendis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-12 sm:justify-center gap-4 grow items-center">
              {!media ? (
                <>
                  {gains.map((gain, index) => (
                    <div className="lg:col-span-4" key={index}>
                      <GainCard gain={gain} />
                    </div>
                  ))}
                </>
              ) : (
                <Slideshow
                  content={gains.map((gain) => (
                    <GainCard gain={gain} key={gain.title} />
                  ))}
                />
              )}
            </div>
          </div>

          <div className="relative w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] mx-auto my-auto lg:col-span-5 hidden md:block">
            <Image src="/images/solution.png" alt="" fill className="" />
          </div>
        </div>
      </div>
    </Section>
  );
}
