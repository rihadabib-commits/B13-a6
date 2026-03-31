import React from 'react';
import handImg from "../../assets/hand.img.png";
const Banner = () => {
    return (
        <div>
           
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <span className="text-sm bg-purple-100 text-purple-600 px-4 py-1 rounded-full inline-block mb-4">
            ● New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 mb-6">
           Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              Explore Products
            </button>

            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-50 transition">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
                    <div className='shadow-xl rounded-2xl p-10'>
                        <img src={handImg} alt="" />
                    </div>



      </div>
    </div>


        </div>
    );
};

export default Banner;