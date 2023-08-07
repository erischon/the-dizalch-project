import { getProjectsMeta } from "@/lib/projects";

import ProjectCard from "@/components/portfolio/projectCard";
import SectionTitle from "./sectionTitle";

/**
 * @description Displays a list of projects
 * @version 1.0.0
 */
export default async function Projects() {
  const projects = await getProjectsMeta();

  if (!projects) {
    return <p className="text-center">No projects found.</p>;
  }

  return (
    <section className="my-8 mx-auto">
      <SectionTitle title="Projets" />

      <div className="grid sm:grid-cols-2 gap-3 my-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
