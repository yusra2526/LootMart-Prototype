// components/FeaturesBanner.tsx
import React from 'react';
import { Truck, Shield, CreditCard } from 'lucide-react';

const FeaturesBanner = () => {
  return (
    <div className="container mx-auto px-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
          <Truck className="text-orange-500" size={32} />
          <div>
            <h3 className="font-semibold text-gray-800">Free Delivery</h3>
            <p className="text-sm text-gray-600">On orders above Rs 1,999</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
          <Shield className="text-orange-500" size={32} />
          <div>
            <h3 className="font-semibold text-gray-800">Secure Payment</h3>
            <p className="text-sm text-gray-600">100% protected</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
          <CreditCard className="text-orange-500" size={32} />
          <div>
            <h3 className="font-semibold text-gray-800">Cash on Delivery</h3>
            <p className="text-sm text-gray-600">Available nationwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;