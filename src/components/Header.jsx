import React from "react";

const Header = () => {
  return (
    <header className="text-white bg-transparent px-4 py-4">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-white text-blue-300 px-4 py-2 rounded-b-xl">
          <span className="text-blue-900">compare</span>offers
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 items-center text-sm sm:text-base">
          <li className="hover:bg-blue-600 rounded px-3 py-1">
            <select className="bg-transparent">
              <option>Loans</option>
            </select>
          </li>
          <li className="hover:bg-blue-600 rounded px-3 py-1 cursor-pointer">
            Credit Cards
          </li>
          <li className="hover:bg-blue-600 rounded px-3 py-1 cursor-pointer">
            Savings
          </li>
          <li className="hover:bg-blue-600 rounded px-3 py-1 cursor-pointer">
            Life Insurance
          </li>
          <li className="hover:bg-blue-600 rounded px-3 py-1 cursor-pointer">
            Credit Score
          </li>
          <li className="hover:bg-blue-600 rounded px-3 py-1 cursor-pointer">
            Learn
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
