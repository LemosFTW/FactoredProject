export default function FilmCardComponent({
  title,
  director,
  producer,
  release_date,
  opening_crawl,
  episode_id,
}: {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;
  episode_id: string | number;
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white border border-gray-700 hover:border-yellow-400 hover:scale-105 transition-all duration-200">
      <h2 className="text-xl font-semibold mb-2 text-yellow-400">{title}</h2>
      <div className="grid grid-cols-1 gap-1 text-sm mb-2">
        <div>
          <span className="font-semibold text-gray-300">Director:</span>{" "}
          {director}
        </div>
        <div>
          <span className="font-semibold text-gray-300">Producer:</span>{" "}
          {producer}
        </div>
        <div>
          <span className="font-semibold text-gray-300">Release Date:</span>{" "}
          {release_date}
        </div>
        <div>
          <span className="font-semibold text-gray-300">Episode:</span>{" "}
          <span className="text-yellow-400 font-bold">{episode_id}</span>
        </div>
      </div>
      {opening_crawl && (
        <p className="mb-2">
          <span className="font-semibold">Opening Crawl:</span>
          <span className="text-sm text-gray-300 whitespace-pre-line text-justify block">
            {opening_crawl}
          </span>
        </p>
      )}
    </div>
  );
}
