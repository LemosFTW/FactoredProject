export default function FilmCardComponent({
  title,
  director,
  producer,
  release_date,
}: {
  title: string;
  director: string;
  producer: string;
  release_date: string;
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>Director: {director}</p>
      <p>Producer: {producer}</p>
      <p>Release Date: {release_date}</p>
    </div>
  );
}
