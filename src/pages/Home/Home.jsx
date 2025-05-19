import React from "react";
import Hero from "../../components/Hero";
import Categories from "../Categories/Categories";
import Featured from "./Featured";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonial from "../../components/Testimonial";
import Explore from "../../components/Explore";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <Featured/>
      <WhyChooseUs/>
      <Testimonial/>
      <Explore/>
    </div>
  );
};

export default Home;
