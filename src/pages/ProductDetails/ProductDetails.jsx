import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductProvider";
import ProductDetailsCart from "./ProductDetailsCart";
import LoadingSpinner from "../../components/LoadingSpinner";

const ProductDetails = () => {
  const { productDetailseLoading, setProductDetailseLoading } =
    useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setProductDetailseLoading(true);
      try {
        const response = await fetch(
          `https://gadget-galaxy-backend-seven.vercel.app/products/${id}`
        );
        const data = await response.json();
        if (data.product) {
          // 2 second delay
          setTimeout(() => {
            setProduct(data.product); // Set product after delay
            setProductDetailseLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProductDetailseLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (productDetailseLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className=" bg-gray-50 py-20 min-h-screen">
      <ProductDetailsCart product={product} />
    </div>
  );
};

export default ProductDetails;
