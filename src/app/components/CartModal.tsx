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
    <div
      className='fixed inset-0 bg-black bg-opacity-60 z-[60] flex justify-center items-center p-4'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative z-[70] border border-gray-100'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dugme za zatvaranje */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-yellow-600 transition-colors rounded-full p-2 hover:bg-gray-100'
        >
          ✕
        </button>

        <div className='bg-yellow-500 text-black p-6 rounded-t-xl'>
          <h2 className='text-2xl font-bold'>Vaša Korpa</h2>
        </div>

        <div className='p-6'>
          {cartItems.length === 0 ? (
            <p className='text-gray-500 text-center py-4'>
              Košarica je prazna.
            </p>
          ) : (
            <ul className='space-y-4'>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}

          {/* Dugme "Naruči" */}
          <div className='mt-6 flex justify-end'>
            <button
              onClick={() => void 0}
              className='bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg'
            >
              Naruči
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
