import Link from "next/link";
import React from "react";

interface SideMenuBarProps {
  isOpen: boolean;
}

const SideMenuBar: React.FC<SideMenuBarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 w-64 bg-gray-900 text-white p-4 shadow-lg flex flex-col justify-center transition-all duration-300 ${
        isOpen ? "left-0" : "-left-64"
      }`}
    >
      <Link className="text-2xl font-bold mb-6 text-yellow-400" href="/">
        Star Wars App
      </Link>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              href="/characters"
              className="block hover:text-yellow-400 transition-colors duration-200"
            >
              Characters
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/films"
              className="block hover:text-yellow-400 transition-colors duration-200"
            >
              Films
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenuBar;
