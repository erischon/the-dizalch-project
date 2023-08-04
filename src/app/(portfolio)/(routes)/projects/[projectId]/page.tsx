import { getSortedProjectsData, getProjectData } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const projects = getSortedProjectsData();

  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { projectId: string };
}) {
  const projects = getSortedProjectsData();
  const { projectId } = params;

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
  };
}

/**
 * @description Displays a project
 * @version 1.0.0
 */
export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const projects = getSortedProjectsData();
  const { projectId } = params;

  if (!projects.find((project) => project.id === projectId)) notFound();

  const { title, contentHtml } = await getProjectData(projectId);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0"></p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
