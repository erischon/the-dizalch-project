import { stacks } from "@/lib/skills";

import SkillCard from "./SkillCard";
import SectionTitle from "./SectionTitle";

/**
 * @description Stacks components, used in AboutPage
 * @version 1.0.0
 */
const Stacks = () => {
  const primaire = stacks.filter((stack) => stack.type === "A");
  const secondaire = stacks.filter((stack) => stack.type === "B");
  const tertiaire = stacks.filter((stack) => stack.type === "C");

  return (
    <section className="my-8">
      <SectionTitle title="Mes Stacks" />

      <article className="flex flex-col flex-wrap gap-2 my-4 sm:m-8">
        <h3 className="text-gray-500 dark:text-gray-300 font-semibold w-full">
          Les technos que je manie le plus fréquemment pour les productions
          front-end :
        </h3>

        <div className="flex flex-wrap shadow-sm w-fit p-4">
          {primaire.map((stack) => (
            <SkillCard skill={stack} key={stack.name} />
          ))}
        </div>
      </article>

      <article className="flex flex-col flex-wrap gap-2 my-4 sm:m-8">
        <h3 className="text-gray-500 dark:text-gray-300 font-semibold w-full">
          Les technos que je manipule pour le façonnage d'application Web
          Fullstack :
        </h3>

        <div className="flex flex-wrap shadow-sm w-fit p-4">
          {secondaire.map((stack) => (
            <SkillCard skill={stack} key={stack.name} />
          ))}
        </div>
      </article>

      <article className="flex flex-col flex-wrap gap-2 my-4 sm:m-8">
        <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
          D'autres outils que j'utilise :
        </h3>

        <div className="flex flex-wrap shadow-sm w-fit p-4">
          {tertiaire.map((stack) => (
            <SkillCard skill={stack} key={stack.name} />
          ))}
        </div>
      </article>
    </section>
  );
};
export default Stacks;
