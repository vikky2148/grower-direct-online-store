
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import FeaturedSection from '@/components/FeaturedSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryFilter />
      <ProductGrid />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
