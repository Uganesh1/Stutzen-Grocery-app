import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CheckoutPage = ({ onBack }) => {
  const { cartItems, getTotalPrice, clearCart } = useCart();

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    clearCart();
    onBack();
  };

  const subtotal = parseFloat(getTotalPrice());
  const deliveryFee = 2.00;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← Back to Cart
        </button>

        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x {item.weight}
                    </p>
                    <p className="text-teal-600 font-semibold">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-teal-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-teal-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 font-semibold mt-6 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;