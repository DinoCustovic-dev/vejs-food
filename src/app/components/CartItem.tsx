'use client';

import React, { useState } from 'react';

import { useCart } from '@/context/CartContext';

import AddonItem from './AddonItem'; // ✅ Ispravan import

import { CartItem as CartItemType } from '@/types/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='border-b py-3'>
      <div className='flex justify-between items-center'>
        {/* Naziv jela */}
        <span className='font-semibold'>{item.title}</span>

        {/* Brojčanik */}
        <div className='flex items-center space-x-2'>
          <button
            onClick={() => decrementQuantity(item.id)}
            className='px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded'
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => incrementQuantity(item.id)}
            className='px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded'
          >
            +
          </button>
        </div>

        {/* Cijena */}
        <span className='font-semibold'>
          {(item.price * item.quantity).toFixed(2)} KM
        </span>

        {/* Dugme za uklanjanje iz košarice */}
        <button
          onClick={() => removeFromCart(item.id)}
          className='text-red-500 hover:text-red-700 text-lg font-bold'
        >
          ✕
        </button>
      </div>

      {/* Prilozi (Dropdown) */}
      {item.addons.length > 0 && (
        <div className='mt-2'>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='text-blue-500 hover:underline text-sm'
          >
            {isExpanded ? 'Sakrij Priloge ▲' : 'Prikaži Priloge ▼'}
          </button>
          {isExpanded && (
            <div className='mt-2 space-y-1'>
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
