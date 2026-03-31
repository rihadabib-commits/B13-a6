import React from 'react';
const Footer1 = () => {
  return (
    <div className="bg-linear-to-r from-purple-600 via-indigo-600 to-purple-700 py-20 px-4 text-center text-white">
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4">
        Ready To Transform Your Workflow?
      </h2>

      {/* Subtitle */}
      <p className="text-purple-100 max-w-2xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        
        {/* Button 1 */}
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
          Explore Products
        </button>

        {/* Button 2 */}
        <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
          View Pricing
        </button>
      </div>

      {/* Bottom text */}
      <p className="mt-6 text-sm text-purple-200">
        14-day free trial • No credit card required • Cancel anytime
      </p>

    </div>
  );
};

export default Footer1;