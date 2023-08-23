"use client";

import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import { motion } from "framer-motion";

import { gains } from "@/data/infos";
import GainCard from "@/components/public/GainCard";
import Slideshow from "@/components/public/Slideshow";

import {
  slideRightToLeftVariants,
  slideLeftToRightVariants,
} from "@/lib/motionVariants";

/**
 * @descriptionSolution Section
 * @version 1.0.0
 */
export default function SolutionSection() {
  const media = useMediaQuery("(max-width: 768px)");

  return (
    <section
      className="min-h-screen py-[4rem] lg:py-[6rem] px-[3%] lg:px-[6%] mx-auto bg-indigo-50 flex flex-col"
      id="solution"
    >
      <div className="flex flex-col md:items-start mb-10 max-w-3xl text-center md:text-left">
        <p className="text-md text-gray-500 mb-5">La solution</p>

        <h2 className="text-4xl text-gray-800 font-semibold">
          Augmenter la Qualité et optimiser le process de développement
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 grow">
        <div className="text-gray-800 lg:col-span-7 md:pr-14 max-w-3xl flex flex-col">
          <div className="mb-5">
            <motion.p
              className="text-center md:text-left md:text-lg lg:text-2xl mb-5"
              variants={slideLeftToRightVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              praesentium! Quo voluptates tenetur fugit deserunt reprehenderit
              dolorem, adipisci neque perferendis.
            </motion.p>

            <motion.p
              className="text-center md:text-left md:text-lg lg:text-2xl mb-5"
              variants={slideLeftToRightVariants}
              initial="initial"
              whileInView="animate"
              transition={{ ease: "easeIn", duration: 0.5 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              praesentium! Quo voluptates tenetur fugit deserunt reprehenderit
              dolorem, adipisci neque perferendis.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-12 sm:justify-center gap-4 grow">
            {!media ? (
              <>
                {gains.map((gain) => (
                  <GainCard gain={gain} key={gain.title} />
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

        <motion.div
          className="relative w-[20rem] lg:w-[25rem] h-[20rem] lg:h-[25rem] mx-auto mt-4 lg:col-span-5 hidden lg:block"
          variants={slideRightToLeftVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Image src="/images/solution.png" alt="" fill className="" />
        </motion.div>
      </div>
    </section>
  );
}
