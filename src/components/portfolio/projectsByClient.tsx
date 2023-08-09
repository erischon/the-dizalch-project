import Link from "next/link";

import { getProjectsByClient } from "@/lib/projects";

interface ClientsProps {
  clients: string[];
}

/**
 * @description Get a list of projects by client
 * @version 1.0.0
 */
const getpProjectsByClients = async (clients: any) => {
  const projectsByClients: any = [];

  for (const client of clients) {
    const projects = await getProjectsByClient(client);

    if (projects) {
      projectsByClients.push({
        clientName: client,
        projects: projects,
      });
    }
  }

  return projectsByClients;
};

/**
 * @description Displays a list of projects by client
 * @version 1.0.0
 */
const ProjectsByClient = async ({ clients }: ClientsProps) => {
  const projectsByClients = await getpProjectsByClients(clients);

  return (
    <div className="">
      {projectsByClients.map((obj: any) => (
        <div key={obj.clientName} className="">
          <div className="flex flex-wrap gap-1 items-center">
            {obj.projects.map((project: any) => (
              <Link
                key={project.title}
                href={`/projects/${project.id}`}
                className="py-2 px-3 shadow-sm flex items-center justify-center bg-teal-500 text-white rounded-md"
              >
                <div>{project.title}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectsByClient;
