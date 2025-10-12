import React from 'react';
import { ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-bold text-gray-800">PickBazar</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg cursor-pointer">
              <span className="text-teal-500">🛒</span>
              <span className="text-gray-700 font-medium">Grocery</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-teal-500">Shops</a>
            <a href="#" className="text-gray-700 hover:text-teal-500">Offers</a>
            <a href="#" className="text-gray-700 hover:text-teal-500">Contact</a>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-gray-700">Pages</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Search size={20} className="text-gray-500 cursor-pointer" />
            <button className="px-4 py-2 bg-teal-500 border border-teal-600 text-white rounded-lg hover:bg-teal-600">
              Join
            </button>
            <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
              Become a Seller
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingCart size={24} className="text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;