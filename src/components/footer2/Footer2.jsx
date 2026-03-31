import React from 'react';
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";

const Footer2 = () => {
    return (
        <div>
              <footer className="bg-[#0b1a2b] text-gray-300 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Left Section */}
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-semibold mb-4">
            DigiTools
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-medium mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Templates</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h3 className="text-white font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>

          <h3 className="text-white font-medium mb-3">Social Links</h3>
          <div className="flex gap-3">
            <div className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer">
             <FaYoutube />

            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer">
               <FaFacebook />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer">
             <FaXTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer2;