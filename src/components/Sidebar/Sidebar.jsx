import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { categories } from '../../data/mockProducts';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
     
      {/* Sidebar */}
      <aside className={`fixed md:sticky md:top-20 left-0 h-screen md:h-[calc(100vh-5rem)] bg-white border-r border-gray-200 w-64 overflow-y-auto transition-transform z-50 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-4 px-4">All Products</h3>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-teal-50 text-teal-600 border border-teal-200'
                  : 'text-gray-700 hover:bg-gray-50 border border-transparent'
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </aside>

      {/*mobile */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed bottom-4 left-4 z-50 p-3 bg-teal-500 text-white rounded-full shadow-lg"
      >
        <Menu size={24} />
      </button>

    </>
  );
};

export default Sidebar;