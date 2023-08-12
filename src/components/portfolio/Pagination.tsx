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
    <div>
      <ul className="flex gap-4">
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "" : ""}>
            <a className="" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
