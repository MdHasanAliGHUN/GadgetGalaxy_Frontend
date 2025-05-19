import React, { useContext, useState } from "react";
import logo2 from "../assets/logo2.png";
import { NavLink } from "react-router"; // ✅ Use react-router-dom
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../context/CartProvider";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);
  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/products", label: "PRODUCTS" },
    { to: "/about", label: "ABOUT US" },
    { to: "/contact", label: "CONTACT" },
  ];
  const { cartItems, clearCart } = useCart();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="bg-white px-6 py-4 shadow-sm w-full top-0 right-0 fixed z-50">
      <nav className="container max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/">
          <img className="w-32 h-10" src={logo2} alt="LOGO" />
        </NavLink>

        {/* Desktop menu list */}
        <ul className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <li
              key={item.to}
              className="text-center text-gray-700 hover:text-gray-950"
            >
              <NavLink to={item.to}>
                {item.label}
                <hr className="mx-auto mt-0 w-3/4 border-none h-[1px] bg-gray-700 hidden" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 text-xl">
          <IoSearchOutline className="size-7" />

          <NavLink to="/cart" className="relative">
            <IoCartOutline className="size-7 cursor-pointer" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </NavLink>

          <div>
            {user ? (
              <div className="flex items-center gap-2">
                <NavLink
                  to="/dashboard"
                  className=" border bg-white hover:bg-gray-200  transition-all duration-500 ease-in-out text-lg px-4 py-[6px] rounded-md hidden md:block"
                >
                  Dashboard
                </NavLink>

                <button
                  onClick={logOutUser}
                  className=" border bg-white hover:bg-gray-200  transition-all duration-500 ease-in-out text-lg px-4 py-[6px] rounded-md hidden md:block cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/logIn"
                  className="bg-indigo-600 text-lg px-4 py-[6px] rounded-md text-white hover:bg-indigo-500 hidden md:block"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            {showMobileMenu ? (
              <RxCross2
                className="size-7 cursor-pointer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            ) : (
              <CgMenuRightAlt
                className="size-7 cursor-pointer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu list */}
      <div
        className={`md:hidden mt-2 transition-all duration-700 ease-in-out overflow-hidden ${
          showMobileMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-100"
        }`}
      >
        <ul className="space-y-2 text-center py-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block py-2 text-gray-700 hover:text-gray-950"
                onClick={() => setShowMobileMenu(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <div>
            {user ? (
              <div className="flex flex-col items-center gap-2">
                <NavLink
                  to="/dashboard"
                  className="border bg-white hover:bg-gray-200 w-full transition-all duration-500 ease-in-out text-lg px-4 py-[6px] rounded-md"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Dashboard
                </NavLink>

                <button
                  onClick={() => {
                    logOutUser();
                    setShowMobileMenu(false);
                  }}
                  className="border bg-white hover:bg-gray-200 w-full transition-all duration-500 ease-in-out text-lg px-4 py-[6px] rounded-md cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <NavLink
                to="/logIn"
                className="block bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500"
                onClick={() => setShowMobileMenu(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
