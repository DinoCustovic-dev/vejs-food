import React from 'react';

import NavBar from './NavBar';

interface HeroSectionProps {
  onMenuOpen: () => void;
  onCartOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onMenuOpen,
  onCartOpen,
}) => {
  return (
    <div
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url(/images/vejs-slianpr4.jpeg)' }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'>
        <NavBar onMenuOpen={onMenuOpen} onCartOpen={onCartOpen} />
        <div className='flex flex-col items-center justify-center h-full text-white text-center px-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Najbolje pite u gradu od 1983
          </h1>
          <p className='text-lg md:text-2xl mb-6'>
            Pite, roštilj i doneri na jednom mjestu
          </p>
          <a href='#menu'>
            <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
              Pogledaj meni
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
