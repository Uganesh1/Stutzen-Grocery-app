import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { mockProducts } from '../../data/mockProducts';

const ProductGrid = ({ selectedCategory }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  
  const filteredProducts = selectedCategory === 'all' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="flex-1">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {visibleCount < filteredProducts.length && (
        <div className="text-center py-8">
          <button
            onClick={() => setVisibleCount(prev => prev + 8)}
            className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;