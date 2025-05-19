import React, { useState, useContext } from "react";
import ProductHeader from "./ProductHeader";
import { ProductContext } from "../../context/ProductProvider";
import ProductCart from "../../components/ProductCart";
import Filters from "./Filters";
import LoadingSpinner from "../../components/LoadingSpinner";

const Products = () => {
  const {
    allProducts,
    allProductsLoading,
    selectedCategories,
    selectedBrands,
    filterByPrice,
  } = useContext(ProductContext);

  const [displayLimitedProduct, setDisplayLimitedProduct] = useState(6);

  const handleDisplayLimitedProduct = () => {
    setDisplayLimitedProduct((prev) => prev + 3);
  };

  if (allProductsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  // Combined Filter (Category + Brand)
  const combinedFilteredProducts = allProducts.filter((product) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.toLowerCase());

    const matchBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand.toLowerCase());

    return matchCategory && matchBrand;
  });

  // Apply Price Sorting
  const sortedProducts = [...combinedFilteredProducts];

  if (filterByPrice === "lowToHigh") {
    sortedProducts.sort((a, b) => a.regularPrice - b.regularPrice);
  } else if (filterByPrice === "highToLow") {
    sortedProducts.sort((a, b) => b.regularPrice - a.regularPrice);
  }

  return (
    <div className="container max-w-7xl mx-auto px-6 py-4">
      <ProductHeader />
      <div className="flex flex-col md:flex-row my-10 gap-5">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/5 bg-gray-100 p-5 h-fit md:h-9/12 md:sticky md:top-20">
          <Filters />
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {sortedProducts
              .slice(0, displayLimitedProduct)
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

          {/* View More Button */}
          {displayLimitedProduct < sortedProducts.length && (
            <div className="flex justify-center my-5">
              <button
                onClick={handleDisplayLimitedProduct}
                className="border w-22 text-xs py-2 px-3 font-bold italic bg-gray-100 hover:bg-gray-600 transition-all duration-700 ease-in-out hover:text-white cursor-pointer"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
