import { getProjectsMeta } from "@/lib/projects";

import Projects from "@/components/portfolio/Projects";

/**
 * @description Projects page component, renders the projects
 * @version 1.0.0
 */
const ProjectsPage = async () => {
  const projects = await getProjectsMeta();

  if (!projects) {
    return <p className="text-center">No projects found.</p>;
  }

  return (
    <div className="">
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsPage;
