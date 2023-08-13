import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";

import getFormattedDate from "@/lib/getDateFormatted";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { revalidateTime } from "@/lib/constants";

export const revalidate = revalidateTime.blog;

type Props = {
  params: {
    postId: string;
  };
};

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
  };
}

/**
 * @description Displays a post
 * @version 1.0.0
 */
export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta?.tags?.map((tag: string, i: number) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <div className="my-8">
      <h2 className="text-3xl mb-2">{meta.title}</h2>

      <p className="mt-0 text-sm">{pubDate}</p>

      <article className="my-8 prose dark:prose-invert">{content}</article>

      <section className="my-8">
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>

      <p className="mb-10">
        <Link href="/blog">← Back to blog</Link>
      </p>
    </div>
  );
}
