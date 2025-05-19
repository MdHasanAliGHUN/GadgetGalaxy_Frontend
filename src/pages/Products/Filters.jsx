import React, { useContext } from "react";
import { MdFilterAlt } from "react-icons/md";
import { ProductContext } from "../../context/ProductProvider";

const Filters = () => {
  const categories = [
    { name: "mobile" },
    { name: "laptop" },
    { name: "headphone" },
    { name: "camera" },
    { name: "monitor" },
    { name: "printer" },
    { name: "charger" },
  ];
  const brands = [
    { name: "Apple" },
    { name: "Samsung" },
    { name: "Sony" },
    { name: "Dell" },
    { name: "HP" },
  ];

  const {
    selectedCategories,
    selectedBrands,
    setSelectedCategories,
    setSelectedBrands,
  } = useContext(ProductContext);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    let updatedCategories;

    if (checked) {
      updatedCategories = [...selectedCategories, value];
    } else {
      updatedCategories = selectedCategories.filter((item) => item !== value);
    }

    setSelectedCategories(updatedCategories);
    console.log("Selected Categories:", updatedCategories);
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;

    let updatedBrands;
    if (checked) {
      updatedBrands = [...selectedBrands, value];
    } else {
      updatedBrands = selectedBrands.filter((item) => item !== value);
    }

    setSelectedBrands(updatedBrands);
    console.log("Selected Brands:", updatedBrands);
  };

  return (
    <div>
      <div className="flex items-center text-indigo-700 mb-4">
        <MdFilterAlt className="text-3xl" />
        <h1 className="text-2xl font-bold">Filters</h1>
      </div>

      <div>
        <h2 className="text-black font-semibold pl-2 text-sm mb-2">
          Filter By Categories
        </h2>

        <div className="space-y-2 pl-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={category.name}
                name="category"
                value={category.name.toLocaleLowerCase()}
                className="mr-2 accent-indigo-600"
                onChange={handleCategoryChange}
              />
              <label htmlFor={category.name} className="text-sm capitalize">
                {category.name}
              </label>
            </div>
          ))}
        </div>

        <h1 className="text-black font-semibold pl-2 text-sm my-2">
          Filter By Brand
        </h1>

        <div className="space-y-2 pl-2">
          {brands.map((brand, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={brand.name}
                name="brand"
                value={brand.name.toLocaleLowerCase()}
                className="mr-2 accent-indigo-600"
                onChange={handleBrandChange}
              />
              <label htmlFor={brand.name} className="text-sm capitalize">
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
