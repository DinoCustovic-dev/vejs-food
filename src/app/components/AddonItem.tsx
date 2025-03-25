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
    <div className='flex justify-between items-center px-4 py-2 border-b border-gray-200'>
      {/* Naziv priloga */}
      <span className='text-sm text-gray-800'>{addon.title}</span>

      {/* Brojčanik za prilog */}
      <div className='flex items-center space-x-2 bg-gray-100 rounded-full'>
        <button
          onClick={() => updateAddonQuantity(itemId, addon.id, false)}
          className='px-3 py-1 text-gray-600 hover:text-black rounded-full transition-colors'
        >
          −
        </button>
        <span className='font-semibold text-gray-800'>{addon.quantity}</span>
        <button
          onClick={() => updateAddonQuantity(itemId, addon.id, true)}
          className='px-3 py-1 text-gray-600 hover:text-black rounded-full transition-colors'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddonItem;
