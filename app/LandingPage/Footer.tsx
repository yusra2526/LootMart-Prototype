"use client";

import React from "react";
import { Package, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  selectedLocation: string;
}

const Footer: React.FC<FooterProps> = ({ selectedLocation }) => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3><span><img src="./image.png"></img></span></h3>
            </div>
            <p className="text-gray-200">Pakistan's #1 online shopping destination. Shop with confidence!</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
              <li className="hover:text-white cursor-pointer">Shipping Info</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About LootMart</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center gap-2"><Phone size={14} /> 0300-1234567</li>
              <li className="flex items-center gap-2"><Mail size={14} /> support@lootmart.pk</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> {selectedLocation}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-200">
          <p>&copy; 2025 LootMart. All rights reserved. | Made in Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
