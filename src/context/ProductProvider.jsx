import React, { createContext, useEffect, useState } from "react";
import {
  MdSmartphone,
  MdPrint,
  MdLaptopMac,
  MdHeadphones,
  MdPower,
  MdPhotoCamera,
} from "react-icons/md";

export const ProductContext = createContext(null);

export const productCategories = [
  {
    id: 1,
    category: "Mobile",
    description:
      "Latest smartphones with powerful performance and sleek designs.",
    icon: MdSmartphone,
  },
  {
    id: 2,
    category: "Printer",
    description: "High-quality printers for home and office use.",
    icon: MdPrint,
  },
  {
    id: 3,
    category: "Laptop",
    description:
      "Powerful laptops built for productivity, gaming, and creativity.",
    icon: MdLaptopMac,
  },
  {
    id: 4,
    category: "Headphone",
    description: "Noise-cancelling headphones with immersive sound experience.",
    icon: MdHeadphones,
  },
  {
    id: 5,
    category: "Charger",
    description: "Fast-charging and durable chargers for all your devices.",
    icon: MdPower,
  },
  {
    id: 6,
    category: "Camera",
    description:
      "Capture stunning moments with high-resolution digital cameras.",
    icon: MdPhotoCamera,
  },
];

const ProductProvider = ({ children }) => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  //Filter state in here
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState(null)
console.log(filterByPrice)
  //All  Loading state in here
  const [allProductsLoading, setAllProductsLoading] = useState(true);
  const [popularProductsLoading, setPopularProductsLoading] = useState(true);
  const [productDetailseLoading, setProductDetailseLoading] = useState(true);
  // Fetch All Products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();

        // 2 second delay
        setTimeout(() => {
          setAllProducts(data.products);
          setAllProductsLoading(false);
        }, 1000);
      } catch (error) {
        console.log("Error fetching all data:", error.message);
        setAllProductsLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  // Fetch popular products from the server when the component mounts
  useEffect(() => {
    const fetchPopularProduct = async () => {
      try {
        const res = await fetch("http://localhost:5000/products/popular");
        const data = await res.json();
        setTimeout(() => {
          setPopularProducts(data.popularProducts);
          setPopularProductsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching popular products:", error.message);
      }
    };
    fetchPopularProduct();
  }, []);

  const productInfo = {
    productCategories,
    popularProducts,
    allProducts,
    selectedCategories,
    selectedBrands,
    filterByPrice,

    //All set state
    setSelectedCategories,
    setSelectedBrands,
    setProductDetailseLoading,
    setFilterByPrice,

    // loading state
    allProductsLoading,
    popularProductsLoading,
    productDetailseLoading,
  };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
