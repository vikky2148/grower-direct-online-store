
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Organic Carrots',
    price: 3.99,
    unit: 'lb',
    farmer: 'Green Valley Farm',
    location: 'Vermont',
    rating: 5,
    category: 'Vegetables',
    inStock: true,
  },
  {
    id: '2',
    name: 'Fresh Strawberries',
    price: 5.99,
    unit: 'basket',
    farmer: 'Berry Hills Farm',
    location: 'California',
    rating: 4,
    category: 'Fruits',
    inStock: true,
  },
  {
    id: '3',
    name: 'Artisan Cheese',
    price: 12.99,
    unit: 'wheel',
    farmer: 'Mountain Dairy',
    location: 'Wisconsin',
    rating: 5,
    category: 'Dairy',
    inStock: false,
  },
  {
    id: '4',
    name: 'Heirloom Tomatoes',
    price: 4.50,
    unit: 'lb',
    farmer: 'Sunset Gardens',
    location: 'Oregon',
    rating: 4,
    category: 'Vegetables',
    inStock: true,
  },
  {
    id: '5',
    name: 'Free-Range Eggs',
    price: 6.99,
    unit: 'dozen',
    farmer: 'Happy Hen Farm',
    location: 'New York',
    rating: 5,
    category: 'Dairy',
    inStock: true,
  },
  {
    id: '6',
    name: 'Fresh Basil',
    price: 2.99,
    unit: 'bunch',
    farmer: 'Herb Garden Co.',
    location: 'Florida',
    rating: 4,
    category: 'Herbs & Spices',
    inStock: true,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the freshest produce and artisanal goods from local farmers in your area
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
