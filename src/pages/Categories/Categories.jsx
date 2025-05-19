import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { ProductContext } from "../../context/ProductProvider";
import { NavLink } from "react-router";
import { GoArrowRight } from "react-icons/go";

const Categories = () => {
  const { productCategories } = useContext(ProductContext);

  return (
    <div className="container max-w-7xl mx-auto px-6 py-4 mb-10">
      <SectionTitle
        title="Explore Our Categories"
        description="Browse through our wide range of electronic products and accessories"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {productCategories.map((product, index) => {
          const { category, description, icon: Icon } = product;
          return (
            <div
              key={index}
              className="group p-6 rounded-md shadow hover:shadow-lg hover:border-sky-600 border transition duration-1000 text-center"
            >
              <Icon className="text-4xl md:text-5xl lg:text-6xl text-sky-600 mb-3 mx-auto" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">
                {category}
              </h2>
              <p className="text-lg text-gray-600">{description}</p>
              <NavLink
                to="/"
                className="group text-black font-extrabold flex items-center justify-center gap-2 py-3 px-6  w-full text-center transition-all duration-500 ease-in-out"
              >
                Explore More
                <GoArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
