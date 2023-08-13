import Posts from "@/components/blog/Posts";
import { revalidateTime } from "@/lib/constants";

export const revalidate = revalidateTime.blog;

export default function BlogPage() {
  return (
    <div className="mx-auto h-[calc(100vh-140px)]">
      <Posts />
    </div>
  );
}
