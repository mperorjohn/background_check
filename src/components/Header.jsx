import React from "react";

const Header = () => {
  return (
    <div className="text-white">
      <nav className="flex items-center justify-center p- space-x-4 gap-7">
        <h1 className="text-2xl font-extrabold bg-white text-blue-300 p-3  rounded-b-xl">
          <span className="text-blue-900">compare</span>offers
        </h1>

        <ul className="flex space-x-4 justify-">
          <li className="hover:bg-blue-600">
            <select>
              <option>Loans</option>
            </select>
          </li>
          <li className="hover:bg-blue-600">Credit Cards</li>
          <li className="hover:bg-blue-600">Savings</li>
          <li className="hover:bg-blue-600">Life Insurance</li>
          <li className="hover:bg-blue-600">Credit Score</li>
          <li className="hover:bg-blue-600">Learn</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
