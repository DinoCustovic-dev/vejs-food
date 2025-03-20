'use client';

import React from 'react';

import { useCart } from '@/context/CartContext';

import { AddonItem as AddonItemType } from '@/types/types';

interface AddonItemProps {
  itemId: string;
  addon: AddonItemType;
}

const AddonItem: React.FC<AddonItemProps> = ({ itemId, addon }) => {
  const { updateAddonQuantity } = useCart();

  return (
    <div className='flex justify-between items-center px-4 py-1 border-b'>
      {/* Naziv priloga */}
      <span className='text-sm'>{addon.title}</span>

      {/* Brojčanik za prilog */}
      <div className='flex items-center space-x-2'>
        <button
          onClick={() => updateAddonQuantity(itemId, addon.id, false)}
          className='px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded'
        >
          −
        </button>
        <span>{addon.quantity}</span>
        <button
          onClick={() => updateAddonQuantity(itemId, addon.id, true)}
          className='px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddonItem;
