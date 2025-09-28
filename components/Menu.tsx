import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuProps {
  menu: Record<string, MenuItemType[]>;
  onAddToCart: (item: MenuItemType) => void;
}

const Menu: React.FC<MenuProps> = ({ menu, onAddToCart }) => {
  const categories = Object.keys(menu);

  if (categories.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-800/50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-300">No Results Found</h2>
        <p className="text-gray-400 mt-2">Try searching for something else.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-3xl font-bold border-b-2 border-amber-400 pb-2 mb-6 text-gray-100">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menu[category].map(item => (
              <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;