import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center space-x-4">
        <div className="loading-spinner rounded-full h-8 w-8 border-4 border-yellow-400 border-t-transparent"></div>
        <div className="typing-effect text-yellow-400 text-2xl font-bold">
          Loading...
        </div>
      </div>
    </div>
  );
}
