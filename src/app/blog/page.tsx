import Posts from "@/components/blog/Posts";

export const revalidate = 0;

export default function BlogPage() {
  return (
    <div className="mx-auto h-[calc(100vh-140px)]">
      <Posts />
    </div>
  );
}
