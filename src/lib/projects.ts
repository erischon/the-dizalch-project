import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

/**
 * @description Project metadata
 * @version 1.0.0
 */
export async function getProjectByName(
  fileName: string
): Promise<Project | undefined> {
  //  Fetches the raw MDX file from GitHub
  const res = await fetch(
    `https://raw.githubusercontent.com/erischon/docs/master/projects/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  // Converts the raw MDX to a string
  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  // Compiles the MDX to JSX
  const { frontmatter, content } = await compileMDX<{
    title: string;
    creationDate: string;
    lastUpdated: string;
    description: string;
    type: string;
    liveUrl: string;
    codeUrl: string;
    caseStudyUrl: string;
    client: string;
    role: string;
    featured: boolean;
    image: string;
    tags: string[];
  }>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  // Converts the file name to the project ID
  const id = fileName.replace(/\.mdx$/, "");

  const ProjectObj: Project = {
    meta: {
      id,
      title: frontmatter.title,
      creationDate: frontmatter.creationDate,
      tags: frontmatter.tags,
      lastUpdated: frontmatter.lastUpdated,
      description: frontmatter.description,
      type: frontmatter.type,
      liveUrl: frontmatter.liveUrl,
      codeUrl: frontmatter.codeUrl,
      caseStudyUrl: frontmatter.caseStudyUrl,
      client: frontmatter.client,
      role: frontmatter.role,
      featured: frontmatter.featured,
      image: frontmatter.image,
    },
    content,
  };

  return ProjectObj;
}

/**
 * @description Fetches all projects from the GitHub repo and returns an array of project metadata
 * @version 1.0.0
 */
export async function getProjectsMeta(): Promise<ProjectMeta[] | undefined> {
  // Fetches the file tree from GitHub
  const res = await fetch(
    "https://api.github.com/repos/erischon/docs/git/trees/master?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  // Converts the file tree to a JSON object
  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path.replace("projects/", ""))
    .filter((path) => path.endsWith(".mdx"));

  const projects: ProjectMeta[] = [];

  for (const file of filesArray) {
    const project = await getProjectByName(file);

    if (project) {
      const { meta } = project;
      projects.push(meta);
    }
  }

  return projects.sort((a, b) => (a.lastUpdated < b.lastUpdated ? 1 : -1));
  // return projects;
}

/**
 * @description Fetches projects by client from the GitHub repo and returns an array of project metadata
 * @version 1.0.0
 */
export async function getProjectsByClient(
  client: string
): Promise<Project | undefined> {
  // get the projects list
  const projects = await getProjectsMeta();

  if (!projects) return undefined;

  // filter project by client
  const filteredProjects: any = projects.filter((project) => {
    return project.client === client;
  });

  // return the projects
  return filteredProjects;
}
