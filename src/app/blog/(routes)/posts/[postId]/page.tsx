import Link from "next/link";

import "highlight.js/styles/atom-one-dark.css";

import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { revalidateTime } from "@/data/infos";

import { seoData } from "@/data/infos";

export const revalidate = revalidateTime.blog;

type Props = {
  params: {
    postId: string;
  };
};

/**
 * @description Generate static post pages
 * @version 1.0.0
 */
export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

/**
 * @description Generate metadata for the page
 * @version 1.0.0
 */
export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    authors: seoData.author,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `${process.env.SITE_URL}/blog/posts/${postId}`,
    },
    twitter: {
      creator: seoData.twitter,
      title: post.meta.title,
      description: post.meta.description,
    },
  };
}

/**
 * @description Displays a post
 * @version 1.0.0
 */
export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) return null;

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta?.tags?.map((tag: string, i: number) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <div className="my-10 mx-0 w-full">
      <h2 className="text-4xl sm:text-5xl font-bold mb-2">{meta.title}</h2>

      <p className="mt-0 sm:mt-6 text-sm sm:text-md">{pubDate}</p>

      <article className="w-full my-8 mx-auto prose sm:prose-xl prose-teal max-w-none dark:prose-invert">
        {content}
      </article>

      {/* <section className="my-8">
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section> */}

      <p className="mb-12">
        <Link href="/blog" className="sm:text-lg sm:font-semibold">
          ← Back to blog
        </Link>
      </p>
    </div>
  );
}
