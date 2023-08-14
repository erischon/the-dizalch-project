import Link from "next/link";

import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: PostMeta;
};

/**
 * @description Displays a list item
 * @version 1.0.0
 */
const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-xl ">
      <Link className="hover:text-teal-400/90" href={`/blog/posts/${id}`}>
        {title}
      </Link>

      <br />

      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
};

export default ListItem;
