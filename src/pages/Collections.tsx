
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');

  const collections = [
    {
      id: 'all',
      name: 'All Collections',
      description: 'Browse our complete collection',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      itemCount: 120
    },
    {
      id: 'ethnic',
      name: 'Ethnic Wear',
      description: 'Traditional Indian clothing',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop',
      itemCount: 45
    },
    {
      id: 'western',
      name: 'Western Wear',
      description: 'Modern and trendy outfits',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      itemCount: 38
    },
    {
      id: 'fusion',
      name: 'Indo-Western',
      description: 'Perfect blend of traditional and modern',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop',
      itemCount: 25
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Complete your look',
      image: 'https://images.unsplash.com/photo-1506629905607-47b417ab8b7d?w=400&h=300&fit=crop',
      itemCount: 32
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Collections
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our curated fashion collections designed for every occasion
            </p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {collections.map((collection) => (
              <Card 
                key={collection.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedCollection === collection.id ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedCollection(collection.id)}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {collection.itemCount} items
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{collection.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <Button 
                    variant={selectedCollection === collection.id ? "default" : "outline"}
                    className="w-full"
                  >
                    {selectedCollection === collection.id ? 'Selected' : 'View Collection'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {collections.find(c => c.id === selectedCollection)?.name || 'Featured Products'}
            </h2>
            <p className="text-gray-600">
              Handpicked items from our {selectedCollection === 'all' ? 'entire collection' : 'selected collection'}
            </p>
          </div>
          <ProductGrid category={selectedCollection === 'all' ? '' : selectedCollection} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;
