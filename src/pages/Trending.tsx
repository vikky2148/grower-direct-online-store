
import React from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Trending = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Trending Now</h1>
          <p className="text-gray-600 text-center mb-8">Stay ahead with the latest fashion trends</p>
        </div>
      </div>
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Trending;
