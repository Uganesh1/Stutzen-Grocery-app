import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { mockApi } from '../../services/mockApi';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories from mock API
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await mockApi.getCategories();
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <>
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden fixed bottom-4 left-4 z-50 p-3 bg-teal-500 text-white rounded-full shadow-lg"
        >
          <Menu size={20} />
        </button>
        
        <aside className={`fixed md:sticky md:top-20 left-0 h-screen md:h-[calc(100vh-5rem)] bg-white border-r border-gray-200 w-64 md:w-72 overflow-y-auto transition-transform z-50 sidebar-scroll ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="p-4">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-full h-12 bg-gray-200 rounded-lg mb-2"></div>
              ))}
            </div>
          </div>
        </aside>
      </>
    );
  }

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed md:sticky md:top-20 left-0 h-screen md:h-[calc(100vh-5rem)] bg-white border-r border-gray-200 w-full sm:w-80 md:w-72 lg:w-64 overflow-y-auto transition-transform duration-300 z-50 sidebar-scroll ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <h3 className="font-bold text-gray-800 text-lg">Categories</h3>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-4 px-2 text-lg hidden md:block">All Products</h3>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 md:px-4 py-3 md:py-3 rounded-lg mb-2 transition-colors text-sm md:text-base ${
                selectedCategory === cat.id
                  ? 'bg-teal-50 text-teal-600 border border-teal-200'
                  : 'text-gray-700 hover:bg-gray-50 border border-transparent'
              }`}
            >
              <span className="text-xl md:text-2xl">{cat.icon}</span>
              <span className="font-medium text-left">{cat.name}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;