
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown } from 'lucide-react';

const categories = [
  { name: 'All', count: 12, color: 'from-blue-500 to-purple-500' },
  { name: 'Women', count: 3, color: 'from-pink-500 to-rose-500' },
  { name: 'Men', count: 4, color: 'from-blue-600 to-cyan-600' },
  { name: 'Accessories', count: 1, color: 'from-amber-500 to-orange-500' },
  { name: 'Shoes', count: 2, color: 'from-emerald-500 to-teal-500' },
  { name: 'Bags', count: 1, color: 'from-violet-500 to-purple-500' },
  { name: 'Jewelry', count: 1, color: 'from-pink-600 to-red-500' },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  const handleCategoryClick = (categoryName: string) => {
    console.log('Category filter clicked:', categoryName);
    onCategoryChange(categoryName);
  };

  const handleFilterClick = () => {
    console.log('Filter button clicked');
    // Add filter functionality here
  };

  const activeCount = categories.find(cat => cat.name === activeCategory)?.count || 0;

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-900">Shop by Category</h2>
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex items-center space-x-2 hover:bg-gray-50"
              onClick={handleFilterClick}
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-sm text-gray-500">
            {activeCount} items
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              size="lg"
              onClick={() => handleCategoryClick(category.name)}
              className={`
                relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer
                ${activeCategory === category.name 
                  ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-lg` 
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }
              `}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="font-medium">{category.name}</span>
                <span className={`
                  text-xs px-2 py-0.5 rounded-full
                  ${activeCategory === category.name 
                    ? "bg-white/20 text-white" 
                    : "bg-gray-100 text-gray-600"
                  }
                `}>
                  {category.count}
                </span>
              </span>
              
              {activeCategory === category.name && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
