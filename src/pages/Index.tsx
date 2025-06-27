
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import FarmerSpotlight from '@/components/FarmerSpotlight';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryFilter />
      <ProductGrid />
      <FarmerSpotlight />
      <Footer />
    </div>
  );
};

export default Index;
