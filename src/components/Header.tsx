
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemsCount, wishlist } = useApp();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Navigate to search results or filter products
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="relative">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                NEXUS
              </h1>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </form>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/collections" className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105">
              Collections
            </Link>
            <Link to="/trending" className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105">
              Trending
            </Link>
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105">
              Brands
            </span>
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105">
              Sale
            </span>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-blue-50 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-blue-50 transition-colors">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-pink-50 transition-colors">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>
            
            <CartDrawer>
              <Button variant="ghost" size="icon" className="relative hover:bg-green-50 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-bounce">
                    {getCartItemsCount()}
                  </span>
                )}
              </Button>
            </CartDrawer>
            
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4 animate-fade-in">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
