'use client';

import React, { useState } from 'react';
import { FaBars, FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg relative'>
      <div className='text-2xl font-bold'>Vejs</div>

      <ul className='hidden md:flex space-x-8 items-center'>
        <li>
          <a href='#home' className='hover:text-gray-200 transition-colors'>
            Početna
          </a>
        </li>
        <li>
          <a href='#menu' className='hover:text-gray-200 transition-colors'>
            Proizvodi
          </a>
        </li>
        <li>
          <a href='#gallery' className='hover:text-gray-200 transition-colors'>
            Galerija
          </a>
        </li>
        <li>
          <a href='#contact' className='hover:text-gray-200 transition-colors'>
            Kontakt
          </a>
        </li>
        <li>
          {React.createElement(FaShoppingCart as React.ElementType, {
            className:
              'text-2xl cursor-pointer hover:text-gray-200 transition-colors',
          })}
        </li>
      </ul>

      <div className='flex items-center md:hidden space-x-4'>
        {React.createElement(FaShoppingCart as React.ElementType, {
          className:
            'text-2xl cursor-pointer hover:text-gray-200 transition-colors',
        })}
        <button
          onClick={toggleMenu}
          className='hover:text-gray-200 transition-colors'
        >
          <FaBars className='text-2xl' />
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden absolute top-16 right-4 bg-white text-black shadow-xl rounded-lg py-2 w-48'>
          <a href='#home' className='block px-6 py-3 hover:bg-gray-100'>
            Početna
          </a>
          <a href='#menu' className='block px-6 py-3 hover:bg-gray-100'>
            Proizvodi
          </a>
          <a href='#gallery' className='block px-6 py-3 hover:bg-gray-100'>
            Galerija
          </a>
          <a href='#contact' className='block px-6 py-3 hover:bg-gray-100'>
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
