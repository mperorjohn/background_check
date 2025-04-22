import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Todo 1: Add react-router-dom
// Todo 2: Add react-query
// Todo 3: Add shadcn

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
          <div className="flex items-center">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h1 className="text-2xl font-bold">My App</h1>
          </div>
          <ul className="flex space-x-4">
            <li className="hover:bg-blue-600">Home</li>
            <li className="hover:bg-yellow-300">Pages</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Gym</li>
            <li>Jingle</li>
          </ul>
        </nav>
      </div> */}
    </>
  );
}

export default App;
