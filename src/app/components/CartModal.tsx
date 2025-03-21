'use client';

import React from 'react';

import { useCart } from '@/context/CartContext';

import CartItem from './CartItem';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();

  if (!isOpen) return null;

  return (
    // Vanjski kontejner koji hvata klik i zatvara modal
    <div
      className='fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center'
      onClick={onClose} // ✅ Klik izvan modala sada sigurno zatvara modal
    >
      {/* Modal (klik unutar njega neće zatvoriti modal) */}
      <div
        className='bg-white rounded-lg shadow-lg w-96 p-6 relative'
        onClick={(e) => e.stopPropagation()} // ✅ Sprečava zatvaranje na klik unutar modala
      >
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

        {/* Dugme "Naruči" umjesto "Zatvori" */}
        <div className='mt-4 flex justify-end'>
          <button
            onClick={() => void 0}
            className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'
          >
            Naruči
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
