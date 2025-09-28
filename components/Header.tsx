import React from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wider text-amber-400 font-serif">
          Gourmet Gemini
        </h1>
        <button onClick={onCartClick} className="relative text-gray-300 hover:text-white transition-colors">
          <ShoppingCartIcon />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;