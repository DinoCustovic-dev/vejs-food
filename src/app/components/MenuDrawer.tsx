'use client';

import React from 'react';

import { useCart } from '@/context/CartContext';

import { Product } from '@/types/types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  const { addToCart } = useCart();

  // Primjer jela iz jelovnika
  const menuItems: Product[] = [
    {
      id: '1',
      title: 'Ćevapi',
      price: 7.0,
      addons: ['Lepina', 'Luk', 'Kajmak'],
    },
    {
      id: '2',
      title: 'Pljeskavica',
      price: 8.0,
      addons: ['Lepina', 'Majoneza', 'Salata'],
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      {/* Header */}
      <div className='p-4 border-b flex justify-between items-center'>
        <h2 className='text-xl font-bold'>Jelovnik</h2>
        <button onClick={onClose} className='text-gray-500 hover:text-gray-800'>
          ✕
        </button>
      </div>

      {/* Lista jela */}
      <ul className='p-4'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className='flex justify-between items-center border-b py-2'
          >
            <span className='font-medium'>{item.title}</span>
            <div className='flex items-center space-x-2'>
              <span className='text-gray-600'>{item.price} KM</span>
              <button
                onClick={() => addToCart(item)}
                className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded'
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDrawer;
