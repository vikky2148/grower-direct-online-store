
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Timer, Percent, Tag, Gift, Clock, Flame } from 'lucide-react';

const Sale = () => {
  const [selectedDiscount, setSelectedDiscount] = useState('all');
  
  // Countdown timer state (for demo purposes)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  const discountRanges = [
    { id: 'all', label: 'All Offers', count: 156 },
    { id: '10-30', label: '10-30% Off', count: 45 },
    { id: '30-50', label: '30-50% Off', count: 67 },
    { id: '50-70', label: '50-70% Off', count: 32 },
    { id: '70+', label: '70%+ Off', count: 12 }
  ];

  const saleHighlights = [
    {
      icon: <Flame className="h-8 w-8 text-red-500" />,
      title: 'Flash Sale',
      subtitle: 'Limited Time Only',
      description: 'Up to 80% off on selected items',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Gift className="h-8 w-8 text-purple-500" />,
      title: 'Buy 2 Get 1',
      subtitle: 'Special Combo Offer',
      description: 'On ethnic wear collection',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Percent className="h-8 w-8 text-green-500" />,
      title: 'Flat 40% Off',
      subtitle: 'No Minimum Purchase',
      description: 'On western wear collection',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Tag className="h-8 w-8 text-blue-500" />,
      title: 'Clearance Sale',
      subtitle: 'Final Markdowns',
      description: 'Up to 90% off on last season',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Countdown */}
      <div className="py-16 bg-gradient-to-r from-red-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Flame className="h-12 w-12 text-red-500 mr-3 animate-pulse" />
              <Badge variant="destructive" className="text-lg px-4 py-2 mb-4">
                🔥 MEGA SALE
              </Badge>
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Up to 90% Off
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Biggest sale of the year! Limited time offers on premium fashion items
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">Sale Ends In:</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-red-500 text-white rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="bg-red-500 text-white rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="bg-red-500 text-white rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div className="bg-red-500 text-white rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Highlights */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleHighlights.map((highlight, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardContent className="p-6 relative">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600 text-center mb-2 font-medium">{highlight.subtitle}</p>
                  <p className="text-sm text-gray-500 text-center">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Discount Filter */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Shop by Discount</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {discountRanges.map((range) => (
              <Button
                key={range.id}
                variant={selectedDiscount === range.id ? "default" : "outline"}
                onClick={() => setSelectedDiscount(range.id)}
                className="relative"
              >
                {range.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-red-100 text-red-700 text-xs"
                >
                  {range.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Sale Products */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {selectedDiscount === 'all' ? 'All Sale Items' : `Items with ${discountRanges.find(r => r.id === selectedDiscount)?.label}`}
            </h2>
            <p className="text-gray-600">
              Don't miss out on these incredible deals - limited stock available!
            </p>
          </div>
          <ProductGrid showOnSaleOnly={true} discountRange={selectedDiscount} />
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Sale!</h2>
          <p className="text-red-100 mb-8">Subscribe to get notified about our exclusive sales and offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" className="px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sale;
