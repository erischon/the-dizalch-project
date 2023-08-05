import { getProjectsMeta } from "@/lib/projects";

import ProjectCard from "@/components/projectCard";

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
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-1">Projects</h2>
        <p className="text-gray-500 text-sm sm:text-md">
          La liste des différents projets
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
