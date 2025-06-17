"use client";
import React, { useState, useRef, useEffect } from "react";
import SideMenuBar from "@/components/sideMenuBar";
import { SideBarWrapperProps } from "@/types/types";

export default function SideBarWrapper({ children }: SideBarWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    )
      setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-51 py-1 text-white text-2xl hover:cursor-pointer transition-colors duration-300"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <div ref={sidebarRef} className="inline">
        <SideMenuBar isOpen={isOpen} />
      </div>
      <div className={`transition-all duration-300`}>{children}</div>
    </div>
  );
}
