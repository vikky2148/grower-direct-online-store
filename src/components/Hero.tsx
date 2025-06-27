
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Fashion
              <span className="text-blue-600 block">For Every Style</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the latest trends and timeless classics. Shop quality clothing 
              that reflects your unique style and elevates your wardrobe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Premium Quality</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Trusted by 1000+</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Secure Shopping</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-16 w-16 text-white" />
                </div>
                <p className="text-lg font-medium">Fashion Collection Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
