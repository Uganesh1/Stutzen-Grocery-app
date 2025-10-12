import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Groceries Delivered in 90 Minute
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </p>
        
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search your products from here"
            className="w-full px-6 py-4 pr-32 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
          />
          <button className="absolute right-2 top-2 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center gap-2">
            <Search size={18} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;