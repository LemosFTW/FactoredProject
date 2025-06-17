import { useState } from "react";

export function useSearchQuery(initialValue = "", onSearch?: () => void) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (onSearch) onSearch(); // Executa o callback, se fornecido
  };

  return { searchQuery, setSearchQuery, handleSearch };
}
