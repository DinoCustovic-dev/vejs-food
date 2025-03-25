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
      <nav className='flex justify-between items-center px-6 py-4 bg-gradient-to-r from-stone-800 to-stone-600 text-white shadow-lg relative'>
        <div className='text-2xl font-bold tracking-wider'>Vejs</div>

        <ul className='hidden md:flex space-x-8 items-center'>
          <li>
            <a href='#home' className='hover:text-stone-300 transition-colors'>
              Početna
            </a>
          </li>
          <li>
            <a href='#menu' className='hover:text-stone-300 transition-colors'>
              Proizvodi
            </a>
          </li>
          <li>
            <a
              href='#gallery'
              className='hover:text-stone-300 transition-colors'
            >
              Galerija
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:text-stone-300 transition-colors'
            >
              Kontakt
            </a>
          </li>
          <li>
            <button
              onClick={toggleDrawer}
              className='hover:text-stone-300 transition-colors'
            >
              Jelovnik
            </button>
          </li>
          <li>
            <ShoppingCartIcon
              className='text-2xl cursor-pointer hover:text-stone-300 transition-colors'
              onClick={toggleCart}
            />
          </li>
        </ul>

        {/* Mobilni meni */}
        <div className='flex items-center md:hidden space-x-4'>
          <ShoppingCartIcon
            className='text-2xl cursor-pointer hover:text-stone-300 transition-colors'
            onClick={toggleCart}
          />
          <button
            onClick={toggleMenu}
            className='hover:text-stone-300 transition-colors'
          >
            <BarsIcon className='text-2xl' />
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div className='fixed inset-0 bg-black bg-opacity-50 z-10'></div>
            <div
              ref={menuRef}
              className='absolute top-16 right-4 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-800 shadow-xl rounded-lg py-2 w-48 z-20 border border-stone-300'
            >
              <a
                href='#home'
                className='block px-6 py-3 hover:bg-stone-200 transition-colors'
                onClick={closeMenu}
              >
                Početna
              </a>
              <a
                href='#menu'
                className='block px-6 py-3 hover:bg-stone-200 transition-colors'
                onClick={closeMenu}
              >
                Proizvodi
              </a>
              <a
                href='#gallery'
                className='block px-6 py-3 hover:bg-stone-200 transition-colors'
                onClick={closeMenu}
              >
                Galerija
              </a>
              <a
                href='#contact'
                className='block px-6 py-3 hover:bg-stone-200 transition-colors'
                onClick={closeMenu}
              >
                Kontakt
              </a>
              <button
                onClick={() => {
                  closeMenu();
                  toggleDrawer();
                }}
                className='block px-6 py-3 hover:bg-stone-200 transition-colors w-full text-left'
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
