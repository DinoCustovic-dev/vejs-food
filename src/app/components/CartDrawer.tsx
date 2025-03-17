'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, Trash2, X } from 'lucide-react';
import React from 'react';

import createOrderMessage from '@/hooks/createOrderMessage';
import useCart from '@/hooks/useCart';

import CartItem from './CartItem';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const message = createOrderMessage(items);
    window.open(`https://wa.me/3876xxxxxx?text=${message}`, '_blank');
  };

  const handleEmailOrder = () => {
    const message = createOrderMessage(items, '%0A');
    window.location.href = `mailto:email@example.com?subject=Nova%20Narudzba&body=${message}`;
  };

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
          <div className='w-full md:w-96 bg-white h-full shadow-xl p-4 flex flex-col'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold'>Vaša korpa</h2>
              <button onClick={onClose}>
                <X size={28} />
              </button>
            </div>

            <div className='mt-4 overflow-y-auto flex-1'>
              {items.length === 0 ? (
                <p>Vaša korpa je prazna.</p>
              ) : (
                items.map((item) => (
                  <CartItem key={item.id} item={item} removeItem={removeItem} />
                ))
              )}
            </div>

            {items.length > 0 && (
              <>
                <button
                  onClick={clearCart}
                  className='flex items-center justify-center gap-2 text-red-500 mt-4'
                >
                  <Trash2 size={20} /> Isprazni korpu
                </button>

                <div className='mt-4 flex flex-col gap-2'>
                  <button
                    onClick={handleWhatsAppOrder}
                    className='bg-green-500 hover:bg-green-600 text-white py-2 rounded flex items-center justify-center gap-2'
                  >
                    <Send size={20} /> Naruči putem WhatsAppa
                  </button>
                  <button
                    onClick={handleEmailOrder}
                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 rounded flex items-center justify-center gap-2'
                  >
                    <Send size={20} /> Naruči putem Emaila
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
