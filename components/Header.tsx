import React from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import SearchIcon from './icons/SearchIcon';

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
    view: 'menu' | 'tracking';
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, view, searchTerm, onSearchChange }) => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-amber-400 font-serif whitespace-nowrap">
          Gourmet Gemini
        </h1>
        {view === 'menu' && (
          <div className="relative flex-1 max-w-xl mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <SearchIcon />
            </span>
            <input 
                type="search"
                placeholder="Search menu..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-700/50 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
            />
          </div>
        )}
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