import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { IoMdSearch } from "react-icons/io";
import FilterByPrice from "./FilterByPrice";

const ProductHeader = () => {
  return (
    <div className="pt-10">
      <SectionTitle
        title="Our Products"
        description="Browse our extensive collection of high-quality electronics, gadgets, and accessories"
      />
      <div className="bg-gray-100 px-5 py-3 rounded-md flex items-center justify-between gap-5">
        <input type="text" className=" border w-2/3 py-1" name="" id="" />
        <div>
          <FilterByPrice/>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
