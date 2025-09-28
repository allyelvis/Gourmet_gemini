import React, { useState, useCallback, useMemo } from 'react';
import { CartItem, MenuItem as MenuItemType } from './types';
import { MENU_ITEMS } from './constants';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import ChefSuggestion from './components/ChefSuggestion';
import OrderTracking from './components/OrderTracking';

type View = 'menu' | 'tracking';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [view, setView] = useState<View>('menu');
  const [placedOrder, setPlacedOrder] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback((item: MenuItemType) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }, []);

  const handleUpdateQuantity = useCallback((itemId: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const handleRemoveFromCart = useCallback((itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleCheckout = useCallback(() => {
    if (cartItems.length > 0) {
      setPlacedOrder([...cartItems]);
      setView('tracking');
      setCartItems([]);
      setIsCartVisible(false); // Hide cart on mobile when transitioning
    }
  }, [cartItems]);

  const handleNewOrder = useCallback(() => {
    setPlacedOrder([]);
    setView('menu');
    setIsCartVisible(true);
  }, []);

  const groupedMenu = useMemo(() => {
    return MENU_ITEMS.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, MenuItemType[]>);
  }, []);
  
  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header cartItemCount={totalItems} onCartClick={() => view === 'menu' && setIsCartVisible(!isCartVisible)} />
      <main>
        {view === 'menu' ? (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Menu menu={groupedMenu} onAddToCart={handleAddToCart} />
              </div>
              <div className={`transition-transform transform ${isCartVisible ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
                 <div className="fixed top-0 right-0 h-full w-full max-w-md bg-gray-800 shadow-2xl p-6 transform transition-transform duration-300 ease-in-out lg:relative lg:h-auto lg:max-w-none lg:shadow-none lg:p-0 lg:bg-transparent lg:top-auto lg:right-auto" style={{ zIndex: 50 }}>
                    <button
                        onClick={() => setIsCartVisible(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white lg:hidden"
                        aria-label="Close cart"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                   <Cart
                    items={cartItems}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveFromCart}
                    onClearCart={clearCart}
                    onCheckout={handleCheckout}
                  />
                  <div className="mt-8">
                    <ChefSuggestion cartItems={cartItems} onAddToCart={handleAddToCart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <OrderTracking order={placedOrder} onNewOrder={handleNewOrder} />
        )}
      </main>
    </div>
  );
};

export default App;
