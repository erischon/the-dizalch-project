import { getProjectsMeta } from "@/lib/projects";
import ProjectCard from "@/components/projectCard";

/**
 * @description Displays a list of projects
 * @version 1.0.0
 */
export default async function Projects() {
  const projects = await getProjectsMeta();

  if (!projects) {
    return <p className="text-center">No posts found.</p>;
  }

  return (
    <section className="mt-6 mx-auto">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <p className="">La liste des projets</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
