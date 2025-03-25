'use client';

import React, { useState } from 'react';

import MenuDrawer from './MenuDrawer';
import NavBar from './NavBar';

const HeroSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <div
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url(/images/vejs-slianpr4.jpeg)' }}
    >
      <div className='flex flex-col h-full bg-black bg-opacity-50'>
        <NavBar />

        <div className='flex-grow flex flex-col justify-center items-center text-center px-4 text-white'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Vejs pite od 1983
          </h1>
          <p className='text-xl md:text-2xl mb-8'>
            Pite, roštilj i doneri na jednom mjestu
          </p>

          {/* Ostavljeno samo dugme "Jelovnik" koje otvara MenuDrawer */}
          <button
            onClick={toggleDrawer}
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded inline-block'
          >
            Jelovnik
          </button>
        </div>
      </div>

      {/* MenuDrawer za pregled svih jela */}
      <MenuDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default HeroSection;
