import Posts from "@/components/blog/Posts";
import { revalidateTime } from "@/data/infos";

export const revalidate = revalidateTime.blog;

/**
 * @description Blog Page
 * @version 1.0.0
 */
export default function BlogPage() {
  return (
    <div className="mx-auto h-[calc(100vh-140px)]">
      <Posts />
    </div>
  );
}
