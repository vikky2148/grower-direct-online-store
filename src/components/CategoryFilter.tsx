
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  'Fires',
  'Filter',
  'Color',
  'Adios',
  'Seast',
  'Pollst',
  'Hotary',
  'Price',
  'Update',
  'Category'
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('Fires');

  return (
    <div className="bg-blue-600 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category 
                  ? "bg-white text-blue-600 hover:bg-gray-100" 
                  : "text-white hover:bg-blue-700 border-none"
              }
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
