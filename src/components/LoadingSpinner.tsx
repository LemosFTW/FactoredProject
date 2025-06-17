import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
      <div className="flex items-center space-x-4">
        <div className="loading-spinner rounded-full h-8 w-8 border-4 border-yellow-400 border-t-transparent"></div>
        <div className="typing-effect text-yellow-400 text-2xl font-bold">
          Loading...
        </div>
      </div>
    </div>
  );
}
