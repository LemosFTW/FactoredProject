export default function CharacterCardComponent({
  name,
  url,
  onClickFunction,
}: {
  name: string;
  url: string;
  onClickFunction: () => void;
}) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-bold mb-2 text-yellow-300">{name}</h2>
      <button
        className="bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer text-black font-bold py-2 px-4 rounded mt-4 transition-colors duration-300 block w-full"
        onClick={onClickFunction}
      >
        view more
      </button>
    </div>
  );
}
