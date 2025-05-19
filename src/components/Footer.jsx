import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-10 px-5 md:px-20 z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">TechPro</h2>
          <p className="text-sm mb-4">
            Your trusted partner for quality electronics, accessories, and
            expert service.
          </p>
          <div className="flex space-x-3 text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:underline">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Product List */}
        <div>
          <h2 className="text-lg font-bold mb-2">Products</h2>
          <ul className="space-y-2 text-sm">
            <li>Mobile Accessories</li>
            <li>Computer Parts</li>
            <li>Gadgets</li>
            <li>Networking</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <i className="fas fa-map-marker-alt"></i> 123 Tech Street,
              Cityville
            </li>
            <li>
              <i className="fas fa-phone"></i> (123) 456-7890
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@techpro.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-sm">
        © 2025 TechPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
