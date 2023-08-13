import { getPostsMeta } from "@/lib/posts";

import ListItem from "@/components/blog/ListItem";

/**
 * @description
 * @version 1.0.0
 */
const Posts = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="text-center">No posts found.</p>;
  }

  return (
    <section className="my-8 mx-auto">
      <h2 className="text-sm text-stone-500 dark:text-teal-300 uppercase tracking-widest">
        Récemment publié
      </h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
