
import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductGridProps {
  showOnSaleOnly?: boolean;
  category?: string;
  brand?: string;
  discountRange?: string;
  showTrendingBadge?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  showOnSaleOnly = false, 
  category = '',
  brand = '',
  discountRange = '',
  showTrendingBadge = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();
  const ITEMS_PER_PAGE = 8;

  // Indian product data with rupee pricing and local brands
  const allProducts = [
    { id: '1', name: 'Premium Cotton Kurta', price: 1299, originalPrice: 1799, unit: 'piece', brand: 'Fabindia', location: 'Mumbai', rating: 4.5, category: 'Clothing', inStock: true, image: 'https://images.unsplash.com/photo-1583743814966-8936f37f820f?w=400&h=400&fit=crop', badge: 'Sale' },
    { id: '2', name: 'Designer Saree', price: 3499, originalPrice: 4999, unit: 'piece', brand: 'Sabyasachi', location: 'Kolkata', rating: 4.8, category: 'Clothing', inStock: true, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop', badge: 'Sale' },
    { id: '3', name: 'Leather Handbag', price: 5999, unit: 'piece', brand: 'Hidesign', location: 'Chennai', rating: 4.9, category: 'Accessories', inStock: true, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', badge: 'New' },
    { id: '4', name: 'Sports Sneakers', price: 2799, originalPrice: 3499, unit: 'pair', brand: 'Campus', location: 'Delhi', rating: 4.6, category: 'Shoes', inStock: true, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', badge: 'Sale' },
    { id: '5', name: 'Silk Dupatta', price: 899, unit: 'piece', brand: 'Kalamkari', location: 'Hyderabad', rating: 4.7, category: 'Accessories', inStock: true, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop', badge: 'Trending' },
    { id: '6', name: 'Winter Shawl', price: 2199, originalPrice: 2999, unit: 'piece', brand: 'Pashmina House', location: 'Kashmir', rating: 4.8, category: 'Clothing', inStock: true, image: 'https://images.unsplash.com/photo-1544441893-675973e1d7fe?w=400&h=400&fit=crop', badge: 'Sale' },
    { id: '7', name: 'Smart Watch', price: 12999, unit: 'piece', brand: 'boAt', location: 'Bengaluru', rating: 4.5, category: 'Electronics', inStock: true, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', badge: 'New' },
    { id: '8', name: 'Ethnic Kurti', price: 1599, originalPrice: 2199, unit: 'piece', brand: 'W for Woman', location: 'Pune', rating: 4.6, category: 'Clothing', inStock: true, image: 'https://images.unsplash.com/photo-1564257577-8a8d4c50c02c?w=400&h=400&fit=crop', badge: 'Sale' },
    { id: '9', name: 'Traditional Juttis', price: 1799, unit: 'pair', brand: 'Needledust', location: 'Jaipur', rating: 4.7, category: 'Shoes', inStock: true, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop', badge: 'Trending' },
    { id: '10', name: 'Cotton Palazzo', price: 799, originalPrice: 1199, unit: 'piece', brand: 'Global Desi', location: 'Mumbai', rating: 4.4, category: 'Clothing', inStock: true, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop', badge: 'Sale' },
    { id: '11', name: 'Formal Shirt', price: 1299, unit: 'piece', brand: 'Peter England', location: 'Bengaluru', rating: 4.6, category: 'Clothing', inStock: true, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop', badge: 'New' },
    { id: '12', name: 'Ethnic Sandals', price: 2199, originalPrice: 2999, unit: 'pair', brand: 'Metro', location: 'Delhi', rating: 4.8, category: 'Shoes', inStock: true, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop', badge: 'Sale' },
  ];

  // Filter products based on props
  const baseProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by sale status
    if (showOnSaleOnly) {
      filtered = filtered.filter(product => product.originalPrice && product.originalPrice > product.price);
    }

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by brand
    if (brand && brand !== 'all') {
      filtered = filtered.filter(product => product.brand.toLowerCase().includes(brand.toLowerCase()));
    }

    return filtered;
  }, [showOnSaleOnly, category, brand]);

  // Filter by selected category from CategoryFilter
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return baseProducts;
    }
    return baseProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory, baseProducts]);

  // Paginate products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(0, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const hasMoreProducts = currentPage < totalPages;

  const handleLoadMore = () => {
    if (hasMoreProducts) {
      setCurrentPage(prev => prev + 1);
      toast({
        title: "Loading More Products",
        description: `Loaded ${Math.min(ITEMS_PER_PAGE, filteredProducts.length - (currentPage * ITEMS_PER_PAGE))} more products`,
      });
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    toast({
      title: "Category Filter",
      description: category === 'All' ? 'Showing all products' : `Showing ${category} products`,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {showOnSaleOnly ? 'Sale Products' : 'Featured Products'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {showOnSaleOnly 
              ? 'Don\'t miss out on these amazing deals and discounts!'
              : 'Discover our handpicked collection of premium Indian fashion items from top brands across India.'
            }
          </p>
        </div>

        {!showOnSaleOnly && !category && !brand && (
          <CategoryFilter 
            activeCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {paginatedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              badge={showTrendingBadge ? 'Trending' : product.badge}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}

        {hasMoreProducts && (
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleLoadMore}
              className="px-8 py-3 text-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              Load More Products ({filteredProducts.length - paginatedProducts.length} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
