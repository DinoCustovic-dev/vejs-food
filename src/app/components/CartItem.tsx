'use client';

import React, { useState } from 'react';

import { useCart } from '@/context/CartContext';

import AddonItem from './AddonItem';

import { CartItem as CartItemType } from '@/types/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='border-b border-gray-200 py-4'>
      <div className='flex justify-between items-center'>
        {/* Naziv jela */}
        <span className='font-semibold text-gray-800'>{item.title}</span>

        {/* Brojčanik */}
        <div className='flex items-center space-x-2 bg-gray-100 rounded-full'>
          <button
            onClick={() => decrementQuantity(item.id)}
            className='px-3 py-1 text-gray-600 hover:text-black rounded-full transition-colors'
          >
            −
          </button>
          <span className='font-semibold text-gray-800'>{item.quantity}</span>
          <button
            onClick={() => incrementQuantity(item.id)}
            className='px-3 py-1 text-gray-600 hover:text-black rounded-full transition-colors'
          >
            +
          </button>
        </div>

        {/* Cijena */}
        <span className='font-semibold text-yellow-600'>
          {(item.price * item.quantity).toFixed(2)} KM
        </span>

        {/* Dugme za uklanjanje iz košarice */}
        <button
          onClick={() => removeFromCart(item.id)}
          className='text-red-500 hover:text-red-700 text-xl font-bold rounded-full p-1 hover:bg-red-100 transition-colors'
        >
          ✕
        </button>
      </div>

      {/* Prilozi (Dropdown) */}
      {item.addons.length > 0 && (
        <div className='mt-3'>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='text-yellow-600 hover:text-yellow-700 text-sm flex items-center space-x-2 hover:underline'
          >
            <span>{isExpanded ? 'Sakrij Priloge' : 'Prikaži Priloge'}</span>
            {isExpanded ? '▲' : '▼'}
          </button>
          {isExpanded && (
            <div className='mt-2 space-y-2 bg-gray-50 rounded-lg p-2'>
              {item.addons.map((addon) => (
                <AddonItem key={addon.id} itemId={item.id} addon={addon} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartItem;
