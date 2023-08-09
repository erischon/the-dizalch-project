import { getProjectsMeta } from "@/lib/projects";
import Projects from "@/components/portfolio/projects";
import Link from "next/link";

export const revalidate = 0;

type Props = {
  params: {
    tag: string;
  };
};

/**
 * @description Generates the metadata for the page
 * @version 1.0.0
 */
export async function generateStaticParams() {
  const projects = await getProjectsMeta(); // deduped!

  if (!projects) return [];

  const tags = new Set(projects.map((project) => project.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

/**
 * @description
 * @version 1.0.0
 */
export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Les projets avec le tag ${tag}`,
  };
}

export default async function TagProjectList({ params: { tag } }: Props) {
  const projects = await getProjectsMeta(); //deduped!

  if (!projects)
    return <p className="mt-10 text-center">Sorry, no projects available.</p>;

  const tagProjects = projects.filter((project) => project.tags.includes(tag));

  if (!tagProjects.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no projects for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagProjects.map((project) => (
            <Projects key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </>
  );
}
