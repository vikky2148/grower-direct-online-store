
import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductGridProps {
  showOnSaleOnly?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ showOnSaleOnly = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();
  const ITEMS_PER_PAGE = 8;

  // Mock product data with more variety
  const allProducts = [
    { id: '1', name: 'Premium Cotton T-Shirt', price: 29.99, originalPrice: 39.99, unit: 'piece', brand: 'Urban Style', location: 'New York', rating: 4.5, category: 'Clothing', inStock: true, image: '', badge: 'Sale' },
    { id: '2', name: 'Designer Jeans', price: 89.99, originalPrice: 129.99, unit: 'piece', brand: 'Classic Couture', location: 'California', rating: 4.8, category: 'Clothing', inStock: true, image: '', badge: 'Sale' },
    { id: '3', name: 'Leather Handbag', price: 159.99, unit: 'piece', brand: 'Luxury Brand', location: 'Milan', rating: 4.9, category: 'Accessories', inStock: true, image: '', badge: 'New' },
    { id: '4', name: 'Running Sneakers', price: 79.99, originalPrice: 99.99, unit: 'pair', brand: 'Sport Pro', location: 'Oregon', rating: 4.6, category: 'Shoes', inStock: true, image: '', badge: 'Sale' },
    { id: '5', name: 'Silk Scarf', price: 45.99, unit: 'piece', brand: 'Elite Fashion', location: 'Paris', rating: 4.7, category: 'Accessories', inStock: true, image: '', badge: 'Trending' },
    { id: '6', name: 'Winter Coat', price: 199.99, originalPrice: 279.99, unit: 'piece', brand: 'Winter Wear', location: 'Canada', rating: 4.8, category: 'Clothing', inStock: true, image: '', badge: 'Sale' },
    { id: '7', name: 'Smart Watch', price: 299.99, unit: 'piece', brand: 'Tech Style', location: 'Tokyo', rating: 4.5, category: 'Electronics', inStock: true, image: '', badge: 'New' },
    { id: '8', name: 'Casual Dress', price: 69.99, originalPrice: 89.99, unit: 'piece', brand: 'Modern Chic', location: 'London', rating: 4.6, category: 'Clothing', inStock: true, image: '', badge: 'Sale' },
    { id: '9', name: 'Sunglasses', price: 129.99, unit: 'piece', brand: 'Luxury Brand', location: 'Italy', rating: 4.7, category: 'Accessories', inStock: true, image: '', badge: 'Trending' },
    { id: '10', name: 'Athletic Shorts', price: 34.99, originalPrice: 44.99, unit: 'piece', brand: 'Sport Pro', location: 'California', rating: 4.4, category: 'Clothing', inStock: true, image: '', badge: 'Sale' },
    { id: '11', name: 'Formal Shirt', price: 59.99, unit: 'piece', brand: 'Classic Couture', location: 'New York', rating: 4.6, category: 'Clothing', inStock: true, image: '', badge: 'New' },
    { id: '12', name: 'High Heels', price: 109.99, originalPrice: 149.99, unit: 'pair', brand: 'Elite Fashion', location: 'Paris', rating: 4.8, category: 'Shoes', inStock: true, image: '', badge: 'Sale' },
  ];

  // Filter products based on showOnSaleOnly prop
  const baseProducts = showOnSaleOnly 
    ? allProducts.filter(product => product.originalPrice && product.originalPrice > product.price)
    : allProducts;

  // Filter by selected category
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
    setCurrentPage(1); // Reset to first page when category changes
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
              : 'Discover our handpicked collection of premium fashion items from top brands around the world.'
            }
          </p>
        </div>

        {!showOnSaleOnly && (
          <CategoryFilter 
            activeCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
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
