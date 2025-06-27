
import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured Product */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center justify-center h-80">
              <div className="text-center">
                <div className="w-40 h-40 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-6xl">👔</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Premium Blazer</h3>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Featured</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Fate Sips
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Polite vertep Irgo e-mold
                <br />
                or sprot og is online
              </p>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              SOV YAN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
