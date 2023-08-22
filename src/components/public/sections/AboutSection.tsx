import Image from "next/image";

import { metrics } from "@/data/infos";

/**
 * @description About Section component
 * @version 1.0.0
 */
export default function AboutSection() {
  return (
    <section
      className="min-h-screen py-[4rem] lg:py-[6rem] px-[6%] bg-indigo-50 dark:bg-indigo-900"
      id="about"
    >
      <div className="grid md:grid-cols-12 mx-auto mb-8">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="flex flex-col items-start mb-8">
            <p className="mb-3 text-indigo-500 dark:text-indigo-300 relative after:inline-block after:w-20 after:h-[0.1rem] after:bg-indigo-300 after:bottom-[50%] after:right-[-6rem] after:absolute">
              A propos
            </p>

            <h2 className="text-3xl font-semibold capitalize">
              Améliorer la Qualité sans épuiser vos ressources
            </h2>
          </div>

          <p className="my-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nam
            fugit eaque quia commodi dolore pariatur qui aliquam placeat nemo,
            tenetur, esse exercitationem!
          </p>

          <p className="my-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nam
            fugit eaque quia commodi dolore pariatur qui aliquam placeat nemo,
            tenetur, esse exercitationem!
          </p>
        </div>

        <div className="md:col-span-6 mx-auto my-auto order-1 md:order-2">
          <div className="w-80 h-80  relative">
            <Image src="/erischon_indigo.png" alt="Eri Schön" fill />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 w-full justify-center gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="flex flex-col items-center px-8 md:px-28 py-10 text-gray-100 bg-indigo-700 rounded-lg shadow-md dark:shadow-black/60 min-w-[200px] max-w-3xl md:col-span-4"
          >
            <div className="text-4xl mb-2">{metric.icon}</div>

            <p className="text-4xl font-bold mb-0">{metric.value}</p>

            <p className="text-center">{metric.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
