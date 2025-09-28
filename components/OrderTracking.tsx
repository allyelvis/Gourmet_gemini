import React, { useState, useEffect, useMemo } from 'react';
import { CartItem } from '../types';
import CheckCircleIcon from './icons/CheckCircleIcon';
import CookingPotIcon from './icons/CookingPotIcon';
import DeliveryIcon from './icons/DeliveryIcon';
import ClockIcon from './icons/ClockIcon';

interface OrderTrackingProps {
  order: CartItem[];
  onNewOrder: () => void;
}

const STATUSES = [
  { name: 'Order Placed', icon: <CheckCircleIcon /> },
  { name: 'Preparing Your Meal', icon: <CookingPotIcon /> },
  { name: 'Out for Delivery', icon: <DeliveryIcon /> },
  { name: 'Delivered!', icon: <CheckCircleIcon /> },
];

const OrderTracking: React.FC<OrderTrackingProps> = ({ order, onNewOrder }) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [eta, setEta] = useState<Date | null>(null);
  const [timeRemaining, setTimeRemaining] = useState('');

  // Effect to manage status progression and set the initial ETA
  useEffect(() => {
    setCurrentStatusIndex(0);
    setTimeRemaining('');
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (order.length > 0) {
      const totalDuration = (STATUSES.length - 1) * 4000; // 4s delay per status change
      setEta(new Date(Date.now() + totalDuration));

      STATUSES.forEach((_, index) => {
        if (index > 0) {
          const timer = setTimeout(() => {
            setCurrentStatusIndex(index);
          }, index * 4000);
          timers.push(timer);
        }
      });
    } else {
      setEta(null);
    }

    return () => timers.forEach(clearTimeout);
  }, [order]);
  
  // Effect for the countdown timer display
  useEffect(() => {
    if (!eta || currentStatusIndex >= STATUSES.length - 1) {
      setTimeRemaining('');
      return;
    }

    const timerId = setInterval(() => {
      const remainingMs = eta.getTime() - Date.now();

      if (remainingMs <= 0) {
        setTimeRemaining('Arriving now...');
        clearInterval(timerId);
        return;
      }

      const minutes = Math.floor(remainingMs / 60000);
      const seconds = Math.floor((remainingMs % 60000) / 1000);
      
      setTimeRemaining(`${minutes}m ${seconds.toString().padStart(2, '0')}s`);
    }, 1000);

    return () => clearInterval(timerId);
  }, [eta, currentStatusIndex]);

  const subtotal = useMemo(() => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [order]);
  
  if (order.length === 0) {
      return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
              Thank You For Your Order!
            </h2>
            <div className="border-t border-b border-gray-700 py-4 space-y-3">
              {order.map(item => (
                <div key={item.id} className="flex justify-between items-center text-gray-300">
                    <span>{item.quantity} x {item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-white pt-4">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            {timeRemaining && (
              <div className="flex justify-center items-center text-lg text-amber-300 pt-4 mt-4 border-t border-gray-700/50">
                <ClockIcon />
                <span className="ml-2 font-semibold">
                  {timeRemaining === 'Arriving now...' ? timeRemaining : `Arriving in ~${timeRemaining}`}
                </span>
              </div>
            )}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Order Status</h3>
            <div className="flex flex-col items-center">
                <div className="w-full max-w-xs space-y-8">
                    {STATUSES.map((status, index) => {
                        const isCompleted = index < currentStatusIndex;
                        const isCurrent = index === currentStatusIndex;
                        return (
                            <div key={status.name} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300
                                    ${isCompleted ? 'bg-green-500 text-white' : ''}
                                    ${isCurrent ? 'bg-amber-500 text-gray-900 ring-4 ring-amber-500/50 animate-pulse' : ''}
                                    ${!isCompleted && !isCurrent ? 'bg-gray-700 text-gray-400' : ''}
                                `}>
                                    {React.cloneElement(status.icon, {className: "h-6 w-6"})}
                                </div>
                                <div className={`ml-4 text-lg font-semibold transition-colors duration-300 ${isCompleted || isCurrent ? 'text-white' : 'text-gray-500'}`}>
                                    {status.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <div className="text-center mt-12">
            <button
                onClick={onNewOrder}
                className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-amber-400 transition-colors duration-300"
            >
                Place Another Order
            </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;