
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';

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
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  unit,
  brand,
  location,
  rating,
  category,
  inStock,
  image,
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white rounded-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-4xl">👔</div>
              </div>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-12 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-3">
          <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">{name}</h3>
          <p className="text-xs text-gray-500 mb-2">{brand}</p>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({rating})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">${price}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
