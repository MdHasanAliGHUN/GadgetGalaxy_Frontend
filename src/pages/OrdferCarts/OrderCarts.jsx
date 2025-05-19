import React from "react";
import { useCart } from "../../context/CartProvider.jsx";
import OrderLeftCart from "./OrderLeftCart.jsx";

const OrderCarts = () => {
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.regularPrice * item.quantity, 0);
  const shipping = 5.99;
  const estimatedTax = subtotal * 0.1;
  const total = subtotal + shipping + estimatedTax;

  return (
    <div>
      <div className="bg-gray-200 pt-14">
        <h1 className="container max-w-7xl mx-auto px-6 py-8 md:text-2xl font-bold">
          Shopping Cart
        </h1>
      </div>

      <div className="flex flex-col md:flex-row container gap-10 max-w-7xl mx-auto px-6 py-4">
        <div className="w-full md:w-3/5 border border-gray-200 p-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-sm font-bold">
              Cart Items ({cartItems.length})
            </h1>
            <button
              onClick={clearCart}
              className="bg-white px-2 py-1 border border-gray-300 rounded-sm text-xs text-gray-700 cursor-pointer hover:bg-gray-100"
            >
              Clear Cart
            </button>
          </div>
          <OrderLeftCart cartItems={cartItems} />
        </div>

        {/* //////////////////right div////////////// */}
        <div className="w-full md:w-2/5">
          <div className="p-4 border border-gray-300">
            <h1 className="text-lg font-bold text-black mb-2">Order Summary</h1>
            <div className="space-y-2">
              <div className=" flex items-center justify-between">
                <p className="text-sm text-gray-800 font-extralight">
                  Subtotal
                </p>
                <p className="text-sm text-gray-800 font-extralight">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <div className=" flex items-center justify-between">
                <p className="text-sm text-gray-800 font-extralight">
                  Shipping
                </p>
                <p className="text-sm text-gray-800 font-extralight">
                  ${shipping.toFixed(2)}
                </p>
              </div>
              <div className=" flex items-center justify-between">
                <p className="text-sm text-gray-800 font-extralight">
                  Estimated Tax
                </p>
                <p className="text-sm text-gray-800 font-extralight">
                  ${estimatedTax.toFixed(2)}
                </p>
              </div>
              <hr />
              <div className=" flex items-center justify-between my-5">
                <p className="text-sm text-gray-800 font-extralight">Total</p>
                <p className="text-sm text-gray-800 font-extralight">
                  ${total.toFixed(2)}
                </p>
              </div>
              <div>
                <button className="bg-sky-800 py-2 px-4 w-full text-white font-extralight hover:bg-sky-700 transition-all duration-300 ease-in-out cursor-pointer">
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCarts;
