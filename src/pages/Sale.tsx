
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Timer, Percent, Tag, Gift, Clock, Flame, Zap, Target, ShoppingBag } from 'lucide-react';

const Sale = () => {
  const [selectedDiscount, setSelectedDiscount] = useState('all');
  const [saleType, setSaleType] = useState('all');
  
  // Enhanced countdown timer with real-time updates
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const discountRanges = [
    { id: 'all', label: 'All Deals', count: 325, color: 'bg-blue-500' },
    { id: '10-30', label: '10-30% Off', count: 95, color: 'bg-green-500' },
    { id: '30-50', label: '30-50% Off', count: 128, color: 'bg-orange-500' },
    { id: '50-70', label: '50-70% Off', count: 87, color: 'bg-red-500' },
    { id: '70+', label: '70%+ Off', count: 15, color: 'bg-purple-500' }
  ];

  const saleTypes = [
    { id: 'all', label: 'All Sales', icon: <ShoppingBag className="h-4 w-4" /> },
    { id: 'flash', label: 'Flash Sale', icon: <Zap className="h-4 w-4" /> },
    { id: 'clearance', label: 'Clearance', icon: <Target className="h-4 w-4" /> },
    { id: 'combo', label: 'Combo Deals', icon: <Gift className="h-4 w-4" /> }
  ];

  const saleHighlights = [
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: 'Lightning Flash Sale',
      subtitle: 'Limited Time - 2 Hours Only!',
      description: 'Up to 80% off on premium ethnic wear',
      color: 'from-yellow-500 to-orange-500',
      urgency: 'ENDING SOON',
      savings: 'Save up to ₹5,000'
    },
    {
      icon: <Gift className="h-10 w-10 text-purple-500" />,
      title: 'Buy 2 Get 1 FREE',
      subtitle: 'Mix & Match Collection',
      description: 'On designer kurtis and western tops',
      color: 'from-purple-500 to-pink-500',
      urgency: 'LIMITED STOCK',
      savings: 'Extra 33% savings'
    },
    {
      icon: <Percent className="h-10 w-10 text-green-500" />,
      title: 'Flat 50% Off',
      subtitle: 'No Code Required',
      description: 'Entire saree and lehenga collection',
      color: 'from-green-500 to-teal-500',
      urgency: 'TODAY ONLY',
      savings: 'Instant discount'
    },
    {
      icon: <Tag className="h-10 w-10 text-blue-500" />,
      title: 'End of Season Sale',
      subtitle: 'Final Clearance',
      description: 'Last chance - up to 90% off',
      color: 'from-blue-500 to-indigo-500',
      urgency: 'LAST CHANCE',
      savings: 'Maximum savings'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section with Live Countdown */}
      <div className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="animate-bounce bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-full mr-4">
                <Flame className="h-12 w-12 text-white" />
              </div>
              <Badge variant="destructive" className="text-2xl px-6 py-3 mb-4 animate-pulse">
                🔥 MEGA FASHION SALE
              </Badge>
              <div className="animate-bounce bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-full ml-4">
                <Flame className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Up to 90% Off
            </h1>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              India's biggest fashion sale is here! Premium ethnic wear, trendy western outfits, 
              and exclusive designer pieces at unbeatable prices.
            </p>
            
            {/* Enhanced Countdown Timer */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto mb-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
                <h3 className="text-3xl font-bold text-gray-800">Sale Ends In:</h3>
                <Timer className="h-8 w-8 text-red-500 ml-3 animate-pulse" />
              </div>
              <div className="grid grid-cols-4 gap-6 text-center">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' }
                ].map((time, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-xl p-6 transform hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold mb-2">{time.value.toString().padStart(2, '0')}</div>
                    <div className="text-sm font-medium">{time.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-lg">
                  ⚡ Hurry! Prices go back up after timer ends
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Type Filter */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-8">
            {saleTypes.map((type) => (
              <Button
                key={type.id}
                variant={saleType === type.id ? "default" : "outline"}
                onClick={() => setSaleType(type.id)}
                className="flex items-center space-x-2"
              >
                {type.icon}
                <span>{type.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Sale Highlights */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">🔥 Hottest Deals Right Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saleHighlights.map((highlight, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-500 text-white text-xs animate-pulse">
                      {highlight.urgency}
                    </Badge>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-gradient-to-br ${highlight.color} bg-opacity-10 rounded-full`}>
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{highlight.title}</h3>
                  <p className="text-sm text-center mb-2 font-semibold text-gray-700">{highlight.subtitle}</p>
                  <p className="text-sm text-gray-600 text-center mb-4">{highlight.description}</p>
                  <div className="text-center">
                    <Badge className={`bg-gradient-to-r ${highlight.color} text-white border-0`}>
                      {highlight.savings}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Discount Filter */}
      <div className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Shop by Discount Range</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {discountRanges.map((range) => (
              <Button
                key={range.id}
                variant={selectedDiscount === range.id ? "default" : "outline"}
                onClick={() => setSelectedDiscount(range.id)}
                className={`relative px-6 py-4 ${
                  selectedDiscount === range.id ? `${range.color} text-white` : ''
                }`}
              >
                <span className="font-semibold">{range.label}</span>
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-white/90 text-gray-800 text-sm font-bold"
                >
                  {range.count} items
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Sale Products with Enhanced Header */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Flame className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
              <h2 className="text-4xl font-bold">
                {selectedDiscount === 'all' ? 'All Sale Items' : 
                 `Items with ${discountRanges.find(r => r.id === selectedDiscount)?.label}`}
              </h2>
              <Flame className="h-8 w-8 text-red-500 ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on these incredible deals! Limited stock available and prices valid only while the sale lasts.
              {selectedDiscount !== 'all' && (
                <span className="block mt-2 text-red-600 font-semibold">
                  {discountRanges.find(r => r.id === selectedDiscount)?.count} amazing deals in this range!
                </span>
              )}
            </p>
          </div>
          <ProductGrid showOnSaleOnly={true} discountRange={selectedDiscount} />
        </div>
      </div>

      {/* Enhanced Newsletter Signup */}
      <div className="py-20 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Never Miss a Sale Again!</h2>
            <p className="text-red-100 mb-8 text-xl">
              Be the first to know about flash sales, exclusive offers, and limited-time deals. 
              Join 50,000+ fashion lovers already saving big!
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email for exclusive deals"
                className="flex-1 px-6 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-white/50 text-gray-800"
              />
              <Button className="px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-bold text-lg">
                Get Sale Alerts
              </Button>
            </div>
            <p className="text-red-100 text-sm mt-4">
              📧 Get instant notifications for flash sales • 🎁 Exclusive subscriber-only deals • 🚀 Early access to sales
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sale;
