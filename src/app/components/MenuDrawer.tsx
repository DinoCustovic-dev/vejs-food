'use client';

import React, { useState } from 'react';

import { useCart } from '@/context/CartContext';

import CartModal from './CartModal';

import { Product } from '@/types/types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultAddons = [
  'Kečap',
  'Majoneza',
  'Sos',
  'Ljuti sos',
  'Luk',
  'Salata',
];

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    setIsCartOpen(true);
  };

  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-[40]'
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-2xl transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-[50] overflow-y-auto`}
      >
        <div className='p-4 border-b bg-yellow-500 text-black flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Jelovnik</h2>
          <button
            onClick={onClose}
            className='text-black hover:text-gray-800 text-2xl font-light'
          >
            ✕
          </button>
        </div>

        <div className='p-4 space-y-6 bg-white'>
          {/* JELA SA ROŠTILJA */}
          <div>
            <h3 className='text-xl font-bold text-yellow-600 border-b-2 border-yellow-500 pb-2 mb-4'>
              Jela sa roštilja
            </h3>
            <ul className='space-y-3'>
              {[
                {
                  id: '1',
                  title: 'Ćevapi (10 kom)',
                  price: 9.5,
                  addons: defaultAddons,
                },
                {
                  id: '2',
                  title: 'Ćevapi (7 kom)',
                  price: 7.0,
                  addons: defaultAddons,
                },
                {
                  id: '3',
                  title: 'Ćevapi (5 kom)',
                  price: 5.0,
                  addons: defaultAddons,
                },
                {
                  id: '4',
                  title: 'Pileći fileti',
                  price: 7.0,
                  addons: defaultAddons,
                },
                {
                  id: '5',
                  title: 'Pileći sendvič',
                  price: 5.0,
                  addons: defaultAddons,
                },
                {
                  id: '6',
                  title: 'Pileća šnicla',
                  price: 7.0,
                  addons: defaultAddons,
                },
                {
                  id: '7',
                  title: 'Pileća tortilja',
                  price: 6.0,
                  addons: defaultAddons,
                },
                {
                  id: '8',
                  title: 'Pljeskavica',
                  price: 9.5,
                  addons: defaultAddons,
                },
                {
                  id: '9',
                  title: 'Sudžukice (4 kom)',
                  price: 9.5,
                  addons: defaultAddons,
                },
                {
                  id: '10',
                  title: 'Sudžukice (2 kom)',
                  price: 5.0,
                  addons: defaultAddons,
                },
                {
                  id: '11',
                  title: 'Hamburger',
                  price: 5.5,
                  addons: defaultAddons,
                },
                {
                  id: '12',
                  title: 'Cheeseburger',
                  price: 6.0,
                  addons: defaultAddons,
                },
              ].map((item) => (
                <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
              ))}
            </ul>
          </div>

          {/* PITE */}
          <div>
            <h3 className='text-xl font-bold text-yellow-600 border-b-2 border-yellow-500 pb-2 mb-4'>
              Pite
            </h3>
            <ul className='space-y-3'>
              {[
                {
                  id: '13',
                  title: 'Burek (1 kg)',
                  price: 16.0,
                  addons: defaultAddons,
                },
                {
                  id: '14',
                  title: 'Burek sjeckani (1 kg)',
                  price: 18.0,
                  addons: defaultAddons,
                },
                {
                  id: '15',
                  title: 'Sirnica (1 kg)',
                  price: 14.0,
                  addons: defaultAddons,
                },
                {
                  id: '16',
                  title: 'Zeljanica (1 kg)',
                  price: 14.0,
                  addons: defaultAddons,
                },
                {
                  id: '17',
                  title: 'Krompiruša (1 kg)',
                  price: 12.0,
                  addons: defaultAddons,
                },
                {
                  id: '18',
                  title: 'Tikvenica (1 kg)',
                  price: 14.0,
                  addons: defaultAddons,
                },
              ].map((item) => (
                <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
              ))}
            </ul>
          </div>

          {/* DONERI */}
          <div>
            <h3 className='text-xl font-bold text-yellow-600 border-b-2 border-yellow-500 pb-2 mb-4'>
              Doneri
            </h3>
            <ul className='space-y-3'>
              {[
                {
                  id: '19',
                  title: 'Doner oval',
                  price: 8.0,
                  addons: defaultAddons,
                },
                {
                  id: '20',
                  title: 'Doner veliki',
                  price: 8.0,
                  addons: defaultAddons,
                },
                {
                  id: '21',
                  title: 'Doner srednji',
                  price: 7.0,
                  addons: defaultAddons,
                },
                {
                  id: '22',
                  title: 'Doner mali',
                  price: 5.5,
                  addons: defaultAddons,
                },
                {
                  id: '23',
                  title: 'Doner tortilja',
                  price: 6.0,
                  addons: defaultAddons,
                },
              ].map((item) => (
                <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
              ))}
            </ul>
          </div>

          {/* DODATNI PRILOZI */}
          <div>
            <h3 className='text-xl font-bold text-yellow-600 border-b-2 border-yellow-500 pb-2 mb-4'>
              Dodatni prilozi
            </h3>
            <ul className='space-y-3'>
              {[
                { id: '24', title: 'Pomfrit', price: 3.0 },
                { id: '25', title: 'Kajmak', price: 1.0 },
                { id: '26', title: 'Senf', price: 0.5 },
                { id: '27', title: 'Majoneza', price: 0.5 },
                { id: '28', title: 'Kečap', price: 0.5 },
              ].map((item) => (
                <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

// Komponenta za prikaz jednog jela
const MenuItem = ({
  item,
  onAdd,
}: {
  item: Product;
  onAdd: (item: Product) => void;
}) => (
  <li className='flex justify-between items-center border-b pb-2'>
    <span className='font-medium text-gray-800'>{item.title}</span>
    <div className='flex items-center space-x-3'>
      <span className='text-gray-600 font-semibold'>
        {item.price.toFixed(2)} KM
      </span>
      <button
        onClick={() => onAdd(item)}
        className='bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-full transition-colors'
      >
        +
      </button>
    </div>
  </li>
);

export default MenuDrawer;
