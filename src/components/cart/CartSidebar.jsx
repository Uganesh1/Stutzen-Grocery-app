import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import CheckoutPage from './CheckoutPage';

const CartSidebar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isCartOpen) return null;

  if (showCheckout) {
    return <CheckoutPage onBack={() => setShowCheckout(false)} />;
  }

  return (
    <>
      {/* Overlay */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 z-50"
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-teal-500" size={24} />
            <h2 className="text-xl font-bold">
              {cartItems.length} Item{cartItems.length !== 1 ? 's' : ''}
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-medium px-3 min-w-[2rem] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="text-3xl">{item.image}</div>
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.quantity} X {item.weight}</p>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="text-teal-600 font-bold">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="text-gray-600 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => updateQuantity(item.id, -item.quantity)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-teal-500 text-white py-4 rounded-lg hover:bg-teal-600 flex items-center justify-between px-6 font-semibold text-lg transition-colors"
            >
              <span>Checkout</span>
              <span>${getTotalPrice()}</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;