'use client';

import * as React from 'react';
import '@/lib/env';

import ContactForm from '@/app/components/ContactForm';
import Footer from '@/app/components/Footer';
import Gallery from '@/app/components/Gallery';
import HeroSection from '@/app/components/HeroSection';
import ProductCard from '@/app/components/ProductCard';
import { CartProvider } from '@/context/CartContext';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <>
      <CartProvider>
        <HeroSection />
        <section
          id='menu'
          className='p-8 grid grid-cols-1 md:grid-cols-3 gap-6'
        >
          <ProductCard
            image='/images/vejs-slikanpr2.jpeg'
            title='Piletina sa salatom'
            description='Sveža piletina sa kukuruzom i prelivom.'
            price={10}
          />
          <ProductCard
            image='/images/vejs-slikanpr1.jpeg'
            title='Doner'
            description='Ukusni doner sa specijalnim sosom.'
            price={8}
          />
          <ProductCard
            image='/images/vejs-slikanpr3.jpeg'
            title='Specijalitet sa roštilja'
            description='Roštilj mix sa prilozima.'
            price={15}
          />
        </section>
        <Gallery />
        <ContactForm />
        <Footer />
      </CartProvider>
    </>
  );
}
