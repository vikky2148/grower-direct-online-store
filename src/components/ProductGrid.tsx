
import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Classic White Button Shirt',
    price: 89.99,
    unit: 'piece',
    farmer: 'FashionTrend',
    location: 'New York',
    rating: 5,
    category: 'Women\'s Clothing',
    inStock: true,
  },
  {
    id: '2',
    name: 'Premium Denim Jeans',
    price: 129.99,
    unit: 'piece',
    farmer: 'FashionTrend',
    location: 'California',
    rating: 4,
    category: 'Men\'s Clothing',
    inStock: true,
  },
  {
    id: '3',
    name: 'Leather Handbag',
    price: 199.99,
    unit: 'piece',
    farmer: 'FashionTrend',
    location: 'Texas',
    rating: 5,
    category: 'Bags',
    inStock: false,
  },
  {
    id: '4',
    name: 'Silk Evening Dress',
    price: 249.99,
    unit: 'piece',
    farmer: 'FashionTrend',
    location: 'Florida',
    rating: 4,
    category: 'Women\'s Clothing',
    inStock: true,
  },
  {
    id: '5',
    name: 'Designer Sneakers',
    price: 159.99,
    unit: 'pair',
    farmer: 'FashionTrend',
    location: 'Washington',
    rating: 5,
    category: 'Shoes',
    inStock: true,
  },
  {
    id: '6',
    name: 'Gold Statement Necklace',
    price: 89.99,
    unit: 'piece',
    farmer: 'FashionTrend',
    location: 'Nevada',
    rating: 4,
    category: 'Jewelry',
    inStock: true,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fashion pieces for every occasion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
