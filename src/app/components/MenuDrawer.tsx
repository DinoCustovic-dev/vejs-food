'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', bounce: 0.2 }}
          className='fixed inset-0 bg-black/50 z-50 flex justify-end'
        >
          <div className='w-64 bg-white h-full shadow-xl p-6 flex flex-col'>
            <button onClick={onClose} className='self-end'>
              <X size={28} />
            </button>
            <nav className='mt-10 flex flex-col space-y-4'>
              <Link href='#menu' onClick={onClose}>
                Meni
              </Link>
              <Link href='#contact' onClick={onClose}>
                Kontakt
              </Link>
              <Link href='#about' onClick={onClose}>
                O nama
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;
