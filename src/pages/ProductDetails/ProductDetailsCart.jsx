import React, { useState } from "react";
import { NavLink } from "react-router";
import { BsArrowLeft } from "react-icons/bs";
import { useCart } from "../../context/CartProvider";

const ProductDetailsCart = ({ product }) => {
  const {
    _id,
    image,
    title,
    brand,
    regularPrice,
    originalPrice,
    description,
    features,
  } = product || {};

  const [count, setCount] = useState(1);

  const { addToCart } = useCart(); // cart context থেকে function নিচ্ছো

  const handleIncreaseValue = () => {
    setCount((pre) => pre + 1);
  };

  const handleDecreaseValue = () => {
    setCount((pre) => (pre > 1 ? pre - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(
      {
        _id,
        image,
        title,
        brand,
        regularPrice,
        originalPrice
      },
      count
    );
    alert("Product added to cart!");
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 py-4">
      <div className="bg-white hover:bg-gray-100 transition-all duration-300 px-6 py-3 rounded text-sm text-black font-bold w-44 border border-gray-400 group">
        <NavLink to="/products" className="flex items-center gap-3 ">
          <BsArrowLeft className="text-black font-extrabold text-lg transition-all duration-500 ease-in-out group-hover:translate-x-1" />
          Go to Products
        </NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
        <div className="overflow-hidden ">
          <img
            className="h-96 w-full object-cover transition-transform duration-300 hover:scale-125"
            src={image}
            alt={title}
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-md sm:text-2xl md:text-3xl font-bold">{title}</h1>
          <h2>
            Brand : <span>{brand}</span>
          </h2>
          <div>
            <span className="text-lg font-bold">Price : </span>
            <strong className="text-md mr-1">${regularPrice}</strong>
            <del className="text-sm text-gray-600">${originalPrice}</del>
          </div>
          <p className="text-gray-600 my-2">{description}</p>
          <h1 className="text-md text-lg font-bold">Key Features :</h1>
          {features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          <h1 className="my-2 font-semibold">
            Availability : <span className="text-green-600">In Stock</span>
          </h1>

          <div className="flex items-center gap-4">
            <h2>Quantity : </h2>
            <div className="bg-gray-200 inline-block border">
              <button
                onClick={handleDecreaseValue}
                className="px-4 border-r text-lg cursor-pointer hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4">{count}</span>
              <button
                onClick={handleIncreaseValue}
                className="px-4 border-l cursor-pointer text-lg hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={handleAddToCart}
              className="flex items-center bg-indigo-700 py-2 px-4 text-white font-semibold justify-center text-lg my-10 hover:bg-indigo-600 w-full cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCart;
