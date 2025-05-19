import React, { useContext, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { ProductContext } from "../../context/ProductProvider";
import ProductCart from "../../components/ProductCart";
import LoadingSpinner from "../../components/LoadingSpinner";

const Featured = () => {
  const { popularProducts, popularProductsLoading } =
    useContext(ProductContext);
  const [showLimitedProduct, setShowLimitedProduct] = useState(4);

  const handleShowLimitedProduct = () => {
    setShowLimitedProduct((previous) => previous + 4);
  };

  if (popularProductsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  
  return (
    <div className="bg-gray-100">
      <div className="container max-w-7xl mx-auto px-6 py-4 ">
        <SectionTitle
          title="Popular Products"
          description="Explore our handpicked selection of top-rated electronics and accessories"
        />
        {/* Popular Product*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {popularProducts
            .slice(0, showLimitedProduct)
            .map(({ _id, title, regularPrice, originalPrice, image }) => (
              <ProductCart
                key={_id}
                id={_id}
                title={title}
                regularPrice={regularPrice}
                originalPrice={originalPrice}
                image={image}
              />
            ))}
        </div>

        {showLimitedProduct < popularProducts.length && (
          <div className="flex justify-center my-5">
            <button
              onClick={handleShowLimitedProduct}
              className="border w-22 text-xs py-2 px-3  font-bold italic  bg-gray-100 hover:bg-gray-600 transition-all duration-700 ease-in-out hover:text-white cursor-pointer"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
