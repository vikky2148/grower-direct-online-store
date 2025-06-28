
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import ProductModal from './ProductModal';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string;
  brand: string;
  location: string;
  rating: number;
  category: string;
  inStock: boolean;
  image?: string;
  badge?: string;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    name,
    price,
    originalPrice,
    brand,
    location,
    rating,
    inStock,
    image,
    badge,
    viewMode = 'grid',
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const isLiked = wishlist.includes(props.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(props);
    console.log('Added to cart:', props.name);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(props.id);
  };

  if (viewMode === 'list') {
    return (
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="flex">
            <div className="relative w-48 h-48">
              {image ? (
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-4xl">👔</div>
                </div>
              )}
              {badge && (
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
                  {badge}
                </Badge>
              )}
            </div>
            
            <div className="flex-1 p-6 flex justify-between items-center">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{brand} • {location}</p>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({rating}.0)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-gray-900">${price}</span>
                  {originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${originalPrice}</span>
                  )}
                  {originalPrice && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Save ${(originalPrice - price).toFixed(2)}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <ProductModal product={props}>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                </ProductModal>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className={`rounded-full ${isLiked ? 'text-red-500 border-red-500' : ''}`}
                  onClick={handleToggleWishlist}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
                  onClick={handleQuickAdd}
                  disabled={!inStock}
                >
                  {inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-500 border-0 bg-white rounded-2xl overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-4xl">👔</div>
              </div>
            )}
          </div>
          
          {badge && (
            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg">
              {badge}
            </Badge>
          )}
          
          <div className={`
            absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
          `}>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleToggleWishlist}
              className={`
                bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all duration-300
                ${isLiked ? 'text-red-500' : 'text-gray-600'}
              `}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            
            <ProductModal product={props}>
              <Button 
                variant="ghost" 
                size="icon"
                className="bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg text-gray-600"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </ProductModal>
          </div>
          
          <div className={`
            absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent
            transition-all duration-300
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            <Button 
              className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full"
              onClick={handleQuickAdd}
              disabled={!inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {inStock ? 'Quick Add' : 'Out of Stock'}
            </Button>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-500">{brand} • {location}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
            </div>
            
            {!inStock && (
              <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
                Out of Stock
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">${price}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
              )}
            </div>
            
            {originalPrice && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                -{Math.round((1 - price / originalPrice) * 100)}%
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
