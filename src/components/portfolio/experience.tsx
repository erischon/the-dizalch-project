import ProjectsByClient from "@/components/portfolio/projectsByClient";
import SectionTitle from "@/components/portfolio/sectionTitle";

const lastExperience = [
  {
    period: "2014 - 2019",
    position: "Consultant en Marketing Numérique Indépendant",
    company: "Keyprogress",
  },
  {
    period: "2011 - 2014",
    position: "Program Manager",
    company: "Fivia",
  },
  {
    period: "2009 - 2011",
    position: "Head of Client Services",
    company: "Fivia",
  },
  {
    period: "2006 - 2009",
    position: "Director",
    company: "Adnovia",
  },
  {
    period: "1999 - 2006",
    position: "Traffic Manager",
    company: "OMD",
  },
];

const LastX = ({
  infos,
}: {
  infos: { period: string; position: string; company: string };
}) => {
  return (
    <div className="mb-4">
      <p className="text-xs text-gray-500">{infos.period}</p>

      <div className="flex flex-col sm:flex-row justify-between mb-2">
        <h3 className="text-xl font-semibold">{infos.position}</h3>

        <div className="text-lg text-teal-500 sm:font-bold">
          @ {infos.company}
        </div>
      </div>
    </div>
  );
};

/**
 * @description Experience module, used in AboutPage
 * @version 1.0.0
 */
const Experience = () => {
  return (
    <section className="my-10">
      <SectionTitle title="Expérience" />

      <article className="border border-gray-200 shadow-md p-8 my-4">
        <p className="text-xs text-gray-500 mb-1">Juillet 2020 - aujourd'hui</p>

        <div className="flex flex-col sm:flex-row justify-between gap-2  mb-2 sm:border-r-8 sm:border-l-8 sm:px-2 sm:border-teal-400">
          <h3 className="text-xl font-semibold">
            Développeur Web Full-Stack Freelance
          </h3>
          <div className="text-lg">@ Eri Schön</div>
        </div>

        <div className="my-4">
          <div className="mb-4">
            <h3 className="uppercase font-semibold text-xs text-gray-400 tracking-widest mb-1">
              missions
            </h3>

            <div className="flex flex-wrap gap-1">
              <ProjectsByClient clients={["Terre d'avance"]} />

              <ProjectsByClient clients={["Butterflai"]} />

              <ProjectsByClient clients={["b-Sharpe"]} />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="uppercase font-semibold text-xs text-gray-400 tracking-widest mb-1">
              Projets Proffessionnels
            </h3>

            <div className="flex gap-2">
              <ProjectsByClient clients={["OpenClassrooms"]} />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="uppercase font-semibold text-xs text-gray-400 tracking-widest mb-1">
              Projets Personnels
            </h3>

            <div className="flex gap-2">
              <ProjectsByClient clients={["Eri Schön"]} />
            </div>
          </div>
        </div>
      </article>

      <article className="border border-gray-200 shadow-md p-8 my-4">
        {lastExperience.map((exp) => (
          <LastX key={exp.company} infos={exp} />
        ))}
      </article>
    </section>
  );
};
export default Experience;
