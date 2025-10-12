import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
          {product.discount}% OFF
        </div>
      )}
      
      {/* Product Image */}
      <div className="text-6xl text-center my-4">{product.image}</div>
      
      {/* Product Info */}
      <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-3">{product.weight}</p>
      
      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-teal-600 font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        {/* Cart Controls */}
        {cartItem ? (
          <div className="flex items-center gap-2 bg-teal-500 text-white rounded-lg">
            <button
              onClick={() => updateQuantity(product.id, -1)}
              className="p-2 hover:bg-teal-600 rounded-l-lg transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="font-medium px-3">{cartItem.quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, 1)}
              className="p-2 hover:bg-teal-600 rounded-r-lg transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center gap-2 transition-colors"
          >
            <ShoppingCart size={16} />
            Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;