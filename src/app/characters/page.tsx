"use client";
import { useState } from "react";
import { get } from "@/services/axios";
import CharacterCardComponent from "@/components/characterCardComponent";
import PaginationComponent from "@/components/paginationComponent";
import { useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorDisplay from "@/components/ErrorDisplay";
import SearchComponent from "@/components/searchComponent";
import ModalComponent from "@/components/ModalComponent";
import { CHARACTER_DETAIL_FIELDS } from "@/types/types";

const fetchCharacters = async (page: number, searchQuery: string = "") => {
  const queryParam = searchQuery ? `&name=${searchQuery}` : "";
  return await get(`/people?page=${page}${queryParam}&limit=10`).then(
    (response) => {
      if (response.status === 200) return response.data;
      throw new Error("Failed to fetch characters");
    }
  );
};

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      const getCharacters = async () => {
        try {
          setLoading(true);
          setError(null);
          const data = await fetchCharacters(page, searchQuery);
          console.log("Fetched characters:", data);
          setCharacters(data);
        } catch (err) {
          setError(err as Error);
        } finally {
          setLoading(false);
        }
      };

      getCharacters();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [page, searchQuery]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (characters && characters.next) setPage(page + 1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleCardClick = (character: any) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCharacter(null);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error.message} />;
  if (!characters) return <ErrorDisplay message={"No characters found."} />;

  return (
    <div className="container mx-auto px-4 py-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Star Wars Characters
      </h1>
      <SearchComponent onSearch={handleSearch} query={searchQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.results instanceof Array
          ? characters.results.map((character: any) => (
              <CharacterCardComponent
                key={character.name}
                name={character.name}
                url={character.url}
                onClickFunction={() => {
                  handleCardClick(character);
                }}
              />
            ))
          : characters.result?.map((character: any) => (
              <CharacterCardComponent
                key={character._id}
                name={character.properties.name}
                url={character.properties.url}
                onClickFunction={() => {
                  handleCardClick(character);
                }}
              />
            ))}
      </div>
      <PaginationComponent
        currentPage={page}
        hasNext={!!characters.next}
        hasPrevious={!!characters.previous}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />

      <ModalComponent
        isOpen={showModal}
        onClose={handleCloseModal}
        entity={selectedCharacter}
        fields={CHARACTER_DETAIL_FIELDS}
      />
    </div>
  );
}
