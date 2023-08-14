import Link from "next/link";
import Image from "next/image";
import "highlight.js/styles/github-dark.css";

import { BsGithub, BsLink45Deg } from "react-icons/bs";

import { getProjectsMeta, getProjectByName } from "@/lib/projects";
import {
  GITHUB_REPO_URL,
  PROJECTS_FOLDER_NAME,
  PROJECTS_IMAGES_FOLDER_NAME,
} from "@/data/constants";
import { revalidateTime } from "@/data/infos";
import SectionTitle from "@/components/portfolio/SectionTitle";
import getFormattedDate from "@/lib/getFormattedDate";

export const revalidate = revalidateTime.projects;

type Props = {
  params: {
    projectId: string;
  };
};

/**
 * @description
 * @version 1.0.0
 */
export async function generateStaticParams() {
  const projects = await getProjectsMeta(); // deduped!

  if (!projects) return [];

  return projects.map((project) => ({
    projectId: project.id,
  }));
}

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
    description: project.meta.description,
    openGraph: {
      title: project.meta.title,
      description: project.meta.description,
      images: `${GITHUB_REPO_URL}/${PROJECTS_FOLDER_NAME}/${PROJECTS_IMAGES_FOLDER_NAME}/${project.meta.image}.webp`,
      url: `${process.env.SITE_URL}/projects/${projectId}`,
    },
  };
}

/**
 * @description Generates dynamically the page for a project
 * @version 1.0.0
 */
export default async function Project({ params: { projectId } }: Props) {
  const project = await getProjectByName(`${projectId}.mdx`); // deduped!

  if (!project) return null;

  const { meta, content } = project;

  const tags = meta.tags.map((tag, i) => (
    <Link
      key={i}
      href={`/tags/${tag}`}
      className="py-1 px-2 bg-teal-300 dark:text-gray-900 font-semibold"
    >
      <div className="text-semibold capitalize">{tag}</div>
    </Link>
  ));

  return (
    <>
      <section className="flex flex-col-reverse w-full sm:grid sm:grid-cols-12 my-10">
        <div className="sm:col-span-5 flex flex-col justify-between">
          <div className="mb-4">
            <SectionTitle title={meta.title} />

            {meta.type ? (
              <p className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 dark:text-gray-300">
                  Type
                </span>
                <span className="text-md font-medium">{meta.type}</span>
              </p>
            ) : null}

            {meta.role ? (
              <p className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 dark:text-gray-300">
                  Rôle
                </span>
                <span className="text-md font-medium">{meta.role}</span>
              </p>
            ) : null}

            {meta.lastUpdated ? (
              <p className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 dark:text-gray-300">
                  Dernière mise à jour
                </span>
                <span className="text-md font-medium">
                  {getFormattedDate(meta.lastUpdated)}
                </span>
              </p>
            ) : null}
          </div>

          <div className="flex gap-4">
            {!meta.liveUrl ? null : (
              <Link
                href={meta.liveUrl}
                target="_blank"
                className="border-2 border-teal-500 rounded-md w-14 h-14 flex justify-center items-center hover:bg-teal-500 hover:text-white"
              >
                <BsLink45Deg className="text-3xl" />
              </Link>
            )}

            {!meta.codeUrl ? null : (
              <Link
                href={meta.codeUrl}
                target="_blank"
                className="border-2 border-teal-500 rounded-md w-14 h-14 flex justify-center items-center hover:bg-teal-500 hover:text-white"
              >
                <BsGithub className="text-2xl" />
              </Link>
            )}
          </div>
        </div>

        <div className="relative w-full h-[250px] sm:col-span-7">
          <Image
            src={`${GITHUB_REPO_URL}/${PROJECTS_FOLDER_NAME}/${PROJECTS_IMAGES_FOLDER_NAME}/${meta.image}.webp`}
            alt={meta.title}
            fill
            className="object-cover w-full h-full object-top shadow-sm"
          />
        </div>
      </section>

      <div className="flex border-l-8 border-teal-200 pl-4 my-10">
        <p>{meta.description}</p>
      </div>

      <div className="my-10">
        <div className="flex flex-wrap gap-1">{tags}</div>
      </div>

      <section className="my-10 border border-gray-300 dark:border-gray-600 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-300">
          L'étude de cas
        </h2>

        <article className="w-full my-8 mx-auto prose sm:prose-md prose-pre:m-4 prose-pre:p-4 prose-p:m-0 prose-teal max-w-none dark:prose-invert">
          {content}
        </article>
      </section>

      <p className="my-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
}
