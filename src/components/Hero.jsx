import React from "react";
import background1 from "../assets/background1.jpg";
import background2 from "../assets/backgroun2.jpg";
import desktop from "../assets/desktop.jpg";
import { NavLink } from "react-router";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="py-20 bg-sky-800">
      <div className="container max-w-7xl mx-auto px-6 my-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-white font-extrabold leading-10  text-4xl lg:text-5xl">
            Next Generation Electronics for Today's World
          </h1>{" "}
          <p className="text-white text-sm">
            Discover our next-generation collection of premium electronics and
            innovative gadgets — designed to simplify your daily life, boost
            productivity, and deliver superior performance. From cutting-edge
            accessories to essential tech devices, we offer quality you can
            trust at prices you'll love.
          </p>

          <div className="flex items-center gap-5">
            <NavLink
              to="/products"
              className="group flex items-center justify-center gap-2 border-1 text-black bg-white hover:bg-transparent hover:text-white  py-3 px-6 rounded-md text-sm w-44 text-center transition-all duration-700 ease-in-out"
            >
              Explore Product
              <GoArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>

            <NavLink
              to="/contact"
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-md text-sm text-white border-2  w-44 text-center hover:bg-gray-100 hover:text-black transition-all duration-700 ease-in-out"
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            className="w-md md:w-lg lg:w-xl rounded-md hover:shadow-lg"
            src={desktop}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
