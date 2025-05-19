import React from "react";
import SectionTitle from "./SectionTitle";
import { NavLink } from "react-router";

const Explore = () => {
  return (
    <div className="bg-sky-800 py-30 px-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Ready to Explore Our Products?
        </h1>
        <p className="text-md text-white text-center font-light my-5">Browse our extensive collection of electronics, gadgets, and accessories to find exactly what you need.</p>
        <div className="flex flex-row gap-5 items-center justify-center mt-10">
            <NavLink className="bg-gray-300 py-2 px-5 rounded-md text-black text-lg w-42 hover:bg-transparent hover:border hover:text-white transition-all duration-700 ease-in-out" to="/products">Explore Products</NavLink>

            <NavLink className="bg-transparent hover:bg-gray-400 hover:text-black transition-all duration-700 ease-in-out text-white py-2 px-5 rounded-md  text-lg w-42 flex justify-center border" to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Explore;
