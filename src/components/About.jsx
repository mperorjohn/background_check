import React from "react";
import Header from "./Header";
import Button from "./Button";
import "../App.css";
import "../index.css";

const About = () => {
  return (
    <div className="bg-[url(./assets/images.jpeg)] bg-cover bg-center m-2 font">
      <Header />
      <div className="flex items-center justify-center p- text-white flex-col m-2 pt-20">
        <div className=" grid grid-cols-2 gap-8 w-200 ">
          <div>
            <h4 className="text-sm tracking-widest mb-2 font-bold"> ABOUT</h4>
            <h1 className="font-bold text-4xl mb-4">
              {" "}
              Your Credit scores <br /> should be free
            </h1>
            <p className=" mb-6 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              corrupti ipsam amet excepturi, officia quidem placeat
              reprehenderit debitis repudiandae molestiae, iste nostrum? Quos
              possimus, laboriosam dolorum esse quasi rerum iusto!
            </p>
            <div className="flex flex-row gap-4">
              <select className="px-7 py-2 rounded-md border-2">
                <option>Personal loans</option>
                <option>Business loans</option>
              </select>
              <Button name="Continue" />
            </div>
          </div>

          <img
            src="/src/assets/woman-657753-removebg-preview.png"
            alt="Smiling Woman"
            className="w-100 h-122"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
