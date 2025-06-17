"use client";
import { useState, Suspense } from "react";
import { get } from "@/services/axios";
import CharacterCardComponent from "@/components/characterCardComponent";
import PaginationComponent from "@/components/paginationComponent";
import { useEffect } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import React from "react";
import { usePagination } from "@/hooks/usePage";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { useModal } from "@/hooks/useModal";
import { CHARACTER_DETAIL_FIELDS } from "@/types/types";
import { lazy } from "react";

const fetchCharacters = async (page: number, searchQuery: string = "") => {
  const queryParam = searchQuery ? `&name=${searchQuery}` : "";
  return await get(`/people?page=${page}${queryParam}&limit=10`).then(
    (response) => {
      if (response.status === 200) return response.data;
      throw new Error("Failed to fetch characters");
    }
  );
};

const ModalComponent = lazy(() => import("@/components/modalComponent"));
const SearchComponent = lazy(() => import("@/components/searchComponent"));
const ErrorDisplay = lazy(() => import("@/components/errorDisplay"));

export default function CharactersPage() {
  const { page, setPage, handlePreviousPage, handleNextPage } =
    usePagination(1);
  const { searchQuery, handleSearch } = useSearchQuery("", () => setPage(1));
  const [characters, setCharacters] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const {
    isOpen: showModal,
    selected: selectedCharacter,
    openModal,
    closeModal,
  } = useModal<any>();

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

  const handleCardClick = openModal;

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorDisplay message={error.message} />
      </Suspense>
    );
  if (!characters)
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorDisplay message={"No characters found."} />
      </Suspense>
    );

  return (
    <div className="container mx-auto px-4 py-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Star Wars Characters
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <SearchComponent onSearch={handleSearch} query={searchQuery} />
      </Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 card-appear">
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
                  handleCardClick(character.properties);
                }}
              />
            ))}
      </div>
      <PaginationComponent
        currentPage={page}
        hasNext={!!characters.next}
        hasPrevious={!!characters.previous}
        onNext={() => handleNextPage(!!characters.next)}
        onPrevious={handlePreviousPage}
      />

      <Suspense fallback={<LoadingSpinner />}>
        <ModalComponent
          isOpen={showModal}
          onClose={closeModal}
          entity={selectedCharacter}
          fields={CHARACTER_DETAIL_FIELDS}
        />
      </Suspense>
    </div>
  );
}
