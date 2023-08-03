import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "projects");

/**
 * @description Get sorted projects data
 * @version 1.0.0
 */
export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const project: Partial<Project> = {
      id,
      title: matterResult.data.title,
    };

    // Combine the data with the id
    return project;
  });

  return allPostsData;
}

/**
 * @description Get all projects data
 * @version 1.0.0
 */
export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const projectWithHTML: Partial<Project> & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    contentHtml,
  };

  // Combine the data with the id
  return projectWithHTML;
}
