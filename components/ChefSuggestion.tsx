import React, { useState, useCallback, useMemo } from 'react';
import { CartItem, MenuItem } from '../types';
import { getChefSuggestion, Suggestion } from '../services/geminiService';
import { MENU_ITEMS } from '../constants';
import SparklesIcon from './icons/SparklesIcon';
import MenuItemCard from './MenuItemCard';

interface ChefSuggestionProps {
  cartItems: CartItem[];
  onAddToCart: (item: MenuItem) => void;
}

const ChefSuggestion: React.FC<ChefSuggestionProps> = ({ cartItems, onAddToCart }) => {
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGetSuggestion = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setSuggestion(null);
    try {
      const result = await getChefSuggestion(cartItems);
      if (result) {
        setSuggestion(result);
      } else if (cartItems.length > 0) {
        setError('Could not get a suggestion at this time.');
      }
    } catch (err) {
      setError('Failed to get a suggestion. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [cartItems]);

  const suggestedItem = useMemo(() => {
    if (!suggestion) return null;
    return MENU_ITEMS.find(item => item.name === suggestion.itemName) || null;
  }, [suggestion]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-amber-400/30">
      <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
        <SparklesIcon />
        <span className="ml-2">Chef Gemini's Suggestion</span>
      </h3>
      
      {isLoading && (
        <div className="flex items-center space-x-2 text-gray-400">
           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-400"></div>
           <span>Chef is thinking...</span>
        </div>
      )}

      {!isLoading && (
        <>
          {error && <p className="text-red-400">{error}</p>}
          
          {suggestion && suggestedItem && (
            <div className="space-y-4">
                <p className="text-gray-300 italic">"{suggestion.reason}"</p>
                <MenuItemCard item={suggestedItem} onAddToCart={onAddToCart} />
            </div>
          )}

          {cartItems.length === 0 && !isLoading && !suggestion && (
            <p className="text-gray-400">Your cart is empty! Add some items and I'll suggest a perfect pairing.</p>
          )}

          {cartItems.length > 0 && (
            <button
              onClick={handleGetSuggestion}
              disabled={isLoading}
              className="mt-4 w-full flex items-center justify-center bg-gray-700 text-amber-300 font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SparklesIcon />
              <span className="ml-2">
                {suggestion ? 'Ask Again' : 'Ask the Chef'}
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ChefSuggestion;
