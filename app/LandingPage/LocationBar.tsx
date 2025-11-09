// components/LocationBar.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationBar = ({ selectedLocation, showLocation, setShowLocation, closeAllModals }) => {
  return (
    <div className="bg-white shadow-md py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="text-orange-500" size={20} />
            <span className="font-medium">Deliver to:</span>
            <span className="text-orange-600 font-semibold">{selectedLocation}</span>
          </div>
          <button 
            onClick={() => {
              closeAllModals();
              setShowLocation(!showLocation);
            }}
            className="text-sm text-orange-600 hover:text-orange-700 font-medium"
          >
            Change Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationBar;