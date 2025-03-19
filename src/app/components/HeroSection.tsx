import React from 'react';

import NavBar from './NavBar';

const HeroSection = () => {
  return (
    <div
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url(/images/vejs-slianpr4.jpeg)' }}
    >
      <div className='flex flex-col h-full bg-black bg-opacity-50'>
        <NavBar />
        <div className='flex-grow container mx-auto flex flex-col justify-center px-6 text-white'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Najbolje pite u gradu od 1983
          </h1>
          <p className='text-lg md:text-2xl mb-6'>
            Pite, roštilj i doneri na jednom mestu
          </p>
          <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-max'>
            Pogledaj meni
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
