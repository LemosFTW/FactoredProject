import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="text-center flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white-900 mr-3"></div>
      Loading...
    </div>
  );
};

export default LoadingSpinner;
