interface PaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

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
        className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        Previous
      </button>
      <span className="text-yellow-400 font-bold">Page {currentPage}</span>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        Next
      </button>
    </div>
  );
}
