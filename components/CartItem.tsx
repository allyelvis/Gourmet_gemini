import React from 'react';
import { CartItem as CartItemType } from '../types';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
import TrashIcon from './icons/TrashIcon';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  onRemoveItem: (itemId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded-md">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
        <div>
          <p className="font-semibold text-white">{item.name}</p>
          <p className="text-xs text-gray-500">{item.nutrition.calories} calories</p>
          <p className="text-sm text-gray-400 mt-1">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center bg-gray-800 rounded-md">
            <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="p-1 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={item.quantity <= 1}
            >
                <MinusIcon />
            </button>
            <span className="px-2 text-white font-semibold">{item.quantity}</span>
            <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-1 text-gray-400 hover:text-white"
            >
                <PlusIcon />
            </button>
        </div>
        <button onClick={() => onRemoveItem(item.id)} className="text-gray-500 hover:text-red-500 p-1">
            <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;