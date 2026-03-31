import React from 'react';
import { FaCheck } from "react-icons/fa";

const Banner2 = () => {
  return (
    <div className="bg-gray-100 py-20 px-4">
      
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Starter */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Starter</h3>
          <p className="text-gray-500 text-sm mt-1">
            Perfect for getting started
          </p>

          <h1 className="text-4xl font-bold mt-4">$0<span className="text-base text-gray-500">/Month</span></h1>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Access to 10 free tools</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Basic templates</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Community support</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> 1 project per month</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative p-8 rounded-2xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
          
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-4 py-1 rounded-full font-medium text-gray-800">
            Most Popular
          </div>

          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-sm mt-1 text-purple-100">
            Best for professionals
          </p>

          <h1 className="text-4xl font-bold mt-4">
            $29<span className="text-base text-purple-200">/Month</span>
          </h1>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><FaCheck/> Access to all premium tools</li>
            <li className="flex items-center gap-2"><FaCheck/> Unlimited templates</li>
            <li className="flex items-center gap-2"><FaCheck/> Priority support</li>
            <li className="flex items-center gap-2"><FaCheck/> Unlimited projects</li>
            <li className="flex items-center gap-2"><FaCheck/> Cloud sync</li>
            <li className="flex items-center gap-2"><FaCheck/> Advanced analytics</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-full bg-white text-purple-600 font-semibold">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Enterprise</h3>
          <p className="text-gray-500 text-sm mt-1">
            For teams and businesses
          </p>

          <h1 className="text-4xl font-bold mt-4">$99<span className="text-base text-gray-500">/Month</span></h1>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Everything in Pro</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Team collaboration</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Custom integrations</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Dedicated support</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> SLA guarantee</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500"/> Custom branding</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner2;