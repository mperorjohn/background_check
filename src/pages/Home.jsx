import "../App.css";
import React from "react";
import About from "../components/About";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import Safety from "../components/Safety";
import FinServices from "../components/FinServices";


const Home = () => {
  return (
    <section>
      <About />
      <Offers />
      <FinServices/>
      <Safety/>
      <Footer/>
    </section>
  );
};

export default Home;
