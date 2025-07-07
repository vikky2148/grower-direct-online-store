
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Fire, Star, Clock } from 'lucide-react';

const Trending = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const trendingStats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: 'Most Viewed',
      count: '2.5K+',
      description: 'This week'
    },
    {
      icon: <Fire className="h-8 w-8 text-red-500" />,
      title: 'Hot Sellers',
      count: '180+',
      description: 'Items sold today'
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: 'Top Rated',
      count: '4.8/5',
      description: 'Average rating'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: 'New Arrivals',
      count: '45+',
      description: 'This month'
    }
  ];

  const trendingCategories = [
    { name: 'Sarees', trend: '+25%', color: 'text-green-600' },
    { name: 'Kurtis', trend: '+18%', color: 'text-green-600' },
    { name: 'Lehengas', trend: '+32%', color: 'text-green-600' },
    { name: 'Suits', trend: '+15%', color: 'text-green-600' },
    { name: 'Accessories', trend: '+22%', color: 'text-green-600' }
  ];

  const periods = [
    { id: 'day', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Fire className="h-12 w-12 text-red-500 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Trending Now
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Stay ahead with the latest fashion trends and customer favorites
            </p>
            
            {/* Period Selector */}
            <div className="flex justify-center space-x-2 mb-8">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedPeriod === period.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-red-50'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trending Stats */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trendingStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stat.count}</h3>
                  <p className="text-gray-600 font-medium">{stat.title}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trending Categories */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Trending Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {trendingCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className={`font-bold ${category.color}`}>{category.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trending Products - {periods.find(p => p.id === selectedPeriod)?.label}
            </h2>
            <p className="text-gray-600">
              Most popular items based on views, purchases, and customer engagement
            </p>
          </div>
          <ProductGrid showTrendingBadge={true} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Trending;
