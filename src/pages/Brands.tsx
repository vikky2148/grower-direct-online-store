
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Brands = () => {
  const brands = [
    { name: 'Luxury Brand', description: 'Premium fashion with timeless elegance', rating: 4.9, products: 150 },
    { name: 'Urban Style', description: 'Contemporary streetwear collection', rating: 4.7, products: 89 },
    { name: 'Classic Couture', description: 'High-end designer pieces', rating: 4.8, products: 200 },
    { name: 'Modern Chic', description: 'Trendy and affordable fashion', rating: 4.6, products: 120 },
    { name: 'Elite Fashion', description: 'Exclusive luxury collection', rating: 4.9, products: 95 },
    { name: 'Style Studio', description: 'Creative and unique designs', rating: 4.5, products: 110 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Our Brands</h1>
          <p className="text-gray-600 text-center mb-12">Discover premium fashion from world-class brands</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-4xl">👑</div>
                  </div>
                  <CardTitle className="text-xl">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{brand.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{brand.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{brand.products} products</span>
                  </div>
                  <Button className="w-full">
                    View Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
