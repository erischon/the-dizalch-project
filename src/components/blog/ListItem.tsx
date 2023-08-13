import Link from "next/link";
import getFormattedDate from "@/lib/getDateFormatted";

type Props = {
  post: PostMeta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-xl ">
      <Link className="hover:text-stone-500/90" href={`/blog/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
