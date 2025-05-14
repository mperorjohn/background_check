import "../App.css";
import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import Safety from "../components/Safety";
import FinServices from "../components/FinServices";


const Home = () => {
  return (
    <section>
      <About />
      <Services />
      <Offers />
      <FinServices/>
      <Safety/>
      <Footer/>
    </section>
  );
};

export default Home;
