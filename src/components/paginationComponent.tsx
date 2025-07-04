import { PaginationProps } from "@/types/types";

export default function PaginationComponent({
  currentPage,
  hasNext,
  hasPrevious,
  onNext,
  onPrevious,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous page"
        className={`bg-yellow-500 hover:bg-yellow-600 ${
          hasPrevious ? "hover:cursor-pointer" : "hover:cursor-auto"
        } disabled:bg-gray-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300
        `}
      >
        Previous
      </button>
      <span className="text-yellow-400 font-bold">Page {currentPage}</span>
      <button
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next page"
        className={`bg-yellow-500 hover:bg-yellow-600 ${
          hasNext ? "hover:cursor-pointer" : "hover:cursor-auto"
        } disabled:bg-gray-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300
        `}
      >
        Next
      </button>
    </div>
  );
}
