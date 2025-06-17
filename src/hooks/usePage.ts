import { useState } from "react";

export function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage);

  const handlePreviousPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = (hasNext: boolean) => {
    if (hasNext) setPage((prev) => prev + 1);
  };

  return { page, setPage, handlePreviousPage, handleNextPage };
}
