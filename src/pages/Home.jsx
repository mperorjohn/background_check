import "../App.css";
import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import Services from '../pages/Services'
// import Offers from '../pages/Offers'
// import About from '../components/About'

const Home = () => {
  return (
    <section>
      <About />
      <Services />
      <Offers />
      <Footer/>
    </section>
  );
};

export default Home;
