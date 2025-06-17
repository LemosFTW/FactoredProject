import { useEffect, useState } from "react";
import { get } from "@/services/axios";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorDisplay from "@/components/ErrorDisplay";
import { ModalProps } from "@/types/types";
const getApiPath = (url: string) => {
  if (url.startsWith("http")) {
    let path = new URL(url).pathname;
    if (path.startsWith("/api/")) path = path.replace("/api", "");
    return path;
  }
  return url;
};

export default function ModalComponent({
  isOpen,
  onClose,
  entity,
  fields,
}: ModalProps) {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!entity || !isOpen) return;

    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      setDetails(null);
      try {
        const path = getApiPath(entity.url);
        const response = await get(path);
        const props = response?.data?.result?.properties;
        if (props && typeof props === "object") {
          setDetails(props);
        } else {
          setError(
            "Invalid data format received from API. Expected an object."
          );
        }
      } catch (err: any) {
        setError(err.message || "Error fetching entity details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [entity, isOpen]);

  if (!isOpen) return null;

  if (loading) return <LoadingSpinner />;

  if (error || !details) {
    return (
      <ErrorDisplay message={error || "Impossible to fetch entity details."} />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full border border-yellow-400 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-yellow-400 hover:cursor-pointer hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          {details.name}
        </h2>
        <div className="text-white max-h-96 overflow-y-auto">
          {fields.map(
            (key) =>
              details[key] && (
                <p key={key} className="mb-1">
                  <span className="font-semibold capitalize">
                    {key.replace(/_/g, " ")}:
                  </span>{" "}
                  {details[key]} {key == "height" && "cm"}{" "}
                  {key == "mass" && "kg"}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
}
