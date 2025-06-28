
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Badge } from '@/components/ui/badge';

const Sale = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-12 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="destructive" className="mb-4 text-lg px-4 py-2">
              🔥 MEGA SALE
            </Badge>
            <h1 className="text-4xl font-bold mb-2">Up to 70% Off</h1>
            <p className="text-gray-600">Limited time offers on premium fashion items</p>
          </div>
        </div>
      </div>
      <ProductGrid showOnSaleOnly={true} />
      <Footer />
    </div>
  );
};

export default Sale;
