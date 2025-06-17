"use client";
import { useState, useEffect } from "react";
import { get } from "@/services/axios";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorDisplay from "@/components/ErrorDisplay";
import PaginationComponent from "@/components/paginationComponent";
import FilmCardComponent from "@/components/FilmCardComponent";
import SearchComponent from "@/components/searchComponent";
import { usePagination } from "@/hooks/usePage";

const fetchFilms = async (page: number, searchQuery: string = "") => {
  const queryParam = searchQuery ? `&title=${searchQuery}` : "";
  return await get(`/films?page=${page}${queryParam}`).then((response) => {
    if (response.status === 200) return response.data;
    throw new Error("Failed to fetch films");
  });
};

export default function FilmsPage() {
  const [films, setFilms] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { handlePreviousPage, handleNextPage, page, setPage } =
    usePagination(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      const getFilms = async () => {
        try {
          setLoading(true);
          setError(null);
          const data = await fetchFilms(page, searchQuery);
          console.log("Fetched characters:", data);

          setFilms(data);
        } catch (err) {
          setError(err as Error);
        } finally {
          setLoading(false);
        }
      };

      getFilms();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [page, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error.message} />;
  if (!films) return <ErrorDisplay message={"No films found."} />;

  return (
    <div className="container mx-auto px-4 py-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Star Wars Films
      </h1>
      <div className="w-full max-w-sm mx-auto sm:max-w-full sm:mx-0">
        <SearchComponent onSearch={handleSearch} query={searchQuery} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {films.result?.map((film: any) => (
          <FilmCardComponent
            key={film.uid}
            title={film.properties.title}
            director={film.properties.director}
            producer={film.properties.producer}
            release_date={film.properties.release_date}
            opening_crawl={film.properties.opening_crawl}
            episode_id={film.properties.episode_id}
          />
        ))}
      </div>
      <PaginationComponent
        currentPage={page}
        hasNext={!!films.next}
        hasPrevious={!!films.previous}
        onNext={() => handleNextPage(!!films.next)}
        onPrevious={handlePreviousPage}
      />
    </div>
  );
}
