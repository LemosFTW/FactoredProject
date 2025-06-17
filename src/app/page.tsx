"use client";

function scrollToExploreSection() {
  const exploreSection = document.getElementById("explore-section");
  if (exploreSection) exploreSection.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen cursor-pointer text-center"
        onClick={scrollToExploreSection}
      >
        <img
          src="/star-wars-4.svg"
          alt="Star Wars Logo Classic"
          className="w-[40vw] h-auto mx-auto py-4 fade-in-grow-animation"
        />

        <p className="text-2xl font-semibold">
          <span className="block sm:inline">Welcome young Padawan, </span>
          <span className="block sm:inline">
            let's explore the Star Wars Universe.
          </span>
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-center h-screen"
        id="explore-section"
      >
        <h2 className="text-4xl font-bold mb-4">Explore the Galaxy</h2>
        <p className="text-lg mb-8 ">Discover characters, films, and more!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            aria-label="Explore characters"
            className="px-6 py-3 shadow-md bg-background text-white rounded-4xl hover:bg-yellow-600  hover:cursor-pointer transition duration-300"
          >
            <a href="/characters">Explore Characters</a>
          </button>
          <button
            aria-label="Explore films"
            className="px-6 py-3 shadow-md text-white bg-background rounded-4xl hover:bg-yellow-600  hover:cursor-pointer transition duration-300"
          >
            <a href="/films">Explore Films</a>
          </button>
        </div>
      </div>
    </>
  );
}
