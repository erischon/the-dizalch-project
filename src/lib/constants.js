export const TAGLINE = "Votre ressource pour une application web sur mesure";

export const GITHUB_REPO_URL =
  "https://raw.githubusercontent.com/erischon/docs/master";
export const PROJECTS_FOLDER_NAME = "projects";
export const PROJECTS_IMAGES_FOLDER_NAME = "images";

export const projectsListPageSize = 6;

// SEO data for the blog
export const blogSeoData = {
  title: "The Dizalch Project",
  description: "A project for Freelance Developers",
  author: [{ name: "Eri Schön", url: "https://www.erischon.dev" }],
  url: "https://dizalch.com",
  image: "https://dizalch.com/images/og-image.png",
  twitter: "@erischon",
};

// Revalidate times
export const revalidateTime = {
  blog: 60 * 60 * 24, // 24 hours
  projects: 60 * 60 * 24, // 24 hours
};
