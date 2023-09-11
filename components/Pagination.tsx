import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="w-full h-full flex flex-col items-center mt-9">
      <ul className="pagination flex items-center space-x-4 mt-2 mb-6">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`pagination-item ${
              currentPage === pageNumber ? "active" : ""
            } bg-white shadow-md rounded-sm w-8 h-8 flex items-center justify-center cursor-pointer text-black hover:text-white`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
