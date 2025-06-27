
import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Classic Blazer',
    price: 299.99,
    originalPrice: 399.99,
    unit: 'piece',
    brand: 'FashionTrend',
    location: 'New York',
    rating: 5,
    category: 'Women\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
  },
  {
    id: '2',
    name: 'Premium Denim',
    price: 129.99,
    originalPrice: 179.99,
    unit: 'piece',
    brand: 'FashionTrend',
    location: 'California',
    rating: 4,
    category: 'Men\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
  },
  {
    id: '3',
    name: 'Elegant Coat',
    price: 399.99,
    originalPrice: 499.99,
    unit: 'piece',
    brand: 'FashionTrend',
    location: 'Texas',
    rating: 5,
    category: 'Women\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400',
  },
  {
    id: '4',
    name: 'Casual Tee',
    price: 49.99,
    originalPrice: 69.99,
    unit: 'piece',
    brand: 'FashionTrend',
    location: 'Florida',
    rating: 4,
    category: 'Men\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: '5',
    name: 'Designer Jacket',
    price: 259.99,
    originalPrice: 329.99,
    unit: 'piece',
    brand: 'FashionTrend',
    location: 'Washington',
    rating: 5,
    category: 'Outerwear',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
  },
  {
    id: '6',
    name: 'Smart Shirt',
    price: 89.99,
    originalPrice: 119.99,
    unit: 'piece',
    brand: 'FashionTrend',
    location: 'Nevada',
    rating: 4,
    category: 'Men\'s Clothing',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Plants <span className="text-gray-400">{'>'}</span> Calate Jakket
            </h2>
            <p className="text-gray-600">Discover our latest collection</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Sorted Results</p>
            <p className="font-semibold">{sampleProducts.length} Items Found</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
