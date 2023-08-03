import { getSortedProjectsData } from "@/lib/projects";
import ProjectCard from "@/components/projectCard";

/**
 * @description Displays a list of projects
 * @version 1.0.0
 */
export default function Projects() {
  const projects = getSortedProjectsData();

  console.log(projects);

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Projects</h2>

      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
