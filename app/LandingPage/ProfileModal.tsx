// components/ProfileModal.tsx
import React from 'react';
import { User, X, Package, Heart, Settings, LogOut, Clock, Phone } from 'lucide-react';

const ProfileModal = ({
  showProfile,
  setShowProfile,
  isLoggedIn,
  user,
  wishlist,
  handleLogin,
  handleLogout,
  showOrders,
  setShowOrders,
  showWishlist,
  setShowWishlist,
  showSettings,
  setShowSettings,
  closeAllModals,
}) => {
  if (!showProfile) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-40"
        onClick={() => setShowProfile(false)}
      />
      <div className="fixed top-20 right-4 text-black bg-white rounded-lg shadow-2xl p-6 z-50 w-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <User size={20} />
            Account
          </h3>
          <button onClick={() => setShowProfile(false)}>
            <X size={20} />
          </button>
        </div>
        
        {isLoggedIn ? (
          <div>
            <div className="bg-linear-to-r from-orange-100 to-yellow-100 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{user.name}</h4>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="flex items-center gap-1">
                  <Phone size={14} />
                  {user.phone}
                </p>
                <p className="flex items-center gap-1 mt-1">
                  <Clock size={14} />
                  Member since {user.joinDate}
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <button 
                onClick={() => {
                  closeAllModals();
                  setShowOrders(true);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
              >
                <Package size={18} className="text-orange-500" />
                My Orders
              </button>
              <button 
                onClick={() => {
                  closeAllModals();
                  setShowWishlist(true);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
              >
                <Heart size={18} className="text-orange-500" />
                Wishlist ({wishlist.length})
              </button>
              <button 
                onClick={() => {
                  closeAllModals();
                  setShowSettings(true);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
              >
                <Settings size={18} className="text-orange-500" />
                Settings
              </button>
              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-lg flex items-center gap-2 text-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">Sign in to access your account and orders</p>
            <button 
              onClick={handleLogin}
              className="w-full bg-linear-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition mb-2"
            >
              Login
            </button>
            <button className="w-full border-2 border-orange-500 text-orange-600 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
              Create Account
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileModal;