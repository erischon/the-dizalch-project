import Image from "next/image";

import { metrics } from "@/data/infos";
import Section from "@/components/public/Section";

/**
 * @description About Section component
 * @version 1.0.0
 */
export default function AboutSection() {
  return (
    <Section id="about" background="bg-gray-800">
      <div className="grid md:grid-cols-12 mx-auto bg-gray-900 rounded-3xl p-10 lg:p-20 shadow-lg shadow-black/20">
        <div className="md:col-span-8 order-2 md:order-1">
          <div className="flex flex-col md:items-start mb-10 max-w-3xl text-center md:text-left">
            <p className="text-md text-gray-300 mb-5">A propos</p>

            <h2 className="text-4xl font-semibold">
              Augmenter la Qualité et optimiser le process de développement
            </h2>
          </div>

          <div className="text:lg lg:text-xl flex flex-col gap-5">
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nam
              fugit eaque quia commodi dolore pariatur qui aliquam placeat nemo,
              tenetur, esse exercitationem!
            </p>

            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nam
              fugit eaque quia commodi dolore pariatur qui aliquam placeat nemo,
              tenetur, esse exercitationem!
            </p>
          </div>
        </div>
        <div className="md:col-span-4 order-1 md:order-2 justify-self-end">
          <div className="w-80 h-80 relative">
            <Image src="/erischon_indigo.png" alt="Eri Schön" fill />
          </div>
        </div>
      </div>

      {/* <div className="grid md:grid-cols-12 w-full justify-center gap-4 bg-indigo-900 rounded-3xl p-10 lg:p-20 shadow-lg shadow-black/20">
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
      </div> */}
    </Section>
  );
}
