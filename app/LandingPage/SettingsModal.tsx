"use client";

import React from 'react';
import { Settings, X, User, MapPin, Bell, Lock, Edit2 } from 'lucide-react';

interface User {
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  address: string;
}

interface SettingsModalProps {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  user: User | null;
  selectedLocation: string;
  notifications: boolean;
  setNotifications: (notifications: boolean) => void;
  isLoggedIn: boolean;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  showSettings,
  setShowSettings,
  user,
  selectedLocation,
  notifications,
  setNotifications,
  isLoggedIn,
}) => {
  if (!showSettings || !isLoggedIn || !user) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-50 z-40"
        onClick={() => setShowSettings(false)}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-lg shadow-2xl p-6 z-50 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-xl flex items-center gap-2">
            <Settings size={24} className="text-orange-500" />
            Settings
          </h3>
          <button onClick={() => setShowSettings(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Profile Settings */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <User size={18} className="text-orange-500" />
              Profile Information
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{user.phone}</span>
              </div>
              <button className="w-full mt-2 text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center justify-center gap-1">
                <Edit2 size={14} />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Address */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-orange-500" />
              Delivery Address
            </h4>
            <p className="text-sm text-gray-600 mb-2">{user.address}</p>
            <p className="text-sm text-gray-600 mb-2">{selectedLocation}</p>
            <button className="w-full text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center justify-center gap-1">
              <Edit2 size={14} />
              Edit Address
            </button>
          </div>

          {/* Notifications */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Bell size={18} className="text-orange-500" />
              Notifications
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Push Notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition ${
                  notifications ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition transform ${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Lock size={18} className="text-orange-500" />
              Security
            </h4>
            <button className="w-full text-orange-600 hover:text-orange-700 font-medium text-sm">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;