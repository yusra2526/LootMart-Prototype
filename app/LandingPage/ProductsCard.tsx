// components/ProductCard.tsx
import React from 'react';
import { Star, Heart } from 'lucide-react';

const ProductCard = ({ product, addToCart, toggleWishlist, isInWishlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group">
      <div className="relative bg-gradient-to-br from-orange-100 to-yellow-100 p-8 flex items-center justify-center h-48">
        <span className="text-6xl">{product.image}</span>
        <button 
          onClick={() => toggleWishlist(product)}
          className={`absolute top-2 right-2 p-2 bg-white rounded-full transition ${
            isInWishlist(product.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <Heart 
            size={18} 
            className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-orange-500'}
          />
        </button>
        {product.stock < 10 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Only {product.stock} left!
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star size={14} fill="#FFA500" className="text-orange-500" />
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400 ml-1">({Math.floor(Math.random() * 500) + 100})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="md:text-md sm:text-xl  font-bold text-orange-600">Rs {product.price.toLocaleString()}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;