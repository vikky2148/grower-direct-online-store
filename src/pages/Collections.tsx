
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Heart, ShoppingBag, Shirt } from 'lucide-react';

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');

  const collections = [
    {
      id: 'all',
      name: 'All Collections',
      description: 'Browse our complete collection of premium Indian fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      itemCount: 350,
      color: 'from-purple-500 to-pink-500',
      category: 'all'
    },
    {
      id: 'ethnic',
      name: 'Traditional Ethnic',
      description: 'Authentic Indian clothing - Sarees, Lehengas, Kurtis',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=400&fit=crop',
      itemCount: 120,
      color: 'from-orange-500 to-red-500',
      category: 'ethnic'
    },
    {
      id: 'western',
      name: 'Western Collection',
      description: 'Contemporary western wear for the modern woman',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
      itemCount: 85,
      color: 'from-blue-500 to-indigo-500',
      category: 'western'
    },
    {
      id: 'fusion',
      name: 'Indo-Western Fusion',
      description: 'Perfect blend of traditional and contemporary styles',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=400&fit=crop',
      itemCount: 95,
      color: 'from-teal-500 to-green-500',
      category: 'fusion'
    },
    {
      id: 'accessories',
      name: 'Fashion Accessories',
      description: 'Jewelry, bags, scarves and more to complete your look',
      image: 'https://images.unsplash.com/photo-1506629905607-47b417ab8b7d?w=600&h=400&fit=crop',
      itemCount: 50,
      color: 'from-pink-500 to-rose-500',
      category: 'accessories'
    }
  ];

  const collectionFeatures = [
    {
      icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
      title: 'Curated Collections',
      description: 'Handpicked items by fashion experts'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Customer Favorites',
      description: 'Most loved pieces by our community'
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-blue-500" />,
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship'
    },
    {
      icon: <Shirt className="h-8 w-8 text-green-500" />,
      title: 'Latest Trends',
      description: 'Stay updated with fashion-forward designs'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-12 w-12 text-purple-600 mr-4" />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Fashion Collections
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our carefully curated fashion collections, each telling a unique story 
              through exquisite designs, premium fabrics, and timeless elegance.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-lg">350+ Premium Items</Badge>
              <Badge className="bg-pink-100 text-pink-700 px-4 py-2 text-lg">5 Unique Collections</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Collections?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Explore Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {collections.map((collection) => (
              <Card 
                key={collection.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden ${
                  selectedCollection === collection.id ? 'ring-4 ring-purple-500 shadow-2xl' : ''
                }`}
                onClick={() => setSelectedCollection(collection.id)}
              >
                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20`}></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800 font-semibold">
                        {collection.itemCount} Items
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className={`bg-gradient-to-r ${collection.color} text-white border-0 font-semibold`}>
                        Premium Collection
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-3 text-gray-800">{collection.name}</CardTitle>
                  <p className="text-gray-600 mb-6 line-clamp-2">{collection.description}</p>
                  <Button 
                    className={`w-full ${
                      selectedCollection === collection.id 
                        ? `bg-gradient-to-r ${collection.color} text-white hover:opacity-90` 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } transition-all duration-300`}
                  >
                    {selectedCollection === collection.id ? '✓ Selected Collection' : 'Explore Collection'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products from Selected Collection */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {collections.find(c => c.id === selectedCollection)?.name || 'Featured Products'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedCollection === 'all' 
                ? 'Handpicked items from across all our premium collections, showcasing the best of Indian fashion craftsmanship.' 
                : `Discover the finest pieces from our ${collections.find(c => c.id === selectedCollection)?.name} - where tradition meets contemporary style.`
              }
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
