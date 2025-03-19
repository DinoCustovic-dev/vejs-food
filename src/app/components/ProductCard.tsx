// components/ProductCard.tsx
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
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
          <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded'>
            Dodaj u korpu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
