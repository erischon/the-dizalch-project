import Link from "next/link";

import {
  GITHUB_REPO_URL,
  PROJECTS_FOLDER_NAME,
  PROJECTS_IMAGES_FOLDER_NAME,
} from "@/data/constants";

type Props = {
  project: ProjectMeta;
};

/**
 * @description Displays a project as a card
 * @version 1.0.0
 */
export default function ProjectCard({ project }: Props) {
  const { id, title, image } = project;

  return (
    <>
      <Link href={`/projects/${id}`} className="">
        <article className="flex justify-center items-center w-full h-[175px] cursor-pointer shadow-md group overflow-hidden relative">
          <div
            className="relative w-full h-full bg-cover bg-center transition-transform duration-200 group-hover:scale-105"
            style={{
              backgroundImage: `url(${GITHUB_REPO_URL}/${PROJECTS_FOLDER_NAME}/${PROJECTS_IMAGES_FOLDER_NAME}/${image}.webp)`,
            }}
          ></div>

          <h2 className="absolute top-0 left-0 w-[max-content] py-2 px-8 text-md md:text-lg bg-teal-400/95 shadow-md font-semibold text-gray-900">
            {title}
          </h2>
        </article>
      </Link>
    </>
  );
}
