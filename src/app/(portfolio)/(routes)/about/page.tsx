import ProjectsByClient from "@/components/projectsByClient";
import Image from "next/image";

/**
 * @description About Page
 * @version 1.0.0
 */
const AboutPage = () => {
  return (
    <section className="">
      <article>
        <h2 className="font-semibold text-2xl mt-8 mb-4 sm:mb-0">About</h2>

        <div className="sm:grid sm:grid-cols-12 items-center">
          <div className="col-span-8">
            <p>
              Bonjour, je suis Eri, je suis tombé dans l'univers du Web en 1995
              et depuis je ne l'ai pas quitté.
            </p>
            <p>
              Aujourd'hui je suis développeur web Full-stack Freelance en full
              remote.
            </p>
            <p>
              J'ai une expertise en création, modification et entretien de site
              et d'application Web.
            </p>
          </div>

          <div className="relative w-[250px] h-[250px] hidden sm:col-span-4 sm:flex">
            <Image src="/erischon_a.png" alt="Eri Schön" fill />
          </div>
        </div>
      </article>

      <h2 className="font-semibold text-2xl my-4">Expérience</h2>

      <article className="border border-gray-200 shadow-md p-8 my-8">
        <p className="text-xs text-gray-500">Janv 2022 - aujourd'hui</p>

        <div className="flex flex-col sm:flex-row justify-between gap-2 text-xl font-semibold mb-2">
          <h3>Développeur web Full-stack Freelance</h3>
          <div className="text-teal-600">@ Eri Schön</div>
        </div>

        <div className="">
          <ProjectsByClient
            clients={["OpenClassrooms", "Terre d'avance", "Eri Schön"]}
          />
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
