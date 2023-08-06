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
        <div key={obj.clientName} className="my-4">
          <div className="text-xs text-gray-500 mb-1">
            Pour {obj.clientName}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {obj.projects.map((project: any) => (
              <Link
                key={project.title}
                href={`/projects/${project.id}`}
                className="p-2 shadow-sm flex items-center justify-center bg-teal-50 border"
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
