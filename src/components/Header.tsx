
import React from 'react';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">LUNKER.</h1>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">Lom</span>
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">Denter</span>
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">Cnrets</span>
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">Liptios</span>
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">Spys</span>
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">Arik</span>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
