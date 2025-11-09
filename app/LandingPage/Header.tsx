"use client";

import React from 'react';
import { Package, Phone, Mail, User, Heart, ShoppingCart, Search, Menu, X, HelpCircle } from 'lucide-react';

interface User {
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  address: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  stock: number;
}

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  wishlist: Product[];
  isLoggedIn: boolean;
  user: User | null;
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  showWishlist: boolean;
  setShowWishlist: (show: boolean) => void;
  showProfile: boolean;
  setShowProfile: (show: boolean) => void;
  closeAllModals: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  searchQuery,
  setSearchQuery,
  cartCount,
  wishlist,
  isLoggedIn,
  user,
  showCart,
  setShowCart,
  showWishlist,
  setShowWishlist,
  showProfile,
  setShowProfile,
  closeAllModals,
}) => {
  return (
    <header className="bg-linear-to-r from-orange-500 to-yellow-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-orange-400 text-sm">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-yellow-200 transition-colors duration-200">
              <Phone size={14} />
              <span>0300-1234567</span>
            </button>
            <button className="hidden md:flex items-center gap-1 hover:text-yellow-200 transition-colors duration-200">
              <Mail size={14} />
              <span>support@lootmart.pk</span>
            </button>
            <button className="hidden md:flex items-center gap-1 hover:text-yellow-200 transition-colors duration-200">
              <HelpCircle size={14} />
              <span>Help</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                closeAllModals();
                setShowProfile(!showProfile);
              }}
              className="hover:text-yellow-200 transition-colors duration-200 flex items-center gap-1"
            >
              <User size={18} />
              {isLoggedIn && user && <span className="hidden md:inline">{user.name}</span>}
            </button>
            <button 
              onClick={() => {
                closeAllModals();
                setShowWishlist(!showWishlist);
              }}
              className="hover:text-yellow-200 transition-colors duration-200 relative"
            >
              <Heart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1><span><img src="/image.png" alt="LootMart" width="100" height="100" /></span></h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative bg-white rounded-lg w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search className="absolute right-3 top-3 text-gray-500" size={24} />
            </div>
          </div>

          {/* Cart & Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                closeAllModals();
                setShowCart(!showCart);
              }}
              className="relative hover:scale-110 transition-transform duration-200"
            >
              <ShoppingCart size={28} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <Search className="absolute right-3 top-2 text-gray-500" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;