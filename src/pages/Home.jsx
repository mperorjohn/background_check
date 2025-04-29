import "../App.css";
import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import Safety from "../components/Safety";


const Home = () => {
  return (
    <section>
      <About />
      <Services />
      <Offers />
      <Safety/>
      <Footer/>
    </section>
  );
};

export default Home;
