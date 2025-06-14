"use client";
import { useState, useEffect } from "react";
import { get } from "@/services/axios";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorDisplay from "@/components/ErrorDisplay";
import PaginationComponent from "@/components/paginationComponent";
import FilmCardComponent from "@/components/FilmCardComponent";

const fetchFilms = async (page: number) =>
  await get(`/films?page=${page}&limit=10`).then((response) => {
    if (response.status === 200) return response.data;
    throw new Error("Failed to fetch films");
  });

export default function FilmsPage() {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFilms(page);
        setFilms(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getFilms();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (films && films.next) setPage(page + 1);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error.message} />;
  if (!films) return <ErrorDisplay message={"No films found."} />;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Star Wars Films
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {films.result.map((film: any) => (
          <FilmCardComponent
            key={film.uid}
            title={film.properties.title}
            director={film.properties.director}
            producer={film.properties.producer}
            release_date={film.properties.release_date}
          />
        ))}
      </div>
      <PaginationComponent
        currentPage={page}
        hasNext={!!films.next}
        hasPrevious={!!films.previous}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
    </div>
  );
}
