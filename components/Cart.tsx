import React, { useMemo, useState } from 'react';
import { CartItem as CartItemType } from '../types';
import CartItem from './CartItem';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

interface CartProps {
  items: CartItemType[];
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  onRemoveItem: (itemId: number) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem, onClearCart, onCheckout }) => {
  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);
  
  const [isConfirmingClear, setIsConfirmingClear] = useState(false);

  const handleConfirmClear = () => {
      onClearCart();
      setIsConfirmingClear(false);
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 lg:bg-gray-800/50 lg:backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center">
        <ShoppingCartIcon />
        <span className="ml-3">Your Order</span>
      </h2>
      {items.length === 0 ? (
        <p className="text-gray-400 text-center py-8">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveItem={onRemoveItem}
              />
            ))}
          </div>
          <div className="mt-6 border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold text-white">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={onCheckout}
              disabled={items.length === 0}
              className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-md mt-6 hover:bg-green-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout
            </button>
            
            {isConfirmingClear ? (
                <div className="text-center mt-3 bg-gray-700/50 p-3 rounded-md">
                    <p className="text-gray-300 text-sm mb-3">Are you sure?</p>
                    <div className="flex gap-3">
                        <button 
                            onClick={() => setIsConfirmingClear(false)}
                            className="w-full text-center bg-gray-600 text-white font-semibold text-sm py-2 rounded-md hover:bg-gray-500 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleConfirmClear}
                            className="w-full text-center bg-red-600 text-white font-semibold text-sm py-2 rounded-md hover:bg-red-500 transition-colors"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            ) : (
                <button 
                    onClick={() => setIsConfirmingClear(true)}
                    className="w-full text-center text-gray-400 text-sm mt-3 hover:text-red-500 transition-colors"
                >
                    Clear Cart
                </button>
            )}

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;