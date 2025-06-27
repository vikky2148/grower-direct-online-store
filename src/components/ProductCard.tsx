
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  farmer: string;
  location: string;
  rating: number;
  category: string;
  inStock: boolean;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  unit,
  farmer,
  location,
  rating,
  category,
  inStock,
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative">
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 h-48 flex items-center justify-center rounded-t-lg">
            <div className="text-center text-green-600">
              <div className="text-4xl mb-2">🥕</div>
              <p className="text-sm font-medium">{name}</p>
            </div>
          </div>
          <Badge 
            variant={inStock ? "default" : "secondary"} 
            className={`absolute top-2 right-2 ${inStock ? 'bg-green-600' : 'bg-gray-400'}`}
          >
            {inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
          <Badge variant="outline" className="absolute top-2 left-2 bg-white">
            {category}
          </Badge>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="mr-2">{farmer}</span>
            <span>• {location}</span>
          </div>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({rating})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-green-600">${price}</span>
              <span className="text-gray-600 text-sm">/{unit}</span>
            </div>
            <Button 
              size="sm" 
              disabled={!inStock}
              className="bg-green-600 hover:bg-green-700"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
