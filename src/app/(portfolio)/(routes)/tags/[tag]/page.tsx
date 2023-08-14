import Link from "next/link";

import { getProjectsMeta } from "@/lib/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionTitle from "@/components/portfolio/SectionTitle";
import { revalidateTime } from "@/data/infos";

export const revalidate = revalidateTime.projects;

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
 * @description Generates the metadata for the page
 * @version 1.0.0
 */
export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Les projets avec ${tag}`,
    description: `Tous les projets où j'ai utilisé ${tag}`,
  };
}

/**
 * @description List the projects with the tag X
 * @version 1.0.0
 */
export default async function TagProjectList({ params: { tag } }: Props) {
  const projects = await getProjectsMeta(); //deduped!

  if (!projects)
    return <p className="mt-10 text-center">Sorry, no projects available.</p>;

  const tagProjects = projects.filter((project) => project.tags.includes(tag));

  if (!tagProjects.length) {
    return (
      <section className="mx-auto flex flex-col min-h-[calc(100vh-140px)] justify-center items-center">
        <p className="text-xl font-semibold mb-4">{`Sorry, no projects for ${tag}.`}</p>
        <Link href="/" className="underline">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="my-8 mx-auto flex flex-col min-h-[calc(100vh-200px)]">
      <SectionTitle title={`Avec ${tag}`} />

      <div className="grid sm:grid-cols-2 gap-3 my-8">
        {tagProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
