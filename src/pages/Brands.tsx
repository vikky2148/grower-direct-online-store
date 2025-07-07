
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Award, Users, Crown, Verified, Heart, TrendingUp, Shield, Calendar, Package } from 'lucide-react';

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [brandCategory, setBrandCategory] = useState('all');

  const brands = [
    { 
      id: 'all',
      name: 'All Premium Brands', 
      description: 'Explore our complete collection of verified premium brands', 
      rating: 4.8, 
      products: 850,
      location: 'Pan India',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop',
      specialty: 'Complete Collection',
      established: '2020',
      tier: 'premium',
      followers: '50K+',
      verified: true,
      discount: 0
    },
    { 
      id: 'fabindia',
      name: 'FabIndia', 
      description: 'Authentic Indian ethnic wear, handcrafted textiles and sustainable fashion', 
      rating: 4.9, 
      products: 280,
      location: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=400&fit=crop',
      specialty: 'Ethnic & Handloom',
      established: '1960',
      tier: 'heritage',
      followers: '25K+',
      verified: true,
      discount: 15
    },
    { 
      id: 'wforwoman',
      name: 'W for Woman', 
      description: 'Contemporary ethnic wear designed for the modern Indian woman', 
      rating: 4.7, 
      products: 195,
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=400&fit=crop',
      specialty: 'Contemporary Ethnic',
      established: '2001',
      tier: 'premium',
      followers: '18K+',
      verified: true,
      discount: 25
    },
    { 
      id: 'biba',
      name: 'Biba', 
      description: 'Trendy ethnic wear with modern designs and vibrant colors', 
      rating: 4.8, 
      products: 320,
      location: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop',
      specialty: 'Fashion Forward Ethnic',
      established: '1988',
      tier: 'popular',
      followers: '32K+',
      verified: true,
      discount: 30
    },
    { 
      id: 'anokhi',
      name: 'Anokhi', 
      description: 'Hand block printed textiles and apparel celebrating Indian craftsmanship', 
      rating: 4.6, 
      products: 145,
      location: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1506629905607-47b417ab8b7d?w=500&h=400&fit=crop',
      specialty: 'Block Prints & Artisan',
      established: '1970',
      tier: 'artisan',
      followers: '12K+',
      verified: true,
      discount: 20
    },
    { 
      id: 'kalamkari',
      name: 'Kalamkari Studio', 
      description: 'Traditional Kalamkari art reimagined on contemporary fashion pieces', 
      rating: 4.5, 
      products: 120,
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=400&fit=crop',
      specialty: 'Traditional Art & Prints',
      established: '1995',
      tier: 'artisan',
      followers: '8K+',
      verified: true,
      discount: 35
    },
  ];

  const brandStats = [
    { icon: <Award className="h-8 w-8 text-yellow-500" />, label: 'Verified Brands', value: '25+', description: 'Quality assured' },
    { icon: <Users className="h-8 w-8 text-blue-500" />, label: 'Happy Customers', value: '50K+', description: 'Satisfied shoppers' },
    { icon: <Star className="h-8 w-8 text-green-500" />, label: 'Average Rating', value: '4.7/5', description: 'Customer satisfaction' },
    { icon: <Crown className="h-8 w-8 text-purple-500" />, label: 'Premium Partners', value: '15+', description: 'Exclusive brands' }
  ];

  const brandCategories = [
    { id: 'all', name: 'All Brands', count: 25 },
    { id: 'heritage', name: 'Heritage Brands', count: 6 },
    { id: 'premium', name: 'Premium', count: 12 },
    { id: 'artisan', name: 'Artisan', count: 7 }
  ];

  const brandBenefits = [
    { icon: <Shield className="h-6 w-6 text-green-500" />, title: 'Authenticity Guarantee', description: 'All products are 100% authentic and verified' },
    { icon: <Package className="h-6 w-6 text-blue-500" />, title: 'Free Shipping', description: 'Free delivery on orders above ₹999' },
    { icon: <Heart className="h-6 w-6 text-red-500" />, title: 'Easy Returns', description: '30-day hassle-free return policy' },
    { icon: <Award className="h-6 w-6 text-purple-500" />, title: 'Quality Assured', description: 'Rigorous quality checks before dispatch' }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'heritage': return 'from-amber-500 to-orange-500';
      case 'premium': return 'from-blue-500 to-indigo-500';
      case 'artisan': return 'from-green-500 to-teal-500';
      case 'popular': return 'from-pink-500 to-rose-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'heritage': return { text: 'Heritage Brand', color: 'bg-amber-100 text-amber-700' };
      case 'premium': return { text: 'Premium', color: 'bg-blue-100 text-blue-700' };
      case 'artisan': return { text: 'Artisan Craft', color: 'bg-green-100 text-green-700' };
      case 'popular': return { text: 'Popular Choice', color: 'bg-pink-100 text-pink-700' };
      default: return { text: 'Featured', color: 'bg-gray-100 text-gray-700' };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Premium Hero Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Crown className="h-12 w-12 text-blue-600 mr-4" />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Premium Brands
              </h1>
              <Verified className="h-12 w-12 text-blue-600 ml-4" />
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Partner with India's most trusted fashion brands. From heritage labels with decades of legacy 
              to contemporary designers pushing fashion boundaries - discover authentic style and quality.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-lg">✓ 100% Authentic</Badge>
              <Badge className="bg-green-100 text-green-700 px-4 py-2 text-lg">✓ Quality Guaranteed</Badge>
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-lg">✓ Verified Partners</Badge>
            </div>
          </div>
          
          {/* Enhanced Brand Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {brandStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Shop Our Partner Brands?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Category Filter */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 flex-wrap">
            {brandCategories.map((category) => (
              <Button
                key={category.id}
                variant={brandCategory === category.id ? "default" : "outline"}
                onClick={() => setBrandCategory(category.id)}
                className="mb-2"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Brand Selection */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Favorite Brand</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands
              .filter(brand => brandCategory === 'all' || brand.tier === brandCategory)
              .map((brand) => (
              <Card 
                key={brand.id} 
                className={`cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 overflow-hidden ${
                  selectedBrand === brand.id ? 'ring-4 ring-blue-500 shadow-2xl scale-105' : ''
                }`}
                onClick={() => setSelectedBrand(brand.id)}
              >
                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={brand.image} 
                      alt={brand.name}
                      className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${getTierColor(brand.tier)} opacity-10`}></div>
                    
                    {/* Enhanced Badges */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      {brand.verified && (
                        <Badge className="bg-green-500 text-white flex items-center">
                          <Verified className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                      <Badge className={getTierBadge(brand.tier).color}>
                        {getTierBadge(brand.tier).text}
                      </Badge>
                      {brand.discount > 0 && (
                        <Badge className="bg-red-500 text-white">
                          {brand.discount}% OFF
                        </Badge>
                      )}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <Badge className={`bg-gradient-to-r ${getTierColor(brand.tier)} text-white border-0 font-semibold`}>
                        Est. {brand.established}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{brand.name}</CardTitle>
                    {brand.tier === 'heritage' && <Crown className="h-5 w-5 text-amber-500" />}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{brand.description}</p>
                  
                  {/* Enhanced Stats */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{brand.rating}</span>
                        <span className="text-xs text-gray-400">/5</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{brand.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{brand.products} products</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-gray-600">{brand.followers}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="w-full justify-center py-2">
                      {brand.specialty}
                    </Badge>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      selectedBrand === brand.id
                        ? `bg-gradient-to-r ${getTierColor(brand.tier)} text-white hover:opacity-90`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } transition-all duration-300`}
                  >
                    {selectedBrand === brand.id ? '✓ Selected Brand' : 'Explore Collection'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Spotlight */}
      {selectedBrand !== 'all' && (
        <div className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Brand Spotlight: {brands.find(b => b.id === selectedBrand)?.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {brands.find(b => b.id === selectedBrand)?.description}
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Est. {brands.find(b => b.id === selectedBrand)?.established}
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-4 py-2">
                  <Package className="h-4 w-4 mr-2" />
                  {brands.find(b => b.id === selectedBrand)?.products} Products
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Products from Selected Brand */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {selectedBrand === 'all' ? 'Featured from All Premium Brands' : 
               `${brands.find(b => b.id === selectedBrand)?.name} Collection`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedBrand === 'all' ? 
                'Handpicked premium items from our verified brand partners, showcasing the finest in Indian fashion craftsmanship and design excellence.' :
                `Discover the signature style and quality that makes ${brands.find(b => b.id === selectedBrand)?.name} a trusted name in Indian fashion.`
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
