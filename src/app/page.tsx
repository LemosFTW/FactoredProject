"use client";

function scrollToExploreSection() {
  const exploreSection = document.getElementById("explore-section");
  if (exploreSection) exploreSection.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <>
      <div className="galaxy-background">
        <div className="stars"></div>
      </div>

      <div
        className="flex flex-col items-center justify-center h-screen cursor-pointer text-center"
        onClick={scrollToExploreSection}
      >
        <h1 className="text-6xl italic font-extrabold">Star Wars</h1>
        <p className="text-2xl font-semibold ">
          Wellcome young padawan, lets explore the Star Wars Universe
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-center h-screen"
        id="explore-section"
      >
        <h2 className="text-4xl font-bold mb-4">Explore the Galaxy</h2>
        <p className="text-lg mb-8 ">Discover characters, films, and more!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="px-6 py-3 bg-red-800 text-white  rounded-lg hover:bg-red-900 transition duration-300">
            <a href="/characters">Explore Characters</a>
          </button>
          <button className="px-6 py-3 text-white bg-purple-800  rounded-lg hover:bg-purple-900 transition duration-300">
            <a href="/planets">Explore Films</a>
          </button>
        </div>
      </div>
    </>
  );
}
