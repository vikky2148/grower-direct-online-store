
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, X } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Product {
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
}

interface ProductModalProps {
  product: Product;
  children: React.ReactNode;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, children }) => {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const [quantity, setQuantity] = useState(1);
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-6xl">👔</div>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div>
              {product.badge && (
                <Badge className="mb-2 bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  {product.badge}
                </Badge>
              )}
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-600">{product.brand} • {product.location}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.rating}.0)</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  <Badge className="bg-green-100 text-green-700">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                </>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => toggleWishlist(product.id)}
                  className={isWishlisted ? 'text-red-500 border-red-500' : ''}
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Unit:</strong> {product.unit}</p>
              <p><strong>Status:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
