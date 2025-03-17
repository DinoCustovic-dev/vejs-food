'use client';

import * as React from 'react';
import '@/lib/env';

import CartDrawer from './components/CartDrawer';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HeroSection from './components/HeroSection';
import MenuDrawer from './components/MenuDrawer';
import ProductCard from './components/ProductCard';

export default function HomePage() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isCartOpen, setCartOpen] = React.useState(false);

  return (
    <>
      {/* Drawer-i za meni i korpu */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

      {/* Hero sekcija sa mogućnošću otvaranja menija i korpe */}
      <HeroSection
        onMenuOpen={() => setMenuOpen(true)}
        onCartOpen={() => setCartOpen(true)}
      />

      {/* Sekcija sa proizvodima */}
      <section id='menu' className='p-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <ProductCard
          image='/images/vejs-slikanpr2.jpeg'
          name='Piletina sa salatom'
          description='Sveža piletina sa kukuruzom i prelivom.'
          price={10}
        />
        <ProductCard
          image='/images/vejs-slikanpr1.jpeg'
          name='Doner'
          description='Ukusni doner sa specijalnim sosom.'
          price={8}
        />
        <ProductCard
          image='/images/vejs-slikanpr3.jpeg'
          name='Specijalitet sa roštilja'
          description='Roštilj mix sa prilozima.'
          price={15}
        />
      </section>

      {/* Galerija */}
      <Gallery />

      {/* Kontakt forma */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  );
}
