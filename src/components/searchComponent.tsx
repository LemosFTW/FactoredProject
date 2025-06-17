import React from "react";
import { SearchComponentProps } from "@/types/types";

export default function SearchComponent({
  onSearch,
  query,
}: SearchComponentProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    onSearch(newQuery);
  };

  return (
    <div className="flex items-center p-0 rounded-lg shadow-none mb-10 relative w-full max-w-sm mx-auto sm:max-w-full sm:mx-0">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="flex-grow w-full p-2 pr-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        onClick={() => onSearch(query)}
        className="absolute right-2 px-2 py-2 bg-transparent text-yellow-400 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}
