import { stacks } from "@/lib/skills";

/**
 * @description Stacks components, used in AboutPage
 * @version 1.0.0
 */
const Stacks = () => {
  return (
    <section className="my-8">
      <h2 className="font-semibold text-2xl my-4">Stacks</h2>

      <article className="flex flex-wrap gap-2">
        {stacks.map((stack) => (
          <div key={stack.name} className="text-teal-600 text-4xl p-2">
            <stack.icon />
          </div>
        ))}
      </article>
    </section>
  );
};
export default Stacks;
