import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import PlusIcon from './icons/PlusIcon';

interface MenuItemCardProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300 ease-in-out group flex flex-col">
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
            <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white mb-1">{item.name}</h3>
            <p className="text-lg font-bold text-amber-400">${item.price.toFixed(2)}</p>
            </div>
            <p className="text-gray-400 text-sm mb-3">{item.description}</p>
             <div className="py-3 border-t border-gray-700/50 text-xs text-gray-400">
                <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                        <span className="font-bold text-base text-gray-200">{item.nutrition.calories}</span>
                        <span className="block text-gray-500">Cals</span>
                    </div>
                    <div>
                        <span className="font-bold text-base text-gray-200">{item.nutrition.protein}g</span>
                        <span className="block text-gray-500">Protein</span>
                    </div>
                    <div>
                        <span className="font-bold text-base text-gray-200">{item.nutrition.carbs}g</span>
                        <span className="block text-gray-500">Carbs</span>
                    </div>
                    <div>
                        <span className="font-bold text-base text-gray-200">{item.nutrition.fat}g</span>
                        <span className="block text-gray-500">Fat</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <button
            onClick={() => onAddToCart(item)}
            className="w-full flex items-center justify-center bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
            <PlusIcon />
            <span className="ml-2">Add to Cart</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;