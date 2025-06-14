"use client";
import React, { useState } from "react";
import SideMenuBar from "@/components/SideMenuBar";

interface SideBarWrapperProps {
  children: React.ReactNode;
}

const SideBarWrapper: React.FC<SideBarWrapperProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-white text-2xl hover:cursor-pointer transition-colors duration-300"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <SideMenuBar isOpen={isOpen} />
      <div
        className={`transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}
      >
        {children}
      </div>
    </>
  );
};

export default SideBarWrapper;
