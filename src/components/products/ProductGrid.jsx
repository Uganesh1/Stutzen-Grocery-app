import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { mockApi } from '../../services/mockApi';

const ProductGrid = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await mockApi.getProductsByCategory(selectedCategory);
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const visibleProducts = products.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-2 md:mt-4 text-gray-600 text-sm md:text-base">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="text-center text-red-500 text-sm md:text-base">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="text-center py-6 md:py-8 pb-8 md:pb-12">
          <button
            onClick={() => setVisibleCount(prev => prev + 8)}
            className="px-6 md:px-8 py-2 md:py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold text-sm md:text-base"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;