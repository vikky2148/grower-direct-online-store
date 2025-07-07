
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Flame, Star, Clock, Eye, Heart, ShoppingCart, Zap } from 'lucide-react';

const Trending = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [trendingView, setTrendingView] = useState('products');

  const trendingStats = [
    {
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      title: 'Most Viewed',
      count: '15.2K',
      description: 'Views this week',
      trend: '+45%'
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      title: 'Hot Sellers',
      count: '892',
      description: 'Items sold today',
      trend: '+23%'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Most Loved',
      count: '3.4K',
      description: 'Wishlist additions',
      trend: '+67%'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Rising Fast',
      count: '156',
      description: 'Rapid popularity gain',
      trend: '+134%'
    }
  ];

  const trendingCategories = [
    { name: 'Sarees', trend: '+58%', color: 'text-green-600', sales: '234 sold', views: '5.2K views' },
    { name: 'Kurtis', trend: '+43%', color: 'text-green-600', sales: '189 sold', views: '4.8K views' },
    { name: 'Lehengas', trend: '+71%', color: 'text-green-600', sales: '98 sold', views: '3.9K views' },
    { name: 'Western Tops', trend: '+29%', color: 'text-green-600', sales: '167 sold', views: '3.1K views' },
    { name: 'Accessories', trend: '+52%', color: 'text-green-600', sales: '298 sold', views: '2.7K views' }
  ];

  const periods = [
    { id: 'day', label: 'Today', icon: '🔥' },
    { id: 'week', label: 'This Week', icon: '⭐' },
    { id: 'month', label: 'This Month', icon: '📈' }
  ];

  const trendingViews = [
    { id: 'products', label: 'Trending Products', icon: <Flame className="h-4 w-4" /> },
    { id: 'categories', label: 'Hot Categories', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'stats', label: 'Live Stats', icon: <Star className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Dynamic Hero Section */}
      <div className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="animate-pulse bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-full mr-4">
                <Flame className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                What's Trending
              </h1>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Stay ahead of the fashion curve with real-time trending items, 
              popular categories, and what's hot in the Indian fashion scene right now!
            </p>
            
            {/* Period & View Selector */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex space-x-2">
                {periods.map((period) => (
                  <button
                    key={period.id}
                    onClick={() => setSelectedPeriod(period.id)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                      selectedPeriod === period.id
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
                    }`}
                  >
                    <span>{period.icon}</span>
                    <span className="font-medium">{period.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="flex space-x-2">
                {trendingViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setTrendingView(view.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      trendingView === view.id
                        ? 'bg-white text-red-600 shadow-md'
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    {view.icon}
                    <span className="text-sm font-medium">{view.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Trending Stats */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Live Trending Metrics</h2>
            <p className="text-gray-600">Real-time data from our fashion platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trendingStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-gray-800">{stat.count}</h3>
                  <p className="text-gray-600 font-medium mb-2">{stat.title}</p>
                  <p className="text-sm text-gray-500 mb-3">{stat.description}</p>
                  <Badge className="bg-green-100 text-green-700 border-0">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Hot Categories Section */}
      <div className="py-16 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔥 Hottest Categories Right Now</h2>
            <p className="text-gray-600">Categories that are gaining massive popularity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trendingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="font-bold text-lg text-gray-800 mb-3">{category.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {category.sales}
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Eye className="h-4 w-4 mr-1" />
                    {category.views}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className={`font-bold text-lg ${category.color}`}>{category.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Flame className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
              <h2 className="text-4xl font-bold">
                Trending Products - {periods.find(p => p.id === selectedPeriod)?.label}
              </h2>
              <Flame className="h-8 w-8 text-red-500 ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most popular items based on real-time data including views, purchases, 
              wishlist additions, and social engagement from fashion enthusiasts across India.
            </p>
            <div className="flex justify-center mt-6">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 text-lg">
                <Clock className="h-4 w-4 mr-2" />
                Updated every 5 minutes
              </Badge>
            </div>
          </div>
          <ProductGrid showTrendingBadge={true} />
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-16 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay on Top of Trends!</h2>
          <p className="text-red-100 mb-8 text-lg">Get daily trending alerts and never miss what's hot</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email for trend alerts"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              Get Alerts
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Trending;
