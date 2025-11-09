"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface CategoriesBarProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (categoryId: string) => void;
}

const CategoriesBar: React.FC<CategoriesBarProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="bg-white shadow-md mb-6">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 gap-6 scrollbar-hide">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center gap-2 min-w-fit transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                <div className={`p-3 rounded-full transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-orange-100 shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-50'
                }`}>
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;