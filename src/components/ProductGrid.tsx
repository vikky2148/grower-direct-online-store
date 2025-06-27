
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Elegant Silk Blouse',
    price: 129.99,
    originalPrice: 179.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Paris',
    rating: 5,
    category: 'Women\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: 'Premium Denim Jacket',
    price: 189.99,
    originalPrice: 249.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Milan',
    rating: 4,
    category: 'Men\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    badge: 'Limited',
  },
  {
    id: '3',
    name: 'Designer Wool Coat',
    price: 349.99,
    originalPrice: 449.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'London',
    rating: 5,
    category: 'Women\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400',
    badge: 'New',
  },
  {
    id: '4',
    name: 'Minimalist Cotton Tee',
    price: 59.99,
    originalPrice: 79.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Tokyo',
    rating: 4,
    category: 'Men\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: '5',
    name: 'Luxury Leather Jacket',
    price: 599.99,
    originalPrice: 799.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'New York',
    rating: 5,
    category: 'Outerwear',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    badge: 'Exclusive',
  },
  {
    id: '6',
    name: 'Smart Casual Shirt',
    price: 89.99,
    originalPrice: 119.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Stockholm',
    rating: 4,
    category: 'Men\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
  },
];

const ProductGrid = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div>
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <span>Home</span>
              <span>{'>'}</span>
              <span>Collections</span>
              <span>{'>'}</span>
              <span className="text-gray-900 font-medium">Premium Fashion</span>
            </nav>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Premium Collection
            </h2>
            <p className="text-gray-600">Discover our curated selection of luxury fashion pieces</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="p-2"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="p-2"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="outline" className="hidden md:flex items-center space-x-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Sort by</span>
            </Button>
            
            <div className="text-right">
              <p className="text-sm text-gray-500">Showing Results</p>
              <p className="font-semibold text-gray-900">{sampleProducts.length} Products</p>
            </div>
          </div>
        </div>
        
        <div className={`
          grid gap-6 
          ${viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
          }
        `}>
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} viewMode={viewMode} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
