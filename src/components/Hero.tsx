import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleExploreCollection = () => {
    console.log('Explore Collection clicked');
    navigate('/collections');
    toast({
      title: "Explore Collection",
      description: "Welcome to our curated fashion collections!",
    });
  };

  const handleWatchLookbook = () => {
    console.log('Watch Lookbook clicked');
    toast({
      title: "Watch Lookbook",
      description: "Lookbook video feature coming soon!",
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">New Collection Available</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Fashion
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Redefined.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover our curated collection of premium fashion pieces that blend timeless elegance with contemporary style.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={handleExploreCollection}
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                onClick={handleWatchLookbook}
              >
                Watch Lookbook
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-2xl font-bold text-gray-900 ml-2">4.9</span>
                </div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-700">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="text-white text-center z-10">
                      <div className="text-6xl mb-4">👗</div>
                      <h3 className="text-xl font-semibold">Premium Collection</h3>
                      <p className="text-sm opacity-90 mt-1">Curated for You</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1000">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full p-3 shadow-lg animate-bounce delay-1500">
                <Zap className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
