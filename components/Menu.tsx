import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuProps {
  menu: Record<string, MenuItemType[]>;
  onAddToCart: (item: MenuItemType) => void;
}

const Menu: React.FC<MenuProps> = ({ menu, onAddToCart }) => {
  return (
    <div className="space-y-12">
      {/* FIX: Replaced Object.entries with Object.keys to resolve a type inference issue where 'items' was inferred as 'unknown'. */}
      {Object.keys(menu).map((category) => (
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
