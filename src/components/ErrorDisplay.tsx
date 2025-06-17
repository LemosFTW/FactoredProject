import React from "react";
import { ErrorDisplayProps } from "@/types/types";

export default function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="text-center text-2xl text-red-500 flex items-center justify-center min-h-screen">
      Error: {message}
    </div>
  );
}
