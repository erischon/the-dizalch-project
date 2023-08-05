import Link from "next/link";
import Image from "next/image";

import { BsGithub, BsLink45Deg } from "react-icons/bs";

import { getProjectsMeta, getProjectByName } from "@/lib/projects";
import {
  GITHUB_REPO_URL,
  PROJECTS_FOLDER_NAME,
  PROJECTS_IMAGES_FOLDER_NAME,
} from "@/lib/constants";

export const revalidate = 0;

type Props = {
  params: {
    projectId: string;
  };
};

// export async function generateStaticParams() {
//   const projects = await getProjectsMeta(); // deduped!

//   if (!projects) return [];

//   return projects.map((project) => ({
//     projectId: project.id,
//   }));
// }

/**
 * @description Generates the metadata for the page
 * @version 1.0.0
 */
export async function generateMetadata({ params: { projectId } }: Props) {
  const project = await getProjectByName(`${projectId}.mdx`); // deduped!

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.meta.title,
  };
}

export default async function Project({ params: { projectId } }: Props) {
  const project = await getProjectByName(`${projectId}.mdx`); // deduped!

  console.log(project);
  if (!project) return null;

  const { meta, content } = project;

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`} className="py-2 px-4 bg-teal-200">
      <div className="text-semibold">{tag}</div>
    </Link>
  ));

  return (
    <>
      <section className="flex flex-col-reverse border border-gray-200 shadow-md p-4 w-full sm:grid sm:grid-cols-12">
        <div className="mt-4 sm:col-span-5 flex flex-col justify-between">
          <div className="">
            <p className="text-xl font-bold mb-2 text-gray-500">{meta.title}</p>
            {meta.type ? (
              <p className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500">Type</span>
                <span className="text-md font-medium">{meta.type}</span>
              </p>
            ) : null}
            {meta.role ? (
              <p className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500">Rôle</span>
                <span className="text-md font-medium">{meta.role}</span>
              </p>
            ) : null}
            {meta.lastUpdated ? (
              <p className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500">
                  Dernière mise à jour
                </span>
                <span className="text-md font-medium">{meta.lastUpdated}</span>
              </p>
            ) : null}
          </div>

          <div className="flex gap-4">
            <Link
              href={meta.liveUrl}
              target="_blank"
              className="border-2 border-teal-500 rounded-md w-14 h-14 flex justify-center items-center hover:bg-teal-500 hover:text-white"
            >
              <BsLink45Deg className="text-3xl" />
            </Link>
            <Link
              href={meta.codeUrl}
              target="_blank"
              className="border-2 border-teal-500 rounded-md w-14 h-14 flex justify-center items-center hover:bg-teal-500 hover:text-white"
            >
              <BsGithub className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[200px] sm:col-span-7">
          <Image
            src={`${GITHUB_REPO_URL}/${PROJECTS_FOLDER_NAME}/${PROJECTS_IMAGES_FOLDER_NAME}/${meta.image}.webp`}
            alt={meta.title}
            fill
            className="object-cover w-full h-full object-top shadow-sm"
          />
        </div>
      </section>

      <div className="flex border-l-4 border-teal-200 pl-4 mt-6">
        <p>{meta.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-1">{tags}</div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-500">L'étude de cas</h2>

        <article className="w-full my-8 mx-auto prose sm:prose-lg prose-pre:m-4 prose-pre:p-4 prose-p:m-0 prose-teal">
          {content}
        </article>
      </div>

      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
}