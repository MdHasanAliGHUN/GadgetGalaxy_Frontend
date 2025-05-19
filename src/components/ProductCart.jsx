import React from "react";
import { NavLink } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FcRating } from "react-icons/fc";

const ProductCart = ({id, title, regularPrice, originalPrice, image }) => {
  return (
    <NavLink  to={`/products/${id}`}>
      {" "}
      <div className=" border-gray-300 border hover:translate-y-1 hover:shadow-lg transition-shadow duration-500 space-y-3">
        <div className="overflow-hidden">
          <img
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            src={image}
            alt={title}
          />
        </div>
        <div className="space-y-4 px-4 pb-5">
          <h1 className="font-semibold text-black text-lg capitalize">
            {title}
          </h1>
          <div className="flex items-center gap-1">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div>
              <strong className="font-bold text-black text-2xl">
                ${regularPrice}
              </strong>
              <del className="font-medium text-gray-500 text-lg">
                ${originalPrice}
              </del>
            </div>
            <FiShoppingCart className=" cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCart;
