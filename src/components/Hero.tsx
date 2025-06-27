
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Freseur to
                <br />
                <span className="text-gray-900">Dy You WINE.</span>
              </h1>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                SABME YON
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3">
                CARRELS
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-4xl">👔</div>
                  </div>
                  <p className="text-lg font-medium">Premium Fashion Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
