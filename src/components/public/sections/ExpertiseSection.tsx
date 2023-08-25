import Section from "@/components/public/Section";
import Image from "next/image";

export default function ExpertiseSection() {
  return (
    <>
      <Section id="expertise" background="bg-gray-700">
        <div className="grid lg:grid-cols-12 lg:gap-6">
          <div className="bg-gray-900 rounded-3xl p-10 lg:p-20 shadow-lg shadow-black/20 lg:col-span-7">
            <div className="flex flex-col mb-10 max-w-3xl">
              <p className="text-md text-gray-400 mb-5">Notre expertise</p>

              <h2 className="text-4xl text-gray-100 font-semibold">
                Nous avons choisi le Front-end
              </h2>
            </div>

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
          </div>

          <div className="bg-indigo-900 rounded-3xl p-10 lg:p-20 shadow-lg shadow-black/20 lg:col-span-5">
            <div className="flex lg:grid lg:grid-rows-2 justify-around items-center lg:justify-normal">
              <div className="relative w-[6.5rem] h-[6.5rem] lg:w-[12rem] lg:h-[12rem] lg:justify-self-start">
                <Image
                  src="/images/logos/javascript.png"
                  alt="Javascript"
                  fill
                  className=""
                />
              </div>

              <div className="relative w-[6.5rem] h-[5.5rem] lg:w-[12rem] lg:h-[10rem] lg:justify-self-end lg:self-end">
                <Image src="/images/logos/react.png" alt="React" fill />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
