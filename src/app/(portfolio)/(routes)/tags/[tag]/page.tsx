import { getProjectsMeta } from "@/lib/projects";
import ProjectCard from "@/components/portfolio/projectCard";
import Link from "next/link";
import SectionTitle from "@/components/portfolio/sectionTitle";

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
    <section className="my-8 mx-auto">
      <SectionTitle title={`Avec ${tag}`} />

      <div className="grid sm:grid-cols-2 gap-3 my-8">
        {tagProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
