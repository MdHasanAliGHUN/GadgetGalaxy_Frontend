import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

const FilterByPrice = () => {
  const { setFilterByPrice } = useContext(ProductContext);
  const handleFilterByPrice = (e) => {
    setFilterByPrice(e.target.value);
  };
  return (
    <div className="bg-gray-100 rounded-md">
      <select
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={handleFilterByPrice}
      >
        <option value="">DEFAULT</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default FilterByPrice;
