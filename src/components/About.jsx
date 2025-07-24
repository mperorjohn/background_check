import React from "react";
import Header from "./Header";
import Button from "./Button";
import "../App.css";
import "../index.css";

const About = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399955/images_k0p3bh.jpg)] bg-cover bg-center text-white font">
      <Header />

      <div className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left px-4">
            <h4 className="text-sm tracking-widest mb-2 font-bold uppercase">About</h4>
            <h1 className="font-bold text-3xl sm:text-4xl mb-4 leading-tight">
              Your Credit Scores <br /> Should Be Free
            </h1>
            <p className="mb-6 text-white/90">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              corrupti ipsam amet excepturi, officia quidem placeat
              reprehenderit debitis repudiandae molestiae, iste nostrum? Quos
              possimus, laboriosam dolorum esse quasi rerum iusto!
            </p>

            {/* Select + Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start sm:justify-start">
              <select className="px-5 py-2 rounded-md border border-white text-black w-full sm:w-auto">
                <option>Personal loans</option>
                <option>Business loans</option>
              </select>
              <Button name="Continue" />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399977/two-ladies-removebg-preview_g6nmho.png"
              alt="Smiling Woman"
              className="w-[300px] md:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
