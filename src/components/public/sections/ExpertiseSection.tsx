import Section from "@/components/public/Section";
import Image from "next/image";

import { sections } from "@/data/infos";

import Container from "@/components/public/Container";
import SectionHeader from "@/components/public/SectionHeader";

export default function ExpertiseSection() {
  const { header, title } = sections.expertise;

  return (
    <>
      <Section id="expertise" background="bg-gray-800">
        <div className="grid md:grid-cols-12 md:gap-4 lg:gap-6">
          <Container
            background="bg-gray-900"
            otherClass="md:col-span-8 mb-5 md:mb-0"
          >
            <SectionHeader header={header} title={title} />

            <div className="flex flex-col gap-5 text-lg lg:text-xl">
              <p className="">
                Nous sommes spécialisé dans les applications web Javascript et
                React.
              </p>

              <p className="">
                Notre expérience nous permet de vous aider à analyser votre
                application, réparer votre code et à mettre en place des process
                pour rendre robuste et fiable votre application web.
              </p>

              <p className="">
                Nous utilisons les librairies de test les plus populaires :{" "}
                <strong>Jest</strong>, <strong>Vitest</strong>,{" "}
                <strong>React Testing Library</strong>, <strong>Cypress</strong>
                .
              </p>
            </div>
          </Container>

          <Container
            background="bg-indigo-900"
            otherClass="md:col-span-4 md:mx-auto"
          >
            <div className="flex md:grid md:grid-rows-2 justify-around items-center md:justify-normal md:h-full">
              <div className="relative w-[6.5rem] h-[6.5rem] lg:w-[10rem] md:h-[10rem] ">
                <Image
                  src="/images/logos/javascript.png"
                  alt="Javascript"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[6.5rem] h-[5.5rem] lg:w-[10rem] lg:h-[8rem] ">
                <Image src="/images/logos/react.png" alt="React" fill />
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
}
