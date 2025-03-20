'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaShoppingCart } from 'react-icons/fa';

import CartModal from './CartModal';
import MenuDrawer from './MenuDrawer';

const ShoppingCartIcon = FaShoppingCart as React.ComponentType<{
  className?: string;
  onClick: () => void;
}>;
const BarsIcon = FaBars as React.ComponentType<{ className?: string }>;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className='flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg relative'>
        <div className='text-2xl font-bold'>Vejs</div>

        <ul className='hidden md:flex space-x-8 items-center'>
          <li>
            <a href='#home' className='hover:text-gray-200'>
              Početna
            </a>
          </li>
          <li>
            <a href='#menu' className='hover:text-gray-200'>
              Proizvodi
            </a>
          </li>
          <li>
            <a href='#gallery' className='hover:text-gray-200'>
              Galerija
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-gray-200'>
              Kontakt
            </a>
          </li>
          {/* Dugme za otvaranje jelovnika */}
          <li>
            <button onClick={toggleDrawer} className='hover:text-gray-200'>
              Jelovnik
            </button>
          </li>
          {/* Ikonica košarice */}
          <li>
            <ShoppingCartIcon
              className='text-2xl cursor-pointer hover:text-gray-200'
              onClick={toggleCart}
            />
          </li>
        </ul>

        {/* Mobilni meni */}
        <div className='flex items-center md:hidden space-x-4'>
          <ShoppingCartIcon
            className='text-2xl cursor-pointer hover:text-gray-200'
            onClick={toggleCart}
          />
          <button onClick={toggleMenu} className='hover:text-gray-200'>
            <BarsIcon className='text-2xl' />
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div className='fixed inset-0 bg-black bg-opacity-50 z-10'></div>
            <div
              ref={menuRef}
              className='absolute top-16 right-4 bg-white text-black shadow-xl rounded-lg py-2 w-48 z-20'
            >
              <a
                href='#home'
                className='block px-6 py-3 hover:bg-gray-100'
                onClick={closeMenu}
              >
                Početna
              </a>
              <a
                href='#menu'
                className='block px-6 py-3 hover:bg-gray-100'
                onClick={closeMenu}
              >
                Proizvodi
              </a>
              <a
                href='#gallery'
                className='block px-6 py-3 hover:bg-gray-100'
                onClick={closeMenu}
              >
                Galerija
              </a>
              <a
                href='#contact'
                className='block px-6 py-3 hover:bg-gray-100'
                onClick={closeMenu}
              >
                Kontakt
              </a>
              {/* Dugme za otvaranje jelovnika u mobilnom meniju */}
              <button
                onClick={() => {
                  closeMenu();
                  toggleDrawer();
                }}
                className='block px-6 py-3 hover:bg-gray-100 w-full text-left'
              >
                Jelovnik
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Modali */}
      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
      <MenuDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};

export default NavBar;
