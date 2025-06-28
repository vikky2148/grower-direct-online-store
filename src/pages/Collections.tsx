
import React from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Collections = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Our Collections</h1>
          <p className="text-gray-600 text-center mb-8">Discover our curated fashion collections</p>
        </div>
      </div>
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Collections;
