
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface CartDrawerProps {
  children: React.ReactNode;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ children }) => {
  const { cart, updateCartQuantity, removeFromCart, getCartTotal, clearCart } = useApp();

  const handleCheckout = () => {
    console.log('Processing checkout...', cart);
    console.log('Cart total:', getCartTotal());
    alert(`Checkout initiated! Total: ₹${getCartTotal().toFixed(2)}\n\nThis would connect to your payment processor.`);
  };

  const handleQuantityIncrease = (itemId: string, currentQuantity: number) => {
    console.log('Increasing quantity for item:', itemId);
    updateCartQuantity(itemId, currentQuantity + 1);
  };

  const handleQuantityDecrease = (itemId: string, currentQuantity: number) => {
    console.log('Decreasing quantity for item:', itemId);
    updateCartQuantity(itemId, currentQuantity - 1);
  };

  const handleRemoveItem = (itemId: string) => {
    console.log('Removing item from cart:', itemId);
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    console.log('Clearing entire cart');
    clearCart();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Shopping Cart</span>
              <Badge variant="secondary">{cart.length}</Badge>
            </div>
            {cart.length > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleClearCart}
                className="text-red-500 hover:text-red-700"
              >
                Clear All
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add some products to get started!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <div className="text-2xl">👔</div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.brand}</p>
                  <p className="font-bold text-sm">₹{item.price}</p>
                  <p className="text-xs text-gray-500">Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityDecrease(item.id, item.quantity)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityIncrease(item.id, item.quantity)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">₹{getCartTotal().toFixed(2)}</span>
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={handleCheckout}
            >
              Proceed to Checkout (₹{getCartTotal().toFixed(2)})
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDrawer;
