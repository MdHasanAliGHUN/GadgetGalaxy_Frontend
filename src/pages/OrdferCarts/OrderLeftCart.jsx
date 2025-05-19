import React from "react";
import { MdDelete } from "react-icons/md";
import { useCart } from "../../context/CartProvider";
import {NavLink} from "react-router"
const OrderLeftCart = ({ cartItems }) => {
  const { updateQuantity,removeFromCart, addToCart } = useCart();
  const handleIncreaseValue = (item) => {
    updateQuantity(item._id, item.quantity + 1);
  };

  const handleDecreaseValue = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item._id, item.quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className=" flex items-center justify-between border-b  pb-2"
        >
          <div className=" overflow-hidden rounded-md flex items-center gap-5">
            <img
              className="size-20 rounded-md object-cover transition-transform duration-300 hover:scale-110"
              src={item.image}
              alt=""
            />
            <div>
              <h1 className="text-sm">{item.title}</h1>
              <p className="text-xs text-gray-700">{item.brand}</p>
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 border mt-2">
                  <button
                    onClick={() => handleDecreaseValue(item)}
                    className="px-4 border-r text-lg cursor-pointer hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseValue(item)}
                    className="px-4 border-l cursor-pointer text-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <button onClick={() => removeFromCart(item._id)} className="px-1 py-[6px] border text-red-700 border-gray-100 cursor-pointer  mt-2 text-xs flex items-center gap-1">
                  <MdDelete className="text-sm" />
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* left cart */}
          <div>
            <div className=" leading-0">
              <h2 className="text-blue-700 text-sm font-bold m-0">${item.regularPrice}</h2>
              <del className="text-black text-xs m-0">${item.originalPrice}</del>
            </div>
            <p className="text-sm mt-3 text-green-500">
              Subtotal : ${(item.regularPrice * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      <NavLink to="/products" className="flex  justify-center w-full py-2 px-4 rounded-sm bg-indigo-800 hover:bg-indigo-700 transition-all duration-300 ease-in-out text-white font-semibold">Continou Shapping</NavLink>
    </div>
  );
};

export default OrderLeftCart;
