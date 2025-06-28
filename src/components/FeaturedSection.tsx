
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleShopCollection = () => {
    console.log('Shop Collection clicked');
    navigate('/collections');
    toast({
      title: "Shop Collection",
      description: "Browse our exclusive designer collection!",
    });
  };

  const handleViewLookbook = () => {
    console.log('View Lookbook clicked');
    toast({
      title: "View Lookbook",
      description: "Lookbook feature coming soon!",
    });
  };

  const handleViewProduct = (productName: string) => {
    console.log(`View ${productName} clicked`);
    toast({
      title: "Product Details",
      description: `${productName} details coming soon!`,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium">Limited Edition</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Exclusive
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Designer
                </span>
                <br />
                <span className="text-white">Collection</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Discover our hand-picked selection of luxury pieces from world-renowned designers. 
                Each item tells a story of craftsmanship and elegance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={handleShopCollection}
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
                onClick={handleViewLookbook}
              >
                View Lookbook
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">Free Shipping</span>
                </div>
                <p className="text-sm text-gray-400">On orders over $150</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-pink-400" />
                  <span className="font-semibold">Premium Quality</span>
                </div>
                <p className="text-sm text-gray-400">Handcrafted materials</p>
              </div>
            </div>
          </div>
          
          {/* Featured Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Main Featured Item */}
              <div className="col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="text-6xl">👗</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Signature Dress</h3>
                <p className="text-gray-300 text-sm mb-4">Limited Edition Piece</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">$599</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => handleViewProduct('Signature Dress')}
                  >
                    View
                  </Button>
                </div>
              </div>
              
              {/* Secondary Items */}
              <div 
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                onClick={() => handleViewProduct('Premium Blazer')}
              >
                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">👔</div>
                </div>
                <h4 className="font-semibold text-white text-sm">Premium Blazer</h4>
                <p className="text-gray-400 text-xs">$299</p>
              </div>
              
              <div 
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                onClick={() => handleViewProduct('Designer Heels')}
              >
                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-3xl">👠</div>
                </div>
                <h4 className="font-semibold text-white text-sm">Designer Heels</h4>
                <p className="text-gray-400 text-xs">$199</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full p-3 shadow-lg animate-bounce">
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
