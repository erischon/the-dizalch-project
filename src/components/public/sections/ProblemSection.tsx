import Image from "next/image";

import Section from "@/components/public/Section";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/public/SectionHeader";

import { sections } from "@/data/infos";

/**
 * @description Services Section component,
 * @version 1.0.0
 */
export default function ProblemSection() {
  const { header, title } = sections.problem;

  return (
    <Section id="problem">
      <Container background="bg-gray-800">
        <SectionHeader header={header} title={title} />

        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6 order-1 md:order-2 md:pl-5 text-lg lg:text-xl flex flex-col gap-5">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
              consequuntur cum harum. Debitis veritatis quaerat dolor ratione
              voluptatibus repellat! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Porro dolor ullam laborum doloribus maxime!
              Deleniti nesciunt nostrum corporis accusamus iure?
            </p>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
              consequuntur cum harum. Debitis veritatis quaerat dolor ratione
              voluptatibus repellat! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Porro dolor ullam laborum doloribus maxime!
              Deleniti nesciunt nostrum corporis accusamus iure?
            </p>
          </div>

          <div className="relative w-[14rem] h-[14rem] lg:w-[20rem] lg:h-[20rem] mx-auto mt-5 lg:mt-0 md:col-span-6 order-2 md:order-1">
            <Image src="/images/stress.png" alt="" fill className="" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
