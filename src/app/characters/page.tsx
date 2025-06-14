"use client";
import { use } from "react";
import { get } from "@/services/axios";
import CharacterCardComponent from "@/components/characterCardComponent";

const charactersPromise = get("/people").then((response) => {
  if (response.status === 200) return response.data;
  throw new Error("Failed to fetch characters");
});

export default function CharactersPage() {
  const characters = use(charactersPromise);

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
    </div>
  );
}
