import { TbPointFilled, TbPoint } from "react-icons/tb";

interface PaginationProps {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
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
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <div className="flex justify-center items-center gap-4 my-10">
      {pages.map((page) => (
        <a
          key={page}
          onClick={() => onPageChange(page)}
          className="text-3xl text-teal-500 cursor-pointer"
        >
          {currentPage === page ? <TbPointFilled /> : <TbPoint />}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
