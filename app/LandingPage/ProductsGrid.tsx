// components/ProductsGrid.tsx
import React from 'react';
import ProductCard from './ProductsCard';

const ProductsGrid = ({
  selectedCategory,
  categories,
  searchQuery,
  filteredProducts,
  addToCart,
  toggleWishlist,
  isInWishlist,
  setSearchQuery,
  setSelectedCategory,
}) => {
  return (
    <div className="container mx-auto px-4 pb-12">
      {searchQuery && (
        <p className="text-gray-700 mb-4">
          Showing {filteredProducts.length} results for <span className="font-semibold text-orange-600">{searchQuery}</span>
        </p>
      )}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
      </h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your search.</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;