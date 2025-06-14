"use client";
import { useState } from "react";
import { get } from "@/services/axios";
import CharacterCardComponent from "@/components/characterCardComponent";
import PaginationComponent from "@/components/paginationComponent";
import { useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorDisplay from "@/components/ErrorDisplay";

const fetchCharacters = async (page: number) =>
  await get(`/people?page=${page}&limit=10`).then((response) => {
    if (response.status === 200) return response.data;
    throw new Error("Failed to fetch characters");
  });

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCharacters(page);
        setCharacters(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (characters && characters.next) setPage(page + 1);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error.message} />;
  if (!characters) return <ErrorDisplay message={"No characters found"} />;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Star Wars Characters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.results.map((character: any) => (
          <CharacterCardComponent
            key={character.name}
            name={character.name}
            url={character.url}
            onClickFunction={() => {
              console.log(`Clicked on ${character.name} + ${character.url}`);
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
    </div>
  );
}
