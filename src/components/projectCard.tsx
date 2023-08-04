import Link from "next/link";

import {
  GITHUB_REPO_URL,
  PROJECTS_FOLDER_NAME,
  PROJECTS_IMAGES_FOLDER_NAME,
} from "../lib/constants";

type Props = {
  project: ProjectMeta;
};

/**
 * @description Displays a project
 * @version 1.0.0
 */
export default function ProjectCard({ project }: Props) {
  const { id, title, image } = project;

  return (
    <>
      <Link href={`/projects/${id}`}>
        <article className="flex justify-center items-center w-full h-[175px] cursor-pointer shadow-md">
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${GITHUB_REPO_URL}/${PROJECTS_FOLDER_NAME}/${PROJECTS_IMAGES_FOLDER_NAME}/${image}.webp)`,
            }}
          >
            <h2 className="absolute bottom-0 right-0 w-[max-content] py-2 px-8 text-md text-right color-black opacity-90 bg-teal-400 font-semibold">
              {title}
            </h2>
          </div>
        </article>
      </Link>
    </>
  );
}
