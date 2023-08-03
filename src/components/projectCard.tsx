import Link from "next/link";

type Props = {
  project: Partial<Project>;
};

/**
 * @description Displays a project
 * @version 1.0.0
 */
export default function ProjectCard({ project }: Props) {
  const { id, title, image } = project;

  return (
    <>
      <Link href={`/posts/${id}`}>
        <article className="flex justify-center items-center w-full h-[175px] cursor-pointer shadow-md">
          <div
            className="relative w-full h-full rounded-md bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/projects/${image}.webp)`,
            }}
          >
            <h2 className="absolute bottom-0 right-0 w-[60%] pr-1 text-sm text-right color-black opacity-90 bg-orange-400">
              {title}
            </h2>
          </div>
        </article>
      </Link>
    </>
  );
}
