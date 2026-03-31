
import React from "react";

const Ratting = () => {
  return (
    <div className="bg-linear-to-r from-blue-600 to-purple-500  py-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-center text-white">

        {/* Item 1 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="mt-2 text-sm opacity-80 font-semibold">Active Users</p>
        </div>

        {/* Divider */}
        <div className="w-px h-12 bg-white opacity-40"></div>

        {/* Item 2 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="mt-2 text-sm opacity-80">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="w-px h-12 bg-white opacity-40"></div>

        {/* Item 3 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="mt-2 text-sm opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Ratting;