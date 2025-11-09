// components/CheckoutModal.tsx
import React from 'react';
import { CreditCard, X, MapPin, Zap, CheckCircle } from 'lucide-react';

const CheckoutModal = ({
  showCheckout,
  setShowCheckout,
  isLoggedIn,
  user,
  selectedLocation,
  expressDelivery,
  setExpressDelivery,
  paymentMethod,
  setPaymentMethod,
  cartCount,
  cartTotal,
  deliveryFee,
  expressDeliveryFee,
  finalTotal,
}) => {
  if (!showCheckout) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-40"
        onClick={() => setShowCheckout(false)}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-lg shadow-2xl p-6 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-xl flex items-center gap-2">
            <CreditCard size={24} className="text-orange-500" />
            Checkout
          </h3>
          <button onClick={() => setShowCheckout(false)}>
            <X size={20} />
          </button>
        </div>
        
        {/* Delivery Address */}
        <div className="border rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <MapPin size={18} className="text-orange-500" />
            Delivery Address
          </h4>
          {isLoggedIn ? (
            <div>
              <p className="text-sm text-gray-600">{user.name}</p>
              <p className="text-sm text-gray-600">{user.address}</p>
              <p className="text-sm text-gray-600">{selectedLocation}</p>
              <p className="text-sm text-gray-600">{user.phone}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-600">Please login to continue</p>
          )}
        </div>

        {/* Express Delivery Option */}
        <div className="border rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-orange-500" />
              <h4 className="font-semibold text-gray-800">Express Delivery</h4>
            </div>
            <button
              onClick={() => setExpressDelivery(!expressDelivery)}
              className={`w-12 h-6 rounded-full transition ${
                expressDelivery ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition transform ${
                expressDelivery ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          <p className="text-sm text-gray-600">Get your order delivered within 24 hours (+Rs 300)</p>
        </div>

        {/* Payment Method */}
        <div className="border rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <CreditCard size={18} className="text-orange-500" />
            Payment Method
          </h4>
          <div className="space-y-2">
            <button
              onClick={() => setPaymentMethod('cod')}
              className={`w-full text-left p-3 rounded-lg border-2 transition ${
                paymentMethod === 'cod'
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">Cash on Delivery</span>
                {paymentMethod === 'cod' && <CheckCircle size={18} className="text-orange-500" />}
              </div>
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className={`w-full text-left p-3 rounded-lg border-2 transition ${
                paymentMethod === 'card'
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">Credit/Debit Card</span>
                {paymentMethod === 'card' && <CheckCircle size={18} className="text-orange-500" />}
              </div>
            </button>
            <button
              onClick={() => setPaymentMethod('bank')}
              className={`w-full text-left p-3 rounded-lg border-2 transition ${
                paymentMethod === 'bank'
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">Bank Transfer</span>
                {paymentMethod === 'bank' && <CheckCircle size={18} className="text-orange-500" />}
              </div>
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-800 mb-3">Order Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({cartCount} items):</span>
              <span>Rs {cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Standard Delivery:</span>
              <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                {deliveryFee === 0 ? 'FREE' : `Rs ${deliveryFee}`}
              </span>
            </div>
            {expressDelivery && (
              <div className="flex justify-between text-gray-600">
                <span>Express Delivery:</span>
                <span>Rs {expressDeliveryFee}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 border-t">
              <span>Total:</span>
              <span className="text-orange-600">Rs {finalTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-linear-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition">
          Place Order
        </button>
      </div>
    </>
  );
};

export default CheckoutModal;