import React from "react";
import { ErrorDisplayProps } from "@/types/types";

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="text-center text-2xl text-red-500 flex items-center justify-center min-h-screen">
      Error: {message}
    </div>
  );
};

export default ErrorDisplay;
