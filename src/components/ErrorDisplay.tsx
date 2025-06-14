import React from "react";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="text-center text-2xl text-red-500 flex items-center justify-center min-h-screen">
      Error: {message}
    </div>
  );
};

export default ErrorDisplay;
