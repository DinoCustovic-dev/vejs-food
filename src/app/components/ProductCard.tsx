'use client';
import Image from 'next/image';
import React from 'react';

import useCart, { CartItemType } from '@/hooks/useCart';

interface ProductCardProps {
  id?: number; // Dodajemo `?` da ne bi bio obavezan
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
}) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    const item: CartItemType = {
      id: id ?? Math.random(),
      name,
      price,
      quantity: 1,
    };
    addItem(item);
  };

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
      <Image src={image} alt={name} width={400} height={250} />
      <div className='px-6 py-4'>
        <h3 className='font-bold text-xl mb-2'>{name}</h3>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
      <div className='px-6 py-4 flex justify-between items-center'>
        <span className='text-lg font-semibold'>{price} KM</span>
        <button
          onClick={handleAddToCart}
          className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
        >
          Dodaj u korpu
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
