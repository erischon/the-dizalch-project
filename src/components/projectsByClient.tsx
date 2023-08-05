import Link from "next/link";

import { getProjectsByClient } from "@/lib/projects";

interface ClientsProps {
  clients: string[];
}

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

const ProjectsByClient = async ({ clients }: ClientsProps) => {
  const projectsByClients = await getpProjectsByClients(clients);

  return (
    <div className="">
      {projectsByClients.map((obj: any) => (
        <div key={obj.clientName} className="my-4">
          <div className="text-xs text-gray-500">{obj.clientName}</div>

          <div className="flex gap-4 items-center">
            {obj.projects.map((project: any) => (
              <Link
                key={project.title}
                href={`/projects/${project.id}`}
                className="p-1 shadow-md"
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
