import React from "react";
import Card from "./Card";
import data from "../data/Data.json";

const Services = () => {
  return (
    <section className="items-center justify-center flex flex-col p-10">
      <div className=" w-300 items-center justify-center flex flex-col ">
        <div className="flex flex-col items-center pb-10">
          <h4 className="font-bold text-blue-700 tracking-widest"> SERVICES</h4>
          <h2 className="font-extrabold text-3xl p-3">
            Find the financial services you need{" "}
          </h2>
          <p className="text-center text-black/80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem harum eveniet incidunt veniam <br /> et quam rem enim
            iste porro nemo veritatis
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {data.cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              alt={card.alt}
              heading={card.heading}
              details={card.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;