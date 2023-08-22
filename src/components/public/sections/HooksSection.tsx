"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  slideBottomToTopVariants,
  slideTopToBottomVariants,
} from "@/lib/motionVariants";

/**
 * @description Services Section component,
 * @version 1.0.0
 */
export default function HooksSection() {
  return (
    <section
      className="min-h-screen py-[4rem] lg:py-[6rem] px-[3%] lg:px-[6%] mx-auto"
      id="hook"
    >
      <div className="flex flex-col items-start mb-20">
        <p className="mb-3 text-indigo-500 dark:text-indigo-300 relative after:inline-block after:w-20 after:h-[0.1rem] after:bg-indigo-300 after:bottom-[50%] after:right-[-6rem] after:absolute">
          Vous manquez de ressources ?
        </p>

        <h2 className="text-3xl font-semibold capitalize">
          Améliorer la Qualité sans épuiser vos ressources
        </h2>
      </div>

      <div className="grid md:grid-cols-12 mb-10">
        <motion.div
          className="md:col-span-7 order-1 md:order-2 md:pl-14"
          variants={slideTopToBottomVariants}
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
        </motion.div>

        <motion.div
          className="relative w-[20rem] lg:w-[25rem] h-[20rem] lg:h-[25rem] mx-auto mt-4 md:my-auto md:col-span-5 order-2 md:order-1"
          variants={slideBottomToTopVariants}
          initial="initial"
          whileInView="animate"
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          <Image src="/images/stress.png" alt="" fill className="" />
        </motion.div>
      </div>
    </section>
  );
}
