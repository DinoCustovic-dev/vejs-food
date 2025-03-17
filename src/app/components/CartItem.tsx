'use client';
import { Trash2 } from 'lucide-react';
import React from 'react';

import { CartItemType } from '@/hooks/useCart';

interface CartItemProps {
  item: CartItemType;
  removeItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeItem }) => {
  return (
    <div className='flex items-center justify-between p-3 border-b'>
      <div>
        <h3 className='font-semibold'>{item.name}</h3>
        <p>
          {item.quantity} x {item.price.toFixed(2)} KM
        </p>
      </div>
      <button onClick={() => removeItem(item.id)}>
        <Trash2 size={20} className='text-red-500' />
      </button>
    </div>
  );
};

export default CartItem;
