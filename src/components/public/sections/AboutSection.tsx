import Image from "next/image";

import { metrics } from "@/data/infos";
import Section from "@/components/public/Section";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/public/SectionHeader";

import { sections } from "@/data/infos";

/**
 * @description About Section component
 * @version 1.0.0
 */
export default function AboutSection() {
  const { header, title } = sections.about;

  return (
    <Section id="about" background="bg-gray-800">
      <Container
        background="bg-gray-900"
        otherClass="flex flex-col-reverse items-center md:flex-row"
      >
        <div className="">
          <SectionHeader header={header} title={title} />

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

        <div className="">
          <div className="w-60 h-60 lg:w-80 lg:h-80 relative">
            <Image src="/erischon_indigo.png" alt="Eri Schön" fill />
          </div>
        </div>
      </Container>

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
