'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import MenuDrawer from './MenuDrawer';

interface NavBarProps {
  onMenuOpen: () => void;
  onCartOpen: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuOpen, onCartOpen }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className='w-full bg-white shadow-md fixed top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <Link href='/'>
          <h1 className='text-2xl font-bold text-red-500'>Vejs Food</h1>
        </Link>
        <button onClick={onMenuOpen} className='md:hidden'>
          <Menu size={28} />
        </button>

        <div className='hidden md:flex space-x-6'>
          <Link href='#menu'>Meni</Link>
          <Link href='#contact'>Kontakt</Link>
          <Link href='#about'>O nama</Link>
        </div>

        <button onClick={onCartOpen} className='md:hidden'>
          🛒
        </button>

        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
