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
 * @description
 * @version 1.0.0
 */
export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  //  Fetches the raw MDX file from GitHub
  const res = await fetch(
    `https://raw.githubusercontent.com/erischon/docs/master/posts/${fileName}`,
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
    date: string;
    tags: string[];
  }>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
  });

  // Converts the file name to the post ID
  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
}

/**
 * @description
 * @version 1.0.0
 */
export async function getPostsMeta(): Promise<PostMeta[] | undefined> {
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

  //
  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path.replace("posts/", ""))
    .filter((path) => path.endsWith(".mdx"));

  const posts: PostMeta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);

    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
