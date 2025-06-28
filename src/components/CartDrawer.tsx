
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
  const { cart, updateCartQuantity, removeFromCart, getCartTotal } = useApp();

  const handleCheckout = () => {
    // This will be connected to the payment system
    console.log('Processing checkout...', cart);
    alert('Checkout functionality will be implemented with payment integration!');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Shopping Cart</span>
            <Badge variant="secondary">{cart.length}</Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <div className="text-2xl">👔</div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.brand}</p>
                  <p className="font-bold text-sm">${item.price}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500"
                    onClick={() => removeFromCart(item.id)}
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
              <span className="font-bold text-lg">${getCartTotal().toFixed(2)}</span>
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDrawer;
