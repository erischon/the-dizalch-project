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
              Vous devez fournir un code rapidement mais vous n’arrivez pas à
              tout faire : développer de nouvelles fonctionnalités et coder des
              tests robustes.
            </p>

            <p className="">
              Vous avez remis à demain la création des tests, quand vous aurez
              plus de temps et de ressources à leur accorder. Malheureusement ce
              demain n’arrive jamais et votre code grossi à vue d’oeil sans
              tests convenables.
            </p>

            <p className="">
              Vous avez du mal à <strong>maintenir votre code</strong> et le{" "}
              <strong>développement est ralenti</strong>, résultat des courses
              vous n’arrivez pas à faire évoluer votre application.
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
