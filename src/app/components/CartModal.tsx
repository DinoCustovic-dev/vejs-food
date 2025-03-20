'use client';

import React from 'react';

import { useCart } from '@/context/CartContext';

import CartItem from './CartItem'; // ✅ Ispravan import

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();

  if (!isOpen) return null; // Ako modal nije otvoren, ne prikazuj ništa

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-lg shadow-lg w-96 p-6 relative'>
        {/* Dugme za zatvaranje */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
        >
          ✕
        </button>

        <h2 className='text-xl font-bold mb-4'>Vaša Korpa</h2>

        {cartItems.length === 0 ? (
          <p className='text-gray-500'>Košarica je prazna.</p>
        ) : (
          <ul className='space-y-3'>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        )}

        {/* Dugme za zatvaranje i nastavak kupovine */}
        <div className='mt-4 flex justify-end'>
          <button
            onClick={onClose}
            className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'
          >
            Zatvori
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
