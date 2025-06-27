
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  'All Products',
  'Vegetables',
  'Fruits',
  'Dairy',
  'Herbs & Spices',
  'Grains',
  'Meat & Poultry',
  'Bakery'
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  return (
    <div className="bg-white border-b py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
