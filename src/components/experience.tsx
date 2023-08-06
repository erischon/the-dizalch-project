import ProjectsByClient from "@/components/projectsByClient";
/**
 * @description Experience module, used in AboutPage
 * @version 1.0.0
 */
const Experience = () => {
  return (
    <section className="my-10">
      <h2 className="font-semibold text-2xl my-4 title">Expérience</h2>

      <article className="border border-gray-200 shadow-md p-8 my-8">
        <p className="text-xs text-gray-500">Juillet 2020 - aujourd'hui</p>

        <div className="flex flex-col sm:flex-row justify-between gap-2 text-xl font-semibold mb-2">
          <h3>Développeur Web Full-Stack Freelance</h3>
          <div className="text-teal-600">@ Eri Schön</div>
        </div>

        <div className="">
          <ProjectsByClient
            clients={[
              "Terre d'avance",
              "Butterflai",
              "b-Sharpe",
              "Eri Schön",
              "OpenClassrooms",
            ]}
          />
        </div>
      </article>

      <article className="border border-gray-200 shadow-md p-8 my-8">
        <div className="mb-4">
          <p className="text-xs text-gray-500">2014 - 2019</p>
          <div className="flex flex-col sm:flex-row justify-between gap-2  mb-2">
            <h3 className="text-xl font-semibold">
              Consultant en Marketing Numérique Indépendant
            </h3>

            <div className="text-teal-600 text-lg">@ Keyprogress</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500">2011 - 2014</p>
          <div className="flex flex-col sm:flex-row justify-between gap-2  mb-2">
            <h3 className="text-xl font-semibold">Program Manager</h3>

            <div className="text-teal-600 text-lg">@ Fivia</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500">2009 - 2011</p>
          <div className="flex flex-col sm:flex-row justify-between gap-2  mb-2">
            <h3 className="text-xl font-semibold">Head of Client Services</h3>

            <div className="text-teal-600 text-lg">@ Fivia</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500">2006 - 2009</p>
          <div className="flex flex-col sm:flex-row justify-between gap-2  mb-2">
            <h3 className="text-xl font-semibold">Director</h3>

            <div className="text-teal-600 text-lg">@ Adnovia</div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500">1999 - 2006</p>
          <div className="flex flex-col sm:flex-row justify-between gap-2  mb-2">
            <h3 className="text-xl font-semibold">Traffick Manager</h3>

            <div className="text-teal-600 text-lg">@ OMD</div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Experience;
