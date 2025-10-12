import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const FloatingCart = () => {
  const { getTotalItems, getTotalPrice, setIsCartOpen, cartItems } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed right-4 bottom-4 z-40">
        {/* Expanded Cart Preview */}
        {isExpanded && (
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 mb-4 w-80 max-w-[90vw] transform transition-all duration-300">
            {/* Header */}
            <div className="p-3 md:p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="text-teal-500 md:size-[20px]" size={18} />
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  {totalItems} Item{totalItems !== 1 ? 's' : ''}
                </h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={14} className="md:size-[16px]" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="max-h-48 md:max-h-64 overflow-y-auto p-3 md:p-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-3 md:py-4 text-sm">Your cart is empty</p>
              ) : (
                <div className="space-y-2 md:space-y-3">
                  {cartItems.slice(0, 3).map(item => (
                    <div key={item.id} className="flex items-center gap-2 md:gap-3">
                      <div className="text-xl md:text-2xl">{item.image}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm font-medium text-gray-800 truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.quantity} × ${item.price.toFixed(2)}</p>
                      </div>
                      <div className="text-xs md:text-sm font-bold text-teal-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                  {cartItems.length > 3 && (
                    <p className="text-xs text-gray-500 text-center">
                      +{cartItems.length - 3} more items
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 md:p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <span className="text-xs md:text-sm text-gray-600">Total:</span>
                <span className="font-bold text-teal-600 text-sm md:text-base">${totalPrice}</span>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsExpanded(false);
                }}
                className="w-full bg-teal-500 text-white py-2 md:py-3 rounded-lg hover:bg-teal-600 font-semibold transition-colors text-sm md:text-base"
                disabled={cartItems.length === 0}
              >
                View Full Cart
              </button>
            </div>
          </div>
        )}

        {/* Main Floating Cart Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-teal-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative group"
        >
          <ShoppingCart size={20} className="md:size-[24px]" />
          
          {/* Item Count Badge */}
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">
              {totalItems}
            </span>
          )}
          
          {/* Tooltip */}
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
            {totalItems > 0 ? `${totalItems} items in cart` : 'Cart is empty'}
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingCart;