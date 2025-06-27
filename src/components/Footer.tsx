
import React from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">FashionTrend</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your premier destination for quality fashion. We bring you the latest trends 
              and timeless classics with exceptional style and unmatched quality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Returns</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Women's Clothing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Men's Clothing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">New Arrivals</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FashionTrend. All rights reserved. Premium fashion for every style.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
