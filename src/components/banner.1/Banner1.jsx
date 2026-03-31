import React from 'react';

import { FaUser, FaBoxOpen, FaRocket } from "react-icons/fa";

const Banner1 = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center relative">
          
          {/* Number */}
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
            01
          </div>

          {/* Icon */}
          <div className="w-20 h-20 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-6">
            <FaUser className="text-purple-600 text-3xl" />
          </div>

          <h3 className="text-xl font-semibold text-gray-800">
            Create Account
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center relative">
          
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
            02
          </div>

          <div className="w-20 h-20 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-6">
            <FaBoxOpen className="text-purple-600 text-3xl" />
          </div>

          <h3 className="text-xl font-semibold text-gray-800">
            Choose Products
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center relative">
          
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
            03
          </div>

          <div className="w-20 h-20 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-6">
            <FaRocket className="text-purple-600 text-3xl" />
          </div>

          <h3 className="text-xl font-semibold text-gray-800">
            Start Creating
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Banner1;