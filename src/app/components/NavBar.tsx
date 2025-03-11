import React, { useState } from 'react';

import MenuSection from './MenuSection';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='text-xl font-bold'>Vejs</div>
      <ul className='hidden md:flex space-x-6'>
        <li>
          <a href='#home' className='hover:text-red-500'>
            Početna
          </a>
        </li>
        <li>
          <a href='#menu' className='hover:text-red-500'>
            Proizvodi
          </a>
        </li>
        <li>
          <a href='#gallery' className='hover:text-red-500'>
            Galerija
          </a>
        </li>
        <li>
          <a href='#contact' className='hover:text-red-500'>
            Kontakt
          </a>
        </li>
      </ul>
      <button onClick={toggleMenu} className='md:hidden hover:text-red-500'>
        🍔
      </button>
      {isMenuOpen && <MenuSection onClose={toggleMenu} />}
    </nav>
  );
};

export default NavBar;
