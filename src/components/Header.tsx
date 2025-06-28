
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, User, Heart, Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const { getCartItemsCount, wishlist } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        console.log('Auth state changed:', event, session?.user?.email);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      toast({
        title: "Search",
        description: `Searching for "${searchQuery}"`,
      });
    }
  };

  const handleLogoClick = () => {
    console.log('Logo clicked - navigating to home');
    navigate('/');
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    toast({
      title: "Notifications",
      description: "You have 2 new notifications",
    });
  };

  const handleUserClick = () => {
    if (user) {
      console.log('User profile clicked');
      toast({
        title: "Profile",
        description: "User profile feature coming soon!",
      });
    } else {
      console.log('Redirecting to login');
      navigate('/auth');
    }
  };

  const handleLogout = async () => {
    console.log('Logout clicked');
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          title: "Logout Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Logged Out",
          description: "You have been logged out successfully.",
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleWishlistClick = () => {
    console.log('Wishlist clicked');
    toast({
      title: "Wishlist",
      description: `You have ${wishlist.length} items in your wishlist`,
    });
  };

  const handleBrandsClick = () => {
    console.log('Brands clicked');
    toast({
      title: "Brands",
      description: "Explore our premium brand collection",
    });
    // Navigate to a brands page or show brands modal
  };

  const handleSaleClick = () => {
    console.log('Sale clicked');
    toast({
      title: "Sale",
      description: "Check out our amazing deals and discounts!",
    });
    // Navigate to a sale page or filter products on sale
  };

  const handleMenuClick = () => {
    console.log('Mobile menu clicked');
    toast({
      title: "Menu",
      description: "Mobile menu feature coming soon!",
    });
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="relative cursor-pointer">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                NEXUS
              </h1>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </button>
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
            <Link 
              to="/collections" 
              className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105"
              onClick={() => console.log('Collections link clicked')}
            >
              Collections
            </Link>
            <Link 
              to="/trending" 
              className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105"
              onClick={() => console.log('Trending link clicked')}
            >
              Trending
            </Link>
            <button 
              className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105"
              onClick={handleBrandsClick}
            >
              Brands
            </button>
            <button 
              className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-all duration-300 hover:scale-105"
              onClick={handleSaleClick}
            >
              Sale
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                console.log('Search toggle clicked');
              }}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-blue-50 transition-colors" 
              onClick={handleNotificationClick}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-blue-50 transition-colors" 
                  onClick={handleUserClick}
                >
                  <User className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-red-50 transition-colors text-red-600" 
                  onClick={handleLogout}
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-blue-50 transition-colors"
                >
                  Login
                </Button>
              </Link>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-pink-50 transition-colors" 
              onClick={handleWishlistClick}
            >
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
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={handleMenuClick}
            >
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
