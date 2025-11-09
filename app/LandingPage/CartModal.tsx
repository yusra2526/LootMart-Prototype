"use client";

import React from 'react';
import { ShoppingCart, X, Minus, Plus, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartModalProps {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  deliveryFee: number;
  updateQuantity: (productId: number, change: number) => void;
  removeFromCart: (productId: number) => void;
  setShowCheckout: (show: boolean) => void;
  closeAllModals: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  showCart,
  setShowCart,
  cartItems,
  cartCount,
  cartTotal,
  deliveryFee,
  updateQuantity,
  removeFromCart,
  setShowCheckout,
  closeAllModals,
}) => {
  if (!showCart) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-40"
        onClick={() => setShowCart(false)}
      />
      <div className="fixed top-0 right-0 h-full bg-white w-full md:w-96 z-50 shadow-2xl overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl flex items-center gap-2">
            <ShoppingCart size={24} />
            Cart ({cartCount})
          </h3>
          <button onClick={() => setShowCart(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          {cartItems.length > 0 ? (
            <>
              <div className="space-y-4 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex gap-3">
                      <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-3 rounded-lg">
                        <span className="text-3xl">{item.image}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.name}</h4>
                        <p className="text-orange-600 font-bold mb-2">Rs {item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>Rs {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery:</span>
                  <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                    {deliveryFee === 0 ? 'FREE' : `Rs ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 border-t">
                  <span>Total:</span>
                  <span className="text-orange-600">Rs {cartTotal + deliveryFee}</span>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  closeAllModals();
                  setShowCheckout(true);
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition mt-4"
              >
                Proceed to Checkout
              </button>
            </>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <button 
                onClick={() => setShowCart(false)}
                className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;