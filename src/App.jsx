import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";

// Todo 1: Add react-router-dom
// Todo 2: Add react-query
// Todo 3: Add shadcn

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
