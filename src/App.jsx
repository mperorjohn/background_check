import "./App.css";
import Footer from "./components/Footer";
import Header from './components/Header';
import About from "./pages/About";
import Services from "./pages/Services";
import Offers from "./pages/Offers";
import Safety from "./pages/Safety";
import {BrowserRouter as Router, Routes, Route } from "react-router";

// Todo 1: Add react-router-dom
// Todo 2: Add react-query
// Todo 3: Add shadcn

function App() {
 
  return (
    <>
      <Router>
        
        <About/>
        <Routes>
          <Route path="/src/components/Header.jsx" element={<Header/>}/>
        </Routes>
        <Services />
        <Offers />
        <Safety/>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
