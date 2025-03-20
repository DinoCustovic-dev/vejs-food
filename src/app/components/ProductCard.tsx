'use client';

import Image from 'next/image';
import React from 'react';

import { useCart } from '@/context/CartContext';

import { Product } from '@/types/types';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  addons?: string[]; // 👈 Opcioni prilozi, default: ['Ketchup', 'Salad']
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  addons = ['Ketchup', 'Salad'], // 👈 Default prilozi
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product: Product = {
      id: crypto.randomUUID(), // Generiše unikatan ID
      title,
      description,
      image,
      price,
      addons, // Prosljeđujemo priloge koje smo definirali
    };
    addToCart(product);
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='flex justify-between items-center'>
          <span className='text-red-500 font-bold'>{price} KM</span>
          <button
            onClick={handleAddToCart}
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded'
          >
            Dodaj u korpu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
