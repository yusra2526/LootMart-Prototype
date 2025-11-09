"use client";

import React from 'react';
import { Package, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  selectedLocation: string;
}

const Footer: React.FC<FooterProps> = ({ selectedLocation }) => {
  return (
    <footer className="bg-linear-to-r from-orange-500 to-yellow-500 text-center text-white py-4">
      
          <p>&copy; 2025 LootMart. All rights reserved. | Made in Pakistan</p>

    </footer>
  );
};

export default Footer;