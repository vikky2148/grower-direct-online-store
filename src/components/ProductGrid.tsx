
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const allProducts = [
  {
    id: '1',
    name: 'Elegant Silk Blouse',
    price: 129.99,
    originalPrice: 179.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Paris',
    rating: 5,
    category: 'Women',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: 'Premium Denim Jacket',
    price: 189.99,
    originalPrice: 249.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Milan',
    rating: 4,
    category: 'Men',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    badge: 'Limited',
  },
  {
    id: '3',
    name: 'Designer Wool Coat',
    price: 349.99,
    originalPrice: 449.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'London',
    rating: 5,
    category: 'Women',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400',
    badge: 'New',
  },
  {
    id: '4',
    name: 'Minimalist Cotton Tee',
    price: 59.99,
    originalPrice: 79.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Tokyo',
    rating: 4,
    category: 'Men',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: '5',
    name: 'Luxury Leather Jacket',
    price: 599.99,
    originalPrice: 799.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'New York',
    rating: 5,
    category: 'Men',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    badge: 'Exclusive',
  },
  {
    id: '6',
    name: 'Smart Casual Shirt',
    price: 89.99,
    originalPrice: 119.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Stockholm',
    rating: 4,
    category: 'Men',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
  },
  {
    id: '7',
    name: 'Designer Handbag',
    price: 299.99,
    originalPrice: 399.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Paris',
    rating: 5,
    category: 'Bags',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
    badge: 'Trending',
  },
  {
    id: '8',
    name: 'Gold Chain Necklace',
    price: 149.99,
    originalPrice: 199.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Milan',
    rating: 4,
    category: 'Jewelry',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
  },
  {
    id: '9',
    name: 'Running Sneakers',
    price: 179.99,
    originalPrice: 229.99,
    unit: 'pair',
    brand: 'NEXUS',
    location: 'Berlin',
    rating: 5,
    category: 'Shoes',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    badge: 'Athletic',
  },
  {
    id: '10',
    name: 'Vintage Sunglasses',
    price: 79.99,
    originalPrice: 99.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Los Angeles',
    rating: 4,
    category: 'Accessories',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
  },
  {
    id: '11',
    name: 'Summer Dress',
    price: 99.99,
    originalPrice: 139.99,
    unit: 'piece',
    brand: 'NEXUS',
    location: 'Barcelona',
    rating: 5,
    category: 'Women',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    badge: 'Sale',
  },
  {
    id: '12',
    name: 'Casual Sneakers',
    price: 129.99,
    originalPrice: 159.99,
    unit: 'pair',
    brand: 'NEXUS',
    location: 'Amsterdam',
    rating: 4,
    category: 'Shoes',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
  },
];

const ITEMS_PER_PAGE = 8;

const ProductGrid = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return allProducts;
    }
    return allProducts.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div>
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <span>Home</span>
              <span>{'>'}</span>
              <span>Collections</span>
              <span>{'>'}</span>
              <span className="text-gray-900 font-medium">{activeCategory}</span>
            </nav>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-2">
              {activeCategory === 'All' ? 'All Products' : activeCategory}
            </h2>
            <p className="text-gray-600 text-lg">Discover our curated selection of {activeCategory.toLowerCase()} items</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <Grid className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
            
            <Button variant="outline" className="hidden md:flex items-center space-x-2 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 rounded-xl px-4 py-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Sort by</span>
            </Button>
            
            <div className="text-right bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-sm text-gray-500">Showing Results</p>
              <p className="font-bold text-gray-900 text-lg">{filteredProducts.length} Products</p>
            </div>
          </div>
        </div>
        
        <div className={`
          grid gap-8 
          ${viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
          }
        `}>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} viewMode={viewMode} />
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
        
        {/* Load More Button (Alternative to pagination) */}
        <div className="text-center mt-8">
          <Button 
            size="lg" 
            onClick={handleLoadMore}
            disabled={currentPage >= totalPages}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentPage >= totalPages ? 'No More Products' : 'Load More Products'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
