import React from 'react';
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({coin}) => {
  return (
    
    <div className="navbar bg-base-100 shadow-sm px-6">

      {/* LEFT (Logo) */}
      <div className="flex-1">
        <a className="text-2xl font-extrabold bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent cursor-pointer">
          DigiTools
        </a>
      </div>

      {/* CENTER (Menu) */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-end items-center gap-5">

        {/* Cart */}
        <div className="indicator cursor-pointer">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
          </svg> */}
          <IoCartOutline />
          {/* <span className="badge badge-sm indicator-item">{coin}</span> */}
          <span className="badge badge-sm indicator-item">{coin.toFixed(2)}</span>

        </div>

        {/* Login */}
        <button className="text-gray-700 font-medium hover:text-purple-600">
          Login
        </button>

        {/* Get Started */}
        <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700 transition">
          Get Started
        </button>

      </div>

    </div>
  );
};

export default Navbar;