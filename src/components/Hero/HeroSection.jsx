import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { mockApi } from '../../services/mockApi';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setSearching(true);
    try {
      const response = await mockApi.searchProducts(searchQuery);
      console.log('Search results:', response.data);
      alert(`Found ${response.data.length} products for "${searchQuery}"`);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setSearching(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Groceries Delivered in 90 Minute
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
          Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </p>
        
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search your products from here"
            className="w-full px-4 md:px-6 py-3 md:py-4 pr-28 md:pr-32 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 text-sm md:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            disabled={searching}
            className="absolute right-2 top-2 px-4 md:px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center gap-2 disabled:opacity-50 text-sm md:text-base"
          >
            {searching ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Search size={16} className="md:size-[18px]" />
            )}
            <span className="hidden sm:inline">{searching ? 'Searching...' : 'Search'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;