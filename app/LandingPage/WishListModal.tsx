// components/WishlistModal.tsx
import React from 'react';
import { Heart, X, Trash2, Star } from 'lucide-react';

const WishlistModal = ({ showWishlist, setShowWishlist, wishlist, addWishlistToCart, toggleWishlist }) => {
  if (!showWishlist) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-40"
        onClick={() => setShowWishlist(false)}
      />
      <div className="fixed top-0 right-0 h-full text-black bg-white w-full md:w-96 z-50 shadow-2xl overflow-y-auto">
        <div className="sticky top-0 bg-linear-to-r from-orange-500 to-yellow-500 text-white p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl flex items-center gap-2">
            <Heart size={24} />
            Wishlist ({wishlist.length})
          </h3>
          <button onClick={() => setShowWishlist(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          {wishlist.length > 0 ? (
            <div className="space-y-4">
              {wishlist.map(item => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-3">
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-3 rounded-lg">
                      <span className="text-3xl">{item.image}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.name}</h4>
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={12} fill="#FFA500" className="text-orange-500" />
                        <span className="text-xs text-gray-600">{item.rating}</span>
                      </div>
                      <p className="text-orange-600 font-bold mb-2">Rs {item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => addWishlistToCart(item)}
                          className="flex-1 bg-linear-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded text-sm font-medium hover:from-orange-600 hover:to-yellow-600 transition"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => toggleWishlist(item)}
                          className="text-red-500 hover:text-red-700 p-1.5"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Your wishlist is empty</p>
              <button 
                onClick={() => setShowWishlist(false)}
                className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
              >
                Browse Products
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistModal;