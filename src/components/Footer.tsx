
import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold">FarmFresh</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Connecting communities with local farmers to bring you the freshest, 
              highest quality produce and artisanal goods directly from farm to table.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Become a Seller</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Help & Support</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Fresh Vegetables</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Seasonal Fruits</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Dairy Products</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Artisan Goods</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FarmFresh. All rights reserved. Made with ❤️ for farmers and communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
