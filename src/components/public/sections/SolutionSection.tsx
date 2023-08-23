"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  slideRightToLeftVariants,
  slideLeftToRightVariants,
} from "@/lib/motionVariants";

/**
 * @descriptionSolution Section
 * @version 1.0.0
 */
export default function SolutionSection() {
  return (
    <section
      className="min-h-screen py-[4rem] lg:py-[6rem] px-[3%] lg:px-[6%] mx-auto bg-indigo-50"
      id="hook"
    >
      <div className="flex flex-col items-start mb-10 max-w-3xl">
        <p className="text-md text-gray-500 mb-5">La solution</p>

        <h2 className="text-4xl text-gray-800 font-semibold">
          Réduisez votre dette technique et optimisez votre process de
          développement
        </h2>
      </div>

      <div className="grid md:grid-cols-12 mb-10">
        <motion.div
          className="text-gray-800 md:col-span-7 md:pr-14 mb-5 max-w-3xl"
          variants={slideLeftToRightVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: "easeIn", duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="md:text-lg lg:text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            consequuntur cum harum. Debitis veritatis quaerat dolor ratione
            voluptatibus repellat! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Porro dolor ullam laborum doloribus maxime!
            Deleniti nesciunt nostrum corporis accusamus iure?
          </p>

          <p className="md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            consequuntur cum harum. Debitis veritatis quaerat dolor ratione
            voluptatibus repellat! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Porro dolor ullam laborum doloribus maxime!
            Deleniti nesciunt nostrum corporis accusamus iure?
          </p>

          <p className="md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            consequuntur cum harum. Debitis veritatis quaerat dolor ratione
            voluptatibus repellat! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Porro dolor ullam laborum doloribus maxime!
            Deleniti nesciunt nostrum corporis accusamus iure?
          </p>
        </motion.div>

        <motion.div
          className="relative w-[20rem] lg:w-[25rem] h-[20rem] lg:h-[25rem] mx-auto mt-4 md:my-auto md:col-span-5"
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
