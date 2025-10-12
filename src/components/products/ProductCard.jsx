import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      removeFromCart(product.id);
    } else {
      updateQuantity(product.id, -1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(product.id, 1);
  };

  return (
    <div className="bg-white rounded-lg md:rounded-xl border border-gray-200 p-3 md:p-4 hover:shadow-lg transition-shadow">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
          {product.discount}% OFF
        </div>
      )}
      
      {/* Product Image */}
      <div className="text-4xl md:text-6xl text-center my-3 md:my-4">{product.image}</div>
      
      {/* Product Info */}
      <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1">{product.name}</h3>
      <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">{product.weight}</p>
      
      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 md:gap-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs md:text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-teal-600 font-bold text-base md:text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        {/* Cart Controls */}
        {cartItem ? (
          <div className="flex items-center gap-1 md:gap-2 bg-teal-500 text-white rounded-lg">
            <button
              onClick={handleDecrease}
              className="p-1 md:p-2 hover:bg-teal-600 rounded-l-lg transition-colors"
            >
              <Minus size={14} className="md:size-[16px]" />
            </button>
            <span className="font-medium px-2 md:px-3 text-xs md:text-sm">{cartItem.quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-1 md:p-2 hover:bg-teal-600 rounded-r-lg transition-colors"
            >
              <Plus size={14} className="md:size-[16px]" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="px-2 md:px-4 py-1 md:py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center gap-1 md:gap-2 transition-colors text-xs md:text-sm"
          >
            <ShoppingCart size={12} className="md:size-[16px]" />
            <span>Cart</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;