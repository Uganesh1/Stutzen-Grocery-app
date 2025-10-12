import React, { useState } from 'react';
import { ShoppingCart, Search, ChevronDown, Menu } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Grocery Dropdown */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-bold text-gray-800 hidden sm:block">PickBazar</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg cursor-pointer">
              <span className="text-teal-500">🛒</span>
              <span className="text-gray-700 font-medium">Grocery</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-teal-500">Shops</a>
            <a href="#" className="text-gray-700 hover:text-teal-500">Offers</a>
            <a href="#" className="text-gray-700 hover:text-teal-500">Contact</a>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-gray-700">Pages</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Search size={20} className="text-gray-500 cursor-pointer hidden sm:block" />
            
            <div className="hidden sm:flex items-center gap-2">
              <button className="px-3 py-2 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 text-sm">
                Join
              </button>
              <button className="px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 text-sm hidden lg:block">
                Become a Seller
              </button>
            </div>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingCart size={22} className="text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-700 hover:text-teal-500 py-2">Shops</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 py-2">Offers</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 py-2">Contact</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 py-2">Pages</a>
              
              <div className="flex gap-2 mt-2">
                <button className="flex-1 px-3 py-2 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 text-sm">
                  Join
                </button>
                <button className="flex-1 px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 text-sm">
                  Seller
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;