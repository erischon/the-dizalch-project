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
        <div key={obj.clientName}>
          {obj.clientName} {obj.projects.map((project: any) => project.title)}
        </div>
      ))}
    </div>
  );
};
export default ProjectsByClient;
