import { TbPointFilled, TbPoint } from "react-icons/tb";

interface PaginationProps {
  items: number; // Number of items
  pageSize: number; // Number of items per page
  currentPage: number; // Current page
  onPageChange: (page: number) => void; // Function to change page
}

/**
 * @description Pagination component
 * @version 1.0.0
 */
const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-4 my-10">
      {pages.map((page) => (
        <a
          key={page}
          onClick={() => onPageChange(page)}
          className={`text-2xl text-teal-500 border-b-4 border-gray-50 dark:border-gray-800 ${
            currentPage === page
              ? "cursor-default"
              : "cursor-pointer hover:border-teal-400 dark:hover:border-teal-400 transition"
          }`}
        >
          {currentPage === page ? <TbPointFilled /> : <TbPoint />}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
