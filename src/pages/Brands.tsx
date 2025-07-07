
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Award, Users } from 'lucide-react';

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const brands = [
    { 
      id: 'all',
      name: 'All Brands', 
      description: 'Browse all premium brands', 
      rating: 4.8, 
      products: 250,
      location: 'India',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      specialty: 'Complete Collection',
      established: '2020'
    },
    { 
      id: 'fabindia',
      name: 'FabIndia', 
      description: 'Authentic Indian ethnic wear and handcrafted products', 
      rating: 4.9, 
      products: 180,
      location: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop',
      specialty: 'Ethnic & Handloom',
      established: '1960'
    },
    { 
      id: 'wforwoman',
      name: 'W for Woman', 
      description: 'Contemporary ethnic wear for modern women', 
      rating: 4.7, 
      products: 120,
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop',
      specialty: 'Contemporary Ethnic',
      established: '2001'
    },
    { 
      id: 'biba',
      name: 'Biba', 
      description: 'Trendy ethnic wear with modern designs', 
      rating: 4.8, 
      products: 200,
      location: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      specialty: 'Fashion Forward Ethnic',
      established: '1988'
    },
    { 
      id: 'anokhi',
      name: 'Anokhi', 
      description: 'Hand block printed textiles and apparel', 
      rating: 4.6, 
      products: 95,
      location: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1506629905607-47b417ab8b7d?w=400&h=300&fit=crop',
      specialty: 'Block Prints',
      established: '1970'
    },
    { 
      id: 'kalamkari',
      name: 'Kalamkari Studio', 
      description: 'Traditional art on contemporary fashion', 
      rating: 4.5, 
      products: 85,
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop',
      specialty: 'Traditional Art',
      established: '1995'
    },
  ];

  const brandStats = [
    { icon: <Award className="h-6 w-6 text-yellow-500" />, label: 'Premium Brands', value: '50+' },
    { icon: <Users className="h-6 w-6 text-blue-500" />, label: 'Happy Customers', value: '10K+' },
    { icon: <Star className="h-6 w-6 text-green-500" />, label: 'Avg. Rating', value: '4.7/5' },
    { icon: <MapPin className="h-6 w-6 text-red-500" />, label: 'Cities Covered', value: '25+' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Premium Brands
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover authentic Indian fashion from the most trusted brands
            </p>
          </div>
          
          {/* Brand Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {brandStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Selection */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Favorite Brand</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <Card 
                key={brand.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedBrand === brand.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedBrand(brand.id)}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={brand.image} 
                      alt={brand.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        Est. {brand.established}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-blue-600">
                        {brand.specialty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{brand.name}</CardTitle>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{brand.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{brand.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{brand.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{brand.products} products</span>
                    <Badge variant="outline">{brand.products > 150 ? 'Bestseller' : 'Featured'}</Badge>
                  </div>
                  
                  <Button 
                    className="w-full"
                    variant={selectedBrand === brand.id ? "default" : "outline"}
                  >
                    {selectedBrand === brand.id ? 'Selected' : 'View Collection'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products from Selected Brand */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {selectedBrand === 'all' ? 'Featured Products from All Brands' : 
               `${brands.find(b => b.id === selectedBrand)?.name || 'Selected Brand'} Collection`}
            </h2>
            <p className="text-gray-600">
              {selectedBrand === 'all' ? 
                'Handpicked items from our premium brand partners' :
                `Discover the best from ${brands.find(b => b.id === selectedBrand)?.name || 'this brand'}`
              }
            </p>
          </div>
          <ProductGrid brand={selectedBrand === 'all' ? '' : selectedBrand} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Brands;
