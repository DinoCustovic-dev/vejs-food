// components/MenuSection.tsx
import React from 'react';

import ProductCard from './ProductCard';

interface MenuSectionProps {
  onClose: () => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-600 hover:text-red-500'
        >
          ✖
        </button>
        <h2 className='text-2xl font-bold text-center mb-6'>Meni</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <ProductCard
            image='/images/vejs-slikanpr2.jpeg'
            title='Piletina sa salatom'
            description='Sveža piletina sa kukuruzom i prelivom.'
            price={10}
          />
          <ProductCard
            image='/images/vejs-slikanpr1.jpeg'
            title='Doner'
            description='Ukusni doner sa specijalnim sosom.'
            price={8}
          />
          <ProductCard
            image='/images/vejs-slikanpr3.jpeg'
            title='Specijalitet sa roštilja'
            description='Roštilj mix sa prilozima.'
            price={15}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
