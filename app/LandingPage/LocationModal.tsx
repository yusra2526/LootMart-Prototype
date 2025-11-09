// components/LocationModal.tsx
import React from 'react';
import { MapPin, X } from 'lucide-react';

const LocationModal = ({ showLocation, setShowLocation, cities, selectedLocation, setSelectedLocation }) => {
  if (!showLocation) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-40"
        onClick={() => setShowLocation(false)}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-lg shadow-2xl p-6 z-50 w-full max-w-md max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <MapPin size={20} className="text-orange-500" />
            Select Your Location
          </h3>
          <button onClick={() => setShowLocation(false)}>
            <X size={20} />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">Choose your city for accurate delivery estimates</p>
        
        <div className="space-y-2">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => {
                setSelectedLocation(city);
                setShowLocation(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition flex items-center justify-between ${
                selectedLocation === city
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <MapPin size={18} className={selectedLocation === city ? 'text-orange-500' : 'text-gray-400'} />
                {city}
              </span>
              {selectedLocation === city && (
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationModal;